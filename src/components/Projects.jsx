import React from 'react';
import { FaCar, FaRobot, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Projects() {
  const projects = [
    {
      title: 'Autonomous Car',
      description: 'Built a small-scale autonomous car using IR sensors for obstacle detection and path following with efficient navigation algorithms.',
      icon: <FaCar className="text-5xl text-blue-400" />,
      technologies: ['Arduino', 'IR Sensors', 'C++'],
    },
    {
      title: 'Student Management System',
      description: 'Developed a student management system using Java GUI and a simple Model-View-Controller architecture to efficiently manage student data.',
      icon: <FaLaptopCode className="text-5xl text-emerald-400" />,
      technologies: ['Java', 'Swing', 'MVC'],
    },
    {
      title: 'Customized Chatbot',
      description: 'Created a customized chatbot utilizing GPT APIs and integrated it with various platforms to provide seamless user interactions.',
      icon: <FaRobot className="text-5xl text-yellow-400" />,
      technologies: ['GPT APIs', 'API Integration', 'JavaScript'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
        </div>

        {/* Responsive Grid Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-2xl shadow-xl border border-blue-500/10 hover:scale-105 transition-transform"
            >
              <div className="h-48 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="bg-blue-500/10 px-3 py-1 rounded-full text-sm text-blue-400">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
