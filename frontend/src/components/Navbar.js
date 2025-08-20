import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../assessts/Logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Product', path: '/products' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Why Us', path: '/why-us' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg fixed w-full top-0 z-50 border-b border-gray-100">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <img 
                  src={logo} 
                  alt="OmniSolveAI Logo" 
                  className="w-16 h-16 rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-25 rounded-2xl group-hover:opacity-35 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
                  OmniSolveAI
                </span>
                <span className="text-sm text-gray-500 font-medium">AI-Powered Fashion</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-1"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    isActive(item.path)
                      ? 'text-[#0B3D91] bg-gradient-to-r from-[#0B3D91]/10 to-[#6C63FF]/10'
                      : 'text-gray-600 hover:text-[#0B3D91] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] rounded-full"
                      layoutId="activeTab"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </motion.div>

       

          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-100">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-[#0B3D91] bg-gradient-to-r from-[#0B3D91]/10 to-[#6C63FF]/10 shadow-sm'
                        : 'text-gray-600 hover:text-[#0B3D91] hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
