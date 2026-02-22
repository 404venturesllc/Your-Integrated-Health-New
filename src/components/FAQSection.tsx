import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      question: 'How do I get started with your program?',
      answer: 'Simply book a free consultation call. We\'ll discuss your health history, symptoms, and goals to determine if our program is right for you. From there, we\'ll order labs and create your personalized plan.',
    },
    {
      question: 'How do you determine the right treatment for me?',
      answer: 'During your consultation, we\'ll review your medical history, current health status, and goals. We use comprehensive lab testing to identify root causes and create a personalized plan that\'s right for your body.',
    },
    {
      question: 'Do you accept insurance?',
      answer: 'We\'re a cash-pay practice to provide personalized care without insurance limitations. However, we provide detailed receipts (superbills) that you can submit to your insurance for potential reimbursement. Many HSA/FSA accounts also cover our services.',
    },
    {
      question: 'How long does the program take?',
      answer: 'While initial results can be seen within the first few weeks, we recommend a minimum 3-6 month commitment for lasting transformation. Our quarterly follow-ups ensure your plan adapts as your body changes and helps maintain long-term results.',
    },
    {
      question: 'What makes your approach different?',
      answer: 'We combine comprehensive lifestyle, nutrition, gut health, and hormone balancing support into one personalized program. Rather than just treating symptoms, we address root causes and create sustainable habits for lasting wellness.',
    },
    {
      question: 'Do I need to live in a specific state?',
      answer: 'We offer virtual services to patients in multiple states. During your consultation, we\'ll confirm that we\'re licensed to practice in your state and can provide care for you.',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 xl:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-[1200px] xl:max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <h2 className="font-['Poppins',sans-serif] font-semibold text-[28px] sm:text-[32px] lg:text-[40px] xl:text-[48px] text-black mb-3 sm:mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-['Poppins',sans-serif] text-[16px] lg:text-[18px] text-gray-600 max-w-2xl mx-auto">
            Get answers to common questions about our program
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-[12px] px-5 sm:px-6 shadow-sm border border-gray-100"
              >
                <AccordionTrigger className="font-['Poppins',sans-serif] text-[16px] sm:text-[18px] text-left text-black hover:text-[#61a94e] py-5 sm:py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-['Poppins',sans-serif] text-[14px] sm:text-[16px] text-gray-600 leading-relaxed pb-5 sm:pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="text-center mt-10 sm:mt-12">
          <p className="font-['Poppins',sans-serif] text-[16px] text-gray-600 mb-4">
            Still have questions?
          </p>
          <button className="bg-[#61a94e] hover:bg-[#508a3f] text-white font-['Poppins',sans-serif] font-medium px-8 py-3 rounded-[10px] transition-colors text-[16px] min-h-[44px]">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}
