import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';
import ReceiptScanner from '../../../components/ReceiptScanner';

const HeroSection = () => {
  const [scanningActive, setScanningActive] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { value: "50,000+", label: "Families Served" },
    { value: "$2.3M", label: "Total Saved" },
    { value: "500 tons", label: "Waste Prevented" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats?.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const track = (name, params = {}) => {
    try {
      if (window?.gtag) {
        window.gtag('event', name, params);
      }
      if (window?.fbq) {
        window.fbq('trackCustom', name, params);
      }
    } catch (_) {}
  };

  const handleDownloadClick = () => {
    track('hero_download_clicked', { location: 'hero' });
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-green-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Trust Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-100 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Icon name="Shield" size={16} />
              <span>Trusted by 50,000+ families</span>
            </div>

            {/* Headlines */}
            <div className="space-y-4">
              <h1 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight">
                Stop Throwing Away{' '}
                <span className="text-primary">$1,500</span>{' '}
                Every Year
              </h1>
              <p className="font-inter text-xl text-muted-foreground leading-relaxed max-w-xl">
                AI-powered food management that cuts waste in half through simple barcode scanning. 
                Join thousands of families saving money and helping the planet.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                iconName="Download"
                iconPosition="left"
                className="font-poppins font-semibold text-lg px-8 py-4"
                onClick={handleDownloadClick}
              >
                Download Free App
              </Button>
            </div>

            {/* Real-time Stats */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                {stats?.map((stat, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ${
                      currentStat === index ? 'scale-105 text-primary' : 'text-muted-foreground'
                    }`}
                  >
                    <div className="font-poppins font-bold text-2xl">{stat?.value}</div>
                    <div className="font-inter text-sm">{stat?.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Phone Mockup with enhanced shadow */}
            <div className="relative mx-auto w-80 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Status Bar */}
                <div className="bg-gray-900 h-8 rounded-t-[2.5rem] flex items-center justify-center">
                  <div className="w-20 h-1 bg-white rounded-full"></div>
                </div>

                {/* App Interface */}
                <div className="p-6 h-full bg-gradient-to-b from-green-50 to-white">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Icon name="Leaf" size={16} color="white" />
                      </div>
                      <span className="font-poppins font-bold text-lg">Meal Saver</span>
                    </div>
                    <Icon name="Bell" size={20} />
                  </div>

                  {/* Scanning Area with ReceiptScanner */}
                  <div className="relative mt-24 mb-2">
                    <div className={`relative w-full h-72 bg-gray-100 rounded-2xl flex items-center justify-center transition-all duration-1000 ${
                      scanningActive ? 'bg-green-50 border-2 border-primary' : ''
                    }`}>
                      <ReceiptScanner animationClass="animate-scan-yoyo" />
                      {/* Corner brackets - ensure top layer and strong contrast */}
                      <div className="pointer-events-none absolute inset-0 z-20">
                        <div className="absolute left-3 top-1 w-10 h-10 border-t-4 border-l-4 border-primary rounded-tl-xl drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]"></div>
                        <div className="absolute right-3 top-1 w-10 h-10 border-t-4 border-r-4 border-primary rounded-tr-xl drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]"></div>
                        <div className="absolute left-3 bottom-1 w-10 h-10 border-b-4 border-l-4 border-primary rounded-bl-xl drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]"></div>
                        <div className="absolute right-3 bottom-1 w-10 h-10 border-b-4 border-r-4 border-primary rounded-br-xl drop-shadow-[0_0_6px_rgba(34,197,94,0.8)]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={24} color="currentColor" className="text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;