import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";
import ChatWidget from "./components/ChatWidget";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import Breadcrumb from "./components/Breadcrumb";
import { generateBreadcrumbSchema } from "./utils/breadcrumbSchema";

interface DisclaimerProps {
  setCurrentPage: (page: "home" | "services" | "about" | "faq" | "contact" | "blog" | "disclaimer" | "privacy" | "terms") => void;
}

export default function Disclaimer({ setCurrentPage }: DisclaimerProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Medical Disclaimer | Your Integrative Health</title>
        <meta name="description" content="Important medical disclaimer and health information regarding functional medicine services, treatments, and advice provided by Your Integrative Health." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourintegrativehealth.com/disclaimer" />

        {/* Open Graph */}
        <meta property="og:title" content="Medical Disclaimer | Your Integrative Health" />
        <meta property="og:description" content="Important medical disclaimer and health information regarding functional medicine services, treatments, and advice provided by Your Integrative Health." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/disclaimer" />
        <meta property="og:image" content="https://www.yourintegrativehealth.com/og-image.png" />
        <meta property="og:site_name" content="Your Integrative Health" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Medical Disclaimer | Your Integrative Health" />
        <meta name="twitter:description" content="Important medical disclaimer and health information regarding functional medicine services, treatments, and advice provided by Your Integrative Health." />

        {/* Breadcrumb JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { label: "Home", url: "/" },
            { label: "Disclaimer", url: "/disclaimer" }
          ]))}
        </script>
      </Helmet>
      <div className="relative min-h-screen bg-white overflow-x-hidden">
      {/* Header/Navigation */}
      <header className="bg-white h-[100px] sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-[1440px] mx-auto h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
          {/* Logo */}
          <button onClick={() => setCurrentPage("home")} className="h-[60px] md:h-[83px] w-[130px] md:w-[172px] flex-shrink-0" aria-label="Return to homepage">
            <div className="h-full w-full overflow-hidden relative">
              <img
                alt="Your Integrative Health logo"
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
            <button onClick={() => setCurrentPage("about")} className="text-black hover:text-[#61a94e] transition-colors">
              About
            </button>
            <button onClick={() => setCurrentPage("faq")} className="text-black hover:text-[#61a94e] transition-colors">
              FAQ
            </button>
          </nav>

          {/* Get Started Button */}
          <a href="https://yourintegrativehealth.functionalhealingmedicine.com/LandingPage-5694895587734974-5919-2368" target="_blank" rel="noopener noreferrer" className="hidden md:block bg-[#61a94e] text-white px-5 xl:px-6 py-2.5 rounded-[10px] font-['Poppins'] font-medium text-[18px] xl:text-[20px] hover:bg-[#549440] transition-colors flex-shrink-0">
            Get Started
          </a>

          {/* Mobile menu button */}
          <button className="lg:hidden p-2 text-[#61a94e]" aria-label="Toggle navigation menu" aria-expanded="false">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Home", page: "home" },
          { label: "Disclaimer", isActive: true }
        ]}
        setCurrentPage={setCurrentPage}
      />

      <main>
      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <h1 className="font-['Poppins',sans-serif] text-[40px] md:text-[56px] font-bold text-[#070707] mb-6">
          Disclaimer
        </h1>

        <div className="prose prose-lg max-w-none font-['Poppins',sans-serif]">
          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Nutritional & Functional Medicine Disclaimer</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              The intent of any Nutritional or Functional Nutrition protocol suggested by Your Integrative Health and/or Metabolic Hormone Balance is to support the natural physiological and biochemical processes of the human body.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Your Integrative Health and Metabolic Hormone Balance is not a medical office and does not accept insurance.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Be advised that any nutritional program suggested at Your Integrative Health and/or Metabolic Hormone Balance is not intended as a treatment or cure for any disease.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Your Integrative Health and/or Metabolic Hormone Balance doesn't diagnose, treat or cure any disease. Reading the Your Integrative Health and/or Metabolic Hormone Balance website does not mean that you are a client of Your Integrative Health and/or Metabolic Hormone Balance.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed font-semibold">
              Before making any changes to your diet, prescription medications, lifestyle or exercise activities, make sure to check with your medical doctor first.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Return Policy</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              For items provided by Your Integrative Health and Metabolic Hormone Balance: we always strive to ensure we provide you with the exact products you ordered, either in-person or via phone or email. If you received an item in error which has been unopened, please contact us so that we may make arrangements to provide you the correct item and accept your return.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              If you wish to return previously ordered items for any other reason, please consider the following items before contacting Your Integrative Health and/or Metabolic Hormone Balance:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-4">
              <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-2">
                <strong>Contact:</strong><br />
                Megan Hormazdi, FNP-BC and Dr. Babak Jamasian, MD<br />
                Practice Owners<br />
                Email: Team@yourintegrativehealth.com
              </p>
            </div>
            <ul className="list-disc pl-6 space-y-2 text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              <li>Pre-approval is required for all returns & must be within 7 days of receipt</li>
              <li>Refrigerated items cannot be returned</li>
              <li>A 20% restocking fee will be applied to unopened, un-refrigerated returns</li>
              <li>Special orders, herbal blends, advanced lab testing (urine, stool, saliva, etc.) & blood lab test fees cannot be returned</li>
            </ul>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              All items paid to outside Vendors (ex. Prolon, Designs for Health, Systematic Formula, Xymogen, Fullscript, Rupa Health, etc.) have their own customer service and return/refund policies. Please contact them directly for any return needs.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Integrative/Functional Medicine Website Disclaimer</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              The contents of this website, such as text, graphics, images, and other material contained on this website ("Content") are for informational purposes only. The Content is not intended to be a substitute for professional medical advice, diagnosis, or treatment.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Health-related information changes frequently and, therefore, the Content on this website may be outdated, incomplete or incorrect.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              We do not assume any liability for the information contained or referenced within this website and make no warranties, nor express or implied representations whatsoever regarding the accuracy, completeness, timeliness, or usefulness of any information contained or referenced in this website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Results and Testimonials</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Results vary from patient to patient. No prescriptions or treatments will be given unless a clinical need exists based on an examination by the physician.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Any review or other material that could be regarded as a testimonial or endorsement does not constitute a guarantee, warranty, or prediction regarding the outcome of any consultation. The testimonials on this website represent the anecdotal experience of individual consumers.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Terms & Conditions</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Use of Your Integrative Health & Metabolic Hormone Health website is subject to our <button onClick={() => setCurrentPage("terms")} className="text-[#61a94e] hover:underline font-semibold">Terms & Conditions</button> and <button onClick={() => setCurrentPage("privacy")} className="text-[#61a94e] hover:underline font-semibold">Privacy Policy</button>.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Contact Information</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-2">
              If you have any questions about this disclaimer, please contact us:
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              <strong>Megan Hormazdi, FNP-BC and Dr. Babak Jamasian, MD</strong><br />
              Practice Owners<br />
              Email: Team@yourintegrativehealth.com
            </p>
          </section>
        </div>
      </div>
      </main>

        {/* Footer */}
        <footer className="bg-[#f8f9fa] border-t border-gray-200">
          <div className="mx-auto max-w-[1200px] xl:max-w-[1360px] px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 mb-10 sm:mb-12">
              {/* Brand Column */}
              <div className="lg:col-span-1">
                <img
                  src={img65637454D738DColor3}
                  alt="Your Integrative Health logo"
                  className="h-14 sm:h-16 w-auto object-contain mb-5"
                />
                <p className="font-['Poppins',sans-serif] text-[16px] sm:text-[18px] text-[#6f6c90] leading-relaxed mb-6">
                  Personalized integrative care for lasting weight loss and hormonal balance.
                </p>

                {/* Social Icons */}
                <div className="flex items-center gap-3 sm:gap-4">
                  <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white hover:bg-[#61a94e] flex items-center justify-center transition-all shadow-sm hover:shadow-md group">
                    <Facebook size={18} className="text-[#6f6c90] group-hover:text-white" />
                  </a>
                  <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white hover:bg-[#61a94e] flex items-center justify-center transition-all shadow-sm hover:shadow-md group">
                    <Twitter size={18} className="text-[#6f6c90] group-hover:text-white" />
                  </a>
                  <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white hover:bg-[#61a94e] flex items-center justify-center transition-all shadow-sm hover:shadow-md group">
                    <Instagram size={18} className="text-[#6f6c90] group-hover:text-white" />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white hover:bg-[#61a94e] flex items-center justify-center transition-all shadow-sm hover:shadow-md group">
                    <Linkedin size={18} className="text-[#6f6c90] group-hover:text-white" />
                  </a>
                  <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-white hover:bg-[#61a94e] flex items-center justify-center transition-all shadow-sm hover:shadow-md group">
                    <Youtube size={18} className="text-[#6f6c90] group-hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className="lg:col-span-1">
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[16px] sm:text-[18px] text-black mb-4 sm:mb-5">
                  Quick Links
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => setCurrentPage("services")} className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#6f6c90] hover:text-[#61a94e] transition-colors inline-block cursor-pointer bg-transparent border-none p-0 text-left">
                      Services
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentPage("about")} className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#6f6c90] hover:text-[#61a94e] transition-colors inline-block cursor-pointer bg-transparent border-none p-0 text-left">
                      About
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentPage("faq")} className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#6f6c90] hover:text-[#61a94e] transition-colors inline-block cursor-pointer bg-transparent border-none p-0 text-left">
                      FAQ
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentPage("contact")} className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#6f6c90] hover:text-[#61a94e] transition-colors inline-block cursor-pointer bg-transparent border-none p-0 text-left">
                      Contact
                    </button>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="lg:col-span-1">
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[16px] sm:text-[18px] text-black mb-4 sm:mb-5">
                  Contact
                </h3>
                <div className="space-y-2 font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-[#6f6c90]">
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
              </div>

              {/* Legal */}
              <div className="lg:col-span-1">
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[16px] sm:text-[18px] text-black mb-4 sm:mb-5">
                  Legal
                </h3>
                <ul className="space-y-3">
                  <li>
                    <button onClick={() => setCurrentPage("privacy")} className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#6f6c90] hover:text-[#61a94e] transition-colors inline-block cursor-pointer bg-transparent border-none p-0 text-left">
                      Privacy Policy
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentPage("terms")} className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#6f6c90] hover:text-[#61a94e] transition-colors inline-block cursor-pointer bg-transparent border-none p-0 text-left">
                      Terms of Use
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setCurrentPage("disclaimer")} className="font-['Poppins',sans-serif] text-[15px] sm:text-[18px] text-[#6f6c90] hover:text-[#61a94e] transition-colors inline-block cursor-pointer bg-transparent border-none p-0 text-left">
                      Disclaimer
                    </button>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-1">
                <h3 className="font-['Poppins',sans-serif] font-semibold text-[18px] text-black mb-3">
                  Stay Updated
                </h3>
                <p className="font-['Poppins',sans-serif] text-[15px] text-[#6f6c90] mb-4">
                  Get health tips and updates delivered to your inbox
                </p>
                <div className="flex flex-col gap-3">
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
                    onClick={() => setCurrentPage('privacy')}
                    className="font-['Poppins',sans-serif] text-[14px] text-[#6f6c90] hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Privacy
                  </button>
                  <button
                    onClick={() => setCurrentPage('terms')}
                    className="font-['Poppins',sans-serif] text-[14px] text-[#6f6c90] hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Terms
                  </button>
                  <button
                    onClick={() => setCurrentPage('disclaimer')}
                    className="font-['Poppins',sans-serif] text-[14px] text-[#6f6c90] hover:text-[#61a94e] transition-colors cursor-pointer bg-transparent border-none p-0"
                  >
                    Disclaimer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <ChatWidget />
    </>
  );
}
