import React from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-slate-950 py-8 px-8 text-center border-t border-blue-500/10">
      <div className="mb-4">
        <p className="text-slate-400">Follow me on social media</p>
      </div>
      <div className="flex justify-center gap-8 mb-6">
        <motion.a 
          whileHover={{ scale: 1.2 }}
          href="https://github.com/fawadeqbal" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full text-slate-50"
        >
          <Github size={32} className="hover:text-blue-400 transition-colors" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.2 }}
          href="https://linkedin.com/in/fawadeqbal" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full text-slate-50"
        >
          <Linkedin size={32} className="hover:text-blue-400 transition-colors" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.2 }}
          href="https://twitter.com/fawadeqbal" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full text-slate-50"
        >
          <Twitter size={32} className="hover:text-blue-400 transition-colors" />
        </motion.a>
        <motion.a 
          whileHover={{ scale: 1.2 }}
          href="https://instagram.com/fawadeqbal" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full text-slate-50"
        >
          <Instagram size={32} className="hover:text-blue-400 transition-colors" />
        </motion.a>
      </div>
      <p className="text-slate-500">&copy; 2025. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
