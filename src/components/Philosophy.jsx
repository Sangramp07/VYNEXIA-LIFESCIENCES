import React from 'react';
import { motion } from 'framer-motion';
import { Microscopic, Activity, ClipboardCheck, Award, ShieldCheck, Zap } from 'lucide-react';

const pillars = [
  { name: 'Scientific Relevance', icon: <Zap className="text-primary w-6 h-6" /> },
  { name: 'Clinical Utility', icon: <Activity className="text-primary w-6 h-6" /> },
  { name: 'Patient Compliance', icon: <ShieldCheck className="text-primary w-6 h-6" /> },
  { name: 'Quality Manufacturing', icon: <ClipboardCheck className="text-primary w-6 h-6" /> },
  { name: 'Meaningful Therapeutic Value', icon: <Award className="text-primary w-6 h-6" /> }
];

const Philosophy = () => {
  return (
    <section id="philosophy" className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[80px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10">
        
        {/* Header Title */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4"
          >
            Our Philosophy
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            VyNexia Lifesciences
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-8 py-4 bg-white shadow-xl shadow-primary/5 rounded-2xl border border-slate-100"
          >
            <p className="text-2xl md:text-3xl font-serif text-primary italic">
              "Next-Gen Care for Every Life."
            </p>
          </motion.div>
        </div>

        {/* Intro Block */}
        <div className="grid md:grid-cols-12 gap-12 items-center mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-5"
          >
            <h4 className="text-2xl font-bold text-slate-900 mb-4 leading-snug">Healthcare is evolving.</h4>
            <p className="text-lg text-slate-600 mb-4">
              Patients today need more than routine formulations.
            </p>
            <p className="text-lg font-medium text-slate-800 border-l-4 border-secondary pl-4 py-1">
              They need science that is smarter, care that is more meaningful, and therapies designed for better outcomes.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-7 bg-white p-8 rounded-3xl shadow-lg border border-slate-100 relative"
          >
            {/* Small decorative quote mark */}
            <div className="absolute -top-6 -right-4 text-8xl text-slate-100 font-serif leading-none opacity-50 select-none">"</div>
            <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
              At VyNexia Lifesciences, we are committed to building a new generation pharmaceutical company focused on innovation, quality, and patient-centered healthcare.
            </p>
            <p className="text-slate-600 leading-relaxed relative z-10">
              Founded with the vision of combining advanced science with practical clinical needs, VyNexia aims to deliver thoughtfully designed formulations that improve everyday healthcare experiences for doctors and patients alike.
            </p>
          </motion.div>
        </div>

        {/* Guiding Principles */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h4 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 max-w-3xl mx-auto leading-snug">
            We believe true healthcare innovation lies not only in molecules, but in understanding people, lifestyles, and the changing needs of modern medicine.
          </h4>
          <p className="text-lg text-slate-500 mb-12 uppercase tracking-widest text-sm font-bold">
            That is why every product we develop is guided by:
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {pillars.map((pillar, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-slate-100 flex items-center gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-primary/10 p-2 rounded-xl">
                  {pillar.icon}
                </div>
                <span className="font-bold text-slate-800">{pillar.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Closing Statement */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-slate-900/0 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <p className="text-slate-300 text-xl leading-relaxed mb-10">
              From nutritional science to women's wellness, from preventive care to supportive therapies, our mission is to create healthcare solutions that contribute to healthier lives and stronger futures.
            </p>
            
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-10"></div>
            
            <p className="text-2xl md:text-3xl text-white font-light leading-snug">
              At VyNexia, we are building more than products. <br/>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-4 block">
                We are building trust, consistency, and a healthcare ecosystem designed for tomorrow.
              </span>
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Philosophy;
