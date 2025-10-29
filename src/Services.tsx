import svgPaths from "./imports/svg-p1ne2w6lpt";
import decorativeSvgPaths from "./imports/svg-0egnuf5q93";
import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";
import { Stethoscope, CalendarDays, MessageSquare, ShoppingBag, Leaf, Heart } from "lucide-react";
import CircleCheck from "./imports/CircleCheck";
import ChatWidget from "./components/ChatWidget";
import Avatar from "./components/Avatar";
import { servicesPageTestimonials } from "./data/testimonials";
import ScrollFadeIn from "./components/ScrollFadeIn";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Breadcrumb from "./components/Breadcrumb";
import { generateBreadcrumbSchema } from "./utils/breadcrumbSchema";

interface ServicesProps {
  setCurrentPage: (page: "home" | "services" | "about" | "faq" | "contact" | "blog") => void;
}

export default function Services({ setCurrentPage }: ServicesProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Services | Hormone Health & Weight Loss Programs</title>
        <meta name="description" content="Personalized functional medicine programs for hormone balance, weight loss, and metabolic health. Virtual consultations with integrative care specialists." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourintegrativehealth.com/services" />

        {/* Open Graph */}
        <meta property="og:title" content="Services | Hormone Health & Weight Loss Programs" />
        <meta property="og:description" content="Personalized functional medicine programs for hormone balance, weight loss, and metabolic health. Virtual consultations with integrative care specialists." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/services" />
        <meta property="og:image" content="https://www.yourintegrativehealth.com/og-image.png" />
        <meta property="og:site_name" content="Your Integrative Health" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Services | Hormone Health & Weight Loss Programs" />
        <meta name="twitter:description" content="Personalized functional medicine programs for hormone balance, weight loss, and metabolic health. Virtual consultations with integrative care specialists." />
        <meta name="twitter:image" content="https://www.yourintegrativehealth.com/og-image.png" />

        {/* Breadcrumb JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { label: "Home", url: "/" },
            { label: "Services", url: "/services" }
          ]))}
        </script>
      </Helmet>
      <style>{`
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
            <span className="text-[#61a94e]">Services</span>
            <button onClick={() => setCurrentPage("blog")} className="text-black hover:text-[#61a94e] transition-colors">Blog</button>
            <button onClick={() => setCurrentPage("contact")} className="text-black hover:text-[#61a94e] transition-colors">Contacts</button>
            <button onClick={() => setCurrentPage("about")} className="text-black hover:text-[#61a94e] transition-colors">About</button>
            <button onClick={() => setCurrentPage("faq")} className="text-black hover:text-[#61a94e] transition-colors">FAQ</button>
          </nav>

          {/* Get Started Button */}
          <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-[#61a94e] text-white px-5 xl:px-6 py-2.5 rounded-[10px] font-['Poppins'] font-medium text-[18px] xl:text-[20px] hover:bg-[#549440] transition-all hover-glow flex-shrink-0">
            Get Started
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#61a94e]"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-services"
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
          { label: "Services", isActive: true }
        ]}
        setCurrentPage={setCurrentPage}
      />

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-services" className="lg:hidden absolute top-[100px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col py-4 px-4 md:px-8">
            <span className="py-3 px-4 text-[#61a94e] font-['Poppins'] text-[16px] font-semibold">
              Services
            </span>
            <button
              onClick={() => {
                setCurrentPage("blog");
                setIsMobileMenuOpen(false);
              }}
              className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]"
            >
              Blog
            </button>
            <button
              onClick={() => {
                setCurrentPage("contact");
                setIsMobileMenuOpen(false);
              }}
              className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]"
            >
              Contacts
            </button>
            <button
              onClick={() => {
                setCurrentPage("about");
                setIsMobileMenuOpen(false);
              }}
              className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]"
            >
              About
            </button>
            <button
              onClick={() => {
                setCurrentPage("faq");
                setIsMobileMenuOpen(false);
              }}
              className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]"
            >
              FAQ
            </button>
            <a
              href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 bg-[#61a94e] text-white px-6 py-3 rounded-[10px] font-['Poppins'] font-medium text-[16px] hover:bg-[#549440] transition-colors text-center"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}

      <main>
      {/* Hero Section with Gradient Banner */}
      <section className="relative w-full min-h-[400px] md:min-h-[450px] lg:h-[500px] overflow-hidden">
        {/* Background Gradient */}
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
              fill="url(#paint0_linear_services_hero)"
              opacity="0.93"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_services_hero"
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

        <div className="absolute right-[-5%] bottom-[20%] w-[280px] h-[280px] md:w-[380px] md:h-[380px] rotate-[315deg] opacity-30 z-[1]">
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
          <ScrollFadeIn direction="up" duration={0.8}>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-['Poppins'] font-bold text-[36px] md:text-[48px] lg:text-[56px] text-white mb-6 leading-tight">
                Your Journey to Vibrant Health Starts Here
              </h1>
              <p className="font-['Poppins'] text-[18px] md:text-[20px] lg:text-[24px] text-white leading-relaxed">
                Personalized care to restore balance, boost energy, and help you feel your best from the inside out.
              </p>
              <p className="font-['Poppins'] text-[16px] md:text-[18px] text-white/90 mt-4">
                Learn more about{" "}
                <button
                  onClick={() => setCurrentPage("about")}
                  className="text-white font-semibold underline hover:text-white/80 transition-colors"
                >
                  Megan Hormazdi, NP
                </button>
                , our functional medicine specialist who developed the Metabolic Hormone Balance Program.
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* Our Core Services Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Decorative Icon - Left */}
        <div className="absolute left-[-10%] top-[7%] w-[300px] h-[356px] md:w-[416.433px] md:h-[475.75px] rotate-[155deg] opacity-40 z-0">
          <svg className="block size-full" fill="none" viewBox="0 0 417 476">
            <path d={svgPaths.p30a07a00} fill="url(#paint0_linear_services_left)" opacity="0.4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_services_left" x1="10.3277" x2="464.872" y1="312.738" y2="162.786">
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Decorative Icon - Right */}
        <div className="absolute right-[-5%] top-[30%] w-[140px] h-[332px] md:w-[173.222px] md:h-[411.628px] rotate-[350deg] opacity-40 z-0">
          <svg className="block size-full" fill="none" viewBox="0 0 174 412">
            <path d={svgPaths.p1f5cf580} fill="url(#paint0_linear_services_right)" opacity="0.4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_services_right" x1="22.685" x2="405.188" y1="106.176" y2="299.044">
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
          <ScrollFadeIn direction="up" duration={0.8}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-['Poppins'] font-bold text-[#236189] text-[32px] md:text-[40px] lg:text-[48px] mb-4">
                Our Core Services
              </h2>
              <p className="font-['Poppins'] text-[#565d6d] text-[16px] md:text-[18px]">
                Choose the level of care that fits your needs best.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Divider Line */}
          <ScrollFadeIn direction="up" duration={0.6} delay={0.2}>
            <div className="max-w-[903px] mx-auto mb-12">
              <svg className="w-full h-[2px]" fill="none" preserveAspectRatio="none" viewBox="0 0 905 2">
                <path d="M1 1H904" opacity="0.49" stroke="#236189" strokeLinecap="round" strokeWidth="2" />
              </svg>
            </div>
          </ScrollFadeIn>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Gold Plan */}
            <ScrollFadeIn direction="up" duration={0.8} delay={0.1}>
              <article className="bg-white rounded-bl-[73px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[69px] border border-[#dee1e6] shadow-[0px_0px_2px_0px_rgba(23,26,31,0.08),0px_0px_21.6px_0px_#236189] p-8 relative hover-lift cursor-pointer">
              <div className="flex justify-center mb-6">
                <div className="w-[40px] h-[40px]">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#FFD700" stroke="#FFA500" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="13" fill="#FFED4E" opacity="0.5"/>
                    <text x="20" y="26" fontSize="18" fontWeight="bold" fill="#B8860B" textAnchor="middle" fontFamily="Arial">1</text>
                  </svg>
                </div>
              </div>
              <h3 className="font-['Poppins'] font-bold text-[24px] text-[#171a1f] text-center mb-2">
                Gold Plan
              </h3>
              <p className="font-['Poppins'] text-[18px] text-[#565d6d] text-center mb-8">
                Comprehensive Care
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  "60-min monthly provider visits",
                  "Comprehensive testing & analysis",
                  "Personalized supplement plan",
                  "Direct provider messaging",
                  "Weekly group coaching"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-[20px] h-[20px] flex-shrink-0 mt-0.5" style={{ '--fill-0': '#4caf50' } as React.CSSProperties}>
                      <CircleCheck />
                    </div>
                    <p className="font-['Poppins'] text-[16px] text-[#171a1f] leading-[24px]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.location.href = 'https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368'}
                className="w-full bg-white border border-[#4caf50] text-[#4caf50] py-3 rounded-[6px] font-['Poppins'] font-medium text-[14px] hover:bg-[#4caf50] hover:text-white transition-colors flex items-center justify-center"
              >
                Book Consultation
              </button>
              </article>
            </ScrollFadeIn>

            {/* Silver Plan */}
            <ScrollFadeIn direction="up" duration={0.8} delay={0.2}>
              <article className="bg-[#f5faf5] rounded-bl-[62px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[73px] border border-[#f5faf5] shadow-[0px_0px_2px_0px_rgba(23,26,31,0.08),0px_0px_21.6px_0px_#61a94e] p-8 relative hover-lift cursor-pointer">
              <div className="flex justify-center mb-6">
                <div className="w-[40px] h-[40px]">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#C0C0C0" stroke="#A9A9A9" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="13" fill="#E8E8E8" opacity="0.5"/>
                    <text x="20" y="26" fontSize="18" fontWeight="bold" fill="#696969" textAnchor="middle" fontFamily="Arial">2</text>
                  </svg>
                </div>
              </div>
              <h3 className="font-['Poppins'] font-bold text-[24px] text-[#19191f] text-center mb-2">
                Silver Plan
              </h3>
              <p className="font-['Poppins'] text-[18px] text-[rgba(25,25,31,0.8)] text-center mb-8">
                Focused Support
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  "30-min monthly provider visits",
                  "Nutrition & lifestyle recommendations",
                  "Access to on-demand learning",
                  "Group coaching sessions",
                  "Basic progress tracking"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-[20px] h-[20px] flex-shrink-0 mt-0.5" style={{ '--fill-0': '#4caf50' } as React.CSSProperties}>
                      <CircleCheck />
                    </div>
                    <p className="font-['Poppins'] text-[16px] text-[#19191f] leading-[24px]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.location.href = 'https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368'}
                className="w-full bg-[#4caf50] text-white py-3 rounded-[6px] font-['Poppins'] font-medium text-[14px] hover:bg-[#449944] transition-colors flex items-center justify-center"
              >
                Book Consultation
              </button>
              </article>
            </ScrollFadeIn>

            {/* Bronze Plan */}
            <ScrollFadeIn direction="up" duration={0.8} delay={0.3}>
              <article className="bg-white rounded-bl-[62px] rounded-br-[16px] rounded-tl-[16px] rounded-tr-[74px] border border-[#dee1e6] shadow-[0px_0px_2px_0px_rgba(23,26,31,0.08),0px_0px_14.8px_0px_#236189] p-8 relative hover-lift cursor-pointer">
              <div className="flex justify-center mb-6">
                <div className="w-[40px] h-[40px]">
                  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#CD7F32" stroke="#A0522D" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="13" fill="#D4A574" opacity="0.5"/>
                    <text x="20" y="26" fontSize="18" fontWeight="bold" fill="#8B4513" textAnchor="middle" fontFamily="Arial">3</text>
                  </svg>
                </div>
              </div>
              <h3 className="font-['Poppins'] font-bold text-[24px] text-[#171a1f] text-center mb-2">
                Bronze Plan
              </h3>
              <p className="font-['Poppins'] text-[18px] text-[#565d6d] text-center mb-8">
                Foundational Wellness
              </p>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {[
                  "Access to educational classes & check-ins",
                  "Basic supplement recommendations",
                  "Light progress tracking",
                  "Community forum access",
                  "Wellness resources library"
                ].map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-[20px] h-[20px] flex-shrink-0 mt-0.5" style={{ '--fill-0': '#4caf50' } as React.CSSProperties}>
                      <CircleCheck />
                    </div>
                    <p className="font-['Poppins'] text-[16px] text-[#171a1f] leading-[24px]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => window.location.href = 'https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368'}
                className="w-full bg-white border border-[#4caf50] text-[#4caf50] py-3 rounded-[6px] font-['Poppins'] font-medium text-[14px] hover:bg-[#4caf50] hover:text-white transition-colors flex items-center justify-center"
              >
                Book Consultation
              </button>
              </article>
            </ScrollFadeIn>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Decorative Icons */}
        <div className="absolute left-[-5%] top-[0%] w-[260px] h-[300px] md:w-[319.928px] md:h-[365.499px] rotate-[140deg] opacity-40 z-0">
          <svg className="block size-full" fill="none" viewBox="0 0 320 366">
            <path d={svgPaths.p27223100} fill="url(#paint0_linear_included_left)" opacity="0.4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_included_left" x1="7.93436" x2="357.142" y1="240.264" y2="125.062">
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-[-5%] top-[16%] w-[123px] h-[292px] md:w-[151.977px] md:h-[361.145px] rotate-[5deg] opacity-40 z-0 px-[0px] py-[0px] mx-[76px] my-[-111px] py-[-113px]">
          <svg className="block size-full" fill="none" viewBox="0 0 152 362">
            <path d={svgPaths.p22678d80} fill="url(#paint0_linear_included_right_1)" opacity="0.4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_included_right_1" x1="19.9028" x2="355.495" y1="93.1545" y2="262.369">
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute left-[2%] top-[56%] w-[123px] h-[292px] md:w-[151.977px] md:h-[361.145px] rotate-[177.578deg] opacity-40 z-0 mx-[-52px] my-[0px]">
          <svg className="block size-full" fill="none" viewBox="0 0 152 362">
            <path d={svgPaths.p22678d80} fill="url(#paint0_linear_included_left_2)" opacity="0.4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_included_left_2" x1="19.9028" x2="355.495" y1="93.1545" y2="262.369">
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-[2%] bottom-[5%] w-[123px] h-[292px] md:w-[151.977px] md:h-[361.145px] rotate-[75deg] opacity-40 z-0 p-[0px] mx-[1187px] my-[402px] m-[0px]">
          <svg className="block size-full" fill="none" viewBox="0 0 152 362">
            <path d={svgPaths.p22678d80} fill="url(#paint0_linear_included_right_2)" opacity="0.4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_included_right_2" x1="19.9028" x2="355.495" y1="93.1545" y2="262.369">
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
          <ScrollFadeIn direction="up" duration={0.8}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-['Poppins'] font-bold text-[#236189] text-[28px] md:text-[32px] lg:text-[36px] leading-[1.2] mb-4 max-w-2xl mx-auto">
                What's Included in Your Wellness Program
              </h2>
              <p className="font-['Poppins'] text-[#565d6d] text-[16px] md:text-[18px]">
                Everything you need for lasting balance and personalized health support.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Divider */}
          <ScrollFadeIn direction="up" duration={0.6} delay={0.2}>
            <div className="max-w-[96px] mx-auto mb-12">
              <svg className="w-full h-[2px]" fill="none" preserveAspectRatio="none" viewBox="0 0 96 2">
                <path d="M0 1H96" stroke="#F3F4F6" />
              </svg>
            </div>
          </ScrollFadeIn>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                Icon: Heart,
                title: "Personal Intake Session",
                description: "Kickstart your journey with a deep dive into your health history and goals."
              },
              {
                Icon: Stethoscope,
                title: "Comprehensive Review",
                description: "Understand your health profile with a detailed review of lab results and personalized insights."
              },
              {
                Icon: CalendarDays,
                title: "Monthly Follow-Up Visits",
                description: "Stay on track with regular check-ins to adjust your plan and celebrate progress."
              },
              {
                Icon: MessageSquare,
                title: "Open Office Hours & Coaching",
                description: "Access expert guidance and support whenever you need it to overcome challenges."
              },
              {
                Icon: ShoppingBag,
                title: "Lab & Supplement Discounts",
                description: "Save on essential labs and high-quality supplements to support your wellness journey."
              },
              {
                Icon: Leaf,
                title: "Nutrition & Wellness Resources",
                description: "Empower yourself with a curated library of guides, recipes, and educational content."
              }
            ].map((service, i) => (
              <ScrollFadeIn key={i} direction="up" duration={0.8} delay={0.1 + i * 0.1}>
                <div className="bg-white rounded-[16px] shadow-[0px_0px_7.4px_0px_#236189] p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="w-[40px] h-[40px] text-[#4caf50]">
                      <service.Icon className="w-full h-full" />
                    </div>
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#171a1f] mb-4">
                    {service.title}
                  </h3>
                  <p className="font-['Poppins'] text-[14px] text-[#565d6d] leading-[20px]">
                    {service.description}
                  </p>
                </div>
              </ScrollFadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What Our Clients Are Saying Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-gradient-to-b from-[#f8fdfb] to-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute left-0 top-[20%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] opacity-20 -ml-20 z-0">
          <svg viewBox="0 0 174 412" fill="none" className="w-full h-full rotate-[45deg]">
            <path d={decorativeSvgPaths.p1f5cf580} fill="url(#gradient-testimonial-left)" opacity="0.4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="gradient-testimonial-left" x1="22.685" x2="405.188" y1="106.176" y2="299.044">
                <stop stopColor="#0470B7" />
                <stop offset="0.25" stopColor="#1D8093" />
                <stop offset="0.58" stopColor="#3C9468" />
                <stop offset="0.84" stopColor="#4FA04E" />
                <stop offset="1" stopColor="#56A544" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="absolute right-0 bottom-[10%] w-[200px] h-[200px] md:w-[300px] md:h-[300px] opacity-20 -mr-20 z-0">
          <svg viewBox="0 0 174 412" fill="none" className="w-full h-full rotate-[225deg]">
            <path d={decorativeSvgPaths.p1f5cf580} fill="url(#gradient-testimonial-right)" opacity="0.4" />
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="gradient-testimonial-right" x1="22.685" x2="405.188" y1="106.176" y2="299.044">
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
          <ScrollFadeIn direction="up" duration={0.8}>
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-['Poppins'] font-bold text-[#236189] text-[32px] md:text-[40px] lg:text-[48px] mb-4">
                What Our Clients Are Saying
              </h2>
              <p className="font-['Poppins'] text-[rgba(23,26,31,0.7)] text-[16px] md:text-[18px] lg:text-[20px] max-w-2xl mx-auto">
                Real experiences from patients who've transformed their health with personalized care.
              </p>
            </div>
          </ScrollFadeIn>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-[1200px] mx-auto">
            {servicesPageTestimonials.map((testimonial, i) => {
              return (
              <ScrollFadeIn key={i} direction="up" duration={0.8} delay={0.1 + i * 0.15}>
                <div
                  className="group relative bg-white rounded-[20px] shadow-[0px_4px_24px_rgba(97,169,78,0.12)] hover:shadow-[0px_8px_32px_rgba(97,169,78,0.2)] transition-all duration-300 overflow-hidden hover:-translate-y-1"
                >
                {/* Top Accent Bar */}
                <div className="h-1.5 w-full" style={{ backgroundColor: testimonial.accentColor }} />

                <div className="p-8 md:p-10">
                  {/* Avatar and Name Section */}
                  <div className="flex flex-col items-center mb-6">
                    <div className="relative mb-4">
                      <div className="ring-4 ring-white shadow-lg rounded-full">
                        <Avatar
                          name={testimonial.name}
                          size="lg"
                          colorIndex={i}
                        />
                      </div>
                      {/* Small accent circle */}
                      <div
                        className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full border-4 border-white flex items-center justify-center"
                        style={{ backgroundColor: testimonial.accentColor }}
                      >
                        <svg className="w-4 h-4 text-white" viewBox="0 0 14 11" fill="currentColor">
                          <path d="M12.2191 0.205077C12.578 -0.0877191 13.1072 -0.0670722 13.4418 0.267557C13.7765 0.602186 13.7972 1.13139 13.5043 1.49037L13.4418 1.55999L4.30192 10.6998C3.96731 11.0345 3.43811 11.0551 3.07919 10.7624L3.00954 10.6998L0.267557 7.95788L0.205077 7.88833C-0.0877193 7.52931 -0.067072 7.00011 0.267557 6.6655C0.602178 6.33085 1.13139 6.3102 1.49037 6.60298L1.55999 6.6655L3.65573 8.76119L12.1494 0.267557L12.2191 0.205077Z" />
                        </svg>
                      </div>
                    </div>
                    
                    <h3 className="font-['Poppins'] font-semibold text-[22px] md:text-[24px] text-[#171a1f] mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="font-['Poppins'] text-[15px] text-[#6b7280] mb-4">
                      Age {testimonial.age}
                    </p>

                    {/* Star Rating */}
                    <div className="flex gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5" viewBox="0 0 20 19" fill={testimonial.accentColor}>
                          <path d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75486L10 0Z" />
                        </svg>
                      ))}
                    </div>
                    <p className="font-['Poppins'] text-[13px] text-[#9ca3af]">
                      5.0 Rating
                    </p>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative">
                    {/* Opening Quote */}
                    <div className="absolute -left-2 -top-6 text-[80px] leading-none opacity-10" style={{ color: testimonial.accentColor }}>
                      "
                    </div>
                    
                    <p className="font-['Poppins'] text-[16px] md:text-[17px] text-[#4b5563] leading-[1.7] relative z-10 text-center">
                      {testimonial.content}
                    </p>
                    
                    {/* Closing Quote */}
                    <div className="absolute -right-2 -bottom-8 text-[80px] leading-none opacity-10" style={{ color: testimonial.accentColor }}>
                      "
                    </div>
                  </div>
                </div>

                {/* Bottom Decorative Element */}
                <div className="h-1 w-0 group-hover:w-full transition-all duration-500 mx-auto" style={{ backgroundColor: testimonial.accentColor, opacity: 0.3 }} />
                </div>
              </ScrollFadeIn>
            );
            })}
          </div>

          {/* Bottom CTA */}
          <ScrollFadeIn direction="up" duration={0.8} delay={0.2}>
            <div className="text-center mt-12 md:mt-16">
              <p className="font-['Poppins'] text-[16px] md:text-[18px] text-[#4b5563] mb-6">
                Join hundreds of women who've transformed their health
              </p>
              <button className="bg-[#61a94e] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-[12px] font-['Poppins'] font-medium text-[17px] md:text-[18px] hover:bg-[#549440] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto gap-2">
                Read More Success Stories
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </ScrollFadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 z-0">
          <svg className="block size-full rotate-180" fill="none" preserveAspectRatio="none" viewBox="0 0 1452 672">
            <g>
              <path d={svgPaths.p38118c00} fill="white" />
              <path d={svgPaths.p38118c00} fill="url(#paint0_linear_cta_bg)" />
            </g>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_cta_bg" x1="-1270" x2="343.93" y1="-576.5" y2="1764.78">
                <stop stopColor="white" />
                <stop offset="0.383068" stopColor="#61A94E" stopOpacity="0.6" />
                <stop offset="0.75" stopColor="#236189" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-[1440px] mx-auto w-full relative z-10 px-4 md:px-8 lg:px-16 py-16">
          <ScrollFadeIn direction="up" duration={0.8}>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[48px] lg:text-[59.725px] leading-[1.2] text-white mb-6">
                Ready to start your journey toward vibrant health?
              </h2>
              <p className="font-['Poppins'] text-[18px] md:text-[20px] lg:text-[22.397px] text-white/90 leading-[1.5] mb-4 max-w-2xl mx-auto">
                Schedule your free consultation today and take the first step toward balance and energy.
              </p>
              <p className="font-['Poppins'] text-[16px] md:text-[18px] text-white/80 mb-8 max-w-2xl mx-auto">
                Explore our{" "}
                <button
                  onClick={() => setCurrentPage("blog")}
                  className="text-white font-semibold underline hover:text-white/90 transition-colors"
                >
                  hormone balance insights
                </button>
                {" "}to understand how this program addresses root causes.
              </p>
              <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="bg-[#61a94e] text-white px-10 md:px-16 py-4 rounded-[7.466px] font-['Poppins'] font-medium text-[17.42px] hover:bg-[#549440] transition-colors inline-block text-center">
                Book My Free Consultation
              </a>
            </div>
          </ScrollFadeIn>
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
            </div>

            {/* Product */}
            <div>
              <h4 className="font-['Poppins'] font-bold text-[20px] text-[#170f49] mb-10">Product</h4>
              <ul className="space-y-[18px] font-['Poppins'] text-[#6f6c90] text-[18px]">
                <li><a href="#" className="hover:text-[#61a94e] transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-[#61a94e] transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-[#61a94e] transition-colors">Case studies</a></li>
                <li><a href="#" className="hover:text-[#61a94e] transition-colors">Reviews</a></li>
                <li><a href="#" className="hover:text-[#61a94e] transition-colors">Updates</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-['Poppins'] font-bold text-[20px] text-[#170f49] mb-10">Company</h4>
              <ul className="space-y-[18px] font-['Poppins'] text-[#6f6c90] text-[18px]">
                <li><a href="#" className="hover:text-[#61a94e] transition-colors">About</a></li>
                <li><a href="#" className="hover:text-[#61a94e] transition-colors">Contact us</a></li>
                <li><a href="#" className="hover:text-[#61a94e] transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-[#61a94e] transition-colors">Culture</a></li>
                <li><a href="#" className="hover:text-[#61a94e] transition-colors">Blog</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-['Poppins'] font-bold text-[20px] text-[#170f49] mb-10">Contact</h4>
              <ul className="space-y-[18px] font-['Poppins'] text-[#6f6c90] text-[18px]">
                <li>
                  <a href="tel:714-586-8872" className="hover:text-[#61a94e] transition-colors">
                    714-586-8872
                  </a>
                </li>
                <li>
                  <a href="mailto:team@yourintegrativehealth.com" className="hover:text-[#61a94e] transition-colors">
                    team@yourintegrativehealth.com
                  </a>
                </li>
                <li>
                  300 Regal #614<br />
                  Irvine, CA 92620
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-[#d9dbe9] mb-8" />

          {/* Copyright */}
          <div className="font-['Poppins'] text-[18px] text-[#6f6c90] leading-[30px]">
            <p>
              Copyright © 2025 Your Integrative Health
              <span className="float-right">
                All Rights Reserved | <a href="#" className="text-[#4a3aff] underline">Terms and Conditions</a> | <a href="#" className="text-[#4a3aff] underline">Privacy Policy</a>
              </span>
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
