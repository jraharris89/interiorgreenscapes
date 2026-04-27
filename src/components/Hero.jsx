import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={`${import.meta.env.BASE_URL}images/atrium-tree-grand.jpg`}
          alt="Beautiful interior plants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#273327]/80 via-[#2e3d2e]/70 to-[#3a3f2b]/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium text-white mb-6 leading-tight mt-8">
            Bring Nature
            <span className="block text-sage-300">Into Your Space</span>
          </h1>

          <p className="text-xl md:text-xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional interior plantscaping and green wall design for
            commercial and residential spaces throughout the Treasure Valley.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center w-[260px] sm:w-auto mx-auto">
            <Link to="/contact" className="btn-primary w-full sm:w-auto text-sm px-5 py-2.5 sm:text-base sm:px-8 sm:py-3">
              Schedule Consultation
            </Link>
            <Link
              to="/portfolio"
              className="btn-secondary w-full sm:w-auto border-white/30 text-white hover:bg-white hover:text-forest-800 text-sm px-5 py-2.5 sm:text-base sm:px-8 sm:py-3"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
