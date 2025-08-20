import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
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
  const testimonials = [
    {
      name: 'Fatima Ahmed',
      role: 'CEO',
      company: 'Pakistani Fashion House',
      image: '👩‍💼',
      content: 'This AI Try-On changed how our customers shop online. We\'ve seen a 40% reduction in returns and a 25% increase in sales since implementing OmniSolveAI.',
      rating: 5
    },
    {
      name: 'Aisha Khan',
      role: 'E-commerce Director',
      company: 'Desi Couture',
      image: '👩‍💼',
      content: 'The virtual try-on technology has transformed our customer experience. Our customers can now confidently purchase traditional wear online, knowing exactly how it will look.',
      rating: 5
    },
    {
      name: 'Zara Malik',
      role: 'Founder',
      company: 'Modern Pakistani Fashion',
      image: '👩‍💼',
      content: 'OmniSolveAI\'s technology has been a game-changer for our boutique. The AI accuracy is impressive and our customers love the interactive shopping experience.',
      rating: 5
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
            Client Testimonials
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            What Our{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] via-[#6C63FF] to-[#00FFFF] bg-clip-text text-transparent">
              Clients Say
            </span>
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Don't just take our word for it. Here's what fashion brands have to say about 
            their experience with OmniSolveAI's virtual try-on technology.
          </motion.p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-20"
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
                  key={index}
              className="group relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100 overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#0B3D91] to-[#6C63FF] opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  <motion.div 
                    className="text-3xl mr-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    {testimonial.image}
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-[#0B3D91]">{testimonial.company}</div>
                  </div>
                </div>
                
                <motion.div 
                  className="flex mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg 
                      key={i} 
                      className="w-5 h-5 text-[#00FFFF]" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 + index * 0.1 + i * 0.1 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </motion.div>
                
                <motion.blockquote 
                  className="text-gray-700 italic"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  "{testimonial.content}"
                </motion.blockquote>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Logos Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-2xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Trusted by Leading{' '}
            <span className="bg-gradient-to-r from-[#0B3D91] to-[#6C63FF] bg-clip-text text-transparent">
              Fashion Brands
            </span>
          </motion.h2>
          <motion.div 
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 shadow-xl border border-gray-100"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {[1, 2, 3, 4].map((logo, index) => (
                <motion.div 
                  key={index}
                  className="text-center group"
                  variants={cardVariants}
                  whileHover="hover"
                >
                  <motion.div 
                    className="w-32 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center mx-auto border border-gray-200 shadow-lg"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-gray-500 text-sm font-medium">Client Logo {logo}</span>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
};

export default Testimonials;
