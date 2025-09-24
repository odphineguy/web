import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import InfiniteMovingCards from '../../../components/InfiniteMovingCards';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentStory, setCurrentStory] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Austin, TX",
      family: "Family of 4",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      quote: `We were throwing away $200 worth of food every month without realizing it. Meal Saver helped us cut that down to just $60. That's $1,680 saved in our first year!`,
      savings: "$1,680",
      wasteReduction: "70%",
      timeUsing: "14 months",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Seattle, WA",
      family: "Family of 3",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      quote: `As a busy dad, I was constantly buying duplicates and forgetting what we had. The app's barcode scanning and family sync features have been game-changers. We've saved over $1,200 this year.`,
      savings: "$1,200",
      wasteReduction: "65%",
      timeUsing: "10 months",
      beforeImage: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=300&h=200&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      location: "Phoenix, AZ",
      family: "Family of 5",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: `With three kids, meal planning was chaos. The AI suggestions using ingredients we already have has transformed our kitchen. We're saving $150+ monthly and the kids love the new recipes!`,
      savings: "$1,800",
      wasteReduction: "75%",
      timeUsing: "18 months",
      beforeImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      afterImage: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=300&h=200&fit=crop"
    }
  ];

  const marqueeStories = [
    { quote: testimonials[0].quote, name: testimonials[0].name, title: `${testimonials[0].location} • ${testimonials[0].family}`, avatar: testimonials[0].avatar },
    { quote: 'Tracking our pantry cut duplicate buys and saved us real money.', name: 'James Wilson', title: 'Portland, OR • Family of 4', avatar: '/assets/images/avatars/james-wilson.png' },
    { quote: testimonials[2].quote, name: testimonials[2].name, title: `${testimonials[2].location} • ${testimonials[2].family}`, avatar: testimonials[2].avatar },
    { quote: 'We cut our monthly waste by half in 6 weeks. The pantry alerts are gold.', name: 'Priya N.', title: 'San Jose, CA • Family of 3', avatar: '/assets/images/avatars/priya.png' },
    { quote: 'Our grocery bill went down $120 last month. The app keeps us honest!', name: 'Kevin & Aria', title: 'Denver, CO • Couple', avatar: '/assets/images/avatars/kevin.png' },
    { quote: 'Love the receipt scanning. It auto-adds everything without me thinking.', name: 'Danielle R.', title: 'Raleigh, NC • Family of 2', avatar: '/assets/images/avatars/danielle.png' },
    { quote: 'Placeholder review coming soon.', name: 'Andrew Young', title: 'Chicago, IL • Family of 2', avatar: '/assets/images/avatars/andrew-young.png' },
  ];

  const successStories = [
    {
      metric: "2.3M",
      label: "Total Dollars Saved",
      description: "Across all families using Meal Saver",
      icon: "DollarSign",
      color: "text-green-600"
    },
    {
      metric: "500",
      label: "Tons of Food Waste Prevented",
      description: "Equivalent to 1,000 cars off the road for a year",
      icon: "Leaf",
      color: "text-green-600"
    },
    {
      metric: "50K+",
      label: "Families Served",
      description: "Growing by 500+ families every week",
      icon: "Users",
      color: "text-green-600"
    },
    {
      metric: "4.8★",
      label: "App Store Rating",
      description: "Based on 12,000+ reviews",
      icon: "Star",
      color: "text-green-600"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStory((prev) => (prev + 1) % successStories?.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-8 sm:py-12 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Icon name="Heart" size={16} />
            <span>Real Families, Real Results</span>
          </div>
          
          <h2 className="font-poppins font-bold text-4xl sm:text-5xl text-foreground mb-4">
            Join Thousands of Families{' '}
            <span className="text-primary">Saving Money</span>{' '}
            Every Month
          </h2>
          
          <p className="font-inter text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Reviews and real results from families reducing food waste with Meal Saver.
          </p>
        </div>

        {/* Infinite Moving Cards */}
        <div className="mb-16">
          <InfiniteMovingCards items={marqueeStories} speed="normal" direction="left" />
        </div>

        {/* Environmental Impact */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 sm:p-12 text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-poppins font-bold text-3xl sm:text-4xl mb-6">
              Together, We're Making a Real Environmental Impact
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-8 mb-8">
              <div className="space-y-2">
                <Icon name="Leaf" size={32} className="mx-auto mb-2" />
                <div className="text-4xl font-poppins font-bold">500 tons</div>
                <div className="text-green-100">Food waste prevented</div>
              </div>
              <div className="space-y-2">
                <Icon name="Zap" size={32} className="mx-auto mb-2" />
                <div className="text-4xl font-poppins font-bold">2.1M lbs</div>
                <div className="text-green-100">CO₂ emissions reduced</div>
              </div>
              <div className="space-y-2">
                <Icon name="Droplets" size={32} className="mx-auto mb-2" />
                <div className="text-4xl font-poppins font-bold">50M gal</div>
                <div className="text-green-100">Water saved</div>
              </div>
            </div>
            
            <p className="font-inter text-xl text-green-100 leading-relaxed">
              Every family that joins Meal Saver doesn't just save money – they help create a more sustainable future for our planet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;