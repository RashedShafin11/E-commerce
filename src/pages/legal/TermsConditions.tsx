import React from 'react';

const TermsConditions: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black text-navy-900 mb-8 border-b border-grey-100 pb-4">Terms & Conditions</h1>
        
        <div className="prose prose-navy max-w-none text-grey-200 space-y-6">
          <p className="text-lg font-medium">Please read these terms and conditions carefully before using our service.</p>
          
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Use of Service</h2>
            <p>By accessing and using NextStore, you agree to comply with and be bound by these terms. Our service is provided to you for personal, non-commercial use only.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Account Registration</h2>
            <p>You may need to create an account to access certain features. You are responsible for maintaining the confidentiality of your account information and password.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Orders and Pricing</h2>
            <p>We reserve the right to refuse or cancel any orders. Prices are subject to change without notice. In the event of a pricing error, we will notify you and provide the option to reconfirm or cancel the order.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Intellectual Property</h2>
            <p>All content on NextStore, including logos, designs, text, and images, is the property of NextStore and is protected by intellectual property laws.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">5. Limitation of Liability</h2>
            <p>NextStore shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or products purchased through our platform.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
