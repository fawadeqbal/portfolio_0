import React, { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form data:', formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Contact Me
          </motion.h2>
        </div>

        {/* Responsive Grid Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
        >
          {/* Contact Form */}
          <div className="bg-gray-900 border border-blue-500/10 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform">
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
                    className="w-full px-4 py-3 rounded-lg border border-blue-500/20 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
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
                    className="w-full px-4 py-3 rounded-lg border border-blue-500/20 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                    required
                  />
                </div>
                <div className="mb-5">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="w-full px-4 py-3 rounded-lg border border-blue-500/20 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 min-h-[150px] resize-y"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  type="submit"
                  className="bg-gradient-to-r from-blue-400 to-emerald-500 text-white px-7 py-3 rounded-full font-semibold shadow-lg hover:transform hover:-translate-y-1 transition-all hover:shadow-xl hover:shadow-blue-500/50"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </div>

          {/* Additional Contact Info (For Large Screens) */}
          <div className="bg-gray-900 border border-blue-500/10 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform hidden md:block">
            <h3 className="text-xl font-semibold text-white mb-4">Get in Touch</h3>
            <p className="text-gray-400 mb-4">
              Feel free to reach out for collaborations or just a friendly hello!
            </p>
            <ul className="space-y-3">
              <li className="text-gray-300">📧 Email: fawadeqbal@gmail.com</li>
              <li className="text-gray-300">📍 Location: Abbottabad, Pakistan</li>
              <li className="text-gray-300">📞 Phone: +92 314 9972883</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
