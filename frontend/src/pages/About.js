import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
            About Our Company
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            About{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] via-[#6C63FF] to-[#00FFFF] bg-clip-text text-transparent">
              OmniSolveAI
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are revolutionizing the fashion industry with cutting-edge AI-powered virtual try-on technology 
            that transforms how customers shop and how brands grow.
          </motion.p>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div 
          className="grid md:grid-cols-2 gap-12 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <motion.div 
            className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#0B3D91]">Our Vision</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                To make fashion shopping effortless, interactive, and intelligent.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="relative z-10">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] rounded-2xl flex items-center justify-center mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-bold mb-4 text-[#6C63FF]">Our Mission</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                We empower brands with AI solutions to improve customer experience and scale globally.
            </p>
          </div>
          </motion.div>
        </motion.div>

        {/* CEO Section */}
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
            Our{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
              Leadership
            </span>
          </motion.h2>
          <motion.div 
            className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-gray-100 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-5 rounded-full -translate-y-32 translate-x-32"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] opacity-5 rounded-full translate-y-24 -translate-x-24"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
              <motion.div 
                className="text-center md:text-left"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.h3 
                  className="text-3xl font-bold text-gray-900 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Amina Riaz
                </motion.h3>
                <motion.p 
                  className="text-xl text-[#0B3D91] font-semibold mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Founder & CEO
                </motion.p>
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  Amina is a visionary leader with over 15 years of experience in AI and fashion technology. 
                  She founded OmniSolveAI with the mission to bridge the gap between fashion retail and 
                  artificial intelligence, creating innovative solutions that enhance customer experiences 
                  and drive business growth.
                </motion.p>
                <motion.p 
                  className="text-gray-600 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  Under her leadership, OmniSolveAI has become a trusted partner for leading fashion brands 
                  worldwide, helping them reduce returns by 30% and increase conversions by 25% through 
                  our cutting-edge virtual try-on technology.
                </motion.p>
              </motion.div>
              <motion.div 
                className="flex justify-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.div 
                  className="w-80 h-80 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] rounded-full flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="w-72 h-72 bg-white rounded-full flex items-center justify-center shadow-lg"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-center">
                      <motion.div 
                        className="w-24 h-24 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </motion.div>
                      <p className="text-sm text-gray-500">CEO Photo</p>
                      <p className="text-xs text-gray-400">Placeholder</p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
        </div>
          </motion.div>
        </motion.div>

        {/* Values */}
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
            Our Core{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
              Values
            </span>
          </motion.h2>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div 
              className="group relative text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-[#0B3D91]">Innovation</h3>
                <p className="text-gray-600">Constantly pushing boundaries to create cutting-edge AI solutions</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-[#6C63FF]">Customer Focus</h3>
                <p className="text-gray-600">Putting customer experience at the heart of everything we do</p>
              </div>
            </motion.div>

            <motion.div 
              className="group relative text-center bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#00FFFF] to-[#0B3D91] opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
              <div className="relative z-10">
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-[#00FFFF] to-[#0B3D91] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-[#00FFFF]">Excellence</h3>
                <p className="text-gray-600">Delivering the highest quality AI solutions and service</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Team */}
        <motion.div
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
            Our{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
              Team
            </span>
          </motion.h2>
          <motion.p 
            className="text-center text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Our team consists of experienced AI engineers, fashion technologists, and business 
            experts who are passionate about revolutionizing the fashion industry.
          </motion.p>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'Dr. Sarah Chen', role: 'Chief AI Officer', image: '👩‍💼' },
              { name: 'Michael Rodriguez', role: 'Head of Engineering', image: '👨‍💻' },
              { name: 'Emily Watson', role: 'Fashion Technology Lead', image: '👩‍🔬' },
              { name: 'David Kim', role: 'Product Manager', image: '👨‍💼' }
            ].map((member, index) => (
              <motion.div 
                key={index} 
                className="group relative text-center bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
                variants={cardVariants}
                whileHover="hover"
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-10 rounded-full -translate-y-10 translate-x-10"></div>
                <div className="relative z-10">
                  <motion.div 
                    className="w-24 h-24 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] rounded-full flex items-center justify-center mx-auto mb-4 text-3xl shadow-lg"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                  {member.image}
                  </motion.div>
                  <h3 className="font-semibold mb-1 text-[#0B3D91]">{member.name}</h3>
                <p className="text-gray-600 text-sm">{member.role}</p>
              </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
