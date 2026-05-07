import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Activity, Baby, Shield, Stethoscope, Sparkles } from 'lucide-react';

const stages = [
  {
    title: 'Beginning with Hope',
    icon: <Heart className="w-8 h-8 text-pink-500" />,
    description: 'We support women preparing for healthier conception and reproductive balance.',
    products: ['MyoNari-DUO™', 'ArgeNOX™'],
    color: 'bg-pink-50 border-pink-200'
  },
  {
    title: 'Caring Through Pregnancy',
    icon: <Baby className="w-8 h-8 text-purple-500" />,
    description: 'We help support fetal development, maternal wellness, and safer pregnancy journeys.',
    products: ['FolNexia-L™', 'FolNexia-NVP™', 'FolNexia-DHA™'],
    color: 'bg-purple-50 border-purple-200'
  },
  {
    title: 'Strengthening Motherhood',
    icon: <Shield className="w-8 h-8 text-blue-500" />,
    description: 'We address essential nutritional needs for stronger mothers and healthier outcomes.',
    products: ['VynCal-2000™', 'VynFer-BS™', 'VYND3-60K™'],
    color: 'bg-blue-50 border-blue-200'
  },
  {
    title: 'Nourishing Beyond Birth',
    icon: <Activity className="w-8 h-8 text-green-500" />,
    description: 'We continue supporting women through lactation, recovery, and postnatal wellness.',
    products: ['Shatavyn™'],
    color: 'bg-green-50 border-green-200'
  }
];

const focuses = [
  'Advanced bioavailable nutrition',
  'Clinically relevant combinations',
  'Targeted women-centric therapies',
  'Better patient compliance',
  'Meaningful outcomes'
];

const challenges = [
  'Nutritional deficiencies',
  'Hormonal imbalance',
  'Stressful lifestyles',
  'Fertility concerns',
  'Pregnancy complications'
];

const Services = () => {
  return (
    <section id="expertise" className="section-padding bg-gradient-to-b from-slate-50 to-white text-slate-900 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-100 rounded-full blur-3xl opacity-50 -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100 rounded-full blur-3xl opacity-50 -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-8 max-w-6xl relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-pink-500 uppercase tracking-[0.2em] mb-4"
          >
            Therapeutic Expertise
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-slate-900"
          >
            VyNexia Women's Care Division
          </motion.h3>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block px-8 py-4 bg-white shadow-xl shadow-pink-500/10 rounded-2xl border border-pink-100 mt-4"
          >
            <p className="text-2xl md:text-3xl font-serif text-slate-800 italic">
              "Every Life Begins With Her."
            </p>
          </motion.div>
        </div>

        {/* Intro Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-24"
        >
          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
            At VyNexia Lifesciences, we believe women's healthcare is more than treatment. <br className="hidden md:block"/>
            <span className="font-medium text-pink-600">It is the science of nurturing life itself.</span>
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4 text-slate-600">
            <span>From the hope of conception</span>
            <span className="hidden md:block text-pink-300">•</span>
            <span>To the strength of pregnancy</span>
            <span className="hidden md:block text-pink-300">•</span>
            <span>To the bond of motherhood</span>
          </div>
          <p className="mt-8 text-lg text-slate-600">
            Every stage of a woman's journey deserves care that is thoughtful, advanced, and trustworthy. That belief gave birth to <strong className="text-slate-900">VyNexia Women's Care</strong> — A specialized division dedicated to supporting women through every phase of wellness with science-driven formulations and compassionate innovation.
          </p>
        </motion.div>

        {/* Where Science Meets Emotion */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <h4 className="text-3xl font-bold text-slate-900 flex items-center justify-center gap-3">
              <Stethoscope className="text-pink-500" />
              Where Science Meets Emotion
            </h4>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100"
            >
              <h5 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">Modern women face evolving health challenges:</h5>
              <ul className="space-y-4">
                {challenges.map((challenge, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600">
                    <div className="w-2 h-2 rounded-full bg-slate-300 shrink-0"></div>
                    {challenge}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-pink-600 font-medium italic">Traditional supplementation is often not enough.</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-3xl shadow-lg border border-pink-100"
            >
              <h5 className="text-xl font-bold text-slate-800 mb-6 border-b border-pink-200 pb-4">At VyNexia, we focus on:</h5>
              <ul className="space-y-4">
                {focuses.map((focus, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 font-medium">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center shrink-0 text-pink-600 text-sm">
                      ✓
                    </div>
                    {focus}
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-lg font-bold text-slate-900 leading-snug">
                Because every formulation should do more than supplement. <br/>
                <span className="text-pink-600">It should support life.</span>
              </p>
            </motion.div>
          </div>
        </div>

        {/* Supporting Her Through Every Stage */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h4 className="text-3xl font-bold text-slate-900 mb-4">Supporting Her Through Every Stage</h4>
            <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stages.map((stage, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`p-8 rounded-3xl border ${stage.color} relative group overflow-hidden transition-all hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="mb-6 relative z-10">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4">
                    {stage.icon}
                  </div>
                  <h5 className="text-xl font-bold text-slate-900 mb-3">{stage.title}</h5>
                  <p className="text-slate-600 text-sm mb-6 leading-relaxed">{stage.description}</p>
                </div>
                
                <div className="relative z-10 border-t border-slate-200/50 pt-4">
                  <p className="text-xs font-bold text-slate-400 uppercase mb-3">Key Solutions</p>
                  <div className="flex flex-wrap gap-2">
                    {stage.products.map((prod, pIdx) => (
                      <span key={pIdx} className="px-3 py-1 bg-white text-slate-700 text-sm font-medium rounded-full shadow-sm border border-slate-100">
                        {prod}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Background decorative hover effect */}
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-white/40 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700 -z-0"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing / Philosophy */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <Sparkles className="w-12 h-12 text-pink-400 mx-auto mb-6 opacity-80" />
            
            <h4 className="text-2xl md:text-3xl font-bold text-white mb-8">More Than Products</h4>
            
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8">
              VyNexia is not built as a collection of brands. It is built as: <br/>
              <span className="text-white font-bold text-2xl mt-2 block">"A continuum of women's care."</span>
            </p>
            
            <div className="grid md:grid-cols-1 md:grid-cols-3 gap-6 text-slate-300 mb-12">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p>Every product is thoughtfully connected to a stage in her journey.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p>Every formulation is designed with purpose.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <p>Every innovation is driven by one philosophy: <br/><strong className="text-pink-400 mt-2 block">"Next-Gen Care for Every Life."</strong></p>
              </div>
            </div>
            
            <div className="border-t border-white/20 pt-12 mt-12">
              <p className="text-slate-400 text-lg mb-6">
                At VyNexia Women's Care, we envision a future where women receive not just medication...
              </p>
              <p className="text-2xl md:text-3xl font-light text-white leading-snug mb-8">
                "but scientifically advanced care that empowers healthier beginnings, stronger pregnancies, and better lives."
              </p>
              <div className="inline-block px-8 py-4 bg-pink-500/20 border border-pink-500/30 rounded-2xl">
                <p className="text-pink-300 font-bold text-xl mb-1">VyNexia Women's Care</p>
                <p className="text-white italic">"Science for Her Every Stage."</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
