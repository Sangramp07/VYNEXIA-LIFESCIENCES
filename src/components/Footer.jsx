import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import companyInfo from '../data/companyInfo.json';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-slate-600 pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <a href="/#home" className="flex items-center">
                <img src="/logo.png" alt="Vynexia Lifesciences" className="h-16 object-contain" />
              </a>
            </div>
            <p className="text-sm leading-relaxed">
              Leading pharmaceutical company providing innovative healthcare solutions and high-quality medicines for a healthier future.
            </p>
            <div className="flex gap-4">
              <a href={companyInfo.socials.facebook} className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaFacebook size={18} />
              </a>
              <a href={companyInfo.socials.twitter} className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaTwitter size={18} />
              </a>
              <a href={companyInfo.socials.linkedin} className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaLinkedin size={18} />
              </a>
              <a href={companyInfo.socials.instagram} className="w-10 h-10 rounded-full bg-slate-100 text-slate-600 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="/#home" className="hover:text-secondary transition-colors">Home</a></li>
              <li><a href="/#about" className="hover:text-secondary transition-colors">About Us</a></li>
              <li><a href="/#products" className="hover:text-secondary transition-colors">Our Products</a></li>
              <li><a href="/#services" className="hover:text-secondary transition-colors">Our Services</a></li>
              <li><a href="/#certifications" className="hover:text-secondary transition-colors">Certifications</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="text-secondary shrink-0" size={18} />
                <span>{companyInfo.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone className="text-secondary shrink-0" size={18} />
                <span>{companyInfo.contact.phone}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="text-secondary shrink-0" size={18} />
                <span>{companyInfo.contact.email}</span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-4 text-sm font-mono text-xs">
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-400">CIN:</span>
                <span className="text-slate-700">{companyInfo.legal.cin}</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-400">GST:</span>
                <span className="text-slate-700">{companyInfo.legal.gst}</span>
              </li>
              <li className="flex justify-between border-b border-slate-100 pb-2">
                <span className="text-slate-400">FSSAI:</span>
                <span className="text-slate-700">{companyInfo.legal.fssai}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-400">
          <p>© {currentYear} VYNEXIA LIFESCIENCES PRIVATE LIMITED. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
