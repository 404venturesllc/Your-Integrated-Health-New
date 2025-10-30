import svgPaths from "./imports/svg-9uzcopkvuf";
import decorativeSvgPaths from "./imports/svg-0egnuf5q93";
import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ChatWidget from "./components/ChatWidget";
import Breadcrumb from "./components/Breadcrumb";
import { generateBreadcrumbSchema } from "./utils/breadcrumbSchema";

interface ContactProps {
  navigateTo: (page: "home" | "services" | "about" | "faq" | "contact" | "blog") => void;
}

export default function Contact({ navigateTo }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredTime: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'e8589b11-f3e7-4a21-873d-ce53e47d8af1',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          preferred_time: formData.preferredTime,
          message: formData.message,
          subject: 'New Contact Form Submission from Your Integrative Health',
          to: 'team@yourintegrativehealth.com'
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          phone: "",
          preferredTime: "",
          message: "",
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
        <title>Contact Us | Schedule Your Health Consultation Today</title>
        <meta name="description" content="Ready to transform your health? Contact Your Integrative Health for personalized functional medicine consultations. Schedule your hormone health assessment now." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourintegrativehealth.com/contact" />

        {/* Open Graph */}
        <meta property="og:title" content="Contact Us | Schedule Your Health Consultation Today" />
        <meta property="og:description" content="Ready to transform your health? Contact Your Integrative Health for personalized functional medicine consultations. Schedule your hormone health assessment now." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/contact" />
        <meta property="og:image" content="https://www.yourintegrativehealth.com/og-image.png" />
        <meta property="og:site_name" content="Your Integrative Health" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Schedule Your Health Consultation Today" />
        <meta name="twitter:description" content="Ready to transform your health? Contact Your Integrative Health for personalized functional medicine consultations. Schedule your hormone health assessment now." />
        <meta name="twitter:image" content="https://www.yourintegrativehealth.com/og-image.png" />

        {/* Breadcrumb JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { label: "Home", url: "/" },
            { label: "Contact", url: "/contact" }
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
            onClick={() => navigateTo("home")}
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
              onClick={() => navigateTo("services")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => navigateTo("blog")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              Blog
            </button>
            <span className="text-[#61a94e]">Contacts</span>
            <button
              onClick={() => navigateTo("about")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => navigateTo("faq")}
              className="text-black hover:text-[#61a94e] transition-colors"
            >
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
            aria-controls="mobile-menu-contact"
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
          { label: "Contact", isActive: true }
        ]}
        navigateTo={navigateTo}
      />

      {isMobileMenuOpen && (
        <div id="mobile-menu-contact" className="lg:hidden absolute top-[100px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
          <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col py-4 px-4 md:px-8">
            <button onClick={() => { navigateTo("services"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">Services</button>
            <button onClick={() => { navigateTo("blog"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">Blog</button>
            <span className="py-3 px-4 text-[#61a94e] font-['Poppins'] text-[16px] font-semibold">Contacts</span>
            <button onClick={() => { navigateTo("about"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">About</button>
            <button onClick={() => { navigateTo("faq"); setIsMobileMenuOpen(false); }} className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]">FAQ</button>
            <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="mt-4 bg-[#61a94e] text-white px-6 py-3 rounded-[10px] font-['Poppins'] font-medium text-[16px] hover:bg-[#549440] transition-colors text-center">Get Started</a>
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
              fill="url(#paint0_linear_contact_hero)"
              opacity="0.93"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="paint0_linear_contact_hero"
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
              Get in Touch
            </h1>
            <p className="font-['Poppins'] text-[18px] md:text-[20px] lg:text-[24px] text-white leading-relaxed">
              Ready to take the first step toward better health? We're here to answer your questions and help you get started.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
        {/* Decorative Shapes - Left Border */}
        <div className="absolute left-0 top-[30%] w-[80px] md:w-[160px] lg:w-[320px] h-[190px] md:h-[380px] lg:h-[760px] rotate-[165deg] opacity-30 -ml-8 md:-ml-16 lg:-ml-32 z-0">
          <svg viewBox="0 0 174 412" fill="none" className="w-full h-full">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-contact-left-1)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-contact-left-1"
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
        <div className="absolute right-0 top-[50%] w-[80px] md:w-[160px] lg:w-[320px] h-[190px] md:h-[380px] lg:h-[760px] rotate-[345deg] opacity-30 -mr-8 md:-mr-16 lg:-mr-32 z-0">
          <svg viewBox="0 0 174 412" fill="none" className="w-full h-full">
            <path
              d={decorativeSvgPaths.p1f5cf580}
              fill="url(#gradient-contact-right-1)"
              opacity="0.4"
            />
            <defs>
              <linearGradient
                gradientUnits="userSpaceOnUse"
                id="gradient-contact-right-1"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            {/* Left Column - Contact Info */}
            <div className="scroll-animation-left">
              <h2 className="font-['Poppins'] font-bold text-[28px] md:text-[32px] lg:text-[36px] text-[#236189] mb-6">
                Let's Connect
              </h2>
              <p className="font-['Poppins'] text-[17px] md:text-[18px] text-[#565d6d] mb-8 leading-[30px]">
                Whether you're ready to book your free consultation or just have questions about our program, we'd love to hear from you.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-12">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#61a94e]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#61a94e]"
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
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#236189] mb-1">
                      Phone
                    </h3>
                    <a
                      href="tel:714-586-8872"
                      className="font-['Poppins'] text-[16px] text-[#565d6d] hover:text-[#61a94e] transition-colors"
                    >
                      714-586-8872
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#236189]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#236189]"
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
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#236189] mb-1">
                      Email
                    </h3>
                    <a
                      href="mailto:team@yourintegrativehealth.com"
                      className="font-['Poppins'] text-[16px] text-[#565d6d] hover:text-[#61a94e] transition-colors"
                    >
                      team@yourintegrativehealth.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#61a94e]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#61a94e]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#236189] mb-1">
                      Address
                    </h3>
                    <p className="font-['Poppins'] text-[16px] text-[#565d6d]">
                      300 Regal #614<br />
                      Irvine, CA 92620
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#61a94e]/10 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-[#61a94e]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-['Poppins'] font-semibold text-[18px] text-[#236189] mb-1">
                      Office Hours
                    </h3>
                    <p className="font-['Poppins'] text-[16px] text-[#565d6d]">
                      Monday - Friday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="font-['Poppins'] text-[16px] text-[#565d6d]">
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Info Card */}
              <div className="bg-gradient-to-br from-[#f6faf5] to-[#f3f8fc] rounded-[20px] p-6 md:p-8">
                <h3 className="font-['Poppins'] font-bold text-[20px] md:text-[22px] text-[#236189] mb-4">
                  What to Expect
                </h3>
                <ul className="space-y-3">
                  {[
                    "We'll respond within 24 hours",
                    "Free initial consultation available",
                    "All inquiries are confidential",
                    "No pressure or obligation",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg
                        className="w-[18px] h-[18px] shrink-0 mt-1"
                        viewBox="0 0 14 11"
                        fill="none"
                      >
                        <path
                          d="M12.2191 0.205077C12.578 -0.0877191 13.1072 -0.0670722 13.4418 0.267557C13.7765 0.602186 13.7972 1.13139 13.5043 1.49037L13.4418 1.55999L4.30192 10.6998C3.96731 11.0345 3.43811 11.0551 3.07919 10.7624L3.00954 10.6998L0.267557 7.95788L0.205077 7.88833C-0.0877193 7.52931 -0.067072 7.00011 0.267557 6.6655C0.602178 6.33085 1.13139 6.3102 1.49037 6.60298L1.55999 6.6655L3.65573 8.76119L12.1494 0.267557L12.2191 0.205077Z"
                          fill="#61A94E"
                        />
                      </svg>
                      <p className="font-['Poppins'] text-[15px] md:text-[16px] text-[#19191f]">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="scroll-animation-right">
              <div className="bg-white rounded-[20px] shadow-[0px_8px_24px_0px_rgba(0,0,0,0.12)] p-6 md:p-8 lg:p-10">
                <h2 className="font-['Poppins'] font-bold text-[24px] md:text-[28px] text-[#236189] mb-2">
                  Send Us a Message
                </h2>
                <p className="font-['Poppins'] text-[15px] text-[#565d6d] mb-8">
                  Fill out the form below and we'll get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="font-['Poppins'] font-medium text-[15px] text-[#236189] mb-2 block">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#61a94e] focus:ring-2 focus:ring-[#61a94e]/20 font-['Poppins'] text-[15px] transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="font-['Poppins'] font-medium text-[15px] text-[#236189] mb-2 block">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      placeholder="your.email@example.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#61a94e] focus:ring-2 focus:ring-[#61a94e]/20 font-['Poppins'] text-[15px] transition-all"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="contact-phone" className="font-['Poppins'] font-medium text-[15px] text-[#236189] mb-2 block">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 123-4567"
                      className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#61a94e] focus:ring-2 focus:ring-[#61a94e]/20 font-['Poppins'] text-[15px] transition-all"
                    />
                  </div>

                  {/* Preferred Time */}
                  <div>
                    <label htmlFor="contact-time" className="font-['Poppins'] font-medium text-[15px] text-[#236189] mb-2 block">
                      Preferred Contact Time
                    </label>
                    <select
                      id="contact-time"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#61a94e] focus:ring-2 focus:ring-[#61a94e]/20 font-['Poppins'] text-[15px] transition-all bg-white"
                    >
                      <option value="">Select a time</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 3 PM)</option>
                      <option value="evening">Evening (3 PM - 5 PM)</option>
                      <option value="anytime">Anytime</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="font-['Poppins'] font-medium text-[15px] text-[#236189] mb-2 block">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      rows={5}
                      placeholder="Tell us about your health concerns and what you hope to achieve..."
                      className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:border-[#61a94e] focus:ring-2 focus:ring-[#61a94e]/20 font-['Poppins'] text-[15px] transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white px-8 py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#549440] transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && (
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
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    )}
                  </button>

                  {/* Success Message */}
                  {submitStatus === 'success' && (
                    <div role="status" aria-live="polite" className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg font-['Poppins'] text-center">
                      <p className="font-semibold">Thank you for your message!</p>
                      <p className="text-sm mt-1">We'll get back to you as soon as possible.</p>
                    </div>
                  )}

                  {/* Error Message */}
                  {submitStatus === 'error' && (
                    <div role="alert" aria-live="assertive" className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg font-['Poppins'] text-center">
                      <p className="font-semibold">Oops! Something went wrong.</p>
                      <p className="text-sm mt-1">Please try again or contact us directly.</p>
                    </div>
                  )}

                  <p className="font-['Poppins'] text-[13px] text-[#565d6d] text-center mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-[#f6faf5] relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center scroll-animation">
            <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] lg:text-[48px] text-[#236189] mb-12">
              Prefer to Book Directly?
            </h2>

            <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white px-8 md:px-12 py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#549440] transition-colors flex items-center justify-center mx-auto gap-2">
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
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Book Your Free Consultation
            </a>
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
                  <button
                    onClick={() => navigateTo("services")}
                    className="hover:text-[#61a94e] transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("about")}
                    className="hover:text-[#61a94e] transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("faq")}
                    className="hover:text-[#61a94e] transition-colors"
                  >
                    FAQ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => navigateTo("contact")}
                    className="text-[#61a94e]"
                  >
                    Contact
                  </button>
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
