import { createPortfolioReply, GroqChatError, readChatMessage } from "../server/groq";

type ChatRequest = {
  method?: string;
  body?: unknown;
};

type ChatResponse = {
  status: (code: number) => {
    json: (body: unknown) => unknown;
  };
};

export default async function handler(req: ChatRequest, res: ChatResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed." });
  }

  try {
    const reply = await createPortfolioReply(readChatMessage(req.body));
    return res.status(200).json({ reply });
  } catch (error) {
    const status = error instanceof GroqChatError ? error.status : 500;
    const message = error instanceof Error ? error.message : "Unexpected server error.";
    const details = error instanceof GroqChatError ? error.details : undefined;
    return res.status(status).json({ message, details });
  }
}
