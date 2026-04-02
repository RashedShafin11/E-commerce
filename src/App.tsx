import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CategoryPage from './pages/CategoryPage';
import AllProductsPage from './pages/AllProductsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import ReturnsRefunds from './pages/legal/ReturnsRefunds';
import ShippingInfo from './pages/legal/ShippingInfo';
import Sidebar from './components/layout/Sidebar';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col overflow-x-hidden">
          {/* Main Navigation */}
          <Header onMenuClick={() => setIsDrawerOpen(true)} />
          
          {/* Global Sliding Category Drawer */}
          <Sidebar 
            isOpen={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)} 
          />
          
          {/* Main Content Area */}
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<AllProductsPage />} />
              <Route path="/product/:productId" element={<ProductDetailsPage />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsConditions />} />
              <Route path="/returns" element={<ReturnsRefunds />} />
              <Route path="/shipping" element={<ShippingInfo />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
