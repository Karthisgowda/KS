import type { Express } from "express";
import { createServer, type Server } from "http";
import { createPortfolioReply, GroqChatError, readChatMessage } from "./groq";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/chat", async (req, res) => {
    try {
      const reply = await createPortfolioReply(readChatMessage(req.body));
      return res.json({ reply });
    } catch (error) {
      const status = error instanceof GroqChatError ? error.status : 500;
      const message = error instanceof Error ? error.message : "Unexpected server error.";
      const details = process.env.NODE_ENV === "production" ? undefined : error instanceof GroqChatError ? error.details : undefined;
      return res.status(status).json({ message, details });
    }
  });

  void storage;
  const httpServer = createServer(app);

  return httpServer;
}
