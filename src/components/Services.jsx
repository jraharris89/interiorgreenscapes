import { Link } from 'react-router-dom';
import {
  Leaf,
  Building2,
  Snowflake,
  Palette,
  Wrench,
  Flower2,
  ArrowRight,
} from 'lucide-react';

const services = [
  {
    icon: Leaf,
    title: 'Interior Plantscaping',
    description:
      'Custom plant designs that transform your indoor spaces into vibrant, living environments.',
    image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Building2,
    title: 'Green Walls & Living Walls',
    description:
      'Stunning vertical gardens that make a bold statement while improving air quality.',
    image: 'https://images.unsplash.com/photo-1534889156217-d643df14f14a?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Palette,
    title: 'Large Atrium Design',
    description:
      'Dramatic installations for lobbies, atriums, and large commercial spaces.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Snowflake,
    title: 'Holiday Decorations',
    description:
      'Seasonal displays and festive installations that delight customers and employees.',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a814?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Flower2,
    title: 'Silk & Fresh Florals',
    description:
      'Beautiful arrangements using premium silk replicas or fresh-cut flowers.',
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Wrench,
    title: 'Plant Maintenance',
    description:
      'Professional ongoing care to keep your plants healthy and thriving year-round.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
  },
];

const Services = ({ showAll = false }) => {
  const displayedServices = showAll ? services : services.slice(0, 3);

  return (
    <section className="py-24 bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
            What We Do
          </span>
          <h2 className="section-heading">Our Services</h2>
          <p className="section-subheading">
            From concept to installation and ongoing maintenance, we provide
            comprehensive plantscaping solutions for any space.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedServices.map((service, index) => (
            <div
              key={service.title}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-sage-500" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold text-forest-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-sage-500 font-medium hover:text-sage-600 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {!showAll && (
          <div className="text-center mt-12">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
