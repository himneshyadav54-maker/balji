import React, { useState } from 'react';
import { Quote, MessageSquareHeart, Check, Sparkles, Send } from 'lucide-react';
import { RESORT_INFO } from '../data/resortData';

export const TestimonialsSection: React.FC = () => {
  const [reviewSubmitted, setReviewSubmitted] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [stayMonth, setStayMonth] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleReviewSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim() || !feedback.trim()) return;
    setReviewSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-[#06110b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c365] mb-3">
            <MessageSquareHeart className="w-4 h-4" />
            <span>Hospitality Standard</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf9f5] tracking-tight leading-tight mb-4">
            Guest Reflections & Host Ethos
          </h2>
          <p className="text-sm sm:text-base text-[#e8ded0]/80 font-light max-w-xl mx-auto">
            Honest, verified guest reflections are the cornerstone of our hospitality.
            Every stay is curated with personal dedication.
          </p>
        </div>

        {/* 2-Column Ethos & Review Registry */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-14">
          
          {/* Left Column: Management Welcome Letter & Verified Ethos (7 cols) */}
          <div className="lg:col-span-7 bg-[#0b1c13] rounded-xl border border-[#1d4533] p-8 sm:p-10 flex flex-col justify-between shadow-xl shadow-black/30">
            <div>
              <Quote className="w-10 h-10 text-[#c59e35]/40 mb-6" />
              <h3 className="font-serif text-2xl text-[#fbf9f5] font-normal mb-4">
                "Our promise is simple: peace, privacy, and genuine nature."
              </h3>
              <p className="text-sm text-[#e8ded0]/85 leading-relaxed font-light mb-4">
                At Shree Balaji Jungle Resorts, we intentionally avoid superficial commercial distractions.
                From the moment you arrive in Krishnodaya Nagar, our team works to ensure your time
                among the trees and open verandas is unhurried, comfortable, and restorative.
              </p>
              <p className="text-sm text-[#e8ded0]/85 leading-relaxed font-light">
                In strict adherence to authenticity, we publish guest reviews exclusively when verified
                by our property management following completed visits. We welcome you to experience the
                retreat first-hand.
              </p>
            </div>

            <div className="pt-8 mt-8 border-t border-[#163627] flex items-center justify-between">
              <div>
                <span className="block text-sm font-serif font-medium text-[#fbf9f5]">
                  Property Management Team
                </span>
                <span className="block text-xs text-[#e5c365]">
                  Shree Balaji Jungle Resorts · Indore, MP
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#55d985]">
                <Check className="w-4 h-4" />
                <span>Verified Property</span>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Guest Feedback Box (5 cols) */}
          <div className="lg:col-span-5 bg-[#081810] rounded-xl border border-[#1d4533] p-6 sm:p-8 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#c59e35]" />
                <h4 className="text-sm font-semibold uppercase tracking-wider text-[#fbf9f5]">
                  Have You Stayed With Us?
                </h4>
              </div>
              <p className="text-xs text-[#e8ded0]/75 leading-relaxed mb-6">
                We encourage all past visitors to share their impressions. Verified submissions are reviewed
                and published with your consent.
              </p>

              {reviewSubmitted ? (
                <div className="p-4 rounded-md bg-[#10291d] border border-[#256c3f] text-center space-y-2">
                  <span className="text-xs font-semibold text-[#55d985] block">
                    Thank You for Your Review!
                  </span>
                  <p className="text-xs text-[#e8ded0]/80">
                    Your reflection has been received and forwarded to our guest relations team for verification.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="guestName" className="block text-[11px] uppercase tracking-wider text-[#e8ded0]/80 mb-1">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      id="guestName"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      placeholder="e.g. Priyanshu Sharma"
                      required
                      className="w-full bg-[#06110b] border border-[#1d4533] focus:border-[#c59e35] rounded p-2 text-xs text-[#fbf9f5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="stayMonth" className="block text-[11px] uppercase tracking-wider text-[#e8ded0]/80 mb-1">
                      Month of Visit / Booking Ref
                    </label>
                    <input
                      type="text"
                      id="stayMonth"
                      value={stayMonth}
                      onChange={(e) => setStayMonth(e.target.value)}
                      placeholder="e.g. October 2026 / Booking Ref"
                      className="w-full bg-[#06110b] border border-[#1d4533] focus:border-[#c59e35] rounded p-2 text-xs text-[#fbf9f5] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="feedback" className="block text-[11px] uppercase tracking-wider text-[#e8ded0]/80 mb-1">
                      Your Reflection
                    </label>
                    <textarea
                      id="feedback"
                      rows={3}
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Share your stay experience, favorite moments, or recommendations..."
                      required
                      className="w-full bg-[#06110b] border border-[#1d4533] focus:border-[#c59e35] rounded p-2 text-xs text-[#fbf9f5] focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#06110b] bg-[#c59e35] hover:bg-[#dfb549] rounded transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    Submit Review for Verification
                  </button>
                </form>
              )}
            </div>

            <div className="pt-4 border-t border-[#1d4533]/50 text-[11px] text-[#e8ded0]/50 mt-4">
              Owner-verified reviews policy in effect. No fabricated ratings or paid testimonials.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
