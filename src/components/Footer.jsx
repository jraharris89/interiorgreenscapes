import { Link } from 'react-router-dom';
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const services = [
    'Interior Plantscaping',
    'Green Walls',
    'Atrium Design',
    'Holiday Decorations',
    'Silk & Fresh Florals',
    'Plant Maintenance',
  ];

  return (
    <footer className="bg-forest-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-sage-400 to-sage-500 rounded-full flex items-center justify-center">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold">Interior Greenscapes</h3>
                <p className="text-sage-400 text-xs">Since 1995</p>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming spaces with beautiful plants and living designs. Serving the
              Treasure Valley for over 30 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/interiorgreenscapesboise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-forest-800 rounded-lg flex items-center justify-center hover:bg-sage-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/interiorgreenscapesboise"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-forest-800 rounded-lg flex items-center justify-center hover:bg-sage-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-sage-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-gray-400 hover:text-sage-400 transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-gray-400">Boise, ID 83705</p>
                  <p className="text-gray-500 text-sm">Treasure Valley</p>
                </div>
              </li>
              <li>
                <a
                  href="tel:2088712588"
                  className="flex items-center space-x-3 text-gray-400 hover:text-sage-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-sage-400" />
                  <span>(208) 871-2588</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@interiorgreenscapes.com"
                  className="flex items-center space-x-3 text-gray-400 hover:text-sage-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-sage-400" />
                  <span>info@interiorgreenscapes.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-forest-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Interior Greenscapes. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-500 text-sm hover:text-gray-400">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-500 text-sm hover:text-gray-400">
                Terms of Service
              </Link>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-sage-500 rounded-lg flex items-center justify-center hover:bg-sage-400 transition-colors"
              >
                <ArrowUp className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
