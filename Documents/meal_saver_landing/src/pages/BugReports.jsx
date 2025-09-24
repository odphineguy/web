import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const BugReports = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    bugType: '',
    description: '',
    steps: '',
    device: '',
    browser: '',
    screenshot: null
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleFileChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      screenshot: e.target.files[0]
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };
  
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
            Bug Report
          </h1>
          
          {!isSubmitted ? (
            <>
              <p className="font-inter text-gray-600 mb-8 text-center">
                Found an issue with our app? Please fill out this form to help us improve Meal Saver.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block font-inter text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block font-inter text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    />
                  </div>
                </div>
                
                {/* Bug Type */}
                <div>
                  <label htmlFor="bugType" className="block font-inter text-sm font-medium text-gray-700 mb-1">
                    Type of Issue
                  </label>
                  <select
                    id="bugType"
                    name="bugType"
                    value={formData.bugType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  >
                    <option value="">Select an issue type</option>
                    <option value="app-crash">App Crash</option>
                    <option value="ui-issue">UI/Display Issue</option>
                    <option value="performance">Performance Problem</option>
                    <option value="feature-not-working">Feature Not Working</option>
                    <option value="data-issue">Data/Sync Issue</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                {/* Bug Description */}
                <div>
                  <label htmlFor="description" className="block font-inter text-sm font-medium text-gray-700 mb-1">
                    Issue Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="Please describe the issue in detail..."
                  ></textarea>
                </div>
                
                {/* Steps to Reproduce */}
                <div>
                  <label htmlFor="steps" className="block font-inter text-sm font-medium text-gray-700 mb-1">
                    Steps to Reproduce
                  </label>
                  <textarea
                    id="steps"
                    name="steps"
                    value={formData.steps}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                    placeholder="1. Open the app\n2. Navigate to...\n3. Click on..."
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Device */}
                  <div>
                    <label htmlFor="device" className="block font-inter text-sm font-medium text-gray-700 mb-1">
                      Device Model
                    </label>
                    <input
                      type="text"
                      id="device"
                      name="device"
                      value={formData.device}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="e.g., iPhone 14, Samsung Galaxy S22"
                    />
                  </div>
                  
                  {/* Browser/OS Version */}
                  <div>
                    <label htmlFor="browser" className="block font-inter text-sm font-medium text-gray-700 mb-1">
                      Browser/OS Version
                    </label>
                    <input
                      type="text"
                      id="browser"
                      name="browser"
                      value={formData.browser}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                      placeholder="e.g., iOS 16.5, Chrome 112"
                    />
                  </div>
                </div>
                
                {/* Screenshot */}
                <div>
                  <label htmlFor="screenshot" className="block font-inter text-sm font-medium text-gray-700 mb-1">
                    Screenshot (optional)
                  </label>
                  <input
                    type="file"
                    id="screenshot"
                    name="screenshot"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    Max file size: 5MB. Supported formats: JPG, PNG, GIF
                  </p>
                </div>
                
                {/* Submit Button */}
                <div className="flex justify-center mt-8">
                  <button
                    type="submit"
                    className="px-8 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                  >
                    Submit Bug Report
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-10">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Check" size={32} color="#059669" />
              </div>
              <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4">
                Thank You for Your Report!
              </h2>
              <p className="font-inter text-gray-600 max-w-md mx-auto mb-8">
                We've received your bug report and our team will investigate the issue. We may contact you for additional information if needed.
              </p>
              <Link
                to="/"
                className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
              >
                <Icon name="Home" size={18} className="mr-2" />
                Return to Home
              </Link>
            </div>
          )}
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

export default BugReports;
