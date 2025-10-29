import img65A43F7E821F8Untitleddesign21 from "figma:asset/48e69dbd44c881ef26889bac0c30d7dadc6b9965.png";
import imgStar from "figma:asset/24b4141345e6be30ab7a3e5a1b4e537aaca3e236.png";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={img65A43F7E821F8Untitleddesign21}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1360px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="max-w-[640px] lg:max-w-[720px]">
          {/* Badge */}
          <div className="inline-flex items-center bg-white rounded-full px-4 sm:px-5 py-2 mb-6 shadow-sm">
            <span className="font-['Poppins',sans-serif] text-[#61a94e] text-[14px] sm:text-[16px]">
              Personalized Telehealth Care
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="font-['Poppins',sans-serif] font-semibold text-[36px] sm:text-[40px] lg:text-[56px] xl:text-[64px] leading-[1.2] text-black mb-4 sm:mb-6">
            Your Path to Lasting Weight Loss & Hormonal Balance
          </h1>

          {/* Subheading */}
          <p className="font-['Poppins',sans-serif] text-[16px] lg:text-[18px] text-gray-700 leading-relaxed mb-6 sm:mb-8">
            Combine GLP-1 medication with expert guidance on lifestyle, nutrition, and gut health—tailored to your unique needs.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mb-8 sm:mb-10">
            <button className="bg-[rgba(97,169,78,0.54)] hover:bg-[rgba(97,169,78,0.7)] text-white font-['Poppins',sans-serif] font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-[10px] border border-white shadow-md transition-all text-[14px] sm:text-[16px] lg:text-[20px] w-full sm:w-auto min-h-[44px]">
              Book Your Free Consultation
            </button>
            <button className="bg-[rgba(35,97,137,0.77)] hover:bg-[rgba(35,97,137,0.9)] text-white font-['Poppins',sans-serif] font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-[10px] border border-white transition-all text-[14px] sm:text-[16px] lg:text-[20px] w-full sm:w-auto min-h-[44px]">
              Learn More
            </button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-300 border-2 border-white"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <img
                    key={i}
                    src={imgStar}
                    alt=""
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                ))}
              </div>
              <p className="font-['Poppins',sans-serif] text-[12px] sm:text-[14px] text-gray-600">
                Trusted by 500+ clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
