import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import products from '../data/products.json';

// Import all png images from assets folder eagerly
const allImages = import.meta.glob('../assets/**/*.png', { eager: true, import: 'default' });

const ProductDetail = () => {
  const { id } = useParams();
  const [language, setLanguage] = useState('English');
  
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-20">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <Link to="/" className="btn btn-primary">Back to Home</Link>
      </div>
    );
  }

  // Dynamically load images for the product based on its assetFolder and selected language
  const assetFolder = product.assetFolder;

  const getImagesForLanguage = (lang) => {
    if (!assetFolder) return [];
    
    const langLower = lang.toLowerCase();
    
    // Find all images that belong to the product's asset folder and the requested language
    const matchingPaths = Object.keys(allImages).filter(path => {
      return path.includes(`../assets/${assetFolder}/${langLower}/`);
    });
    
    // Sort the paths numerically so 1.png comes before 2.png
    matchingPaths.sort((a, b) => {
      const numA = parseInt(a.split('/').pop().replace('.png', '')) || 0;
      const numB = parseInt(b.split('/').pop().replace('.png', '')) || 0;
      return numA - numB;
    });

    return matchingPaths.map(path => allImages[path]);
  };

  const imagesByLanguage = {
    English: getImagesForLanguage('English'),
    Marathi: getImagesForLanguage('Marathi'),
    Hindi: getImagesForLanguage('Hindi')
  };

  const currentImages = imagesByLanguage[language] || [];

  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-8 font-semibold transition-colors">
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 mb-8">
          {/* Product Title */}
          <h1 className="text-4xl font-bold text-slate-900 mb-4">{product.name}</h1>
          <p className="text-slate-600 text-lg mb-8 max-w-3xl">{product.description}</p>

          {/* Language Selector */}
          <div className="mb-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="font-semibold text-slate-700">Select Language:</span>
            <div className="flex flex-wrap gap-3">
              {['English', 'Marathi', 'Hindi'].map(lang => (
                <button
                  key={lang}
                  onClick={() => setLanguage(lang)}
                  className={`px-6 py-2 rounded-full font-bold transition-all shadow-sm ${
                    language === lang 
                      ? 'bg-primary text-white shadow-primary/30 transform scale-105' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Images Display */}
        {/* flex-col for scrolling on mobile, flex-row/grid for flex on desktop */}
        <div className="flex flex-col md:flex-row md:flex-wrap gap-8 md:gap-10 justify-center lg:justify-start w-full">
          {currentImages.map((img, idx) => (
            <div key={idx} className="w-full md:w-[45%] lg:w-[47%] flex-shrink-0 mx-auto md:mx-0">
              <img 
                src={img} 
                alt={`${product.name} in ${language} part ${idx + 1}`} 
                className="w-full h-auto rounded-xl shadow-md border border-slate-200 object-cover hover:shadow-lg transition-shadow duration-300"
              />
            </div>
          ))}
          {currentImages.length === 0 && (
            <p className="text-slate-500 italic">No images available for this language.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
