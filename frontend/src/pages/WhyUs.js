import React from 'react';
import { motion } from 'framer-motion';

const WhyUs = () => {
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
  const advantages = [
    {
      icon: '🚀',
      title: 'Cutting-Edge Technology',
      description: 'We use the latest AI and machine learning technologies to deliver superior results.',
      details: [
        'State-of-the-art algorithms',
        'Continuous innovation',
        'Industry-leading performance'
      ]
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Our team consists of experienced AI engineers, data scientists, and business experts.',
      details: [
        'PhD-level researchers',
        'Industry veterans',
        'Continuous learning culture'
      ]
    },
    {
      icon: '🛡️',
      title: 'Enterprise Security',
      description: 'Your data is protected with enterprise-grade security and compliance measures.',
      details: [
        'SOC 2 Type II certified',
        'GDPR compliant',
        'End-to-end encryption'
      ]
    },
    {
      icon: '⚡',
      title: 'Lightning Fast Performance',
      description: 'Our optimized infrastructure ensures rapid processing and real-time insights.',
      details: [
        '99.9% uptime guarantee',
        'Global CDN',
        'Auto-scaling infrastructure'
      ]
    },
    {
      icon: '🎯',
      title: 'Proven Results',
      description: 'We have helped hundreds of companies achieve measurable business outcomes.',
      details: [
        'Average 40% efficiency gain',
        '95% customer satisfaction',
        'ROI within 3 months'
      ]
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: 'Our customer success team is here to ensure your success every step of the way.',
      details: [
        '24/7 technical support',
        'Personal success manager',
        'Comprehensive training'
      ]
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime' },
    { number: '40%', label: 'Average Efficiency Gain' },
    { number: '24/7', label: 'Support' }
  ];

  const comparisonData = [
    {
      category: 'Features',
      feature: 'AI Try-On Accuracy',
      omniSolveAI: '95%',
      vueAI: '88%',
      zeekit: '85%',
      styleMe: '82%'
    },
    {
      category: 'Features',
      feature: 'Processing Speed',
      omniSolveAI: '< 3 seconds',
      vueAI: '5-8 seconds',
      zeekit: '6-10 seconds',
      styleMe: '8-12 seconds'
    },
    {
      category: 'Features',
      feature: 'Mobile App Support',
      omniSolveAI: '✅ Native Apps',
      vueAI: '✅ Web-based',
      zeekit: '❌ Limited',
      styleMe: '✅ Web-based'
    },
    {
      category: 'Features',
      feature: 'E-commerce Integration',
      omniSolveAI: 'All Platforms',
      vueAI: 'Major Platforms',
      zeekit: 'Limited',
      styleMe: 'Basic Integration'
    },
    {
      category: 'Features',
      feature: 'Custom Branding',
      omniSolveAI: '✅ Full Control',
      vueAI: '✅ Available',
      zeekit: '❌ Limited',
      styleMe: '✅ Available'
    },
    {
      category: 'Features',
      feature: 'API Access',
      omniSolveAI: '✅ RESTful API',
      vueAI: '✅ Available',
      zeekit: '❌ No',
      styleMe: '❌ No'
    },
    {
      category: 'Pricing',
      feature: 'Starter Plan',
      omniSolveAI: 'PKR 25,000',
      vueAI: '$500',
      zeekit: '$800',
      styleMe: '$400'
    },
    {
      category: 'Pricing',
      feature: 'Professional Plan',
      omniSolveAI: 'PKR 75,000',
      vueAI: '$1,500',
      zeekit: '$2,000',
      styleMe: '$1,200'
    },
    {
      category: 'Pricing',
      feature: 'Enterprise Plan',
      omniSolveAI: 'PKR 150,000',
      vueAI: '$3,000+',
      zeekit: '$4,000+',
      styleMe: '$2,500+'
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
            Why Choose Us
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Built for Pakistani & Global{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] via-[#6C63FF] to-[#00FFFF] bg-clip-text text-transparent">
              Fashion Market
            </span>
          </motion.h1>
          <motion.p 
            className="text-2xl font-semibold text-[#0B3D91] mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Affordable, Scalable, Secure
          </motion.p>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We're not just another AI company. We're your strategic partner in digital transformation, 
            committed to delivering exceptional value and results specifically designed for the fashion industry.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group"
              variants={cardVariants}
              whileHover="hover"
            >
              <motion.div 
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="text-4xl md:text-5xl font-bold text-[#0B3D91] mb-2"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                {stat.number}
                </motion.div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Unified Comparison Table */}
        <motion.div 
          className="mb-20"
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
            How We Compare to{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
              Competitors
            </span>
          </motion.h2>
          
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gradient-to-r from-[#0B3D91]/10 to-[#6C63FF]/10">
                  <tr>
                    <th className="px-8 py-6 text-left text-base font-bold text-gray-900 border-b border-gray-200">Features & Pricing</th>
                    <th className="px-8 py-6 text-center text-base font-bold text-[#0B3D91] bg-[#0B3D91]/10 border-b border-gray-200">OmniSolveAI</th>
                    <th className="px-8 py-6 text-center text-base font-bold text-gray-700 border-b border-gray-200">Vue.ai</th>
                    <th className="px-8 py-6 text-center text-base font-bold text-gray-700 border-b border-gray-200">Zeekit</th>
                    <th className="px-8 py-6 text-center text-base font-bold text-gray-700 border-b border-gray-200">Style.me</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {comparisonData.map((row, index) => (
                    <motion.tr 
                      key={index} 
                      className="hover:bg-gray-50/50 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <td className="px-8 py-6 text-base font-semibold text-gray-900 align-middle">
                        <div>
                          <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">{row.category}</span>
                          <div className="text-sm font-semibold text-gray-900 mt-1">{row.feature}</div>
            </div>
                      </td>
                      <td className="px-8 py-6 text-center text-base font-bold text-[#0B3D91] bg-[#0B3D91]/5 align-middle">{row.omniSolveAI}</td>
                      <td className="px-8 py-6 text-center text-base text-gray-700 align-middle">{row.vueAI}</td>
                      <td className="px-8 py-6 text-center text-base text-gray-700 align-middle">{row.zeekit}</td>
                      <td className="px-8 py-6 text-center text-base text-gray-700 align-middle">{row.styleMe}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
        </div>
          </motion.div>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative z-10">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-green-800 mb-2">Affordable Pricing</h3>
              <p className="text-green-700">Up to 60% more cost-effective than international competitors, designed for Pakistani market</p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative z-10">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-blue-800 mb-2">Local Support</h3>
              <p className="text-blue-700">24/7 support in Urdu/English, understanding of local fashion trends and business needs</p>
            </div>
          </motion.div>

          <motion.div 
            className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-400 to-purple-600 opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
            <div className="relative z-10">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
              </motion.div>
              <h3 className="text-xl font-bold text-purple-800 mb-2">Data Security</h3>
              <p className="text-purple-700">GDPR compliant, local data centers, and enterprise-grade security for customer privacy</p>
            </div>
          </motion.div>
        </motion.div>

    
      </div>
    </div>
  );
};

export default WhyUs;
