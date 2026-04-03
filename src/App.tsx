import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AllProductsPage from './pages/AllProductsPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/layout/Sidebar';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/layout/ScrollToTop';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-gray-50 font-sans flex flex-col">
          {/* Persistent Navbar */}
          <Header onMenuClick={() => setIsDrawerOpen(true)} />
          
          {/* Global Category Drawer Overlay */}
          <Sidebar 
            isOpen={isDrawerOpen} 
            onClose={() => setIsDrawerOpen(false)} 
          />
          
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<AllProductsPage />} />
              <Route path="/product/:productId" element={<ProductDetailsPage />} />
              <Route path="/category/:categoryName" element={<CategoryPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
