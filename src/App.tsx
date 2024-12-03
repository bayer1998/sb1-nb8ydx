import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Biography from './components/Biography';
import LatestRelease from './components/LatestRelease';
import Videos from './components/Videos';
import Shows from './components/Shows';
import IvorianCulture from './components/IvorianCulture';
import SocialLinks from './components/SocialLinks';
import Footer from './components/Footer';
import TicketCTA from './components/TicketCTA';
import VisitCounter from './components/VisitCounter';

export default function App() {
  return (
    <div className="bg-dark text-light min-h-screen">
      <Navbar />
      <VisitCounter />
      <Hero />
      <LatestRelease />
      <Shows />
      <Biography />
      <IvorianCulture />
      <Videos />
      <SocialLinks />
      <TicketCTA />
      <Footer />
    </div>
  );
}