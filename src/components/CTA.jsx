import { Link } from 'react-router-dom';
import { ArrowRight, Leaf } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-sage-400 via-sage-500 to-forest-600 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-forest-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <Leaf className="w-[600px] h-[600px] text-white/5" />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Space?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Let's create a beautiful, living environment together. Schedule your free
          consultation today and discover the difference plants can make.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-white text-forest-700 font-medium py-4 px-10 rounded-full hover:bg-forest-50 transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <a
            href="tel:2088712588"
            className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white font-medium py-4 px-10 rounded-full hover:bg-white hover:text-forest-700 transition-all duration-300"
          >
            Call (208) 871-2588
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
