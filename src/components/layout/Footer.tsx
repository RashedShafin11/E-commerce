import React from 'react';
import { ShoppingCart, Facebook, Twitter, Instagram, Youtube, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="mt-20 bg-navy-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-navy-800 pb-12">
        {/* About */}
        <div>
          <Link to="/" className="flex items-center gap-2 mb-6 group">
            <div className="bg-orange-500 p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <ShoppingCart size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight">NextStore</span>
          </Link>
          <p className="text-grey-200 text-sm leading-relaxed mb-6">
            Providing top-quality products across all categories. Experience the future of online shopping with NextStore.
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
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-orange-500">Customer Support</h3>
          <ul className="space-y-4 text-sm text-grey-200">
            <li><Link to="/contact" className="hover:text-white transition-colors">Help Center</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors">Track Order</Link></li>
            <li><Link to="/returns" className="hover:text-white transition-colors">Returns & Refunds</Link></li>
            <li><Link to="/shipping" className="hover:text-white transition-colors">Shipping Info</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-6 text-orange-500">Get in Touch</h3>
          <ul className="space-y-4 text-sm text-grey-200">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-orange-500" />
              Dhaka, Bangladesh
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-orange-500" />
              +880 123 456 789
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-orange-500" />
              support@nextstore.com
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-grey-200">
        <p>© 2026 NextStore E-Commerce. All rights reserved.</p>
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
