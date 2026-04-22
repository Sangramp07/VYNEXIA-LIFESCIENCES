import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import companyInfo from '../data/companyInfo.json';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you'd use EmailJS or a backend
    // For now, we'll open the user's email client
    const mailtoLink = `mailto:${companyInfo.contact.email}?subject=${formData.subject || 'Inquiry from Website'}&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0A%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section-padding bg-slate-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-sm font-bold text-secondary uppercase tracking-[0.2em] mb-15">Connect With Us</h1>
          <h3 className="text-4xl font-bold text-slate-900 mb-6"></h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Whether you're interested in our products, manufacturing services, our team is ready to assist you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Contact Info */}
          <div className="lg:w-1/3">
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">Our Location</h4>
                  <p className="text-slate-600 leading-relaxed">{companyInfo.contact.address}</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">Call Us</h4>
                  <p className="text-slate-600 mb-1">{companyInfo.contact.phone}</p>
                  <p className="text-slate-400 text-sm italic">Mon - Sat: 10:00 AM - 7:00 PM</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2 text-lg">Email Us</h4>
                  <p className="text-slate-600">{companyInfo.contact.email}</p>
                </div>
              </div>

              {/* Direct Connect Buttons */}
              <div className="pt-8 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 mb-4">Instant Connect</h4>
                <div className="flex flex-col gap-3">
                  <a 
                    href={`https://wa.me/${companyInfo.contact.whatsapp}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-[#25D366]/10 text-[#25D366] rounded-xl hover:bg-[#25D366]/20 transition-colors font-bold"
                  >
                    <MessageCircle size={20} />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter Your Name"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="name@example.com"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 00000 00000"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Inquiry"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Your Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your requirements..."
                    className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all resize-none"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full py-4 text-lg">
                  Send Message
                  <Send className="ml-2" size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Embed */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-lg h-96 border border-slate-200">
          <iframe 
            src={companyInfo.contact.mapsUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            title="Vynexia Lifesciences Office Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
