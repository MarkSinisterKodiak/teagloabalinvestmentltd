import type { VercelRequest, VercelResponse } from "@vercel/node";

interface ApplicationData {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  role: string;
}

const COMPANY = {
  name: "Cremona Haulage Pty Ltd",
  displayName: "Cremona Haulage",
  phone: "0468 206 874",
  email: "haulagecremona@gmail.com",
  whatsapp: "+61468206874",
  location: "NSW, Australia",
  roles: [
    "Driver/Operator",
    "Truck Driver",
    "Logistics Coordinator",
    "Warehouse Operative",
    "Operations Manager",
  ],
};

async function generateApplicationReply(data: ApplicationData): Promise<{
  applicantReply: string;
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
            content: `You are the HR coordinator at ${COMPANY.name}, a reputable NSW-based haulage company. You process driver and staff applications.

Write TWO responses in JSON format:
1. "applicantReply" — A warm, professional email to the applicant (3-4 paragraphs). Thank them for applying, acknowledge their experience level and role interest. Explain the next steps (application review within 48 hrs, potential phone screening, then interview). Mention the company values safety, reliability, and teamwork. Sign off as "${COMPANY.displayName} HR Team".
2. "adminSummary" — A concise internal HR summary. Include: candidate name, contact, role applied for, experience level, candidate rating (STRONG/MODERATE/ENTRY-LEVEL based on experience and role match), recommended next step (Phone Screen/Interview/Review), and any flags.

IMPORTANT: Reply with ONLY valid JSON, no markdown.
Format: {"applicantReply": "...", "adminSummary": "..."}`,
          },
          {
            role: "user",
            content: `New application:
Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Experience: ${data.experience}
Role Interest: ${data.role}`,
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
      applicantReply: parsed.applicantReply || generateDefaultReply(data).applicantReply,
      adminSummary: parsed.adminSummary || generateDefaultReply(data).adminSummary,
    };
  } catch (err) {
    console.error("AI generation error:", err);
    return generateDefaultReply(data);
  }
}

function generateDefaultReply(data: ApplicationData): {
  applicantReply: string;
  adminSummary: string;
} {
  const expYears = data.experience || "Not specified";
  const isExperienced = /5-10|10\+/i.test(data.experience);
  const rating = isExperienced ? "STRONG" : /3-5/i.test(data.experience) ? "MODERATE" : "ENTRY-LEVEL";

  const applicantReply = `Dear ${data.fullName},

Thank you for your interest in joining ${COMPANY.displayName}! We've received your application for the ${data.role} position and appreciate you taking the time to apply.

With ${expYears} years of experience, your background looks promising. Our HR team will review your application within 48 hours. If shortlisted, we'll reach out to arrange a phone screening followed by an in-person interview.

At ${COMPANY.displayName}, we value safety, reliability, and teamwork above all. We're always looking for dedicated professionals who take pride in delivering freight safely and on time.

If you have any questions in the meantime, please don't hesitate to contact us:
Phone: ${COMPANY.phone}
Email: ${COMPANY.email}

We'll be in touch soon.

Warm regards,
${COMPANY.displayName} HR Team`;

  const adminSummary = `--- APPLICATION SUMMARY ---
Candidate: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Role: ${data.role}
Experience: ${expYears}
Rating: ${rating}
Recommended: ${isExperienced ? "Fast-track to Interview" : "Standard Phone Screen"}
Status: Awaiting review
---`;

  return { applicantReply, adminSummary };
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
    const data: ApplicationData = req.body;

    if (!data.fullName || !data.email || !data.phone) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const { applicantReply, adminSummary } = await generateApplicationReply(data);

    const adminEmail = process.env.VITE_ADMIN_EMAIL || COMPANY.email;

    // Send auto-reply to applicant
    try {
      await fetch(`https://formsubmit.co/ajax/${data.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `Application Received — ${COMPANY.displayName}`,
          _template: "box",
          message: applicantReply,
        }),
      });
    } catch (emailErr) {
      console.error("Applicant auto-reply email failed:", emailErr);
    }

    // Send admin summary
    try {
      await fetch(`https://formsubmit.co/ajax/${adminEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `[AI Review] Application: ${data.fullName} — ${data.role}`,
          _template: "box",
          message: adminSummary,
        }),
      });
    } catch (adminErr) {
      console.error("Admin summary email failed:", adminErr);
    }

    return res.status(200).json({
      success: true,
      applicantReply,
      adminSummary,
    });
  } catch (err) {
    console.error("Application review handler error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
