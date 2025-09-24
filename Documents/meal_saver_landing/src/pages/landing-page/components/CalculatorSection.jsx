import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const CalculatorSection = () => {
  const [familySize, setFamilySize] = useState(4);
  const [monthlySpending, setMonthlySpending] = useState(600);
  const [results, setResults] = useState({
    monthlyWaste: 0,
    annualWaste: 0,
    potentialSavings: 0,
    wasteReduction: 0
  });

  // Hover highlight state/refs for sliding effect
  const gridContainerRef = useRef(null);
  const itemRefs = useRef([]);
  const [highlightStyle, setHighlightStyle] = useState({ opacity: 0, width: 0, height: 0, transform: 'translate(0px, 0px)' });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Calculate waste based on family size and spending
    const wastePercentage = 0.25; // 25% average food waste
    const monthlyWaste = monthlySpending * wastePercentage;
    const annualWaste = monthlyWaste * 12;
    const potentialSavings = annualWaste * 0.7; // 70% reduction with app
    const wasteReduction = monthlyWaste * 0.7;

    setResults({
      monthlyWaste: Math.round(monthlyWaste),
      annualWaste: Math.round(annualWaste),
      potentialSavings: Math.round(potentialSavings),
      wasteReduction: Math.round(wasteReduction)
    });
  }, [familySize, monthlySpending]);

  const familySizeOptions = [
    { size: 1, label: "Just me", spending: 300 },
    { size: 2, label: "Couple", spending: 450 },
    { size: 3, label: "Small family", spending: 550 },
    { size: 4, label: "Average family", spending: 600 },
    { size: 5, label: "Large family", spending: 750 },
    { size: 6, label: "Extra large family", spending: 900 }
  ];

  const snapHighlightToIndex = (index) => {
    const container = gridContainerRef.current;
    const el = itemRefs.current[index];
    if (!container || !el) return;
    const containerRect = container.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const x = rect.left - containerRect.left + container.scrollLeft;
    const y = rect.top - containerRect.top + container.scrollTop;
    setHighlightStyle({
      opacity: 1,
      width: rect.width,
      height: rect.height,
      transform: `translate(${x}px, ${y}px)`
    });
  };

  const handleFamilySizeChange = (size) => {
    setFamilySize(size);
    const option = familySizeOptions?.find(opt => opt?.size === size);
    if (option) {
      setMonthlySpending(option?.spending);
    }
    const newIndex = familySizeOptions.findIndex(opt => opt.size === size);
    snapHighlightToIndex(newIndex);
  };

  const handleMouseEnter = (index) => {
    setIsHovering(true);
    snapHighlightToIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    // snap back to selected card when leaving grid
    const selectedIndex = familySizeOptions.findIndex(opt => opt.size === familySize);
    snapHighlightToIndex(selectedIndex);
  };

  // On mount and resize, snap to selected card
  useEffect(() => {
    const selectedIndex = familySizeOptions.findIndex(opt => opt.size === familySize);
    const snap = () => snapHighlightToIndex(selectedIndex);
    // slight timeout to allow layout to settle
    const t = setTimeout(snap, 0);
    window.addEventListener('resize', snap);
    return () => {
      clearTimeout(t);
      window.removeEventListener('resize', snap);
    };
  }, [familySize]);

  return (
    <section id="calculator" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Calculator" size={16} />
            <span>Personalized Savings Calculator</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground mb-6">
            See How Much{' '}
            <span className="text-primary">Your Family</span>{' '}
            Could Save
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Get a personalized estimate of your potential savings based on your family size and grocery spending. 
            The results might surprise you!
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Calculator Input */}
              <div className="p-8 sm:p-12 bg-gradient-to-br from-green-50 to-white">
                <h3 className="font-poppins font-bold text-2xl text-foreground mb-8">
                  Tell Us About Your Family
                </h3>

                {/* Family Size Selection */}
                <div className="mb-8">
                  <label className="font-poppins font-semibold text-lg text-foreground mb-4 block">
                    Family Size
                  </label>
                  <div
                    ref={gridContainerRef}
                    className="relative grid grid-cols-2 sm:grid-cols-3 gap-3"
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* Sliding hover highlight (premium) */}
                    <div
                      className={`pointer-events-none absolute rounded-2xl transition-all duration-200 ease-out will-change-transform ${isHovering ? 'shadow-[0_12px_30px_rgba(16,185,129,0.28)]' : 'shadow-[0_10px_24px_rgba(16,185,129,0.20)]'} ring-2 ring-primary/30`}
                      style={{
                        background: 'linear-gradient(135deg, rgba(16,185,129,0.12), rgba(255,255,255,0.7))',
                        border: '1px solid rgba(16,185,129,0.35)',
                        opacity: highlightStyle.opacity,
                        width: highlightStyle.width,
                        height: highlightStyle.height,
                        transform: highlightStyle.transform
                      }}
                    />
                    {familySizeOptions?.map((option, idx) => (
                      <button
                        key={option?.size}
                        ref={(el) => (itemRefs.current[idx] = el)}
                        onMouseEnter={() => handleMouseEnter(idx)}
                        onFocus={() => handleMouseEnter(idx)}
                        onClick={() => handleFamilySizeChange(option?.size)}
                        className={`relative z-10 p-4 rounded-xl border-2 transition-all duration-200 ease-out text-center ${
                          familySize === option?.size
                            ? 'border-primary bg-primary text-white shadow-lg scale-[1.02]'
                            : 'border-gray-200 bg-white text-muted-foreground hover:border-primary hover:text-primary hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.03]'
                        }`}
                      >
                        <div className="font-poppins font-bold text-2xl">{option?.size}</div>
                        <div className="text-sm">{option?.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Monthly Spending */}
                <div className="mb-8">
                  <Input
                    label="Monthly Grocery Spending"
                    type="number"
                    value={monthlySpending}
                    onChange={(e) => setMonthlySpending(Number(e?.target?.value))}
                    placeholder="600"
                    className="text-lg"
                  />
                  <div className="mt-2 flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Info" size={16} />
                    <span>Include all food purchases: groceries, dining out, delivery</span>
                  </div>
                </div>

                {/* Current Waste Estimate */}
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-center space-x-2 mb-3 text-center">
                    <Icon name="AlertTriangle" size={20} color="#4B5563" />
                    <span className="font-poppins font-semibold text-gray-700">Current Waste Estimate</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-center justify-items-center">
                    <div>
                      <div className="font-poppins font-bold text-2xl text-gray-600">
                        ${results?.monthlyWaste}
                      </div>
                      <div className="text-sm text-gray-500">per month</div>
                    </div>
                    <div>
                      <div className="font-poppins font-bold text-2xl text-gray-600">
                        ${results?.annualWaste}
                      </div>
                      <div className="text-sm text-gray-500">per year</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results Display */}
              <div className="p-8 sm:p-12 bg-gradient-to-br from-primary to-secondary text-white">
                <h3 className="font-poppins font-bold text-2xl mb-8">
                  Your Potential Savings with Meal Saver
                </h3>

                {/* Main Savings */}
                <div className="mb-8">
                  <div className="text-center mb-6">
                    <div className="font-poppins font-bold text-6xl sm:text-7xl mb-2">
                      ${results?.potentialSavings}
                    </div>
                    <div className="text-xl opacity-90">saved annually</div>
                  </div>
                  
                  <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="font-poppins font-bold text-3xl">${results?.wasteReduction}</div>
                        <div className="text-sm opacity-80">monthly savings</div>
                      </div>
                      <div>
                        <div className="font-poppins font-bold text-3xl">70%</div>
                        <div className="text-sm opacity-80">waste reduction</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* What This Means */}
                <div className="space-y-4">
                  <h4 className="font-poppins font-semibold text-lg">What this means for your family:</h4>
                  
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={20} />
                      <span>Extra ${Math.round(results?.potentialSavings / 12)} every month for family activities</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={20} />
                      <span>Reduce food waste by {Math.round(results?.wasteReduction * 12 / 50)} lbs annually</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={20} />
                      <span>Lower carbon footprint equivalent to planting {Math.round(results?.potentialSavings / 100)} trees</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Icon name="Check" size={20} />
                      <span>Less stress about expired food and meal planning</span>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-6 border-t border-white/20">
                  <button className="w-full bg-white text-primary font-poppins font-bold text-lg py-4 px-6 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
                    <Icon name="Download" size={20} />
                    <span>Start Saving Today - Free Download</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Context */}
          <div className="mt-12 text-center">
            <p className="font-inter text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              *Calculations based on USDA food waste statistics and user data from 50,000+ families. 
              Individual results may vary based on shopping habits and family preferences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;