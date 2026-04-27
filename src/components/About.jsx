import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import {
  IconWellbeing,
  IconExpertise,
  IconQuality,
  OrganicIcon,
} from './icons/BotanicalIcons';

const features = [
  'Experienced and insured professionals',
  'Custom designs for any space',
  'Flexible lease or purchase options',
  'Ongoing maintenance programs',
  'Experienced horticultural technicians',
  'Eco-friendly practices',
];

const About = ({ isFullPage = false }) => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src={`${import.meta.env.BASE_URL}images/tropical-arrangement-bowl.jpg`}
                alt="Interior plant design"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative Elements */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-72 h-72 bg-sage-200 rounded-2xl -z-10" />
            <div className="hidden sm:block absolute -top-6 -left-6 w-32 h-32 bg-forest-200 rounded-2xl -z-10" />

          </div>

          {/* Content Side */}
          <div>
            {!isFullPage && <>
              <span className="inline-block px-4 py-1 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="section-heading text-left">
                Creating Green Spaces That Inspire
              </h2>
            </>}
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Since 1995, Interior Greenscapes has been the Treasure Valley's premier
              provider of interior plantscaping services. Our team of designers and
              experienced horticultural technicians work together to transform ordinary
              spaces into extraordinary living environments.
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
                  <div className="flex justify-center mb-4">
                    <OrganicIcon Icon={IconWellbeing} size="w-14 h-14" iconSize="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-forest-800 mb-2">
                    Wellbeing
                  </h4>
                  <p className="text-gray-600">
                    Thoughtfully curated green spaces designed to reduce stress, boost mood, and help people feel their best.
                  </p>
                </div>
                <div className="p-6 bg-sage-50 rounded-2xl">
                  <div className="flex justify-center mb-4">
                    <OrganicIcon Icon={IconExpertise} size="w-14 h-14" iconSize="w-8 h-8" />
                  </div>
                  <h4 className="font-display text-xl font-semibold text-forest-800 mb-2">
                    Expertise
                  </h4>
                  <p className="text-gray-600">
                    Our certified team brings decades of combined horticultural knowledge.
                  </p>
                </div>
                <div className="p-6 bg-sage-50 rounded-2xl">
                  <div className="flex justify-center mb-4">
                    <OrganicIcon Icon={IconQuality} size="w-14 h-14" iconSize="w-8 h-8" />
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
