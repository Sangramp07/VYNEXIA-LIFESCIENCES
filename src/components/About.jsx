import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Target, Eye } from 'lucide-react';
import companyInfo from '../data/companyInfo.json';
import aboutBg from '../assets/background/aboutbg.jpg';

const About = () => {
  return (
    <section id="about" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image side */}
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={aboutBg} 
                alt="Healthcare Professional" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stats Badge */}
            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl z-20 hidden md:block border-t-4 border-primary">
              <p className="text-4xl font-bold text-primary mb-1">10+</p>
              <p className="text-slate-600 font-medium">Quality Products</p>
            </div>
            {/* Background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>

          {/* Content side */}
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">About Our Company</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
              Leading the Way in <span className="text-primary">Pharmaceutical Innovation</span>
            </h3>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              VYNEXIA LIFESCIENCES PRIVATE LIMITED is a dynamic pharmaceutical company dedicated to enhancing lives through high-quality medicine. We specialize in research-driven solutions across multiple therapeutic segments.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Target size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
                  <p className="text-slate-600 text-sm">To provide accessible, affordable, and high-quality healthcare solutions that improve patient outcomes globally.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Eye size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Our Vision</h4>
                  <p className="text-slate-600 text-sm">To be a globally recognized leader in the pharmaceutical industry known for innovation and excellence.</p>
                </div>
              </div>
            </div>

            {/* Legal Details Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="text-primary" size={20} />
                Compliance & Legal Details
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-slate-500 w-12 sm:w-24 shrink-0">CIN:</span>
                  <span className="font-mono font-bold text-slate-700 break-all">{companyInfo.legal.cin}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-500 w-12 sm:w-24 shrink-0">GST:</span>
                  <span className="font-mono font-bold text-slate-700 break-all">{companyInfo.legal.gst}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-500 w-12 sm:w-24 shrink-0">FSSAI:</span>
                  <span className="font-mono font-bold text-slate-700 break-all">{companyInfo.legal.fssai}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-slate-500 w-24 shrink-0">Drug License:</span>
                  <span className="font-mono font-bold text-slate-700 break-words">{companyInfo.legal.dl.join(' & ')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
