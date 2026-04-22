import React from 'react';
import { motion } from 'framer-motion';

const certificates = [
  { name: 'ISO 9001:2015', icon: 'https://www.svgrepo.com/show/303212/iso-9001-logo.svg' },
  { name: 'WHO-GMP', icon: 'https://www.svgrepo.com/show/447385/certificate.svg' },
  { name: 'FSSAI', icon: 'https://www.svgrepo.com/show/447385/certificate.svg' },
  { name: 'Drug License', icon: 'https://www.svgrepo.com/show/447385/certificate.svg' }
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Trust & Quality</h2>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">Our Certifications</h3>
            <p className="text-slate-600 mb-8">
              We maintain the highest industry standards. Our facilities and products are certified by leading regulatory bodies, ensuring safety and quality at every step.
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px bg-slate-200 flex-grow"></div>
              <span className="text-slate-400 font-medium">Industry Standard</span>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-slate-50 p-8 rounded-2xl flex flex-col items-center justify-center text-center border border-slate-100 group transition-all hover:bg-white hover:shadow-xl"
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                  <img src={cert.icon} alt={cert.name} className="max-w-full max-h-full" />
                </div>
                <p className="font-bold text-slate-700">{cert.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
