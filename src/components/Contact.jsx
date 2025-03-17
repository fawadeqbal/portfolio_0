import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add form validation or connect to a backend service
    console.log('Form data:', formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold inline-block bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl p-8 shadow-xl border border-blue-500/10"
        >
          {isSubmitted ? (
            <div className="text-center text-xl text-green-400">Thank you for your message!</div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  className="w-full px-4 py-3 rounded-lg border border-blue-500/20 bg-slate-900/70 text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  required
                />
              </div>
              <div className="mb-5">
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  className="w-full px-4 py-3 rounded-lg border border-blue-500/20 bg-slate-900/70 text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  required
                />
              </div>
              <div className="mb-5">
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  className="w-full px-4 py-3 rounded-lg border border-blue-500/20 bg-slate-900/70 text-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-h-[150px] resize-y"
                  required
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                type="submit" 
                className="bg-gradient-to-r from-blue-400 to-emerald-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:transform hover:-translate-y-1 transition-all hover:shadow-xl hover:shadow-blue-500/50"
              >
                Send Message
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
