import svgPaths from "./imports/svg-9uzcopkvuf";
import decorativeSvgPaths from "./imports/svg-0egnuf5q93";
import aboutSvgPaths from "./imports/svg-1lqq7liner";
import aboutBgSvgPaths from "./imports/svg-vhw1cc3n73";
import Background from "./imports/Background";
import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";
import img66194F98407B8Istockphoto1485705128170667A3 from "figma:asset/ba13d4883035a4786187879b02156d64fb30faf2.png";
import img65A43F7E821F8Untitleddesign21 from "figma:asset/48e69dbd44c881ef26889bac0c30d7dadc6b9965.png";
import ChatWidget from "./components/ChatWidget";
import { useEffect, useState } from 'react';
import { Helmet } from "react-helmet-async";
import Breadcrumb from "./components/Breadcrumb";
import { generateBreadcrumbSchema } from "./utils/breadcrumbSchema";

interface AboutProps {
  setCurrentPage: (page: "home" | "services" | "about" | "faq" | "contact" | "blog") => void;
}

export default function About({ setCurrentPage }: AboutProps) {
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
        <title>About Megan Hormazdi, NP | Functional Medicine Expert</title>
        <meta name="description" content="Meet Megan Hormazdi, Nurse Practitioner specializing in hormone health, weight management, and integrative wellness. Compassionate, evidence-based care." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourintegrativehealth.com/about" />

        {/* Open Graph */}
        <meta property="og:title" content="About Megan Hormazdi, NP | Functional Medicine Expert" />
        <meta property="og:description" content="Meet Megan Hormazdi, Nurse Practitioner specializing in hormone health, weight management, and integrative wellness. Compassionate, evidence-based care." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/about" />
        <meta property="og:image" content="https://www.yourintegrativehealth.com/og-image.png" />
        <meta property="og:site_name" content="Your Integrative Health" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Megan Hormazdi, NP | Functional Medicine Expert" />
        <meta name="twitter:description" content="Meet Megan Hormazdi, Nurse Practitioner specializing in hormone health, weight management, and integrative wellness. Compassionate, evidence-based care." />
        <meta name="twitter:image" content="https://www.yourintegrativehealth.com/og-image.png" />

        {/* Breadcrumb JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { label: "Home", url: "/" },
            { label: "About", url: "/about" }
          ]))}
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
            <button onClick={() => setCurrentPage("services")} className="text-black hover:text-[#61a94e] transition-colors">
              Services
            </button>
            <button onClick={() => setCurrentPage("blog")} className="text-black hover:text-[#61a94e] transition-colors">
              Blog
            </button>
            <button onClick={() => setCurrentPage("contact")} className="text-black hover:text-[#61a94e] transition-colors">
              Contacts
            </button>
            <span className="text-[#61a94e]">About</span>
            <button onClick={() => setCurrentPage("faq")} className="text-black hover:text-[#61a94e] transition-colors">
              FAQ
            </button>
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
            aria-controls="mobile-menu-about"
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
          { label: "About", isActive: true }
        ]}
        setCurrentPage={setCurrentPage}
      />

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div id="mobile-menu-about" className="lg:hidden absolute top-[100px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col py-4 px-4 md:px-8">
            <button onClick={() => { setCurrentPage("services"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">Services</button>
            <button onClick={() => { setCurrentPage("blog"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">Blog</button>
            <button onClick={() => { setCurrentPage("contact"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">Contacts</button>
            <span className="py-3 px-4 text-[#61a94e] font-['Poppins'] text-[16px] font-semibold">About</span>
            <button onClick={() => { setCurrentPage("faq"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">FAQ</button>
            <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="mt-4 bg-[#61a94e] text-white px-6 py-3 rounded-[10px] font-['Poppins'] font-medium text-[16px] hover:bg-[#549440] transition-colors text-center">Get Started</a>
          </nav>
        </div>
      )}

      <main>
      {/* Hero Section - I'm Glad You're Here */}
      <section className="py-16 md:py-20 lg:py-32 relative overflow-hidden">
        {/* Background with Gradient - Same as Services Hero */}
        <div className="absolute inset-0">
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 1584 414"
          >
            <rect
              width="1584"
              height="414"
              fill="url(#paint0_linear_about_hero)"
              opacity="0.93"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_about_hero"
                x1="2141"
                x2="2155.18"
                y1="1118"
                y2="-51.3335"
              >
                <stop stopColor="white" />
                <stop
                  offset="0.383068"
                  stopColor="#61A94E"
                  stopOpacity="0.6"
                />
                <stop offset="0.75" stopColor="#236189" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Decorative Shapes */}
        {/* Left Shape */}
        <div className="absolute left-[-5%] top-[20%] w-[250px] h-[250px] md:w-[350px] md:h-[350px] lg:w-[420px] lg:h-[420px] rotate-[200deg] opacity-30 z-0">
          <svg viewBox="0 0 174 412" fill="none" className="w-full h-full">
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

        {/* Right Shape */}
        <div className="absolute right-[-5%] top-[30%] w-[200px] h-[200px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] rotate-[45deg] opacity-30 z-0">
          <svg viewBox="0 0 174 412" fill="none" className="w-full h-full">
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

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="scroll-animation font-['Poppins'] font-bold text-[40px] md:text-[56px] lg:text-[64px] text-white mb-6">
              I'm Glad You're Here
            </h1>
            <p className="scroll-animation font-['Poppins'] text-[20px] md:text-[24px] text-white leading-relaxed">
              If you've been searching for answers—for relief from symptoms that just won't go away, for a provider who truly listens—you're in the right place.
            </p>
          </div>
        </div>
      </section>

      {/* The Metabolic Hormone Balance Program Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="scroll-animation font-['Poppins'] font-bold text-[#61a94e] text-[18px] md:text-[20px] mb-4 uppercase">
              The Metabolic Hormone Balance Program
            </p>
            <h2 className="scroll-animation font-['Poppins'] font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#236189] mb-8">
              A Functional Approach to Hormone Health & Whole-Body Wellness
            </h2>
          </div>

          {/* Full Width Centered Paragraph */}
          <div className="max-w-6xl mx-auto mb-12">
            <p className="scroll-animation font-['Poppins'] text-[18px] md:text-[20px] text-[#565d6d] leading-[32px] text-center max-w-4xl mx-auto">
              Our Metabolic Hormone Balance Program takes a holistic, root-cause approach to health. We go beyond surface-level symptoms to help you restore hormone balance, support mental and emotional wellness, and uncover the underlying factors affecting your metabolism and energy.
            </p>
          </div>

          {/* Two Column Layout - Image + Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Column - Image */}
            <div className="scroll-animation-left relative order-2 lg:order-1">
              {/* Image */}
              <div className="rounded-[20px] overflow-hidden shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)] h-full">
                <img
                  src={img66194F98407B8Istockphoto1485705128170667A3}
                  alt="Metabolic Hormone Balance Program"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="scroll-animation-right order-1 lg:order-2 space-y-8">
              {/* What's Included */}
              <div className="bg-gradient-to-br from-[#f6faf5] to-[#f3f8fc] rounded-[20px] p-8 md:p-10">
                <h3 className="font-['Poppins'] font-bold text-[22px] md:text-[24px] text-[#236189] mb-6">
                  This program includes:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Personalized protocols tailored to your body and needs",
                    "Guidance on nutrition, movement, and lifestyle for hormone support",
                    "Focused strategies for mental clarity, emotional balance, and overall well-being"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <svg
                        className="w-[22px] h-[22px] shrink-0 mt-1"
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M12.2191 0.205077C12.578 -0.0877191 13.1072 -0.0670722 13.4418 0.267557C13.7765 0.602186 13.7972 1.13139 13.5043 1.49037L13.4418 1.55999L4.30192 10.6998C3.96731 11.0345 3.43811 11.0551 3.07919 10.7624L3.00954 10.6998L0.267557 7.95788L0.205077 7.88833C-0.0877193 7.52931 -0.067072 7.00011 0.267557 6.6655C0.602178 6.33085 1.13139 6.3102 1.49037 6.60298L1.55999 6.6655L3.65573 8.76119L12.1494 0.267557L12.2191 0.205077Z"
                          fill="#61A94E"
                        />
                      </svg>
                      <p className="font-['Poppins'] text-[16px] md:text-[17px] text-[#19191f] leading-[28px]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Full Width Centered Paragraph */}
          <div className="max-w-6xl mx-auto mt-12">
            <p className="font-['Poppins'] text-[17px] md:text-[18px] text-[#565d6d] leading-[30px] text-center max-w-4xl mx-auto">
              Because no two people are the same, we take time to develop a truly customized plan for you. Program details may vary based on your health history and goals, so we recommend scheduling a consultation to learn more.
            </p>
          </div>

          {/* CTA - Full Width Below */}
          <div className="max-w-5xl mx-auto mt-12">
            <div className="bg-[#236189] rounded-[20px] p-8 md:p-12 text-center">
              <h3 className="font-['Poppins'] font-bold text-[28px] md:text-[32px] text-white mb-4">
                Ready to take control of your health?
              </h3>
              <p className="font-['Poppins'] text-[18px] md:text-[20px] text-white mb-8">
                📅 Schedule your appointment today and start your journey toward balance and vitality.
              </p>
              <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white px-8 md:px-12 py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#549440] transition-colors flex items-center justify-center mx-auto">
                Book Your Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who I Am - Full Story Section */}
      <section className="py-16 md:py-20 lg:py-32 relative overflow-hidden">
        {/* Wave Background - Full Width using Conditions section background */}
        <div className="absolute inset-0 z-0">
          <Background />
        </div>

        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          {/* Mobile/Tablet Layout - Stacked */}
          <div className="lg:hidden grid grid-cols-1 gap-12 items-center">
            {/* Image */}
            <div className="relative order-2">
              {/* Decorative Icons */}
              <div className="absolute left-[-8%] top-[-10%] w-[150px] h-[350px] md:w-[180px] md:h-[420px] rotate-[45deg] opacity-30 z-0">
                <svg className="block size-full" fill="none" viewBox="0 0 208 494">
                  <path
                    d={aboutSvgPaths.p1d0dc600}
                    fill="url(#paint0_linear_story_icon_1)"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_story_icon_1"
                      x1="27.2102"
                      x2="486.084"
                      y1="127.403"
                      y2="358.695"
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

              <div className="absolute right-[-5%] bottom-[-8%] w-[150px] h-[350px] md:w-[180px] md:h-[420px] rotate-[225deg] opacity-30 z-0">
                <svg className="block size-full" fill="none" viewBox="0 0 208 494">
                  <path
                    d={aboutSvgPaths.p1d0dc600}
                    fill="url(#paint0_linear_story_icon_2)"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_story_icon_2"
                      x1="27.2102"
                      x2="486.084"
                      y1="127.403"
                      y2="358.695"
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

              {/* Image */}
              <div className="scroll-animation-fade relative z-10 max-w-[500px] mx-auto">
                <div className="rounded-[20px] overflow-hidden shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)]">
                  <img
                    src={img65A43F7E821F8Untitleddesign21}
                    alt="Megan Hormazdi, Nurse Practitioner and Functional Medicine Specialist"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="order-1">
              <h2 className="scroll-animation font-['Poppins'] font-bold text-[36px] md:text-[44px] text-white mb-8">
                Who I am...
              </h2>

              <div className="scroll-animation space-y-6 font-['Poppins'] text-[17px] md:text-[18px] text-white leading-[30px]">
                <p>
                  Hello! I'm <strong>Megan Hormazdi</strong>, a dedicated daughter, loving mother, experienced nurse practitioner, and a certified Health Coach.
                </p>

                <p>
                  In 2004, my life took a dramatic turn as my family and I left our homeland, Iran, seeking safety and a new beginning in the United States. The journey was challenging, requiring us to learn a new language, adapt to a different culture, and rebuild our lives from scratch.
                </p>

                <p>
                  Amidst the stress of this major transition, life presented me with a myriad of health challenges. At 28, I was diagnosed with ovarian cancer and was able to enter remission with the help of conventional medicine. Five years down the road, I was confronted with cancer again, but this time in my colon.
                </p>

                <p>
                  I tried various medications, diets, exercise routines, etc., but I still struggled with losing fat, feeling tired all the time, experiencing migraines, brain fog, and body aches. I finally decided I needed to address this in another way, and that's when I found <strong>Integrative Medicine</strong>.
                </p>

                <p>
                  Integrative Medicine delves deep into the root causes of physical, emotional, or spiritual challenges, paving the way for comprehensive healing. I've distilled my wealth of knowledge around mental health, holistic wellness, and harmonizing hormones, and transformed it into the{" "}
                  <button
                    onClick={() => setCurrentPage("services")}
                    className="text-white font-bold underline hover:text-white/90 transition-colors"
                  >
                    Metabolic Hormone Balance Program
                  </button>
                  , now available through our comprehensive care plans.
                </p>

                <p className="font-semibold text-[#61a94e]">
                  If you are looking for answers,{" "}
                  <button
                    onClick={() => setCurrentPage("contact")}
                    className="text-[#61a94e] underline hover:text-[#549440] transition-colors"
                  >
                    schedule a free consultation
                  </button>
                  {" "}or explore our{" "}
                  <button
                    onClick={() => setCurrentPage("blog")}
                    className="text-[#61a94e] underline hover:text-[#549440] transition-colors"
                  >
                    evidence-based approach
                  </button>
                  {" "}to hormone health.
                </p>
              </div>

              {/* Signature */}
              <div className="mt-10 pt-8 border-t border-white/30">
                <p className="font-['Poppins'] font-medium text-[20px] md:text-[22px] text-white">
                  Warmly,
                </p>
                <p className="font-['Poppins'] font-bold text-[24px] md:text-[26px] text-white mt-2">
                  Megan Hormazdi, FNP-BC
                </p>
                <p className="font-['Poppins'] text-[16px] md:text-[17px] text-white/90 mt-1">
                  Functional Medicine Practitioner | Hormone & Metabolic Health Expert
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Text wrapping around image */}
          <div className="hidden lg:block">
            <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[44px] lg:text-[48px] text-white mb-8">
              Who I am...
            </h2>

            {/* Container with floating image */}
            <div className="relative">
              {/* Floating Image */}
              <div className="float-right ml-8 mb-6 relative" style={{ width: '450px' }}>
                {/* Decorative Icons */}
                <div className="absolute left-[-15%] top-[-10%] w-[180px] h-[420px] rotate-[45deg] opacity-30 z-0 px-[57px] py-[0px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 208 494">
                    <path
                      d={aboutSvgPaths.p1d0dc600}
                      fill="url(#paint0_linear_story_icon_desktop_1)"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_story_icon_desktop_1"
                        x1="27.2102"
                        x2="486.084"
                        y1="127.403"
                        y2="358.695"
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

                <div className="absolute right-[-8%] bottom-[-8%] w-[180px] h-[420px] rotate-[225deg] opacity-30 z-0 mx-[0px] my-[-67px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 208 494">
                    <path
                      d={aboutSvgPaths.p1d0dc600}
                      fill="url(#paint0_linear_story_icon_desktop_2)"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_story_icon_desktop_2"
                        x1="27.2102"
                        x2="486.084"
                        y1="127.403"
                        y2="358.695"
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

                {/* Image */}
                <div className="relative z-10">
                  <div className="rounded-[20px] overflow-hidden shadow-[0px_8px_24px_0px_rgba(0,0,0,0.15)]">
                    <img
                      src={img65A43F7E821F8Untitleddesign21}
                      alt="Megan Hormazdi, Nurse Practitioner and Functional Medicine Specialist"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Text content that wraps around the image */}
              <div className="space-y-6 font-['Poppins'] text-[17px] md:text-[18px] text-white leading-[30px]">
                <p>
                  Hello! I'm <strong>Megan Hormazdi</strong>, a dedicated daughter, loving mother, experienced nurse practitioner, and a certified Health Coach.
                </p>

                <p>
                  In 2004, my life took a dramatic turn as my family and I left our homeland, Iran, seeking safety and a new beginning in the United States. The journey was challenging, requiring us to learn a new language, adapt to a different culture, and rebuild our lives from scratch.
                </p>

                <p>
                  Amidst the stress of this major transition, life presented me with a myriad of health challenges. At 28, I was diagnosed with ovarian cancer and was able to enter remission with the help of conventional medicine. Five years down the road, I was confronted with cancer again, but this time in my colon.
                </p>

                <p>
                  I tried various medications, diets, exercise routines, etc., but I still struggled with losing fat, feeling tired all the time, experiencing migraines, brain fog, and body aches. I finally decided I needed to address this in another way, and that's when I found <strong>Integrative Medicine</strong>.
                </p>

                <p>
                  Integrative Medicine delves deep into the root causes of physical, emotional, or spiritual challenges, paving the way for comprehensive healing. I've distilled my wealth of knowledge around mental health, holistic wellness, and harmonizing hormones, and transformed it into the{" "}
                  <button
                    onClick={() => setCurrentPage("services")}
                    className="text-[#236189] font-bold underline hover:text-[#61a94e] transition-colors"
                  >
                    Metabolic Hormone Balance Program
                  </button>
                  , now available through our comprehensive care plans.
                </p>

                <p className="font-semibold text-[#236189]">
                  If you are looking for answers,{" "}
                  <button
                    onClick={() => setCurrentPage("contact")}
                    className="text-[#236189] underline hover:text-[#61a94e] transition-colors"
                  >
                    schedule a free consultation
                  </button>
                  {" "}or explore our{" "}
                  <button
                    onClick={() => setCurrentPage("blog")}
                    className="text-[#236189] underline hover:text-[#61a94e] transition-colors"
                  >
                    evidence-based approach
                  </button>
                  {" "}to hormone health.
                </p>
              </div>

              {/* Signature - appears after text wrap completes */}
              <div className="clear-both mt-10 pt-8 border-t border-[#236189]/30">
                <p className="font-['Poppins'] font-medium text-[20px] md:text-[22px] text-[#236189]">
                  Warmly,
                </p>
                <p className="font-['Poppins'] font-bold text-[24px] md:text-[26px] text-[#236189] mt-2">
                  Megan Hormazdi, FNP-BC
                </p>
                <p className="font-['Poppins'] text-[16px] md:text-[17px] text-[#565d6d] mt-1">
                  Functional Medicine Practitioner | Hormone & Metabolic Health Expert
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#236189] mb-12">
              Let's Work Together
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white px-8 md:px-12 py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#549440] transition-colors flex items-center justify-center">
                Book Your Free Consultation
              </a>
              <a 
                href="/#faq"
                className="bg-[#236189] border border-white text-white px-8 md:px-12 py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#1a4d6b] transition-colors flex items-center justify-center"
              >
                Learn More
              </a>
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
                Your partner in holistic hormone health and metabolic wellness.
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-[22px] items-center">
                {/* YouTube */}
                <a
                  href="https://www.youtube.com/channel/UCgJV1_oWfp7QpMeIksq3JXA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg className="w-[21px] h-[15px]" viewBox="0 0 21 15" fill="currentColor">
                    <path d="M20.533 2.351a2.625 2.625 0 00-1.846-1.858C17.062 0 10.5 0 10.5 0S3.938 0 2.313.493A2.625 2.625 0 00.467 2.351C0 3.984 0 7.402 0 7.402s0 3.418.467 5.051a2.625 2.625 0 001.846 1.858C3.938 15 10.5 15 10.5 15s6.562 0 8.187-.689a2.625 2.625 0 001.846-1.858c.467-1.633.467-5.051.467-5.051s0-3.418-.467-5.051zM8.4 10.548V4.256l5.467 3.146L8.4 10.548z" />
                  </svg>
                </a>
                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@mhormazdi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg className="w-[17px] h-[19px]" viewBox="0 0 17 19" fill="currentColor">
                    <path d="M14.59 4.69a4.83 4.83 0 01-3.77-4.25V0h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V7.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 000 18.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1.04-.1z" />
                  </svg>
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/people/Your-Integrative-Health/61579347443116/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg className="w-[11px] h-[19px]" viewBox="0 0 11 19" fill="currentColor">
                    <path d="M7.31345 18.3945V10.1839H10.2081L10.6415 6.98403H7.31337V4.94106C7.31337 4.01463 7.58355 3.38332 8.97899 3.38332L10.7587 3.38252V0.520603C10.4509 0.481677 9.39435 0.394531 8.16537 0.394531C5.59935 0.394531 3.84261 1.88571 3.84261 4.62426V6.98403H0.940491V10.1839H3.84261V18.3945H7.31345V18.3945Z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/meganhormazdi/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#61a94e] hover:text-[#549440] transition-colors"
                >
                  <svg className="w-[19px] h-[19px]" viewBox="0 0 19 19" fill="currentColor">
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
                  <a href="/" className="hover:text-[#61a94e] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#services" className="hover:text-[#61a94e] transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:text-[#61a94e] transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="hover:text-[#61a94e] transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/#contacts" className="hover:text-[#61a94e] transition-colors">
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
