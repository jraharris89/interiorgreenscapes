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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 md:items-start">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link to="/" className="flex items-center space-x-3">
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
            <div className="flex space-x-3">
              <a
                href="https://facebook.com/interiorgreenscapes"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => analytics.socialClick("facebook")}
                aria-label="Follow on Facebook"
                className="w-9 h-9 bg-forest-800 rounded-lg flex items-center justify-center hover:bg-sage-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
                aria-label="Follow on Instagram"
                className="w-9 h-9 bg-forest-800 rounded-lg flex items-center justify-center hover:bg-sage-500 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
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
            <h4 className="font-display text-base md:text-lg font-semibold mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2.5">
              <li className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-sage-400 flex-shrink-0" />
                <span className="text-sm text-gray-400">
                  Boise, ID 83705 <span className="text-gray-500">· Treasure Valley</span>
                </span>
              </li>
              <li>
                <a
                  href="tel:2088712588"
                  onClick={() => analytics.phoneClick()}
                  className="flex items-center space-x-3 text-sm text-gray-400 hover:text-sage-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-sage-400 flex-shrink-0" />
                  <span>(208) 871-2588</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@interiorgreenscapes.com"
                  onClick={() => analytics.emailClick()}
                  className="flex items-center space-x-3 text-sm text-gray-400 hover:text-sage-400 transition-colors break-all"
                >
                  <Mail className="w-4 h-4 text-sage-400 flex-shrink-0" />
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
