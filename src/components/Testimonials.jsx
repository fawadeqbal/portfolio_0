import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Acme Corp",
    image: "/path/to/image1.jpg", // Update with actual image path
    text: "Working with DevName was a fantastic experience. The project was delivered on time with outstanding quality!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, Beta Inc",
    image: "/path/to/image2.jpg", // Update with actual image path
    text: "I highly recommend DevName for any development project. Innovative solutions and superb support.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Lead Developer, Gamma Tech",
    image: "/path/to/image3.jpg", // Update with actual image path
    text: "His expertise in full-stack and IoT projects was key to our success. Truly a pleasure to collaborate with.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Testimonials
          </motion.h2>
          <p className="text-slate-400 mt-4">What clients and colleagues say about my work</p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900 border border-blue-500/10 p-6 rounded-xl shadow-xl hover:scale-105 transition-transform"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} picture`}
                  className="w-12 h-12 rounded-full object-cover border border-blue-400"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-blue-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-slate-300 italic">"{testimonial.text}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
