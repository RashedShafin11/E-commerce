import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black text-navy-900 mb-8 border-b border-grey-100 pb-4">Privacy Policy</h1>
        
        <div className="prose prose-navy max-w-none text-grey-200 space-y-6">
          <p className="text-lg font-medium">Last Updated: March 31, 2026</p>
          
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Information We Collect</h2>
            <p>At NextStore, we collect information to provide better services to our users. This includes:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Personal identifiers (Name, Email, Phone Number)</li>
              <li>Shipping and billing addresses</li>
              <li>Payment information (processed securely via third-party providers)</li>
              <li>Usage data and cookies to improve your shopping experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. How We Use Your Information</h2>
            <p>Your data is used to:</p>
            <ul className="list-disc ml-6 space-y-2">
              <li>Process and deliver your orders</li>
              <li>Communicate order updates and promotional offers</li>
              <li>Improve our website's functionality and user experience</li>
              <li>Prevent fraudulent activities and ensure platform security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Data Protection</h2>
            <p>We implement a variety of security measures to maintain the safety of your personal information. Your personal information is contained behind secured networks and is only accessible by a limited number of persons who have special access rights to such systems.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Third-Party Disclosure</h2>
            <p>We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
