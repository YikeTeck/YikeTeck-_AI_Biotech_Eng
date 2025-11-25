import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main>
      <Navbar />
      
      {/* Page Header */}
      <section className="pt-28 pb-10 bg-yiketeck-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: April 13, 2025
          </p>
        </div>
      </section>
      
      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2>Introduction</h2>
            <p>
              Your privacy is important to us. This Privacy Policy explains how Yike Teck collects, uses, 
              discloses, and protects your personal data when you use our website or our services.
            </p>
            
            <h2>Information We Collect</h2>
            <p>
              We may collect various types of information, including:
            </p>
            <ul>
              <li>
                <strong>Personal information</strong>: name, email address, phone number, postal address 
                and other information you voluntarily provide through our contact forms.
              </li>
              <li>
                <strong>Device information</strong>: IP address, browser type, operating system, 
                Internet service provider, referring/exit pages, and timestamps.
              </li>
              <li>
                <strong>Cookies and similar technologies</strong>: we use cookies and similar technologies to improve 
                the experience on our site and to analyze traffic.
              </li>
            </ul>
            
            <h2>How We Use Information</h2>
            <p>
              We use the collected information to:
            </p>
            <ul>
              <li>Provide, manage, and improve our services</li>
              <li>Understand and analyze how you use our site</li>
              <li>Communicate with you, including sending notifications and updates about our services</li>
              <li>Prevent fraud and abuse</li>
            </ul>
            
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties, except 
              as described in this Privacy Policy. We may share your information with:
            </p>
            <ul>
              <li>
                <strong>Service providers</strong>: third parties that help us manage our website 
                and provide our services.
              </li>
              <li>
                <strong>Business partners</strong>: we may share your information with business partners 
                to offer you certain products, services, or promotions.
              </li>
              <li>
                <strong>Legal requirements</strong>: we may disclose your information if required by law 
                or in response to valid legal requests.
              </li>
            </ul>
            
            <h2>Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information from loss, 
              misuse, unauthorized access, disclosure, or alteration.
            </p>
            
            <h2>Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access, correct, or delete your personal information</li>
              <li>Limit or object to the processing of your data</li>
              <li>Receive a copy of your personal information in a structured format</li>
              <li>Lodge a complaint with a supervisory authority</li>
            </ul>
            
            <h2>Changes to the Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We encourage you to periodically review 
              this page to stay informed about any changes.
            </p>
            
            <h2>Contact Us</h2>
            <p>
              If you have questions or concerns about our Privacy Policy, please don't hesitate to contact us at privacy@yiketeck.com.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}