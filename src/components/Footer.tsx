import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Youtube } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer id="contact" className="bg-[#050d08] text-[#e8ded0] border-t border-[#1d4533]/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#163627]">
          
          {/* Col 1: Branding & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c59e35] to-[#8d6d1d] p-0.5 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#0c1f15] flex items-center justify-center text-[#e5c365] font-serif font-bold text-sm">
                  SB
                </div>
              </div>
              <span className="font-serif text-xl font-semibold tracking-wide text-[#f4efe4]">
                Shree Balaji Jungle Resorts
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#e8ded0]/75 font-light leading-relaxed">
              A luxury nature retreat sanctuary in Krishnodaya Nagar, Indore, Madhya Pradesh.
              Designed for peaceful getaways, family cottages, open-air dining, and tranquil outdoor experiences.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-8 h-8 rounded-full bg-[#0b1c13] border border-[#1d4533] hover:border-[#c59e35] hover:text-[#c59e35] flex items-center justify-center transition-colors text-[#e8ded0]/70"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Page"
                className="w-8 h-8 rounded-full bg-[#0b1c13] border border-[#1d4533] hover:border-[#c59e35] hover:text-[#c59e35] flex items-center justify-center transition-colors text-[#e8ded0]/70"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Channel"
                className="w-8 h-8 rounded-full bg-[#0b1c13] border border-[#1d4533] hover:border-[#c59e35] hover:text-[#c59e35] flex items-center justify-center transition-colors text-[#e8ded0]/70"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e5c365]">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#e5c365] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#e5c365] transition-colors">
                  About the Resort
                </a>
              </li>
              <li>
                <a href="#experiences" onClick={(e) => handleNavClick(e, '#experiences')} className="hover:text-[#e5c365] transition-colors">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-[#e5c365] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" onClick={(e) => handleNavClick(e, '#location')} className="hover:text-[#e5c365] transition-colors">
                  Location & Map
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleNavClick(e, '#faq')} className="hover:text-[#e5c365] transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Experiences Concepts (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e5c365]">
              Stay Concepts
            </h4>
            <ul className="space-y-2 text-xs text-[#e8ded0]/80">
              <li>Nature & Relaxation Walkways</li>
              <li>Private Family Cottages</li>
              <li>Al-Fresco Twilight Dining</li>
              <li>Group Retreats & Reunions</li>
              <li>Tropical Pool Sun Deck</li>
            </ul>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="text-xs font-semibold text-[#e5c365] hover:underline cursor-pointer"
              >
                Plan Your Stay Enquiry →
              </button>
            </div>
          </div>

          {/* Col 4: Verified Contact & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3 text-xs">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-[#e5c365]">
              Verified Contact
            </h4>
            
            <div className="flex items-start gap-2.5 text-[#e8ded0]/80">
              <MapPin className="w-4 h-4 text-[#c59e35] shrink-0 mt-0.5" />
              <span>{RESORT_INFO.location.address}</span>
            </div>

            <div className="flex items-center gap-2.5 text-[#e8ded0]/80">
              <Phone className="w-4 h-4 text-[#c59e35] shrink-0" />
              <a href={`tel:${RESORT_INFO.contact.phoneRaw}`} className="hover:text-[#e5c365] font-mono">
                {RESORT_INFO.contact.phone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-[#e8ded0]/80">
              <Mail className="w-4 h-4 text-[#c59e35] shrink-0" />
              <a href={`mailto:${RESORT_INFO.contact.email}`} className="hover:text-[#e5c365]">
                {RESORT_INFO.contact.email}
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-[#e8ded0]/70 pt-1">
              <Clock className="w-4 h-4 text-[#c59e35] shrink-0 mt-0.5" />
              <span>{RESORT_INFO.contact.hours}</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Legal & Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#e8ded0]/60">
          <div>
            © {currentYear} Shree Balaji Jungle Resorts. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Krishnodaya Nagar, Indore, Madhya Pradesh, India</span>
            <span aria-hidden="true">·</span>
            <span>Hospitality & Nature Retreat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
