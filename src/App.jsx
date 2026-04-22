import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Services from './components/Services';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

import Gallery from './components/Gallery';
import Blog from './components/Blog';
import FloatingButtons from './components/FloatingButtons';
import companyInfo from './data/companyInfo.json';

function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    "name": companyInfo.name,
    "url": "https://www.vynexialifesciences.com",
    "logo": "https://www.vynexialifesciences.com/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": companyInfo.contact.phone,
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "G-3, Ground floor, Sector Gate No.1232, Milkat No.1150, Pune Saswad Road, Near Abhiruchi Hotel",
      "addressLocality": "Wadki, Pune",
      "postalCode": "412308",
      "addressRegion": "Maharashtra",
      "addressCountry": "IN"
    },
    "sameAs": [
      companyInfo.socials.facebook,
      companyInfo.socials.twitter,
      companyInfo.socials.linkedin,
      companyInfo.socials.instagram
    ]
  };

  return (
    <HelmetProvider>
      <div className="min-h-screen bg-white">
        <Helmet>
          {/* Primary Meta Tags */}
          <title>{companyInfo.name} - Innovating Healthcare, Delivering Excellence</title>
          <meta name="title" content={`${companyInfo.name} - Trusted Pharmaceutical Solutions`} />
          <meta name="description" content="VYNEXIA LIFESCIENCES PRIVATE LIMITED offers high-quality pharmaceutical products, PCD Pharma Franchise, and Third Party Manufacturing services. ISO & WHO-GMP compliant." />
          <meta name="keywords" content="pharmaceutical company India, PCD Pharma Franchise, Third Party Manufacturing, tablets, capsules, syrups, nutraceuticals, Vynexia Lifesciences, healthcare solutions, ISO certified pharma" />
          <meta name="author" content="Vynexia Lifesciences" />
          <link rel="canonical" href="https://www.vynexialifesciences.com" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.vynexialifesciences.com/" />
          <meta property="og:title" content={`${companyInfo.name} - Top Pharma Company`} />
          <meta property="og:description" content="Explore our wide range of high-quality pharmaceutical products and lucrative franchise opportunities." />
          <meta property="og:image" content="https://images.unsplash.com/photo-1579165466541-74e21495804c?q=80&w=1200&auto=format&fit=crop" />

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.vynexialifesciences.com/" />
          <meta property="twitter:title" content={`${companyInfo.name} - Top Pharma Company`} />
          <meta property="twitter:description" content="Explore our wide range of high-quality pharmaceutical products and lucrative franchise opportunities." />
          <meta property="twitter:image" content="https://images.unsplash.com/photo-1579165466541-74e21495804c?q=80&w=1200&auto=format&fit=crop" />

          {/* Structured Data JSON-LD */}
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>

        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Products />
          <Gallery />
          <Certifications />
          <Blog />
          <Contact />
        </main>
        <Footer />
        <FloatingButtons />
      </div>
    </HelmetProvider>
  );
}

export default App;
