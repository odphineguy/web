import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const OurMission = () => {
  const currentYear = new Date().getFullYear();
  
  const teamMembers = [
    {
      name: 'Abe Perez',
      role: 'Founder & CEO',
      bio: 'Abe founded Meal Saver with a mission to reduce food waste and help families save money. With over 15 years in tech and sustainability, he leads our vision and strategy.',
      image: '/assets/images/avatars/mike-chen.png'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Chief Product Officer',
      bio: 'Lisa oversees product development and user experience. Her background in UX design and food tech has been instrumental in creating our intuitive app interface.',
      image: '/assets/images/avatars/lisa-rodriguez.png'
    },
    {
      name: 'James Wilson',
      role: 'CTO',
      bio: 'James leads our engineering team and AI development. With expertise in machine learning and computer vision, he ensures our technology delivers accurate food recognition.',
      image: '/assets/images/avatars/james-wilson.png'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Sustainability',
      bio: 'Priya drives our environmental initiatives and partnerships. Her passion for sustainable living helps shape our approach to reducing food waste globally.',
      image: '/assets/images/avatars/priya.png'
    },
    {
      name: 'Andrew Young',
      role: 'Marketing Director',
      bio: 'Andrew crafts our brand story and growth strategy. His experience in consumer apps helps us connect with families looking to make a positive impact.',
      image: '/assets/images/avatars/andrew-young.png'
    },
    {
      name: 'Danielle Johnson',
      role: 'Customer Success Lead',
      bio: 'Danielle ensures our users get the most from Meal Saver. Her background in nutrition and customer support makes her perfect for helping families optimize their food management.',
      image: '/assets/images/avatars/danielle.png'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Meal Saver Founded',
      description: 'Abe Perez launches Meal Saver with a mission to reduce food waste through technology.'
    },
    {
      year: '2023',
      title: 'Seed Funding Secured',
      description: 'Raised $2.5M in seed funding to develop our AI-powered food recognition technology.'
    },
    {
      year: '2024',
      title: 'Beta Launch',
      description: 'Released our beta app to 1,000 test families, who saved an average of $150/month on groceries.'
    },
    {
      year: '2024',
      title: 'Sustainability Award',
      description: 'Recognized with the Green Tech Innovation Award for our contribution to reducing food waste.'
    },
    {
      year: '2025',
      title: 'Public Launch',
      description: 'Official launch of Meal Saver app on iOS and Android, reaching 50,000 users in the first month.'
    },
    {
      year: '2025',
      title: 'Retail Partnerships',
      description: 'Established partnerships with major grocery chains to offer exclusive discounts to Meal Saver users.'
    }
  ];

  const values = [
    {
      icon: 'Leaf',
      title: 'Sustainability',
      description: 'We believe in creating technology that helps people live more sustainably without sacrificing convenience.'
    },
    {
      icon: 'Users',
      title: 'Community',
      description: "We're building a community of conscious consumers who want to make a positive impact on the planet."
    },
    {
      icon: 'LineChart',
      title: 'Innovation',
      description: 'We continuously innovate to make food management smarter, more efficient, and accessible to everyone.'
    },
    {
      icon: 'Heart',
      title: 'Empathy',
      description: 'We design with empathy for busy families who want to save money while reducing their environmental footprint.'
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-900 hover:text-primary transition-colors"
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Leaf" size={20} color="white" />
              </div>
              <span className="font-poppins font-bold text-xl">Meal Saver</span>
            </Link>
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors"
            >
              <Icon name="ArrowLeft" size={16} />
              <span className="font-inter text-sm">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="font-poppins text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Mission to Reduce Food Waste
            </h1>
            <p className="font-inter text-xl text-gray-600 leading-relaxed mb-10">
              At Meal Saver, we're on a mission to help families waste less food, save money, and reduce their environmental footprint through smart technology.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 font-inter text-gray-600">
                <p>
                  Meal Saver was born from a simple observation: despite our best intentions, most families throw away significant amounts of food each week. Our founder, Abe Perez, noticed this pattern in his own home and set out to find a solution.
                </p>
                <p>
                  After researching the problem, Abe discovered that the average American family wastes over $1,500 worth of food annually, contributing to a global food waste crisis that accounts for 8% of greenhouse gas emissions worldwide.
                </p>
                <p>
                  In 2023, Abe assembled a team of engineers, designers, and food sustainability experts to create an app that would make it easy for families to track their food inventory, get recipe suggestions based on what they have, and receive timely reminders about items nearing expiration.
                </p>
                <p>
                  Today, Meal Saver is helping thousands of families reduce their food waste by up to 50% while saving money on their grocery bills. Our AI-powered technology continues to evolve, making sustainable food management accessible to everyone.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8 h-full">
              <div className="relative h-full">
                <div className="absolute -top-10 -left-10 w-20 h-20 bg-primary/10 rounded-full"></div>
                <div className="absolute -bottom-8 -right-8 w-16 h-16 bg-primary/10 rounded-full"></div>
                <img 
                  src="/assets/images/final-soup.png" 
                  alt="Family enjoying meal prepared with Meal Saver" 
                  className="rounded-xl w-full h-auto object-cover shadow-lg relative z-10"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-sm max-h-sm bg-primary/5 rounded-full blur-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="mb-20">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-10 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={value.icon} size={24} color="#059669" />
                </div>
                <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="font-inter text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Team Section */}
        <section className="mb-20">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-10 text-center">
            Meet Our Team
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-poppins font-semibold text-xl text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="font-inter text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="font-inter text-gray-600">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Milestones Section */}
        <section className="mb-20">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-10 text-center">
            Our Journey
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-primary hidden md:block"></div>
                    
                    {/* Content */}
                    <div className="md:w-1/2 md:pr-12 md:pl-0 pl-0 pr-0">
                      <div className={`bg-white rounded-xl shadow-sm border border-gray-100 p-6 ${index % 2 === 0 ? 'md:mr-10' : 'md:ml-10'}`}>
                        <span className="font-inter text-primary font-medium text-sm">
                          {milestone.year}
                        </span>
                        <h3 className="font-poppins font-semibold text-xl text-gray-900 mt-1 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="font-inter text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                    
                    {/* Empty Space for Timeline Layout */}
                    <div className="md:w-1/2 hidden md:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Impact Section */}
        <section className="mb-20 bg-primary/5 rounded-2xl p-8 md:p-12">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Impact
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-2">
                50,000+
              </div>
              <p className="font-inter text-gray-700 font-medium">
                Active Users
              </p>
            </div>
            <div>
              <div className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-2">
                $3.2M
              </div>
              <p className="font-inter text-gray-700 font-medium">
                Saved on Groceries
              </p>
            </div>
            <div>
              <div className="font-poppins text-4xl md:text-5xl font-bold text-primary mb-2">
                125 Tons
              </div>
              <p className="font-inter text-gray-700 font-medium">
                Food Waste Prevented
              </p>
            </div>
          </div>
        </section>
        
        {/* Join Us Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="font-poppins text-3xl font-bold text-gray-900 mb-6">
            Join Our Mission
          </h2>
          <p className="font-inter text-xl text-gray-600 leading-relaxed mb-8">
            Together, we can make a significant impact on food waste reduction. Download Meal Saver today and be part of the solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#app-store"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
            >
              <Icon name="Apple" size={20} className="mr-2" />
              App Store
            </a>
            <a
              href="#google-play"
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Icon name="Play" size={20} className="mr-2" />
              Google Play
            </a>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="font-inter text-sm text-gray-500">
              © {currentYear} Meal Saver. All rights reserved.
            </p>
            <Link 
              to="/" 
              className="font-inter text-sm text-gray-500 hover:text-primary mt-4 sm:mt-0"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OurMission;
