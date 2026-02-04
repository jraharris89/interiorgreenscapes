import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';

const PortfolioPage = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-sage-500/20 text-sage-300 rounded-full text-sm font-medium mb-6">
            Our Work
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Project Portfolio
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our diverse collection of interior plantscaping projects
            throughout the Treasure Valley and beyond.
          </p>
        </div>
      </section>

      <Portfolio isFullPage={true} />
      <CTA />
    </main>
  );
};

export default PortfolioPage;
