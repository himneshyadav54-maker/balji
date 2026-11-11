import React from 'react';
import { ArrowDown, MapPin, Sparkles } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface HeroProps {
  onOpenBooking: () => void;
  onExplore: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExplore }) => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Measured Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={RESORT_INFO.heroImage}
          alt="Shree Balaji Jungle Resorts central pavilion and illuminated water pond at dusk"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in zoom-in-95 duration-1000 ease-out"
          referrerPolicy="no-referrer"
        />
        {/* Multilayer gradient scrim for 4.5:1+ text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06110b] via-[#06110b]/60 to-[#06110b]/40" />
        <div className="absolute inset-0 bg-radial-[circle_at_center] from-transparent via-[#06110b]/30 to-[#06110b]/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 sm:py-32">
        {/* Subtle Location & Nature Kicker */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium tracking-widest uppercase text-[#e5c365] mb-6">
          <MapPin className="w-3.5 h-3.5" />
          <span>Krishnodaya Nagar, Indore, Madhya Pradesh</span>
        </div>

        {/* Main Hero Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#fbf9f5] leading-[1.1] mb-6 text-balance max-w-4xl mx-auto drop-shadow-md">
          Escape the Ordinary.{' '}
          <span className="italic font-normal text-[#e5c365]">Embrace Nature.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-[#e8ded0]/90 max-w-2xl mx-auto font-light leading-relaxed mb-10 text-balance">
          Discover a peaceful getaway with Shree Balaji Jungle Resorts. Serene forest air,
          tranquil cottages, and unhurried hospitality designed to soothe your soul.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#06110b] bg-gradient-to-r from-[#e5c365] to-[#c59e35] hover:from-[#fae08c] hover:to-[#dfb549] rounded-md shadow-lg shadow-[#c59e35]/25 hover:shadow-[#c59e35]/40 transition-all duration-300 cursor-pointer"
          >
            Enquire Now
          </button>
          
          <button
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-3.5 text-xs sm:text-sm font-semibold uppercase tracking-widest text-[#fbf9f5] bg-[#0c1f15]/80 hover:bg-[#163627] border border-[#e5c365]/40 hover:border-[#e5c365] rounded-md backdrop-blur-sm transition-all duration-300 cursor-pointer"
          >
            Explore the Resort
          </button>
        </div>

        {/* Feature Highlights bar below CTAs */}
        <div className="mt-14 pt-8 border-t border-[#1d4533]/60 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="px-3">
            <span className="block text-xs uppercase tracking-wider text-[#e5c365]/80">Atmosphere</span>
            <span className="text-sm font-medium text-[#f4efe4]">Lush Nature Oasis</span>
          </div>
          <div className="px-3">
            <span className="block text-xs uppercase tracking-wider text-[#e5c365]/80">Location</span>
            <span className="text-sm font-medium text-[#f4efe4]">Krishnodaya Nagar</span>
          </div>
          <div className="px-3">
            <span className="block text-xs uppercase tracking-wider text-[#e5c365]/80">Stays</span>
            <span className="text-sm font-medium text-[#f4efe4]">Private Nature Villas</span>
          </div>
          <div className="px-3">
            <span className="block text-xs uppercase tracking-wider text-[#e5c365]/80">Hospitality</span>
            <span className="text-sm font-medium text-[#f4efe4]">Personalized Service</span>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <button
        onClick={onExplore}
        aria-label="Scroll down to About section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[#e8ded0]/60 hover:text-[#e5c365] transition-colors p-2 animate-bounce cursor-pointer"
      >
        <ArrowDown className="w-5 h-5" />
      </button>
    </section>
  );
};
