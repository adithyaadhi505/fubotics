import React, { useState, useEffect, useRef } from 'react';

/**
 * ChatBot Component - Kiro
 * Simple menu-driven chatbot
 */

interface ChatMessage {
  id: number;
  text: string;
  isBot: boolean;
  options?: string[];
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hi! I'm Kiro. How can I help?",
      isBot: true,
      options: [
        "Services",
        "About Us",
        "Contact",
        "Pricing",
      ],
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const responses: { [key: string]: { text: string; options?: string[] } } = {
    "Services": {
      text: "We offer:\n• Facade Cleaning Robots\n• Duct Cleaning Services",
      options: ["Facade Details", "Duct Details", "Menu"],
    },
    "Facade Details": {
      text: "AI-powered robots for safe building cleaning. Autonomous navigation for high-rises.",
      options: ["Contact", "Menu"],
    },
    "Duct Details": {
      text: "Automated duct inspection for better air quality. Real-time monitoring.",
      options: ["Contact", "Menu"],
    },
    "About Us": {
      text: "Fubotics builds intelligent robots to keep people safe and cities clean.",
      options: ["Services", "Contact", "Menu"],
    },
    "Contact": {
      text: "Email: hello@fubotics.com\nPhone: +91 xxxxx xxxxx\nLocation: Bengaluru",
      options: ["Services", "Menu"],
    },
    "Pricing": {
      text: "Custom pricing based on your needs. Contact us for a quote!",
      options: ["Contact", "Menu"],
    },
    "Menu": {
      text: "What else can I help with?",
      options: [
        "Services",
        "About Us",
        "Contact",
        "Pricing",
      ],
    },
  };

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: option,
      isBot: false,
    };

    // Get bot response
    const response = responses[option];
    const botMessage: ChatMessage = {
      id: messages.length + 2,
      text: response.text,
      isBot: true,
      options: response.options,
    };

    setMessages([...messages, userMessage, botMessage]);
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: "Hi! I'm Kiro. How can I help?",
        isBot: true,
        options: [
          "Services",
          "About Us",
          "Contact",
          "Pricing",
        ],
      },
    ]);
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-10 z-50 w-14 h-14 bg-gradient-to-r from-accent-400 to-accent-300 text-bg-900 rounded-full flex items-center justify-center shadow-lg hover:shadow-glow-tan-lg transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-40 right-10 z-50 w-96 h-[500px] glass rounded-2xl border border-accent-700 shadow-glass-lg flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-accent-400 to-accent-300 text-bg-900 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-bg-900/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold">Kiro</h3>
                <p className="text-xs opacity-90">Your Fubotics Assistant</p>
              </div>
            </div>
            <button
              onClick={resetChat}
              className="text-bg-900 hover:bg-bg-900/10 rounded-lg p-2 transition-colors"
              title="Reset chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-bg-900/50">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[80%] ${message.isBot ? '' : 'order-2'}`}>
                  <div
                    className={`rounded-2xl p-3 ${
                      message.isBot
                        ? 'bg-accent-800/30 text-accent-100 rounded-tl-none'
                        : 'bg-gradient-to-r from-accent-400 to-accent-300 text-bg-900 rounded-tr-none'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                  </div>

                  {/* Options */}
                  {message.options && (
                    <div className="mt-2 space-y-2">
                      {message.options.map((option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleOptionClick(option)}
                          className="w-full text-left px-4 py-2 bg-accent-800/20 hover:bg-accent-800/40 text-accent-100 text-sm rounded-lg transition-all duration-200 border border-accent-700/30 hover:border-accent-300"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-accent-700/30 bg-bg-800/50">
            <p className="text-xs text-accent-300 text-center">
              Click options above to continue
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
