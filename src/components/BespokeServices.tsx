import React from 'react';
import { motion } from 'motion/react';
import { Scissors, Ruler, Sparkles, Heart } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Custom Tailoring',
    description: 'Precision-cut garments designed specifically for your unique silhouette.'
  },
  {
    icon: Ruler,
    title: 'Personal Styling',
    description: 'Curated wardrobe selections that reflect your personal brand and lifestyle.'
  },
  {
    icon: Sparkles,
    title: 'Haute Couture',
    description: 'One-of-a-kind masterpieces crafted with the finest materials and hand-finishing.'
  },
  {
    icon: Heart,
    title: 'Bridal Bespoke',
    description: 'The dress of your dreams, meticulously designed for your most special day.'
  }
];

export default function BespokeServices() {
  return (
    <section id="bespoke" className="py-24 px-6 md:px-12 bg-brand-dark text-brand-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-6 block">The Art of Bespoke</span>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">
              Crafting Your <br />
              <span className="italic">Unique Narrative</span>
            </h2>
            <p className="text-brand-cream/70 text-lg mb-12 leading-relaxed max-w-lg">
              At Belinda Designs, we believe that fashion is a form of self-expression. Our bespoke services are designed to translate your vision into wearable art, ensuring every stitch tells your story.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="w-12 h-12 rounded-full border border-brand-gold/30 flex items-center justify-center mb-6 group-hover:bg-brand-gold group-hover:border-brand-gold transition-all duration-500">
                    <service.icon className="w-5 h-5 text-brand-gold group-hover:text-brand-dark transition-colors" />
                  </div>
                  <h3 className="text-xl font-serif mb-3">{service.title}</h3>
                  <p className="text-sm text-brand-cream/50 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1974&auto=format&fit=crop"
                alt="Bespoke Tailoring"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-brand-gold/20 hidden md:block" />
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
