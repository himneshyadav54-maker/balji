import React from 'react';
import { Compass, Leaf, HeartHandshake, ShieldCheck } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#091710] relative overflow-hidden">
      {/* Decorative subtle background foliage gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#163627]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#c59e35]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c365] mb-3">
            <span>The Retreat Story</span>
            <span aria-hidden="true">·</span>
            <span>Krishnodaya Nagar, Indore</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf9f5] tracking-tight leading-tight mb-6">
            A Nature-Inspired Sanctuary Crafted for Rest & Renewal
          </h2>
          <p className="text-base sm:text-lg text-[#e8ded0]/85 font-light leading-relaxed">
            Nestled in the tranquil pocket of Krishnodaya Nagar in Indore, Madhya Pradesh,
            <strong className="font-normal text-[#fbf9f5]"> Shree Balaji Jungle Resorts</strong> was
            conceived as a serene escape from fast-paced city life. Here, whispering trees, open skies,
            and rustic architecture replace noise and deadlines.
          </p>
        </div>

        {/* 2-Column Story Grid with Authentic Imagery */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          {/* Visual Column */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="relative rounded-lg overflow-hidden group shadow-lg shadow-black/40 border border-[#1d4533]/40">
              <img
                src="/src/assets/images/exp_nature_retreat_1794396304858.jpg"
                alt="Nature walkway surrounded by lush trees at Shree Balaji Jungle Resorts"
                className="w-full h-72 sm:h-84 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06110b]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-medium text-[#f4efe4]">Canopy Walkways & Gazebos</span>
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden group shadow-lg shadow-black/40 border border-[#1d4533]/40 sm:translate-y-6">
              <img
                src="/src/assets/images/exp_family_cottage_1794396306894.jpg"
                alt="Private cottage stay architecture with ambient veranda"
                className="w-full h-72 sm:h-84 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06110b]/80 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs font-medium text-[#f4efe4]">Private Forest Cottages</span>
              </div>
            </div>
          </div>

          {/* Narrative Column */}
          <div className="lg:col-span-5 space-y-6 text-[#e8ded0]/85">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl font-normal text-[#fbf9f5]">
                Rooted in Central India’s Natural Beauty
              </h3>
              <p className="text-sm leading-relaxed">
                Whether you seek a weekend reset with family, an intimate celebration, or a calm environment
                for contemplation, our property combines organic construction materials, shaded verandas,
                and open greenery to create an authentic jungle retreat environment right here in Indore.
              </p>
              <p className="text-sm leading-relaxed">
                We believe in genuine, transparent hospitality. Every stay and group enquiry is handled
                with dedicated personal care by our on-site team, ensuring your dates and expectations are
                seamlessly aligned before arrival.
              </p>
            </div>

            {/* Core Values */}
            <div className="pt-4 border-t border-[#1d4533]/60 space-y-3">
              <div className="flex items-start gap-3">
                <Leaf className="w-5 h-5 text-[#c59e35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#fbf9f5]">Eco-Conscious Landscape</h4>
                  <p className="text-xs text-[#e8ded0]/70">Preserving trees and green cover for clean air and birdlife.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Compass className="w-5 h-5 text-[#c59e35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#fbf9f5]">Convenient Proximity</h4>
                  <p className="text-xs text-[#e8ded0]/70">Accessible from central Indore while feeling worlds apart.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-5 h-5 text-[#c59e35] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-[#fbf9f5]">Attentive Local Care</h4>
                  <p className="text-xs text-[#e8ded0]/70">Direct coordination with our team for transparent arrangements.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#06110b] bg-[#c59e35] hover:bg-[#dfb549] rounded transition-colors shadow-md"
              >
                Plan Your Stay With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
