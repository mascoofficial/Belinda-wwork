import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const collections = [
  {
    id: 1,
    title: 'The Silk Road',
    category: 'Spring Summer 2024',
    image: 'https://images.unsplash.com/photo-1539109132314-34a77ae68c44?q=80&w=1974&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 2,
    title: 'Midnight Velvet',
    category: 'Evening Wear',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 3,
    title: 'Ethereal Bloom',
    category: 'Bridal Couture',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1974&auto=format&fit=crop',
    size: 'small'
  }
];

export default function FeaturedCollections() {
  return (
    <section id="collections" className="py-24 px-6 md:px-12 bg-brand-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-gold text-sm uppercase tracking-[0.3em] mb-4 block">Our Curation</span>
            <h2 className="text-4xl md:text-6xl leading-tight">
              Signature <span className="italic">Collections</span>
            </h2>
          </div>
          <a href="#" className="flex items-center space-x-2 text-sm uppercase tracking-widest border-b border-brand-dark pb-1 hover:text-brand-gold hover:border-brand-gold transition-all">
            <span>View All Collections</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Large Item */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative h-[600px] overflow-hidden cursor-pointer md:row-span-2"
          >
            <img
              src={collections[0].image}
              alt={collections[0].title}
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 p-10 text-brand-cream translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-xs uppercase tracking-widest mb-2">{collections[0].category}</p>
              <h3 className="text-3xl font-serif mb-4">{collections[0].title}</h3>
              <button className="text-xs uppercase tracking-widest border-b border-brand-cream pb-1">Discover</button>
            </div>
          </motion.div>

          {/* Small Items */}
          <div className="grid grid-cols-1 gap-8">
            {collections.slice(1).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative h-[284px] overflow-hidden cursor-pointer"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-brand-cream p-6 text-center">
                  <p className="text-[10px] uppercase tracking-[0.3em] mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{item.category}</p>
                  <h3 className="text-2xl font-serif mb-4">{item.title}</h3>
                  <button className="text-[10px] uppercase tracking-widest border border-brand-cream px-6 py-2 opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-brand-cream hover:text-brand-dark">
                    Explore
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
