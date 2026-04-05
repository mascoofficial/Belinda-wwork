import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ShoppingBag, Search } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Bespoke', href: '#bespoke' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 md:px-12',
        isScrolled ? 'bg-brand-cream/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.slice(0, 2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Logo */}
        <a href="/" className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-serif tracking-[0.2em] uppercase">
            Belinda
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase -mt-1 text-brand-gold">
            Designs
          </span>
        </a>

        {/* Desktop Navigation Right */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.slice(2).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-brand-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-4">
            <button className="hover:text-brand-gold transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hover:text-brand-gold transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile Icons */}
        <div className="md:hidden flex items-center space-x-4">
          <button className="hover:text-brand-gold transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-brand-cream z-[60] flex flex-col p-8"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col space-y-8 mt-12">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-3xl font-serif tracking-wide"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="mt-auto border-t border-brand-dark/10 pt-8">
              <p className="text-xs uppercase tracking-widest text-brand-dark/50">
                Follow Us
              </p>
              <div className="flex space-x-6 mt-4">
                <span className="text-sm">Instagram</span>
                <span className="text-sm">Pinterest</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
