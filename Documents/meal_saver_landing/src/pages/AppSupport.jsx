import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const AppSupport = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Leaf" size={20} color="white" />
              </div>
              <span className="font-poppins font-bold text-xl text-gray-900">Meal Saver</span>
            </Link>
            <Link
              to="/"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-poppins font-bold text-gray-900 mb-2">App Support</h1>
          <p className="text-lg text-gray-600 mb-8">Get help using MealSaver and learn about all our features</p>

          {/* Family Sharing Guide */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-poppins font-bold text-gray-900 mb-6">Family Sharing Guide</h2>
            <p className="text-lg text-gray-700 mb-8">
              Share your food inventory with your entire family and never let food go to waste again! With Family Sharing, everyone in your household can add items, check what's available, and get alerts about expiring food.
            </p>

            {/* What is Family Sharing */}
            <div className="mb-8">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🏠</span>
                What is Family Sharing?
              </h3>
              <p className="text-gray-700 mb-4">Family Sharing lets you create a shared household where all family members can:</p>
              <ul className="list-none space-y-2 mb-6">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">Add food items to a shared pantry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">See what everyone has at home</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">Get notifications when food is about to expire</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">Track what gets consumed or wasted together</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">✅</span>
                  <span className="text-gray-700">Never duplicate purchases again</span>
                </li>
              </ul>
            </div>

            {/* Getting Started */}
            <div className="mb-8">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🚀</span>
                Getting Started
              </h3>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-6">
                <h4 className="text-lg font-semibold text-blue-900 mb-2">Step 1: Choose Your View</h4>
                <p className="text-blue-800">When you open MealSaver, you'll see options at the top:</p>
                <ul className="list-disc list-inside text-blue-800 mt-2 space-y-1">
                  <li><strong>"My Personal Items"</strong> - Your private food inventory</li>
                  <li><strong>Household names</strong> - Shared family inventories</li>
                  <li><strong>"+ Create Household"</strong> - Start a new family group</li>
                </ul>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-6">
                <h4 className="text-lg font-semibold text-green-900 mb-2">Step 2: Create Your First Household</h4>
                <ol className="list-decimal list-inside text-green-800 space-y-1">
                  <li>Tap "+ Create Household"</li>
                  <li>Enter a name like "Smith Family" or "Our Home"</li>
                  <li>You're now the household admin!</li>
                </ol>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-400 p-6 mb-6">
                <h4 className="text-lg font-semibold text-purple-900 mb-2">Step 3: Invite Family Members</h4>
                <ol className="list-decimal list-inside text-purple-800 space-y-1">
                  <li>In your household view, look for "Invite Members"</li>
                  <li>Tap "Generate Invite Code"</li>
                  <li>Share the code with your family via text, email, or just tell them</li>
                  <li>Family members enter this code to join your household</li>
                </ol>
              </div>
            </div>

            {/* Joining a Household */}
            <div className="mb-8">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">👥</span>
                Joining a Household
              </h3>
              <p className="text-gray-700 mb-4">If someone invited you:</p>
              <ol className="list-decimal list-inside text-gray-700 space-y-1">
                <li>Open MealSaver and look for "Join Household"</li>
                <li>Enter the invite code your family member shared</li>
                <li>You're in! You can now see and add to the shared pantry</li>
              </ol>
            </div>

            {/* Using Family Sharing */}
            <div className="mb-8">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">📱</span>
                Using Family Sharing
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Adding Food Items</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Switch to your household view (not "Personal Items")</li>
                  <li>Add food normally - everyone in the household will see it</li>
                  <li>Items show who added them and when</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Viewing Items</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Personal Items:</strong> Only you can see these</li>
                  <li><strong>Household Items:</strong> Everyone in the family can see these</li>
                  <li>Switch between views anytime with the buttons at the top</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Expiration Alerts</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Everyone gets notifications for items expiring in the shared household</li>
                  <li>Alerts show up for items expiring today, tomorrow, and within 3 days</li>
                  <li>Perfect for making sure nothing gets forgotten!</li>
                </ul>
              </div>
            </div>

            {/* Managing Your Household */}
            <div className="mb-8">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🔧</span>
                Managing Your Household
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-blue-900 mb-3">As a Household Admin, you can:</h4>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li>Invite new members</li>
                    <li>Remove members if needed</li>
                    <li>Change the household name</li>
                    <li>See who added each item</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-green-900 mb-3">As a Household Member, you can:</h4>
                  <ul className="list-disc list-inside text-green-800 space-y-1">
                    <li>Add and edit food items</li>
                    <li>See all shared items</li>
                    <li>Get expiration notifications</li>
                    <li>Leave the household if needed</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pro Tips */}
            <div className="mb-8">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">💡</span>
                Pro Tips
              </h3>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Best Practices:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li><strong>Name your household clearly</strong> - "Johnson Family Kitchen" is better than "House"</li>
                  <li><strong>Include everyone</strong> - Kids old enough to use phones should join too</li>
                  <li><strong>Check regularly</strong> - Make it a habit to check expiring items before grocery shopping</li>
                  <li><strong>Communicate</strong> - Use the notes field to leave messages like "Save for dinner tomorrow"</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Smart Shopping:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Check your household inventory before going to the store</li>
                  <li>Avoid buying duplicates by seeing what's already at home</li>
                  <li>Plan meals around items that expire soon</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">Storage Organization:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Use the storage locations feature (Pantry, Fridge, Freezer)</li>
                  <li>Everyone can see where items are stored</li>
                  <li>Perfect for "Mom, where's the..." questions!</li>
                </ul>
              </div>
            </div>

            {/* Common Questions */}
            <div className="mb-8">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">❓</span>
                Common Questions
              </h3>

              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Q: Can I keep some items private?</h4>
                  <p className="text-gray-700">A: Yes! Use "My Personal Items" for things you don't want to share. Great for personal snacks or special diet items.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Q: What if someone accidentally deletes an item?</h4>
                  <p className="text-gray-700">A: All changes are logged with who made them and when. Household admins can see this activity.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Q: Can I be in multiple households?</h4>
                  <p className="text-gray-700">A: Yes! You might have one for your main family and another for a shared apartment or vacation home.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Q: How many people can join a household?</h4>
                  <p className="text-gray-700">A: There's no limit - invite as many family members as you need.</p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Q: What happens to my existing food items?</h4>
                  <p className="text-gray-700">A: They stay as your personal items unless you choose to move them to a household.</p>
                </div>
              </div>
            </div>

            {/* Privacy & Security */}
            <div className="mb-8">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🔒</span>
                Privacy & Security
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Only household members can see shared items</li>
                <li>Each person controls their own account</li>
                <li>You can leave households anytime</li>
                <li>Admins can manage household membership</li>
                <li>Your personal items remain completely private</li>
              </ul>
            </div>

            {/* Need Help */}
            <div className="mb-8">
              <h3 className="text-2xl font-poppins font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-2xl mr-3">🆘</span>
                Need Help?
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Invite code not working?</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Make sure it's typed correctly (codes are case-sensitive)</li>
                    <li>Ask for a new code - they expire after 7 days</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Not seeing household items?</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Check that you've selected the household (not "Personal Items")</li>
                    <li>Make sure you're connected to the internet</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Family member can't join?</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Confirm they have the MealSaver app installed</li>
                    <li>Generate a fresh invite code</li>
                    <li>Make sure they're entering it in the right place</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary to-primary-dark text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-poppins font-bold mb-4 flex items-center justify-center">
                <span className="text-2xl mr-3">🎉</span>
                Start Saving Food Together!
              </h3>
              <p className="text-lg mb-6">
                Family Sharing makes it easy to coordinate with your household and reduce food waste. Set it up once, and everyone benefits from better organization and fewer forgotten expiring items.
              </p>
              <p className="text-lg font-semibold">
                Ready to get started? Open MealSaver and tap "Create Household" today!
              </p>
            </div>
          </div>

          {/* Additional Support Links */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-poppins font-semibold text-gray-900 mb-4">Still need help?</h3>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact-us"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark transition-colors"
              >
                Contact Support
              </Link>
              <Link
                to="/bug-reports"
                className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Report a Bug
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AppSupport;
