import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const AboutUs = () => {
  const currentYear = new Date().getFullYear();
  
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
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h1 className="font-poppins text-3xl font-bold text-gray-900 text-center mb-8">
            About Us
          </h1>
          
          <div className="font-inter text-gray-700 space-y-6 text-center">
            <p>
              Content for the About Us page will be added soon.
            </p>
          </div>
        </div>
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

export default AboutUs;