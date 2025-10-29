import { CloudRain, Weight, Zap, Activity, Heart, Brain } from 'lucide-react';

interface ConditionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconBgColor: string;
}

function ConditionCard({ icon, title, description, iconBgColor }: ConditionCardProps) {
  return (
    <div className="bg-white rounded-[10px] lg:rounded-bl-[63px] p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 min-h-[220px] flex flex-col">
      {/* Icon */}
      <div className={`w-16 h-16 rounded-full ${iconBgColor} flex items-center justify-center mb-4 sm:mb-5`}>
        <div className="text-white">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-['Poppins',sans-serif] font-bold text-[18px] sm:text-[20px] text-[#171a1f] mb-2 sm:mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="font-['Poppins',sans-serif] text-[14px] sm:text-[14px] text-[#565d6d] leading-relaxed flex-grow">
        {description}
      </p>
    </div>
  );
}

export default function ConditionsSection() {
  const conditions = [
    {
      icon: <CloudRain size={32} />,
      title: 'Mood Swings & Anxiety',
      description: 'Find emotional stability and peace through targeted wellness strategies.',
      iconBgColor: 'bg-[rgba(35,97,137,0.1)]',
    },
    {
      icon: <Weight size={32} />,
      title: 'Weight Resistance',
      description: 'Break through plateaus with personalized GLP-1 and metabolic support.',
      iconBgColor: 'bg-[rgba(97,169,78,0.1)]',
    },
    {
      icon: <Zap size={32} />,
      title: 'Low Energy & Fatigue',
      description: 'Restore your vitality with hormone balancing and nutritional optimization.',
      iconBgColor: 'bg-[rgba(35,97,137,0.1)]',
    },
    {
      icon: <Activity size={32} />,
      title: 'Hormonal Imbalance',
      description: 'Get to the root cause with comprehensive testing and targeted treatment.',
      iconBgColor: 'bg-[rgba(97,169,78,0.1)]',
    },
    {
      icon: <Heart size={32} />,
      title: 'Gut Health Issues',
      description: 'Heal your gut to improve overall wellness, weight, and mental clarity.',
      iconBgColor: 'bg-[rgba(35,97,137,0.1)]',
    },
    {
      icon: <Brain size={32} />,
      title: 'Brain Fog',
      description: 'Regain mental clarity through integrative hormone and lifestyle support.',
      iconBgColor: 'bg-[rgba(97,169,78,0.1)]',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[28px] sm:text-[32px] lg:text-[40px] xl:text-[48px] text-black mb-3 sm:mb-4">
            Conditions We Treat
          </h2>
          <p className="font-['Poppins',sans-serif] text-[16px] lg:text-[18px] text-gray-600 max-w-2xl mx-auto">
            Comprehensive care for the challenges you're facing
          </p>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 xl:gap-8">
          {conditions.map((condition, index) => (
            <ConditionCard key={index} {...condition} />
          ))}
        </div>
      </div>
    </section>
  );
}
