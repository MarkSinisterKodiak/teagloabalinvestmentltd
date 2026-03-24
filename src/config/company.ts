const company = {
  name: "TEA GLOBAL INVESTMENT LTD",
  displayName: "Tea Global Transport",
  companyNumber: "16694266",
  established: 2025,
  tagline: "Reliable Transport Solutions",
  phoneDisplay: import.meta.env.VITE_ADMIN_PHONE_DISPLAY || "",
  whatsappNumber: import.meta.env.VITE_ADMIN_WHATSAPP || "",
  email: import.meta.env.VITE_ADMIN_EMAIL || "",
  formSubmitHash: import.meta.env.VITE_FORMSUBMIT_HASH || "",
  address: ["21 Greenstead Road", "Colchester, England"],
  hero: {
    headline: "Fast & Reliable Transport",
    subtext: "UK-registered transport company delivering trusted haulage, logistics, and freight solutions nationwide and beyond.",
  },
};

export default company;
