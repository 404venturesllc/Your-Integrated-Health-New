import { Helmet } from "react-helmet-async";
import { CheckCircle2, PlayCircle, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "./assets/shutterstock_2635779973.jpg";
import logo from "./assets/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";

export default function ZRTHormoneTest() {
  const [checkoutUrl, setCheckoutUrl] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Preserve UTMs/GCLID from URL
  useEffect(() => {
    const withQuery = (href: string) => {
      if (typeof window === 'undefined') return href;
      const qs = window.location.search;
      return qs ? `${href}${href.includes('?') ? '&' : '?'}${qs.slice(1)}` : href;
    };

    setCheckoutUrl(withQuery("https://yourintegrativehealth.functionalhealingmedicine.com/lab/zrt-hormone-test/checkout"));
  }, []);

  const symptoms = [
    "Your energy crashes by 2 PM, no matter how much sleep you got",
    "Your weight won't budge despite diet and exercise",
    "You feel anxious, irritable, or 'off' for no clear reason",
    "Your periods are unpredictable, painful, or gone altogether",
    "Brain fog makes it hard to focus or remember simple things",
    "Your libido has disappeared",
    "You're exhausted but can't fall or stay asleep"
  ];

  const panelIncludes = [
    "Estradiol (E2)",
    "Progesterone (Pg)",
    "Testosterone (T)",
    "DHEA",
    "Cortisol × 4 (morning, noon, evening, night)"
  ];

  const outcomes = [
    "Your cortisol rhythm: are you running on empty or stuck in overdrive?",
    "Your estrogen-to-progesterone balance: is one dominating the other?",
    "Your DHEA and testosterone context: the building blocks of resilience and vitality"
  ];

  return (
    <>
      <Helmet>
        <title>ZRT Women's Hormone Saliva Test | Your Integrative Health</title>
        <meta
          name="description"
          content="You're not broken. Your hormones are trying to tell you something. Get answers with our comprehensive at-home hormone test + personalized review with Megan Hormazdi, FNP-BC."
        />
        <meta name="keywords" content="hormone test, saliva hormone test, women's health, hormone imbalance, cortisol test, estrogen progesterone test" />
        <meta name="robots" content="noindex, follow" />

        {/* Open Graph */}
        <meta property="og:title" content="ZRT Women's Hormone Saliva Test | Your Integrative Health" />
        <meta property="og:description" content="You're not broken. Your hormones are trying to tell you something. Get answers with our comprehensive at-home hormone test." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/zrt-hormone-test" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ZRT Women's Hormone Saliva Test | Your Integrative Health" />
        <meta name="twitter:description" content="You're not broken. Your hormones are trying to tell you something. Get answers with our comprehensive at-home hormone test." />
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
              background: 'linear-gradient(135deg, rgba(35,97,137,0.45) 0%, rgba(26,90,125,0.40) 50%, rgba(97,169,78,0.35) 100%)'
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
              <h1 className="font-['Poppins'] font-bold text-[42px] md:text-[56px] lg:text-[64px] xl:text-[72px] leading-tight mb-6 text-white">
                Find Out What Your Hormones Are Really Saying
              </h1>
              <p className="font-['Poppins'] text-[20px] md:text-[24px] leading-relaxed mb-10 text-white">
                You're not broken. Your hormones are trying to tell you what's keeping you exhausted, foggy, and off balance, and we're here to help you listen.
              </p>

              <a
                href={checkoutUrl}
                data-analytics="cta:hero"
                className="inline-block bg-[#61a94e] text-white px-10 py-5 rounded-[10px] font-['Poppins'] font-semibold text-[20px] md:text-[22px] hover:bg-[#549440] transition-all shadow-xl hover:shadow-2xl mb-4"
              >
                Start Your Hormone Investigation - $249
              </a>

              <p className="font-['Poppins'] text-[15px] md:text-[16px] text-white max-w-xl mx-auto opacity-90">
                Includes at-home test kit + 30-minute personalized review with Megan Hormazdi, FNP-BC
              </p>
            </div>
          </div>
        </section>

        {/* Symptom Story Section */}
        <section className="pt-16 pb-8 md:pt-20 md:pb-10 bg-gradient-to-b from-white via-[#f6faf5]/30 to-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-[#236189] text-center mb-6">
                Does This Sound Familiar?
              </h2>

              <p className="font-['Poppins'] text-[18px] md:text-[20px] text-[#565d6d] leading-relaxed mb-10 text-center max-w-3xl mx-auto">
                You've tried everything. You've cleaned up your diet, started exercising, cut out caffeine, tried supplements. But something still feels off.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {symptoms.map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#f6faf5] p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#61a94e] flex-shrink-0 mt-0.5" />
                    <p className="font-['Poppins'] text-[16px] md:text-[17px] text-gray-700">{symptom}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bridge to Hope */}
        <section className="py-8 md:py-12 bg-[#f6faf5]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-1 bg-[#61a94e] mx-auto mb-8"></div>
              <p className="font-['Poppins'] text-[22px] md:text-[28px] text-[#236189] leading-relaxed font-medium italic">
                Everything looks "normal" on your bloodwork… but you know something isn't right.
              </p>
              <div className="w-16 h-1 bg-[#61a94e] mx-auto mt-8"></div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-[#f6faf5] via-white to-[#f6faf5]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-l-4 border-[#61a94e]">
                <p className="font-['Poppins'] text-[18px] md:text-[20px] text-[#236189] leading-relaxed italic mb-6">
                  "After years of being told my labs were fine, this test finally showed me why I felt off."
                </p>
                <div className="flex items-center gap-3 pt-4 border-t-2 border-[#f6faf5]">
                  <div className="w-12 h-12 bg-[#61a94e] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white font-['Poppins'] font-bold text-xl">S</span>
                  </div>
                  <div>
                    <p className="font-['Poppins'] text-[16px] font-semibold text-[#236189]">
                      Sarah, 42
                    </p>
                    <p className="font-['Poppins'] text-[13px] text-[#565d6d]">
                      Verified Patient
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Educational / Solution Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-[#236189] text-center mb-4">
                Let's Investigate, Not Guess
              </h2>

              <p className="font-['Poppins'] text-[18px] md:text-[20px] text-[#565d6d] leading-relaxed mb-12 text-center max-w-3xl mx-auto">
                Traditional bloodwork measures hormones in your blood, but that's not where the action happens. Your hormones work inside your cells, and saliva testing captures what your body is actually using.
              </p>

              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div>
                  <p className="font-['Poppins'] text-[17px] md:text-[18px] text-[#565d6d] leading-relaxed mb-8 text-center lg:text-left">
                    The ZRT Women's Hormone Panel maps your hormone landscape across a full day. We're not looking for one-size-fits-all "normal." We're looking for <strong>your</strong> pattern, the clues your body is giving us.
                  </p>

                  <h3 className="font-['Poppins'] font-semibold text-[22px] text-[#236189] mb-4">
                    This test reveals:
                  </h3>

                  <div className="space-y-3">
                    {outcomes.map((outcome, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#61a94e] flex-shrink-0 mt-1" />
                        <p className="font-['Poppins'] text-[16px] md:text-[17px] text-gray-700">{outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-[#236189]/5 to-[#61a94e]/5 p-8 md:p-10 rounded-3xl border border-[#236189]/10 shadow-lg">
                  <div className="mb-6">
                    <svg className="w-16 h-16 text-[#61a94e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <blockquote className="font-['Poppins'] text-[17px] md:text-[19px] text-[#236189] leading-relaxed italic">
                    "I don't just look at numbers. I decode the signals your body is sending and help you understand what they mean for <em>your</em> life."
                  </blockquote>
                  <p className="font-['Poppins'] text-[15px] text-[#565d6d] mt-4">
                    - Megan Hormazdi, FNP-BC
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#f6faf5] via-white to-[#f6faf5]">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-[#236189] text-center mb-4">
                What's Included in Your Hormone Investigation
              </h2>

              <p className="font-['Poppins'] text-[18px] text-[#565d6d] text-center mb-12 max-w-2xl mx-auto">
                Everything you need to understand what's happening and what to do next.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {/* Card 1 */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
                  <div className="w-12 h-12 bg-[#61a94e]/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#61a94e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[20px] md:text-[22px] text-[#236189] mb-3">
                    At-Home Saliva Kit
                  </h3>
                  <p className="font-['Poppins'] text-[15px] md:text-[16px] text-[#565d6d] leading-relaxed mb-4">
                    Simple, non-invasive collection you do at home. Ships directly to your door with prepaid return shipping to the lab.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
                  <div className="w-12 h-12 bg-[#236189]/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#236189]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[20px] md:text-[22px] text-[#236189] mb-3">
                    Comprehensive Hormone Panel
                  </h3>
                  <ul className="space-y-2">
                    {panelIncludes.map((item, index) => (
                      <li key={index} className="font-['Poppins'] text-[15px] md:text-[16px] text-[#565d6d] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#61a94e] rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card 3 */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
                  <div className="w-12 h-12 bg-[#61a94e]/10 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-[#61a94e]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[20px] md:text-[22px] text-[#236189] mb-3">
                    30-Minute Personalized Review
                  </h3>
                  <p className="font-['Poppins'] text-[15px] md:text-[16px] text-[#565d6d] leading-relaxed">
                    Meet with Megan Hormazdi, FNP-BC to walk through your results, understand what they mean, and map your next steps.
                  </p>
                </div>

                {/* Card 4 */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-[0px_4px_20px_0px_rgba(0,0,0,0.08)]">
                  <div className="w-12 h-12 bg-[#236189]/10 rounded-full flex items-center justify-center mb-4">
                    <PlayCircle className="w-6 h-6 text-[#236189]" />
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[20px] md:text-[22px] text-[#236189] mb-3">
                    Educational Video Lesson
                  </h3>
                  <p className="font-['Poppins'] text-[15px] md:text-[16px] text-[#565d6d] leading-relaxed">
                    Learn how to read your results and understand the hormone story your body is telling.
                  </p>
                </div>
              </div>

              <div className="bg-[#236189]/5 border-l-4 border-[#61a94e] p-6 rounded-lg">
                <p className="font-['Poppins'] text-[15px] md:text-[16px] text-[#565d6d]">
                  <strong className="text-[#236189]">Investment applies toward ongoing care:</strong> If you continue with our concierge membership, your full $249 applies toward your first month.
                </p>
              </div>
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
                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6faf5]/50 transition-colors"
                  >
                    <h3 className="font-['Poppins'] font-semibold text-[18px] md:text-[20px] text-[#236189]">
                      How do I take the saliva test?
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
                        The test kit comes with everything you need and clear instructions. You'll collect saliva samples at four specific times throughout the day (morning, noon, evening, and night). Simply spit into the collection tubes, seal them, and ship them back to the lab using the prepaid return envelope. No needles, no blood draws—just easy, at-home collection.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6faf5]/50 transition-colors"
                  >
                    <h3 className="font-['Poppins'] font-semibold text-[18px] md:text-[20px] text-[#236189]">
                      How long until I get my results?
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
                        After the lab receives your samples, results typically take 7-10 business days. You'll receive your comprehensive report via email, and then we'll schedule your 30-minute personalized review session with Megan Hormazdi, FNP-BC to walk through your results and discuss what they mean for your health.
                      </p>
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f6faf5]/50 transition-colors"
                  >
                    <h3 className="font-['Poppins'] font-semibold text-[18px] md:text-[20px] text-[#236189]">
                      Is this test covered by insurance?
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
                        This is a self-pay test and is not typically covered by insurance. However, we provide you with a detailed receipt (superbill) that you can submit to your insurance company for possible reimbursement, depending on your plan. Many patients find that the investment in understanding their hormone health is worth it—especially since traditional testing often misses what saliva testing reveals.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Emotional CTA */}
        <section className="py-16 md:py-24 text-white" style={{ background: 'linear-gradient(135deg, #236189 0%, #1a5a7d 50%, #61a94e 100%)' }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="font-['Poppins'] text-[24px] md:text-[32px] leading-relaxed mb-10 font-medium">
                Your body is whispering clues. Let's help you hear them.
              </p>

              <a
                href={checkoutUrl}
                data-analytics="cta:final"
                className="inline-block bg-white text-[#61a94e] px-10 py-5 rounded-[10px] font-['Poppins'] font-bold text-[20px] md:text-[22px] hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl mb-4"
              >
                Start Your Hormone Investigation - $249
              </a>

              <p className="font-['Poppins'] text-[15px] md:text-[16px] text-white/90">
                Includes test kit, results review, and personalized roadmap
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
                  <strong>Medical Disclaimer:</strong> This test is for informational and educational purposes. It is not intended to diagnose, treat, cure, or prevent any disease. Results should be reviewed with a qualified healthcare provider.
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
