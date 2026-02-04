import Services from '../components/Services';
import CTA from '../components/CTA';
import { Leaf, Building2, Snowflake, Palette, Wrench, Flower2, CheckCircle } from 'lucide-react';

const servicesDetailed = [
  {
    icon: Leaf,
    title: 'Interior Plantscaping',
    description:
      'Transform your indoor spaces with custom-designed plant installations that bring life, color, and natural beauty to any environment.',
    features: [
      'Custom design consultations',
      'Professional installation',
      'Wide variety of plant species',
      'Suitable for any space size',
      'Lease or purchase options',
    ],
    image: 'https://images.unsplash.com/photo-1463320726281-696a485928c7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Building2,
    title: 'Green Walls & Living Walls',
    description:
      'Make a bold statement with stunning vertical gardens that transform ordinary walls into living works of art.',
    features: [
      'Custom modular systems',
      'Integrated irrigation',
      'Indoor and outdoor options',
      'Low maintenance designs',
      'Improves air quality',
    ],
    image: 'https://images.unsplash.com/photo-1534889156217-d643df14f14a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Palette,
    title: 'Large Atrium Design',
    description:
      'Create dramatic, show-stopping installations for lobbies, atriums, and large commercial spaces.',
    features: [
      'Architectural integration',
      'Large-scale tropical installations',
      'Water features available',
      'Lighting design',
      'Ongoing care programs',
    ],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Snowflake,
    title: 'Holiday Decorations',
    description:
      'Delight customers and employees with festive seasonal displays that create magical holiday atmospheres.',
    features: [
      'Custom themed designs',
      'Professional installation',
      'Indoor and outdoor displays',
      'Timely setup and removal',
      'Storage available',
    ],
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a814?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Flower2,
    title: 'Silk & Fresh Florals',
    description:
      'Beautiful arrangements using premium silk replicas or fresh-cut flowers for lasting elegance.',
    features: [
      'Weekly fresh flower delivery',
      'High-quality silk arrangements',
      'Custom designs for any occasion',
      'Corporate programs available',
      'Event floral services',
    ],
    image: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    icon: Wrench,
    title: 'Plant Maintenance',
    description:
      'Keep your plants healthy and thriving year-round with our professional maintenance programs.',
    features: [
      'Regular watering schedules',
      'Fertilization programs',
      'Pest management',
      'Pruning and grooming',
      'Plant replacement guarantee',
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
  },
];

const ServicesPage = () => {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-forest-800 to-forest-900 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-sage-500/20 text-sage-300 rounded-full text-sm font-medium mb-6">
            Our Services
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Complete Plantscaping Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From initial design to ongoing maintenance, we provide comprehensive
            services to bring natural beauty into your space.
          </p>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {servicesDetailed.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="rounded-2xl shadow-2xl w-full"
                    />
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sage-400 rounded-2xl flex items-center justify-center shadow-xl">
                      <service.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-forest-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-sage-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-sage-200 text-sage-700 rounded-full text-sm font-medium mb-4">
              How It Works
            </span>
            <h2 className="section-heading">Our Process</h2>
            <p className="section-subheading">
              A simple, streamlined approach to transforming your space.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'We visit your space to understand your vision and needs.',
              },
              {
                step: '02',
                title: 'Design',
                description: 'Our team creates a custom plant design tailored to your space.',
              },
              {
                step: '03',
                title: 'Installation',
                description: 'Professional installation with minimal disruption to your business.',
              },
              {
                step: '04',
                title: 'Maintenance',
                description: 'Ongoing care keeps your plants healthy and beautiful.',
              },
            ].map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-2xl p-8 text-center relative z-10">
                  <span className="text-6xl font-bold text-sage-200">{item.step}</span>
                  <h3 className="font-display text-xl font-semibold text-forest-800 mt-4 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-0">
                    <div className="w-8 h-0.5 bg-sage-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default ServicesPage;
