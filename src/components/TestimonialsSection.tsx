import imgStar from "figma:asset/24b4141345e6be30ab7a3e5a1b4e537aaca3e236.png";
import { homePageTestimonials } from "../data/testimonials";

interface TestimonialCardProps {
  name: string;
  role?: string;
  content: string;
  rating: number;
  avatar?: string;
}

function TestimonialCard({ name, role, content, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-[16px] p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col">
      {/* Rating Stars */}
      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <img
            key={i}
            src={imgStar}
            alt=""
            className="w-5 h-5"
            style={{ opacity: i < rating ? 1 : 0.3 }}
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="font-['Poppins',sans-serif] text-[15px] sm:text-[16px] text-gray-700 leading-relaxed mb-6 flex-grow line-clamp-4 sm:line-clamp-none">
        "{content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#61a94e] to-[#236189] flex items-center justify-center text-white font-['Poppins',sans-serif] font-semibold text-[18px]">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-['Poppins',sans-serif] font-semibold text-[16px] text-black">
            {name}
          </p>
          <p className="font-['Poppins',sans-serif] text-[14px] text-gray-500">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  const testimonials = homePageTestimonials;

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-white">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[28px] sm:text-[32px] lg:text-[40px] xl:text-[48px] text-black mb-3 sm:mb-4">
            Success Stories
          </h2>
          <p className="font-['Poppins',sans-serif] text-[16px] lg:text-[18px] text-gray-600 max-w-2xl mx-auto">
            Real results from real people
          </p>
        </div>

        {/* Testimonials Grid - Desktop: 3 cols, Tablet: 2 cols, Mobile: 1 col or horizontal scroll */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 xl:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>

        {/* Mobile: Horizontal Scroll */}
        <div className="sm:hidden overflow-x-auto -mx-4 px-4">
          <div className="flex gap-4 pb-4">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-[85vw] max-w-[340px]">
                <TestimonialCard {...testimonial} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
