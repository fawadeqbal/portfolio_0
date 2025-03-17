import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: 1,
    company: "TechCorp",
    position: "Full-Stack Developer",
    duration: "Jan 2020 - Present",
    description: "Developed and maintained full-stack web applications with a focus on performance and scalability. Led cross-functional teams to deliver innovative solutions.",
  },
  {
    id: 2,
    company: "InnovateX",
    position: "IoT Specialist",
    duration: "Jun 2018 - Dec 2019",
    description: "Designed and implemented IoT solutions by integrating sensor networks with cloud analytics. Optimized systems for real-time processing and remote monitoring.",
  },
  {
    id: 3,
    company: "DevSolutions",
    position: "Software Engineer",
    duration: "Jan 2016 - May 2018",
    description: "Contributed to both frontend and backend development for diverse projects using modern web technologies.",
  },
];

function Experience() {
  return (
    <section id="experience" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold inline-block bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Experience
          </motion.h2>
        </div>
        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl overflow-hidden shadow-xl border border-blue-500/10 hover:scale-105 transition-transform p-6"
            >
              <h3 className="text-2xl font-semibold text-slate-50">{exp.position}</h3>
              <p className="text-blue-400 font-medium">{exp.company} &middot; {exp.duration}</p>
              <p className="mt-4 text-slate-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
