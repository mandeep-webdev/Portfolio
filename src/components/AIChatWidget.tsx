import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Bot } from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [typingText, setTypingText] = useState("");

  const chatRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    "Your experience?",
    "Projects you worked on?",
    "Tech stack?",
  ];

  useEffect(() => {
    chatRef.current?.scrollTo({
      top: chatRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typingText]);

  const typeText = (text: string) => {
    let index = 0;
    setTypingText("");

    const interval = setInterval(() => {
      setTypingText((prev) => prev + text[index]);
      index++;

      if (index >= text.length) {
        clearInterval(interval);

        setMessages((prev) => [...prev, { role: "assistant", content: text }]);

        setTypingText("");
      }
    }, 25);
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setLoading(true);

    try {
      const res = await fetch(
        "https://portfolio-zwky.onrender.com/api/ai-chat",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: text }),
        },
      );

      if (!res.ok) throw new Error("API failed");

      const data = await res.json();

      setLoading(false);
      typeText(data.answer);
    } catch (err) {
      console.error(err);
      setLoading(false);
      typeText("⚠️ Something went wrong. Please try again.");
    }
  };

  const handleSend = () => {
    const currentQuery = query;
    setQuery("");
    sendMessage(currentQuery);
  };

  const handleSuggestionClick = (text: string) => {
    sendMessage(text);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-purple-600 hover:bg-purple-700 flex items-center justify-center shadow-lg shadow-purple-500/30 transition"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </button>

      {/* Chat Popup */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] h-[500px] bg-[#020617] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <p className="text-sm text-gray-300">Ask Mandeep AI 💬</p>
              <button onClick={() => setOpen(false)}>
                <X className="w-5 h-5 text-gray-400 hover:text-white" />
              </button>
            </div>

            {/* Messages */}
            <div ref={chatRef} className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.length === 0 && (
                <>
                  <p className="text-gray-500 text-xs text-center mt-6">
                    Curious about my work? Ask me anything 👇
                  </p>

                  {/* ✅ Suggested Questions */}
                  <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {suggestions.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSuggestionClick(item)}
                        className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-gray-300 hover:bg-purple-600 hover:text-white transition"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </>
              )}

              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex items-end gap-2 ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.role === "assistant" && (
                    <div className="w-8 h-8 rounded-full bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/40">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={`max-w-[75%] px-3 py-2 rounded-xl text-xs ${
                      msg.role === "user"
                        ? "bg-purple-600 text-white rounded-br-none"
                        : "bg-white/10 text-gray-200 rounded-bl-none"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {typingText && (
                <div className="flex justify-start">
                  <div className="bg-white/10 text-gray-200 px-3 py-2 rounded-xl text-xs rounded-bl-none">
                    {typingText}
                    <span className="animate-pulse">|</span>
                  </div>
                </div>
              )}

              {loading && !typingText && (
                <p className="text-purple-400 text-sm animate-pulse">
                  AI is thinking...
                </p>
              )}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-white/10 flex gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about my experience, projects, or skills..."
                className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/5 border border-white/10 text-white focus:outline-none"
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <button
                onClick={handleSend}
                className="px-3 py-2 bg-purple-600 text-white text-sm rounded-lg"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
