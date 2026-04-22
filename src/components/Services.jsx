import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Handshake, Truck, Boxes, Users, ClipboardCheck } from 'lucide-react';

const services = [
  {
    title: 'Third Party Manufacturing',
    description: 'We offer high-quality manufacturing services for other brands with state-of-the-art facilities and strict adherence to quality standards.',
    icon: <Factory size={32} />,
    color: 'bg-blue-500'
  },
  {
    title: 'Contract Manufacturing',
    description: 'Specialized contract manufacturing solutions tailored to your specific formulation and packaging requirements.',
    icon: <Boxes size={32} />,
    color: 'bg-green-500'
  },
  {
    title: 'PCD Pharma Franchise',
    description: 'Join our growing network! We offer lucrative PCD franchise opportunities with full marketing and promotional support.',
    icon: <Handshake size={32} />,
    color: 'bg-purple-500'
  },
  {
    title: 'Product Distribution',
    description: 'Robust supply chain and distribution network ensuring timely delivery of products across diverse geographical locations.',
    icon: <Truck size={32} />,
    color: 'bg-orange-500'
  },
  {
    title: 'Quality Assurance',
    description: 'Every product undergoes rigorous testing and quality control measures to ensure safety and efficacy.',
    icon: <ClipboardCheck size={32} />,
    color: 'bg-red-500'
  },
  {
    title: 'Experienced Team',
    description: 'Our team of industry experts and scientists are dedicated to innovation and excellence in pharmaceutical science.',
    icon: <Users size={32} />,
    color: 'bg-teal-500'
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-white text-slate-900 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">What We Offer</h2>
          <h3 className="text-4xl font-bold mb-6 text-slate-900">Our Specialized Services</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Vynexia Lifesciences provides comprehensive solutions from manufacturing to distribution, backed by decades of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 backdrop-blur-sm border border-slate-100 p-8 rounded-3xl hover:bg-white hover:shadow-2xl hover:shadow-primary/5 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-4 text-slate-900">{service.title}</h4>
              <p className="text-slate-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
