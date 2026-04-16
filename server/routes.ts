import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

const contactRecipientEmail = "karthiksgowda28@gmail.com";
const toCleanString = (value: unknown) => (typeof value === "string" ? value.trim() : "");

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
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
      const response = await fetch(`https://formsubmit.co/ajax/${contactRecipientEmail}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
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

      if (!response.ok) {
        return res.status(502).json({
          message: "Email service could not send the message right now.",
          details: data,
        });
      }

      return res.json({ message: "Message sent to Karthik's email." });
    } catch (error) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : "Unexpected email delivery error.",
      });
    }
  });

  app.post("/api/chat", async (req, res) => {
    const apiKey = process.env.GROQ_API_KEY;
    const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";

    if (!message) {
      return res.status(400).json({ message: "Message is required." });
    }

    if (!apiKey) {
      return res.status(500).json({
        message: "Groq API key is missing. Set GROQ_API_KEY on the server.",
      });
    }

    const systemPrompt = [
      "You are Karthik S Gowda's personal portfolio assistant.",
      "Answer only questions related to Karthik's background, skills, education, work, achievements, contact details, and professional goals.",
      "Be warm, confident, and concise.",
      "Important facts about Karthik:",
      "- Name: Karthik S Gowda",
      "- Based in Kengeri, Bangalore, India",
      "- BCA student at Jain Deemed-to-be University, Bangalore",
      "- CGPA: 8.58",
      "- Worked as a Full Stack Developer Intern at Salesine Technology Ltd, Bangalore from Dec 2024 to Mar 2025",
      "- Built apps with NestJS, Vue.js, React, JavaScript, Python, PHP, MySQL, MongoDB, Git and Android Studio",
      "- Interested in full-stack development, user-focused products, and impactful technology solutions",
      "- Achievements include national-level karate player, commerce club president, and cricket team captain",
      "- Email: karthiksgowda28@gmail.com",
      "- LinkedIn: https://linkedin.com/in/karthisg",
      "- GitHub: https://github.com/Karthisgowda",
      "If asked something unrelated, politely redirect the conversation back to Karthik's profile and work.",
    ].join("\n");

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          temperature: 0.6,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message },
          ],
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        return res.status(502).json({
          message: "Groq request failed.",
          details: errorText,
        });
      }

      const data = await response.json();
      const reply = data?.choices?.[0]?.message?.content;

      if (!reply) {
        return res.status(502).json({ message: "Groq returned an empty response." });
      }

      return res.json({ reply });
    } catch (error) {
      return res.status(500).json({
        message: error instanceof Error ? error.message : "Unexpected server error.",
      });
    }
  });

  void storage;
  const httpServer = createServer(app);

  return httpServer;
}
