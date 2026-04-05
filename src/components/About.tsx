import React from 'react';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-24 h-[1px] bg-brand-gold mb-8"
          />
          <h2 className="text-4xl md:text-6xl font-serif italic mb-6">The Designer's Vision</h2>
          <p className="text-brand-dark/60 max-w-2xl text-lg leading-relaxed">
            "I design for the woman who is unapologetically herself. My goal is to create pieces that don't just dress the body, but empower the spirit."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="space-y-8">
            <div className="text-right">
              <h4 className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-2">Heritage</h4>
              <p className="text-sm leading-relaxed text-brand-dark/70">
                Founded in 2015, Belinda Designs has roots in traditional European tailoring combined with modern African aesthetics.
              </p>
            </div>
            <div className="text-right">
              <h4 className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-2">Sustainability</h4>
              <p className="text-sm leading-relaxed text-brand-dark/70">
                We prioritize ethically sourced fabrics and zero-waste patterns, ensuring our luxury doesn't cost the earth.
              </p>
            </div>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop"
              alt="Belinda - Lead Designer"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="space-y-8">
            <div className="text-left">
              <h4 className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-2">Craftsmanship</h4>
              <p className="text-sm leading-relaxed text-brand-dark/70">
                Every piece is hand-finished in our private atelier, with over 100 hours of labor dedicated to our couture line.
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-brand-gold text-xs uppercase tracking-[0.3em] mb-2">Innovation</h4>
              <p className="text-sm leading-relaxed text-brand-dark/70">
                We blend 3D body scanning technology with traditional draping to achieve the perfect fit every time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
