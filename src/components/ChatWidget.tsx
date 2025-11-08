import { useState, useEffect, useRef } from "react";
import { X, MessageCircle, Send } from "lucide-react";

interface Message {
  id: string;
  type: 'user' | 'bot' | 'system';
  content: string;
  timestamp: Date;
  showBookingButton?: boolean;
  showSalivaTestButton?: boolean;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [sessionId] = useState(() => `session-${Date.now()}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Replace this with your actual n8n webhook URL
  const WEBHOOK_URL = "https://n8n.srv865926.hstgr.cloud/webhook/SurfBot";

  // Replace with your actual booking URL
  const BOOKING_URL = "https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368";

  // Saliva test landing page URL
  const SALIVA_TEST_URL = "https://www.yourintegrativehealth.com/saliva-test";

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
          sessionId: sessionId
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      let responseText = data.response || data.output || data.message || "I'm sorry, I couldn't process that. Please try again.";

      // Remove any [CHECKOUT_URL] placeholders from the response
      responseText = responseText.replace(/\[CHECKOUT_URL\]/g, '');

      // Check if response mentions booking/scheduling - more specific patterns
      const bookingPhrases = [
        'book a',
        'book an',
        'schedule a',
        'schedule an',
        'set up a',
        'set up an',
        'would you like to book',
        'would you like to schedule',
        'can help you book',
        'can help you schedule',
        'let\'s get you scheduled',
        'ready to book'
      ];
      const shouldShowBookingButton = bookingPhrases.some(phrase =>
        responseText.toLowerCase().includes(phrase)
      );

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
        showBookingButton: shouldShowBookingButton,
        showSalivaTestButton: shouldShowSalivaTestButton
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

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-[#61a94e] to-[#549440] text-white rounded-full p-4 md:p-5 shadow-[0px_8px_24px_0px_rgba(97,169,78,0.4)] hover:shadow-[0px_12px_32px_0px_rgba(97,169,78,0.6)] transition-all duration-300 active:scale-95 md:hover:scale-110 group touch-manipulation animate-floatPulse"
          aria-label="Open chat"
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            zIndex: 999999
          }}
        >
          <MessageCircle className="w-7 h-7 md:w-8 md:h-8 group-hover:rotate-12 transition-transform duration-300" />

          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 bg-[#d4183d] text-white text-[11px] md:text-[12px] font-['Poppins'] font-semibold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center animate-pulse shadow-lg">
            1
          </span>

          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#61a94e] to-[#549440] opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
        </button>
      )}

      {/* Chat Widget Window */}
      {isOpen && (
        <div
          className="rounded-[20px] shadow-[0px_20px_60px_0px_rgba(0,0,0,0.25)] transition-all duration-500 flex flex-col animate-slideInUp backdrop-blur-xl"
          style={{
            position: 'fixed',
            bottom: '16px',
            right: '16px',
            width: '500px',
            maxWidth: 'calc(100vw - 32px)',
            height: '700px',
            maxHeight: 'calc(100vh - 32px)',
            backgroundColor: 'rgba(255, 255, 255, 0.98)',
            opacity: 1,
            zIndex: 999999,
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.8)'
          }}
        >
          {/* Header */}
          <div
            className="px-5 md:px-8 py-4 md:py-5 flex items-center justify-between rounded-t-[20px] flex-shrink-0 relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #236189 0%, #2a7a9f 50%, #61a94e 100%)',
              minHeight: '80px'
            }}
          >
            {/* Animated background effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="flex items-center gap-3 md:gap-4 flex-1 relative z-10">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0 shadow-lg animate-bounce" style={{ animationDuration: '3s' }}>
                <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#61a94e]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3
                    className="font-['Poppins'] font-semibold text-[16px] md:text-[17px]"
                    style={{ color: '#ffffff' }}
                  >
                    Your Health Assistant
                  </h3>
                  {/* Online status indicator */}
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                </div>
                <p
                  className="font-['Poppins'] text-[12px] md:text-[13px]"
                  style={{ color: 'rgba(255, 255, 255, 0.95)' }}
                >
                  Online now • Typically replies instantly
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="rounded-full p-2 transition-all hover:rotate-90 duration-300 flex-shrink-0 ml-2 relative z-20"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                minWidth: '40px',
                minHeight: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              aria-label="Close chat"
              title="Close chat"
              type="button"
            >
              <X className="w-6 h-6" style={{ strokeWidth: 3 }} />
            </button>
          </div>

          {/* Messages Area */}
          <div
            className="flex-1 overflow-y-auto px-6 md:px-8 py-5 md:py-6 space-y-4 rounded-[20px]"
            style={{
              backgroundColor: '#f8f9fa',
              scrollbarWidth: 'thin',
              scrollbarColor: '#cbd5e0 #f8f9fa',
              minHeight: 0,
              overflowY: 'auto',
              borderRadius: '0'
            }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-messageSlide flex-col ${message.type === 'user' ? 'items-end' : 'items-start'} gap-2`}
              >
                {/* Bot Avatar */}
                {message.type === 'bot' && (
                  <div className="flex items-end gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-[#236189] to-[#61a94e] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div
                      className={`max-w-[75%] px-5 py-4 font-['Poppins'] text-[15px] leading-[1.7] bg-white text-[#333333] shadow-[0_4px_16px_rgba(0,0,0,0.1)] rounded-[20px] rounded-bl-[6px] border border-gray-50 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-all duration-300`}
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word'
                      }}
                    >
                      {message.content}
                    </div>
                  </div>
                )}

                {/* User Message */}
                {message.type === 'user' && (
                  <div
                    className={`max-w-[75%] px-5 py-4 font-['Poppins'] text-[15px] leading-[1.7] rounded-[20px] rounded-br-[6px] shadow-lg hover:shadow-xl transition-all duration-300`}
                    style={{
                      background: 'linear-gradient(135deg, #61a94e 0%, #549440 100%)',
                      color: '#ffffff',
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {message.content}
                  </div>
                )}

                {/* System Message */}
                {message.type === 'system' && (
                  <div
                    className={`max-w-[75%] px-5 py-3.5 font-['Poppins'] text-[15px] leading-relaxed bg-blue-50 text-blue-800 border border-blue-200 rounded-[16px] text-center`}
                    style={{
                      wordWrap: 'break-word',
                      overflowWrap: 'break-word'
                    }}
                  >
                    {message.content}
                  </div>
                )}

                {/* Booking Button */}
                {message.showBookingButton && (
                  <div className="ml-10">
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-2 px-5 py-3 text-white rounded-full font-['Poppins'] font-semibold text-[13px] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 animate-fadeIn shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #236189 0%, #2a7a9f 100%)' }}
                    >
                      <span className="whitespace-nowrap">📅 Book Your Consultation</span>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                )}

                {/* Saliva Test Button */}
                {message.showSalivaTestButton && (
                  <div className="ml-10">
                    <a
                      href={SALIVA_TEST_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-2 px-5 py-3 text-white rounded-full font-['Poppins'] font-semibold text-[13px] hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 animate-fadeIn shadow-lg"
                      style={{ background: 'linear-gradient(135deg, #61a94e 0%, #549440 100%)' }}
                    >
                      <span className="whitespace-nowrap">🧪 View Saliva Test</span>
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start animate-messageSlide">
                <div className="flex items-end gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-[#236189] to-[#61a94e] rounded-full flex items-center justify-center flex-shrink-0 shadow-md animate-pulse">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <div className="px-6 py-4 rounded-[20px] rounded-bl-[6px] shadow-[0_4px_16px_rgba(0,0,0,0.12)] bg-white border border-gray-50">
                    <div className="flex gap-2 items-center">
                      <span className="typing-dot" style={{ animationDelay: '0ms' }} />
                      <span className="typing-dot" style={{ animationDelay: '200ms' }} />
                      <span className="typing-dot" style={{ animationDelay: '400ms' }} />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-5 md:p-6 border-t border-gray-100 flex-shrink-0" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
            {/* Quick Action Pills */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 mb-4 w-full animate-fadeIn">
                <button
                  onClick={() => setInputMessage("What services do you offer?")}
                  className="px-4 py-2.5 bg-gradient-to-r from-[#61a94e]/10 to-[#61a94e]/5 text-[#61a94e] border border-[#61a94e]/30 rounded-full text-[13px] font-['Poppins'] font-medium hover:bg-gradient-to-r hover:from-[#61a94e] hover:to-[#549440] hover:text-white hover:border-[#61a94e] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <span className="flex items-center gap-1.5">
                    💊 <span>Services</span>
                  </span>
                </button>
                <button
                  onClick={() => setInputMessage("Do you treat PCOS?")}
                  className="px-4 py-2.5 bg-gradient-to-r from-[#236189]/10 to-[#236189]/5 text-[#236189] border border-[#236189]/30 rounded-full text-[13px] font-['Poppins'] font-medium hover:bg-gradient-to-r hover:from-[#236189] hover:to-[#1a4d6b] hover:!text-white hover:border-[#236189] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <span className="flex items-center gap-1.5">
                    🩺 <span>PCOS</span>
                  </span>
                </button>
                <button
                  onClick={() => setInputMessage("I have low energy and weight gain")}
                  className="px-4 py-2.5 bg-gradient-to-r from-[#61a94e]/10 to-[#61a94e]/5 text-[#61a94e] border border-[#61a94e]/30 rounded-full text-[13px] font-['Poppins'] font-medium hover:bg-gradient-to-r hover:from-[#61a94e] hover:to-[#549440] hover:text-white hover:border-[#61a94e] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 active:scale-95 whitespace-nowrap"
                >
                  <span className="flex items-center gap-1.5">
                    ⚡ <span>Energy</span>
                  </span>
                </button>
              </div>
            )}

            <div className="flex gap-3 items-center bg-gradient-to-r from-gray-50 to-gray-100/50 rounded-[24px] p-2 border-2 border-gray-200 focus-within:border-[#61a94e] focus-within:bg-white focus-within:shadow-lg transition-all duration-300">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                disabled={isTyping}
                className="flex-1 px-4 py-3 bg-transparent focus:outline-none font-['Poppins'] text-[15px] disabled:cursor-not-allowed placeholder:text-gray-400"
                style={{ fontSize: '16px' }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-gradient-to-br from-[#61a94e] to-[#549440] text-white rounded-[16px] hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center flex-shrink-0 shadow-lg"
                style={{ minWidth: '52px', minHeight: '52px' }}
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-br from-[#f6faf5] to-[#f3f8fc] px-4 md:px-6 py-3 border-t border-gray-100 rounded-b-[20px] flex-shrink-0">
            <div className="flex items-center justify-between">
              <p className="font-['Poppins'] text-[11px] md:text-[12px] text-[#565d6d]">
                AI-powered health assistant
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="tel:714-586-8872"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                  title="Call us"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </a>
                <a
                  href="mailto:team@yourintegrativehealth.com"
                  className="text-[#236189] hover:text-[#1a4d6b] transition-colors"
                  title="Email us"
                >
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes messageSlide {
          from {
            opacity: 0;
            transform: translateY(15px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
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
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes typingDot {
          0%, 60%, 100% {
            transform: translateY(0);
            opacity: 0.4;
          }
          30% {
            transform: translateY(-10px);
            opacity: 1;
          }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-messageSlide {
          animation: messageSlide 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .animate-floatPulse {
          animation: floatPulse 3s ease-in-out infinite;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }

        .typing-dot {
          width: 10px;
          height: 10px;
          background: linear-gradient(135deg, #61a94e, #236189);
          border-radius: 50%;
          animation: typingDot 1.4s ease-in-out infinite;
          display: inline-block;
        }

        /* Custom scrollbar for webkit browsers */
        div::-webkit-scrollbar {
          width: 6px;
        }

        div::-webkit-scrollbar-track {
          background: #f8f9fa;
        }

        div::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 3px;
        }

        div::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }
      `}</style>
    </>
  );
}
