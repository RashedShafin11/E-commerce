import React from 'react';
import { ShoppingCart, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-navy-800 pb-12">
        {/* About */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="bg-orange-500 p-2 rounded-lg">
              <ShoppingCart size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">NexStore</span>
          </div>
          <p className="text-grey-200 text-sm leading-relaxed mb-6">
            The world's leading e-commerce platform delivering high-quality products to your doorstep. Modern, fast, and reliable.
          </p>
          <div className="flex gap-4">
            <Facebook size={20} className="text-grey-200 hover:text-orange-500 cursor-pointer transition-colors" />
            <Twitter size={20} className="text-grey-200 hover:text-orange-500 cursor-pointer transition-colors" />
            <Instagram size={20} className="text-grey-200 hover:text-orange-500 cursor-pointer transition-colors" />
            <Youtube size={20} className="text-grey-200 hover:text-orange-500 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-orange-500">Quick Links</h3>
          <ul className="space-y-4 text-sm text-grey-200">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-orange-500">Customer Support</h3>
          <ul className="space-y-4 text-sm text-grey-200">
            <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Returns & Refunds</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-orange-500">Newsletter</h3>
          <p className="text-sm text-grey-200 mb-4">Subscribe to get latest updates and offers.</p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Your Email"
              className="bg-navy-800 border border-navy-700 px-4 py-2 rounded-lg outline-none focus:border-orange-500 text-sm w-full"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-orange-600 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-grey-200">
        <p>© 2026 NexStore E-Commerce. All rights reserved.</p>
        <div className="flex gap-6">
          <span>Secure Payments:</span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4 brightness-0 invert" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4 brightness-0 invert" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4 brightness-0 invert" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
