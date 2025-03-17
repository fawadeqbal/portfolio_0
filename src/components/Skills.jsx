import React from 'react';
import { FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    'React', 'Node.js', 'Express', 'MongoDB', 'Spring Boot', 
    'REST API', 'JavaScript', 'HTML/CSS'
  ];

  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold inline-block bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent"
          >
            My Skills
          </motion.h2>
        </div>
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 shadow-xl border border-blue-500/10 hover:scale-105 transition-transform"
        >
          <h3 className="text-xl text-blue-400 mb-4 flex items-center gap-2">
            <FaCode /> Web Development
          </h3>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, index) => (
              <motion.span 
                key={index}
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500/10 px-4 py-2 rounded-full text-sm"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
