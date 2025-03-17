import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: "Freelancer.com",
    position: "Full-Stack Developer",
    duration: "Jun 2023 - Present",
    description: "Developing and maintaining full-stack web applications with a focus on performance and scalability. Collaborating with clients to deliver customized solutions.",
  },
  {
    id: 2,
    company: "SpotTroop",
    position: "Software Engineer Intern",
    duration: "Apr 2023 - Apr 2024",
    description: "Contributed to the development of software solutions, participated in code reviews, and assisted in debugging and testing applications.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>
        </div>

        {/* Responsive Grid Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-2xl p-6 shadow-xl border border-blue-500/10 hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-slate-50">{exp.position}</h3>
              <p className="text-blue-400 font-medium">{exp.company} &middot; {exp.duration}</p>
              <p className="mt-4 text-slate-300">{exp.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
