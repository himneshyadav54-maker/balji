import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/resortData';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Views' },
    { id: 'nature', label: 'Serene Nature' },
    { id: 'cottages', label: 'Cottages & Stays' },
    { id: 'dining', label: 'Dining & Evenings' },
    { id: 'leisure', label: 'Leisure Pools' },
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex === null) return;
    setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
  }, [lightboxIndex, filteredItems.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#091710] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c365] mb-3">
            <Camera className="w-4 h-4" />
            <span>Visual Journal</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf9f5] tracking-tight leading-tight mb-4">
            Glimpses of Retreat Life
          </h2>
          <p className="text-sm sm:text-base text-[#e8ded0]/80 font-light max-w-xl mx-auto">
            Experience the harmony of central India’s flora, tranquil water pavilions, and warm
            evening glows that define Shree Balaji Jungle Resorts.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-md transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#c59e35] text-[#06110b] shadow-md shadow-[#c59e35]/20 font-semibold'
                  : 'bg-[#0f281b] text-[#e8ded0]/70 hover:text-[#fbf9f5] hover:bg-[#163627] border border-[#1d4533]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className="relative group rounded-lg overflow-hidden cursor-pointer bg-[#0c1f15] border border-[#1d4533]/50 hover:border-[#c59e35]/60 transition-all duration-300 shadow-md shadow-black/30"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#06110b] via-[#06110b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <span className="text-[11px] font-medium uppercase tracking-widest text-[#e5c365]">
                    {item.categoryLabel}
                  </span>
                  <Maximize2 className="w-4 h-4 text-[#e5c365]" />
                </div>
                <h4 className="font-serif text-lg text-[#fbf9f5] font-normal">{item.title}</h4>
                <p className="text-xs text-[#e8ded0]/80 line-clamp-1">{item.caption}</p>
              </div>

              {/* Static mobile caption under image */}
              <div className="p-3.5 sm:hidden border-t border-[#1d4533]/40">
                <span className="block text-[10px] uppercase text-[#e5c365]">{item.categoryLabel}</span>
                <span className="text-xs font-medium text-[#fbf9f5]">{item.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Photographic Transparency Notice */}
        <div className="mt-8 text-center text-xs text-[#e8ded0]/60 max-w-xl mx-auto">
          Photography depicts architectural concepts and natural landscape ambiance representative of Shree Balaji Jungle Resorts.
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-label="Image Lightbox"
          className="fixed inset-0 z-50 bg-[#06110b]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between pb-3 text-[#e8ded0]">
              <span className="text-xs tracking-wider uppercase text-[#e5c365]">
                {lightboxIndex + 1} of {filteredItems.length}
              </span>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full hover:bg-[#163627] text-[#e8ded0] hover:text-[#fbf9f5] transition-colors cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Lightbox Image */}
            <div className="relative w-full max-h-[70vh] flex items-center justify-center overflow-hidden rounded-lg bg-[#000]">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain"
                referrerPolicy="no-referrer"
              />

              {/* Navigation Arrows */}
              <button
                onClick={showPrev}
                aria-label="Previous Image"
                className="absolute left-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#06110b]/70 hover:bg-[#c59e35] text-[#fbf9f5] hover:text-[#06110b] backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={showNext}
                aria-label="Next Image"
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-[#06110b]/70 hover:bg-[#c59e35] text-[#fbf9f5] hover:text-[#06110b] backdrop-blur-sm transition-all duration-200 cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption & Info */}
            <div className="w-full text-center pt-4">
              <h3 className="font-serif text-xl font-normal text-[#fbf9f5] mb-1">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-sm text-[#e8ded0]/80 max-w-2xl mx-auto">
                {filteredItems[lightboxIndex].caption}
              </p>
              <span className="inline-block mt-2 text-[11px] text-[#e5c365] uppercase tracking-wider">
                {filteredItems[lightboxIndex].categoryLabel} · Shree Balaji Jungle Resorts
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
