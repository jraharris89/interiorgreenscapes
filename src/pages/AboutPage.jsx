import About from '../components/About';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-sage-500/20 text-sage-300 rounded-full text-sm font-medium mb-6">
            About Us
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            For over 30 years, Interior Greenscapes has been transforming spaces
            throughout the Treasure Valley with beautiful, living plant designs.
          </p>
        </div>
      </section>

      <About isFullPage={true} />

      <CTA />
    </main>
  );
};

export default AboutPage;
