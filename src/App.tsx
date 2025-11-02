import svgPaths from "./imports/svg-9uzcopkvuf";
import decorativeSvgPaths from "./imports/svg-0egnuf5q93";
import conditionsBgSvgPaths from "./imports/svg-ms2tjh9no8";
import metabolicBgSvgPaths from "./imports/svg-zgzws7gnjt";
import aboutSvgPaths from "./imports/svg-1lqq7liner";
import aboutBgSvgPaths from "./imports/svg-vhw1cc3n73";
import testimonialSvgPaths from "./imports/svg-tou4ssptpu";
import quizBannerSvgPaths from "./imports/svg-gpi4zhaybb";
import Background from "./imports/Background";
import Icon from "./imports/Icon-10-192";
import img65A43F7E821F8Untitleddesign21 from "figma:asset/48e69dbd44c881ef26889bac0c30d7dadc6b9965.png";
import imgStar from "figma:asset/24b4141345e6be30ab7a3e5a1b4e537aaca3e236.png";
import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";
import imgShutterstock23211944651 from "figma:asset/91204406f01523c66794714f7b4dc1dabb04d514.png";
import imgFullStop from "figma:asset/65108e3b02768bd9c043e51fdc417c70d895b02c.png";
import imgTreatmentList from "figma:asset/faa3fcfb30b722e5b096c3067900c2fd8881acbf.png";
import imgCall from "figma:asset/bad57ee87977a7c766923f8e7a3adcd6ddc08e09.png";
import imgPill from "figma:asset/ac04ba94d9c0c06a642e143dbd178834d292e80d.png";
import imgHelpingHand from "figma:asset/b5f3ab831f3e2a78b8073d78ff761c491f57dd78.png";
import img66194F98407B8Istockphoto1485705128170667A3 from "figma:asset/ba13d4883035a4786187879b02156d64fb30faf2.png";
import imgEllipse229 from "figma:asset/14cb7f2d11ca7d2ada14dbcc4f177b7aea981cb8.png";
import imgDownArrow from "figma:asset/8bf80033e33324855df5bc6382f04929e0d3fd7a.png";
import { useState, useEffect, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import {
  Zap,
  Scale,
  Moon,
  CloudRain,
  Dumbbell,
  FlaskConical,
} from "lucide-react";
import ChatWidget from "./components/ChatWidget";
import ScrollFadeIn from "./components/ScrollFadeIn";
import Avatar from "./components/Avatar";
import { homePageTestimonials } from "./data/testimonials";
import { homepageFAQs } from "./data/faqs";

// Lazy load all page components to minimize initial bundle
const Services = lazy(() => import("./Services"));
const About = lazy(() => import("./About"));
const FAQ = lazy(() => import("./FAQ"));
const Contact = lazy(() => import("./Contact"));
const Blog = lazy(() => import("./Blog"));
const BlogDetail = lazy(() => import("./BlogDetail"));
const Disclaimer = lazy(() => import("./Disclaimer"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
const TermsOfUse = lazy(() => import("./TermsOfUse"));

export default function App() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1);
  const [currentPage, setCurrentPage] = useState<"home" | "services" | "about" | "faq" | "contact" | "blog" | "disclaimer" | "privacy" | "terms">("home");
  const [selectedBlogId, setSelectedBlogId] = useState<number | null>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // URL sync: Read URL on mount and update on navigation
  useEffect(() => {
    const path = window.location.pathname;

    // Parse URL and set initial state
    if (path === '/' || path === '') {
      setCurrentPage('home');
      setSelectedBlogId(null);
    } else if (path === '/services') {
      setCurrentPage('services');
    } else if (path === '/about') {
      setCurrentPage('about');
    } else if (path === '/faq') {
      setCurrentPage('faq');
    } else if (path === '/contact') {
      setCurrentPage('contact');
    } else if (path === '/blog') {
      setCurrentPage('blog');
      setSelectedBlogId(null);
    } else if (path.startsWith('/blog/')) {
      const idStr = path.replace('/blog/', '');
      const id = parseInt(idStr, 10);
      if (!isNaN(id)) {
        setCurrentPage('blog');
        setSelectedBlogId(id);
      } else {
        setCurrentPage('blog');
        setSelectedBlogId(null);
      }
    } else if (path === '/disclaimer') {
      setCurrentPage('disclaimer');
    } else if (path === '/privacy') {
      setCurrentPage('privacy');
    } else if (path === '/terms') {
      setCurrentPage('terms');
    }

    // Handle browser back/forward buttons
    const handlePopState = () => {
      const currentPath = window.location.pathname;
      if (currentPath.startsWith('/blog/')) {
        const idStr = currentPath.replace('/blog/', '');
        const id = parseInt(idStr, 10);
        if (!isNaN(id)) {
          setCurrentPage('blog');
          setSelectedBlogId(id);
        }
      } else if (currentPath === '/blog') {
        setCurrentPage('blog');
        setSelectedBlogId(null);
      } else if (currentPath === '/') {
        setCurrentPage('home');
        setSelectedBlogId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update URL when page changes
  const navigateTo = (page: typeof currentPage, blogSlug?: string) => {
    let url = '/';
    if (page === 'home') url = '/';
    else if (page === 'blog' && blogSlug) url = `/blog/${blogSlug}`;
    else if (page !== 'home') url = `/${page}`;

    window.history.pushState({}, '', url);
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  // Helper to navigate to blog post by ID
  const navigateToBlogPost = (id: number) => {
    window.history.pushState({}, '', `/blog/${id}`);
    setSelectedBlogId(id);
  };

  const handleTestimonialChange = (newIndex: number, direction: 'left' | 'right') => {
    if (isTransitioning) return;
    setSlideDirection(direction);
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentTestimonial(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 250);
  };

  const nextTestimonial = () => {
    const newIndex = currentTestimonial === homePageTestimonials.length - 1 ? 0 : currentTestimonial + 1;
    handleTestimonialChange(newIndex, 'left');
  };

  const prevTestimonial = () => {
    const newIndex = currentTestimonial === 0 ? homePageTestimonials.length - 1 : currentTestimonial - 1;
    handleTestimonialChange(newIndex, 'right');
  };

  // If we're on the services page, render that instead
  if (currentPage === "services") {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>}>
        <Services navigateTo={navigateTo} />
      </Suspense>
    );
  }

  // If we're on the about page, render that instead
  if (currentPage === "about") {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>}>
        <About navigateTo={navigateTo} />
      </Suspense>
    );
  }

  // If we're on the FAQ page, render that instead
  if (currentPage === "faq") {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>}>
        <FAQ navigateTo={navigateTo} />
      </Suspense>
    );
  }

  // If we're on the contact page, render that instead
  if (currentPage === "contact") {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>}>
        <Contact navigateTo={navigateTo} />
      </Suspense>
    );
  }

  // If we're viewing a specific blog post (check this BEFORE the blog list page)
  if (selectedBlogId !== null) {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>}>
        <BlogDetail navigateTo={navigateTo} blogId={selectedBlogId} onBackToBlog={() => setSelectedBlogId(null)} onBlogClick={setSelectedBlogId} />
      </Suspense>
    );
  }

  // If we're on the blog page, render that instead
  if (currentPage === "blog") {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>}>
        <Blog navigateTo={navigateTo} onBlogClick={navigateToBlogPost} />
      </Suspense>
    );
  }

  // If we're on the disclaimer page, render that instead
  if (currentPage === "disclaimer") {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>}>
        <Disclaimer navigateTo={navigateTo} />
      </Suspense>
    );
  }

  // If we're on the privacy policy page, render that instead
  if (currentPage === "privacy") {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>}>
        <PrivacyPolicy navigateTo={navigateTo} />
      </Suspense>
    );
  }

  // If we're on the terms of use page, render that instead
  if (currentPage === "terms") {
    return (
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-gray-600">Loading...</div></div>}>
        <TermsOfUse navigateTo={navigateTo} />
      </Suspense>
    );
  }

  return (
    <>
      <Helmet>
        <title>Your Integrative Health | Functional Medicine Clinic</title>
        <meta name="description" content="Balance hormones, boost energy & lose weight naturally with personalized functional medicine care. Expert hormone health solutions from Megan Hormazdi, NP." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourintegrativehealth.com/" />

        {/* Open Graph */}
        <meta property="og:title" content="Your Integrative Health | Functional Medicine Clinic" />
        <meta property="og:description" content="Balance hormones, boost energy & lose weight naturally with personalized functional medicine care. Expert hormone health solutions from Megan Hormazdi, NP." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/" />
        <meta property="og:image" content="https://www.yourintegrativehealth.com/og-image.png" />
        <meta property="og:site_name" content="Your Integrative Health" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Integrative Health | Functional Medicine Clinic" />
        <meta name="twitter:description" content="Balance hormones, boost energy & lose weight naturally with personalized functional medicine care. Expert hormone health solutions from Megan Hormazdi, NP." />
        <meta name="twitter:image" content="https://www.yourintegrativehealth.com/og-image.png" />

        {/* JSON-LD Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "@id": "https://www.yourintegrativehealth.com/#organization",
            "name": "Your Integrative Health",
            "alternateName": "Your Integrative Health - Functional Medicine Clinic",
            "description": "Functional medicine clinic specializing in hormone health, weight management, and metabolic optimization. Virtual consultations with personalized care plans.",
            "url": "https://www.yourintegrativehealth.com",
            "logo": "https://www.yourintegrativehealth.com/og-image.png",
            "image": "https://www.yourintegrativehealth.com/og-image.png",
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "US",
              "addressRegion": "Virtual Practice"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "medicalSpecialty": [
              "Functional Medicine",
              "Hormone Health",
              "Weight Management",
              "Integrative Medicine",
              "Metabolic Health"
            ],
            "priceRange": "$$",
            "founder": {
              "@type": "Person",
              "name": "Megan Hormazdi",
              "jobTitle": "Nurse Practitioner",
              "description": "Nurse Practitioner specializing in functional medicine, hormone health, and metabolic optimization"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Functional Medicine Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Hormone Balance Program",
                    "description": "Comprehensive hormone optimization and metabolic health program"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Weight Loss Program",
                    "description": "Evidence-based weight management and metabolic restoration"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Functional Medicine Consultation",
                    "description": "Personalized integrative health assessment and care planning"
                  }
                }
              ]
            }
          })}
        </script>

        {/* JSON-LD Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "$97 Hormone Health Quiz",
            "serviceType": "Medical Assessment",
            "description": "Comprehensive hormone health assessment quiz with personalized report to identify hormone imbalances and metabolic issues",
            "provider": {
              "@type": "MedicalBusiness",
              "@id": "https://www.yourintegrativehealth.com/#organization"
            },
            "url": "https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368",
            "offers": {
              "@type": "Offer",
              "price": "97.00",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "url": "https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368",
              "priceValidUntil": "2025-12-31",
              "eligibleRegion": {
                "@type": "Country",
                "name": "US"
              }
            },
            "category": "Hormone Health Assessment",
            "areaServed": {
              "@type": "Country",
              "name": "United States"
            },
            "audience": {
              "@type": "PeopleAudience",
              "suggestedMinAge": 18
            }
          })}
        </script>
      </Helmet>
      <style>{`
        /* Enhanced hover animations */
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
        {/* Main Content - Using responsive scaling and repositioning */}
        <div className="relative">
        {/* Header/Navigation */}
        <header className="bg-white h-[100px] sticky top-0 z-50 border-b border-gray-100">
          <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
            {/* Logo */}
            <button
              onClick={() => navigateTo("home")}
              className="h-[60px] md:h-[83px] w-[130px] md:w-[172px] flex-shrink-0 cursor-pointer"
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
              <button
                onClick={() => navigateTo("contact")}
                className="text-black hover:text-[#61a94e] transition-colors"
              >
                Contacts
              </button>
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
            <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" className="hidden md:flex items-center justify-center bg-[#61a94e] text-white px-5 xl:px-6 py-2.5 rounded-[10px] font-['Poppins'] font-medium text-[18px] xl:text-[20px] hover:bg-[#549440] transition-all hover-glow flex-shrink-0">
              Get Started
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => {
                console.log('Mobile menu clicked, current state:', isMobileMenuOpen);
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="lg:hidden p-2 text-[#61a94e] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-app"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </header>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div id="mobile-menu-app" className="lg:hidden absolute top-[100px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
            <nav role="navigation" aria-label="Mobile navigation" className="flex flex-col py-4 px-4 md:px-8">
              <button
                onClick={() => {
                  navigateTo("services");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]"
              >
                Services
              </button>
              <button
                onClick={() => {
                  navigateTo("blog");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]"
              >
                Blog
              </button>
              <button
                onClick={() => {
                  navigateTo("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]"
              >
                Contacts
              </button>
              <button
                onClick={() => {
                  navigateTo("about");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]"
              >
                About
              </button>
              <button
                onClick={() => {
                  navigateTo("faq");
                  setIsMobileMenuOpen(false);
                }}
                className="text-left py-3 px-4 text-[#171a1f] hover:bg-[#f6faf5] hover:text-[#61a94e] transition-colors rounded-lg font-['Poppins'] text-[16px]"
              >
                FAQ
              </button>
              <a
                href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368"
                className="mt-4 bg-[#61a94e] text-white px-6 py-3 rounded-[10px] font-['Poppins'] font-medium text-[16px] hover:bg-[#549440] transition-colors text-center"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}

        <main>
        {/* Hero Section */}
        <section className="hero-section relative min-h-[600px] md:min-h-[700px] lg:h-[796px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="relative h-full w-full scale-y-[-1] rotate-180">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img
                  alt="Professional healthcare consultation with Megan Hormazdi NP"
                  className="absolute h-[122.49%] left-[-21.3%] max-w-none top-[-10.77%] w-[128.4%] object-cover"
                  src={imgShutterstock23211944651}
                  fetchpriority="high"
                  loading="eager"
                  decoding="async"
                  width={1920}
                  height={1080}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/25 via-[#61a94e]/50 to-[#236189] opacity-35" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="max-w-[1440px] mx-auto w-full relative z-10 px-4 md:px-8 lg:px-16 py-16 lg:py-0">
            <div className="max-w-[694px]">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 bg-white rounded-[40px] px-7 md:px-9 py-2 mb-6">
                {/* Decorative dot */}
                <div className="w-[14px] h-[14px] flex-shrink-0">
                  <img
                    alt=""
                    className="w-full h-full object-contain"
                    src={imgFullStop}
                  />
                </div>
                <p className="font-['Poppins'] text-[#61a94e] text-[14px] md:text-[16px]">
                  Personalized Telehealth Care
                </p>
              </div>

              {/* Main Heading */}
              <h1 className="font-['Poppins'] font-semibold text-[36px] md:text-[48px] lg:text-[55px] leading-[1.4] text-white mb-6">
                Balance Your Hormones. Boost Your Energy.
                <span className="text-[#236189]"> </span>
                Lose Weight Safely.
              </h1>

              {/* Subheading */}
              <p className="font-['Poppins'] font-medium text-[16px] md:text-[18px] lg:text-[20px] text-white mb-12 max-w-[594px]">
                Telehealth consultations, direct-to-patient
                medication access, and hormone & wellness
                optimization—all handled from the comfort of
                home.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" className="bg-[rgba(97,169,78,0.54)] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white px-6 md:px-8 py-3 md:py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[rgba(97,169,78,0.7)] transition-all hover-glow flex items-center justify-center">
                  Book Your Free Consultation
                </a>
                <button
                  onClick={() => setCurrentPage("about")}
                  className="bg-[rgba(35,97,137,0.77)] border border-white text-white px-5 md:px-6 py-3 md:py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[rgba(35,97,137,0.9)] transition-all hover-scale flex items-center justify-center"
                >
                  Learn More
                </button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="border-2 border-white rounded-full">
                    <Avatar name="Sarah R" size="sm" colorIndex={0} />
                  </div>
                  <div className="border-2 border-white rounded-full">
                    <Avatar name="John D" size="sm" colorIndex={1} />
                  </div>
                  <div className="w-[43px] h-[43px] rounded-full border-2 border-white bg-[#61a94e] flex items-center justify-center">
                    <span className="text-white font-['Poppins'] font-semibold text-[14px]">
                      150+
                    </span>
                  </div>
                </div>
                <p className="text-white font-['Poppins'] text-[12px]">
                  Successful Patients
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-20 lg:py-32 relative overflow-hidden bg-white">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
            {/* Heading on TOP LEFT for desktop, centered for mobile */}
            <ScrollFadeIn direction="up" duration={0.8}>
              <div className="mb-12 md:mb-16">
                <h2 className="font-['Poppins'] font-bold text-[#236189] text-[32px] md:text-[40px] lg:text-[48px] mb-4 text-center xl:text-left">
                  How our care works
                </h2>
                <p className="font-['Poppins'] font-medium text-[15px] md:text-[16.767px] text-black max-w-[453px] text-center xl:text-left mx-auto xl:mx-0">
                  A simple, step-by-step approach to help you feel
                  like yourself again.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Background decorative shapes - Mobile: Vertical snake flow connecting cards */}
            <div className="md:hidden absolute inset-0 pointer-events-none overflow-visible z-0">
              {/* Shape 1: In gap between Card 1 & Card 2 - curving from bottom of Card 1 */}
              <div className="absolute left-[50%] -translate-x-1/2 top-[22%] w-[320px] h-[320px] rotate-[180deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-mobile-1)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-mobile-1"
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

              {/* Shape 2: In gap between Card 2 & Card 3 - curving upward */}
              <div className="absolute left-[50%] -translate-x-1/2 top-[48%] w-[330px] h-[330px] rotate-[0deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-mobile-2)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-mobile-2"
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

              {/* Shape 3: In gap between Card 3 & Card 4 - curving downward */}
              <div className="absolute left-[50%] -translate-x-1/2 top-[74%] w-[320px] h-[320px] rotate-[180deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-mobile-3)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-mobile-3"
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
            </div>

            {/* Background decorative shapes - Tablet: 2x2 grid flow */}
            <div className="hidden md:block xl:hidden absolute inset-0 pointer-events-none overflow-visible z-0">
              {/* Shape 1: Top-left quadrant */}
              <div className="absolute left-[-5%] top-[15%] w-[280px] h-[280px] rotate-[245deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-tablet-1)"
                    opacity="0.22"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-tablet-1"
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

              {/* Shape 2: Top-right quadrant */}
              <div className="absolute right-[-8%] top-[8%] w-[290px] h-[290px] rotate-[55deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-tablet-2)"
                    opacity="0.22"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-tablet-2"
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

              {/* Shape 3: Bottom-left quadrant */}
              <div className="absolute left-[-3%] top-[58%] w-[285px] h-[285px] rotate-[275deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-tablet-3)"
                    opacity="0.22"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-tablet-3"
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

              {/* Shape 4: Bottom-right quadrant */}
              <div className="absolute right-[-6%] top-[62%] w-[295px] h-[295px] rotate-[95deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-tablet-4)"
                    opacity="0.22"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-tablet-4"
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
            </div>

            {/* Background decorative shapes - Desktop: Snake flow */}
            <div className="hidden xl:block absolute inset-0 pointer-events-none overflow-visible z-0">
              {/* Shape 1: Bottom-left starting point */}
              <div className="absolute left-[-5%] top-[67%] w-[350px] h-[350px] rotate-[245deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-shape-1)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-shape-1"
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

              {/* Shape 2: Rising up through Card 1-2 area */}
              <div className="absolute left-[18%] top-[20%] w-[360px] h-[360px] rotate-[55deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-shape-2)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-shape-2"
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

              {/* Shape 3: Peak at Card 2-3 area */}
              <div className="absolute left-[42%] top-[65%] w-[340px] h-[340px] rotate-[275deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-shape-3)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-shape-3"
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

              {/* Shape 4: Descending through Card 3 area */}
              <div className="absolute left-[62%] top-[10%] w-[355px] h-[355px] rotate-[95deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-shape-4)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-shape-4"
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

              {/* Shape 5: Rising to top-right at Card 4 */}
              <div className="absolute left-[82%] top-[30%] w-[345px] h-[345px] rotate-[275deg]">
                <svg
                  viewBox="0 0 174 412"
                  fill="none"
                  className="w-full h-full"
                >
                  <path
                    d={decorativeSvgPaths.p1f5cf580}
                    fill="url(#gradient-shape-5)"
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="gradient-shape-5"
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
            </div>

            {/* Cards - Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20 md:gap-16 xl:gap-10 max-w-6xl mx-auto relative z-10">
              {[
                {
                  number: "1",
                  shadow:
                    "shadow-[0px_3.353px_21.1px_0px_#236189]",
                  icon: imgCall,
                  title: "Free Consultation",
                  description:
                    "Chat with Megan about your symptoms, history, and goals to see if this is right for you.",
                  mt: "xl:mt-32",
                  decorativeColor: "#236189",
                },
                {
                  number: "2",
                  shadow: "shadow-[0px_4px_15.6px_0px_#61a94e]",
                  icon: imgTreatmentList,
                  title: "Labs & Personalized Plan",
                  description:
                    "Complete initial lab tests and get a custom wellness + hormone balance plan.",
                  mt: "xl:mt-20",
                  decorativeColor: "#61a94e",
                },
                {
                  number: "3",
                  shadow: "shadow-[0px_4px_15.6px_0px_#236189]",
                  icon: imgPill,
                  title: "GLP-1 + Integrative Therapy",
                  description:
                    "Medication is prescribed and shipped to you; support includes lifestyle, gut health, and wellness coaching.",
                  mt: "xl:mt-10",
                  decorativeColor: "#236189",
                },
                {
                  number: "4",
                  shadow: "shadow-[0px_4px_15.6px_0px_#61a94e]",
                  icon: imgHelpingHand,
                  title: "Ongoing Support",
                  description:
                    "Quarterly follow-ups to adjust your care, monitor progress, and keep results lasting.",
                  mt: "xl:mt-0",
                  decorativeColor: "#61a94e",
                },
              ].map((card, index) => (
                <ScrollFadeIn key={index} direction="up" delay={index * 0.15} duration={0.6}>
                  <div
                    className={`relative ${card.mt} z-10`}
                  >
                    <div
                      className={`bg-white rounded-bl-[21px] rounded-br-[112px] rounded-tl-[93px] rounded-tr-[21px] ${card.shadow} p-6 pt-20 h-[397.542px] flex flex-col relative z-10 hover-lift cursor-pointer`}
                    >
                    {/* Number Circle Badge */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div className="relative w-[112px] h-[112px]">
                        {/* White circle with shadow */}
                        <svg
                          className="absolute inset-0"
                          viewBox="0 0 130 130"
                          fill="none"
                        >
                          <circle
                            cx="65"
                            cy="65"
                            r="56"
                            fill="white"
                            filter={`url(#shadow${index})`}
                          />
                          <defs>
                            <filter id={`shadow${index}`}>
                              <feDropShadow
                                dx="0"
                                dy="3"
                                stdDeviation="4"
                                floodOpacity="0.25"
                              />
                            </filter>
                          </defs>
                        </svg>
                        {/* Green circle stroke */}
                        <svg
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[98px] h-[98px]"
                          viewBox="0 0 99 99"
                          fill="none"
                        >
                          <circle
                            cx="49.5"
                            cy="49.5"
                            r="42"
                            stroke="#61A94E"
                            strokeWidth="3"
                            fill="none"
                          />
                        </svg>
                        {/* Number */}
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-['Poppins'] font-semibold text-[40px] text-[#61a94e]">
                          {card.number}
                        </span>
                      </div>
                    </div>

                    {/* Title ABOVE icon */}
                    <h3 className="font-['Poppins'] font-semibold text-[16.767px] text-black text-center mb-4">
                      {card.title}
                    </h3>

                    {/* Icon */}
                    <div className="flex justify-center mb-4">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-[52px] h-[52px] md:w-[58px] md:h-[58px]"
                      />
                    </div>

                    {/* Description */}
                    <p className="font-['Poppins'] font-medium text-[16.767px] text-black text-center">
                      {card.description}
                    </p>
                    </div>
                  </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Conditions We Treat Section */}
        <section className="py-16 md:py-20 lg:py-32 relative overflow-hidden min-h-[850px] md:min-h-[950px] lg:min-h-[1000px]">
          {/* Figma Background - Exact from design */}
          <div className="absolute inset-0 z-0 lg:min-h-[1000px]">
            <Background />
          </div>

          {/* Decorative Icon Shapes - Behind cards */}
          {/* Top Right Icon */}
          <div className="absolute top-[20%] right-[-5%] w-[350px] h-[400px] md:w-[400px] md:h-[450px] lg:w-[448px] lg:h-[511px] z-[1] opacity-80">
            <Icon />
          </div>

          {/* Bottom Left Icon */}
          <div className="absolute bottom-[8%] left-[-8%] w-[320px] h-[380px] md:w-[380px] md:h-[440px] lg:w-[448px] lg:h-[511px] z-[1] opacity-80">
            <div className="rotate-[180deg]">
              <Icon />
            </div>
          </div>

          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
            <ScrollFadeIn direction="up" duration={0.8}>
              <div className="text-center mb-12">
                <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] lg:text-[48px] text-white mb-4">
                  Conditions We Treat
                </h2>
                <p className="font-['Poppins'] font-medium text-[16px] md:text-[18px] lg:text-[20px] text-white max-w-[800px] mx-auto">
                  If you're struggling with these symptoms, you're
                  not alone — and you don't have to settle for
                  feeling this way.
                </p>
              </div>
            </ScrollFadeIn>

            {/* Conditions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Condition Cards */}
              {[
                {
                  title: "Fatigue & Low Energy",
                  description:
                    "Feeling drained all the time? We help restore your vitality and focus.",
                  iconColor: "rgba(97,169,78,0.1)",
                  iconFill: "#61A94E",
                  roundedClass:
                    "rounded-bl-[10px] rounded-br-[10px] rounded-tl-[70px] rounded-tr-[10px]",
                  Icon: Zap,
                },
                {
                  title: "Hormone Imbalance",
                  description:
                    "Balance your hormones naturally for improved mood, energy, and overall health.",
                  iconColor: "rgba(35,97,137,0.1)",
                  iconFill: "#236189",
                  roundedClass: "rounded-[10px]",
                  Icon: Scale,
                },
                {
                  title: "Poor Sleep & Night Sweats",
                  description:
                    "Achieve restful sleep and alleviate discomfort with personalized solutions.",
                  iconColor: "rgba(97,169,78,0.1)",
                  iconFill: "#61A94E",
                  roundedClass:
                    "rounded-bl-[10px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[66px]",
                  Icon: Moon,
                },
                {
                  title: "Mood Swings & Anxiety",
                  description:
                    "Find emotional stability and peace through targeted wellness strategies.",
                  iconColor: "rgba(35,97,137,0.1)",
                  iconFill: "#236189",
                  roundedClass:
                    "rounded-bl-[63px] rounded-br-[10px] rounded-tl-[10px] rounded-tr-[10px]",
                  Icon: CloudRain,
                },
                {
                  title: "Weight Resistance",
                  description:
                    "Overcome stubborn weight plateaus with our integrative approach to metabolism.",
                  iconColor: "rgba(97,169,78,0.1)",
                  iconFill: "#61A94E",
                  roundedClass: "rounded-[10px]",
                  Icon: Dumbbell,
                },
                {
                  title: "Perimenopause & Menopause",
                  description:
                    "Navigate this transition with ease, managing symptoms and maintaining vitality.",
                  iconColor: "rgba(35,97,137,0.1)",
                  iconFill: "#236189",
                  roundedClass:
                    "rounded-bl-[10px] rounded-br-[63px] rounded-tl-[10px] rounded-tr-[10px]",
                  Icon: FlaskConical,
                },
              ].map((condition, index) => (
                <ScrollFadeIn key={index} direction="up" delay={index * 0.1} duration={0.6}>
                  <div
                    className={`bg-white ${condition.roundedClass} shadow-[0px_4px_17.5px_0px_rgba(0,0,0,0.25)] p-8 hover-lift cursor-pointer h-full flex flex-col`}
                  >
                  <div
                    className={`rounded-full w-16 h-16 flex items-center justify-center mb-6 mx-auto`}
                    style={{
                      backgroundColor: condition.iconColor,
                    }}
                  >
                    <condition.Icon
                      className="w-8 h-8"
                      style={{ color: condition.iconFill }}
                      strokeWidth={2}
                    />
                  </div>
                  <h3 className="font-['Poppins'] font-bold text-[20px] text-[#171a1f] text-center mb-3">
                    {condition.title}
                  </h3>
                  <p className="font-['Poppins'] text-[14px] text-[#565d6d] text-center leading-[20px] flex-grow">
                    {condition.description}
                  </p>
                </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Metabolic Hormone Balance Program Section */}
        <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
          {/* Mobile & Tablet Layout */}
          <div className="block min-[1300px]:hidden max-w-[1440px] mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <ScrollFadeIn direction="up" duration={0.8}>
                <div className="text-center mb-12">
                  <p className="font-['Poppins'] font-bold text-[#236189] text-[18px] md:text-[20px] mb-4">
                    METABOLIC HORMONE BALANCE PROGRAM
                  </p>
                  <h3 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] text-black mb-6">
                    A Complete Program for Lasting Results
                  </h3>
                  <p className="font-['Poppins'] text-[18px] md:text-[20px] text-black max-w-[900px] mx-auto">
                    Our integrative program combines telehealth
                    consultations, personalized labs, and proven
                    GLP-1 therapy. It's designed to help you lose
                    weight safely, balance your hormones, and feel
                    like yourself again.
                  </p>
                </div>
              </ScrollFadeIn>

              {/* Testimonial Image - with decorative shapes */}
              <div className="relative mb-12">
                {/* Background Decorative Icons - positioned relative to the image */}
                {/* Icon 1 - Top left corner */}
                <div className="absolute left-[-40px] md:left-[-50px] top-[-80px] md:top-[-120px] w-[120px] md:w-[150px] h-[285px] md:h-[356px] rotate-[403.243deg] z-0 opacity-50">
                  <svg
                    className="block size-full"
                    fill="none"
                    viewBox="0 0 208 494"
                  >
                    <path
                      d={metabolicBgSvgPaths.p1d0dc600}
                      fill="url(#paint0_linear_metabolic_mobile_1)"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_metabolic_mobile_1"
                        x1="27.2102"
                        x2="486.084"
                        y1="127.403"
                        y2="358.695"
                      >
                        <stop stopColor="#0470B7" />
                        <stop
                          offset="0.25"
                          stopColor="#1D8093"
                        />
                        <stop
                          offset="0.58"
                          stopColor="#3C9468"
                        />
                        <stop
                          offset="0.84"
                          stopColor="#4FA04E"
                        />
                        <stop offset="1" stopColor="#56A544" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Icon 2 - Bottom right corner */}
                <div className="absolute right-[-40px] md:right-[-50px] bottom-[-80px] md:bottom-[-120px] w-[120px] md:w-[150px] h-[285px] md:h-[356px] rotate-[253.309deg] z-0 opacity-50 mt-[32px] mr-[59px] mb-[-53px] ml-[-5px]">
                  <svg
                    className="block size-full"
                    fill="none"
                    viewBox="0 0 208 494"
                  >
                    <path
                      d={metabolicBgSvgPaths.p1d0dc600}
                      fill="url(#paint0_linear_metabolic_mobile_2)"
                    />
                    <defs>
                      <linearGradient
                        gradientUnits="userSpaceOnUse"
                        id="paint0_linear_metabolic_mobile_2"
                        x1="27.2102"
                        x2="486.084"
                        y1="127.403"
                        y2="358.695"
                      >
                        <stop stopColor="#0470B7" />
                        <stop
                          offset="0.25"
                          stopColor="#1D8093"
                        />
                        <stop
                          offset="0.58"
                          stopColor="#3C9468"
                        />
                        <stop
                          offset="0.84"
                          stopColor="#4FA04E"
                        />
                        <stop offset="1" stopColor="#56A544" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Image with rounded corners */}
                <div className="rounded-bl-[19px] rounded-tr-[19px] overflow-hidden shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] relative z-10">
                  <img
                    src={
                      img66194F98407B8Istockphoto1485705128170667A3
                    }
                    alt="Smiling woman after successful hormone balance treatment"
                    className="w-full h-[250px] md:h-[353px] object-cover"
                  />
                </div>
              </div>

              {/* Quote Card */}
              <div className="bg-white rounded-[25px] shadow-[0px_1px_9.8px_0px_rgba(0,0,0,0.25)] p-6 md:p-8 max-w-[327px] mx-auto -mt-16 md:-mt-24 relative z-10">
                <div className="flex gap-1 mb-3 items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <img
                      key={i}
                      src={imgStar}
                      alt=""
                      className="w-[19px] h-[19px]"
                    />
                  ))}
                  <span className="font-['Poppins'] text-neutral-400 text-[15px] ml-2">
                    5.0 Rating
                  </span>
                </div>
                <p className="font-['Poppins'] font-medium text-[19px] text-black mb-2">
                  "Within 45 days, I lost 23 lbs and gained my
                  energy back."
                </p>
                <p className="font-['Poppins'] text-[#5e5e5e] text-[19px]">
                  -Sarah M. Patient
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
                <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" className="bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white px-6 md:px-8 py-3 md:py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#549440] transition-colors flex items-center justify-center">
                  Book Your Free Consultation
                </a>
                <button 
                  onClick={() => setCurrentPage("about")}
                  className="bg-[#236189] border border-white text-white px-5 md:px-6 py-3 md:py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#1a4d6b] transition-colors flex items-center justify-center"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Exact Figma Design */}
          <div className="hidden min-[1300px]:block relative min-h-[700px] mx-[0px] my-[3px] px-[0px] py-[57px]">
            <div className="max-w-[1440px] mx-auto px-16 relative h-full">
              {/* Main Content Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-16 items-start pt-16">
                {/* Left Column - Image & Quote Card */}
                <div className="relative">
                  {/* Background Decorative Icons - positioned relative to the image */}
                  {/* Icon 1 - Top left corner */}
                  <div className="absolute left-[-65px] top-[-190px] w-[180px] h-[427px] rotate-[403.243deg] z-0 px-[-22px] py-[0px] px-[-47px] mt-[-19px] mr-[-59px] mb-[14px] ml-[23px] opacity-40">
                    <svg
                      className="block size-full"
                      fill="none"
                      viewBox="0 0 208 494"
                    >
                      <path
                        d={metabolicBgSvgPaths.p1d0dc600}
                        fill="url(#paint0_linear_metabolic_2)"
                      />
                      <defs>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="paint0_linear_metabolic_2"
                          x1="27.2102"
                          x2="486.084"
                          y1="127.403"
                          y2="358.695"
                        >
                          <stop stopColor="#0470B7" />
                          <stop
                            offset="0.25"
                            stopColor="#1D8093"
                          />
                          <stop
                            offset="0.58"
                            stopColor="#3C9468"
                          />
                          <stop
                            offset="0.84"
                            stopColor="#4FA04E"
                          />
                          <stop
                            offset="1"
                            stopColor="#56A544"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Icon 2 - Bottom right corner */}
                  <div className="absolute right-[120px] bottom-[-198px] w-[180px] h-[427px] rotate-[253.309deg] z-0 px-[0px] py-[8px] mt-[-14px] mr-[0px] mb-[-48px] ml-[0px] bg-[rgba(0,0,0,0)] opacity-40">
                    <svg
                      className="block size-full"
                      fill="none"
                      viewBox="0 0 208 494"
                    >
                      <path
                        d={metabolicBgSvgPaths.p1d0dc600}
                        fill="url(#paint0_linear_metabolic_1)"
                      />
                      <defs>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="paint0_linear_metabolic_1"
                          x1="27.2102"
                          x2="486.084"
                          y1="127.403"
                          y2="358.695"
                        >
                          <stop stopColor="#0470B7" />
                          <stop
                            offset="0.25"
                            stopColor="#1D8093"
                          />
                          <stop
                            offset="0.58"
                            stopColor="#3C9468"
                          />
                          <stop
                            offset="0.84"
                            stopColor="#4FA04E"
                          />
                          <stop
                            offset="1"
                            stopColor="#56A544"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  {/* Image */}
                  <div className="relative z-10 h-[353px] w-[530px] rounded-bl-[19px] rounded-tr-[19px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                    <img
                      alt="Smiling woman after successful hormone balance treatment"
                      className="size-full object-cover"
                      src={
                        img66194F98407B8Istockphoto1485705128170667A3
                      }
                    />
                  </div>

                  {/* Quote Card - Overlapping above image */}
                  <div className="absolute top-[-86px] left-[181px] bg-white h-[198px] w-[327px] rounded-[25px] shadow-[0px_1px_9.8px_0px_rgba(0,0,0,0.25)] p-8 z-10">
                    {/* Stars */}
                    <div className="flex gap-1 mb-4 items-center">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img
                          key={i}
                          src={imgStar}
                          alt=""
                          className="w-[19px] h-[19px]"
                        />
                      ))}
                      <span className="font-['Poppins'] text-neutral-400 text-[15px] ml-2">
                        5.0 Rating
                      </span>
                    </div>

                    {/* Quote */}
                    <p className="font-['Poppins'] font-medium text-[19px] text-black leading-normal mb-7">
                      "Within 45 days, I lost 23 lbs and gained
                      my energy back."
                    </p>

                    {/* Attribution */}
                    <p className="font-['Poppins'] text-[#5e5e5e] text-[19px] leading-normal mt-[-19px] mr-[0px] mb-[0px] ml-[0px]">
                      -Sarah M. Patient
                    </p>
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="pt-16 mt-[-161px] mr-[0px] mb-[0px] ml-[0px]">
                  {/* Header */}
                  <p className="font-['Poppins'] font-bold text-[#236189] text-[24px] leading-[28px] mb-12">
                    METABOLIC HORMONE BALANCE PROGRAM
                  </p>

                  {/* Title */}
                  <h3 className="font-['Poppins'] font-bold text-[48px] text-black leading-[59px] mb-8">
                    A Complete Program for Lasting Results
                  </h3>

                  {/* Divider Line */}
                  <div className="w-full h-[2px] mb-4">
                    <svg
                      className="block size-full"
                      fill="none"
                      preserveAspectRatio="none"
                      viewBox="0 0 575 2"
                    >
                      <path
                        d="M1 1H574"
                        opacity="0.49"
                        stroke="#236189"
                        strokeLinecap="round"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>

                  {/* Description */}
                  <p className="font-['Poppins'] text-[24px] text-black leading-[35px] mb-12 max-w-[604px]">
                    Our integrative program combines telehealth
                    consultations, personalized labs, and proven
                    GLP-1 therapy. It's designed to help you
                    lose weight safely, balance your hormones,
                    and feel like yourself again.
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex gap-4">
                    <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" className="bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white px-12 py-4 rounded-[10px] font-['Poppins'] font-medium text-[20px] hover:bg-[#549440] transition-colors flex items-center justify-center">
                      Book Your Free Consultation
                    </a>
                    <button 
                      onClick={() => setCurrentPage("about")}
                      className="bg-[#236189] border border-white text-white px-8 py-4 rounded-[10px] font-['Poppins'] font-medium text-[20px] hover:bg-[#1a4d6b] transition-colors flex items-center justify-center"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who Am I Section */}
        <section
          id="about"
          className="py-16 md:py-20 min-[1300px]:py-0 bg-white relative w-full"
        >
          {/* Mobile & Tablet Layout - Centered with gradient background */}
          <div className="block min-[1300px]:hidden">
            <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-12 md:py-16 bg-gradient-to-t from-white via-[#61a94e]/60 to-[#236189]">
              <ScrollFadeIn direction="up" duration={0.8}>
                <div className="text-center mb-8">
                  <h2 className="font-['Poppins'] font-bold text-[36px] md:text-[42px] lg:text-[48px] text-white mb-6">
                    Who Am I?
                  </h2>
                  <div className="font-['Poppins'] font-medium text-[18px] md:text-[20px] lg:text-[24px] text-white space-y-4 max-w-2xl mx-auto">
                    <p>
                      I'm Megan Hormazdi — nurse practitioner,
                      health coach, and founder of Your
                      Integrative Health. After surviving ovarian
                      and colon cancer, I was left with fatigue,
                      brain fog, and weight struggles until I
                      discovered Integrative Medicine.
                    </p>
                    <p>
                      By addressing root causes like hormone
                      imbalance and inflammation, I regained my
                      health — and now I help other women do the
                      same through the Metabolic Hormone Balance
                      Program.
                    </p>
                  </div>
                </div>
              </ScrollFadeIn>

              {/* Image */}
              <div className="flex justify-center mb-8">
                <div className="w-full max-w-[470px] h-[350px] md:h-[450px] rounded-[20px] overflow-hidden">
                  <img
                    src={img65A43F7E821F8Untitleddesign21}
                    alt="Megan Hormazdi, Nurse Practitioner and Functional Medicine Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <button 
                  onClick={() => setCurrentPage("about")}
                  className="bg-[#236189] border border-white text-white px-6 py-3 md:py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#1a4d6b] transition-colors flex items-center justify-center"
                >
                  Learn More
                </button>
                <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" className="bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white px-6 py-3 md:py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#549440] transition-colors flex items-center justify-center">
                  Book Your Free Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Exact Figma Design with Wave Shape - FULL WIDTH */}
          <div className="hidden min-[1300px]:flex w-screen h-[737px] relative left-1/2 right-1/2 -mx-[50vw]">
            {/* Wave-shaped gradient background - ABSOLUTELY FLUSH TO VIEWPORT LEFT EDGE */}
            <div className="absolute -left-[100px] top-0 w-[900px] min-[1440px]:w-[1000px] min-[1536px]:w-[1050px] min-[2000px]:w-[1300px] h-[737px] z-0">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 808 737"
              >
                <path
                  d={aboutBgSvgPaths.p639ca80}
                  fill="url(#paint0_linear_about_bg)"
                  transform="rotate(90 404 368.5)"
                />
                <defs>
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    id="paint0_linear_about_bg"
                    x1="729.704"
                    x2="169.398"
                    y1="-459.887"
                    y2="329.375"
                  >
                    <stop stopColor="white" />
                    <stop
                      offset="0.383068"
                      stopColor="#61A94E"
                      stopOpacity="0.37"
                    />
                    <stop
                      offset="0.909333"
                      stopColor="#236189"
                    />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            {/* Content Container - full width with absolute positioning for text */}
            <div className="w-full h-full relative z-10">
              {/* Left Column - Text fixed to left side, positioned over wave */}
              <div className="absolute left-0 top-0 h-full flex flex-col justify-center pl-16 pr-8 max-w-[650px] min-[1440px]:max-w-[700px] min-[1536px]:max-w-[730px] min-[2000px]:max-w-[900px] mx-[70px] my-[0px]">
                <h2 className="font-['Poppins'] font-bold text-[48px] text-white mb-8 leading-[40px] text-left">
                  Who Am I?
                </h2>
                <div className="font-['Poppins'] font-medium text-[24px] text-white space-y-4 leading-[40px]">
                  <p>
                    I'm Megan Hormazdi — nurse practitioner,
                    health coach, and founder of Your
                    Integrative Health. After surviving ovarian
                    and colon cancer, I was left with fatigue,
                    brain fog, and weight struggles until I
                    discovered Integrative Medicine.
                  </p>
                  <p>
                    By addressing root causes like hormone
                    imbalance and inflammation, I regained my
                    health — and now I help other women do the
                    same through the Metabolic Hormone Balance
                    Program.
                  </p>
                </div>
              </div>

              {/* Right Column - Image with decorative shapes and buttons - positioned to the right */}
              <div className="absolute right-0 top-0 h-full max-w-[1476px] w-full mr-auto ml-auto left-0 pointer-events-none">
                <div className="absolute right-16 min-[1536px]:right-8 min-[2000px]:right-4 top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-auto mx-[46px] my-[0px]">
                  {/* Decorative Icon 1 - Top-right of image */}
                  <div className="absolute right-[-50px] top-[-85px] w-[208px] h-[494px] rotate-[135deg] z-0 opacity-23 px-[0px] py-[28px] mx-[0px] my-[-129px] mx-[-31px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      viewBox="0 0 208 494"
                    >
                      <path
                        d={aboutSvgPaths.p1d0dc600}
                        fill="url(#paint0_linear_about_icon_1)"
                      />
                      <defs>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="paint0_linear_about_icon_1"
                          x1="27.2102"
                          x2="486.084"
                          y1="127.403"
                          y2="358.695"
                        >
                          <stop stopColor="#0470B7" />
                          <stop
                            offset="0.25"
                            stopColor="#1D8093"
                          />
                          <stop
                            offset="0.58"
                            stopColor="#3C9468"
                          />
                          <stop
                            offset="0.84"
                            stopColor="#4FA04E"
                          />
                          <stop
                            offset="1"
                            stopColor="#56A544"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Decorative Icon 2 - Bottom-left of image */}
                  <div className="absolute left-[-80px] bottom-[80px] w-[208px] h-[494px] rotate-[315deg] z-0 opacity-23 my-[-142px] px-[0px] py-[-9px] px-[-38px] py-[28px] mx-[0px] mx-[38px]">
                    <svg
                      className="block size-full"
                      fill="none"
                      viewBox="0 0 208 494"
                    >
                      <path
                        d={aboutSvgPaths.p1d0dc600}
                        fill="url(#paint0_linear_about_icon_2)"
                      />
                      <defs>
                        <linearGradient
                          gradientUnits="userSpaceOnUse"
                          id="paint0_linear_about_icon_2"
                          x1="27.2102"
                          x2="486.084"
                          y1="127.403"
                          y2="358.695"
                        >
                          <stop stopColor="#0470B7" />
                          <stop
                            offset="0.25"
                            stopColor="#1D8093"
                          />
                          <stop
                            offset="0.58"
                            stopColor="#3C9468"
                          />
                          <stop
                            offset="0.84"
                            stopColor="#4FA04E"
                          />
                          <stop
                            offset="1"
                            stopColor="#56A544"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Image */}
                  <div className="relative z-10 w-[400px] h-[400px] min-[1536px]:w-[450px] min-[1536px]:h-[450px] min-[2000px]:w-[470px] min-[2000px]:h-[470px] rounded-[20px] overflow-hidden mb-8">
                    <img
                      src={img65A43F7E821F8Untitleddesign21}
                      alt="Megan Hormazdi, Nurse Practitioner and Functional Medicine Specialist"
                      className="w-full h-full object-cover px-[-24px] mx-[0px] m-[0px] py-[0px]"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="relative z-10 flex flex-col gap-4 w-[380px]">
                    <button 
                      onClick={() => setCurrentPage("about")}
                      className="bg-[#236189] border border-white h-[58px] rounded-[10px] text-white font-['Poppins'] font-medium text-[20px] hover:bg-[#1a4d6b] transition-colors flex items-center justify-center"
                    >
                      Learn More
                    </button>
                    <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" className="bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] h-[58px] rounded-[10px] text-white font-['Poppins'] font-medium text-[20px] hover:bg-[#549440] transition-colors flex items-center justify-center">
                      Book Your Free Consultation
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Patient Success Stories Section */}
        <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 relative z-10">
            <ScrollFadeIn direction="up" duration={0.8}>
              <h2 className="font-['Poppins'] font-bold text-[#236189] text-[32px] md:text-[40px] lg:text-[48px] text-center md:mb-16 mt-[-41px] mr-[0px] mb-[79px] ml-[0px] px-[25px] py-[0px]">
                Patient Success Stories
              </h2>
            </ScrollFadeIn>

            {/* Testimonial Card Container */}
            <div className="max-w-[927px] min-[1536px]:max-w-[1100px] min-[2000px]:max-w-[1200px] mx-auto relative">
              {/* Decorative Icon Shapes - Anchored to Card */}
              {/* Top-Left Shape */}
              <div className="absolute left-[-12%] top-[-20%] w-[140px] h-[335px] md:left-[-8%] md:top-[-28%] md:w-[180px] md:h-[428px] lg:w-[246px] lg:h-[585px] rotate-[45deg] opacity-50 md:opacity-63 z-0">
                <svg
                  className="block size-full"
                  fill="none"
                  viewBox="0 0 246 585"
                >
                  <path
                    d={testimonialSvgPaths.p3e994c40}
                    fill="url(#paint0_linear_testimonial_2)"
                    opacity="0.23"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_testimonial_2"
                      x1="32.1872"
                      x2="575.23"
                      y1="150.869"
                      y2="424.29"
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

              {/* Bottom-Right Shape */}
              <div className="absolute right-[-12%] bottom-[-20%] w-[150px] h-[360px] md:right-[-8%] md:bottom-[-28%] md:w-[200px] md:h-[476px] lg:w-[260px] lg:h-[620px] rotate-[210deg] opacity-50 md:opacity-63 z-0">
                <svg
                  className="block size-full"
                  fill="none"
                  viewBox="0 0 281 668"
                >
                  <path
                    d={testimonialSvgPaths.p22eb6f00}
                    fill="url(#paint0_linear_testimonial_1)"
                    opacity="0.23"
                  />
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_testimonial_1"
                      x1="36.8003"
                      x2="657.304"
                      y1="172.239"
                      y2="485.119"
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

              {/* White Card with Organic Rounded Corners */}
              <div
                className={`bg-white rounded-bl-[0.886px] rounded-br-[100px] md:rounded-br-[244.497px] rounded-tl-[100px] md:rounded-tl-[217.036px] rounded-tr-[0.886px] shadow-[0px_3.543px_21.438px_0px_#61a94e] px-4 md:px-12 lg:px-16 py-8 md:py-16 relative transition-all duration-500 ease-in-out ${
                  isTransitioning
                    ? slideDirection === 'left'
                      ? 'opacity-0 -translate-x-12'
                      : 'opacity-0 translate-x-12'
                    : 'opacity-100 translate-x-0'
                }`}
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(97, 169, 78, 0) 0%, rgba(97, 169, 78, 0) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)",
                }}
              >
                {/* Desktop Layout */}
                <div className="hidden md:flex gap-8 lg:gap-12 items-start">
                  {/* Left - Profile Avatar */}
                  <div className="flex-shrink-0">
                    <Avatar
                      name={homePageTestimonials[currentTestimonial].name}
                      size="xl"
                      colorIndex={currentTestimonial}
                    />
                  </div>

                  {/* Right - Content */}
                  <div className="flex-1">
                    {/* Stars and Rating */}
                    <div className="flex items-center gap-2 mb-4 lg:mb-6">
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <img
                            key={i}
                            src={imgStar}
                            alt=""
                            className="w-[35px] h-[35px] lg:w-[44.631px] lg:h-[44.631px]"
                          />
                        ))}
                      </div>
                      <span className="font-['Poppins'] text-neutral-400 text-[13.288px] ml-2">
                        5.0 Rating
                      </span>
                    </div>

                    {/* Name */}
                    <h3 className="font-['Poppins'] font-semibold text-[#236189] text-[42px] lg:text-[56.695px] leading-[35.434px] mb-8 lg:mb-12">
                      {homePageTestimonials[currentTestimonial].name}
                    </h3>

                    {/* Quote Icon */}
                    <div className="w-[30px] lg:w-[38px] h-[24px] lg:h-[30px] mb-4 lg:mb-6">
                      <svg
                        className="block size-full"
                        fill="none"
                        viewBox="0 0 38 30"
                      >
                        <path
                          d={testimonialSvgPaths.p1acea580}
                          fill="#236189"
                        />
                      </svg>
                    </div>

                    {/* Testimonial Text */}
                    <p className="font-['Poppins'] text-[22px] lg:text-[29px] text-black leading-[36px] lg:leading-[42px] mb-8">
                      {homePageTestimonials[currentTestimonial].content}
                    </p>

                    {/* Learn More Button */}
                    <button 
                      onClick={() => setCurrentPage("about")}
                      className="bg-[#236189] border border-white rounded-[8.859px] px-10 lg:px-16 py-3 lg:py-3.5 text-white font-['Poppins'] font-medium text-[16px] lg:text-[17.717px] hover:bg-[#1a4d6b] transition-colors flex items-center justify-center"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden text-center">
                  {/* Profile Avatar */}
                  <div className="flex justify-center mb-4">
                    <Avatar
                      name={homePageTestimonials[currentTestimonial].name}
                      size="lg"
                      colorIndex={currentTestimonial}
                    />
                  </div>

                  {/* Stars and Rating */}
                  <div className="flex justify-center items-center gap-1.5 mb-3">
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <img
                          key={i}
                          src={imgStar}
                          alt=""
                          className="w-[22px] h-[22px]"
                        />
                      ))}
                    </div>
                    <span className="font-['Poppins'] text-neutral-400 text-[11px]">
                      5.0 Rating
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="font-['Poppins'] font-semibold text-[#236189] text-[28px] mb-4">
                    {homePageTestimonials[currentTestimonial].name}
                  </h3>

                  {/* Quote Icon */}
                  <div className="w-[24px] h-[19px] mb-3 mx-auto">
                    <svg
                      className="block size-full"
                      fill="none"
                      viewBox="0 0 38 30"
                    >
                      <path
                        d={testimonialSvgPaths.p1acea580}
                        fill="#236189"
                      />
                    </svg>
                  </div>

                  {/* Testimonial Text */}
                  <p className="font-['Poppins'] text-[16px] text-black leading-[26px] mb-5">
                    {homePageTestimonials[currentTestimonial].content}
                  </p>

                  {/* Learn More Button */}
                  <button 
                    onClick={() => setCurrentPage("about")}
                    className="bg-[#236189] border border-white rounded-[8.859px] px-6 py-2.5 text-white font-['Poppins'] font-medium text-[14px] hover:bg-[#1a4d6b] transition-colors flex items-center justify-center"
                  >
                    Learn More
                  </button>
                </div>

                {/* Carousel Dots */}
                <div className="flex gap-[9px] justify-center mt-8 lg:mt-12">
                  {homePageTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        const direction = index > currentTestimonial ? 'left' : 'right';
                        handleTestimonialChange(index, direction);
                      }}
                      className={`w-[9.744px] h-[9.744px] rounded-full transition-colors ${
                        index === currentTestimonial ? 'bg-[#61a94e]' : 'bg-[#d9d9d9]'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Arrows - Mobile: Below card, Desktop: On sides */}
                {/* Mobile Arrows - Below card */}
                <div className="flex md:hidden gap-6 justify-center mt-6">
                  {/* Left Arrow */}
                  <button
                    onClick={prevTestimonial}
                    className="cursor-pointer"
                    aria-label="Previous testimonial"
                  >
                    <div className="relative w-[50px] h-[50px]">
                      {/* White circle with shadow */}
                      <svg
                        className="absolute inset-0"
                        viewBox="0 0 98 98"
                        fill="none"
                      >
                        <g filter="url(#filter_nav_left_mobile)">
                          <circle
                            cx="48.7495"
                            cy="45.7495"
                            r="40.7495"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="96.6495"
                            id="filter_nav_left_mobile"
                            width="96.6495"
                            x="0.424808"
                            y="0.395472"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              result="hardAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="2.97066" />
                            <feGaussianBlur stdDeviation="3.7876" />
                            <feComposite
                              in2="hardAlpha"
                              operator="out"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              in2="BackgroundImageFix"
                              mode="normal"
                              result="effect1_dropShadow"
                            />
                            <feBlend
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              mode="normal"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      {/* Arrow rotated 90deg */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-[25px] h-[19px]">
                        <img
                          src={imgDownArrow}
                          alt="Previous testimonial"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={nextTestimonial}
                    className="cursor-pointer"
                    aria-label="Next testimonial"
                  >
                    <div className="relative w-[50px] h-[50px]">
                      {/* White circle with shadow */}
                      <svg
                        className="absolute inset-0"
                        viewBox="0 0 98 98"
                        fill="none"
                      >
                        <g filter="url(#filter_nav_right_mobile)">
                          <circle
                            cx="48.7495"
                            cy="45.7495"
                            r="40.7495"
                            fill="white"
                          />
                        </g>
                        <defs>
                          <filter
                            colorInterpolationFilters="sRGB"
                            filterUnits="userSpaceOnUse"
                            height="96.6495"
                            id="filter_nav_right_mobile"
                            width="96.6495"
                            x="0.424808"
                            y="0.395472"
                          >
                            <feFlood
                              floodOpacity="0"
                              result="BackgroundImageFix"
                            />
                            <feColorMatrix
                              in="SourceAlpha"
                              result="hardAlpha"
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            />
                            <feOffset dy="2.97066" />
                            <feGaussianBlur stdDeviation="3.7876" />
                            <feComposite
                              in2="hardAlpha"
                              operator="out"
                            />
                            <feColorMatrix
                              type="matrix"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            />
                            <feBlend
                              in2="BackgroundImageFix"
                              mode="normal"
                              result="effect1_dropShadow"
                            />
                            <feBlend
                              in="SourceGraphic"
                              in2="effect1_dropShadow"
                              mode="normal"
                              result="shape"
                            />
                          </filter>
                        </defs>
                      </svg>
                      {/* Arrow rotated -90deg */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 w-[25px] h-[19px]">
                        <img
                          src={imgDownArrow}
                          alt="Next testimonial"
                          className="w-full h-full object-contain"
                        />
                      </div>
                    </div>
                  </button>
                </div>

                {/* Desktop Arrows - On sides */}
                {/* Left Arrow */}
                <button
                  onClick={prevTestimonial}
                  className="hidden md:block absolute left-[-45px] lg:left-[-60px] top-1/2 -translate-y-1/2 cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <div className="relative w-[65px] h-[65px] lg:w-[81.499px] lg:h-[81.499px]">
                    {/* White circle with shadow */}
                    <svg
                      className="absolute inset-0"
                      viewBox="0 0 98 98"
                      fill="none"
                    >
                      <g filter="url(#filter_nav_left)">
                        <circle
                          cx="48.7495"
                          cy="45.7495"
                          r="40.7495"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                          height="96.6495"
                          id="filter_nav_left"
                          width="96.6495"
                          x="0.424808"
                          y="0.395472"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy="2.97066" />
                          <feGaussianBlur stdDeviation="3.7876" />
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            in2="BackgroundImageFix"
                            mode="normal"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            mode="normal"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    {/* Arrow rotated 90deg */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 w-[35px] h-[26px] lg:w-[45.179px] lg:h-[33.663px]">
                      <img
                        src={imgDownArrow}
                        alt="Previous"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </button>

                {/* Right Arrow */}
                <button
                  onClick={nextTestimonial}
                  className="hidden md:block absolute right-[-45px] lg:right-[-60px] top-1/2 -translate-y-1/2 cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <div className="relative w-[65px] h-[65px] lg:w-[81.499px] lg:h-[81.499px]">
                    {/* White circle with shadow */}
                    <svg
                      className="absolute inset-0"
                      viewBox="0 0 98 98"
                      fill="none"
                    >
                      <g filter="url(#filter_nav_right)">
                        <circle
                          cx="48.7495"
                          cy="45.7495"
                          r="40.7495"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          colorInterpolationFilters="sRGB"
                          filterUnits="userSpaceOnUse"
                          height="96.6495"
                          id="filter_nav_right"
                          width="96.6495"
                          x="0.424808"
                          y="0.395472"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            result="hardAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dy="2.97066" />
                          <feGaussianBlur stdDeviation="3.7876" />
                          <feComposite
                            in2="hardAlpha"
                            operator="out"
                          />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            in2="BackgroundImageFix"
                            mode="normal"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            mode="normal"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    {/* Arrow rotated -90deg */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 w-[35px] h-[26px] lg:w-[45.179px] lg:h-[33.663px]">
                      <img
                        src={imgDownArrow}
                        alt="Next"
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Hormone Imbalance Quiz Banner */}
        <section className="relative w-full min-h-[500px] md:min-h-[450px] lg:h-[414px] overflow-hidden">
          {/* Background with Gradient */}
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
                fill="url(#paint0_linear_quiz_banner)"
                opacity="0.93"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="paint0_linear_quiz_banner"
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

          {/* Content */}
          <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 h-full relative z-10">
            {/* Mobile/Tablet Layout - Stacked */}
            <div className="lg:hidden flex flex-col justify-center min-h-[500px] md:min-h-[450px] py-12 md:py-8 text-center">
              <ScrollFadeIn direction="up" duration={0.8}>
                <h2 className="font-['Poppins'] font-semibold text-[28px] md:text-[34px] text-white uppercase mb-4 leading-tight px-2">
                  Is Hormone imbalance affecting you?
                </h2>
                <p className="font-['Poppins'] text-[18px] md:text-[22px] text-white mb-8 max-w-2xl mx-auto px-2">
                  Take our $97 Hormone Health Quiz to get clarity
                  and get a personalized report.
                </p>
              </ScrollFadeIn>

              {/* Form - Mobile */}
              <div className="space-y-4 max-w-md mx-auto w-full">
                <div>
                  <label className="font-['Poppins'] text-white text-[12px] block mb-2 text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full h-[50px] bg-white rounded-[25px] px-6 font-['Poppins'] text-[12px] text-[#bdbdbd] focus:outline-none focus:ring-2 focus:ring-white/50 text-left"
                  />
                </div>
                <div>
                  <label className="font-['Poppins'] text-white text-[12px] block mb-2 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full h-[50px] bg-white rounded-[25px] px-6 font-['Poppins'] text-[12px] text-[#aeaeae] focus:outline-none focus:ring-2 focus:ring-white/50 text-left"
                  />
                </div>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfG16YmMooW9WLD_6ZZnzT0zo3SptcXTxQY87BwzNKXtxZbPQ/viewform"
                  className="w-full h-[50px] bg-white rounded-[25px] text-[#236189] font-['Poppins'] font-semibold text-[13.19px] uppercase hover:bg-white/90 transition-colors flex items-center justify-center gap-2"
                >
                  Start The Quiz
                  <svg
                    className="w-[21px] h-[24px]"
                    fill="none"
                    viewBox="0 0 21 24"
                  >
                    <path
                      d={quizBannerSvgPaths.p25e13700}
                      fill="#236189"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Desktop Layout - Side by Side */}
            <div className="hidden lg:flex items-center h-full py-12">
              {/* Left - Text Content */}
              <div className="flex-1 max-w-[550px]">
                <h2 className="font-['Poppins'] font-semibold text-[38px] text-white uppercase mb-6 leading-tight">
                  Is Hormone imbalance affecting you?
                </h2>
                <p className="font-['Poppins'] text-[24px] text-white leading-relaxed">
                  Take our $97 Hormone Health Quiz to get
                  clarity and get a personalized report.
                </p>
              </div>

              {/* Right - Form - Pushed more to the right */}
              <div className="flex-1 flex justify-end pr-8 xl:pr-16">
                <div className="space-y-4 w-[394px]">
                  <div>
                    <label className="font-['Poppins'] text-white text-[12px] block mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full h-[50px] bg-white rounded-[25px] px-6 font-['Poppins'] text-[12px] text-[#bdbdbd] focus:outline-none focus:ring-2 focus:ring-white/50 text-left"
                    />
                  </div>
                  <div>
                    <label className="font-['Poppins'] text-white text-[12px] block mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full h-[50px] bg-white rounded-[25px] px-6 font-['Poppins'] text-[12px] text-[#aeaeae] focus:outline-none focus:ring-2 focus:ring-white/50 text-left"
                    />
                  </div>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfG16YmMooW9WLD_6ZZnzT0zo3SptcXTxQY87BwzNKXtxZbPQ/viewform"
                    className="w-full h-[50px] bg-white rounded-[25px] text-[#236189] font-['Poppins'] font-semibold text-[13.19px] uppercase hover:bg-white/90 transition-colors flex items-center justify-center gap-2 mt-6"
                  >
                    Start The Quiz
                    <svg
                      className="w-[21px] h-[24px]"
                      fill="none"
                      viewBox="0 0 21 24"
                    >
                      <path
                        d={quizBannerSvgPaths.p25e13700}
                        fill="#236189"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden">
          {/* Decorative Shapes - Left Border */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[80px] md:w-[160px] lg:w-[320px] h-[190px] md:h-[380px] lg:h-[760px] rotate-[165deg] opacity-40 md:-ml-16 lg:-ml-32 z-0 mt-[154px] mr-[0px] mb-[-3px] ml-[-185px]">
            <svg
              viewBox="0 0 174 412"
              fill="none"
              className="w-full h-full"
            >
              <path
                d={decorativeSvgPaths.p1f5cf580}
                fill="url(#gradient-why-choose-left)"
                opacity="0.4"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="gradient-why-choose-left"
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
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80px] md:w-[160px] lg:w-[320px] h-[190px] md:h-[380px] lg:h-[760px] rotate-[345deg] opacity-40 md:-mr-16 lg:-mr-32 z-0 mt-[-95px] mr-[-189px] mb-[76px] ml-[57px]">
            <svg
              viewBox="0 0 174 412"
              fill="none"
              className="w-full h-full"
            >
              <path
                d={decorativeSvgPaths.p1f5cf580}
                fill="url(#gradient-why-choose-right)"
                opacity="0.4"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="gradient-why-choose-right"
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
            <h2 className="font-['Poppins'] font-bold text-[#236189] text-[32px] md:text-[40px] lg:text-[48px] text-center mb-12 md:mb-16">
              Why Choose Integrative Health?
            </h2>

            {/* Centered YouTube Video */}
            <div className="max-w-5xl mx-auto">
              <div className="rounded-[12px] md:rounded-[19px] overflow-hidden shadow-[0px_4px_17px_0px_rgba(0,0,0,0.2)]">
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/qE62PQfqgSI"
                    title="Why Choose Integrative Health"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section
          id="faq"
          className="py-16 md:py-20 lg:py-32 bg-white relative overflow-hidden"
        >
          {/* Decorative Shapes - Left Border */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[80px] md:w-[160px] lg:w-[320px] h-[190px] md:h-[380px] lg:h-[760px] rotate-[165deg] opacity-40 -ml-8 md:-ml-16 lg:-ml-32 z-0">
            <svg
              viewBox="0 0 174 412"
              fill="none"
              className="w-full h-full"
            >
              <path
                d={decorativeSvgPaths.p1f5cf580}
                fill="url(#gradient-faq-left)"
                opacity="0.4"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="gradient-faq-left"
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
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80px] md:w-[160px] lg:w-[320px] h-[190px] md:h-[380px] lg:h-[760px] rotate-[345deg] opacity-40 -mr-8 md:-mr-16 lg:-mr-32 z-0">
            <svg
              viewBox="0 0 174 412"
              fill="none"
              className="w-full h-full"
            >
              <path
                d={decorativeSvgPaths.p1f5cf580}
                fill="url(#gradient-faq-right)"
                opacity="0.4"
              />
              <defs>
                <linearGradient
                  gradientUnits="userSpaceOnUse"
                  id="gradient-faq-right"
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
            <ScrollFadeIn direction="up" duration={0.8}>
              <h2 className="font-['Poppins'] font-bold text-[#236189] text-[32px] md:text-[40px] lg:text-[48px] text-center mb-12 md:mb-16">
                Frequently Asked Questions
              </h2>
            </ScrollFadeIn>

            <div className="max-w-4xl mx-auto space-y-4">
              {homepageFAQs.map((faq, index) => (
                <ScrollFadeIn key={index} direction="up" delay={index * 0.1} duration={0.5}>
                  <div
                  key={index}
                  className="bg-white rounded-[5px] shadow-[0px_10px_30px_0px_rgba(0,0,0,0.05)]"
                >
                  <button
                    onClick={() =>
                      setOpenFAQ(
                        openFAQ === index ? null : index,
                      )
                    }
                    className="w-full px-6 md:px-8 py-5 md:py-6 flex items-center justify-between text-left"
                  >
                    <span
                      className="font-['Poppins'] font-bold text-[18px] md:text-[20px] text-[#565246] pr-4"
                    >
                      {faq.question}
                    </span>
                    <svg
                      className={`w-6 h-6 md:w-7 md:h-7 text-[#898B8E] transition-transform flex-shrink-0 ${
                        openFAQ === index ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 29 28"
                      fill="currentColor"
                    >
                      <path d="M3.625 9.33333L14.5 19.8333L25.375 9.33333H3.625Z" />
                    </svg>
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 md:px-8 pb-5 md:pb-6">
                      <p className="font-['Poppins'] text-[15px] md:text-[16px] text-[#606267] leading-[26px] md:leading-[28px]">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
                </ScrollFadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Ready to Take Control */}
        <section className="py-16 md:py-20 lg:py-32 relative overflow-hidden">
          {/* Wave-shaped gradient background */}
          <div className="absolute inset-0 z-0">
            <Background />
          </div>

          {/* Decorative Shapes - Left Border */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[80px] md:w-[160px] lg:w-[320px] h-[190px] md:h-[380px] lg:h-[760px] rotate-[165deg] opacity-40 -ml-8 md:-ml-16 lg:-ml-32 z-[1]">
            <svg
              viewBox="0 0 174 412"
              fill="none"
              className="w-full h-full"
            >
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

          {/* Decorative Shapes - Right Border */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[80px] md:w-[160px] lg:w-[320px] h-[190px] md:h-[380px] lg:h-[760px] rotate-[345deg] opacity-40 -mr-8 md:-mr-16 lg:-mr-32 z-[1]">
            <svg
              viewBox="0 0 174 412"
              fill="none"
              className="w-full h-full"
            >
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
            <div className="max-w-4xl mx-auto">
              <h2 className="font-['Poppins'] font-bold text-[32px] md:text-[40px] lg:text-[48px] text-white mb-8 md:mb-12 max-w-[581px]">
                Ready to Take Control of Your Health?
              </h2>

              <div className="bg-gradient-to-r from-[#f6faf5] to-[#f3f8fc] rounded-[31px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] p-8 md:p-12 mb-8">
                {/* 2-column grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                  {/* Left column items */}
                  <div className="space-y-6">
                    {[
                      "Root-cause care",
                      "Personalized treatment plans",
                      "Support for hormones & metabolism",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                      >
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
                        <p className="font-['Poppins'] text-[17.619px] text-[#19191f] leading-[26.429px]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Right column items */}
                  <div className="space-y-6">
                    {[
                      "Whole-body health & wellness coaching",
                      "Empowering patient education",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                      >
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
                        <p className="font-['Poppins'] text-[17.619px] text-[#19191f] leading-[26.429px]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Centered button */}
                <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" className="w-full bg-[#61a94e] border border-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] text-white py-3 md:py-4 rounded-[10px] font-['Poppins'] font-medium text-[18px] md:text-[20px] hover:bg-[#549440] transition-colors flex items-center justify-center">
                  Book Your Free Consultation
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
                      alt="Logo"
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
                    <svg
                      className="w-[21px] h-[15px]"
                      viewBox="0 0 21 15"
                      fill="currentColor"
                    >
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
                    <svg
                      className="w-[17px] h-[19px]"
                      viewBox="0 0 17 19"
                      fill="currentColor"
                    >
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
                    <svg
                      className="w-[11px] h-[19px]"
                      viewBox="0 0 11 19"
                      fill="currentColor"
                    >
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
                    <a
                      href="#services"
                      className="hover:text-[#61a94e] transition-colors"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      className="hover:text-[#61a94e] transition-colors"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#faq"
                      className="hover:text-[#61a94e] transition-colors"
                    >
                      FAQ
                    </a>
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

              {/* Legal */}
              <div>
                <h4 className="font-['Poppins'] font-semibold text-black mb-4">
                  Legal
                </h4>
                <ul className="space-y-3 font-['Poppins'] text-[#6f6c90]">
                  <li>
                    <button
                      onClick={() => setCurrentPage("privacy")}
                      className="hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                    >
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentPage("terms")}
                      className="hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                    >
                      Terms of Use
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => setCurrentPage("disclaimer")}
                      className="hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
                    >
                      Disclaimer
                    </button>
                  </li>
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
            <div className="pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="font-['Poppins'] text-[#6f6c90] text-[14px]">
                  © 2025 Your Integrative Health. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => setCurrentPage("privacy")}
                    className="font-['Poppins'] text-[14px] text-[#6f6c90] hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Privacy
                  </button>
                  <button
                    onClick={() => setCurrentPage("terms")}
                    className="font-['Poppins'] text-[14px] text-[#6f6c90] hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Terms
                  </button>
                  <button
                    onClick={() => setCurrentPage("disclaimer")}
                    className="font-['Poppins'] text-[14px] text-[#6f6c90] hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Disclaimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>

    {/* Chat Widget - Outside overflow container */}
    <ChatWidget />
    </>
  );
}