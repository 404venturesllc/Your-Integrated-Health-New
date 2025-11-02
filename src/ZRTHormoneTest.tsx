import { Helmet } from "react-helmet-async";
import { CheckCircle2, FlaskConical, ClipboardList, UserCheck, ArrowRight } from "lucide-react";

export default function ZRTHormoneTest() {
  return (
    <>
      <Helmet>
        <title>ZRT Hormone Test - Advanced Hormone Testing | Your Integrative Health</title>
        <meta
          name="description"
          content="Get comprehensive hormone testing with ZRT Labs. Identify hormone imbalances affecting your health, energy, mood, and weight. Book your test today."
        />
        <meta name="keywords" content="ZRT hormone test, hormone testing, hormone imbalance, saliva hormone test, comprehensive hormone panel" />
      </Helmet>

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#236189] to-[#1a4d6b] text-white py-16 md:py-24 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="font-['Poppins'] font-bold text-[40px] md:text-[56px] lg:text-[64px] leading-tight mb-6">
                Discover What's Really Going On<br />
                <span className="text-[#61a94e]">With Your Hormones</span>
              </h1>
              <p className="font-['Poppins'] text-[20px] md:text-[24px] leading-relaxed mb-8 text-white/90">
                Advanced ZRT Laboratory Testing reveals the root cause of fatigue, weight gain, mood swings, and sleep issues
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368"
                  className="bg-[#61a94e] text-white px-8 py-4 rounded-[10px] font-['Poppins'] font-semibold text-[20px] hover:bg-[#549440] transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
                >
                  Book Your Test Now
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+18558882467"
                  className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-[10px] font-['Poppins'] font-semibold text-[20px] hover:bg-white/20 transition-all"
                >
                  Call (855) 888-2467
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof Bar */}
        <section className="bg-[#f6faf5] py-6 border-b border-gray-200">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 text-center">
              <div>
                <p className="font-['Poppins'] font-bold text-[28px] text-[#236189]">1000+</p>
                <p className="font-['Poppins'] text-[14px] text-gray-600">Patients Tested</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div>
                <p className="font-['Poppins'] font-bold text-[28px] text-[#236189]">ZRT Labs</p>
                <p className="font-['Poppins'] text-[14px] text-gray-600">Certified Partner</p>
              </div>
              <div className="hidden md:block w-px h-12 bg-gray-300"></div>
              <div>
                <p className="font-['Poppins'] font-bold text-[28px] text-[#236189]">15+ Years</p>
                <p className="font-['Poppins'] text-[14px] text-gray-600">Clinical Experience</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problem/Agitation Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[44px] text-[#236189] text-center mb-8">
                Are You Struggling With These Symptoms?
              </h2>
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  "Chronic fatigue and low energy",
                  "Unexplained weight gain or difficulty losing weight",
                  "Mood swings, anxiety, or depression",
                  "Sleep problems and insomnia",
                  "Brain fog and poor concentration",
                  "Low libido or sexual dysfunction",
                  "Hot flashes and night sweats",
                  "Hair loss or thinning",
                  "Digestive issues",
                  "Muscle weakness or joint pain"
                ].map((symptom, index) => (
                  <div key={index} className="flex items-start gap-3 bg-[#f6faf5] p-4 rounded-lg">
                    <CheckCircle2 className="w-6 h-6 text-[#61a94e] flex-shrink-0 mt-1" />
                    <p className="font-['Poppins'] text-[16px] md:text-[18px] text-gray-700">{symptom}</p>
                  </div>
                ))}
              </div>
              <div className="bg-gradient-to-r from-[#236189]/10 to-[#61a94e]/10 border-l-4 border-[#61a94e] p-6 rounded-lg">
                <p className="font-['Poppins'] text-[18px] md:text-[20px] text-gray-800 leading-relaxed">
                  <strong>The problem isn't you - it's your hormones.</strong> Traditional blood tests often miss critical hormone imbalances that are affecting your daily life. Our ZRT hormone testing goes deeper to uncover what's really happening in your body.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section - Why ZRT Testing */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#f6faf5] to-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[44px] text-[#236189] text-center mb-4">
                Why ZRT Laboratory Testing?
              </h2>
              <p className="font-['Poppins'] text-[18px] md:text-[20px] text-center text-gray-600 mb-12 max-w-3xl mx-auto">
                ZRT Labs is the gold standard in hormone testing, providing the most accurate and comprehensive analysis available
              </p>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-[#61a94e]/10 rounded-full flex items-center justify-center mb-6">
                    <FlaskConical className="w-8 h-8 text-[#61a94e]" />
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[22px] text-[#236189] mb-4">
                    Most Accurate Testing
                  </h3>
                  <p className="font-['Poppins'] text-[16px] text-gray-600 leading-relaxed">
                    Saliva and dried urine testing measures bioavailable hormones - the hormones your body can actually use, not just what's in your blood
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-[#236189]/10 rounded-full flex items-center justify-center mb-6">
                    <ClipboardList className="w-8 h-8 text-[#236189]" />
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[22px] text-[#236189] mb-4">
                    Comprehensive Analysis
                  </h3>
                  <p className="font-['Poppins'] text-[16px] text-gray-600 leading-relaxed">
                    Test multiple hormones including cortisol rhythm, estrogen, progesterone, testosterone, DHEA, thyroid, and metabolites
                  </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg">
                  <div className="w-16 h-16 bg-[#61a94e]/10 rounded-full flex items-center justify-center mb-6">
                    <UserCheck className="w-8 h-8 text-[#61a94e]" />
                  </div>
                  <h3 className="font-['Poppins'] font-semibold text-[22px] text-[#236189] mb-4">
                    Expert Interpretation
                  </h3>
                  <p className="font-['Poppins'] text-[16px] text-gray-600 leading-relaxed">
                    Dr. Shook personally reviews your results and creates a customized treatment plan to restore hormone balance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[44px] text-[#236189] text-center mb-12">
                How It Works
              </h2>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#61a94e] rounded-full flex items-center justify-center text-white font-['Poppins'] font-bold text-[20px]">
                    1
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[22px] text-[#236189] mb-2">
                      Schedule Your Consultation
                    </h3>
                    <p className="font-['Poppins'] text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                      Book a free consultation to discuss your symptoms and determine which hormone panel is right for you
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#61a94e] rounded-full flex items-center justify-center text-white font-['Poppins'] font-bold text-[20px]">
                    2
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[22px] text-[#236189] mb-2">
                      Test at Home
                    </h3>
                    <p className="font-['Poppins'] text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                      Receive your ZRT test kit at home with easy-to-follow instructions. Collect samples at your convenience and mail back to the lab
                    </p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#61a94e] rounded-full flex items-center justify-center text-white font-['Poppins'] font-bold text-[20px]">
                    3
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[22px] text-[#236189] mb-2">
                      Get Your Results & Treatment Plan
                    </h3>
                    <p className="font-['Poppins'] text-[16px] md:text-[18px] text-gray-600 leading-relaxed">
                      Within 2-3 weeks, receive comprehensive results and a personalized follow-up consultation with Dr. Shook to review findings and create your customized hormone restoration plan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-[#236189] to-[#1a4d6b] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[44px] text-center mb-12">
                What's Included in Your Test
              </h2>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "Complete hormone panel testing",
                    "At-home collection kit",
                    "Laboratory processing & analysis",
                    "Comprehensive results report",
                    "Initial consultation ($250 value)",
                    "Results review consultation",
                    "Personalized treatment plan",
                    "Ongoing support and monitoring"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#61a94e] flex-shrink-0 mt-1" />
                      <p className="font-['Poppins'] text-[16px] md:text-[18px]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <p className="font-['Poppins'] text-[24px] md:text-[28px] font-semibold mb-6">
                  Investment: Starting at $497
                </p>
                <p className="font-['Poppins'] text-[16px] md:text-[18px] mb-8 text-white/90">
                  Different panels available depending on your specific needs
                </p>
                <a
                  href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368"
                  className="inline-flex items-center gap-2 bg-[#61a94e] text-white px-10 py-5 rounded-[10px] font-['Poppins'] font-semibold text-[22px] hover:bg-[#549440] transition-all shadow-xl hover:shadow-2xl"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 md:py-20 bg-[#f6faf5]">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[44px] text-[#236189] text-center mb-12">
                Real Results From Real Patients
              </h2>

              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                <div className="flex gap-2 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-6 h-6 text-[#FFD700]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-['Poppins'] text-[18px] md:text-[20px] text-gray-700 leading-relaxed mb-6 italic">
                  "After years of struggling with fatigue and weight gain, the ZRT hormone test finally gave me answers. Dr. Shook's personalized treatment plan has completely transformed my life. I have energy again, I'm sleeping better, and I've lost 25 pounds without struggling."
                </p>
                <p className="font-['Poppins'] font-semibold text-[18px] text-[#236189]">
                  - Sarah M., Age 42
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[44px] text-[#236189] text-center mb-12">
                Frequently Asked Questions
              </h2>

              <div className="space-y-6">
                <div className="bg-[#f6faf5] rounded-lg p-6">
                  <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#236189] mb-3">
                    Is this covered by insurance?
                  </h3>
                  <p className="font-['Poppins'] text-[16px] text-gray-700 leading-relaxed">
                    While we don't bill insurance directly, we provide detailed receipts that many patients successfully submit for reimbursement. Check with your insurance provider about out-of-network benefits.
                  </p>
                </div>

                <div className="bg-[#f6faf5] rounded-lg p-6">
                  <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#236189] mb-3">
                    How is this different from regular blood tests?
                  </h3>
                  <p className="font-['Poppins'] text-[16px] text-gray-700 leading-relaxed">
                    ZRT testing uses saliva and dried urine to measure bioavailable hormones (the hormones your cells can actually use), while blood tests only show total hormones. This gives us a much more accurate picture of hormone function.
                  </p>
                </div>

                <div className="bg-[#f6faf5] rounded-lg p-6">
                  <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#236189] mb-3">
                    How long until I see results?
                  </h3>
                  <p className="font-['Poppins'] text-[16px] text-gray-700 leading-relaxed">
                    Most patients begin noticing improvements within 4-6 weeks of starting their personalized treatment plan. Full hormone balance typically takes 3-6 months.
                  </p>
                </div>

                <div className="bg-[#f6faf5] rounded-lg p-6">
                  <h3 className="font-['Poppins'] font-semibold text-[20px] text-[#236189] mb-3">
                    Is the at-home collection difficult?
                  </h3>
                  <p className="font-['Poppins'] text-[16px] text-gray-700 leading-relaxed">
                    Not at all! The kit comes with clear instructions, and most patients find it very simple. You collect samples at specific times throughout the day, then mail them back to the lab in the prepaid envelope.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#61a94e] to-[#549440] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[48px] leading-tight mb-6">
                Stop Guessing. Start Healing.
              </h2>
              <p className="font-['Poppins'] text-[20px] md:text-[24px] leading-relaxed mb-10">
                Get the answers you deserve with advanced ZRT hormone testing and personalized treatment from Dr. Shook
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368"
                  className="bg-white text-[#61a94e] px-10 py-5 rounded-[10px] font-['Poppins'] font-bold text-[22px] hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl flex items-center gap-2"
                >
                  Book Your Free Consultation
                  <ArrowRight className="w-6 h-6" />
                </a>
                <a
                  href="tel:+18558882467"
                  className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-[10px] font-['Poppins'] font-bold text-[22px] hover:bg-white/10 transition-all"
                >
                  Call (855) 888-2467
                </a>
              </div>
              <p className="font-['Poppins'] text-[14px] mt-8 text-white/80">
                Limited spots available each month for new patients
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
