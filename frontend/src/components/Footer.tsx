import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const Footer: React.FC = () => {




  return (
    <footer className="relative">
      {/* Main Footer - Solid Blue Background */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-blue-600 rounded-sm"></div>
                </div>
                <h3 className="text-2xl font-bold text-white">WalletPay</h3>
              </div>
              <p className="text-blue-100 text-sm leading-relaxed">
                Creating exceptional digital experiences that inspire and
                connect people around the world. Innovation meets creativity.
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <button
                    key={index}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-110"
                  >
                    <Icon size={18} />
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2">
                {[
                  "Home",
                  "About Us",
                  "Services",
                  "Portfolio",
                  "Blog",
                  "Careers",
                ].map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Services</h4>
              <ul className="space-y-2">
                {[
                  "Web Development",
                  "Mobile Apps",
                  "UI/UX Design",
                  "Digital Marketing",
                  "Consulting",
                  "Support",
                ].map((service) => (
                  <li key={service}>
                    <a
                      href="#"
                      className="text-blue-100 hover:text-white transition-colors duration-200 text-sm hover:translate-x-1 inline-block transform"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Contact Us</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 mt-0.5 text-blue-200">
                    <MapPin size={16} />
                  </div>
                  <p className="text-blue-100 text-sm">
                    123 Business Street
                    <br />
                    Suite 100
                    <br />
                    City, State 12345
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-blue-200">
                    <Phone size={16} />
                  </div>
                  <a
                    href="tel:+1234567890"
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
                  >
                    +1 (234) 567-8900
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 text-blue-200">
                    <Mail size={16} />
                  </div>
                  <a
                    href="mailto:hello@company.com"
                    className="text-blue-100 hover:text-white text-sm transition-colors duration-200"
                  >
                    hello@company.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - White Background */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-1 text-gray-600 text-sm">
              <span>© 2025 WalletPay. Made with</span>
              <Heart size={16} className="text-red-500 fill-current" />
              <span>All rights reserved.</span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-blue-600 text-sm transition-colors duration-200"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

   
    </footer>
  );
};

export default Footer;
