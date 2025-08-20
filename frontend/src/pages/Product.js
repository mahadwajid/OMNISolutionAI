import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Product = () => {
  const navigate = useNavigate();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { duration: 0.3 }
    },
    transition: { duration: 0.6 }
  };
  const tryOnSteps = [
    {
      id: 1,
      title: 'Upload Your Photo',
      description: 'Simply upload a clear photo of yourself. Our AI works with any standard photo from your phone or camera.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'primary'
    },
    {
      id: 2,
      title: 'Upload Dress Image',
      description: 'Select the clothing item you want to try on. Our system works with any garment from your inventory.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
        </svg>
      ),
      color: 'secondary'
    },
    {
      id: 3,
      title: 'AI Processing',
      description: 'Our advanced AI analyzes body measurements, fabric properties, and fit to create a realistic virtual try-on.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'accent'
    },
    {
      id: 4,
      title: 'Get Result',
      description: 'View your personalized virtual try-on preview with realistic fit, drape, and styling recommendations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: 'green'
    }
  ];

  const brandBenefits = [
    {
      title: 'Reduce Return Rates',
      percentage: '30%',
      description: 'Customers make confident purchase decisions with realistic virtual try-ons',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Increase Customer Engagement',
      percentage: '25%',
      description: 'Interactive try-on experiences keep customers engaged longer',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
    {
      title: 'Build Brand Loyalty',
      percentage: '40%',
      description: 'Enhanced shopping experience creates lasting customer relationships',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-100 text-primary-600 border-primary-200',
      secondary: 'bg-secondary-100 text-secondary-600 border-secondary-200',
      accent: 'bg-accent-100 text-accent-600 border-accent-200',
      green: 'bg-green-100 text-green-600 border-green-200'
    };
    return colors[color] || colors.primary;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Floating Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-10 rounded-full blur-3xl"
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] opacity-10 rounded-full blur-3xl"
          animate={{
            y: [0, 40, 0],
            x: [0, -25, 0],
            scale: [1, 0.8, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>

        {/* Enhanced Particle System */}
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute w-${i % 3 === 0 ? '2' : i % 3 === 1 ? '1' : '1.5'} h-${i % 3 === 0 ? '2' : i % 3 === 1 ? '1' : '1.5'} bg-gradient-to-r from-[#00FFFF] to-[#6C63FF] rounded-full opacity-60`}
            style={{
              top: `${25 + i * 12}%`,
              left: `${20 + i * 15}%`,
            }}
            animate={{
              y: [0, -100 - i * 8, 0],
              x: [0, 50 + i * 3, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 1.4, 1],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          ></motion.div>
        ))}

        {/* Animated Geometric Shapes */}
        <motion.div 
          className="absolute top-1/3 right-1/4 w-8 h-8 border-2 border-[#00FFFF] opacity-40"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        ></motion.div>

        {/* Pulsing Rings */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-16 h-16 border border-[#0B3D91] rounded-full opacity-30"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeOut"
          }}
        ></motion.div>

        {/* Enhanced Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0B3D91 1px, transparent 0)`,
            backgroundSize: '60px 60px'
          }}></div>
        </motion.div>
        </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] text-white rounded-full text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-[#00FFFF] rounded-full mr-2 animate-pulse"></span>
            AI-Powered Technology
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            AI-Powered{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] via-[#6C63FF] to-[#00FFFF] bg-clip-text text-transparent">
              Virtual Try-On
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your fashion business with cutting-edge AI technology that lets customers 
            virtually try on clothes before they buy, reducing returns and increasing sales.
          </motion.p>
        </motion.div>

        {/* Demo Video Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="relative z-10">
              <motion.div 
                className="text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  See It in{' '}
                  <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
                    Action
                  </span>
                </h2>
                <p className="text-lg text-gray-600">Watch our 30-second demo to see how easy it is</p>
              </motion.div>
              <motion.div 
                className="max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg border border-gray-200"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center">
                    <motion.div 
                      className="w-20 h-20 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                        </svg>
                    </motion.div>
                    <p className="text-lg font-semibold text-gray-700">Demo Video</p>
                    <p className="text-sm text-gray-500">30-second preview</p>
                  </div>
                </motion.div>
              </motion.div>
                </div>
          </motion.div>
        </motion.div>

        {/* Try-On Process Steps */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It{' '}
              <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600">Four simple steps to virtual try-on</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {tryOnSteps.map((step, index) => (
              <motion.div 
                key={step.id} 
                className="relative group"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Step Number */}
                <motion.div 
                  className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] text-white flex items-center justify-center font-bold text-sm z-10 shadow-lg`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                >
                  {step.id}
                </motion.div>
                
                {/* Step Card */}
                <motion.div 
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 pt-8 border border-gray-100 overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </motion.div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                    <p className="text-gray-600 text-center">{step.description}</p>
                </div>
                </motion.div>
                
                {/* Animated Connector Line */}
                {index < tryOnSteps.length - 1 && (
                  <motion.div 
                    className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] transform -translate-y-1/2"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Brand Benefits */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits for Your{' '}
              <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
                Brand
              </span>
            </h2>
            <p className="text-xl text-gray-600">Transform your fashion business with AI-powered virtual try-on</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {brandBenefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-white">
                      {benefit.icon}
              </div>
                  </motion.div>
                  <motion.div 
                    className="text-4xl font-bold text-[#0B3D91] mb-2"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {benefit.percentage}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
            </div>
              </motion.div>
          ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] rounded-3xl p-12 text-center text-white shadow-2xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#00FFFF] opacity-10 rounded-full translate-y-24 -translate-x-24"></div>
          
          <div className="relative z-10">
            <motion.h2 
              className="text-3xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Ready to Revolutionize Your{' '}
              <span className="bg-gradient-to-r from-white to-[#00FFFF] bg-clip-text text-transparent">
                Fashion Business?
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Join leading fashion brands that are already using our AI try-on technology to boost sales and reduce returns.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button 
                className="bg-white text-[#0B3D91] hover:bg-gray-100 font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
              >
                Book a Demo
              </motion.button>
              <motion.button 
                className="border-2 border-white text-white hover:bg-white hover:text-[#0B3D91] font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
              >
                Try Now
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Product;
