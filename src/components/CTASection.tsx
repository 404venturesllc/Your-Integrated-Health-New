export default function CTASection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-br from-[#61a94e] to-[#508a3f] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Heading */}
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[28px] sm:text-[36px] lg:text-[44px] xl:text-[52px] text-white mb-4 sm:mb-6 leading-tight">
            Ready to Transform Your Health?
          </h2>

          {/* Subheading */}
          <p className="font-['Poppins',sans-serif] text-[16px] sm:text-[18px] lg:text-[20px] text-white/90 mb-8 sm:mb-10 leading-relaxed">
            Book your free consultation today and take the first step toward lasting weight loss and hormonal balance.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
            <button className="bg-white hover:bg-gray-100 text-[#61a94e] font-['Poppins',sans-serif] font-semibold px-8 py-3.5 rounded-[10px] transition-all shadow-lg hover:shadow-xl text-[16px] lg:text-[18px] w-full sm:w-auto min-h-[44px]">
              Book Free Consultation
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white font-['Poppins',sans-serif] font-medium px-8 py-3.5 rounded-[10px] border-2 border-white transition-all text-[16px] lg:text-[18px] w-full sm:w-auto min-h-[44px]">
              Learn More
            </button>
          </div>

          {/* Trust Badge */}
          <div className="mt-8 sm:mt-10">
            <p className="font-['Poppins',sans-serif] text-[14px] sm:text-[15px] text-white/80">
              ✓ Free consultation · ✓ No obligation · ✓ Personalized care plan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
