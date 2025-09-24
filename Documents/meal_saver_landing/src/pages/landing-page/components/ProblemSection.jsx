import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';


const ProblemSection = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const wasteStats = [
    { value: 165, label: "Billion dollars wasted annually", prefix: "$", suffix: "B" },
    { value: 40, label: "Percent of food goes to waste", prefix: "", suffix: "%" },
    { value: 1500, label: "Average family loses per year", prefix: "$", suffix: "" }
  ];

  const familyScenarios = [
    {
      icon: "Apple",
      title: "Fresh Produce Forgotten",
      description: "That bag of spinach you bought with good intentions now sits wilted in your crisper drawer.",
      cost: "$8-12 weekly"
    },
    {
      icon: "Milk",
      title: "Dairy Past Prime",
      description: "Milk expires while you're still working through the previous gallon you forgot about.",
      cost: "$6-8 weekly"
    },
    {
      icon: "Sandwich",
      title: "Leftovers Neglected",
      description: "Last night's dinner becomes this week's science experiment in the back of your fridge.",
      cost: "$15-25 weekly"
    },
    {
      icon: "Cookie",
      title: "Pantry Purchases Expire",
      description: "Bulk items and specialty ingredients expire before you remember you have them.",
      cost: "$10-20 monthly"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('problem-section');
    if (element) observer?.observe(element);

    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCurrentCount(prev => (prev + 1) % wasteStats?.length);
      }, 2500);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  return (
    <section id="problem-section" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="AlertTriangle" size={16} />
            <span>The Hidden Crisis in Your Kitchen</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground mb-6">
            Your Family is Throwing Away{' '}
            <span className="text-green-600">Money</span> Every Week
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            While you're working hard to provide for your family, expired food is silently draining your budget. 
            Here's the shocking reality most families face.
          </p>
        </div>

        {/* Animated Statistics */}
        <div className="mb-20">
          <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-gray-200">
            <div className="grid md:grid-cols-3 gap-8">
              {wasteStats?.map((stat, index) => (
                <div 
                  key={index}
                  className={`text-center transition-all duration-700 ${
                    currentCount === index && isVisible
                      ? 'scale-110 text-green-600' :'text-muted-foreground'
                  }`}
                >
                  <div className="mb-4">
                    <span className="font-poppins font-bold text-5xl sm:text-6xl">
                      {stat?.prefix}
                      {isVisible && currentCount === index ? (
                        <CountUpAnimation target={stat?.value} />
                      ) : (
                        stat?.value
                      )}
                      {stat?.suffix}
                    </span>
                  </div>
                  <p className="font-inter text-lg font-medium">{stat?.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Family Scenarios */}
        <div className="mb-16">
          <h3 className="font-poppins font-bold text-3xl text-center text-foreground mb-12">
            Sound Familiar? You're Not Alone.
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {familyScenarios?.map((scenario, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-2xl mb-4 mx-auto">
                  {scenario?.emojiSrc ? (
                    <img
                      src={scenario?.emojiSrc}
                      alt={scenario?.title || 'emoji'}
                      className="h-10 w-10 object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <Icon name={scenario?.icon} size={24} color="#059669" />
                  )}
                </div>
                
                <h4 className="font-poppins font-semibold text-lg text-foreground mb-3 text-center">
                  {scenario?.title}
                </h4>
                
                <p className="font-inter text-muted-foreground text-center mb-4 leading-relaxed">
                  {scenario?.description}
                </p>
                
                <div className="bg-green-50 rounded-lg p-3 text-center">
                  <span className="font-poppins font-bold text-green-700">{scenario?.cost}</span>
                  <span className="font-inter text-sm text-green-600 block">wasted</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Visualization */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 sm:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-poppins font-bold text-3xl sm:text-4xl mb-6">
              The Real Cost to Your Family
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
              <div className="space-y-2">
                <div className="text-4xl font-poppins font-bold">$125</div>
                <div className="text-green-100">Average monthly food waste</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-poppins font-bold">52</div>
                <div className="text-green-100">Grocery trips wasted per year</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-poppins font-bold">30%</div>
                <div className="text-green-100">Of groceries never eaten</div>
              </div>
            </div>
            
            <p className="font-inter text-xl text-green-100 leading-relaxed">
              That's money that could go toward your family's future, vacations, or simply reducing financial stress. But there's a better way...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Count up animation component
const CountUpAnimation = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      setCount(Math.min(Math.floor(increment * currentStep), target));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}</span>;
};

export default ProblemSection;