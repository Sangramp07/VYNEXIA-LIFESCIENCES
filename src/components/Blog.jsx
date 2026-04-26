import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Share2 } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import companyInfo from '../data/companyInfo.json';
import image from '../assets/products/22.webp';

const blogPosts = [
  {
    id: 1,
    title: "Vynexia Lifesciences Expands ",
    excerpt: "we have recently expanded our manufacturing facility in Pune",
    date: "  2026",
    image: image,
    category: "Company News"
  },
  // {
  //   id: 2,
  //   title: "The Importance of WHO-GMP Certification in Pharmaceuticals",
  //   excerpt: "Understanding why Good Manufacturing Practices (GMP) are crucial for ensuring the safety and efficacy of modern pharmaceutical products.",
  //   date: "April 02, 2026",
  //   image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=800&auto=format&fit=crop",
  //   category: "Industry Insights"
  // },
  // {
  //   id: 3,
  //   title: "New Range of Nutraceuticals Launched for Immunity Support",
  //   excerpt: "We are thrilled to announce the launch of our new line of immunity-boosting nutraceuticals, designed to support overall health and well-being.",
  //   date: "March 20, 2026",
  //   image: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf4?q=80&w=800&auto=format&fit=crop",
  //   category: "Product Launch"
  // }
];

const Blog = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">News & Updates</h2>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Social Media And Blogs</h3>
            <p className="text-slate-600">
              Stay updated with new product announcements.
            </p>
          </div>
          
          <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <span className="text-sm font-bold text-slate-700">Follow us:</span>
            <a href={companyInfo.socials.facebook} className="text-slate-400 hover:text-[#1877F2] transition-colors"><FaFacebook size={20} /></a>
            <a href={companyInfo.socials.twitter} className="text-slate-400 hover:text-[#1DA1F2] transition-colors"><FaTwitter size={20} /></a>
            <a href={companyInfo.socials.linkedin} className="text-slate-400 hover:text-[#0A66C2] transition-colors"><FaLinkedin size={20} /></a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group flex flex-col"
            >
              <div className="h-56 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-slate-400 text-xs mb-4 gap-2">
                  <Calendar size={14} />
                  <span>{post.date}</span>
                </div>
                
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h4>
                
                <p className="text-slate-600 text-sm mb-6 flex-grow line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
                  <a href="#" className="text-primary font-bold text-sm flex items-center hover:text-primary-dark transition-colors">
                    Read More <ArrowRight size={16} className="ml-1" />
                  </a>
                  <button className="text-slate-400 hover:text-secondary transition-colors" aria-label="Share post">
                    <Share2 size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
