import About from '../components/About';
import CTA from '../components/CTA';

const AboutPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/moss-wall-bg.jpeg)` }} />
        <div className="absolute inset-0 bg-forest-900/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1 bg-white/20 text-white ring-1 ring-white/40 rounded-full text-sm font-medium mb-6">
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
