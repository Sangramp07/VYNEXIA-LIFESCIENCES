import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

const galleryImages = [
  // { id: 1, src: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop", alt: "Laboratory Research", category: "Facility" },
  // { id: 2, src: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=800&auto=format&fit=crop", alt: "Quality Testing", category: "Lab" },
  // { id: 3, src: "https://images.unsplash.com/photo-1579152276502-545a24b88c31?q=80&w=800&auto=format&fit=crop", alt: "Manufacturing Process", category: "Production" },
  // { id: 4, src: "https://images.unsplash.com/photo-1616671276441-2f2c277b8bf4?q=80&w=800&auto=format&fit=crop", alt: "Packaging Line", category: "Packaging" },
  // { id: 5, src: "https://images.unsplash.com/photo-1550572017-ed200f5e6383?q=80&w=800&auto=format&fit=crop", alt: "Finished Products", category: "Products" },
  // { id: 6, src: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop", alt: "Team Discussion", category: "Team" }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-4">Our Gallary</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">Inside Vynexia Lifesciences</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Take a look at our  manufacturing facilities
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-2xl cursor-pointer aspect-square bg-slate-200"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <ZoomIn className="text-white mb-2" size={32} />
                <p className="text-white font-bold text-lg">{image.category}</p>
                <p className="text-white/80 text-sm px-4 text-center">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 md:p-12"
              onClick={() => setSelectedImage(null)}
            >
              <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X size={40} />
              </button>
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                src={selectedImage.src} 
                alt={selectedImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
                <p className="text-white font-bold text-xl drop-shadow-md">{selectedImage.category}</p>
                <p className="text-white/80 mt-1">{selectedImage.alt}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Gallery;
