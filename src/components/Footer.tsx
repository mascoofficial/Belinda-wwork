import React from 'react';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-dark text-brand-cream pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-2xl font-serif tracking-[0.2em] uppercase">Belinda</span>
              <span className="text-[10px] tracking-[0.4em] uppercase -mt-1 text-brand-gold">Designs</span>
            </div>
            <p className="text-sm text-brand-cream/50 leading-relaxed">
              Exquisite fashion for the modern woman. Redefining luxury through bespoke craftsmanship and timeless design.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-brand-cream/10 flex items-center justify-center hover:bg-brand-gold hover:border-brand-gold transition-all">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-8">Navigation</h4>
            <ul className="space-y-4 text-sm text-brand-cream/70">
              <li><a href="#collections" className="hover:text-brand-gold transition-colors">Collections</a></li>
              <li><a href="#bespoke" className="hover:text-brand-gold transition-colors">Bespoke Services</a></li>
              <li><a href="#about" className="hover:text-brand-gold transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Atelier Journal</a></li>
              <li><a href="#" className="hover:text-brand-gold transition-colors">Sustainability</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-8">Contact</h4>
            <ul className="space-y-4 text-sm text-brand-cream/70">
              <li className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-brand-gold mt-1 shrink-0" />
                <span>123 Couture Avenue, <br />Fashion District, NY 10001</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-brand-gold shrink-0" />
                <span>+1 (555) 012-3456</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-brand-gold shrink-0" />
                <span>atelier@belindadesigns.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-8">Newsletter</h4>
            <p className="text-sm text-brand-cream/50 mb-6">
              Subscribe to receive updates on new collections and private events.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent border-b border-brand-cream/20 py-2 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button type="submit" className="absolute right-0 bottom-2 text-xs uppercase tracking-widest text-brand-gold hover:text-brand-cream transition-colors">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-cream/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] uppercase tracking-widest text-brand-cream/30">
            © 2024 Belinda Designs. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-brand-cream/30">
            <a href="#" className="hover:text-brand-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
