import React from 'react';
import { MessageCircle, PhoneCall } from 'lucide-react';
import companyInfo from '../data/companyInfo.json';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      {/* Phone Button */}
      <a
        href={`tel:${companyInfo.contact.phone.replace(/[^0-9+]/g, '')}`}
        className="bg-primary text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group relative"
        aria-label="Call Us"
      >
        <PhoneCall size={24} />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Call Now
        </span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${companyInfo.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
          Chat with us!
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
