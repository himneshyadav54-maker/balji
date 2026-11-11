import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experiences', href: '#experiences' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#06110b]/92 backdrop-blur-md border-b border-[#1d4533]/50 py-3 shadow-lg shadow-black/30'
          : 'bg-gradient-to-b from-[#06110b]/80 via-[#06110b]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 whitespace-nowrap shrink-0 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#c59e35] to-[#8d6d1d] p-0.5 flex items-center justify-center shadow-md shadow-black/40">
            <div className="w-full h-full rounded-full bg-[#0c1f15] flex items-center justify-center text-[#e5c365] font-serif font-bold text-sm">
              SB
            </div>
          </div>
          <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-[#f4efe4] group-hover:text-[#e5c365] transition-colors">
            Shree Balaji Jungle Resorts
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-[#e8ded0]/80"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="whitespace-nowrap shrink-0 hover:text-[#e5c365] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#c59e35] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden sm:flex items-center gap-4 shrink-0">
          <a
            href={`tel:${RESORT_INFO.contact.phoneRaw}`}
            className="hidden lg:flex items-center gap-2 text-xs text-[#e8ded0]/70 hover:text-[#e5c365] transition-colors"
            title="Call Reservations"
          >
            <Phone className="w-3.5 h-3.5 text-[#c59e35]" />
            <span className="font-mono">{RESORT_INFO.contact.phone}</span>
          </a>
          <button
            onClick={onOpenBooking}
            className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#06110b] bg-gradient-to-r from-[#e5c365] to-[#c59e35] hover:from-[#f3d789] hover:to-[#d8b045] rounded shadow-md shadow-[#c59e35]/20 hover:shadow-[#c59e35]/40 transition-all duration-200 whitespace-nowrap shrink-0 cursor-pointer"
          >
            Book Your Stay
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#06110b] bg-[#c59e35] rounded whitespace-nowrap"
          >
            Book
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            className="p-2 text-[#e8ded0] hover:text-[#e5c365] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#0a1810]/98 border-b border-[#1d4533] px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-base font-medium text-[#e8ded0] hover:text-[#e5c365] py-2 border-b border-[#163627]/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-[#06110b] bg-gradient-to-r from-[#e5c365] to-[#c59e35] rounded-md shadow-md"
            >
              Book Your Stay
            </button>
            <div className="flex items-center justify-between text-xs text-[#e8ded0]/80 pt-2">
              <a
                href={`tel:${RESORT_INFO.contact.phoneRaw}`}
                className="flex items-center gap-1.5 py-2 px-3 rounded bg-[#10291d] border border-[#1d4533] text-[#e5c365]"
              >
                <Phone className="w-3.5 h-3.5" />
                Call Resort
              </a>
              <a
                href={`https://wa.me/${RESORT_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello Shree Balaji Jungle Resorts, I would like to enquire about a stay.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 py-2 px-3 rounded bg-[#163e26] border border-[#256c3f] text-[#55d985]"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
