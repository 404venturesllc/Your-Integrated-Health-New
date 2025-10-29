import svgPaths from "./imports/svg-9uzcopkvuf";
import decorativeSvgPaths from "./imports/svg-0egnuf5q93";
import aboutBgSvgPaths from "./imports/svg-vhw1cc3n73";
import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ChatWidget from "./components/ChatWidget";
import { allFAQs } from "./data/faqs";
import Breadcrumb from "./components/Breadcrumb";
import { generateBreadcrumbSchema } from "./utils/breadcrumbSchema";

interface FAQProps {
  setCurrentPage: (page: "home" | "services" | "about" | "faq" | "contact" | "blog") => void;
}

export default function FAQ({ setCurrentPage }: FAQProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    // Intersection Observer for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all elements with scroll-animation classes
    const animatedElements = document.querySelectorAll('.scroll-animation, .scroll-animation-fade, .scroll-animation-left, .scroll-animation-right');
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Helmet>
        <title>FAQ | Hormone Balance Program & Treatment Questions</title>
        <meta name="description" content="Common questions about our Metabolic Hormone Balance Program, functional medicine treatments, pricing, and what to expect from integrative care." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourintegrativehealth.com/faq" />

        {/* Open Graph */}
        <meta property="og:title" content="FAQ | Hormone Balance Program & Treatment Questions" />
        <meta property="og:description" content="Common questions about our Metabolic Hormone Balance Program, functional medicine treatments, pricing, and what to expect from integrative care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/faq" />
        <meta property="og:image" content="https://www.yourintegrativehealth.com/og-image.png" />
        <meta property="og:site_name" content="Your Integrative Health" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FAQ | Hormone Balance Program & Treatment Questions" />
        <meta name="twitter:description" content="Common questions about our Metabolic Hormone Balance Program, functional medicine treatments, pricing, and what to expect from integrative care." />
        <meta name="twitter:image" content="https://www.yourintegrativehealth.com/og-image.png" />

        {/* Breadcrumb JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { label: "Home", url: "/" },
            { label: "FAQ", url: "/faq" }
          ]))}
        </script>

        {/* JSON-LD Structured Data - FAQPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": allFAQs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })}
        </script>
      </Helmet>
      <style>{`
        .scroll-animation {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }
        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-animation-fade {
          opacity: 0;
          transition: opacity 0.8s ease-out;
        }
        .scroll-animation-fade.animate-in {
          opacity: 1;
        }
        .scroll-animation-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .scroll-animation-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        .scroll-animation-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s ease-out, transform 0.7s ease-out;
        }
        .scroll-animation-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        .hover-scale {
          transition: transform 0.3s ease;
        }
        .hover-scale:hover {
          transform: scale(1.05);
        }
        .hover-glow {
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .hover-glow:hover {
          box-shadow: 0 0 20px rgba(97, 169, 78, 0.4);
          transform: translateY(-2px);
        }
      `}</style>
      <div className="relative min-h-screen bg-white overflow-x-hidden">
        {/* Header/Navigation */}
        <header className="bg-white h-[100px] sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
          {/* Logo */}
          <button
            onClick={() => setCurrentPage("home")}
            className="h-[60px] md:h-[83px] w-[130px] md:w-[172px] flex-shrink-0"
            aria-label="Return to homepage"
          >
            <div className="h-full w-full overflow-hidden relative">
              <img
                alt="Your Integrative Health - Functional Medicine Clinic logo"
                className="absolute h-full left-[-34.47%] max-w-none top-0 w-[169.9%]"
                src={img65637454D738DColor3}
              />
            </div>
          </button>

          {/* Navigation Links - Hidden on mobile */}
          <nav role="navigation" aria-label="Main navigation" className="hidden lg:flex gap-12 xl:gap-[87px] items-center font-['Poppins'] text-[18px] xl:text-[20px]">
            <button
              onClick={() => setCurrentPage("services")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => setCurrentPage("blog")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              Blog
            </button>
            <button
              onClick={() => setCurrentPage("contact")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              Contacts
            </button>
            <button
              onClick={() => setCurrentPage("about")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              About
            </button>
            <span className="text-[#61a94e]">FAQ</span>
          </nav>

          {/* Get Started Button */}
          <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center justify-center bg-[#61a94e] text-white px-5 xl:px-6 py-2.5 rounded-[10px] font-['Poppins'] font-medium text-[18px] xl:text-[20px] hover:bg-[#549440] transition-colors flex-shrink-0">
            Get Started
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#61a94e] flex items-center justify-center"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-faq"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Home", page: "home" },
          { label: "FAQ", isActive: true }
        ]}
        setCurrentPage={setCurrentPage}
      />

      {isMobileMenuOpen && (
        <div id="mobile-menu-faq" className="lg:hidden absolute top-[100px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col py-4 px-4 md:px-8">
            <button onClick={() => { setCurrentPage("services"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">Services</button>
            <button onClick={() => { setCurrentPage("blog"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">Blog</button>
            <button onClick={() => { setCurrentPage("contact"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">Contacts</button>
            <button onClick={() => { setCurrentPage("about"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">About</button>
            <span className="py-3 px-4 text-[#61a94e] font-['Poppins'] text-[16px] font-semibold">FAQ</span>
            <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="mt-4 bg-[#61a94e] text-white px-6 py-3 rounded-[10px] font-['Poppins'] font-medium text-[16px] hover:bg-[#549440] transition-colors text-center">Get Started</a>
          </nav>
        </div>
      )}

      <main>
      {/* Hero Section with Gradient Banner */}
      <section className="relative w-full min-h-[400px] md:min-h-[450px] lg:h-[500px] overflow-hidden">
        {/* Background Gradient - using About page's wave gradient */}
        <div className="absolute inset-0 z-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1584 500"
          >
            <rect
              width="1584"
              height="500"
              fill="url(#paint0_linear_faq_hero)"
              opacity="0.93"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_faq_hero"
                x1="2141"
                x2="2155.18"
                y1="1118"
                y2="-51.3335"
              >
                <stop stopColor="white" />
                <stop offset="0.383068" stopColor="#61A94E" stopOpacity="0.6" />
                <stop offset="0.75" stopColor="#236189" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Decorative Shapes */}
        <div className="absolute left-[-5%] top-[20%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] rotate-[200deg] opacity-30 z-[1]">
          <svg className="block size-full" fill="none" viewBox="0 0 174 412">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-hero-left)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-hero-left"
                x1="22.685"
                x2="405.188"
                y1="106.176"
                y2="299.044"
              >
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-[-5%] bottom-[20%] w-[200px] h-[200px] md:w-[280px] md:h-[280px] rotate-[-5deg] opacity-30 z-[1]">
          <svg className="block size-full" fill="none" viewBox="0 0 174 412">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-hero-right)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-hero-right"
                x1="22.685"
                x2="405.188"
                y1="106.176"
                y2="299.044"
              >
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Content */}
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 h-full relative z-10 flex flex-col justify-center py-16 md:py-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-['Poppins'] font-bold text-[36px] md:text-[48px] lg:text-[56px] text-white mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="font-['Poppins'] text-[18px] md:text-[20px] lg:text-[24px] text-white leading-relaxed">
              Everything you need to know about our Metabolic Hormone Balance Program, treatments, and approach to integrative wellness.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Categories Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Decorative Shapes - Left Border */}
        <div className="absolute left-0 top-[20%] w-[80px] md:w-[160px] lg:w-[320px] h-[190px] md:h-[380px] lg:h-[760px] rotate-[165deg] opacity-30 -ml-8 md:-ml-16 lg:-ml-32 z-0">
          <svg viewBox="0 0 174 412" fill="none" className="w-full h-full">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-faq-left-1)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-faq-left-1"
                x1="22.685"
                x2="405.188"
                y1="106.176"
                y2="299.044"
              >
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Decorative Shapes - Right Border */}
        <div className="absolute right-0 top-[40%] w-[80px] md:w-[160px] lg:w-[320px] h-[190px] md:h-[380px] lg:h-[760px] rotate-[345deg] opacity-30 -mr-8 md:-mr-16 lg:-mr-32 z-0">
          <svg viewBox="0 0 174 412" fill="none" className="w-full h-full">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-faq-right-1)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-faq-right-1"
                x1="22.685"
                x2="405.188"
                y1="106.176"
                y2="299.044"
              >
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-5xl mx-auto space-y-4">
            {allFAQs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-[10px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)] border border-gray-100 transition-all hover:shadow-[0px_4px_25px_0px_rgba(97,169,78,0.15)] scroll-animation"
              >
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === index ? null : index)
                  }
                  className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left"
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-button-${index}`}
                >
                  <h3 className="font-['Poppins'] font-semibold text-[18px] md:text-[20px] text-[#236189] pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 md:w-7 md:h-7 text-[#61a94e] transition-transform flex-shrink-0 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 29 28"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M3.625 9.33333L14.5 19.8333L25.375 9.33333H3.625Z" />
                  </svg>
                </button>
                {openFAQ === index && (
                  <div
                    className="px-6 md:px-8 pb-5 md:pb-6"
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                  >
                    <div className="pt-2 border-t border-gray-100">
                      <p className="font-['Poppins'] text-[16px] md:text-[17px] text-[#565d6d] leading-[28px] md:leading-[30px] mt-4">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Have Questions CTA Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-white to-[#f6faf5] relative overflow-hidden">
        {/* Decorative Shapes */}
        <div className="absolute left-[-3%] top-[30%] w-[150px] h-[150px] md:w-[200px] md:h-[200px] rotate-[135deg] opacity-20 z-0">
          <svg className="block size-full" fill="none" viewBox="0 0 174 412">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-cta-left)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-cta-left"
                x1="22.685"
                x2="405.188"
                y1="106.176"
                y2="299.044"
              >
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-[-3%] bottom-[30%] w-[150px] h-[150px] md:w-[200px] md:h-[200px] rotate-[315deg] opacity-20 z-0">
          <svg className="block size-full" fill="none" viewBox="0 0 174 412">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-cta-right)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-cta-right"
                x1="22.685"
                x2="405.188"
                y1="106.176"
                y2="299.044"
              >
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-animation">
            <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#236189] mb-6">
              Still Have Questions?
            </h2>
            <p className="font-['Poppins'] text-[18px] md:text-[20px] text-[#565d6d] mb-4 max-w-2xl mx-auto">
              We're here to help! Learn more about our{" "}
              <button
                onClick={() => setCurrentPage("services")}
                className="text-[#236189] font-semibold underline hover:text-[#61a94e] transition-colors"
              >
                personalized programs
              </button>
              , explore{" "}
              <button
                onClick={() => setCurrentPage("blog")}
                className="text-[#236189] font-semibold underline hover:text-[#61a94e] transition-colors"
              >
                evidence-based wellness tips
              </button>
              , or schedule a free consultation with Megan to discuss your specific concerns and learn how our program can support your wellness journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white px-8 md:px-12 py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#549440] transition-colors flex items-center justify-center">
                Book Your Free Consultation
              </a>
              <button
                onClick={() => setCurrentPage("home")}
                className="bg-[#236189] border border-white text-white px-8 md:px-12 py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#1a4d6b] transition-colors flex items-center justify-center"
              >
                Return to Homepage
              </button>
            </div>

            {/* Contact Info */}
            <div className="mt-12 pt-12 border-t border-gray-200">
              <p className="font-['Poppins'] text-[16px] text-[#565d6d] mb-4">
                Or reach out directly:
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <a
                  href="mailto:team@yourintegrativehealth.com"
                  className="font-['Poppins'] text-[18px] text-[#61a94e] hover:text-[#549440] transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
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
                  team@yourintegrativehealth.com
                </a>
                <a
                  href="tel:714-586-8872"
                  className="font-['Poppins'] text-[18px] text-[#61a94e] hover:text-[#549440] transition-colors flex items-center gap-2"
                >
                  <svg
                    className="w-5 h-5"
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
                  714-586-8872
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-white py-12 md:py-16 lg:py-20 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Logo Column */}
            <div>
              <div className="h-[60px] md:h-[76px] w-[125px] md:w-[157px] mb-6">
                <div className="h-full w-full overflow-hidden relative">
                  <img
                    alt="Your Integrative Health - Functional Medicine Clinic logo"
                    className="absolute h-full left-[-34.47%] max-w-none top-0 w-[169.9%]"
                    src={img65637454D738DColor3}
                  />
                </div>
              </div>
              <p className="font-['Poppins'] text-[16px] md:text-[18px] text-[#6f6c90] leading-[26px] md:leading-[30px] mb-6 max-w-[310px]">
                Empowering you to achieve optimal health through personalized integrative care and holistic wellness solutions.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-[22px] items-center">
                <a
                  href="#"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg
                    className="w-[11px] h-[19px]"
                    viewBox="0 0 11 19"
                    fill="currentColor"
                  >
                    <path d="M7.31345 18.3945V10.1839H10.2081L10.6415 6.98403H7.31337V4.94106C7.31337 4.01463 7.58355 3.38332 8.97899 3.38332L10.7587 3.38252V0.520603C10.4509 0.481677 9.39435 0.394531 8.16537 0.394531C5.59935 0.394531 3.84261 1.88571 3.84261 4.62426V6.98403H0.940491V10.1839H3.84261V18.3945H7.31345V18.3945Z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg
                    className="w-[19px] h-[16px]"
                    viewBox="0 0 19 16"
                    fill="currentColor"
                  >
                    <path d="M17.316 4.24c.012.174.012.347.012.52 0 5.3-4.034 11.408-11.408 11.408-2.268 0-4.378-.662-6.154-1.8.318.036.624.049.954.049 1.836 0 3.528-.624 4.877-1.68-1.725-.036-3.174-1.17-3.672-2.73.246.036.491.061.749.061.354 0 .707-.048 1.036-.135-1.8-.366-3.15-1.95-3.15-3.858v-.049c.524.293 1.134.476 1.78.5-1.056-.708-1.752-1.914-1.752-3.282 0-.732.195-1.404.537-1.989 1.938 2.388 4.841 3.95 8.106 4.112a4.363 4.363 0 01-.098-.883c0-2.145 1.74-3.885 3.886-3.885 1.118 0 2.126.473 2.835 1.23a7.614 7.614 0 002.462-.94 3.871 3.871 0 01-1.704 2.133A7.771 7.771 0 0019 3.816a8.343 8.343 0 01-1.684 1.999z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg
                    className="w-[19px] h-[19px]"
                    viewBox="0 0 19 19"
                    fill="currentColor"
                  >
                    <path d="M9.5 1.711c2.537 0 2.838.01 3.84.055.927.043 1.43.197 1.764.328.444.172.76.378 1.093.71.331.332.538.649.71 1.093.131.334.285.837.328 1.764.045 1.002.055 1.303.055 3.84s-.01 2.838-.055 3.84c-.043.927-.197 1.43-.328 1.764a2.94 2.94 0 01-.71 1.093 2.94 2.94 0 01-1.093.71c-.334.131-.837.285-1.764.328-1.002.045-1.303.055-3.84.055s-2.838-.01-3.84-.055c-.927-.043-1.43-.197-1.764-.328a2.94 2.94 0 01-1.093-.71 2.94 2.94 0 01-.71-1.093c-.131-.334-.285-.837-.328-1.764-.045-1.002-.055-1.303-.055-3.84s.01-2.838.055-3.84c.043-.927.197-1.43.328-1.764.172-.444.379-.761.71-1.093a2.94 2.94 0 011.093-.71c.334-.131.837-.285 1.764-.328 1.002-.045 1.303-.055 3.84-.055zM9.5 0C6.926 0 6.602.011 5.588.057 4.577.103 3.888.263 3.286.495a4.652 4.652 0 00-1.683 1.096A4.652 4.652 0 00.507 3.274C.275 3.876.115 4.565.069 5.576.023 6.59.012 6.914.012 9.488c0 2.574.011 2.898.057 3.912.046 1.011.206 1.7.438 2.302a4.652 4.652 0 001.096 1.683 4.652 4.652 0 001.683 1.096c.602.232 1.291.392 2.302.438 1.014.046 1.338.057 3.912.057s2.898-.011 3.912-.057c1.011-.046 1.7-.206 2.302-.438a4.652 4.652 0 001.683-1.096 4.652 4.652 0 001.096-1.683c.232-.602.392-1.291.438-2.302.046-1.014.057-1.338.057-3.912s-.011-2.898-.057-3.912c-.046-1.011-.206-1.7-.438-2.302a4.652 4.652 0 00-1.096-1.683A4.652 4.652 0 0015.702.495C15.1.263 14.411.103 13.4.057 12.386.011 12.062 0 9.488 0z" />
                    <path d="M9.5 4.622a4.866 4.866 0 100 9.732 4.866 4.866 0 000-9.732zm0 8.022a3.156 3.156 0 110-6.312 3.156 3.156 0 010 6.312zM15.692 4.424a1.137 1.137 0 11-2.274 0 1.137 1.137 0 012.274 0z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-['Poppins'] font-semibold text-black mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3 font-['Poppins'] text-[#6f6c90]">
                <li>
                  <button
                    onClick={() => setCurrentPage("services")}
                    className="hover:text-[#61a94e] transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("about")}
                    className="hover:text-[#61a94e] transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setCurrentPage("faq")}
                    className="text-[#61a94e]"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <a
                    href="#contacts"
                    className="hover:text-[#61a94e] transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-['Poppins'] font-semibold text-black mb-4">
                Contact
              </h4>
              <ul className="space-y-3 font-['Poppins'] text-[#6f6c90]">
                <li>
                  <a href="mailto:team@yourintegrativehealth.com" className="hover:text-[#61a94e] transition-colors">
                    team@yourintegrativehealth.com
                  </a>
                </li>
                <li>
                  <a href="tel:714-586-8872" className="hover:text-[#61a94e] transition-colors">
                    714-586-8872
                  </a>
                </li>
                <li>300 Regal #614<br />Irvine, CA 92620</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-['Poppins'] font-semibold text-black mb-4">
                Newsletter
              </h4>
              <p className="font-['Poppins'] text-[#6f6c90] mb-4">
                Subscribe to get health tips
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#61a94e] text-center"
                />
                <button className="bg-[#61a94e] text-white px-4 py-2 rounded-lg hover:bg-[#549440] transition-colors flex items-center justify-center">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-gray-200 text-center">
            <p className="font-['Poppins'] text-[#6f6c90] text-[14px]">
              © 2025 Your Integrative Health. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>

    {/* Chat Widget - Outside overflow container */}
    <ChatWidget />
    </>
  );
}
