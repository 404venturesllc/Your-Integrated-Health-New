import img65637454D738DColor3 from "figma:asset/33c4dd26ee1590073477a9c145d04adc1e90a0ad.png";
import ChatWidget from "./components/ChatWidget";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import Breadcrumb from "./components/Breadcrumb";
import { generateBreadcrumbSchema } from "./utils/breadcrumbSchema";

interface TermsOfUseProps {
  setCurrentPage: (page: "home" | "services" | "about" | "faq" | "contact" | "blog" | "disclaimer" | "privacy" | "terms") => void;
}

export default function TermsOfUse({ setCurrentPage }: TermsOfUseProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Terms of Use | Your Integrative Health</title>
        <meta name="description" content="Terms and conditions for using Your Integrative Health services, website, and functional medicine programs. Please review before scheduling consultations." />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.yourintegrativehealth.com/terms" />

        {/* Open Graph */}
        <meta property="og:title" content="Terms of Use | Your Integrative Health" />
        <meta property="og:description" content="Terms and conditions for using Your Integrative Health services, website, and functional medicine programs. Please review before scheduling consultations." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourintegrativehealth.com/terms" />
        <meta property="og:image" content="https://www.yourintegrativehealth.com/og-image.png" />
        <meta property="og:site_name" content="Your Integrative Health" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Terms of Use | Your Integrative Health" />
        <meta name="twitter:description" content="Terms and conditions for using Your Integrative Health services, website, and functional medicine programs. Please review before scheduling consultations." />

        {/* Breadcrumb JSON-LD Schema */}
        <script type="application/ld+json">
          {JSON.stringify(generateBreadcrumbSchema([
            { label: "Home", url: "/" },
            { label: "Terms of Use", url: "/terms" }
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
          { label: "Terms of Use", isActive: true }
        ]}
        setCurrentPage={setCurrentPage}
      />

      <main>
      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-20">
        <h1 className="font-['Poppins',sans-serif] text-[40px] md:text-[56px] font-bold text-[#070707] mb-6">
          Terms of Use
        </h1>

        <div className="prose prose-lg max-w-none font-['Poppins',sans-serif]">
          <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-6">
            Version Date: 01/01/2024
          </p>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Terms of Use Agreement</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              This Terms of Use Agreement ("Agreement") constitutes a legally binding agreement made between you, whether personally or on behalf of an entity ("user" or "you") and Your Integrative Health.PC and Metabolic Hormone Health, and its affiliated companies (collectively, "Company" or "we" or "us" or "our"), concerning your access to and use of the https://www.yourintegrativehealth.com/ and https://www.metabolichormonebalance.com/ websites as well as any other media form, media channel, mobile website or mobile application related or connected thereto (collectively, the "Website").
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              The Website provides the following service: Health and Nutritional Programs ("Company Services"). Supplemental terms and conditions or documents that may be posted on the Website from time to time are hereby expressly incorporated into this Agreement by reference.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              You must be eighteen (18) years old and have the legal ability to agree to these Terms & Conditions; thus, if you are under the age of eighteen (18) or you do not agree to the terms below, STOP now and do not proceed.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed font-semibold">
              YOU ACCEPT AND AGREE TO BE BOUND BY THIS AGREEMENT BY ACKNOWLEDGING SUCH ACCEPTANCE DURING THE REGISTRATION PROCESS (IF APPLICABLE) AND ALSO BY CONTINUING TO USE THE WEBSITE. IF YOU DO NOT AGREE TO ABIDE BY THIS AGREEMENT, OR TO MODIFICATIONS THAT COMPANY MAY MAKE TO THIS AGREEMENT IN THE FUTURE, DO NOT USE OR ACCESS OR CONTINUE TO USE OR ACCESS THE COMPANY SERVICES OR THE WEBSITE.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Your Use and Consent</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              By using this Website, you are agreeing to act in accordance with these Terms, our Privacy Policy, Disclaimer, and any other terms and conditions that may apply to our Website, programs, products, and services available through our Website or from us.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              This Website and all of our programs, products, and services are intended solely for users who are age eighteen (18) and older. Any registration by, use of or access to any program, product, or service or our Website by anyone under age 18 is unauthorized, unlicensed and in violation of these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Medical Warning</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              This Website has been created to provide information about functional/Integrative health care services and is for general informational purposes regarding functional/Integrative health care that should never be construed as medical advice for any person, including patients of the Practice. Nothing on this Website is intended to substitute for professional medical advice, diagnosis, or treatment.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Intellectual Property Rights</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Our Website, programs, products, and services and all the materials available on or through it are property solely owned by Practice, and are protected by copyright, trademark, and other intellectual property laws. This material includes, but is not limited to, the design, layout, look, appearance, and graphics.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              You are only permitted to use the content as expressly authorized by Practice. You may not copy, reproduce, modify, republish, upload, post, transmit, or distribute any documents or information from this Website in any form or by any means without express written permission from Practice.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Any unauthorized use of the materials appearing on this Website may violate copyright, trademark, and other applicable laws and could result in criminal or civil penalties.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">User Materials</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Subject to Practice's Privacy Policy, any communication or material that you transmit to this Website or to Practice, whether by electronic mail or other means, for any reason, will be treated as nonconfidential and nonproprietary. While you retain all rights in such communications or material, you grant Practice and its designated licensees a nonexclusive, royalty-free, fully paid, perpetual, and worldwide right to copy, distribute, display, perform, publish, translate, adapt, modify, and otherwise use such material.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Please do not submit confidential or proprietary information to Practice unless we have mutually agreed in writing otherwise. Practice is also unable to accept your unsolicited ideas or proposals, so please do not submit them to Practice under any circumstance.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-3 font-semibold">
                If you believe your copyright has been infringed, notification must include:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[#6f6c90] text-[17px] leading-relaxed">
                <li>A physical or electronic signature of a person authorized to act on behalf of the owner</li>
                <li>Identification of the copyrighted work claimed to have been infringed</li>
                <li>Contact information (address, telephone number, email address)</li>
                <li>Identification of the material claimed to be infringing and information to locate it</li>
                <li>A statement of good faith belief that use is not authorized</li>
                <li>A statement that the information is accurate under penalty of perjury</li>
              </ul>
            </div>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-2">
              <strong>Designated Agent for Claimed Infringement:</strong>
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Megan Hormazdi, FNP-BC and Dr. Babak Jamasian, MD<br />
              Practice Owners<br />
              Email: Team@yourintegrativehealth.com
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Links to External Websites or Use of Social Media</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              From time to time this Website may include links to other websites or social media sites. These links are provided for your convenience. However, once you have used these links to leave our Website, we do not have any control over their website or social media sites. Therefore, we cannot be responsible for the protection and privacy of any information that you provide while visiting such sites, and such sites are not governed by these Terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Your Conduct</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              You must not use our Website in any way that causes or is likely to cause access to it to be interrupted, damaged or impaired in any way and you must use it for lawful purposes only. You understand that you are solely responsible for all electronic communications and content sent from your computer to Practice by you.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-3">
              You may not use our website in any of the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6f6c90] text-[18px] leading-relaxed">
              <li>To conduct activity with fraudulent purposes or in connection with a criminal offense</li>
              <li>To send or use any material that is illegal, offensive, abusive, defamatory, obscene or menacing</li>
              <li>To transmit software viruses or any other harmful computer code</li>
              <li>To cause annoyance, inconvenience or needless anxiety</li>
              <li>To impersonate any third party or mislead as to the origin of your content</li>
              <li>To reproduce, duplicate, copy or resell any of our content in contravention with these Terms</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Corrections</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Occasionally there may be information on the Website that contains typographical errors, inaccuracies or omissions that may relate to service descriptions, pricing, availability, and various other information. Company reserves the right to correct any errors, inaccuracies or omissions and to change or update the information at any time, without prior notice.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Disclaimer</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              You are aware that you have the right to consult an attorney prior to using our Website or purchasing any program, product, or service from or through us. Practice is not responsible for your personal actions or choices before, during or after use of our Website.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Every effort has been made to present you with the most accurate, up-to-date information. However, because information is constantly evolving, Practice cannot guarantee the accuracy of the content of our Website or that any or all related information is completely current or applies to you specifically.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">No Warranty</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE WEBSITE AND CONTENT (INCLUDING USER SUBMISSIONS) ARE PROVIDED "AS IS" AND WITHOUT WARRANTIES OF ANY KIND EITHER EXPRESS OR IMPLIED, including but not limited to implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Limitation of Liability</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed font-semibold">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PRACTICE BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM YOUR USE OF, OR INABILITY TO USE, THIS SITE OR CONTENT, INCLUDING BUT NOT LIMITED TO DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, EXEMPLARY OR CONSEQUENTIAL DAMAGES, INCLUDING ANY LOST PROFITS, BUSINESS INTERRUPTION, LOST SAVINGS OR LOSS OF PROGRAMS OR OTHER DATA, EVEN IF WE ARE EXPRESSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Confidentiality and Security</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              To use our Website, we may seek personal data or information, including your name, e-mail address, phone number, street address, billing information, interests, or other personally-identifying information ("Personal Information").
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              By providing such Personal Information to us, you grant us permission to use and store such information. We will use our best efforts to keep your Personal Information safe, secure, and confidential in accordance with these Terms and our full Privacy Policy.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              However, due to the nature of the Internet, we cannot completely ensure or warrant the security of any information transmitted to us or through our Website and, therefore, it is done at your own risk.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Site Management</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-3">
              Company reserves the right but does not have the obligation to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[#6f6c90] text-[18px] leading-relaxed">
              <li>Monitor the Website for violations of this Agreement</li>
              <li>Take appropriate legal action against anyone who violates this Agreement</li>
              <li>Refuse, restrict access to, or disable any user's contribution that may violate this Agreement</li>
              <li>Remove or disable files and content that are excessive in size or burdensome to our systems</li>
              <li>Otherwise manage the Website to protect the rights and property of Company and others</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Termination</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Practice reserves the right in our sole discretion to refuse or terminate your access to the Website, in full or in part, at any time without notice. In the event of cancellation or termination, you are no longer authorized to access the part of the Website affected by such cancellation or termination.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Jurisdiction and Governing Law</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              This Website is controlled by Practice from its offices within the State of California, United States of America. By accessing this Website, Practice and you both agree that the statutes and laws of the State of California, without regard to the conflict of laws principles thereof, will apply to all matters relating to the use of this Website. Practice and you both agree and submit to the exclusive personal jurisdiction and venue of the state and federal courts sitting in Orange County, California.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Dispute Resolution</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              <strong>Informal Resolution:</strong> To expedite resolution and control the cost of any dispute, you and Company agree to first attempt to negotiate any Dispute informally for at least thirty (30) days before initiating any arbitration or court proceeding.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              <strong>Binding Arbitration:</strong> If you and Company are unable to resolve a Dispute through informal negotiations, either party may elect to have the Dispute finally and exclusively resolved by binding arbitration. YOU UNDERSTAND THAT ABSENT THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND HAVE A JURY TRIAL.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              The arbitration shall be commenced and conducted under the Commercial Arbitration Rules of the American Arbitration Association (AAA) and, where appropriate, the AAA's Supplementary Procedures for Consumer Related Disputes, both available at www.adr.org. Except where otherwise required by applicable AAA rules or law, the arbitration will take place in Orange County, California.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              <strong>Exceptions:</strong> The following Disputes are not subject to arbitration: (1) any Disputes seeking to enforce or protect intellectual property rights; (2) any Dispute related to theft, piracy, invasion of privacy or unauthorized use; and (3) any claim for injunctive relief.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Electronic Contracting and Signatures</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              Your use of the Company Services includes the ability to enter into agreements and/or to make transactions electronically. YOU ACKNOWLEDGE THAT YOUR ELECTRONIC SUBMISSIONS CONSTITUTE YOUR AGREEMENT AND INTENT TO BE BOUND BY AND TO PAY FOR SUCH AGREEMENTS AND TRANSACTIONS.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              Users are allowed to transmit and receive valid electronic signatures in the United States under the Electronic Signatures in Global and National Commerce Act (E-Sign Act) of 2000 and the Uniform Electronic Transactions Act (UETA) of 1999.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Miscellaneous</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              <strong>Severability:</strong> If any part of these Terms is held invalid or unenforceable, that portion shall be construed in a manner consistent with applicable law to reflect, as nearly as possible, the original intentions of the parties, and the remaining portions shall remain in full force and effect.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-4">
              <strong>Waiver:</strong> Any failure by Practice to enforce or exercise any provision of these terms or related rights shall not constitute a waiver of that right or provision.
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              <strong>Non-Disparagement:</strong> By viewing this Website, you agree to not engage in any conduct or communications in a public setting, including social media, designed to disparage Practice, our Website, programs, products, or services. Should you have concerns, you are to contact us directly at Team@yourintegrativehealth.com.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-[32px] font-semibold text-[#070707] mb-4">Contact Information</h2>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed mb-2">
              If you have any questions about these Terms of Use, please contact us:
            </p>
            <p className="text-[#6f6c90] text-[18px] leading-relaxed">
              <strong>Your Integrative Health.PC</strong><br />
              Irvine, California, United States 92620<br />
              Email: Team@yourintegrativehealth.com<br />
              Facebook: Your Integrative Health
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
