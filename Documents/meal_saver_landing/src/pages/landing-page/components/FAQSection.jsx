import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How does the barcode scanning actually work?",
      answer: `Our advanced AI recognizes over 2 million products instantly. Simply point your camera at any barcode and we'll automatically add the item to your pantry with expiration date, storage tips, and nutritional information. The scanning works even in low light and with damaged barcodes.`,
      category: "Technology"
    },
    {
      question: "What if I forget to scan items when I bring groceries home?",
      answer: `No worries! You can also scan receipts to bulk-add items, manually add products by searching our database, or use our voice input feature. Plus, our smart notifications will remind you to scan new purchases based on your shopping patterns.`,
      category: "Usage"
    },
    {
      question: "How accurate are the expiration date predictions?",
      answer: `Our AI combines manufacturer data, storage conditions, and real user feedback to predict expiration dates with 95% accuracy. For fresh produce, we factor in purchase date, storage method, and seasonal variations. You can always adjust dates manually if needed.`,
      category: "Technology"
    },
    {
      question: "Can my whole family use the same account?",
      answer: `Absolutely! Family plans support up to 6 family members with real-time sync across all devices. Each member can scan items, mark things as used, and receive notifications. Perfect for busy families where multiple people shop and cook.`,
      category: "Family Features"
    },
    {
      question: "What happens to my data if I cancel my subscription?",
      answer: `Your data remains accessible for 90 days after cancellation, and you can export everything (pantry items, recipes, analytics) at any time. We believe your data belongs to you. Free accounts keep basic data indefinitely.`,
      category: "Privacy & Data"
    },
    {
      question: "How much money do families typically save?",
      answer: `Based on our user data, families save an average of $1,200-$1,800 annually. The exact amount depends on family size, shopping habits, and how consistently you use the app. Most users see significant savings within the first month.`,
      category: "Savings"
    },
    {
      question: "Does the app work without internet connection?",
      answer: `Yes! You can scan items, mark them as used, and access your pantry offline. The app syncs automatically when you reconnect. This is perfect for shopping in stores with poor cell service or when traveling.`,
      category: "Technology"
    },
    {
      question: "What makes your meal suggestions better than other apps?",
      answer: `Our AI considers your actual pantry inventory, family preferences, dietary restrictions, and expiration dates to suggest recipes that use ingredients you already have. It's not just random recipes – it's personalized meal planning that reduces waste.`,
      category: "AI Features"
    },
    {
      question: "Is there a limit to how many items I can track?",
      answer: `Free accounts can track up to 50 items. Family and Premium plans have unlimited tracking. Most families track 100-300 items including pantry staples, fresh produce, leftovers, and frozen foods.`,
      category: "Limits"
    },
    {
      question: "How do I cancel if I'm not satisfied?",answer: `You can cancel anytime directly in the app or by contacting support. No cancellation fees, no hassle. If you cancel within 30 days and haven't saved at least $50, we'll refund your subscription under our money-back guarantee.`,category: "Billing"
    }
  ];

  const categories = [...new Set(faqs.map(faq => faq.category))];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="HelpCircle" size={16} />
            <span>Frequently Asked Questions</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground mb-6">
            Everything You Need to Know About{' '}
            <span className="text-primary">Meal Saver</span>
          </h2>
          
          <p className="font-inter text-xl text-muted-foreground leading-relaxed">
            Get answers to common questions about food waste reduction, app features, and how families are saving thousands of dollars every year.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories?.map((category) => (
            <span
              key={category}
              className="px-4 py-2 bg-white rounded-full border border-gray-200 text-sm font-medium text-muted-foreground"
            >
              {category}
            </span>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden transition-all hover:shadow-md"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <div className="flex-1">
                  <h3 className="font-poppins font-semibold text-lg text-foreground pr-4">
                    {faq?.question}
                  </h3>
                  <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-xs font-medium text-muted-foreground rounded-full">
                    {faq?.category}
                  </span>
                </div>
                <div className={`transition-transform duration-200 ${
                  openFAQ === index ? 'rotate-180' : ''
                }`}>
                  <Icon name="ChevronDown" size={24} color="currentColor" />
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 border-t border-gray-100">
                  <div className="pt-4">
                    <p className="font-inter text-muted-foreground leading-relaxed">
                      {faq?.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;