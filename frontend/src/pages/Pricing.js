import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const navigate = useNavigate();
  const [isAnnual, setIsAnnual] = useState(false);

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

  const plans = [
    {
      name: 'Starter',
      description: 'For Small Boutiques',
      monthlyPrice: 'PKR 25,000',
      annualPrice: 'PKR 20,000',
      features: [
        'Up to 500 virtual try-ons/month',
        'Basic AI processing',
        'Standard customer support',
        'Mobile app integration',
        'Basic analytics dashboard',
        'Email support'
      ],
      popular: false,
      color: 'primary'
    },
    {
      name: 'Professional',
      description: 'For E-Commerce Brands',
      monthlyPrice: 'PKR 75,000',
      annualPrice: 'PKR 60,000',
      features: [
        'Up to 5,000 virtual try-ons/month',
        'Advanced AI processing',
        'Priority customer support',
        'Full e-commerce integration',
        'Advanced analytics & insights',
        'Custom branding options',
        'API access',
        'Phone & email support'
      ],
      popular: true,
      color: 'secondary'
    },
    {
      name: 'Enterprise',
      description: 'Custom',
      monthlyPrice: 'PKR 150,000',
      annualPrice: 'PKR 120,000',
      features: [
        'Unlimited virtual try-ons',
        'Custom AI model training',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced reporting suite',
        'White-label solution',
        'Custom feature development',
        'Dedicated account manager',
        'SLA guarantee'
      ],
      popular: false,
      color: 'accent'
    }
  ];

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
            Pricing Plans
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Choose Your{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] via-[#6C63FF] to-[#00FFFF] bg-clip-text text-transparent">
              Plan
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your fashion business with AI-powered virtual try-on technology. 
            Select the perfect plan for your needs.
          </motion.p>
          
          {/* Billing Toggle */}
          <motion.div 
            className="flex items-center justify-center space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <span className={`text-lg ${!isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-gradient-to-r from-[#0B3D91] to-[#6C63FF]' : 'bg-gray-200'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="inline-block h-4 w-4 rounded-full bg-white"
                animate={{
                  x: isAnnual ? 20 : 4
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
            <span className={`text-lg ${isAnnual ? 'text-gray-900 font-semibold' : 'text-gray-600'}`}>
              Annual
              <span className="ml-2 text-sm text-[#0B3D91] font-medium">Save 20%</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative group ${
                plan.popular 
                  ? 'scale-105' 
                  : ''
              }`}
              variants={cardVariants}
              whileHover="hover"
            >
              {plan.popular && (
                <motion.div 
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="bg-gradient-to-r from-[#6C63FF] to-[#00FFFF] text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg">
                    Most Popular
                  </span>
                </motion.div>
              )}

              <motion.div
                className={`relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-white/95 to-blue-50/95 border-2 border-[#6C63FF]/20' 
                    : ''
                }`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative z-10">
              <div className="text-center">
                    <motion.h3 
                      className="text-2xl font-bold text-gray-900 mb-2"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {plan.name}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-600 mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {plan.description}
                    </motion.p>
                    
                    <motion.div 
                      className="mb-8"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-4xl font-bold text-[#0B3D91]">
                        {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-600">/month</span>
                  {isAnnual && (
                    <div className="text-sm text-gray-500 mt-1">
                          Billed annually
                    </div>
                  )}
                    </motion.div>

                    <motion.ul 
                      className="space-y-4 mb-8 text-left"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                  {plan.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.1 + featureIndex * 0.05 }}
                          viewport={{ once: true }}
                        >
                          <motion.svg 
                            className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                              plan.popular ? 'text-[#6C63FF]' : 'text-[#0B3D91]'
                            }`} 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            whileHover={{ scale: 1.2 }}
                            transition={{ duration: 0.2 }}
                          >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </motion.svg>
                      <span className="text-gray-700">{feature}</span>
                        </motion.li>
                  ))}
                    </motion.ul>

                    <motion.button
                      className={`w-full py-3 px-6 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl ${
                    plan.popular
                          ? 'bg-gradient-to-r from-[#6C63FF] to-[#00FFFF] hover:from-[#5a52e0] hover:to-[#00e6e6] text-white'
                          : 'bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] hover:from-[#0a2f7a] hover:to-[#5a52e0] text-white'
                  }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => navigate('/contact')}
                >
                      Choose Plan
                    </motion.button>
              </div>
            </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Frequently Asked{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
              Questions
            </span>
          </motion.h2>
          <motion.div 
            className="max-w-4xl mx-auto space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                question: 'How does the virtual try-on technology work?',
                answer: 'Our AI analyzes customer photos and garment images to create realistic virtual try-ons, helping customers make confident purchase decisions.'
              },
              {
                question: 'Can I integrate this with my existing e-commerce platform?',
                answer: 'Yes, we offer integrations with major e-commerce platforms like Shopify, WooCommerce, and custom solutions for enterprise clients.'
              },
              {
                question: 'Is there a free trial available?',
                answer: 'Yes, we offer a 14-day free trial for all plans. No credit card required to start your trial.'
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for annual plans.'
              },
              {
                question: 'Do you offer custom pricing for large organizations?',
                answer: 'Yes, our Enterprise plan includes custom pricing and features. Contact our sales team for a personalized quote.'
              }
            ].map((faq, index) => (
              <motion.div 
                key={index} 
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                whileHover="hover"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
              Fashion Business?
            </span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Join leading fashion brands that are already using our AI try-on technology.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] hover:from-[#0a2f7a] hover:to-[#5a52e0] text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Book a Demo
            </motion.button>
            <motion.button 
              className="border-2 border-[#0B3D91] text-[#0B3D91] hover:bg-[#0B3D91] hover:text-white font-medium py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/contact')}
            >
              Contact Sales
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing;
