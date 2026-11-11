import React from 'react';
import { Check, ArrowRight, Info } from 'lucide-react';
import { EXPERIENCES, ExperienceItem } from '../data/resortData';

interface ExperiencesProps {
  onSelectExperience: (experienceTitle: string) => void;
}

export const Experiences: React.FC<ExperiencesProps> = ({ onSelectExperience }) => {
  return (
    <section id="experiences" className="py-20 sm:py-28 bg-[#06110b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c365] mb-3">
              <span>Curated Stays & Activities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf9f5] tracking-tight leading-tight">
              Designed for Peaceful Escapes & Shared Moments
            </h2>
          </div>
          <p className="text-xs text-[#e8ded0]/70 max-w-sm md:text-right font-light leading-relaxed">
            Every guest journey is unique. Select your preferred concept below to request availability
            and tailored arrangements directly with our team.
          </p>
        </div>

        {/* Note on Verification & Facilities */}
        <div className="mb-10 p-4 rounded-md bg-[#0e2418] border border-[#1d4533] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#c59e35] shrink-0 mt-0.5" />
          <p className="text-xs text-[#e8ded0]/80 leading-relaxed">
            <strong className="text-[#fbf9f5] font-medium">Guest Transparency Note:</strong> All offerings
            and amenities listed below represent property concepts and available services verified by resort
            management upon direct booking enquiry. We customize arrangements according to seasonal schedules and
            party size.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {EXPERIENCES.map((exp: ExperienceItem) => (
            <div
              key={exp.id}
              className="bg-[#0b1c13] rounded-lg overflow-hidden border border-[#1d4533]/50 hover:border-[#c59e35]/50 transition-all duration-300 flex flex-col group shadow-lg shadow-black/30"
            >
              {/* Card Image */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c13] via-transparent to-transparent opacity-90" />
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-medium tracking-wider uppercase px-2.5 py-1 bg-[#06110b]/80 backdrop-blur-sm text-[#e5c365] rounded border border-[#e5c365]/30">
                    {exp.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-normal text-[#fbf9f5] mb-3 group-hover:text-[#e5c365] transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[#e8ded0]/80 leading-relaxed mb-6 font-light">
                    {exp.summary}
                  </p>

                  {/* Highlights list */}
                  <ul className="space-y-2.5 mb-8">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-[#e8ded0]/85">
                        <Check className="w-4 h-4 text-[#c59e35] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#163627] flex items-center justify-between gap-4">
                  <span className="text-[11px] text-[#e8ded0]/60 italic">
                    {exp.verificationStatus}
                  </span>
                  <button
                    onClick={() => onSelectExperience(exp.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#e5c365] hover:text-[#fae08c] transition-colors group/btn cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
