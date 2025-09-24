import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const ContactUs = () => {
  const currentYear = new Date().getFullYear();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
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
            Contact Us
          </h1>
          
          {!isSubmitted ? (
            <>
              <div className="grid md:grid-cols-2 gap-12 mb-12">
                <div>
                  <p className="font-inter text-gray-600 mb-6">
                    Have a question, suggestion, or need assistance with Meal Saver? We're here to help! Fill out the form and our team will get back to you as soon as possible.
                  </p>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="Mail" size={20} color="#059669" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-gray-900">Email</h3>
                        <p className="font-inter text-gray-600 mt-1">
                          <a href="mailto:support@mealsaver.app" className="text-primary hover:underline">
                            support@mealsaver.app
                          </a>
                        </p>
                        <p className="font-inter text-sm text-gray-500 mt-1">
                          We aim to respond within 24 hours
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="Phone" size={20} color="#059669" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-gray-900">Phone</h3>
                        <p className="font-inter text-gray-600 mt-1">
                          <a href="tel:+18005551234" className="text-primary hover:underline">
                            +1 (800) 555-1234
                          </a>
                        </p>
                        <p className="font-inter text-sm text-gray-500 mt-1">
                          Mon-Fri, 9am-5pm EST
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="mt-1">
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <Icon name="MapPin" size={20} color="#059669" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-poppins font-semibold text-gray-900">Office</h3>
                        <p className="font-inter text-gray-600 mt-1">
                          123 Eco Street<br />
                          San Francisco, CA 94107
                        </p>
                        <p className="font-inter text-sm text-gray-500 mt-1">
                          By appointment only
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-poppins font-semibold text-gray-900 mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a
                        href="#facebook"
                        className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Facebook"
                      >
                        <Icon name="Facebook" size={20} color="#059669" />
                      </a>
                      <a
                        href="#twitter"
                        className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Twitter"
                      >
                        <Icon name="Twitter" size={20} color="#059669" />
                      </a>
                      <a
                        href="#instagram"
                        className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                        aria-label="Instagram"
                      >
                        <Icon name="Instagram" size={20} color="#059669" />
                      </a>
                      <a
                        href="#linkedin"
                        className="w-10 h-10 bg-gray-100 hover:bg-primary/10 rounded-full flex items-center justify-center transition-colors"
                        aria-label="LinkedIn"
                      >
                        <Icon name="Linkedin" size={20} color="#059669" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="John Doe"
                      />
                    </div>
                    
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
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="john@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block font-inter text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="How can we help you?"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block font-inter text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                        placeholder="Please provide as much detail as possible..."
                      ></textarea>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="privacy"
                        type="checkbox"
                        required
                        className="h-4 w-4 border-gray-300 rounded text-primary focus:ring-primary"
                      />
                      <label htmlFor="privacy" className="ml-2 block font-inter text-sm text-gray-600">
                        I agree to the{' '}
                        <Link to="/privacy" className="text-primary hover:underline">
                          Privacy Policy
                        </Link>
                      </label>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-8 mt-8">
                <h3 className="font-poppins font-semibold text-gray-900 mb-4">Frequently Asked Questions</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-poppins font-medium text-gray-900">How quickly will you respond?</h4>
                    <p className="font-inter text-gray-600 mt-1">
                      We aim to respond to all inquiries within 24 hours during business days.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-poppins font-medium text-gray-900">Do you offer phone support?</h4>
                    <p className="font-inter text-gray-600 mt-1">
                      Yes, our phone support is available Monday through Friday, 9am-5pm EST.
                    </p>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Check" size={32} color="#059669" />
              </div>
              <h2 className="font-poppins text-2xl font-bold text-gray-900 mb-4">
                Message Sent Successfully!
              </h2>
              <p className="font-inter text-gray-600 max-w-md mx-auto mb-8">
                Thank you for reaching out! We've received your message and will get back to you as soon as possible.
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

export default ContactUs;
