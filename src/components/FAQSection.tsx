import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageSquare } from 'lucide-react';
import { FAQS, FAQItem, RESORT_INFO } from '../data/resortData';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#091710] relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c365] mb-3">
            <HelpCircle className="w-4 h-4" />
            <span>Clear Answers</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf9f5] tracking-tight leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#e8ded0]/80 font-light max-w-lg mx-auto">
            Everything you need to know about planning your visit to Shree Balaji Jungle Resorts.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4 mb-14">
          {FAQS.map((faq: FAQItem) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-[#0b1c13] rounded-lg border border-[#1d4533] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 hover:bg-[#0e2418] transition-colors focus:outline-none cursor-pointer"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#fbf9f5] font-normal">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border border-[#1d4533] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#c59e35] text-[#06110b]' : 'text-[#e5c365]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-[#e8ded0]/85 font-light leading-relaxed border-t border-[#163627]/60">
                    <p>{faq.answer}</p>
                    <div className="mt-3 text-xs text-[#c59e35]">
                      Category: {faq.category} · For specialized requests, contact our resort desk directly.
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need More Help / Contact Card */}
        <div className="bg-[#0b1c13] rounded-xl border border-[#c59e35]/40 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-black/30">
          <div>
            <h3 className="font-serif text-xl text-[#fbf9f5] font-normal mb-1">
              Have a Specific or Custom Question?
            </h3>
            <p className="text-xs sm:text-sm text-[#e8ded0]/80">
              For any questions not listed above, direct your inquiry to our on-site team for immediate assistance.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${RESORT_INFO.contact.phoneRaw}`}
              className="py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#06110b] bg-[#c59e35] hover:bg-[#dfb549] rounded transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Us</span>
            </a>
            <a
              href={`https://wa.me/${RESORT_INFO.contact.whatsapp}?text=${encodeURIComponent('Hello Shree Balaji Jungle Resorts, I have a question regarding booking.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#fbf9f5] bg-[#163e26] hover:bg-[#1f5534] border border-[#256c3f] rounded transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#55d985]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
