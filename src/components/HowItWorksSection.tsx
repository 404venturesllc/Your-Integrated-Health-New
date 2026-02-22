import imgCall from "figma:asset/bad57ee87977a7c766923f8e7a3adcd6ddc08e09.png";
import imgTreatmentList from "figma:asset/faa3fcfb30b722e5b096c3067900c2fd8881acbf.png";
import imgPill from "figma:asset/ac04ba94d9c0c06a642e143dbd178834d292e80d.png";
import imgHelpingHand from "figma:asset/b5f3ab831f3e2a78b8073d78ff761c491f57dd78.png";

interface StepCardProps {
  number: string;
  title: string;
  description: string;
  icon: string;
  color: 'green' | 'blue';
}

function StepCard({ number, title, description, icon, color }: StepCardProps) {
  const shadowColor = color === 'green' ? '#61a94e' : '#236189';
  
  return (
    <div className="relative bg-white rounded-[20px] lg:rounded-tl-[93px] lg:rounded-br-[112px] lg:rounded-bl-[21px] lg:rounded-tr-[21px] p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-xl transition-shadow"
      style={{ boxShadow: `0px 4px 15.6px 0px ${shadowColor}40` }}
    >
      {/* Icon Circle */}
      <div className="relative mb-6">
        <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto bg-white rounded-full shadow-lg flex items-center justify-center -mt-12 sm:-mt-14">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#61a94e] flex items-center justify-center">
            <img src={icon} alt="" className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
          </div>
        </div>
      </div>

      {/* Step Number */}
      <div className="text-center mb-4">
        <span className="font-['Poppins',sans-serif] font-semibold text-[32px] sm:text-[36px] lg:text-[40px] text-[#61a94e]">
          {number}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-['Poppins',sans-serif] font-semibold text-[16px] sm:text-[18px] lg:text-[17px] text-black text-center mb-3 min-h-[48px] sm:min-h-0">
        {title}
      </h3>

      {/* Description */}
      <p className="font-['Poppins',sans-serif] font-medium text-[14px] sm:text-[15px] lg:text-[17px] text-black text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Free Consultation',
      description: 'Chat with Megan about your symptoms, history, and goals to see if this is right for you.',
      icon: imgCall,
      color: 'green' as const,
    },
    {
      number: '2',
      title: 'Labs & Personalized Plan',
      description: 'Complete initial lab tests and get a custom wellness + hormone balance plan.',
      icon: imgTreatmentList,
      color: 'green' as const,
    },
    {
      number: '3',
      title: 'Personalized Treatment Plan',
      description: 'Your custom plan is built around your labs and goals; support includes lifestyle, gut health, and wellness coaching.',
      icon: imgPill,
      color: 'blue' as const,
    },
    {
      number: '4',
      title: 'Ongoing Support',
      description: 'Quarterly follow-ups to adjust your care, monitor progress, and keep results lasting.',
      icon: imgHelpingHand,
      color: 'green' as const,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements - Hidden on mobile */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-[#61a94e]/5 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#236189]/5 rounded-full blur-3xl hidden lg:block" />

      <div className="relative z-10 mx-auto max-w-[1200px] xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[28px] sm:text-[32px] lg:text-[40px] xl:text-[48px] text-black mb-3 sm:mb-4">
            How Our Care Works
          </h2>
          <p className="font-['Poppins',sans-serif] text-[16px] lg:text-[18px] text-gray-600 max-w-2xl mx-auto">
            A simple 4-step process to transform your health
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6 xl:gap-8 mt-16 sm:mt-20">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
