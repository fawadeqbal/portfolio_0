import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    role: "CEO, Acme Corp",
    image: "/path/to/image1.jpg", // Update with your image path
    text: "Working with DevName was a fantastic experience. The project was delivered on time with outstanding quality!",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "CTO, Beta Inc",
    image: "/path/to/image2.jpg", // Update with your image path
    text: "I highly recommend DevName for any development project. Innovative solutions and superb support.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Lead Developer, Gamma Tech",
    image: "/path/to/image3.jpg", // Update with your image path
    text: "His expertise in full-stack and IoT projects was key to our success. Truly a pleasure to collaborate with.",
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold inline-block bg-gradient-to-r from-blue-400 to-emerald-500 bg-clip-text text-transparent"
          >
            Testimonials
          </motion.h2>
          <p className="text-slate-400 mt-4">
            What clients and colleagues say about my work
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-slate-700 to-slate-900 rounded-2xl overflow-hidden shadow-xl border border-blue-500/10 hover:scale-105 transition-transform p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name} picture`}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-slate-50">{testimonial.name}</h3>
                  <p className="text-sm text-slate-400">{testimonial.role}</p>
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
