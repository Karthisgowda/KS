import { useEffect, useState } from "react";
import { Bot, Gauge, Loader2, MessageSquare, SendHorizonal, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const starterPrompts = [
  "Tell me about Karthik's background",
  "What data analyst skills does Karthik have?",
  "Why should someone hire Karthik professionally?",
];

const responseLimit = 3;
const responseCountKey = "karthik-ai-response-count";

export default function Chatbot() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi, I'm Karthik's professional AI portfolio assistant. Ask me about his developer profile, data analyst skills, internship, education, achievements, or contact details.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseCount, setResponseCount] = useState(0);

  useEffect(() => {
    const savedCount = Number(window.localStorage.getItem(responseCountKey) || "0");
    setResponseCount(Number.isFinite(savedCount) ? Math.min(savedCount, responseLimit) : 0);
  }, []);

  const hasReachedLimit = responseCount >= responseLimit;

  const sendMessage = async (rawMessage?: string) => {
    const message = (rawMessage ?? input).trim();
    if (!message || isLoading || hasReachedLimit) return;

    setMessages((prev) => [...prev, { role: "user", content: message }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.message || "Unable to fetch chat response.");
      }

      setMessages((prev) => [...prev, { role: "assistant", content: data.reply }]);
      const nextCount = Math.min(responseCount + 1, responseLimit);
      window.localStorage.setItem(responseCountKey, String(nextCount));
      setResponseCount(nextCount);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? `I couldn't answer right now: ${error.message}`
              : "I couldn't answer right now. Please try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="chatbot" className="py-24 section-appear">
      <div className="container mx-auto px-6">
        <div className="section-shell">
          <div className="section-kicker">
            <Sparkles size={16} />
            <span>AI Introduction</span>
          </div>
          <div className="section-heading">
            <div>
              <h2 className="section-title" data-testid="chatbot-title">Ask About Karthik</h2>
              <p className="section-description" data-testid="chatbot-description">
                A professional AI assistant for questions about Karthik&apos;s experience, skills, achievements, and career direction.
              </p>
            </div>
          </div>

          <div className="chatbot-limit-card">
            <div>
              <ShieldCheck size={18} />
              <span>Professional questions only</span>
            </div>
            <div>
              <Gauge size={18} />
              <span>{Math.max(responseLimit - responseCount, 0)} of {responseLimit} replies left on this device</span>
            </div>
          </div>

          <div className="chatbot-layout">
            <div className="chatbot-panel">
              <div className="chatbot-header">
                <div className="chatbot-avatar">
                  <Bot size={20} />
                </div>
                <div>
                  <h3>Portfolio Assistant</h3>
                  <p>Built to answer questions about Karthik S Gowda</p>
                </div>
              </div>

              <div className="chatbot-messages" data-testid="chatbot-messages">
                {messages.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`chat-bubble ${message.role === "user" ? "chat-bubble-user" : "chat-bubble-assistant"}`}
                    data-testid={`chat-message-${index}`}
                  >
                    {message.content}
                  </div>
                ))}
                {isLoading && (
                  <div className="chat-bubble chat-bubble-assistant chat-loading" data-testid="chatbot-loading">
                    <Loader2 size={16} className="animate-spin" />
                    <span>Thinking...</span>
                  </div>
                )}
              </div>

              <form
                className="chatbot-input-row"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage();
                }}
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={hasReachedLimit ? "Response limit reached for this device" : "Ask a professional question about development, data analysis, internship, or achievements..."}
                  className="chatbot-input"
                  data-testid="chatbot-input"
                  disabled={hasReachedLimit}
                />
                <Button
                  type="submit"
                  disabled={isLoading || hasReachedLimit}
                  className="chatbot-send"
                  data-testid="chatbot-send"
                >
                  <SendHorizonal size={16} />
                </Button>
              </form>
            </div>

            <div className="chatbot-sidecard">
              <div className="sidecard-icon">
                <MessageSquare size={18} />
              </div>
              <h3>Quick Prompts</h3>
              <p>Use one of these professional prompts. Each assistant answer counts toward the 3-response device limit.</p>
              <div className="prompt-list">
                {starterPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    type="button"
                    className="prompt-chip"
                    onClick={() => sendMessage(prompt)}
                    disabled={hasReachedLimit}
                    data-testid={`starter-${prompt.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
