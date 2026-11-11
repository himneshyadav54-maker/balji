/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experiences } from './components/Experiences';
import { Gallery } from './components/Gallery';
import { BookingForm } from './components/BookingForm';
import { LocationSection } from './components/LocationSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { NotFoundPage } from './components/NotFoundPage';

export default function App() {
  const [selectedExperience, setSelectedExperience] = useState<string>('');
  const [is404, setIs404] = useState<boolean>(false);

  useEffect(() => {
    // Check if path is not root or hash
    const path = window.location.pathname;
    if (path !== '/' && path !== '' && !path.startsWith('/#')) {
      // If deployed or routed to unknown path
      if (path === '/404' || path.length > 1) {
        setIs404(true);
      }
    }

    const handlePopState = () => {
      const currentPath = window.location.pathname;
      setIs404(currentPath === '/404');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSelectExperience = (expTitle: string) => {
    setSelectedExperience(expTitle);
    scrollToBooking();
  };

  if (is404) {
    return (
      <NotFoundPage
        onReturnHome={() => {
          window.history.pushState({}, '', '/');
          setIs404(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#06110b] text-[#fbf9f5] flex flex-col font-sans selection:bg-[#c59e35] selection:text-[#06110b]">
      {/* Fixed Sticky Header Navigation */}
      <Navbar onOpenBooking={scrollToBooking} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenBooking={scrollToBooking} onExplore={scrollToAbout} />

        {/* About the Resort */}
        <About onOpenBooking={scrollToBooking} />

        {/* Curated Experiences */}
        <Experiences onSelectExperience={handleSelectExperience} />

        {/* Photo Gallery & Lightbox */}
        <Gallery />

        {/* Plan Your Visit / Booking Enquiry */}
        <BookingForm
          selectedExperience={selectedExperience}
          onExperienceClear={() => setSelectedExperience('')}
        />

        {/* Location & Directions */}
        <LocationSection />

        {/* Testimonials & Host Ethos */}
        <TestimonialsSection />

        {/* Frequently Asked Questions */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={scrollToBooking} />

      {/* Floating Conversion CTAs (WhatsApp & Mobile Call) */}
      <FloatingActions />
    </div>
  );
}
