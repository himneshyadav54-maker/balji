import React, { useState } from 'react';
import { MessageSquare, Phone, X } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export const FloatingActions: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${RESORT_INFO.contact.whatsapp}?text=${encodeURIComponent(
    'Namaste Shree Balaji Jungle Resorts team, I would like to enquire about room availability and resort details.'
  )}`;

  return (
    <>
      {/* Floating WhatsApp Action Button (Desktop & Tablet) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-2">
        {showTooltip && (
          <div className="bg-[#0b1c13] text-[#fbf9f5] text-xs py-2 px-3.5 rounded-lg border border-[#256c3f] shadow-xl flex items-center gap-2 animate-in fade-in duration-300">
            <span>Enquire on WhatsApp</span>
            <button
              onClick={() => setShowTooltip(false)}
              className="text-[#e8ded0]/60 hover:text-white p-0.5"
              aria-label="Dismiss tooltip"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Shree Balaji Jungle Resorts on WhatsApp"
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#163e26] to-[#25a855] text-white rounded-full shadow-2xl shadow-green-950/60 hover:scale-105 transition-all duration-300 border border-[#55d985]/30 focus:outline-none focus:ring-2 focus:ring-[#55d985]"
        >
          <span className="sr-only">Chat on WhatsApp</span>
          <MessageSquare className="w-7 h-7 text-white fill-white/20 group-hover:scale-110 transition-transform" />
        </a>
      </div>

      {/* Mobile Sticky Quick Action Bar (<15% viewport height) */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#06110b]/96 backdrop-blur-md border-t border-[#1d4533] px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${RESORT_INFO.contact.phoneRaw}`}
          className="flex-1 py-2 px-3 rounded bg-[#0b1c13] border border-[#1d4533] text-[#e5c365] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call Resort</span>
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2 px-3 rounded bg-[#163e26] border border-[#256c3f] text-[#55d985] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </>
  );
};
