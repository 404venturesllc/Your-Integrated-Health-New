import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";
import ChatWidget from "./components/ChatWidget";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import Breadcrumb from "./components/Breadcrumb";
import { generateBreadcrumbSchema } from "./utils/breadcrumbSchema";

interface PrivacyPolicyProps {
  setCurrentPage: (page: "home" | "services" | "about" | "faq" | "contact" | "blog" | "disclaimer" | "privacy" | "terms") => void;
}

export default function PrivacyPolicy({ setCurrentPage }: PrivacyPolicyProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Privacy Policy | Your Integrative Health</title>
        <meta name="description" content="Your privacy matters. Learn how Your Integrative Health collects, uses, and protects your personal health information and medical data. HIPAA compliant." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourintegrativehealth.com/privacy" />

        {/* Open Graph */}
        <meta property="og:title" content="Privacy Policy | Your Integrative Health" />
        <meta property="og:description" content="Your privacy matters. Learn how Your Integrative Health collects, uses, and protects your personal health information and medical data. HIPAA compliant." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/privacy" />
        <meta property="og:image" content="https://www.yourintegrativehealth.com/og-image.png" />
        <meta property="og:site_name" content="Your Integrative Health" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacy Policy | Your Integrative Health" />
        <meta name="twitter:description" content="Your privacy matters. Learn how Your Integrative Health collects, uses, and protects your personal health information and medical data. HIPAA compliant." />

        {/* Breadcrumb JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { label: "Home", url: "/" },
            { label: "Privacy Policy", url: "/privacy" }
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
          { label: "Privacy Policy", isActive: true }
        ]}
        setCurrentPage={setCurrentPage}
      />

      <main>
      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <h1 className="font-['Poppins',sans-serif] text-[40px] md:text-[56px] font-bold text-[#070707] mb-6">
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none font-['Poppins',sans-serif]">
          <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-6">
            Version Date: 01/01/2024
          </p>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">General</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Your Integrative Health, Megan Hormazdi, FNP-BC, and Dr. Babak Jamasian, MD ("Company" or "we" or "us" or "our") respects the privacy of its users ("user" or "you") that use our website located at Metabolic Hormone Health and Your Integrative Health, including other media forms, media channels, mobile website or mobile application related or connected thereto (collectively, the "Website").
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              The following Company privacy policy ("Privacy Policy") is designed to inform you, as a user of the Website, about the types of information that Company may gather about or collect from you in connection with your use of the Website. It also is intended to explain the conditions under which Company uses and discloses that information, and your rights in relation to that information.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              The Website is hosted in the United States of America and is subject to U.S. state and federal law. If you are accessing our Website from other jurisdictions, please be advised that you are transferring your personal information to us in the United States, and by using our Website, you consent to that transfer and use of your personal information in accordance with this Privacy Policy.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed font-semibold">
              BY USING OR ACCESSING THE WEBSITE, YOU ARE ACCEPTING THE PRACTICES DESCRIBED IN THIS PRIVACY POLICY.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Non-Personally-Identifying Information</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              "Non-Personally-Identifying Information" is information that, without the aid of additional information, cannot be directly associated with a specific person. Like most website operators, Company gathers from users of the Website Non-Personally-Identifying Information of the sort that Web browsers may make available. That information includes the user's Internet Protocol (IP) address, operating system, browser type and the locations of the websites the user views right before arriving at, while navigating and immediately after leaving the Website.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Company analyzes Non-Personally-Identifying Information gathered from users of the Website to help Company better understand how the Website is being used. By identifying patterns and trends in usage, Company is able to better design the Website to improve users' experiences.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Web Cookies</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              A "Web Cookie" is a string of information which assigns you a unique identification that a website stores on a user's computer. We use cookies on the Website to keep track of services you have used, to record registration information regarding your login name and password, to record your user preferences, to keep you logged into the Website and to facilitate purchase procedures.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed font-semibold">
              COMPANY USERS WHO DO NOT WISH TO HAVE WEB COOKIES PLACED ON THEIR COMPUTERS SHOULD SET THEIR BROWSERS TO REFUSE WEB COOKIES BEFORE ACCESSING THE WEBSITE, WITH THE UNDERSTANDING THAT CERTAIN FEATURES OF THE WEBSITE MAY NOT FUNCTION PROPERLY WITHOUT THE AID OF WEB COOKIES.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Web Beacons</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              A "Web Beacon" is an object that is embedded in a web page or email that is usually invisible to the user and allows website operators to check whether a user has viewed a particular web page or an email. Company may use Web Beacons on the Website and in emails to count users who have visited particular pages, viewed emails and to deliver co-branded services.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Web Beacons collect only a limited set of information, including a Web Cookie number, time and date of a page or email view. You may not decline Web Beacons. However, they can be rendered ineffective by declining all Web Cookies or modifying your browser setting to notify you each time a Web Cookie is tendered.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Analytics</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              We may use third-party vendors, including Google, who use first-party cookies (such as the Google Analytics cookie) and third-party cookies together to inform, optimize and serve ads based on your past activity on the Website. If you do not want any information to be collected and used by Google Analytics, you can install an opt-out in your web browser (https://tools.google.com/dlpage/gaoptout/) and/or opt out from Google Analytics for Display Advertising by using Google's Ads Settings (www.google.com/settings/ads).
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Mobile Device Additional Terms</h2>
            <ul className="list-disc pl-6 space-y-3 text-[#6f6c90] text-[18px] leading-relaxed">
              <li><strong>Mobile Device:</strong> If you use a mobile device to access the Website, we may collect device information (such as your mobile device ID, model and manufacturer), operating system, version information and IP address.</li>
              <li><strong>Geo-Location Information:</strong> Unless we have received your prior consent, we do not access or track any location-based information from your mobile device except that it may be possible to determine from an IP address the geographic location of your point of connectivity.</li>
              <li><strong>Push Notifications:</strong> We send you push notifications if you choose to receive them. If you wish to opt-out, you may turn them off in your device's settings.</li>
              <li><strong>Mobile Analytics:</strong> We use mobile analytics software to better understand the functionality of our mobile software. We do not link the information we store within the analytics software to any Personally-Identifying Information you submit.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Collection of Personally-Identifying Information</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Personally-Identifying Information is information that can be directly associated with a specific person. Company may collect a range of Personally-Identifying Information from and about Website users. Much of the Personally-Identifying Information collected by Company is provided by users themselves when:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              <li>Registering for our service</li>
              <li>Logging in with social network credentials</li>
              <li>Participating in polls, contests, surveys or responding to offers</li>
              <li>Communicating with us</li>
              <li>Creating a public profile</li>
              <li>Signing up to receive newsletters</li>
            </ul>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              That information may include each user's name, address, email address, telephone number, and financial information such as payment method. We also may request information about your interests, gender, age, date of birth, username, hometown and other demographic information.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed font-semibold">
              BY REGISTERING WITH OR USING THE WEBSITE, YOU CONSENT TO THE USE AND DISCLOSURE OF YOUR PERSONALLY-IDENTIFYING INFORMATION AS DESCRIBED IN THIS PRIVACY POLICY.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Company Communications</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              We may occasionally use your name and email address to send you notifications regarding new services offered by the Website that we think you may find valuable. We may also send you service-related announcements from time to time. Generally, you may opt out of such emails through your account settings, though we reserve the right to send you notices about your account, such as service announcements and administrative messages, even if you opt out of all voluntary email notifications.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Company Disclosures</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Company will disclose Personally-Identifying Information under the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-3 text-[#6f6c90] text-[18px] leading-relaxed">
              <li><strong>By Law or to Protect Rights:</strong> When we believe disclosure is appropriate in connection with efforts to investigate, prevent or take action regarding illegal activity, suspected fraud or other wrongdoing; to protect and defend the rights, property or safety of Company, our users, or others; to comply with applicable law or cooperate with law enforcement; or to enforce our Terms of Use.</li>
              <li><strong>Marketing Communications:</strong> Unless users opt-out from receiving marketing materials upon registration, Company may provide users' email information to third parties for marketing purposes. You may opt-out by going to your account settings or contacting us.</li>
              <li><strong>Third-Party Service Providers:</strong> We may share your Personally-Identifying Information with our authorized service providers that perform services on our behalf. These service providers may have access to personal information needed to perform their functions but are not permitted to share or use such information for any other purpose.</li>
              <li><strong>Business Transfers:</strong> Company reserves the right to transfer all Personally-Identifying Information in its possession to a successor organization in the event of a merger, acquisition, bankruptcy or other sale of all or a portion of Company's assets.</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Changing Your Information</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              You may at any time review or change your Personally-Identifying Information by going to your account settings (if applicable) or contacting us using the contact information below. Upon your request, we will deactivate or delete your account and contact information from our active databases as soon as practicable.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              We will retain some Personally-Identifying Information to prevent fraud, troubleshoot problems, assist with investigations, enforce our Terms of Use and comply with legal requirements. Therefore, you should not expect that all your Personally-Identifying Information will be completely removed from our databases. Additionally, we keep a history of changed information to investigate suspected fraud.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">General Use</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-3">
              Company uses the Personally-Identifying Information we maintain about you to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6f6c90] text-[18px] leading-relaxed">
              <li>Deliver the products and services that you have requested</li>
              <li>Manage your account and provide customer support</li>
              <li>Communicate with you about products or services that may be of interest</li>
              <li>Develop and display content and advertising tailored to your interests</li>
              <li>Resolve disputes and troubleshoot problems</li>
              <li>Measure consumer interest in our services</li>
              <li>Customize your experience</li>
              <li>Detect and protect against error, fraud and criminal activity</li>
              <li>Enforce our Terms of Use</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Third-Party Information Collection</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Company contractually prohibits its contractors, affiliates, vendors and suppliers from disclosing Personally-Identifying Information received from Company, other than in accordance with this Privacy Policy. However, third parties are under no obligation to comply with this Privacy Policy with respect to information that users provide directly to those third parties. Before visiting a third party website or using a third-party application, users should inform themselves of the privacy policies and practices of the third party.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Security</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              We take the security of your Personally-Identifying Information seriously and use reasonable electronic, personnel and physical measures to protect it from loss, theft, alteration or misuse. However, please be advised that even the best security measures cannot fully eliminate all risks. We cannot guarantee that only authorized persons will view your information.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              You are responsible for maintaining the confidentiality of your Personally-Identifying Information by keeping your password confidential. You should change your password immediately if you believe someone has gained unauthorized access to it or your account.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Privacy Policy Changes</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Company may, in its sole discretion, change this Privacy Policy from time to time. Any and all changes to Company's Privacy Policy will be reflected on this page and the date new versions are posted will be stated at the top of this Privacy Policy. Users should regularly check this page for any changes. Company may decide to notify users of changes made to this Privacy Policy via email or otherwise.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Children</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              The Children's Online Privacy Protection Act ("COPPA") protects the online privacy of children under 13 years of age. We do not knowingly collect or maintain Personally-Identifying Information from anyone under the age of 13, unless or except as permitted by law. If we learn that Personally-Identifying Information has been collected from a user under 13 years of age, we will take appropriate steps to delete this information. If you are the parent or legal guardian of a child under 13 who has become a member of the Website, please contact Company using our contact information below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">California Privacy Rights</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are California residents to request and obtain from us, once a year and free of charge, information about the Personally-Identifying Information (if any) we disclosed to third parties for direct marketing purposes in the preceding calendar year. If you are a California resident and would like to make such a request, please submit your request in writing to our privacy officer as listed below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Do-Not-Track Policy</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Most web browsers and some mobile operating systems include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference. The Website does not currently respond to DNT browser signals or mechanisms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Affiliate Disclosure</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Your Integrative Health / Your Integrative Health Staff/providers / Your Integrative Health website may contain affiliate links, which means we may receive a percentage of any product or service you purchase using the links in item descriptions, articles or advertisements. You are not obligated to purchase anything from our recommended affiliate links. Your purchases help support ongoing resources, tools, and work. Thank you for your support.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Contact</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-2">
              If you have any questions regarding our Privacy Policy, please contact us at:
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              <strong>Your Integrative Health.PC</strong><br />
              Email: Team@yourintegrativehealth.com
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              <strong>Facebook:</strong><br />
              Your Integrative Health: <a href="https://www.facebook.com/profile.php?id=61554203960774" target="_blank" rel="noopener noreferrer" className="text-[#61a94e] hover:underline">https://www.facebook.com/profile.php?id=61554203960774</a><br />
              Metabolic Hormone Balance: <a href="https://www.facebook.com/ehormonesymphony/" target="_blank" rel="noopener noreferrer" className="text-[#61a94e] hover:underline">https://www.facebook.com/ehormonesymphony/</a>
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
