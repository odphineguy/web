import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const GDPR = () => {
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
            GDPR COMPLIANCE
          </h1>
          
          <div className="font-inter text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Effective date: {new Date().toISOString().split('T')[0]}
            </p>
            
            <p>
              This GDPR Compliance Statement explains how <strong>Abe Media, LLC</strong> ("we", "us", or "our") complies with the General Data Protection Regulation (GDPR) when processing personal data of individuals in the European Union (EU) and European Economic Area (EEA).
            </p>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              1. Data Controller
            </h2>
            <p>
              Abe Media, LLC is the Data Controller for personal data collected through our website <strong>mealsaver.app</strong> and our mobile applications. You can contact us at <strong>abe.perez@me.com</strong>.
            </p>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              2. Legal Basis for Processing
            </h2>
            <p>
              We process personal data on the following legal bases:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Consent:</strong> Where you have given us explicit consent to process your personal data for specific purposes.</li>
              <li><strong>Contract:</strong> Where processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.</li>
              <li><strong>Legal Obligation:</strong> Where processing is necessary for compliance with our legal obligations.</li>
              <li><strong>Legitimate Interests:</strong> Where processing is necessary for our legitimate interests or those of a third party, except where such interests are overridden by your interests or fundamental rights and freedoms.</li>
            </ul>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              3. Your GDPR Rights
            </h2>
            <p>
              Under the GDPR, you have the following rights:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> You have the right to request copies of your personal data.</li>
              <li><strong>Right to Rectification:</strong> You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.</li>
              <li><strong>Right to Erasure:</strong> You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>Right to Restrict Processing:</strong> You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
              <li><strong>Right to Object to Processing:</strong> You have the right to object to our processing of your personal data, under certain conditions.</li>
              <li><strong>Right to Data Portability:</strong> You have the right to request that we transfer the data we have collected to another organization, or directly to you, under certain conditions.</li>
              <li><strong>Right to Withdraw Consent:</strong> You have the right to withdraw your consent at any time where we relied on your consent to process your personal data.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at <strong>abe.perez@me.com</strong>. We will respond to your request within 30 days.
            </p>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              4. Data Protection Officer
            </h2>
            <p>
              While we are not required to appoint a Data Protection Officer under the GDPR, we have designated a point of contact for data protection matters. You can contact this person at <strong>abe.perez@me.com</strong>.
            </p>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              5. Data Transfers Outside the EU/EEA
            </h2>
            <p>
              We may transfer your personal data to countries outside the EU/EEA. When we do so, we ensure that appropriate safeguards are in place to protect your data, such as:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Transferring to countries that have been deemed to provide an adequate level of protection by the European Commission.</li>
              <li>Using specific contracts approved by the European Commission that give personal data the same protection it has in Europe.</li>
              <li>Transferring data to US-based organizations that are part of approved frameworks ensuring adequate protection.</li>
            </ul>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              6. Data Retention
            </h2>
            <p>
              We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period for personal data, we consider:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>The amount, nature, and sensitivity of the personal data.</li>
              <li>The potential risk of harm from unauthorized use or disclosure.</li>
              <li>The purposes for which we process the data.</li>
              <li>Whether we can achieve those purposes through other means.</li>
              <li>The applicable legal requirements.</li>
            </ul>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              7. Data Security
            </h2>
            <p>
              We have implemented appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Encryption of personal data where appropriate.</li>
              <li>Regular testing and evaluation of technical and organizational measures.</li>
              <li>Procedures to address and manage personal data breaches.</li>
              <li>Data protection training for staff.</li>
            </ul>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              8. Data Breach Notification
            </h2>
            <p>
              In the event of a personal data breach that is likely to result in a risk to your rights and freedoms, we will notify the relevant supervisory authority without undue delay and, where feasible, within 72 hours after becoming aware of the breach. We will also notify you if the breach is likely to result in a high risk to your rights and freedoms.
            </p>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              9. Data Protection Impact Assessment
            </h2>
            <p>
              We conduct Data Protection Impact Assessments (DPIAs) where our processing operations are likely to result in a high risk to your rights and freedoms, particularly when using new technologies.
            </p>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              10. Children's Data
            </h2>
            <p>
              Our services are not intended for children under 16 years of age. We do not knowingly collect personal data from children under 16. If we become aware that we have collected personal data from a child under 16 without verification of parental consent, we will take steps to remove that information from our servers.
            </p>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              11. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies on our website. For detailed information about the cookies we use and how to manage your cookie preferences, please see our Cookie Policy.
            </p>
            <p>
              When you first visit our website, you will be presented with a cookie banner that allows you to accept or decline non-essential cookies. You can change your cookie preferences at any time by visiting our Cookie Settings page.
            </p>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              12. Third-Party Processors
            </h2>
            <p>
              We use third-party processors to process personal data on our behalf. We have contracts in place with these processors that require them to comply with the GDPR and protect your personal data.
            </p>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              13. Changes to This GDPR Compliance Statement
            </h2>
            <p>
              We may update this GDPR Compliance Statement from time to time. We will notify you of any changes by posting the new statement on this page and updating the effective date at the top.
            </p>
            <p>
              We encourage you to review this statement periodically to stay informed about how we are protecting your information.
            </p>

            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              14. Contact Us
            </h2>
            <p>
              If you have any questions about this GDPR Compliance Statement, our privacy practices, or your dealings with us, please contact us at:
            </p>
            <p className="mt-2">
              <strong>Email:</strong> abe.perez@me.com
            </p>
            <p>
              <strong>Postal Address:</strong> [Your physical address]
            </p>
            <p>
              You also have the right to lodge a complaint with a supervisory authority in the EU member state where you reside, work, or where an alleged infringement of the GDPR has taken place.
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

export default GDPR;
