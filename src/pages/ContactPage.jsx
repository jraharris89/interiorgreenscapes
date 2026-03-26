import Contact from '../components/Contact';
import ServiceAreaMap from '../components/ServiceAreaMap';

const ContactPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-sage-500/20 text-sage-300 rounded-full text-sm font-medium mb-6">
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

          <div className="space-y-6">
            {[
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
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-sage-50 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="font-display text-lg font-semibold text-forest-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
