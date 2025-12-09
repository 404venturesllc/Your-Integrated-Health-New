import { useState, useEffect, useRef } from "react";
import { X, MessageCircle, Send } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
  button?: {
    title: string;
    url: string;
  };
}

// Helper function to generate 4-digit visitor ID
const generateVisitorId = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}`);
  const [visitorId] = useState(() => generateVisitorId());
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Load configuration from environment variables
  const WEBHOOK_URL = import.meta.env.VITE_CHATBOT_WEBHOOK_URL || "https://n8n.srv865926.hstgr.cloud/webhook/SurfBot";
  const ORGANIZATION_ID = import.meta.env.VITE_ORGANIZATION_ID || "your-integrative-health-001";
  const BOOKING_URL = import.meta.env.VITE_BOOKING_URL || "https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368";
  const CHECKOUT_URL = import.meta.env.VITE_CHECKOUT_URL || "https://www.yourintegrativehealth.com/zrt-hormone-test";
  const SUPPORT_PHONE = import.meta.env.VITE_SUPPORT_PHONE || "714-586-8872";
  const SUPPORT_EMAIL = import.meta.env.VITE_SUPPORT_EMAIL || "team@yourintegrativehealth.com";

  // Saliva test landing page URL
  const SALIVA_TEST_URL = "https://www.yourintegrativehealth.com/group-program";

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Add welcome message when chat first opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 'welcome',
          type: 'bot',
          content: "Hi! I'm here to help answer questions about Your Integrative Health. How can I assist you today?",
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  const handleSendMessage = async () => {
    const trimmedMessage = inputMessage.trim();
    if (!trimmedMessage || isTyping) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: trimmedMessage,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: trimmedMessage,
          sessionId: sessionId,
          visitorId: visitorId,
          organizationId: ORGANIZATION_ID
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const rawData = await response.json();

      // Handle array response from n8n - extract the nested output object
      let data;
      if (Array.isArray(rawData)) {
        data = rawData[0]?.output;
      } else {
        data = rawData;
      }

      // Get the actual text - check if output is string or nested object
      let responseText;
      if (typeof data?.output === 'string') {
        responseText = data.output;
      } else if (typeof data?.output === 'object' && data?.output?.output) {
        responseText = data.output.output;
      } else {
        responseText = data?.response || data?.message || "I'm sorry, I couldn't process that. Please try again.";
      }

      // Ensure responseText is a string
      if (typeof responseText !== 'string') {
        responseText = String(responseText);
      }

      // Replace [CHECKOUT_URL] placeholder with actual URL from environment
      responseText = responseText.replace(/\[CHECKOUT_URL\]/g, CHECKOUT_URL);

      // Get button data - check multiple possible locations and showButton flag
      let buttonData = data?.button;
      let showButton = data?.showButton;

      if (!buttonData && typeof data?.output === 'object') {
        buttonData = data.output.button;
        showButton = data.output.showButton;
      }

      // Check if response mentions hormone test/saliva test
      const salivaTestPhrases = [
        'hormone test',
        'saliva test',
        'zrt test',
        'hormone panel',
        'test your hormones',
        'hormone testing',
        'saliva testing',
        'lab test',
        'diagnostic test'
      ];
      const shouldShowSalivaTestButton = salivaTestPhrases.some(phrase =>
        responseText.toLowerCase().includes(phrase)
      );

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: responseText,
        timestamp: new Date(),
        button: (showButton && buttonData && buttonData !== null && buttonData.title && buttonData.url) ? {
          title: buttonData.title,
          url: buttonData.url
        } : undefined
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        type: 'system',
        content: "Sorry, I'm having trouble connecting. Please try again or contact us directly.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleQuickPrompt = async (prompt: string) => {
    if (isTyping) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: prompt,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: prompt,
          sessionId: sessionId,
          visitorId: visitorId,
          organizationId: ORGANIZATION_ID
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const rawData = await response.json();

      // Handle array response from n8n - extract the nested output object
      let data;
      if (Array.isArray(rawData)) {
        data = rawData[0]?.output;
      } else {
        data = rawData;
      }

      // Get the actual text - check if output is string or nested object
      let responseText;
      if (typeof data?.output === 'string') {
        responseText = data.output;
      } else if (typeof data?.output === 'object' && data?.output?.output) {
        responseText = data.output.output;
      } else {
        responseText = data?.response || data?.message || "I'm sorry, I couldn't process that. Please try again.";
      }

      // Ensure responseText is a string
      if (typeof responseText !== 'string') {
        responseText = String(responseText);
      }

      // Replace [CHECKOUT_URL] placeholder with actual URL from environment
      responseText = responseText.replace(/\[CHECKOUT_URL\]/g, CHECKOUT_URL);

      // Get button data - check multiple possible locations and showButton flag
      let buttonData = data?.button;
      let showButton = data?.showButton;

      if (!buttonData && typeof data?.output === 'object') {
        buttonData = data.output.button;
        showButton = data.output.showButton;
      }

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        type: 'bot',
        content: responseText,
        timestamp: new Date(),
        button: (showButton && buttonData && buttonData !== null && buttonData.title && buttonData.url) ? {
          title: buttonData.title,
          url: buttonData.url
        } : undefined
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: `error-${Date.now()}`,
        type: 'system',
        content: "Sorry, I'm having trouble connecting. Please try again or contact us directly.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const quickPrompts = [
    "What services do you offer?",
    "Tell me about hormone testing",
    "How does the program work?",
    "I'd like to book a consultation"
  ];

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#61a94e] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95 hover:scale-105 cursor-pointer"
          aria-label="Open chat"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            width: '72px',
            height: '72px',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MessageCircle style={{ width: '35px', height: '35px' }} strokeWidth={2} />
        </button>
      )}

      {/* Chat Widget Window - iMessage Style */}
      {isOpen && (
        <div
          className="transition-all duration-500 flex flex-col animate-slideInUp"
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            width: '420px',
            maxWidth: 'calc(100vw - 32px)',
            height: '680px',
            maxHeight: 'calc(100vh - 32px)',
            opacity: 1,
            zIndex: 999999,
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          {/* Header - iMessage Style */}
          <div
            className="px-5 py-4 flex items-center justify-between flex-shrink-0"
            style={{
              background: 'linear-gradient(135deg, #236189 0%, #78A992 100%)',
              minHeight: '70px',
              borderTopLeftRadius: '20px',
              borderTopRightRadius: '20px'
            }}
          >
            <div className="flex items-center gap-3 flex-1">
              <div className="w-12 h-12 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7" style={{ color: '#ffffff' }} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-[17px] text-white">
                  Chat Support
                </h3>
                <p className="text-[12px] text-white/90">
                  Powered by <a href="https://www.summitdesigns.co/" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-white/80 transition-colors cursor-pointer">Summit Designs</a>
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              aria-label="Close chat"
              title="Close chat"
              type="button"
            >
              <X className="w-5 h-5 text-white" strokeWidth={2} />
            </button>
          </div>

          {/* Messages Area - iMessage Style */}
          <div
            className="flex-1 overflow-y-auto px-4 py-4 space-y-2"
            style={{
              backgroundColor: '#ffffff',
              scrollbarWidth: 'none',
              minHeight: 0,
              overflowY: 'auto'
            }}
          >
            {/* Timestamp header */}
            <div className="flex justify-center mb-2">
              <span className="text-[11px] text-[#86868b] font-medium">
                {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
              </span>
            </div>

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-messageSlide mb-2`}
              >
                {/* Bot Message - Gray bubble */}
                {message.type === 'bot' && (
                  <div className="flex flex-col items-start gap-2 max-w-[80%]">
                    <div
                      className="px-4 py-2.5 text-[15px] leading-[1.5] text-[#000000]"
                      style={{
                        backgroundColor: '#e5e5ea',
                        borderTopLeftRadius: '16px',
                        borderTopRightRadius: '16px',
                        borderBottomLeftRadius: '4px',
                        borderBottomRightRadius: '16px',
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        paddingLeft: '14px',
                        paddingRight: '14px'
                      }}
                    >
                      {message.content}
                    </div>
                    {message.button && message.button.title && message.button.url && (
                      <a
                        href={message.button.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cursor-pointer"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '8px',
                          padding: '10px 16px',
                          backgroundColor: '#007AFF',
                          color: '#ffffff',
                          borderRadius: '20px',
                          fontSize: '14px',
                          fontWeight: '500',
                          fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          textDecoration: 'none',
                          transition: 'background-color 0.2s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0051D5'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007AFF'}
                      >
                        <span>{message.button.title}</span>
                        <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    )}
                  </div>
                )}

                {/* User Message - Blue bubble */}
                {message.type === 'user' && (
                  <div
                    className="px-4 py-2.5 text-[15px] leading-[1.5] max-w-[80%]"
                    style={{
                      backgroundColor: '#007AFF',
                      color: '#ffffff',
                      borderTopLeftRadius: '16px',
                      borderTopRightRadius: '16px',
                      borderBottomLeftRadius: '16px',
                      borderBottomRightRadius: '4px',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      paddingLeft: '14px',
                      paddingRight: '14px'
                    }}
                  >
                    {message.content}
                  </div>
                )}

                {/* System Message */}
                {message.type === 'system' && (
                  <div className="w-full flex justify-center">
                    <div
                      className="px-3 py-2 text-[13px] bg-[#f2f2f7] text-[#86868b] rounded-[12px] text-center max-w-[85%]"
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}
                    >
                      {message.content}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Quick Prompt Buttons - Show only when just the welcome message */}
            {messages.length === 1 && messages[0].id === 'welcome' && !isTyping && (
              <div className="flex flex-col gap-2 mt-3 animate-fadeIn">
                {quickPrompts.map((prompt, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickPrompt(prompt)}
                    className="w-full px-4 py-3 text-left text-[14px] bg-[#f2f2f7] text-[#000000] rounded-[12px] hover:bg-[#e5e5ea] active:bg-[#d1d1d6] transition-colors"
                    style={{
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                      border: '1px solid #e5e5ea'
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Typing Indicator - iMessage Style */}
            {isTyping && (
              <div className="flex justify-start animate-messageSlide mb-1">
                <div className="px-4 py-3 rounded-[18px] bg-[#e5e5ea]">
                  <div className="flex gap-1.5 items-center">
                    <span className="typing-dot-imessage" style={{ animationDelay: '0ms' }} />
                    <span className="typing-dot-imessage" style={{ animationDelay: '200ms' }} />
                    <span className="typing-dot-imessage" style={{ animationDelay: '400ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area - iMessage Style */}
          <div className="px-3 py-2.5 border-t border-[#e5e5ea] flex-shrink-0" style={{ backgroundColor: '#f8f8f8' }}>
            <div className="flex gap-2 items-center bg-white rounded-[20px] px-3 py-2 border border-[#e5e5ea]">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                disabled={isTyping}
                className="flex-1 bg-transparent focus:outline-none text-[15px] disabled:cursor-not-allowed placeholder:text-[#86868b]"
                style={{
                  fontSize: '16px',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                  padding: '6px 0'
                }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: inputMessage.trim() && !isTyping ? '#007AFF' : '#e5e5ea',
                  color: inputMessage.trim() && !isTyping ? '#ffffff' : '#86868b'
                }}
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      )}

      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatPulse {
          0%, 100% {
            transform: translateY(0) scale(1);
            box-shadow: 0px 8px 24px 0px rgba(97,169,78,0.4);
          }
          50% {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0px 15px 35px 0px rgba(97,169,78,0.5);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes typingDotImessage {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.3;
          }
          30% {
            transform: translateY(-6px);
            opacity: 0.8;
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .animate-messageSlide {
          animation: messageSlide 0.2s ease-out;
        }

        .animate-floatPulse {
          animation: floatPulse 3s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .typing-dot-imessage {
          width: 8px;
          height: 8px;
          background: #86868b;
          border-radius: 50%;
          animation: typingDotImessage 1.4s ease-in-out infinite;
          display: inline-block;
        }

        /* Hide scrollbar but keep functionality */
        div::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
      `}</style>
    </>
  );
}
