import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import companyInfo from '../data/companyInfo.json';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1579165466541-74e21495804c?q=80&w=2000&auto=format&fit=crop" 
          alt="Pharmaceutical Lab" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-primary/10 text-primary font-bold text-sm mb-6 uppercase tracking-widest">
              Welcome to Vynexia Lifesciences
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 leading-tight mb-6">
              {companyInfo.tagline}
            </h1>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              {companyInfo.subTagline}. We are committed to providing high-quality, affordable healthcare solutions globally.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#products" className="btn btn-primary group">
                View Products
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#contact" className="btn btn-outline">
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute right-0 bottom-0 w-1/3 h-1/2 opacity-10 pointer-events-none hidden lg:block"
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        <img src="https://www.svgrepo.com/show/288414/medicine-pills.svg" alt="" />
      </motion.div>
    </section>
  );
};

export default Hero;
