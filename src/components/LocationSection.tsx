import React from 'react';
import { MapPin, Navigation, Car, Plane, Train, Compass, ExternalLink } from 'lucide-react';
import { RESORT_INFO, INDORE_LANDMARKS } from '../data/resortData';

export const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 sm:py-28 bg-[#091710] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c365] mb-3">
            <Compass className="w-4 h-4" />
            <span>Location & Access</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf9f5] tracking-tight leading-tight mb-4">
            Finding Your Way to the Jungle Sanctuary
          </h2>
          <p className="text-sm sm:text-base text-[#e8ded0]/85 font-light leading-relaxed">
            Conveniently situated in <strong className="font-normal text-[#fbf9f5]">Krishnodaya Nagar, Indore, Madhya Pradesh</strong>,
            Shree Balaji Jungle Resorts offers a peaceful retreat while remaining within comfortable reach
            of major transport transit hubs in Indore.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Map & Coordinates View (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b1c13] rounded-xl border border-[#1d4533] overflow-hidden shadow-xl shadow-black/40">
            {/* Map Header */}
            <div className="p-4 sm:p-5 border-b border-[#1d4533] flex flex-wrap items-center justify-between gap-3 bg-[#06110b]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#c59e35]" />
                <div>
                  <h3 className="text-sm font-semibold text-[#fbf9f5]">Krishnodaya Nagar</h3>
                  <span className="text-xs text-[#e8ded0]/60">Indore, Madhya Pradesh, India</span>
                </div>
              </div>
              <a
                href={RESORT_INFO.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#06110b] bg-[#c59e35] hover:bg-[#dfb549] rounded transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="relative h-80 sm:h-96 w-full bg-[#06110b]">
              <iframe
                title="Shree Balaji Jungle Resorts Location in Krishnodaya Nagar, Indore"
                src={RESORT_INFO.location.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'contrast(1.05) saturate(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map footer note */}
            <div className="p-4 bg-[#081810] border-t border-[#1d4533] flex items-center justify-between text-xs text-[#e8ded0]/70">
              <span>Verified Location: Krishnodaya Nagar, Indore</span>
              <span className="text-[11px] text-[#e5c365]">GPS Nav & Escort provided on booking</span>
            </div>
          </div>

          {/* Travel Proximity & Landmarks (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#0b1c13] p-6 rounded-xl border border-[#1d4533] shadow-lg shadow-black/30">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e5c365] mb-4 flex items-center gap-2">
                <Navigation className="w-4 h-4" />
                Transit Proximity
              </h3>

              <div className="space-y-4">
                {INDORE_LANDMARKS.map((landmark, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between pb-3 border-b border-[#163627] last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      {idx === 0 && <Car className="w-4 h-4 text-[#c59e35]" />}
                      {idx === 1 && <Train className="w-4 h-4 text-[#c59e35]" />}
                      {idx === 2 && <Plane className="w-4 h-4 text-[#c59e35]" />}
                      {idx === 3 && <Compass className="w-4 h-4 text-[#c59e35]" />}
                      <span className="text-xs sm:text-sm font-medium text-[#fbf9f5]">
                        {landmark.name}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="block text-xs font-mono font-semibold text-[#e5c365]">
                        {landmark.distance}
                      </span>
                      <span className="text-[10px] text-[#e8ded0]/60">{landmark.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrival & Accessibility Guidelines */}
            <div className="bg-[#0b1c13] p-6 rounded-xl border border-[#1d4533] text-xs text-[#e8ded0]/80 space-y-3">
              <h4 className="font-semibold text-sm text-[#fbf9f5] flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#c59e35]" />
                Arrival & Parking
              </h4>
              <p className="leading-relaxed">
                Ample secure guest parking is available on-site for both private cars and group transport vans.
              </p>
              <p className="leading-relaxed">
                For guests arriving via railway or airport, pre-arranged taxi transfers or direct route guidance
                can be coordinated upon confirmation of your stay.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
