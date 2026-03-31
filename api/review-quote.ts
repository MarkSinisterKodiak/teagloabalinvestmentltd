import type { VercelRequest, VercelResponse } from "@vercel/node";

interface QuoteRequest {
  fullName: string;
  email: string;
  phone: string;
  serviceType: string;
  pickupLocation?: string;
  deliveryLocation?: string;
  cargoDescription?: string;
  message?: string;
}

const COMPANY = {
  name: "Cremona Haulage Pty Ltd",
  displayName: "Cremona Haulage",
  phone: "0468 206 874",
  email: "haulagecremona@gmail.com",
  whatsapp: "+61468206874",
  location: "NSW, Australia",
  services: [
    "General Haulage",
    "Commercial Transport",
    "Freight Services",
    "Interstate Haulage",
    "Insured Transport",
  ],
};

async function generateQuoteReply(data: QuoteRequest): Promise<{
  clientReply: string;
  adminSummary: string;
}> {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return generateDefaultReply(data);
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        temperature: 0.7,
        messages: [
          {
            role: "system",
            content: `You are the operations coordinator at ${COMPANY.name}, a trusted haulage and freight company based in NSW, Australia. You handle quote requests professionally and warmly.

Write TWO responses in JSON format:
1. "clientReply" — A personalised email to the client (3-4 paragraphs). Be professional, friendly, and informative. Reference their specific cargo, route, and service type. Mention that a detailed quote will follow within 24 hours. Include company contact details. Sign off as "${COMPANY.displayName} Operations Team".
2. "adminSummary" — A concise internal ops summary for the admin team. Include: client name, contact details, service requested, route (if provided), cargo details, urgency assessment (check for urgent keywords like "ASAP", "urgent", "same day", "express"), recommended vehicle type, and priority level (HIGH/MEDIUM/LOW).

IMPORTANT: Reply with ONLY valid JSON, no markdown.
Format: {"clientReply": "...", "adminSummary": "..."}`,
          },
          {
            role: "user",
            content: `New quote request:
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.serviceType}
Pickup: ${data.pickupLocation || "Not specified"}
Delivery: ${data.deliveryLocation || "Not specified"}
Cargo: ${data.cargoDescription || "Not specified"}
Additional Notes: ${data.message || "None"}`,
          },
        ],
      }),
    });

    if (!response.ok) {
      console.error("OpenAI API error:", response.status);
      return generateDefaultReply(data);
    }

    const result = await response.json();
    const content = result.choices?.[0]?.message?.content?.trim();

    if (!content) {
      return generateDefaultReply(data);
    }

    const parsed = JSON.parse(content);
    return {
      clientReply: parsed.clientReply || generateDefaultReply(data).clientReply,
      adminSummary: parsed.adminSummary || generateDefaultReply(data).adminSummary,
    };
  } catch (err) {
    console.error("AI generation error:", err);
    return generateDefaultReply(data);
  }
}

function generateDefaultReply(data: QuoteRequest): {
  clientReply: string;
  adminSummary: string;
} {
  const isUrgent = /urgent|asap|same.?day|express|immediate|rush/i.test(
    `${data.serviceType} ${data.message || ""} ${data.cargoDescription || ""}`
  );

  const clientReply = `Dear ${data.fullName},

Thank you for reaching out to ${COMPANY.displayName} for your ${data.serviceType.toLowerCase()} needs.${data.pickupLocation && data.deliveryLocation ? ` We've noted your route from ${data.pickupLocation} to ${data.deliveryLocation}.` : ""}${data.cargoDescription ? ` We understand you need transport for: ${data.cargoDescription}.` : ""}

Our team is reviewing your request and will prepare a tailored quote for you within 24 hours.${isUrgent ? " We've flagged your request as urgent and will prioritise it accordingly." : ""}

In the meantime, feel free to contact us directly:
Phone: ${COMPANY.phone}
WhatsApp: ${COMPANY.whatsapp}
Email: ${COMPANY.email}

We look forward to working with you.

Kind regards,
${COMPANY.displayName} Operations Team`;

  const adminSummary = `--- QUOTE REQUEST SUMMARY ---
Client: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Service: ${data.serviceType}
Route: ${data.pickupLocation || "TBD"} → ${data.deliveryLocation || "TBD"}
Cargo: ${data.cargoDescription || "Not specified"}
Notes: ${data.message || "None"}
Priority: ${isUrgent ? "HIGH — URGENT keywords detected" : "STANDARD"}
Status: Awaiting quote preparation
---`;

  return { clientReply, adminSummary };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const data: QuoteRequest = req.body;

    if (!data.fullName || !data.email || !data.phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { clientReply, adminSummary } = await generateQuoteReply(data);

    // Send auto-reply to client via FormSubmit
    const adminEmail = process.env.VITE_ADMIN_EMAIL || COMPANY.email;

    try {
      await fetch(`https://formsubmit.co/ajax/${data.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Your Quote Request — ${COMPANY.displayName}`,
          _template: "box",
          message: clientReply,
        }),
      });
    } catch (emailErr) {
      console.error("Client auto-reply email failed:", emailErr);
    }

    // Send admin summary to admin
    try {
      await fetch(`https://formsubmit.co/ajax/${adminEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[AI Analysis] Quote: ${data.fullName} — ${data.serviceType}`,
          _template: "box",
          message: adminSummary,
        }),
      });
    } catch (adminErr) {
      console.error("Admin summary email failed:", adminErr);
    }

    return res.status(200).json({
      success: true,
      clientReply,
      adminSummary,
    });
  } catch (err) {
    console.error("Quote review handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
