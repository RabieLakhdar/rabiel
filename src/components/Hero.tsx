import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Smartphone } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="home" className="min-h-screen pt-20 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-b from-indigo-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-5">
              Senior Full Stack Developer
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">rabiel.dev</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              Transforming ideas into exceptional digital experiences through cutting-edge technology 
              and innovative solutions.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-16">
            <a
              href="#contact"
              className="px-8 py-3 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get in Touch
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-6">
                <Code2 className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">SaaS Development</h3>
              <p className="text-gray-600">Building scalable and secure solutions tailored to your business needs</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-6">
                <Smartphone className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Mobile Development</h3>
              <p className="text-gray-600">Crafting intuitive iOS and Android applications with React Native</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-6">
                <Brain className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">AI & Automation</h3>
              <p className="text-gray-600">Implementing smart solutions to streamline your business processes</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-6">
                <Database className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Web3 & Blockchain</h3>
              <p className="text-gray-600">Building secure and innovative blockchain solutions</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;