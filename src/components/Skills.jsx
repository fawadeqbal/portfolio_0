import React from 'react';
import { FaCode, FaMicrochip, FaBrain, FaTools } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Skills() {
  const skillsData = [
    {
      title: "Web Development",
      description: "Developing modern, responsive web applications using cutting-edge technologies.",
      skills: ['React', 'Node.js', 'Express', 'MongoDB', 'Spring Boot', 'REST API', 'JavaScript', 'HTML/CSS'],
      icon: <FaCode className="text-2xl" />,
    },
    {
      title: "Backend Development",
      description: "Building scalable and efficient server-side solutions with microservices.",
      skills: ['Microservices', 'Spring Boot', 'GraphQL', 'SQL', 'Redis', 'Docker', 'Kubernetes'],
      icon: <FaCode className="text-2xl" />,
    },
    {
      title: "Artificial Intelligence",
      description: "Implementing deep learning, computer vision, and NLP solutions.",
      skills: ['Deep Learning', 'Computer Vision', 'NLP', 'Transformers', 'PyTorch', 'TensorFlow'],
      icon: <FaBrain className="text-2xl" />,
    },
    {
      title: "IoT & Embedded Systems",
      description: "Designing smart devices and embedded systems for innovative applications.",
      skills: ['Raspberry Pi', 'Arduino', 'ESP32', 'MQTT', 'Embedded C', 'Edge Computing'],
      icon: <FaMicrochip className="text-2xl" />,
    },
    {
      title: "Automation & DevOps",
      description: "Streamlining processes and CI/CD pipelines for faster development cycles.",
      skills: ['Selenium', 'TestNG', 'Jenkins', 'CI/CD', 'Make.com', 'n8n'],
      icon: <FaTools className="text-2xl" />,
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent"
          >
            My Skills
          </motion.h2>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index} 
              title={category.title} 
              description={category.description}
              skills={category.skills} 
              icon={category.icon} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ title, description, skills, icon }) {
  return (
    <motion.div
      initial={{ scale: 0.95, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-blue-500/10 hover:scale-105 transition-transform"
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="text-blue-400">{icon}</div>
        <h3 className="text-xl text-blue-400">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.span 
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-blue-500/10 px-4 py-2 rounded-full text-sm text-slate-300"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
