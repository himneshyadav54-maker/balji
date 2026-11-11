import React from 'react';
import { Compass, ArrowLeft, Home, Phone } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface NotFoundPageProps {
  onReturnHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ onReturnHome }) => {
  return (
    <div className="min-h-screen bg-[#06110b] flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-lg w-full text-center space-y-6 bg-[#0b1c13] border border-[#1d4533] p-8 sm:p-12 rounded-2xl shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-[#10291d] border border-[#c59e35]/40 mx-auto flex items-center justify-center text-[#e5c365]">
          <Compass className="w-8 h-8 animate-spin-slow" />
        </div>

        <span className="text-xs uppercase tracking-widest text-[#e5c365] font-mono">
          Error 404 · Page Not Found
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-[#fbf9f5] font-normal">
          Wandered Off the Forest Path
        </h1>

        <p className="text-sm text-[#e8ded0]/80 leading-relaxed font-light">
          The requested retreat page or link does not exist. Let us guide you back to the sanctuary of
          Shree Balaji Jungle Resorts in Krishnodaya Nagar, Indore.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onReturnHome}
            className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#06110b] bg-[#c59e35] hover:bg-[#dfb549] rounded-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Resort Home</span>
          </button>

          <a
            href={`tel:${RESORT_INFO.contact.phoneRaw}`}
            className="py-3 px-6 text-xs font-semibold uppercase tracking-wider text-[#e8ded0] bg-[#163627] hover:bg-[#1d4533] rounded-md transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#c59e35]" />
            <span>Contact Front Desk</span>
          </a>
        </div>
      </div>
    </div>
  );
};
