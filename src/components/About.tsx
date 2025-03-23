import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImage from '../assets/rabielakhdar.png';
import { Code2, Brain, Smartphone, Database, Users, Trophy, Rocket, BookOpen } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="about" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-16"
        >
          <motion.div variants={itemVariants} className="text-center">
            <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium mb-5">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Turning Vision Into Reality
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl transform rotate-6 opacity-20"></div>
              <img
                src={profileImage}
                alt="Rabie Lakhdar - Senior Full Stack JavaScript Developer"
                className="relative rounded-3xl shadow-xl w-full max-w-md mx-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="space-y-8">
              <motion.p variants={itemVariants} className="text-xl text-gray-700 leading-relaxed">
                With over 8 years of experience in crafting innovative mobile and web applications,
                I specialize in delivering high-impact solutions for banks and insurance companies
                as a Senior Full Stack JavaScript Developer.
              </motion.p>

              <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Users className="w-8 h-8 text-indigo-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">15+</h3>
                  <p className="text-gray-600">Projects Delivered</p>
                </div>
                <div className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                  <Trophy className="w-8 h-8 text-indigo-600 mb-2" />
                  <h3 className="font-semibold text-gray-900">8+</h3>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <Rocket className="text-indigo-600" />
                    Technical Expertise
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                      <Code2 className="text-indigo-600" />
                      <span>React & Next.js</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                      <Smartphone className="text-indigo-600" />
                      <span>React Native</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                      <Database className="text-indigo-600" />
                      <span>Node.js Backend</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-3 rounded-lg shadow-sm">
                      <Brain className="text-indigo-600" />
                      <span>AI & Automation</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                    <BookOpen className="text-indigo-600" />
                    Professional Growth
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      Mentored junior developers and led team initiatives
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      Implemented cutting-edge technologies in production
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                      Optimized development workflows and processes
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;