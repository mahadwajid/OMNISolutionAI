import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Home = () => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
       <section className="relative overflow-hidden py-24 lg:py-32">
                   {/* Enhanced Animated Background Elements */}
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
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-[#00FFFF] to-[#0B3D91] opacity-5 rounded-full blur-3xl"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.4, 1],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>

            {/* Enhanced Particle System */}
            {[...Array(8)].map((_, i) => (
              <motion.div 
                key={i}
                className={`absolute w-${i % 3 === 0 ? '2' : i % 3 === 1 ? '1' : '1.5'} h-${i % 3 === 0 ? '2' : i % 3 === 1 ? '1' : '1.5'} bg-gradient-to-r from-[#00FFFF] to-[#6C63FF] rounded-full opacity-60`}
                style={{
                  top: `${20 + i * 10}%`,
                  left: `${15 + i * 12}%`,
                }}
                animate={{
                  y: [0, -120 - i * 10, 0],
                  x: [0, 60 + i * 5, 0],
                  opacity: [0.6, 1, 0.6],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 8 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
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
                duration: 10,
                repeat: Infinity,
                ease: "linear"
              }}
            ></motion.div>

            <motion.div 
              className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-[#6C63FF] opacity-50 transform rotate-45"
              animate={{
                rotate: [45, 405],
                scale: [1, 0.8, 1],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            ></motion.div>

            {/* Enhanced Grid Pattern with Animation */}
            <motion.div 
              className="absolute inset-0 opacity-5"
              animate={{
                opacity: [0.05, 0.1, 0.05],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #0B3D91 1px, transparent 0)`,
                backgroundSize: '50px 50px'
              }}></div>
            </motion.div>

            {/* Dynamic Gradient Mesh */}
            <motion.div 
              className="absolute top-0 left-0 w-full h-full opacity-20"
              style={{
                background: `radial-gradient(circle at 20% 80%, #0B3D91 0%, transparent 50%),
                            radial-gradient(circle at 80% 20%, #6C63FF 0%, transparent 50%),
                            radial-gradient(circle at 40% 40%, #00FFFF 0%, transparent 50%)`
              }}
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>

            {/* Enhanced Animated Lines */}
            <motion.div 
              className="absolute top-1/4 right-1/4 w-32 h-px bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            ></motion.div>
            
            <motion.div 
              className="absolute bottom-1/3 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-[#6C63FF] to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 1, 0],
                y: [0, 5, 0],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            ></motion.div>

            {/* Additional Animated Lines */}
            <motion.div 
              className="absolute top-1/2 left-1/6 w-20 h-px bg-gradient-to-r from-transparent via-[#0B3D91] to-transparent"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.8, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            ></motion.div>

            {/* Floating Energy Orbs */}
            <motion.div 
              className="absolute top-1/6 right-1/6 w-4 h-4 bg-[#00FFFF] rounded-full opacity-70 shadow-lg shadow-[#00FFFF]/50"
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5
              }}
            ></motion.div>

            <motion.div 
              className="absolute bottom-1/6 left-1/6 w-3 h-3 bg-[#6C63FF] rounded-full opacity-80 shadow-lg shadow-[#6C63FF]/50"
              animate={{
                y: [0, 35, 0],
                x: [0, -15, 0],
                scale: [1, 1.4, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 11,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 7
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
                duration: 4,
                repeat: Infinity,
                ease: "easeOut"
              }}
            ></motion.div>

            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-[#00FFFF] rounded-full opacity-40"
              animate={{
                scale: [1, 1.8, 1],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeOut",
                delay: 2
              }}
            ></motion.div>
            </div>

        <div className="container-custom relative z-10">
          <motion.div 
            className="text-center"
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
              AI-Powered Virtual Try-On Technology
            </motion.div>

            <motion.h1 
              className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Revolutionizing{' '}
              <span className="bg-gradient-to-r from-[#0B3D91] via-[#6C63FF] to-[#00FFFF] bg-clip-text text-transparent">
                Fashion
              </span>{' '}
              with AI
            </motion.h1>

            <motion.p 
              className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              OmniSolveAI helps fashion brands increase sales and customer trust with cutting-edge virtual try-on technology.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button 
                className="group relative px-8 py-4 bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
              >
                <span className="relative z-10">Book a Demo</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6C63FF] to-[#00FFFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button 
                className="px-8 py-4 bg-white text-[#0B3D91] rounded-xl font-semibold text-lg border-2 border-[#0B3D91] hover:bg-[#0B3D91] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/contact')}
              >
                Try Now
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

             {/* Stats Dashboard Section */}
       <section className="relative py-20 bg-white/80 backdrop-blur-sm overflow-hidden">
                   {/* Enhanced Background Animation for Stats Section */}
          <div className="absolute inset-0">
            {/* Dynamic floating elements */}
            <motion.div 
              className="absolute top-10 right-20 w-16 h-16 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-5 rounded-full"
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            ></motion.div>
            
            <motion.div 
              className="absolute bottom-10 left-20 w-12 h-12 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] opacity-5 rounded-full"
              animate={{
                y: [0, 25, 0],
                rotate: [0, -180, -360],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
            ></motion.div>

            {/* Additional floating elements */}
            <motion.div 
              className="absolute top-1/3 left-10 w-8 h-8 bg-[#00FFFF] opacity-30 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, 15, 0],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
            ></motion.div>

            <motion.div 
              className="absolute bottom-1/3 right-10 w-6 h-6 bg-[#6C63FF] opacity-40 rounded-full"
              animate={{
                y: [0, 18, 0],
                x: [0, -12, 0],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 5
              }}
            ></motion.div>

            {/* Animated grid pattern */}
            <motion.div 
              className="absolute inset-0 opacity-3"
              animate={{
                opacity: [0.03, 0.06, 0.03],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(11, 61, 145, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(11, 61, 145, 0.1) 1px, transparent 1px)`,
                backgroundSize: '100px 100px'
              }}></div>
            </motion.div>

            {/* Subtle energy waves */}
            <motion.div 
              className="absolute top-1/4 left-1/4 w-24 h-px bg-gradient-to-r from-transparent via-[#0B3D91] to-transparent opacity-30"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            ></motion.div>

            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-20 h-px bg-gradient-to-r from-transparent via-[#00FFFF] to-transparent opacity-25"
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.25, 0],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
            ></motion.div>
          </div>
        <div className="container-custom">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Transform Your{' '}
              <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
                Fashion Business
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See the impact of AI-powered virtual try-on technology
            </p>
          </motion.div>
          
          <motion.div 
            className="grid lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Save 30% Returns */}
            <motion.div 
              className="group relative p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-green-600 opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </motion.div>
                <h3 className="text-3xl font-bold text-green-700 mb-2">Save 30%</h3>
                <p className="text-xl font-semibold text-green-800 mb-4">Returns</p>
                <p className="text-gray-600 leading-relaxed">Reduce return rates with accurate virtual try-on experiences that boost customer confidence.</p>
              </div>
            </motion.div>
            
            {/* Boost Conversions 25% */}
            <motion.div 
              className="group relative p-8 bg-gradient-to-br from-white to-blue-50 rounded-2xl border border-blue-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
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
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </motion.div>
                <h3 className="text-3xl font-bold text-[#0B3D91] mb-2">Boost 25%</h3>
                <p className="text-xl font-semibold text-[#6C63FF] mb-4">Conversions</p>
                <p className="text-gray-600 leading-relaxed">Increase sales with confident purchase decisions powered by realistic virtual try-on.</p>
            </div>
            </motion.div>
            
            {/* Trusted Growth */}
            <motion.div 
              className="group relative p-8 bg-gradient-to-br from-white to-purple-50 rounded-2xl border border-purple-100 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                </motion.div>
                <h3 className="text-3xl font-bold text-[#6C63FF] mb-2">Trusted</h3>
                <p className="text-xl font-semibold text-[#00FFFF] mb-4">Growth</p>
                <p className="text-gray-600 leading-relaxed">Build customer trust with reliable AI technology that delivers consistent results.</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
