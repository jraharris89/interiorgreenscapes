import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Corporate Office Atrium',
    category: 'Commercial',
    description: 'A stunning multi-story atrium featuring tropical plants and a living wall.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Medical Center Lobby',
    category: 'Healthcare',
    description: 'Calming green spaces designed to reduce patient anxiety and improve well-being.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Restaurant Living Wall',
    category: 'Hospitality',
    description: 'A dramatic vertical garden creating an unforgettable dining atmosphere.',
    image: 'https://images.unsplash.com/photo-1534889156217-d643df14f14a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Tech Startup Workspace',
    category: 'Commercial',
    description: 'Biophilic design elements throughout an innovative tech company headquarters.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 5,
    title: 'Luxury Hotel Lobby',
    category: 'Hospitality',
    description: 'Elegant tropical installations welcoming guests in grand style.',
    image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 6,
    title: 'Holiday Display',
    category: 'Seasonal',
    description: 'Festive seasonal decorations that delight visitors during the holidays.',
    image: 'https://images.unsplash.com/photo-1512389142860-9c449e58a814?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 7,
    title: 'Residential Garden Room',
    category: 'Residential',
    description: 'A personal indoor oasis bringing nature into everyday living.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 8,
    title: 'Bank Headquarters',
    category: 'Commercial',
    description: 'Professional plantscaping enhancing a prestigious financial institution.',
    image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80',
  },
];

const categories = ['All', 'Commercial', 'Hospitality', 'Healthcare', 'Residential', 'Seasonal'];

const Portfolio = ({ isFullPage = false }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  const displayedProjects = isFullPage ? filteredProjects : filteredProjects.slice(0, 4);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigate = (direction) => {
    if (direction === 'prev') {
      setCurrentIndex((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
    } else {
      setCurrentIndex((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className={`py-24 ${isFullPage ? 'pt-32' : ''} bg-sage-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-sage-200 text-sage-700 rounded-full text-sm font-medium mb-4">
            Our Work
          </span>
          <h2 className="section-heading">Project Portfolio</h2>
          <p className="section-subheading">
            Explore our diverse collection of interior plantscaping projects across
            the Treasure Valley.
          </p>
        </div>

        {/* Category Filter (only on full page) */}
        {isFullPage && (
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-sage-400 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-sage-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => openLightbox(index)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-[4/5]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-sage-300 text-sm font-medium mb-1">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-display font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center text-sage-300">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  <span className="text-sm font-medium">View Project</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button (on homepage) */}
        {!isFullPage && (
          <div className="text-center mt-12">
            <a href="/portfolio" className="btn-primary">
              View All Projects
            </a>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={() => navigate('prev')}
            className="absolute left-6 text-white/60 hover:text-white transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={filteredProjects[currentIndex].image}
              alt={filteredProjects[currentIndex].title}
              className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
            />
            <div className="text-center mt-6">
              <span className="text-sage-400 text-sm font-medium">
                {filteredProjects[currentIndex].category}
              </span>
              <h3 className="text-white text-2xl font-display font-semibold mt-1">
                {filteredProjects[currentIndex].title}
              </h3>
              <p className="text-gray-400 mt-2 max-w-2xl mx-auto">
                {filteredProjects[currentIndex].description}
              </p>
            </div>
          </div>

          <button
            onClick={() => navigate('next')}
            className="absolute right-6 text-white/60 hover:text-white transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {filteredProjects.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === currentIndex ? 'bg-sage-400 w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
