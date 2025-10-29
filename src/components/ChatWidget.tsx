import { useState } from "react";
import { X, MessageCircle, Send } from "lucide-react";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Chat widget form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitted(false);
        setIsOpen(false);
      }, 3000);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-br from-[#61a94e] to-[#549440] text-white rounded-full p-4 md:p-5 shadow-[0px_8px_24px_0px_rgba(97,169,78,0.4)] hover:shadow-[0px_12px_32px_0px_rgba(97,169,78,0.5)] transition-all duration-300 active:scale-95 md:hover:scale-105 group touch-manipulation"
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
          <span className="absolute -top-1 -right-1 bg-[#d4183d] text-white text-[11px] md:text-[12px] font-['Poppins'] font-semibold rounded-full w-5 h-5 md:w-6 md:h-6 flex items-center justify-center animate-pulse">
            1
          </span>
        </button>
      )}

      {/* Chat Widget Window */}
      {isOpen && (
        <div
            className="rounded-[20px] shadow-[0px_12px_40px_0px_rgba(0,0,0,0.15)] transition-all duration-300"
            style={{
              position: 'fixed',
              bottom: '16px',
              right: '16px',
              width: '440px',
              maxWidth: 'calc(100vw - 32px)',
              backgroundColor: '#ffffff',
              opacity: 1,
              zIndex: 999999,
              maxHeight: 'calc(100vh - 32px)',
              overflowY: 'auto'
            }}
          >
            {/* Header */}
            <div
              className="px-5 md:px-8 py-4 md:py-5 flex items-center justify-between rounded-t-[20px]"
              style={{
                background: 'linear-gradient(to right, #236189, #61a94e)',
                minHeight: '80px'
              }}
            >
              <div className="flex items-center gap-3 md:gap-4 flex-1">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-[#61a94e]" />
                </div>
                <div className="flex-1">
                  <h3
                    className="font-['Poppins'] font-semibold text-[16px] md:text-[17px]"
                    style={{ color: '#ffffff' }}
                  >
                    How can we help?
                  </h3>
                  <p
                    className="font-['Poppins'] text-[12px] md:text-[13px]"
                    style={{ color: 'rgba(255, 255, 255, 0.9)' }}
                  >
                    We typically reply in minutes
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="rounded-full p-2 transition-all hover:rotate-90 duration-300 flex-shrink-0 ml-2"
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

          {/* Form Content */}
          <div className="p-5 md:p-8" style={{ backgroundColor: '#ffffff' }}>
            {!isSubmitted ? (
              <>
                <p className="font-['Poppins'] text-[14px] md:text-[15px] text-[#565d6d] mb-5 md:mb-6 leading-relaxed">
                  Send us a quick message and we'll get back to you as soon as possible!
                </p>

                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                  {/* Name */}
                  <div>
                    <label className="font-['Poppins'] font-medium text-[13px] md:text-[14px] text-[#236189] mb-2 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#61a94e] focus:ring-2 focus:ring-[#61a94e]/20 font-['Poppins'] text-[14px] md:text-[15px] transition-all"
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="font-['Poppins'] font-medium text-[13px] md:text-[14px] text-[#236189] mb-2 block">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#61a94e] focus:ring-2 focus:ring-[#61a94e]/20 font-['Poppins'] text-[14px] md:text-[15px] transition-all"
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="font-['Poppins'] font-medium text-[13px] md:text-[14px] text-[#236189] mb-2 block">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="How can we help you today?"
                      className="w-full px-4 py-3 md:py-3.5 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#61a94e] focus:ring-2 focus:ring-[#61a94e]/20 font-['Poppins'] text-[14px] md:text-[15px] transition-all resize-none"
                      style={{ fontSize: '16px' }}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#61a94e] to-[#549440] text-white px-4 py-3.5 md:py-4 rounded-[10px] font-['Poppins'] font-medium text-[15px] md:text-[16px] hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>

                {/* Quick Info */}
                <div className="mt-5 md:mt-6 pt-5 md:pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-[#565d6d] font-['Poppins'] text-[12px] md:text-[13px]">
                    <div className="w-2 h-2 bg-[#61a94e] rounded-full animate-pulse" />
                    Available Monday - Friday, 9 AM - 5 PM
                  </div>
                </div>
              </>
            ) : (
              /* Success Message */
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-[#61a94e] to-[#549440] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="font-['Poppins'] font-semibold text-[18px] text-[#236189] mb-2">
                  Message Sent!
                </h4>
                <p className="font-['Poppins'] text-[14px] text-[#565d6d]">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="bg-gradient-to-br from-[#f6faf5] to-[#f3f8fc] px-6 md:px-8 py-4 md:py-4 border-t border-gray-100 rounded-b-[20px]">
            <div className="flex items-center justify-between">
              <p className="font-['Poppins'] text-[11px] md:text-[12px] text-[#565d6d]">
                We respect your privacy
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
    </>
  );
}

