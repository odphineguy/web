import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navigationItems = [
    { label: 'Savings Calculator', path: '#calculator', id: 'calculator' },
    { label: 'Success Stories', path: '#testimonials', id: 'testimonials' },
    { label: 'Pricing', path: '#pricing', id: 'pricing' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navigationItems?.map(item => item?.id);
      const currentSection = sections?.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element?.getBoundingClientRect();
          return rect?.top <= 100 && rect?.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId?.replace('#', ''));
    if (element) {
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveSection('home');
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-sm shadow-sm' 
            : 'bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div 
              className="flex items-center cursor-pointer"
              onClick={handleLogoClick}
            >
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Leaf" size={20} color="white" />
                </div>
                <span className="font-poppins font-bold text-xl text-foreground">
                  Meal Saver
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => scrollToSection(item?.path)}
                  className={`font-inter font-medium text-sm transition-colors duration-200 hover:text-primary ${
                    activeSection === item?.id 
                      ? 'text-primary' :'text-muted-foreground'
                  }`}
                >
                  {item?.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant="default"
                size="default"
                iconName="Download"
                iconPosition="left"
                className="font-poppins font-semibold"
                onClick={() => window.open('#', '_blank')}
              >
                Download App
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <Icon 
                name={isMobileMenuOpen ? "X" : "Menu"} 
                size={24} 
                color="currentColor" 
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-border shadow-lg">
            <div className="px-4 py-4 space-y-4">
              {navigationItems?.map((item) => (
                <button
                  key={item?.id}
                  onClick={() => scrollToSection(item?.path)}
                  className={`block w-full text-left font-inter font-medium text-base py-2 transition-colors duration-200 ${
                    activeSection === item?.id 
                      ? 'text-primary' :'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {item?.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border">
                <Button
                  variant="default"
                  size="default"
                  iconName="Download"
                  iconPosition="left"
                  fullWidth
                  className="font-poppins font-semibold"
                  onClick={() => {
                    window.open('#', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Download App
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-border shadow-lg p-4">
        <Button
          variant="default"
          size="lg"
          iconName="Download"
          iconPosition="left"
          fullWidth
          className="font-poppins font-semibold"
          onClick={() => window.open('#', '_blank')}
        >
          Download Free App
        </Button>
      </div>
      {/* Spacer for fixed header */}
      <div className="h-16"></div>
    </>
  );
};

export default Header;