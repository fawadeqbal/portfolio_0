import React from 'react';
import { FaCar } from 'react-icons/fa';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold inline-block bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl overflow-hidden shadow-xl border border-blue-500/10 hover:scale-105 transition-transform"
        >
          <div className="h-48 flex items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900">
            <FaCar className="text-6xl bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-3">Autonomous Car</h3>
            <p className="mb-4">
              Built a small-scale autonomous car using IR sensors for obstacle detection and path following with efficient navigation algorithms.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm text-blue-400">Arduino</span>
              <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm text-blue-400">IR Sensors</span>
              <span className="bg-blue-500/10 px-3 py-1 rounded-full text-sm text-blue-400">C++</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
