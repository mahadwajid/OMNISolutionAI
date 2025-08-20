import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
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

  const formVariants = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  };

  const infoVariants = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 }
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send form data to backend endpoint that uses Nodemailer
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          message: formData.message,
          to: 'mahadwajid613@gmail.com'
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      content: 'info@omnisolveai.digital',
      link: 'mailto:info@omnisolveai.digital'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '0300-1016022',
      link: 'tel:0300-1016022'
    },
    {
      icon: '📍',
      title: 'Address',
      content: 'Lahore, Pakistan',
      link: null
    },
    {
      icon: '⏰',
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM PKT',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20">
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Dynamic Floating Orbs - More Intense */}
        <motion.div 
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-15 rounded-full blur-3xl"
          animate={{
            y: [0, -80, 0],
            x: [0, 40, 0],
            scale: [1, 1.4, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] opacity-15 rounded-full blur-3xl"
          animate={{
            y: [0, 60, 0],
            x: [0, -35, 0],
            scale: [1, 0.7, 1],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>

        {/* Enhanced Particle System - More Particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute w-${i % 4 === 0 ? '3' : i % 4 === 1 ? '2' : i % 4 === 2 ? '1.5' : '1'} h-${i % 4 === 0 ? '3' : i % 4 === 1 ? '2' : i % 4 === 2 ? '1.5' : '1'} bg-gradient-to-r from-[#00FFFF] to-[#6C63FF] rounded-full opacity-70`}
            style={{
              top: `${20 + i * 8}%`,
              left: `${15 + i * 12}%`,
            }}
            animate={{
              y: [0, -120 - i * 10, 0],
              x: [0, 60 + i * 4, 0],
              opacity: [0.7, 1, 0.7],
              scale: [1, 1.6, 1],
            }}
            transition={{
              duration: 12 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2
            }}
          ></motion.div>
        ))}

        {/* Multiple Animated Geometric Shapes */}
        {[...Array(4)].map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute border-2 border-[#00FFFF] opacity-50 ${i % 2 === 0 ? 'w-8 h-8' : 'w-6 h-6'}`}
            style={{
              top: `${30 + i * 15}%`,
              right: `${20 + i * 10}%`,
            }}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.9, 0.5],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5
            }}
          ></motion.div>
        ))}

        {/* Multiple Pulsing Rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute border border-[#0B3D91] rounded-full opacity-40 ${i === 0 ? 'w-16 h-16' : i === 1 ? 'w-24 h-24' : 'w-32 h-32'}`}
            style={{
              top: `${25 + i * 20}%`,
              left: `${15 + i * 5}%`,
            }}
            animate={{
              scale: [1, 2.5, 1],
              opacity: [0.4, 0, 0.4],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 1
            }}
          ></motion.div>
        ))}

        {/* Enhanced Grid Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-8"
          animate={{
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #0B3D91 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </motion.div>

        {/* Floating Energy Orbs */}
        {[...Array(6)].map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-[#00FFFF] to-[#6C63FF] rounded-full opacity-80"
            style={{
              top: `${40 + i * 10}%`,
              left: `${60 + i * 8}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.5, 1],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
          ></motion.div>
        ))}
        </div>

      <div className="container-custom relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] text-white rounded-full text-sm font-medium mb-8 shadow-lg"
          >
            <span className="w-3 h-3 bg-[#00FFFF] rounded-full mr-3 animate-pulse"></span>
            Let's Connect
          </motion.div>

          <motion.h1 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Get in{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] via-[#6C63FF] to-[#00FFFF] bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          <motion.p 
            className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Ready to transform your fashion business with AI-powered virtual try-on? 
            We'd love to hear from you and discuss how OmniSolveAI can help you grow.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Enhanced Contact Form */}
          <div className="relative">
            <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-10 border border-gray-100 overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-10 rounded-full -translate-y-20 translate-x-20"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-[#6C63FF] to-[#00FFFF] opacity-10 rounded-full translate-y-16 -translate-x-16"></div>
              
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  Send us a{' '}
                  <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
                    Message
                  </span>
                </h2>
                
                {/* Enhanced Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div 
                    className="mb-8 p-6 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center">
                      <motion.div 
                        className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      <span className="text-green-700 font-medium text-lg">Message sent successfully! We'll get back to you soon.</span>
                    </div>
                  </motion.div>
                )}
                
                {submitStatus === 'error' && (
                  <motion.div 
                    className="mb-8 p-6 bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 rounded-2xl shadow-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center">
                      <motion.div 
                        className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mr-4"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                      </motion.div>
                      <span className="text-red-700 font-medium text-lg">Failed to send message. Please try again.</span>
                    </div>
                  </motion.div>
                )}

                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#0B3D91]/20 focus:border-[#0B3D91] transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#0B3D91]/20 focus:border-[#0B3D91] transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="your.email@company.com"
                  />
              </div>

                <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-3">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#0B3D91]/20 focus:border-[#0B3D91] transition-all duration-300 bg-white/80 backdrop-blur-sm"
                    placeholder="Your company name"
                  />
              </div>

              <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-[#0B3D91]/20 focus:border-[#0B3D91] transition-all duration-300 bg-white/80 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] hover:from-[#0a2f7a] hover:to-[#5a52e0] text-white font-semibold text-lg py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div 
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3 animate-spin"
                        />
                        Sending...
                      </div>
                    ) : (
                      'Send Message'
                    )}
              </button>
            </form>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Information */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Contact{' '}
                <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
                  Information
                </span>
              </h2>
          <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="flex items-start group"
                  >
                    <div className="text-3xl mr-6 p-3 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] rounded-2xl text-white shadow-lg">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-lg">{info.title}</h3>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="text-[#0B3D91] hover:text-[#6C63FF] transition-colors text-lg font-medium"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-lg">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Quick Questions */}
            <div className="bg-gradient-to-br from-white/90 to-blue-50/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Quick{' '}
                <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
                  Questions?
                </span>
              </h3>
              <div className="space-y-4">
                {[
                  'How quickly can we implement AI try-on?',
                  'What fashion platforms do you support?',
                  'Do you offer custom AI model training?'
                ].map((question, index) => (
                  <div 
                    key={index}
                    className="flex items-center text-gray-700 group"
                  >
                    <div className="w-6 h-6 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                    <span className="text-lg">{question}</span>
                </div>
                ))}
                </div>
            </div>

            {/* Enhanced Social Media */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Follow{' '}
                <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
                  Us
                </span>
              </h3>
              <div className="flex space-x-6">
                {[
                  { icon: 'Twitter', color: 'from-blue-400 to-blue-600' },
                  { icon: 'LinkedIn', color: 'from-blue-600 to-blue-800' },
                  { icon: 'Facebook', color: 'from-purple-500 to-purple-700' }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href="#" 
                    className={`w-16 h-16 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default Contact;
