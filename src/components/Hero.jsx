import { Link } from "react-router-dom";
import {
  IconQuality,
  IconPlantscape,
  IconExpertise,
} from "./icons/BotanicalIcons";

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

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sage-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

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

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/contact" className="btn-primary text-lg px-10 py-4">
              Schedule Consultation
            </Link>
            <Link
              to="/portfolio"
              className="btn-secondary border-white/30 text-white hover:bg-white hover:text-forest-800 text-lg px-10 py-4"
            >
              View Our Work
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <IconQuality
                  className="w-10 h-10 text-sage-300 mr-3"
                  style={{
                    "--icon-fill": "none",
                    "--icon-accent": "none",
                    filter: "drop-shadow(0 0 0.6px currentColor)",
                  }}
                />
                <span className="text-4xl font-bold text-white">30+</span>
              </div>
              <p className="text-sage-200 text-base font-medium">
                Years Experience
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <IconPlantscape
                  className="w-10 h-10 text-sage-300 mr-3"
                  style={{
                    "--icon-fill": "none",
                    "--icon-accent": "none",
                    filter: "drop-shadow(0 0 0.6px currentColor)",
                  }}
                />
                <span className="text-4xl font-bold text-white">500+</span>
              </div>
              <p className="text-sage-200 text-base font-medium">
                Projects Completed
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <IconExpertise
                  className="w-10 h-10 text-sage-300 mr-3"
                  style={{
                    "--icon-fill": "none",
                    "--icon-accent": "none",
                    filter: "drop-shadow(0 0 0.6px currentColor)",
                  }}
                />
                <span className="text-4xl font-bold text-white">98%</span>
              </div>
              <p className="text-sage-200 text-base font-medium">
                Client Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
