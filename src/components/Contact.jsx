import { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Facebook,
  Instagram,
} from 'lucide-react';

const Contact = ({ isFullPage = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Boise, ID 83705',
      subtext: 'Serving the Treasure Valley',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '(208) 871-2588',
      subtext: 'Call or text us anytime',
      link: 'tel:2088712588',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@interiorgreenscapes.com',
      subtext: 'We respond within 24 hours',
      link: 'mailto:info@interiorgreenscapes.com',
    },
    {
      icon: Clock,
      title: 'Hours',
      content: 'Mon-Fri: 9am - 5pm',
      subtext: 'Saturday by appointment',
    },
  ];

  return (
    <section className={`py-24 ${isFullPage ? 'pt-32' : ''} bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 bg-sage-100 text-sage-600 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="section-heading">Contact Us</h2>
          <p className="section-subheading">
            Ready to transform your space? We'd love to hear from you. Get in touch
            for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            {contactInfo.map((item) => (
              <div
                key={item.title}
                className="flex items-start space-x-4 p-4 bg-sage-50 rounded-xl"
              >
                <div className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-sage-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-forest-800">{item.title}</h3>
                  {item.link ? (
                    <a
                      href={item.link}
                      className="text-sage-600 hover:text-sage-700 font-medium"
                    >
                      {item.content}
                    </a>
                  ) : (
                    <p className="text-gray-700 font-medium">{item.content}</p>
                  )}
                  <p className="text-sm text-gray-500">{item.subtext}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            <div className="pt-6">
              <h3 className="font-semibold text-forest-800 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/interiorgreenscapesboise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center hover:bg-sage-200 transition-colors"
                >
                  <Facebook className="w-6 h-6 text-sage-600" />
                </a>
                <a
                  href="https://instagram.com/interiorgreenscapesboise"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-sage-100 rounded-xl flex items-center justify-center hover:bg-sage-200 transition-colors"
                >
                  <Instagram className="w-6 h-6 text-sage-600" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-sage-50 rounded-3xl p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-sage-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-sage-500" />
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-forest-800 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        company: '',
                        service: '',
                        message: '',
                      });
                    }}
                    className="btn-secondary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-200 outline-none transition-all"
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-200 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-200 outline-none transition-all"
                        placeholder="(208) 555-0123"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-200 outline-none transition-all"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-200 outline-none transition-all bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option value="interior-plantscaping">Interior Plantscaping</option>
                      <option value="green-walls">Green Walls & Living Walls</option>
                      <option value="atrium-design">Large Atrium Design</option>
                      <option value="holiday-decorations">Holiday Decorations</option>
                      <option value="silk-florals">Silk & Fresh Florals</option>
                      <option value="maintenance">Plant Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-sage-200 focus:border-sage-400 focus:ring-2 focus:ring-sage-200 outline-none transition-all resize-none"
                      placeholder="Tell us about your project or space..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary py-4 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
