import { Helmet } from "react-helmet-async";
import { CheckCircle2, Users, Calendar, MessageCircle, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "./assets/shutterstock_2635779973.jpg";
import logo from "./assets/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";

export default function SalivaTest() {
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Preserve UTMs/GCLID from URL
  useEffect(() => {
    const withQuery = (href: string) => {
      if (typeof window === 'undefined') return href;
      const qs = window.location.search;
      return qs ? `${href}${href.includes('?') ? '&' : '?'}${qs.slice(1)}` : href;
    };

    setCheckoutUrl(withQuery("https://yourintegrativehealth.functionalhealingmedicine.com/lab/zrt-hormone-test/checkout-page"));
  }, []);

  const symptoms = [
    "Perimenopause changes that feel overwhelming",
    "Fatigue that won't quit no matter how much you rest",
    "Weight fluctuations you can't control",
    "Anxiety or mood swings that came out of nowhere",
    "Sleep issues — trouble falling or staying asleep",
    "Hot flashes or night sweats disrupting your life",
    "Brain fog making it hard to focus or remember",
    "Low libido affecting your relationships",
    "PMS symptoms that have changed or worsened",
    "Gut symptoms like bloating or digestive issues",
    "Symptoms despite 'normal' lab work"
  ];

  const groupTopics = [
    "Hormone balance during perimenopause",
    "Gut health, digestion, and bloating",
    "Detox pathways and inflammation",
    "Stress, cortisol patterns, and adrenal support",
    "Nutrient deficiencies affecting metabolism and mood",
    "Symptom management on BHRT",
    "Peptides for metabolism, libido, energy, healing, and sexual wellness",
    "How hormones, gut function, and stress interact"
  ];

  const outcomes = [
    "Understand your hormone patterns completely",
    "Know exactly what is causing your symptoms",
    "Have a personalized plan for balancing hormones",
    "Feel confident managing flares or changes",
    "Improve energy, sleep, mood, metabolism, and overall well-being",
    "Have long-term strategies for hormonal health"
  ];

  const programSteps = [
    { step: "1", title: "Enroll", description: "Secure your spot in the January cohort" },
    { step: "2", title: "Receive Your Test Kit", description: "Hormone test mailed directly to your home" },
    { step: "3", title: "Complete Intake", description: "Fill out your comprehensive health questionnaire" },
    { step: "4", title: "Join the Community", description: "Get access to the private Skool community" },
    { step: "5", title: "1:1 Hormone Review", description: "Schedule your private consultation with Megan" },
    { step: "6", title: "Group Program Begins", description: "January 7, 2026 — your transformation starts" }
  ];

  return (
    <>
      <Helmet>
        <title>3-Month Hormone Reset Group Program | Your Integrative Health</title>
        <meta
          name="description"
          content="Join our 3-month hormone reset program: comprehensive testing, 1:1 consultation, 6 live group sessions, and community support. Finally understand why you feel the way you do."
        />
        <meta name="keywords" content="hormone reset program, perimenopause support, hormone balance, group wellness program, functional medicine, women's health" />
        <meta name="robots" content="noindex, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="3-Month Hormone Reset Group Program | Your Integrative Health" />
        <meta property="og:description" content="Accurate hormone testing, personalized plans, and group support to help you feel like yourself again." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/group-program" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="3-Month Hormone Reset Group Program | Your Integrative Health" />
        <meta name="twitter:description" content="Accurate hormone testing, personalized plans, and group support to help you feel like yourself again." />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative pt-48 pb-40 md:pt-56 md:pb-52 lg:pt-64 lg:pb-60 overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-no-repeat"
            style={{
              backgroundImage: `url(${heroImage})`,
              backgroundPosition: 'center center',
              backgroundSize: 'cover',
              backgroundColor: '#236189',
            }}
          >
            <style>{`
              @media (min-width: 1280px) {
                .absolute.inset-0.bg-no-repeat {
                  background-position: center 30% !important;
                }
              }
            `}</style>
          </div>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, rgba(35,97,137,0.50) 0%, rgba(26,90,125,0.45) 50%, rgba(97,169,78,0.40) 100%)'
            }}
          ></div>

          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-96 h-96 opacity-15" style={{
            background: 'radial-gradient(circle, rgba(97,169,78,0.4) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 opacity-15" style={{
            background: 'radial-gradient(circle, rgba(35,97,137,0.5) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}></div>

          {/* Logo */}
          <div className="absolute top-4 left-0 right-0 z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-center">
              <div className="inline-block bg-white rounded-full shadow-lg" style={{ paddingLeft: '0.5rem', paddingRight: '0.5rem', paddingTop: '0.45rem', paddingBottom: '0.45rem' }}>
                <img
                  src={logo}
                  alt="Your Integrative Health"
                  className="h-12 w-auto object-contain"
                  style={{ maxHeight: '48px' }}
                />
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
            <div className="max-w-5xl mx-auto text-center" style={{ marginTop: '100px', marginBottom: '60px' }}>
              {/* Cohort Badge */}
              <div className="inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <p className="font-['Poppins'] text-[16px] md:text-[18px] text-white font-medium">
                  🗓️ Next Cohort Begins January 7, 2026
                </p>
              </div>

              <h1 className="font-['Poppins'] font-bold text-[38px] md:text-[52px] lg:text-[60px] xl:text-[68px] leading-tight mb-6 text-white">
                3-Month Hormone Reset Group Program
              </h1>
              <p className="font-['Poppins'] text-[20px] md:text-[24px] leading-relaxed mb-10 text-white max-w-4xl mx-auto">
                Finally understand why you feel the way you do — and how to fix it. Accurate hormone testing, personalized care, group education, and community support.
              </p>

              <a
                href={checkoutUrl}
                data-analytics="cta:hero"
                className="inline-block bg-[#61a94e] text-white px-10 py-5 rounded-[10px] font-['Poppins'] font-semibold text-[20px] md:text-[22px] hover:bg-[#549440] transition-all shadow-xl hover:shadow-2xl mb-4"
              >
                Join the January Cohort — $997
              </a>

              <p className="font-['Poppins'] text-[15px] md:text-[16px] text-white max-w-xl mx-auto opacity-90">
                Limited spots available • Enrollment closes before program start
              </p>
            </div>
          </div>
        </section>

        {/* Who This Is For Section */}
        <section className="pt-16 pb-8 md:pt-20 md:pb-10 bg-gradient-to-b from-white via-[#f6faf5]/30 to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-[#236189] text-center mb-6">
                Is This You?
              </h2>

              <p className="font-['Poppins'] text-[18px] md:text-[20px] text-[#565d6d] leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                You've been told your labs are "normal" — but you know something isn't right. This program is built for women experiencing:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-2xl shadow-md">
                    <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                    <p className="font-['Poppins'] text-[15px] md:text-[16px] text-gray-700">{symptom}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bridge to Hope */}
        <section className="py-8 md:py-12 bg-gradient-to-br from-[#f6faf5] via-white to-[#f6faf5]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-1 bg-[#61a94e] mx-auto mb-8"></div>
              <p className="font-['Poppins'] text-[22px] md:text-[28px] text-[#236189] leading-relaxed font-medium italic">
                "I finally understand what's happening in my body — and I have a plan to feel like myself again."
              </p>
              <p className="font-['Poppins'] text-[16px] text-[#565d6d] mt-4">— What our program participants say</p>
              <div className="w-16 h-1 bg-[#61a94e] mx-auto mt-8"></div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-[#236189] text-center mb-4">
                What You'll Receive
              </h2>

              <p className="font-['Poppins'] text-[18px] md:text-[20px] text-[#565d6d] leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                A complete hormone transformation system combining testing, personalized care, education, and community support.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {/* Card 1 - Hormone Testing */}
                <div 
                  className="bg-white p-8 overflow-hidden"
                  style={{ borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                >
                  <div 
                    className="w-16 h-16 flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#61a94e', borderRadius: '20px' }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[22px] md:text-[24px] text-[#236189] mb-5">
                    Comprehensive Hormone Testing
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Saliva hormone test mailed directly to your home</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Instructions for when and how to test (even with irregular cycles)</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Guidance on using ovulation predictor kits for accurate results</p>
                    </li>
                  </ul>
                </div>

                {/* Card 2 - 1:1 Consultation */}
                <div 
                  className="bg-white p-8 overflow-hidden"
                  style={{ borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                >
                  <div 
                    className="w-16 h-16 flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#236189', borderRadius: '20px' }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[22px] md:text-[24px] text-[#236189] mb-5">
                    Private 1:1 Consultation
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Review your complete hormone map with Megan</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Identify root causes of your symptoms</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Build your personalized step-by-step hormone plan</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Discuss metabolic, adrenal, stress, and lifestyle factors</p>
                    </li>
                  </ul>
                </div>

                {/* Card 3 - Group Sessions */}
                <div 
                  className="bg-white p-8 overflow-hidden"
                  style={{ borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                >
                  <div 
                    className="w-16 h-16 flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#61a94e', borderRadius: '20px' }}
                  >
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[22px] md:text-[24px] text-[#236189] mb-5">
                    Six Live Group Sessions
                  </h3>
                  <div 
                    className="p-4 mb-5"
                    style={{ backgroundColor: 'rgba(35,97,137,0.08)', borderRadius: '12px' }}
                  >
                    <p className="font-['Poppins'] text-[15px] text-[#236189] font-medium">
                      📅 Every other Wednesday • 6:30 PM PST • 1 hour each
                    </p>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Teaching, coaching, and live Q&A</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Education + accountability</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Ask questions in real time</p>
                    </li>
                  </ul>
                </div>

                {/* Card 4 - Skool Community */}
                <div 
                  className="bg-white p-8 overflow-hidden"
                  style={{ borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                >
                  <div 
                    className="w-16 h-16 flex items-center justify-center mb-6"
                    style={{ backgroundColor: '#236189', borderRadius: '20px' }}
                  >
                    <MessageCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[22px] md:text-[24px] text-[#236189] mb-5">
                    Private Skool Community
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Full access to resource library</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Video replays of all sessions</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Education modules (PCOS, endometriosis, detox, longevity)</p>
                    </li>
                    <li className="flex items-start gap-4">
                      <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-0.5" />
                      <p className="font-['Poppins'] text-[15px] text-[#565d6d]">Supportive space to ask questions between visits</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Group Session Topics */}
        <section className="py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #236189 0%, #1a5a7d 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full font-['Poppins'] font-medium text-[14px] mb-4">
                  6 LIVE GROUP SESSIONS
                </span>
                <h2 className="font-['Poppins'] font-bold text-[28px] md:text-[36px] text-white mb-4">
                  What We'll Cover Together
              </h2>
                <p className="font-['Poppins'] text-[18px] text-white/90 max-w-2xl mx-auto">
                  Each session dives deep into the topics that matter most for your hormone health
                  </p>
                </div>

              <div className="space-y-4">
                {groupTopics.map((topic, index) => (
                  <div 
                    key={index} 
                    className="flex items-center bg-white p-5 md:p-6"
                    style={{ borderRadius: '16px', boxShadow: '0 4px 20px rgba(0,0,0,0.15)', gap: '20px' }}
                  >
                    <div 
                      className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: '#61a94e', borderRadius: '12px' }}
                    >
                      <span className="text-white font-bold text-lg md:text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>{index + 1}</span>
                    </div>
                    <p className="text-base md:text-lg text-[#236189] font-semibold" style={{ fontFamily: 'Poppins, sans-serif', marginLeft: '8px' }}>{topic}</p>
                  </div>
                ))}
                </div>

              <div className="mt-10 text-center">
                <p className="font-['Poppins'] text-[15px] text-white italic">
                  All sessions include teaching, coaching, and live Q&A — every other Wednesday at 6:30 PM PST
                  </p>
                </div>
            </div>
          </div>
        </section>

        {/* Program Flow / How It Works */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[28px] md:text-[36px] text-[#236189] text-center mb-4">
                How It Works
              </h2>
              <p className="font-['Poppins'] text-[18px] text-[#565d6d] text-center mb-12 max-w-2xl mx-auto">
                From enrollment to transformation — here's your journey:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {programSteps.map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6"
                    style={{ borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                  >
                    <div 
                      className="w-14 h-14 flex items-center justify-center mb-5"
                      style={{ backgroundColor: '#61a94e', borderRadius: '16px' }}
                    >
                      <span className="text-white font-bold text-[22px]" style={{ fontFamily: 'Poppins, sans-serif' }}>{item.step}</span>
                    </div>
                    <h3 className="font-['Poppins'] font-bold text-[18px] text-[#236189] mb-3">{item.title}</h3>
                    <p className="font-['Poppins'] text-[15px] text-[#565d6d] leading-relaxed">{item.description}</p>
                  </div>
                ))}
                  </div>
                </div>
              </div>
        </section>

        {/* Outcomes Section */}
        <section className="py-16 md:py-20" style={{ background: 'linear-gradient(135deg, #236189 0%, #1a5a7d 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[28px] md:text-[36px] text-white text-center mb-4">
                By The End of 3 Months, You Will…
              </h2>
              <p className="font-['Poppins'] text-[18px] text-white text-center mb-12 max-w-2xl mx-auto">
                Real results. Real transformation. Here's what participants achieve:
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {outcomes.map((outcome, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-6"
                    style={{ borderRadius: '24px', boxShadow: '0 10px 40px rgba(0,0,0,0.08)' }}
                  >
                    <div 
                      className="w-12 h-12 flex items-center justify-center mb-5"
                      style={{ backgroundColor: 'rgba(97,169,78,0.15)', borderRadius: '14px' }}
                    >
                      <CheckCircle2 className="w-6 h-6 text-[#61a94e]" />
                    </div>
                    <p className="font-['Poppins'] text-[17px] text-[#236189] font-semibold leading-snug">{outcome}</p>
                  </div>
                ))}
              </div>
                  </div>
                </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#61a94e]/10 px-6 py-3 rounded-full mb-6">
                <Calendar className="w-5 h-5 text-[#61a94e]" />
                <p className="font-['Poppins'] text-[16px] text-[#236189] font-medium">
                  Cohort Begins January 7, 2026
                  </p>
                </div>

              <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-[#236189] mb-6">
                Ready to Reset Your Hormones?
              </h2>

              <p className="font-['Poppins'] text-[18px] text-[#565d6d] mb-8 max-w-2xl mx-auto">
                Join a supportive community of women who are finally getting answers and feeling like themselves again.
              </p>

              <a
                href={checkoutUrl}
                data-analytics="cta:middle"
                className="inline-block bg-[#61a94e] text-white px-12 py-5 rounded-[10px] font-['Poppins'] font-semibold text-[20px] md:text-[22px] hover:bg-[#549440] transition-all shadow-xl hover:shadow-2xl mb-4"
              >
                Join the January Cohort — $997
              </a>

              <p className="font-['Poppins'] text-[14px] text-[#565d6d]">
                Enroll before the deadline so your hormone test arrives on time
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white via-[#f6faf5]/40 to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[28px] md:text-[36px] text-[#236189] text-center mb-10">
                Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6faf5]/50 transition-colors"
                  >
                    <h3 className="font-['Poppins'] font-semibold text-[18px] md:text-[20px] text-[#236189]">
                      When does the program start?
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-[#61a94e] flex-shrink-0 transition-transform ${
                        openFaq === 1 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === 1 && (
                    <div className="px-6 pb-6">
                      <p className="font-['Poppins'] text-[16px] text-[#565d6d] leading-relaxed">
                        The next cohort begins January 7, 2026. Group sessions are held every other Wednesday at 6:30 PM PST for 3 months (6 sessions total). You must enroll before the deadline so your hormone test kit arrives on time for you to complete testing before the program starts.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6faf5]/50 transition-colors"
                  >
                    <h3 className="font-['Poppins'] font-semibold text-[18px] md:text-[20px] text-[#236189]">
                      What if I can't make a live session?
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-[#61a94e] flex-shrink-0 transition-transform ${
                        openFaq === 2 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === 2 && (
                    <div className="px-6 pb-6">
                      <p className="font-['Poppins'] text-[16px] text-[#565d6d] leading-relaxed">
                        All group sessions are recorded and available in the private Skool community. You can watch the replays anytime and still submit questions for the next session. We encourage live attendance when possible for the interactive Q&A, but we understand life happens!
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6faf5]/50 transition-colors"
                  >
                    <h3 className="font-['Poppins'] font-semibold text-[18px] md:text-[20px] text-[#236189]">
                      How is this different from just getting hormone testing?
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-[#61a94e] flex-shrink-0 transition-transform ${
                        openFaq === 3 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === 3 && (
                    <div className="px-6 pb-6">
                      <p className="font-['Poppins'] text-[16px] text-[#565d6d] leading-relaxed">
                        Testing alone doesn't solve the problem. This program gives you the complete picture: accurate testing PLUS a personalized 1:1 consultation to understand YOUR specific patterns, PLUS 3 months of education and support to actually implement changes, PLUS a community of women on the same journey. It's the difference between getting data and getting results.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 4 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6faf5]/50 transition-colors"
                  >
                    <h3 className="font-['Poppins'] font-semibold text-[18px] md:text-[20px] text-[#236189]">
                      Is this covered by insurance?
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-[#61a94e] flex-shrink-0 transition-transform ${
                        openFaq === 4 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === 4 && (
                    <div className="px-6 pb-6">
                      <p className="font-['Poppins'] text-[16px] text-[#565d6d] leading-relaxed">
                        This is a self-pay program and is not typically covered by insurance. However, we can provide a detailed receipt (superbill) that you can submit to your insurance for possible reimbursement depending on your plan. Many women find the investment worth it — especially when traditional healthcare has failed to provide answers.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 5 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6faf5]/50 transition-colors"
                  >
                    <h3 className="font-['Poppins'] font-semibold text-[18px] md:text-[20px] text-[#236189]">
                      What happens after the 3 months?
                    </h3>
                    <ChevronDown
                      className={`w-6 h-6 text-[#61a94e] flex-shrink-0 transition-transform ${
                        openFaq === 5 ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaq === 5 && (
                    <div className="px-6 pb-6">
                      <p className="font-['Poppins'] text-[16px] text-[#565d6d] leading-relaxed">
                        You'll have the knowledge, tools, and personalized plan to continue your hormone health journey independently. You'll also retain access to the Skool community resources and replays. For those who want ongoing support, we offer continued care options that we can discuss during the program.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-24 text-white" style={{ background: 'linear-gradient(135deg, #236189 0%, #1a5a7d 50%, #61a94e 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-['Poppins'] text-[24px] md:text-[32px] leading-relaxed mb-10 font-medium">
                Stop guessing. Start understanding your body. Feel like yourself again.
              </p>

              <a
                href={checkoutUrl}
                data-analytics="cta:final"
                className="inline-block bg-white text-[#61a94e] px-10 py-5 rounded-[10px] font-['Poppins'] font-bold text-[20px] md:text-[22px] hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl mb-4"
              >
                Join the January Cohort — $997
              </a>

              <p className="font-['Poppins'] text-[15px] md:text-[16px] text-white/90">
                Testing + 1:1 Consultation + 6 Group Sessions + Community Access
              </p>
            </div>
          </div>
        </section>

        {/* Trust / Clinic Footer */}
        <section className="py-12 bg-[#f6faf5] border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#236189] mb-2">
                Megan Hormazdi, FNP-BC
              </h3>
              <p className="font-['Poppins'] text-[15px] text-[#565d6d] mb-6">
                Your Integrative Health | Functional Medicine
              </p>

              <div className="text-xs text-[#565d6d] font-['Poppins'] leading-relaxed max-w-2xl mx-auto">
                <p className="mb-2">
                  <strong>Medical Disclaimer:</strong> This program is for informational and educational purposes. It is not intended to diagnose, treat, cure, or prevent any disease. Results should be reviewed with a qualified healthcare provider.
                </p>
                <p>
                  Individual results may vary. The statements on this page have not been evaluated by the Food and Drug Administration.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
