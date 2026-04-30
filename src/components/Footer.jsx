import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { analytics } from "../utils/analytics";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src={`${import.meta.env.BASE_URL}images/logo.png`}
                alt="Interior Greenscapes"
                className="w-10 h-10 object-contain"
              />
              <div>
                <span className="font-copperplate text-sm tracking-widest uppercase block text-right leading-none">
                  Interior
                </span>
                <span className="font-script text-2xl block -mt-1 leading-none">
                  Greenscapes
                </span>
              </div>
            </Link>
            <p className="text-gray-400 leading-relaxed mb-6">
              Transforming spaces with beautiful plants and living designs.
              Serving the Treasure Valley for over 30 years.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/interiorgreenscapes"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.socialClick("facebook")}
                className="w-10 h-10 bg-forest-800 rounded-lg flex items-center justify-center hover:bg-sage-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/interiorgreenscapes"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.socialClick("instagram")}
                className="w-10 h-10 bg-forest-800 rounded-lg flex items-center justify-center hover:bg-sage-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-base md:text-lg font-semibold mb-4 md:mb-6">
              Contact Us
            </h4>
            <ul className="space-y-3 md:space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sage-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm md:text-base text-gray-400">Boise, ID 83705</p>
                  <p className="text-gray-500 text-xs md:text-sm">Treasure Valley</p>
                </div>
              </li>
              <li>
                <a
                  href="tel:2088712588"
                  onClick={() => analytics.phoneClick()}
                  className="flex items-center space-x-3 text-sm md:text-base text-gray-400 hover:text-sage-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-sage-400" />
                  <span>(208) 871-2588</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@interiorgreenscapes.com"
                  onClick={() => analytics.emailClick()}
                  className="flex items-center space-x-3 text-sm md:text-base text-gray-400 hover:text-sage-400 transition-colors break-all"
                >
                  <Mail className="w-5 h-5 text-sage-400 flex-shrink-0" />
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
