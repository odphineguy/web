import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ReceiptScanner from '../../../components/ReceiptScanner';

const SolutionSection = () => {
  const [activeFeature, setActiveFeature] = useState('scan');
  const [scanningActive, setScanningActive] = useState(false);

  const features = [
    {
      id: 'scan',
      title: 'Scan & Detect',
      description: 'AI-powered scanning instantly identifies products from barcodes or receipts and tracks freshness with smart recognition.',
      icon: 'Camera',
      color: 'green'
    },
    {
      id: 'analyze',
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics dashboard providing detailed insights on food inventory, consumption patterns, and savings tracking.',
      icon: 'BarChart3',
      color: 'green'
    },
    {
      id: 'insights',
      title: 'Actionable Insights & Recommendations',
      description: 'Receive personalized meal suggestions and smart recommendations to reduce waste and save money.',
      icon: 'Lightbulb',
      color: 'green'
    }
  ];

  // Scanning effect is handled by ReceiptScanner's animated scan line.

  const handleScanDemo = () => {
    setScanningActive(true);
    setActiveFeature('scan');
    setTimeout(() => setScanningActive(false), 4000);
  };

  const getCurrentFeature = () => {
    return features?.find(feature => feature?.id === activeFeature);
  };

  return (
    <section id="features" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Sparkles" size={16} />
            <span>Powered by AI Technology</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-gray-900 mb-6">
            Smart Features That{' '}
            <span className="text-green-600">Transform</span>{' '}
            Your Kitchen
          </h2>
          
          <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the power of AI-driven food management with our three core features 
            designed to eliminate waste and maximize savings.
          </p>
        </div>

        {/* Feature Navigation Cards - Remove floating effect */}
        <div className="mb-16">
          <div className="grid md:grid-cols-3 gap-6">
            {features?.map((feature) => (
              <button
                key={feature?.id}
                onClick={() => setActiveFeature(feature?.id)}
                className={`text-left p-6 rounded-xl font-medium transition-all duration-300 ${
                  activeFeature === feature?.id
                    ? 'bg-green-600 text-white shadow-lg transform scale-105'
                    : 'bg-white hover:bg-gray-50 shadow-md hover:shadow-lg'
                }`}
              >
                <div className="flex items-center space-x-3 mb-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    activeFeature === feature?.id 
                      ? 'bg-white text-green-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    <Icon name={feature?.icon} size={20} />
                  </div>
                  <h3 className={`font-poppins font-bold text-xl ${
                    activeFeature === feature?.id ? 'text-white' : 'text-gray-800'
                  }`}>
                    {feature?.title}
                  </h3>
                </div>
                <p className={`text-sm leading-relaxed ${
                  activeFeature === feature?.id ? 'text-green-50' : 'text-gray-600'
                }`}>
                  {feature?.description}
                </p>
              </button>
            ))}
          </div>
        </div>

        {/* Feature Content - Simplified without floating box */}
        <div className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="font-poppins font-bold text-3xl text-gray-900">
                  {getCurrentFeature()?.title}
                </h3>
                <p className="font-inter text-lg text-gray-600 leading-relaxed">
                  {getCurrentFeature()?.description}
                </p>
              </div>

              {activeFeature === 'scan' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="font-poppins font-bold text-2xl text-green-700">99%</div>
                      <div className="text-sm text-gray-600">Accuracy Rate</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="font-poppins font-bold text-2xl text-green-700">&lt;2s</div>
                      <div className="text-sm text-gray-600">Scan Time</div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 'analyze' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <div className="font-poppins font-bold text-2xl text-green-700">Real-time</div>
                      <div className="text-sm text-gray-600">Analytics Updates</div>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4 text-center">
                      <div className="font-poppins font-bold text-2xl text-green-700">24/7</div>
                      <div className="text-sm text-gray-600">Monitoring</div>
                    </div>
                  </div>
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-poppins font-semibold mb-3">Dashboard Features:</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm">Comprehensive food inventory tracking</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm">Savings and cost analysis reports</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Check" size={16} className="text-green-600" />
                        <span className="text-sm">Usage patterns and trends visualization</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeFeature === 'insights' && (
                <div className="bg-green-50 rounded-3xl p-8 h-96">
                  <div className="space-y-6">
                    <h4 className="font-poppins font-bold text-xl text-green-800 text-center">
                      Smart Recommendations
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center space-x-3">
                          <Icon name="ChefHat" size={24} color="#059669" />
                          <div>
                            <p className="font-semibold">Avocado Toast Recipe</p>
                            <p className="text-sm text-gray-600">Perfect for ripe avocados</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center space-x-3">
                          <Icon name="Clock" size={24} color="#6B7280" />
                          <div>
                            <p className="font-semibold">Use Soon Alert</p>
                            <p className="text-sm text-gray-600">3 items expire in 2 days</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center space-x-3">
                          <Icon name="TrendingUp" size={24} color="#059669" />
                          <div>
                            <p className="font-semibold">Monthly Progress</p>
                            <p className="text-sm text-gray-600">40% reduction in waste</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Visual Demo */}
            <div className="relative">
              {activeFeature === 'scan' && (
                <div className="relative bg-transparent rounded-3xl p-4 sm:p-6 h-[32rem] overflow-hidden flex items-center justify-center">
                  <div className="relative h-full w-[90%] sm:w-[80%] md:w-[60%] mx-auto flex items-center justify-center">
                    {/* Frame inset by 25% sides, 30% top, 25% bottom */}
                    <div className="absolute left-[25%] right-[25%] sm:left-[25%] sm:right-[25%] top-[33%] bottom-[25%] z-20">
                      {/* Custom scan line inside frame: yoyo */}
                      <div className="absolute left-0 right-0 top-0 h-8 animate-scan-yoyo z-20 
                                      bg-gradient-to-b from-green-400/0 via-green-400/80 to-green-400/0 
                                      shadow-[0_0_28px_9px_rgba(34,197,94,0.75)]"></div>
                      {/* Brackets anchored to frame */}
                      <div className="pointer-events-none absolute inset-0 z-20">
                        <div className="absolute left-[5%] sm:left-0 top-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border-t-4 border-l-4 border-white rounded-tl-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"></div>
                        <div className="absolute right-[5%] sm:right-0 top-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border-t-4 border-r-4 border-white rounded-tr-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"></div>
                        <div className="absolute left-[5%] sm:left-0 bottom-[15%] sm:bottom-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border-b-4 border-l-4 border-white rounded-bl-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"></div>
                        <div className="absolute right-[5%] sm:right-0 bottom-[15%] sm:bottom-0 w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 border-b-4 border-r-4 border-white rounded-br-xl drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"></div>
                      </div>
                    </div>
                    {/* Background phone image without internal scan line */}
                    <ReceiptScanner imageSrc="/assets/images/final-soup.png" width="w-full" height="h-full" rounded="rounded-2xl" showInternalScanLine={false} />
                  </div>
                </div>
              )}

              {activeFeature === 'analyze' && (
                <div className="bg-green-50 rounded-3xl p-8 h-96">
                  <div className="space-y-6">
                    <h4 className="font-poppins font-bold text-xl text-green-800 text-center">
                      Analytics Dashboard
                    </h4>
                    <div className="space-y-4">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">Monthly Food Waste</p>
                            <p className="text-sm text-gray-600">Reduced by 35%</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">↓ 35%</p>
                            <p className="text-sm text-green-600">Improvement</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">Cost Savings</p>
                            <p className="text-sm text-gray-600">This month</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">$125</p>
                            <p className="text-sm text-green-600">Saved</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-semibold">Items Tracked</p>
                            <p className="text-sm text-gray-600">Currently active</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-green-600">47</p>
                            <p className="text-sm text-green-600">Active items</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* iOS Download CTA */}
        <div className="text-center bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-12 text-white">
          <h3 className="font-poppins font-bold text-3xl mb-4">
            Ready to Transform Your Kitchen?
          </h3>
          <p className="font-inter text-xl mb-8 opacity-90">
            Join thousands of families already saving money and reducing food waste with Meal Saver.
          </p>
          <Button
            variant="outline"
            size="lg"
            iconName="Download"
            iconPosition="left"
            className="font-poppins font-semibold bg-white text-green-700 hover:bg-gray-100 border-white hover:border-gray-200"
          >
            Download for iOS
          </Button>
          <p className="text-sm mt-4 opacity-75">
            Coming soon to the App Store
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;