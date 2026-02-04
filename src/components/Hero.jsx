import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles, Award, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful interior plants"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-forest-900/80 via-forest-800/70 to-sage-900/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-sage-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-forest-400/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-sage-200 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Transforming Spaces Since 1995
          </span>

          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Bring Nature
            <span className="block text-sage-300">Into Your Space</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional interior plantscaping and green wall design for commercial
            and residential spaces throughout the Treasure Valley.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="btn-primary text-lg px-10 py-4"
            >
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
                <Award className="w-6 h-6 text-sage-300 mr-2" />
                <span className="text-4xl font-bold text-white">30+</span>
              </div>
              <p className="text-sage-200 text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Sparkles className="w-6 h-6 text-sage-300 mr-2" />
                <span className="text-4xl font-bold text-white">500+</span>
              </div>
              <p className="text-sage-200 text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-sage-300 mr-2" />
                <span className="text-4xl font-bold text-white">100%</span>
              </div>
              <p className="text-sage-200 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/60" />
      </div>
    </section>
  );
};

export default Hero;
