import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = ['Services', 'Blog', 'Contacts', 'About', 'FAQ'];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <nav className="mx-auto max-w-[1200px] xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="flex h-[72px] items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src={img65637454D738DColor3} 
              alt="Logo" 
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-8 xl:gap-12">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-['Poppins',sans-serif] text-[16px] lg:text-[18px] xl:text-[20px] text-black hover:text-[#61a94e] transition-colors"
              >
                {link}
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <button className="bg-[#61a94e] hover:bg-[#508a3f] text-white font-['Poppins',sans-serif] font-medium px-6 xl:px-8 py-2.5 xl:py-3 rounded-[10px] transition-colors text-[16px] xl:text-[20px]">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button & CTA */}
          <div className="flex items-center gap-3 lg:hidden">
            <button className="bg-[#61a94e] text-white font-['Poppins',sans-serif] font-medium px-4 py-2 rounded-[10px] text-[14px] sm:text-[16px]">
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-[72px] bg-white z-50 overflow-y-auto">
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-['Poppins',sans-serif] text-[18px] text-black hover:text-[#61a94e] py-3 border-b border-gray-100"
                >
                  {link}
                </a>
              ))}
              <button className="w-full bg-[#61a94e] text-white font-['Poppins',sans-serif] font-medium px-6 py-3 rounded-[10px] mt-4 text-[16px]">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
