import imgImage1 from "figma:asset/f1631469ffda4633ffd9113cc29858db7de01fda.png";
import { CheckCircle } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    'Board-certified health practitioner',
    'Specialized in hormone therapy & weight management',
    'Integrative approach combining medication + lifestyle',
    '10+ years of experience',
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Mobile & Tablet - Stack layout */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="mb-8">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-[28px] sm:text-[32px] text-black mb-4">
              Meet Megan
            </h2>
          </div>

          {/* Image */}
          <div className="mb-8">
            <img
              src={imgImage1}
              alt="Megan"
              className="w-full max-w-md mx-auto rounded-[20px] shadow-lg object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <p className="font-['Poppins',sans-serif] text-[16px] text-gray-700 leading-relaxed mb-6">
              Hi, I'm Megan—a nurse practitioner passionate about helping women reclaim their health through personalized, integrative care. I believe true wellness comes from addressing the whole person, not just symptoms.
            </p>

            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#61a94e] flex-shrink-0 mt-0.5" size={20} />
                  <span className="font-['Poppins',sans-serif] text-[15px] text-gray-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full sm:w-auto bg-[#61a94e] hover:bg-[#508a3f] text-white font-['Poppins',sans-serif] font-medium px-8 py-3 rounded-[10px] transition-colors text-[16px] min-h-[44px]">
              Schedule a Consultation
            </button>
          </div>
        </div>

        {/* Desktop - Two column layout */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 xl:gap-16 lg:items-center">
          {/* Left Column - Content */}
          <div className="order-1">
            <h2 className="font-['Poppins',sans-serif] font-semibold text-[40px] xl:text-[48px] text-black mb-6">
              Meet Megan
            </h2>

            <p className="font-['Poppins',sans-serif] text-[18px] text-gray-700 leading-relaxed mb-8 max-w-[560px]">
              Hi, I'm Megan—a nurse practitioner passionate about helping women reclaim their health through personalized, integrative care. I believe true wellness comes from addressing the whole person, not just symptoms.
            </p>

            <div className="space-y-4 mb-10">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-[#61a94e] flex-shrink-0 mt-1" size={24} />
                  <span className="font-['Poppins',sans-serif] text-[17px] text-gray-700">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <button className="bg-[#61a94e] hover:bg-[#508a3f] text-white font-['Poppins',sans-serif] font-medium px-8 py-3.5 rounded-[10px] transition-colors text-[18px]">
              Schedule a Consultation
            </button>
          </div>

          {/* Right Column - Image */}
          <div className="order-2">
            <img
              src={imgImage1}
              alt="Megan"
              className="w-full rounded-[20px] shadow-xl object-cover max-w-[500px] ml-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
