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

declare const process: {
  env: {
    GEMINI_API_KEY?: string;
    GEMINI_MODEL?: string;
    GROQ_API_KEY?: string;
    GROQ_MODEL?: string;
  };
};

type ChatRequest = {
  method?: string;
  body?: unknown;
};

type ChatResponse = {
  status: (code: number) => {
    json: (body: unknown) => unknown;
  };
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

function getChatSignal() {
  return AbortSignal.timeout(CHAT_REQUEST_TIMEOUT_MS);
}

function readChatMessage(body: unknown): string {
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

async function createGeminiReply(apiKey: string, model: string, message: string): Promise<string> {
  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      signal: getChatSignal(),
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
    throw new Error(`Gemini request failed: ${errorText}`);
  }

  const data = (await response.json()) as GeminiResponse;
  const reply = data.candidates?.[0]?.content?.parts?.[0]?.text;

  if (typeof reply !== "string" || !reply.trim()) {
    throw new Error("Gemini returned an empty response.");
  }

  return reply.trim();
}

export default async function handler(req: ChatRequest, res: ChatResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  const geminiApiKey = process.env.GEMINI_API_KEY;
  const geminiModel = process.env.GEMINI_MODEL || "gemini-2.5-flash-lite";
  const groqApiKey = process.env.GROQ_API_KEY;
  const groqModel = process.env.GROQ_MODEL || "llama-3.3-70b-versatile";
  const message = readChatMessage(req.body);

  if (!message) {
    return res.status(400).json({ message: "Message is required." });
  }

  if (!geminiApiKey && !groqApiKey) {
    return res.status(500).json({
      message: "AI API key is missing. Set GEMINI_API_KEY or GROQ_API_KEY on the server.",
    });
  }

  try {
    if (geminiApiKey) {
      const reply = await createGeminiReply(geminiApiKey, geminiModel, message);
      return res.status(200).json({ reply });
    }

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${groqApiKey}`,
      },
      body: JSON.stringify({
        model: groqModel,
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
      return res.status(502).json({
        message: "Groq request failed.",
        details: errorText,
      });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content;

    if (typeof reply !== "string" || !reply.trim()) {
      return res.status(502).json({ message: "Groq returned an empty response." });
    }

    return res.status(200).json({ reply: reply.trim() });
  } catch (error) {
    return res.status(500).json({
      message: error instanceof Error ? error.message : "Unexpected server error.",
    });
  }
}
