import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";
import { Facebook, Instagram, Youtube } from 'lucide-react';

// TikTok Icon Component
const TikTok = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" fill="currentColor"/>
  </svg>
);

interface FooterProps {
  setCurrentPage?: (page: "home" | "services" | "about" | "faq" | "contact" | "blog" | "disclaimer" | "privacy" | "terms") => void;
}

export default function Footer({ setCurrentPage }: FooterProps = {}) {
  const footerSections = [
    {
      title: 'Company',
      links: [
        { text: 'About Us', action: () => setCurrentPage?.('about') },
        { text: 'Our Approach', action: () => {} },
        { text: 'Meet Megan', action: () => {} },
        { text: 'Success Stories', action: () => {} },
      ],
    },
    {
      title: 'Services',
      links: [
        { text: 'Weight Loss', action: () => setCurrentPage?.('services') },
        { text: 'Hormone Balance', action: () => {} },
        { text: 'Gut Health', action: () => {} },
        { text: 'Wellness Coaching', action: () => {} },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Getting Started', action: () => {} },
        { text: 'Help Center', action: () => {} },
        { text: 'FAQ', action: () => setCurrentPage?.('faq') },
        { text: 'Contact Us', action: () => setCurrentPage?.('contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', action: () => setCurrentPage?.('privacy') },
        { text: 'Terms of Use', action: () => setCurrentPage?.('terms') },
        { text: 'HIPAA Notice', action: () => {} },
        { text: 'Disclaimer', action: () => setCurrentPage?.('disclaimer') },
      ],
    },
  ];

  const socialLinks = [
    { icon: Youtube, label: 'YouTube', href: '#' },
    { icon: TikTok, label: 'TikTok', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
  ];

  return (
    <footer className="bg-[#f8f9fa] border-t border-gray-200">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1360px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-10 mb-10 sm:mb-12">
          {/* Brand Column - Full width on mobile, 2 cols on desktop */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img
              src={img65637454D738DColor3}
              alt="Logo"
              className="h-14 sm:h-16 w-auto object-contain mb-5"
            />
            <p className="font-['Poppins',sans-serif] text-[16px] sm:text-[18px] text-[#6f6c90] leading-relaxed mb-6 max-w-[310px]">
              Personalized integrative care for lasting weight loss and hormonal balance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 mb-6 font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-[#6f6c90]">
              <p>
                <a href="tel:714-586-8872" className="hover:text-[#61a94e] transition-colors">
                  714-586-8872
                </a>
              </p>
              <p>
                <a href="mailto:team@yourintegrativehealth.com" className="hover:text-[#61a94e] transition-colors">
                  team@yourintegrativehealth.com
                </a>
              </p>
              <p>
                300 Regal #614<br />
                Irvine, CA 92620
              </p>
            </div>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white hover:bg-[#61a94e] flex items-center justify-center transition-all shadow-sm hover:shadow-md group"
                >
                  <social.icon size={18} className="text-[#6f6c90] group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns - Stack on mobile, 2 cols on tablet, 4 cols on desktop */}
          {footerSections.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              <h3 className="font-['Poppins',sans-serif] font-semibold text-[16px] sm:text-[18px] text-black mb-4 sm:mb-5">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.text}>
                    <button
                      onClick={link.action}
                      className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#6f6c90] hover:text-[#61a94e] transition-colors inline-block cursor-pointer bg-transparent border-none p-0 text-left"
                    >
                      {link.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter - Mobile full width */}
        <div className="border-t border-gray-200 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-black mb-3">
              Stay Updated
            </h3>
            <p className="font-['Poppins',sans-serif] text-[15px] text-[#6f6c90] mb-4">
              Get health tips and updates delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2.5 rounded-[8px] border border-gray-300 focus:border-[#61a94e] focus:outline-none focus:ring-2 focus:ring-[#61a94e]/20 font-['Poppins',sans-serif] text-[15px] min-h-[44px]"
              />
              <button className="bg-[#61a94e] hover:bg-[#508a3f] text-white font-['Poppins',sans-serif] font-medium px-6 py-2.5 rounded-[8px] transition-colors text-[15px] min-h-[44px] whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-['Poppins',sans-serif] text-[14px] text-[#6f6c90] text-center sm:text-left">
              © 2025 Wellness Practice. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <button
                onClick={() => setCurrentPage?.('privacy')}
                className="font-['Poppins',sans-serif] text-[14px] text-[#6f6c90] hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Privacy
              </button>
              <button
                onClick={() => setCurrentPage?.('terms')}
                className="font-['Poppins',sans-serif] text-[14px] text-[#6f6c90] hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Terms
              </button>
              <button
                onClick={() => setCurrentPage?.('disclaimer')}
                className="font-['Poppins',sans-serif] text-[14px] text-[#6f6c90] hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0"
              >
                Disclaimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
