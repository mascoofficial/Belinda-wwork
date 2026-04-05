import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedCollections from './components/FeaturedCollections';
import BespokeServices from './components/BespokeServices';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedCollections />
      <BespokeServices />
      <About />
      <Footer />
    </main>
  );
}
