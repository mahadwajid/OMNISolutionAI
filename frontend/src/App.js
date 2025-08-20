import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import WhyUs from './pages/WhyUs';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import { logPageView } from './utils/analytics';

function App() {
  useEffect(() => {
    // Initialize Google Analytics
    logPageView(window.location.pathname);
  }, []);

  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Product />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
