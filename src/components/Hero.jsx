import React from "react";
import { motion } from "framer-motion";

function Hero() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 md:px-8 lg:px-16 text-center md:text-left"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path/to/your/hero-background.jpg)' }}>
        <div className="absolute inset-0 bg-blue/50"></div> {/* Overlay for better readability */}
      </div>

      {/* Content Container */}
      <div className="relative max-w-3xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-slate-50 to-blue-400 bg-clip-text text-transparent"
        >
          Full-Stack Developer & IoT Specialist
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl sm:text-2xl text-blue-400 mb-6"
        >
          Creating innovative solutions with cutting-edge technology
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl mx-auto md:mx-0 mb-8 opacity-90 text-base sm:text-lg"
        >
          I develop powerful web applications with MERN stack and Spring Boot, build smart IoT systems, and implement automation solutions to solve complex real-world problems.
        </motion.p>

        {/* Call to Action Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          onClick={scrollToContact}
          className="bg-gradient-to-r from-blue-400 to-emerald-500 text-white px-6 sm:px-7 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:transform hover:-translate-y-1 transition-all hover:shadow-xl hover:shadow-blue-500/50"
        >
          Get In Touch
        </motion.button>
      </div>
    </section>
  );
}

export default Hero;
