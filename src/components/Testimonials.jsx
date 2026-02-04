import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Office Manager',
    company: 'TechVentures Inc.',
    content:
      "Interior Greenscapes transformed our office lobby into a stunning green oasis. The team's attention to detail and ongoing maintenance has kept our plants thriving for years. Our employees and visitors always comment on how beautiful it looks.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Restaurant Owner',
    company: 'The Garden Table',
    content:
      "The living wall they installed is the centerpiece of our restaurant. Guests can't stop taking photos in front of it! The team handles all the maintenance seamlessly. It's been a fantastic investment for our business.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    name: 'Jennifer Brooks',
    role: 'Facility Director',
    company: 'Boise Medical Center',
    content:
      'We needed plants that would create a calming environment for our patients while being low-maintenance. Interior Greenscapes delivered exactly what we needed. The difference in our waiting areas is remarkable.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Homeowner',
    company: 'Eagle, ID',
    content:
      "After seeing their work in several businesses around town, I hired them for my home. The indoor garden they designed brings me so much joy every day. Their expertise in plant selection was invaluable.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="py-24 bg-forest-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sage-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-sage-500/20 text-sage-300 rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-white mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We take pride in building lasting relationships with our clients throughout
            the Treasure Valley.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 bg-sage-400 rounded-full flex items-center justify-center">
              <Quote className="w-6 h-6 text-white" />
            </div>

            {/* Content */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-xl md:text-2xl text-white leading-relaxed mb-8">
                "{testimonials[currentIndex].content}"
              </p>

              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-sage-400"
                />
                <div className="text-left">
                  <p className="text-white font-semibold text-lg">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sage-300">
                    {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-10">
              <button
                onClick={() => navigate('prev')}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-sage-500 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>

              {/* Dots */}
              <div className="flex space-x-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? 'bg-sage-400 w-8' : 'bg-white/30'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => navigate('next')}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-sage-500 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
