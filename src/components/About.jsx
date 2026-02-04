import { Link } from 'react-router-dom';
import { CheckCircle, Leaf, Users, Award } from 'lucide-react';

const features = [
  'Licensed and insured professionals',
  'Custom designs for any space',
  'Flexible lease or purchase options',
  'Ongoing maintenance programs',
  'Certified horticultural technicians',
  'Eco-friendly practices',
];

const About = ({ isFullPage = false }) => {
  return (
    <section className={`py-24 ${isFullPage ? 'pt-32' : ''} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
                alt="Interior plant design"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-sage-200 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-forest-200 rounded-2xl -z-10" />

            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-xl p-6 z-20">
              <div className="flex items-center space-x-4">
                <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-sage-500" />
                </div>
                <div>
                  <p className="text-3xl font-bold text-forest-800">30+</p>
                  <p className="text-gray-500">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="inline-block px-4 py-1 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="section-heading text-left">
              Creating Green Spaces That Inspire
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 1995, Interior Greenscapes has been the Treasure Valley's premier
              provider of interior plantscaping services. Our team of experienced
              designers and certified horticultural technicians work together to
              transform ordinary spaces into extraordinary living environments.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              We believe that plants do more than beautify a space—they improve air
              quality, reduce stress, and create a positive atmosphere that enhances
              productivity and well-being.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-sage-500 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
              <Link to="/portfolio" className="btn-secondary">
                See Our Work
              </Link>
            </div>
          </div>
        </div>

        {/* Mission Section (only on full page) */}
        {isFullPage && (
          <div className="mt-24 pt-24 border-t">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="font-display text-3xl font-semibold text-forest-800 mb-6">
                Our Mission
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed mb-12">
                To provide a positive impact on your environment through green space
                designs that combine aesthetic beauty with the proven health benefits
                of living plants.
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="p-6 bg-sage-50 rounded-2xl">
                  <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Leaf className="w-7 h-7 text-sage-500" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-forest-800 mb-2">
                    Sustainability
                  </h4>
                  <p className="text-gray-600">
                    Committed to eco-friendly practices and sustainable plant sourcing.
                  </p>
                </div>
                <div className="p-6 bg-sage-50 rounded-2xl">
                  <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-7 h-7 text-sage-500" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-forest-800 mb-2">
                    Expertise
                  </h4>
                  <p className="text-gray-600">
                    Our certified team brings decades of combined horticultural knowledge.
                  </p>
                </div>
                <div className="p-6 bg-sage-50 rounded-2xl">
                  <div className="w-14 h-14 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-7 h-7 text-sage-500" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-forest-800 mb-2">
                    Quality
                  </h4>
                  <p className="text-gray-600">
                    Premium plants and materials for long-lasting, beautiful results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default About;
