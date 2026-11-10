import { useState, useRef, useEffect } from "react";
import {
  Bot,
  X,
  Send,
  Sparkles,
  RotateCcw,
  ArrowRight,
  ExternalLink,
  Download,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { sendChatMessage } from "@/services/aiAssistantService";

const initialMessages = [
  {
    id: "welcome",
    sender: "assistant",
    text: `Hi there! 👋 I'm **Tebibu's AI Portfolio Assistant**.\n\nAsk me anything about his technical stack, case studies, or hiring availability!`,
    actions: [
      { label: "🚀 Top Projects", action: "scroll-projects" },
      { label: "🛠️ Tech Stack", action: "scroll-skills" },
      { label: "📄 Download CV", action: "download-cv", href: "/cv.pdf" },
      { label: "📫 Contact Tebibu", action: "scroll-contact" },
    ],
  },
];

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasUnread, setHasUnread] = useState(true);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setHasUnread(false);
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen, messages, isTyping]);

  const handleActionClick = (actionItem) => {
    if (actionItem.action === "scroll-projects") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionItem.action === "scroll-skills") {
      document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionItem.action === "scroll-about") {
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionItem.action === "scroll-contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else if (actionItem.action === "download-cv") {
      const link = document.createElement("a");
      link.href = "/cv.pdf";
      link.download = "Tebibu_Solomon_CV.pdf";
      link.click();
    } else if (actionItem.href) {
      window.open(actionItem.href, "_blank", "noopener,noreferrer");
    }
  };

  const handleSend = async (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isTyping) return;

    const userMsg = {
      id: Date.now().toString(),
      sender: "user",
      text,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const assistantReply = await sendChatMessage([...messages, userMsg]);

      // Small natural delay for realism
      await new Promise((res) => setTimeout(res, 400));

      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "assistant",
          text: assistantReply.text,
          actions: assistantReply.actions || [],
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: "assistant",
          text: "I'm having trouble processing that right now. Feel free to contact Tebibu directly at tebibu211@gmail.com!",
          actions: [{ label: "Open Contact Form", action: "scroll-contact" }],
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const resetChat = () => {
    setMessages(initialMessages);
  };

  // Quick prompt presets
  const quickPrompts = [
    "Tell me about your top projects",
    "What is your tech stack?",
    "Are you open to internships?",
    "How can I contact Tebibu?",
  ];

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
        {/* Helper Notification Bubble */}
        {!isOpen && hasUnread && (
          <button
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-primary/40 text-foreground text-xs font-medium shadow-lg hover:border-primary transition-all cursor-pointer animate-bounce"
            aria-label="Open AI Assistant"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Ask Tebibu's AI Assistant</span>
          </button>
        )}

        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={cn(
            "h-14 w-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-xl cursor-pointer relative",
            isOpen
              ? "bg-secondary text-foreground hover:bg-secondary/80 scale-95"
              : "bg-primary text-primary-foreground hover:scale-105 shadow-[0_0_20px_rgba(139,92,246,0.6)]"
          )}
          aria-label={isOpen ? "Close AI Chatbot" : "Open AI Chatbot"}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <>
              <Bot className="h-7 w-7" />
              {hasUnread && (
                <span className="absolute top-0 right-0 h-3.5 w-3.5 bg-emerald-400 border-2 border-background rounded-full animate-pulse" />
              )}
            </>
          )}
        </button>
      </div>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-4 sm:right-6 w-[92vw] sm:w-[400px] h-[540px] max-h-[82vh] bg-card/95 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden text-left animate-fade-in"
          role="dialog"
          aria-label="Tebibu's AI Assistant Window"
        >
          {/* Header */}
          <div className="p-3.5 px-4 bg-secondary/80 border-b border-border flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="relative p-2 rounded-xl bg-primary/10 text-primary border border-primary/20">
                <Bot className="h-5 w-5" />
                <span className="absolute bottom-0.5 right-0.5 h-2 w-2 bg-emerald-400 rounded-full" />
              </div>
              <div>
                <h3 className="font-semibold text-sm text-foreground flex items-center gap-1.5">
                  Tebibu's Assistant
                  <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-primary/20 text-primary font-medium">
                    AI
                  </span>
                </h3>
                <span className="text-[11px] text-muted-foreground">
                  Online • Ready to help
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={resetChat}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
                aria-label="Reset conversation"
                title="Restart chat"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-pointer"
                aria-label="Minimize chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex flex-col",
                  msg.sender === "user" ? "items-end" : "items-start"
                )}
              >
                <div
                  className={cn(
                    "max-w-[85%] rounded-2xl px-4 py-2.5 leading-relaxed whitespace-pre-wrap break-words",
                    msg.sender === "user"
                      ? "bg-primary text-primary-foreground rounded-br-xs shadow-md"
                      : "bg-secondary/70 text-foreground border border-border/80 rounded-bl-xs"
                  )}
                >
                  {msg.text}
                </div>

                {/* Optional Interactive Actions */}
                {msg.actions && msg.actions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2 max-w-[90%]">
                    {msg.actions.map((act) => (
                      <button
                        key={act.label}
                        onClick={() => handleActionClick(act)}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-card border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all cursor-pointer shadow-xs"
                      >
                        {act.action === "download-cv" ? (
                          <Download size={11} />
                        ) : act.href ? (
                          <ExternalLink size={11} />
                        ) : (
                          <ArrowRight size={11} />
                        )}
                        <span>{act.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-secondary/60 text-muted-foreground w-fit border border-border">
                <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]" />
                <span className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]" />
                <span className="h-2 w-2 rounded-full bg-primary animate-bounce" />
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions (if only 1 or 2 messages) */}
          {messages.length <= 2 && (
            <div className="px-3 py-1.5 flex gap-1.5 overflow-x-auto no-scrollbar border-t border-border/40 bg-secondary/30">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-lg text-[11px] whitespace-nowrap bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Box */}
          <div className="p-3 bg-secondary/60 border-t border-border">
            <div className="flex items-center gap-2 bg-background border border-input rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-primary">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Tebibu's work, stack..."
                className="flex-1 bg-transparent border-0 outline-none text-xs sm:text-sm text-foreground placeholder:text-muted-foreground"
                aria-label="Ask AI Assistant a question"
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputValue.trim() || isTyping}
                className="p-1.5 rounded-lg bg-primary text-primary-foreground disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105 active:scale-95 transition-all cursor-pointer"
                aria-label="Send message"
              >
                <Send size={15} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

