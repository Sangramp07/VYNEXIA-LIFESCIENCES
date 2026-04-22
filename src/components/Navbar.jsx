import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall, Mail } from 'lucide-react';
import companyInfo from '../data/companyInfo.json';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Services', href: '#services' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact Us', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={`hidden md:block bg-slate-900 text-white py-2 transition-all duration-300 ${scrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'opacity-100'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center text-xs">
          <div className="flex gap-6">
            <a href={`mailto:${companyInfo.contact.email}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail size={14} />
              {companyInfo.contact.email}
            </a>
            <a href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-2 hover:text-secondary transition-colors">
              <PhoneCall size={14} />
              {companyInfo.contact.phone}
            </a>
          </div>
          <div className="flex gap-4">
            <span>ISO 9001:2015 & WHO-GMP Certified</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/90 backdrop-blur-md py-4'}`}>
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo */}
        <div className="flex items-center">
          <a href="#home" className="text-2xl font-bold flex flex-col leading-none">
            <span className={scrolled ? 'text-primary' : 'text-primary'}>VYNEXIA</span>
            <span className={`text-xs tracking-widest ${scrolled ? 'text-secondary' : 'text-secondary'}`}>LIFESCIENCES</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium transition-colors hover:text-secondary ${scrolled ? 'text-slate-700' : 'text-slate-800'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary text-sm py-2 px-6">
            Enquire Now
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ${isOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0'} overflow-hidden`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-slate-700 hover:text-secondary"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)} className="btn btn-primary w-full">
            Enquire Now
          </a>
        </div>
      </div>
    </nav>
  </header>
  );
};

export default Navbar;
