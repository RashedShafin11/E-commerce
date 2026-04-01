import React from 'react';

const ReturnsRefunds: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-black text-navy-900 mb-8 border-b border-grey-100 pb-4">Returns & Refunds</h1>
        
        <div className="prose prose-navy max-w-none text-grey-200 space-y-6">
          <p className="text-lg font-medium">We want you to be completely satisfied with your purchase. If you're not, we're here to help.</p>
          
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">1. 7-Day Return Policy</h2>
            <p>You have 7 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">2. Non-Returnable Items</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Perishable goods (Groceries)</li>
              <li>Health and personal care items</li>
              <li>Downloadable software products</li>
              <li>Items with missing serial numbers or damaged due to user error</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">3. Refund Process</h2>
            <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your original method of payment.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">4. Shipping Costs</h2>
            <p>You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you receive a refund, the cost of return shipping will be deducted from your refund.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ReturnsRefunds;
