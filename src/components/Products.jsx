import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import companyInfo from '../data/companyInfo.json';

// Eagerly import all images from the products folder to support local asset paths
const localThumbnails = import.meta.glob('../assets/products/*', { eager: true, import: 'default' });

const Categories = ['All', ...new Set(products.map(p => p.category))];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    if (imagePath.startsWith('http')) return imagePath;
    
    // Match "./assets/..." with the glob keys "../assets/..."
    const key = imagePath.replace('./', '../');
    return localThumbnails[key] || imagePath;
  };

  return (
    <section id="products" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our Products</h1>
          <h3 className="text-4xl font-bold text-slate-900 mb-6"> </h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
       
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {Categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Product Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="card group h-full flex flex-col"
              >
                <div className="h-64 overflow-hidden relative bg-slate-50 p-6 flex items-center justify-center rounded-t-2xl">
                  <img 
                    src={getImageUrl(product.image)} 
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h4>
                  <p className="text-slate-600 text-sm mb-6 flex-grow">{product.description}</p>
                  <div className="flex flex-col gap-3 mt-auto">
                    <Link
                      to={`/products/${product.assetFolder.toLowerCase()}`}
                      className="btn btn-primary text-xs py-2 w-full flex items-center justify-center font-bold"
                    >
                      View Details
                    </Link>
                    <a 
                      href={`https://wa.me/${companyInfo.contact.whatsapp}?text=I am interested in ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline text-xs py-2 w-full flex items-center justify-center gap-2"
                    >
                      Enquire Now
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-slate-400 text-lg">No products found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
