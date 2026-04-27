import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Contact from '../components/Contact';
import ServiceAreaMap from '../components/ServiceAreaMap';

const faqs = [
  {
    question: 'Do you offer free consultations?',
    answer:
      'Yes! We offer complimentary on-site consultations to discuss your vision, assess your space, and provide recommendations tailored to your needs.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We serve the entire Treasure Valley including Boise, Meridian, Eagle, Nampa, Caldwell, Garden City, Kuna, Star, and surrounding areas.',
  },
  {
    question: 'Do you offer plant maintenance services?',
    answer:
      'Absolutely! We offer comprehensive maintenance programs to keep your plants healthy and thriving. Our trained technicians handle watering, fertilization, pruning, and pest management.',
  },
  {
    question: 'Can I lease plants instead of purchasing?',
    answer:
      'Yes, we offer flexible lease programs that include the plants, containers, installation, and ongoing maintenance. This is a popular option for businesses.',
  },
  {
    question: 'What if a plant dies?',
    answer:
      'For clients on our maintenance program, we include a plant replacement guarantee. If a plant fails despite proper care, we replace it at no additional cost.',
  },
];

const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/moss-wall-bg.jpeg)` }} />
        <div className="absolute inset-0 bg-forest-900/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1 bg-white/20 text-white ring-1 ring-white/40 rounded-full text-sm font-medium mb-6">
            Contact Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? We'd love to hear from you. Contact us for
            a free consultation and quote.
          </p>
        </div>
      </section>

      <Contact isFullPage={true} />

      {/* Map Section */}
      <section className="py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading">Service Area</h2>
            <p className="section-subheading">
              We proudly serve the entire Treasure Valley, including Boise, Meridian,
              Eagle, Nampa, and surrounding areas.
            </p>
          </div>

          <ServiceAreaMap />

        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
              FAQ
            </span>
            <h2 className="section-heading">Common Questions</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="bg-sage-50 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <h3 className="font-display text-base md:text-lg font-semibold text-forest-800">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-sage-500 flex-shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
