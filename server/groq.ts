import { loadServerEnv } from "./env";

loadServerEnv();

const systemPrompt = [
  "You are Karthik S Gowda's personal portfolio assistant.",
  "Answer only professional questions related to Karthik's background, developer skills, data analyst skills, education, work, achievements, contact details, and professional goals.",
  "Use a polished, career-focused, recruiter-friendly tone.",
  "Important facts about Karthik:",
  "- Name: Karthik S Gowda",
  "- Based in Kengeri, Bangalore, India",
  "- BCA student at Jain Deemed-to-be University, Bangalore",
  "- CGPA: 8.58",
  "- Worked as a Full Stack Developer Intern at Salesine Technology Ltd, Bangalore from Dec 2024 to Mar 2025",
  "- Built apps with NestJS, Vue.js, React, JavaScript, Python, PHP, MySQL, MongoDB, Git and Android Studio",
  "- Also presents himself as a Data Analyst with skills in SQL, Excel, Power BI, Python data analysis, data cleaning, data visualization, dashboards, reporting, and insight communication",
  "- Interested in full-stack development, data analytics, user-focused products, and impactful technology solutions",
  "- Achievements include national-level karate player, commerce club president, and cricket team captain",
  "- Email: karthiksgowda28@gmail.com",
  "- LinkedIn: https://linkedin.com/in/karthisg",
  "- GitHub: https://github.com/Karthisgowda",
  "If asked something casual, inappropriate, or unrelated to Karthik's professional profile, politely say you can only answer professional portfolio questions.",
].join("\n");

const DEFAULT_GROQ_MODEL = "llama-3.3-70b-versatile";
const DEFAULT_GEMINI_MODEL = "gemini-2.5-flash-lite";
const CHAT_REQUEST_TIMEOUT_MS = 15000;

type GroqChatResponse = {
  choices?: Array<{
    message?: {
      content?: unknown;
    };
  }>;
};

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: unknown;
      }>;
    };
  }>;
};

export class GroqChatError extends Error {
  status: number;
  details?: string;

  constructor(status: number, message: string, details?: string) {
    super(message);
    this.name = "GroqChatError";
    this.status = status;
    this.details = details;
  }
}

async function createGeminiReply(message: string): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL || DEFAULT_GEMINI_MODEL;

  if (!apiKey) {
    throw new GroqChatError(500, "Gemini API key is missing. Set GEMINI_API_KEY on the server.");
  }

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: `${systemPrompt}\n\nUser question: ${message}` }],
          },
        ],
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 700,
        },
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new GroqChatError(502, "Gemini request failed.", errorText);
  }

  const data = (await response.json()) as GeminiResponse;
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (typeof reply !== "string" || !reply.trim()) {
    throw new GroqChatError(502, "Gemini returned an empty response.");
  }

  return reply.trim();
}

async function createGroqReply(message: string): Promise<string> {
  const apiKey = process.env.GROQ_API_KEY;
  const model = process.env.GROQ_MODEL || DEFAULT_GROQ_MODEL;

  if (!apiKey) {
    throw new GroqChatError(500, "AI API key is missing. Set GEMINI_API_KEY or GROQ_API_KEY on the server.");
  }

  const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model,
      temperature: 0.6,
      max_tokens: 700,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: message },
      ],
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new GroqChatError(502, "Groq request failed.", errorText);
  }

  const data = (await response.json()) as GroqChatResponse;
  const reply = data.choices?.[0]?.message?.content;

  if (typeof reply !== "string" || !reply.trim()) {
    throw new GroqChatError(502, "Groq returned an empty response.");
  }

  return reply.trim();
}

export function readChatMessage(body: unknown): string {
  if (typeof body === "string") {
    try {
      const parsed = JSON.parse(body) as { message?: unknown };
      return typeof parsed.message === "string" ? parsed.message.trim() : "";
    } catch {
      return "";
    }
  }

  if (body && typeof body === "object" && "message" in body) {
    const message = (body as { message?: unknown }).message;
    return typeof message === "string" ? message.trim() : "";
  }

  return "";
}

export async function createPortfolioReply(message: string): Promise<string> {
  if (!message) {
    throw new GroqChatError(400, "Message is required.");
  }

  if (process.env.GEMINI_API_KEY) {
    return createGeminiReply(message);
  }

  return createGroqReply(message);
}
