import React from 'react';

const ShippingInfo: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black text-navy-900 mb-8 border-b border-grey-100 pb-4">Shipping Information</h1>
        
        <div className="prose prose-navy max-w-none text-grey-200 space-y-6">
          <p className="text-lg font-medium">We are committed to delivering your orders as quickly and safely as possible.</p>
          
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. Delivery Timelines</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li><strong>Inside Dhaka:</strong> 1 - 3 business days</li>
              <li><strong>Major Cities:</strong> 3 - 5 business days</li>
              <li><strong>Remote Areas:</strong> 5 - 7 business days</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Shipping Charges</h2>
            <p>Shipping charges are calculated based on the weight of the items and the delivery location. Free shipping is available for orders over a certain amount as specified during checkout.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Order Tracking</h2>
            <p>Once your order is shipped, you will receive a tracking number via email and SMS. You can use this number to track your package on our website's tracking page or via our logistics partner's portal.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Shipping Partners</h2>
            <p>We partner with the most reliable local and international courier services to ensure your orders are handled with care and delivered on time.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ShippingInfo;
