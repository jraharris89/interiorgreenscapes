import About from '../components/About';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import { Users, Award, Leaf, Heart } from 'lucide-react';

const team = [
  {
    name: 'Sarah Johnson',
    role: 'Founder & Lead Designer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
    bio: 'With over 30 years of experience in interior plantscaping, Sarah founded Interior Greenscapes with a passion for bringing nature indoors.',
  },
  {
    name: 'Michael Torres',
    role: 'Head Horticulturist',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    bio: 'A certified horticulturist specializing in tropical plants, Michael ensures every installation thrives.',
  },
  {
    name: 'Emily Chen',
    role: 'Design Consultant',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
    bio: 'Emily brings a keen eye for design and a background in interior architecture to every project.',
  },
  {
    name: 'David Williams',
    role: 'Maintenance Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
    bio: 'David leads our maintenance team, ensuring every plant receives the expert care it needs to thrive.',
  },
];

const AboutPage = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 py-24">
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
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-sage-500" />
              </div>
              <p className="text-4xl font-bold text-forest-800 mb-2">1995</p>
              <p className="text-gray-600">Year Founded</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-sage-500" />
              </div>
              <p className="text-4xl font-bold text-forest-800 mb-2">500+</p>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-sage-500" />
              </div>
              <p className="text-4xl font-bold text-forest-800 mb-2">200+</p>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="w-16 h-16 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-sage-500" />
              </div>
              <p className="text-4xl font-bold text-forest-800 mb-2">100%</p>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="section-heading">Meet the Experts</h2>
            <p className="section-subheading">
              Our passionate team of designers and horticulturists brings decades of
              combined experience to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="group bg-sage-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-forest-800">
                    {member.name}
                  </h3>
                  <p className="text-sage-500 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <CTA />
    </main>
  );
};

export default AboutPage;
