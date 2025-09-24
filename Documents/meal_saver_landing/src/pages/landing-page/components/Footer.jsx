import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerLinks = {
    product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' }
    ],
    company: [
      // Our Mission is handled separately
      // About Us is handled separately
    ],
    support: [
      { label: 'System Status', href: '#status' }
      // Contact Us is handled separately
      // App Support is handled separately
    ],
    legal: [
      // Privacy Policy is handled separately
      // Terms of Service is handled separately
      // GDPR is handled separately
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'Facebook', href: '#facebook' },
    { name: 'Twitter', icon: 'Twitter', href: '#twitter' },
    { name: 'Instagram', icon: 'Instagram', href: '#instagram' },
    { name: 'YouTube', icon: 'Youtube', href: '#youtube' }
  ];

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // No custom handler needed for Terms of Service

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div 
              className="flex items-center space-x-2 cursor-pointer"
              onClick={handleScrollToTop}
            >
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Leaf" size={24} color="white" />
              </div>
              <span className="font-poppins font-bold text-2xl">Meal Saver</span>
            </div>
            
            <p className="font-inter text-gray-300 leading-relaxed max-w-md">
              The smart way to eliminate food waste and save money. Join thousands of families who've already transformed their kitchens and budgets with AI-powered food management.
            </p>

            {/* App Store Badges */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#app-store"
                aria-label="Download on the App Store"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-10 w-auto"
                  loading="lazy"
                />
              </a>
              <a
                href="#google-play"
                aria-label="Get it on Google Play"
                className="inline-block hover:opacity-90 transition-opacity"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                  loading="lazy"
                />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-lg flex items-center justify-center transition-colors"
                  aria-label={social?.name}
                >
                  <Icon name={social?.icon} size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:col-span-3">
            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-3">
                {footerLinks?.product?.map((link) => (
                  <li key={link?.label}>
                    <a
                      href={link?.href}
                      className="font-inter text-gray-300 hover:text-white transition-colors"
                    >
                      {link?.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                {footerLinks?.company?.map((link) => (
                  <li key={link?.label}>
                    <a
                      href={link?.href}
                      className="font-inter text-gray-300 hover:text-white transition-colors"
                    >
                      {link?.label}
                    </a>
                  </li>
                ))}
                {/* Our Mission link */}
                <li>
                  <Link
                    to="/our-mission"
                    className="font-inter text-gray-300 hover:text-white transition-colors"
                  >
                    Our Mission
                  </Link>
                </li>
                {/* About Us link */}
                <li>
                  <Link
                    to="/about-us"
                    className="font-inter text-gray-300 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                {footerLinks?.support?.map((link) => (
                  <li key={link?.label}>
                    <a
                      href={link?.href}
                      className="font-inter text-gray-300 hover:text-white transition-colors"
                    >
                      {link?.label}
                    </a>
                  </li>
                ))}
                {/* Contact Us link */}
                <li>
                  <Link
                    to="/contact-us"
                    className="font-inter text-gray-300 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                {/* Bug Reports link */}
                <li>
                  <Link
                    to="/bug-reports"
                    className="font-inter text-gray-300 hover:text-white transition-colors"
                  >
                    Bug Reports
                  </Link>
                </li>
                {/* App Support link */}
                <li>
                  <Link
                    to="/app-support"
                    className="font-inter text-gray-300 hover:text-white transition-colors"
                  >
                    App Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-poppins font-semibold text-lg mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerLinks?.legal?.map((link) => (
                  <li key={link?.label}>
                    <a
                      href={link?.href}
                      className="font-inter text-gray-300 hover:text-white transition-colors"
                    >
                      {link?.label}
                    </a>
                  </li>
                ))}
                {/* Privacy Policy link */}
                <li>
                  <Link
                    to="/privacy"
                    className="font-inter text-gray-300 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                {/* Terms of Service link */}
                <li>
                  <Link
                    to="/terms"
                    className="font-inter text-gray-300 hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                {/* GDPR link */}
                <li>
                  <Link
                    to="/gdpr"
                    className="font-inter text-gray-300 hover:text-white transition-colors"
                  >
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="font-inter text-gray-400">
                © {currentYear} Meal Saver. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} color="#059669" />
                <span className="font-inter text-sm text-gray-400">
                  SOC 2 Compliant
                </span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-inter text-sm text-gray-400">
                  All systems operational
                </span>
              </div>
              <button
                onClick={handleScrollToTop}
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Icon name="ArrowUp" size={16} />
                <span className="font-inter text-sm">Back to top</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;