import React from 'react';
import { Target, Award, Users, ShieldCheck, Truck, Headphones } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-navy-900 py-20 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-black mb-6">About NextStore</h1>
          <p className="text-xl text-grey-200 max-w-2xl mx-auto">
            The world's leading e-commerce platform delivering excellence and innovation to your doorstep since 2026.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 text-orange-500 mb-4">
              <Target size={24} />
              <span className="font-bold uppercase tracking-widest">Our Mission</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-navy-900 mb-6 leading-tight">
              Empowering Millions with Seamless Shopping Experiences
            </h2>
            <p className="text-grey-200 leading-relaxed mb-6">
              At NextStore, our mission is to provide an unparalleled shopping experience by offering a vast selection of high-quality products across all categories. From the latest Electronic Devices to the most trendy Fashion and essential Home & Lifestyle goods, we ensure that our customers have access to the best the world has to offer.
            </p>
            <p className="text-grey-200 leading-relaxed">
              We leverage cutting-edge technology and a robust logistics network to make online shopping fast, reliable, and accessible to everyone, everywhere.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-grey-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
              <h3 className="text-4xl font-black text-orange-500 mb-2">10M+</h3>
              <p className="text-sm font-bold text-navy-900 uppercase">Happy Customers</p>
            </div>
            <div className="bg-grey-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
              <h3 className="text-4xl font-black text-navy-900 mb-2">250K+</h3>
              <p className="text-sm font-bold text-navy-900 uppercase">Products Available</p>
            </div>
            <div className="bg-grey-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
              <h3 className="text-4xl font-black text-navy-900 mb-2">500+</h3>
              <p className="text-sm font-bold text-navy-900 uppercase">Top Brands</p>
            </div>
            <div className="bg-grey-50 p-8 rounded-3xl text-center hover:shadow-lg transition-shadow">
              <h3 className="text-4xl font-black text-orange-500 mb-2">24/7</h3>
              <p className="text-sm font-bold text-navy-900 uppercase">Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Shop With Us */}
      <section className="py-20 bg-grey-50">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-3 text-orange-500 mb-4">
              <Award size={24} />
              <span className="font-bold uppercase tracking-widest">NextStore Advantages</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-navy-900">Why Shop with Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-orange-50 text-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <Truck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy-900">Fast & Free Shipping</h3>
              <p className="text-grey-200 text-sm leading-relaxed">
                Enjoy free delivery on millions of items. Our optimized logistics network ensures your packages arrive in record time.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-navy-50 text-navy-900 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <RotateCcw size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy-900">Easy Returns</h3>
              <p className="text-grey-200 text-sm leading-relaxed">
                Not satisfied? No problem. Our hassle-free 7-day return policy gives you peace of mind with every purchase.
              </p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-orange-50 text-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold mb-4 text-navy-900">100% Secure Payments</h3>
              <p className="text-grey-200 text-sm leading-relaxed">
                We use bank-level encryption to ensure your transactions and data are always safe and protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="bg-orange-500 rounded-[3rem] p-12 md:p-20 text-white flex flex-col md:flex-row items-center justify-between gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-black mb-6">Need Assistance?</h2>
            <p className="text-xl text-white/80 max-w-md">
              Our support team is available 24/7 to help you with any questions or issues.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-white text-orange-500 px-10 py-4 rounded-full font-black text-lg hover:shadow-2xl transition-all">
              Contact Support
            </button>
            <button className="bg-navy-900 text-white px-10 py-4 rounded-full font-black text-lg hover:shadow-2xl transition-all">
              Visit Help Center
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

// Simple RotateCcw icon for About page
const RotateCcw = ({ size, className }: { size: number, className: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M1 4v6h6"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
  </svg>
);

export default AboutPage;
