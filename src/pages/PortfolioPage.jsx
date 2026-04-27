import Portfolio from "../components/Portfolio";
import CTA from "../components/CTA";

const PortfolioPage = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-cover bg-top bg-no-repeat" style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/moss-wall-bg.jpeg)` }} />
        <div className="absolute inset-0 bg-forest-900/70" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block px-4 py-1 bg-sage-500/20 text-sage-300 rounded-full text-sm font-medium mb-6">
            Our Work
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Installations We're Proud Of
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
