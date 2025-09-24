import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const CTASection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);

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

  const handleEmailSubmit = (e) => {
    e?.preventDefault();
    if (email) {
      setIsSubmitted(true);
      track('cta_notify_submit', { email_domain: email.split('@')?.[1] || '' });
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

  const appStoreLinks = [
    {
      platform: 'iOS',
      icon: 'Smartphone',
      label: 'Download on the App Store',
      url: '#',
      badge: 'https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg'
    },
    {
      platform: 'Android',
      icon: 'Smartphone',
      label: 'Get it on Google Play',
      url: '#',
      badge: 'https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'
    }
  ];

  const finalStats = [
    { value: "50,000+", label: "Families Saving Money" },
    { value: "$2.3M", label: "Total Saved" },
    { value: "500 tons", label: "Waste Prevented" },
    { value: "4.8★", label: "App Store Rating" }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Zap" size={16} />
            <span>Ready to Transform Your Kitchen?</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6 leading-tight">
            Start Saving{' '}
            <span className="text-primary">$1,500+</span>{' '}
            Every Year
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Join thousands of families who've already eliminated food waste and transformed their budgets. 
            Download Meal Saver today and start your 14-day free trial.
          </p>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            {appStoreLinks?.map((store) => (
              <a
                key={store?.platform}
                href={store?.url}
                onClick={() => track('cta_store_click', { platform: store?.platform })}
                className="group bg-black text-white rounded-2xl px-6 py-4 flex items-center space-x-4 hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
              >
                <Icon name={store?.icon} size={32} />
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="font-poppins font-bold text-lg">{store?.platform === 'iOS' ? 'App Store' : 'Google Play'}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Social Proof Stats */}
        <div className="mb-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {finalStats?.map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="font-poppins font-bold text-3xl text-primary mb-2">
                  {stat?.value}
                </div>
                <div className="font-inter text-muted-foreground">
                  {stat?.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Security & Trust */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-lg border border-gray-200 mb-16">
          <div className="text-center mb-8">
            <h3 className="font-poppins font-bold text-2xl text-foreground mb-4">
              Your Family's Data is Safe & Secure
            </h3>
            <p className="font-inter text-muted-foreground max-w-2xl mx-auto">
              We use bank-level encryption and never share your personal information. 
              Your food data stays private and belongs to you.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Shield', label: 'Bank-Level Security', description: '256-bit SSL encryption' },
              { icon: 'Lock', label: 'Privacy First', description: 'No data selling, ever' },
              { icon: 'Download', label: 'Export Anytime', description: 'Your data, your control' },
              { icon: 'Users', label: 'GDPR Compliant', description: 'International privacy standards' }
            ]?.map((feature, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-xl mx-auto">
                  <Icon name={feature?.icon} size={20} color="#059669" />
                </div>
                <h4 className="font-poppins font-semibold text-foreground">
                  {feature?.label}
                </h4>
                <p className="font-inter text-sm text-muted-foreground">
                  {feature?.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Urgency */}
        <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 sm:p-12 text-white text-center">
          <h3 className="font-poppins font-bold text-3xl sm:text-4xl mb-6">
            Don't Let Another $125 Go to Waste This Month
          </h3>
          <p className="font-inter text-xl opacity-90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Every day you wait is money thrown away. Start your free trial today and join the thousands of families who've already transformed their kitchens and budgets.
          </p>
          
          <div className="flex flex-col gap-4 justify-center items-center">
            <Button
              variant="default"
              size="xl"
              iconName="Download"
              iconPosition="left"
              className="bg-white text-primary hover:bg-gray-50 font-poppins font-bold text-lg px-8 py-4"
              onClick={() => track('cta_download_bottom', { location: 'final-cta' })}
            >
              Download Free App Now
            </Button>
          </div>
          
        </div>

        
      </div>
    </section>
  );
};

export default CTASection;