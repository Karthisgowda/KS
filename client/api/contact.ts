const recipientEmail = "karthiksgowda28@gmail.com";
const siteUrl = "https://ks-kohl.vercel.app";

type ContactRequest = {
  method?: string;
  body?: {
    name?: unknown;
    email?: unknown;
    subject?: unknown;
    message?: unknown;
  };
};

type ContactResponse = {
  status: (code: number) => {
    json: (body: unknown) => unknown;
  };
};

const toCleanString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export default async function handler(req: ContactRequest, res: ContactResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const name = toCleanString(req.body?.name);
  const email = toCleanString(req.body?.email);
  const subject = toCleanString(req.body?.subject) || "New portfolio contact message";
  const message = toCleanString(req.body?.message);

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required." });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Origin: siteUrl,
        Referer: `${siteUrl}/`,
      },
      body: JSON.stringify({
        name,
        email,
        _replyto: email,
        _subject: `Portfolio contact: ${subject}`,
        message,
        _template: "table",
        _captcha: "false",
      }),
    });

    const data = await response.json().catch(() => null);

    if (!response.ok || data?.success === "false") {
      return res.status(502).json({
        message: data?.message || "Email service could not send the message right now.",
        details: data,
      });
    }

    return res.status(200).json({ message: "Message sent to Karthik's email." });
  } catch (error) {
    return res.status(500).json({
      message: error instanceof Error ? error.message : "Unexpected email delivery error.",
    });
  }
}
