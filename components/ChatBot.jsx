"use client";
import React, { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { MessageSquare, X, Send, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  const lenis = useLenis();

  useEffect(() => {
    if (isOpen) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "unset";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "unset";
    };
  }, [isOpen, lenis]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.content },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Direct WhatsApp us!" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-[9998]"
          />
        )}
      </AnimatePresence>

      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-montserrat">
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="bg-[#FDFCF9] dark:bg-[#1a1a1a] w-[350px] sm:w-[380px] h-[520px] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-800 mb-4"
            >
              {/* Header */}
              <div className="h-[70px] bg-gradient-to-r from-[#000B25] to-[#2563eb] p-5 text-white flex justify-between items-center shrink-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-md border border-white/20">
                    <span className="font-playfair font-bold text-lg">B</span>
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-sm tracking-wide">
                      BizGrow Expert
                    </h3>
                    <p className="text-[10px] text-blue-100 uppercase tracking-widest">
                      Active Now
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="hover:bg-white/10 p-1.5 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Chat Body - THE FINAL FIX (Overscroll Contain) */}
              <div className="flex-1 min-h-0 relative" data-lenis-prevent>
                <div
                  ref={scrollRef}
                  // style me 'overscrollBehavior: contain' add kiya hai
                  style={{ overscrollBehavior: "contain" }}
                  className="absolute inset-0 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-[#FDFCF9] dark:bg-[#121212]"
                >
                  {messages.length === 0 && (
                    <div className="flex flex-col items-center justify-center min-h-full text-center space-y-2 opacity-50 px-6">
                      <p className="font-playfair italic text-lg text-[#1f2937] dark:text-white">
                        "Transforming clicks into customers."
                      </p>
                    </div>
                  )}

                  {messages.map((m, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        m.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[85%] p-3.5 rounded-2xl text-[13px] leading-relaxed shadow-sm ${
                          m.role === "user"
                            ? "bg-[#2563eb] text-white rounded-tr-none"
                            : "bg-white dark:bg-[#1e1e1e] text-[#1f2937] dark:text-gray-200 rounded-tl-none border border-gray-100 dark:border-gray-800"
                        }`}
                      >
                        {/* PURANA: {m.content} */}
                        {/* NAYA: Markdown rendering with custom styling */}
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <ReactMarkdown>{m.content}</ReactMarkdown>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="text-[10px] text-blue-500 animate-pulse ml-2 font-bold tracking-widest uppercase">
                      Thinking...
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 bg-white dark:bg-[#1a1a1a] border-t border-gray-100 dark:border-gray-800 shrink-0">
                <a
                  href="https://wa.me/923XXXXXXXXX"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-[#057e32] text-white text-[11px] font-bold py-3 rounded-2xl mb-3 hover:brightness-110 transition-all shadow-lg"
                >
                  <Phone size={14} /> BOOK A STRATEGY CALL
                </a>

                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    className="flex-1 bg-gray-50 dark:bg-[#252525] rounded-xl px-4 py-2.5 text-sm outline-none border border-gray-200 dark:border-gray-700 text-[#1f2937] dark:text-white"
                    placeholder="Ask us anything..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button
                    type="submit"
                    className="bg-[#2563eb] text-white p-3 rounded-xl hover:bg-blue-700 shadow-md"
                  >
                    <Send size={18} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-[#000B25] to-[#2563eb] border border-white/20 text-white p-4 rounded-2xl shadow-xl z-[9999]"
        >
          {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
        </motion.button>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 10px;
        }
        .dark .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #333;
        }
      `}</style>
    </>
  );
}
