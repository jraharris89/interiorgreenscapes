import About from '../components/About';
import CTA from '../components/CTA';
import {
  IconQuality,
  IconSustain,
  IconExpertise,
  IconPlantscape,
  OrganicIcon,
} from '../components/icons/BotanicalIcons';

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

      {/* Stats Section */}
      <section className="py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <OrganicIcon Icon={IconQuality} />
              </div>
              <p className="text-4xl font-bold text-forest-800 mb-2">1995</p>
              <p className="text-gray-600">Year Founded</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <OrganicIcon Icon={IconSustain} />
              </div>
              <p className="text-4xl font-bold text-forest-800 mb-2">500+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <OrganicIcon Icon={IconExpertise} />
              </div>
              <p className="text-4xl font-bold text-forest-800 mb-2">200+</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="flex justify-center mb-4">
                <OrganicIcon Icon={IconPlantscape} />
              </div>
              <p className="text-4xl font-bold text-forest-800 mb-2">98%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default AboutPage;
