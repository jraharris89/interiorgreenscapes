import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Phone } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Check if we're on the homepage (which has a dark hero)
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  // Determine if we should show light text (only on homepage when not scrolled)
  const showLightText = isHomePage && !isScrolled;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? 'bg-white shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-forest-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
              <Leaf className="w-7 h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className={`font-display text-xl font-semibold transition-colors duration-300 ${showLightText ? 'text-white' : 'text-forest-800'}`}>
                Interior Greenscapes
              </h1>
              <p className={`text-xs transition-colors duration-300 ${showLightText ? 'text-sage-200' : 'text-sage-600'}`}>
                Since 1995
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors duration-300 ${
                  isActive(link.path)
                    ? showLightText ? 'text-sage-300' : 'text-sage-500'
                    : showLightText ? 'text-white/90 hover:text-white' : 'text-gray-700 hover:text-sage-500'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-sage-400 rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:2088712588"
              className={`flex items-center space-x-2 transition-colors duration-300 ${showLightText ? 'text-white' : 'text-forest-700'}`}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(208) 871-2588</span>
            </a>
            <Link
              to="/contact"
              className="btn-primary"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg ${showLightText ? 'text-white' : 'text-forest-800'}`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-3 font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-sage-500 bg-sage-50'
                      : 'text-gray-700 hover:text-sage-500 hover:bg-sage-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-6 pt-4 border-t mt-4">
                <a
                  href="tel:2088712588"
                  className="flex items-center space-x-2 text-forest-700 mb-4"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-medium">(208) 871-2588</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary block text-center"
                >
                  Get a Quote
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
