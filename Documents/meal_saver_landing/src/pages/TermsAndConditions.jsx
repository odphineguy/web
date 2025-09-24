import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../components/AppIcon';

const TermsAndConditions = () => {
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
          <h1 className="font-poppins text-3xl font-bold text-gray-900 mb-8">
            Terms of Service
          </h1>
          
          <div className="font-inter text-gray-700 space-y-6">
            <p className="text-sm text-gray-500 mb-8">
              Last updated: 2025-09-11
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Abe Media, LLC</strong> ("Company", "we", "our", "us")!
            </p>
            <p>
              These Terms of Service ("Terms", "Terms of Service") govern your use of our website located at <strong>mealsaver.app</strong> (together or individually "Service") operated by <strong>Abe Media, LLC</strong>.
            </p>
            <p>
              Our Privacy Policy also governs your use of our Service and explains how we collect, safeguard and disclose information that results from your use of our web pages.
            </p>
            <p>
              Your agreement with us includes these Terms and our Privacy Policy ("Agreements"). You acknowledge that you have read and understood Agreements, and agree to be bound of them.
            </p>
            <p>
              If you do not agree with (or cannot comply with) Agreements, then you may not use the Service, but please let us know by emailing at <strong>abe.perez@me.com</strong> so we can try to find a solution. These Terms apply to all visitors, users and others who wish to access or use Service.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              2. Communications
            </h2>
            <p>
              By using our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or by emailing at abe.perez@me.com.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              3. Purchases
            </h2>
            <p>
              If you wish to purchase any product or service made available through Service ("Purchase"), you may be asked to supply certain information relevant to your Purchase including but not limited to, your credit or debit card number, the expiration date of your card, your billing address, and your shipping information.
            </p>
            <p>
              You represent and warrant that: (i) you have the legal right to use any card(s) or other payment method(s) in connection with any Purchase; and that (ii) the information you supply to us is true, correct and complete.
            </p>
            <p>
              We may employ the use of third party services for the purpose of facilitating payment and the completion of Purchases. By submitting your information, you grant us the right to provide the information to these third parties subject to our Privacy Policy.
            </p>
            <p>
              We reserve the right to refuse or cancel your order at any time for reasons including but not limited to: product or service availability, errors in the description or price of the product or service, error in your order or other reasons.
            </p>
            <p>
              We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              4. Contests, Sweepstakes and Promotions
            </h2>
            <p>
              Any contests, sweepstakes or other promotions (collectively, "Promotions") made available through Service may be governed by rules that are separate from these Terms of Service. If you participate in any Promotions, please review the applicable rules as well as our Privacy Policy. If the rules for a Promotion conflict with these Terms of Service, Promotion rules will apply.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              5. Refunds
            </h2>
            <p>
              We issue refunds for Contracts within <strong>14 days</strong> of the original purchase of the Contract.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              6. Content
            </h2>
            <p>
              Content found on or through this Service are the property of Abe Media, LLC or used with permission. You may not distribute, modify, transmit, reuse, download, repost, copy, or use said Content, whether in whole or in part, for commercial purposes or for personal gain, without express advance written permission from us.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              7. Prohibited Uses
            </h2>
            <p>
              You may use Service only for lawful purposes and in accordance with Terms. You agree not to use Service:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>In any way that violates any applicable national or international law or regulation.</li>
              <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
              <li>To impersonate or attempt to impersonate Company, a Company employee, another user, or any other person or entity.</li>
              <li>In any way that infringes upon the rights of others, or in any way is illegal, threatening, fraudulent, or harmful, or in connection with any unlawful, illegal, fraudulent, or harmful purpose or activity.</li>
              <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of Service, or which, as determined by us, may harm or offend Company or users of Service or expose them to liability.</li>
            </ul>
            <p className="mt-4">
              Additionally, you agree not to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Use Service in any manner that could disable, overburden, damage, or impair Service or interfere with any other party's use of Service, including their ability to engage in real time activities through Service.</li>
              <li>Use any robot, spider, or other automatic device, process, or means to access Service for any purpose, including monitoring or copying any of the material on Service.</li>
              <li>Use any manual process to monitor or copy any of the material on Service or for any other unauthorized purpose without our prior written consent.</li>
              <li>Use any device, software, or routine that interferes with the proper working of Service.</li>
              <li>Introduce any viruses, trojan horses, worms, logic bombs, or other material which is malicious or technologically harmful.</li>
              <li>Attempt to gain unauthorized access to, interfere with, damage, or disrupt any parts of Service, the server on which Service is stored, or any server, computer, or database connected to Service.</li>
              <li>Attack Service via a denial-of-service attack or a distributed denial-of-service attack.</li>
              <li>Take any action that may damage or falsify Company rating.</li>
              <li>Otherwise attempt to interfere with the proper working of Service.</li>
            </ul>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              8. Analytics
            </h2>
            <p>
              We may use third-party Service Providers to monitor and analyze the use of our Service.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              9. No Use By Minors
            </h2>
            <p>
              Service is intended only for access and use by individuals at least eighteen (18) years old. By accessing or using Service, you warrant and represent that you are at least eighteen (18) years of age and with the full authority, right, and capacity to enter into this agreement and abide by all of the terms and conditions of Terms. If you are not at least eighteen (18) years old, you are prohibited from both the access and usage of Service.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              10. Intellectual Property
            </h2>
            <p>
              Service and its original content (excluding Content provided by users), features and functionality are and will remain the exclusive property of Abe Media, LLC and its licensors. Service is protected by copyright, trademark, and other laws of and foreign countries. Our trademarks may not be used in connection with any product or service without the prior written consent of Abe Media, LLC.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              11. Copyright Policy
            </h2>
            <p>
              We respect the intellectual property rights of others. It is our policy to respond to any claim that Content posted on Service infringes on the copyright or other intellectual property rights ("Infringement") of any person or entity.
            </p>
            <p>
              If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement, please submit your claim via email to abe.perez@me.com, with the subject line: "Copyright Infringement" and include in your claim a detailed description of the alleged Infringement as detailed below, under "DMCA Notice and Procedure for Copyright Infringement Claims"
            </p>
            <p>
              You may be held accountable for damages (including costs and attorneys' fees) for misrepresentation or bad-faith claims on the infringement of any Content found on and/or through Service on your copyright.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              12. DMCA Notice and Procedure for Copyright Infringement Claims
            </h2>
            <p>
              You may submit a notification pursuant to the Digital Millennium Copyright Act (DMCA) by providing our Copyright Agent with the following information in writing (see 17 U.S.C 512(c)(3) for further detail):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>an electronic or physical signature of the person authorized to act on behalf of the owner of the copyright's interest;</li>
              <li>a description of the copyrighted work that you claim has been infringed, including the URL (i.e., web page address) of the location where the copyrighted work exists or a copy of the copyrighted work;</li>
              <li>identification of the URL or other specific location on Service where the material that you claim is infringing is located;</li>
              <li>your address, telephone number, and email address;</li>
              <li>a statement by you that you have a good faith belief that the disputed use is not authorized by the copyright owner, its agent, or the law;</li>
              <li>a statement by you, made under penalty of perjury, that the above information in your notice is accurate and that you are the copyright owner or authorized to act on the copyright owner's behalf.</li>
            </ul>
            <p className="mt-4">
              You can contact our Copyright Agent via email at abe.perez@me.com.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              13. Error Reporting and Feedback
            </h2>
            <p>
              You may provide us either directly at abe.perez@me.com or via third party sites and tools with information and feedback concerning errors, suggestions for improvements, ideas, problems, complaints, and other matters related to our Service ("Feedback"). You acknowledge and agree that: (i) you shall not retain, acquire or assert any intellectual property right or other right, title or interest in or to the Feedback; (ii) Company may have development ideas similar to the Feedback; (iii) Feedback does not contain confidential information or proprietary information from you or any third party; and (iv) Company is not under any obligation of confidentiality with respect to the Feedback. In the event the transfer of the ownership to the Feedback is not possible due to applicable mandatory laws, you grant Company and its affiliates an exclusive, transferable, irrevocable, free-of-charge, sub-licensable, unlimited and perpetual right to use (including copy, modify, create derivative works, publish, distribute and commercialize) Feedback in any manner and for any purpose.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              14. Links To Other Web Sites
            </h2>
            <p>
              Our Service may contain links to third party web sites or services that are not owned or controlled by Abe Media, LLC.
            </p>
            <p>
              Abe Media, LLC has no control over, and assumes no responsibility for the content, privacy policies, or practices of any third party web sites or services. We do not warrant the offerings of any of these entities/individuals or their websites.
            </p>
            <p>
              For example, the outlined Terms of Use have been created using <a href="https://policymaker.io/terms-and-conditions/" className="text-primary hover:underline">PolicyMaker.io</a>, a free web application for generating high-quality legal documents. PolicyMaker's <a href="https://policymaker.io/terms-and-conditions/" className="text-primary hover:underline">Terms and Conditions generator</a> is an easy-to-use free tool for creating an excellent standard Terms of Service template for a website, blog, e-commerce store or app.
            </p>
            <p className="font-semibold">
              YOU ACKNOWLEDGE AND AGREE THAT COMPANY SHALL NOT BE RESPONSIBLE OR LIABLE, DIRECTLY OR INDIRECTLY, FOR ANY DAMAGE OR LOSS CAUSED OR ALLEGED TO BE CAUSED BY OR IN CONNECTION WITH USE OF OR RELIANCE ON ANY SUCH CONTENT, GOODS OR SERVICES AVAILABLE ON OR THROUGH ANY SUCH THIRD PARTY WEB SITES OR SERVICES.
            </p>
            <p className="font-semibold">
              WE STRONGLY ADVISE YOU TO READ THE TERMS OF SERVICE AND PRIVACY POLICIES OF ANY THIRD PARTY WEB SITES OR SERVICES THAT YOU VISIT.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              15. Disclaimer Of Warranty
            </h2>
            <p className="font-semibold">
              THESE SERVICES ARE PROVIDED BY COMPANY ON AN "AS IS" AND "AS AVAILABLE" BASIS. COMPANY MAKES NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THEIR SERVICES, OR THE INFORMATION, CONTENT OR MATERIALS INCLUDED THEREIN. YOU EXPRESSLY AGREE THAT YOUR USE OF THESE SERVICES, THEIR CONTENT, AND ANY SERVICES OR ITEMS OBTAINED FROM US IS AT YOUR SOLE RISK.
            </p>
            <p className="font-semibold">
              NEITHER COMPANY NOR ANY PERSON ASSOCIATED WITH COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES. WITHOUT LIMITING THE FOREGOING, NEITHER COMPANY NOR ANYONE ASSOCIATED WITH COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES, THEIR CONTENT, OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS OR THAT THE SERVICES OR ANY SERVICES OR ITEMS OBTAINED THROUGH THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.
            </p>
            <p className="font-semibold">
              COMPANY HEREBY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT, AND FITNESS FOR PARTICULAR PURPOSE.
            </p>
            <p className="font-semibold">
              THE FOREGOING DOES NOT AFFECT ANY WARRANTIES WHICH CANNOT BE EXCLUDED OR LIMITED UNDER APPLICABLE LAW.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              16. Limitation Of Liability
            </h2>
            <p className="font-semibold">
              EXCEPT AS PROHIBITED BY LAW, YOU WILL HOLD US AND OUR OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS HARMLESS FOR ANY INDIRECT, PUNITIVE, SPECIAL, INCIDENTAL, OR CONSEQUENTIAL DAMAGE, HOWEVER IT ARISES (INCLUDING ATTORNEYS' FEES AND ALL RELATED COSTS AND EXPENSES OF LITIGATION AND ARBITRATION, OR AT TRIAL OR ON APPEAL, IF ANY, WHETHER OR NOT LITIGATION OR ARBITRATION IS INSTITUTED), WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE, OR OTHER TORTIOUS ACTION, OR ARISING OUT OF OR IN CONNECTION WITH THIS AGREEMENT, INCLUDING WITHOUT LIMITATION ANY CLAIM FOR PERSONAL INJURY OR PROPERTY DAMAGE, ARISING FROM THIS AGREEMENT AND ANY VIOLATION BY YOU OF ANY FEDERAL, STATE, OR LOCAL LAWS, STATUTES, RULES, OR REGULATIONS, EVEN IF COMPANY HAS BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. EXCEPT AS PROHIBITED BY LAW, IF THERE IS LIABILITY FOUND ON THE PART OF COMPANY, IT WILL BE LIMITED TO THE AMOUNT PAID FOR THE PRODUCTS AND/OR SERVICES, AND UNDER NO CIRCUMSTANCES WILL THERE BE CONSEQUENTIAL OR PUNITIVE DAMAGES. SOME STATES DO NOT ALLOW THE EXCLUSION OR LIMITATION OF PUNITIVE, INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE PRIOR LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              17. Termination
            </h2>
            <p>
              We may terminate or suspend your account and bar access to Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of Terms.
            </p>
            <p>
              If you wish to terminate your account, you may simply discontinue using Service.
            </p>
            <p>
              All provisions of Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              18. Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of United States, which governing law applies to agreement without regard to its conflict of law provisions.
            </p>
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service and supersede and replace any prior agreements we might have had between us regarding Service.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              19. Changes To Service
            </h2>
            <p>
              We reserve the right to withdraw or amend our Service, and any service or material we provide via Service, in our sole discretion without notice. We will not be liable if for any reason all or any part of Service is unavailable at any time or for any period. From time to time, we may restrict access to some parts of Service, or the entire Service, to users, including registered users.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              20. Amendments To Terms
            </h2>
            <p>
              We may amend Terms at any time by posting the amended terms on this site. It is your responsibility to review these Terms periodically.
            </p>
            <p>
              Your continued use of the Platform following the posting of revised Terms means that you accept and agree to the changes. You are expected to check this page frequently so you are aware of any changes, as they are binding on you.
            </p>
            <p>
              By continuing to access or use our Service after any revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, you are no longer authorized to use Service.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              21. Waiver And Severability
            </h2>
            <p>
              No waiver by Company of any term or condition set forth in Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure of Company to assert a right or provision under Terms shall not constitute a waiver of such right or provision.
            </p>
            <p>
              If any provision of Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of Terms will continue in full force and effect.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              22. Acknowledgement
            </h2>
            <p className="font-semibold">
              BY USING SERVICE OR OTHER SERVICES PROVIDED BY US, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS OF SERVICE AND AGREE TO BE BOUND BY THEM.
            </p>
            
            <h2 className="font-poppins text-xl font-semibold text-gray-900 mt-8 mb-4">
              23. Contact Us
            </h2>
            <p>
              Please send your feedback, comments, requests for technical support by email: <strong>abe.perez@me.com</strong>.
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

export default TermsAndConditions;