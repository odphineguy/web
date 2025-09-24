import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState('annual');
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  const plans = [
    {
      id: 'free',
      name: 'Free Starter',
      description: 'Perfect for trying out basic food tracking',
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        'Unlimited item additions with basic barcode/AI scanning.',
        'Basic expiration reminders (customizable).',
        'Simple shopping list integration.',
        'Fixed limited number of storage locations (e.g., Pantry, Fridge, Freezer – up to 3 locations).',
        'Basic recipe suggestions from inventory.',
        'Ads may appear optionally to further subsidize free use.'
      ],
      limitations: [
        'Limited to 1 family member',
        'No advanced analytics',
        'Basic customer support'
      ],
      popular: false,
      cta: 'Start Free',
      ctaVariant: 'outline'
    },
    {
      id: 'family',
      name: 'Standard',
      description: 'Everything your family needs to eliminate food waste',
      monthlyPrice: 9.99,
      annualPrice: 79.0,
      originalAnnualPrice: 119.88,
      features: [
        'Priority customer support.',
        'Unlimited storage locations and unlimited inventory size.',
        'Recurring item templates and favorites for faster input.',
        'Advanced expiry reminder options (e.g., multiple alerts per item, summary reports).',
        'Cloud backup and restore (time-machine versioning).',
        'Bulk import/export CSV.',
        'Ad-free experience.'
      ],
      limitations: [],
      popular: true,
      cta: 'Start 14-Day Free Trial',
      ctaVariant: 'default',
      badge: 'Most Popular'
    },
    {
      id: 'premium',
      name: 'Premium',
      description: 'Advanced features for serious food waste fighters',
      monthlyPrice: 19.99,
      annualPrice: 99.99,
      originalAnnualPrice: undefined,
      features: [
        'All Standard features.',
        'Deep integrations with grocery delivery apps (Instacart, Walmart) — coming soon.',
        'Email connect integration scan (Instacart, Walmart, DoorDash, Google, etc.) to auto-upload purchases into inventory.',
        'In-app meal planning & full recipe database.',
        'Custom categories, icons, and organization.',
        'Advanced analytics on usage, wastage, and spending trends.',
        'Early access to new features/private beta access.'
      ],
      limitations: [],
      popular: false,
      cta: 'Start 14-Day Free Trial',
      ctaVariant: 'outline',
      badge: 'Best Value'
    }
  ];

  // Countdown timer effect would go here
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev?.seconds > 0) {
          return { ...prev, seconds: prev?.seconds - 1 };
        } else if (prev?.minutes > 0) {
          return { ...prev, minutes: prev?.minutes - 1, seconds: 59 };
        } else if (prev?.hours > 0) {
          return { ...prev, hours: prev?.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev?.days > 0) {
          return { ...prev, days: prev?.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const getSavings = (plan) => {
    if (billingCycle === 'annual' && plan?.originalAnnualPrice) {
      // Use fixed display value for Standard plan savings as requested
      if (plan?.id === 'family') return 40.87;
      return plan?.originalAnnualPrice - plan?.annualPrice;
    }
    return 0;
  };

  const getPrice = (plan) => {
    return billingCycle === 'annual' ? plan?.annualPrice : plan?.monthlyPrice;
  };

  return (
    <section id="pricing" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Clock" size={16} />
            <span>Limited Time Launch Pricing</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground mb-6">
            Choose Your{' '}
            <span className="text-primary">Money-Saving</span>{' '}
            Plan
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Start your journey to zero food waste with our 14-day free trial. 
            No credit card required, cancel anytime.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                billingCycle === 'monthly' ?'bg-white text-foreground shadow-sm' :'text-muted-foreground'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-2 rounded-full font-medium transition-all relative ${
                billingCycle === 'annual' ?'bg-white text-foreground shadow-sm' :'text-muted-foreground'
              }`}
            >
              Annual
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {plans?.map((plan) => (
            <div
              key={plan?.id}
              className={`relative bg-white rounded-3xl shadow-lg border-2 transition-all hover:shadow-xl ${
                plan?.popular 
                  ? 'border-primary scale-105 lg:scale-110' :'border-gray-200 hover:border-primary'
              }`}
            >
              {/* Badge */}
              {plan?.badge && (
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full text-sm font-bold text-white ${
                  plan?.popular ? 'bg-primary' : 'bg-green-600'
                }`}>
                  {plan?.badge}
                </div>
              )}

              <div className="p-8">
                {/* Header */}
                <div className="text-center mb-8">
                  <h3 className="font-poppins font-bold text-2xl text-foreground mb-2">
                    {plan?.name}
                  </h3>
                  <p className="font-inter text-muted-foreground mb-6">
                    {plan?.description}
                  </p>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline justify-center space-x-2">
                      <span className="font-poppins font-bold text-5xl text-foreground">
                        ${getPrice(plan)}
                      </span>
                      {plan?.monthlyPrice > 0 && (
                        <span className="font-inter text-muted-foreground">
                          /{billingCycle === 'annual' ? 'year' : 'month'}
                        </span>
                      )}
                    </div>
                    
                    {getSavings(plan) > 0 && (
                      <div className="flex items-center justify-center space-x-2 mt-2">
                        <span className="font-inter text-sm text-muted-foreground line-through">
                          ${plan?.originalAnnualPrice}/year
                        </span>
                        <span className="font-poppins font-bold text-green-600">
                          Save ${getSavings(plan)}
                        </span>
                      </div>
                    )}

                    {billingCycle === 'annual' && plan?.monthlyPrice > 0 && (
                      <p className="font-inter text-sm text-muted-foreground mt-2">
                        That's ${(getPrice(plan) / 12)?.toFixed(2)}/month
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant={plan?.ctaVariant}
                    size="lg"
                    fullWidth
                    className="font-poppins font-semibold mb-6"
                  >
                    {plan?.cta}
                  </Button>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h4 className="font-poppins font-semibold text-lg text-foreground">
                    What's included:
                  </h4>
                  <ul className="space-y-3">
                    {plan?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <Icon name="Check" size={16} color="#059669" className="mt-1 flex-shrink-0" />
                        <span className="font-inter text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan?.limitations?.length > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <ul className="space-y-2">
                        {plan?.limitations?.map((limitation, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Icon name="X" size={16} color="#DC2626" className="mt-1 flex-shrink-0" />
                            <span className="font-inter text-sm text-muted-foreground">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default PricingSection;