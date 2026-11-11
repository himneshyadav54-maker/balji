import React, { useState } from 'react';
import { Calendar, Users, Phone, User, MessageSquare, CheckCircle2, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { RESORT_INFO, EXPERIENCES } from '../data/resortData';
import {
  BookingFormData,
  validateBookingEnquiry,
  calculateNights,
  buildWhatsAppEnquiryUrl,
  formatDateDisplay
} from '../utils/booking';

interface BookingFormProps {
  selectedExperience?: string;
  onExperienceClear?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  selectedExperience,
  onExperienceClear
}) => {
  // Tomorrow's date for default check-in
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const dayAfter = new Date();
  dayAfter.setDate(dayAfter.getDate() + 3);

  const defaultCheckIn = tomorrow.toISOString().split('T')[0];
  const defaultCheckOut = dayAfter.toISOString().split('T')[0];

  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    checkIn: defaultCheckIn,
    checkOut: defaultCheckOut,
    adults: 2,
    children: 0,
    roomPreference: selectedExperience || 'Nature & Relaxation',
    specialRequests: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedBooking, setSubmittedBooking] = useState<{
    id: string;
    data: BookingFormData;
    nights: number;
  } | null>(null);

  // Sync preference if changed from parent
  React.useEffect(() => {
    if (selectedExperience) {
      setFormData(prev => ({ ...prev, roomPreference: selectedExperience }));
    }
  }, [selectedExperience]);

  const nights = calculateNights(formData.checkIn, formData.checkOut);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'adults' || name === 'children' ? parseInt(value, 10) || 0 : value
    }));

    if (errors[name]) {
      setErrors(prev => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateBookingEnquiry(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    const bookingId = `SBJR-${Math.floor(100000 + Math.random() * 900000)}`;
    setSubmittedBooking({
      id: bookingId,
      data: { ...formData },
      nights: validation.nights
    });
  };

  const handleWhatsAppClick = () => {
    const validation = validateBookingEnquiry(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    const url = buildWhatsAppEnquiryUrl(formData, RESORT_INFO.contact.whatsapp);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="booking" className="py-20 sm:py-28 bg-[#06110b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#e5c365] mb-3">
            <Clock className="w-4 h-4" />
            <span>Reservations & Enquiries</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-[#fbf9f5] tracking-tight leading-tight mb-4">
            Plan Your Visit
          </h2>
          <p className="text-sm sm:text-base text-[#e8ded0]/80 font-light max-w-xl mx-auto">
            Reserve your dates or discuss bespoke group arrangements directly with our resort management
            in Krishnodaya Nagar, Indore.
          </p>
        </div>

        {/* 2-Column Booking Container */}
        <div className="max-w-5xl mx-auto bg-[#0b1c13] rounded-xl border border-[#1d4533] shadow-2xl shadow-black/50 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Form Fields */}
            <div className="lg:col-span-7 p-6 sm:p-10">
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                
                {/* Guest Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-medium uppercase tracking-wider text-[#e8ded0]/90 mb-2">
                      Guest Name <span className="text-[#c59e35]">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-[#e8ded0]/40 absolute left-3.5 top-3.5" />
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Himnesh Yadav"
                        className={`w-full bg-[#06110b] border ${
                          errors.fullName ? 'border-red-500' : 'border-[#1d4533] focus:border-[#c59e35]'
                        } rounded-md py-2.5 pl-10 pr-3 text-sm text-[#fbf9f5] placeholder-[#e8ded0]/30 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-wider text-[#e8ded0]/90 mb-2">
                      Phone Number <span className="text-[#c59e35]">*</span>
                    </label>
                    <div className="relative">
                      <Phone className="w-4 h-4 text-[#e8ded0]/40 absolute left-3.5 top-3.5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="10-digit mobile number"
                        className={`w-full bg-[#06110b] border ${
                          errors.phone ? 'border-red-500' : 'border-[#1d4533] focus:border-[#c59e35]'
                        } rounded-md py-2.5 pl-10 pr-3 text-sm text-[#fbf9f5] placeholder-[#e8ded0]/30 focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Dates: Check-In & Check-Out */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="checkIn" className="block text-xs font-medium uppercase tracking-wider text-[#e8ded0]/90 mb-2">
                      Check-In Date <span className="text-[#c59e35]">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#e8ded0]/40 absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className={`w-full bg-[#06110b] border ${
                          errors.checkIn ? 'border-red-500' : 'border-[#1d4533] focus:border-[#c59e35]'
                        } rounded-md py-2.5 pl-10 pr-3 text-sm text-[#fbf9f5] focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.checkIn && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.checkIn}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="checkOut" className="block text-xs font-medium uppercase tracking-wider text-[#e8ded0]/90 mb-2">
                      Check-Out Date <span className="text-[#c59e35]">*</span>
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-[#e8ded0]/40 absolute left-3.5 top-3.5" />
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className={`w-full bg-[#06110b] border ${
                          errors.checkOut ? 'border-red-500' : 'border-[#1d4533] focus:border-[#c59e35]'
                        } rounded-md py-2.5 pl-10 pr-3 text-sm text-[#fbf9f5] focus:outline-none transition-colors`}
                      />
                    </div>
                    {errors.checkOut && (
                      <p className="mt-1 text-xs text-red-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.checkOut}
                      </p>
                    )}
                  </div>
                </div>

                {/* Stay Duration Badge */}
                {nights > 0 && (
                  <div className="text-xs text-[#e8ded0]/80 bg-[#10291d] px-3.5 py-2 rounded border border-[#1d4533] flex items-center justify-between">
                    <span>Selected Stay Duration:</span>
                    <strong className="text-[#e5c365] font-semibold">
                      {nights} Night{nights > 1 ? 's' : ''} ({formatDateDisplay(formData.checkIn)} – {formatDateDisplay(formData.checkOut)})
                    </strong>
                  </div>
                )}

                {/* Guests: Adults & Children */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="adults" className="block text-xs font-medium uppercase tracking-wider text-[#e8ded0]/90 mb-2">
                      Adults (Age 12+) <span className="text-[#c59e35]">*</span>
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-[#e8ded0]/40 absolute left-3.5 top-3.5" />
                      <select
                        id="adults"
                        name="adults"
                        value={formData.adults}
                        onChange={handleChange}
                        className="w-full bg-[#06110b] border border-[#1d4533] focus:border-[#c59e35] rounded-md py-2.5 pl-10 pr-3 text-sm text-[#fbf9f5] focus:outline-none transition-colors cursor-pointer"
                      >
                        {[1, 2, 3, 4, 5, 6, 8, 10, 15, 20, 25, 30].map(num => (
                          <option key={num} value={num}>
                            {num} Adult{num > 1 ? 's' : ''}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="children" className="block text-xs font-medium uppercase tracking-wider text-[#e8ded0]/90 mb-2">
                      Children (Under 12)
                    </label>
                    <select
                      id="children"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full bg-[#06110b] border border-[#1d4533] focus:border-[#c59e35] rounded-md py-2.5 px-3 text-sm text-[#fbf9f5] focus:outline-none transition-colors cursor-pointer"
                    >
                      {[0, 1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Child' : 'Children'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Room / Experience Preference */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="roomPreference" className="text-xs font-medium uppercase tracking-wider text-[#e8ded0]/90">
                      Experience Concept Preference
                    </label>
                    {selectedExperience && onExperienceClear && (
                      <button
                        type="button"
                        onClick={onExperienceClear}
                        className="text-[11px] text-[#e5c365] hover:underline"
                      >
                        Reset preference
                      </button>
                    )}
                  </div>
                  <select
                    id="roomPreference"
                    name="roomPreference"
                    value={formData.roomPreference}
                    onChange={handleChange}
                    className="w-full bg-[#06110b] border border-[#1d4533] focus:border-[#c59e35] rounded-md py-2.5 px-3 text-sm text-[#fbf9f5] focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Nature & Relaxation">Nature & Relaxation Getaway</option>
                    <option value="Family Getaways">Family Nature Cottage</option>
                    <option value="Leisure Experiences">Leisure & Open-Air Dining Stays</option>
                    <option value="Group Outings">Group Outing / Day Retreat</option>
                    <option value="General Inquiry">General Property Inquiry</option>
                  </select>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-xs font-medium uppercase tracking-wider text-[#e8ded0]/90 mb-2">
                    Special Requests or Questions (Optional)
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={3}
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="e.g. Vegetarian meal preferences, check-in arrival time, celebration decor..."
                    className="w-full bg-[#06110b] border border-[#1d4533] focus:border-[#c59e35] rounded-md p-3 text-sm text-[#fbf9f5] placeholder-[#e8ded0]/30 focus:outline-none transition-colors"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#06110b] bg-gradient-to-r from-[#e5c365] to-[#c59e35] hover:from-[#fae08c] hover:to-[#dfb549] rounded-md shadow-md shadow-[#c59e35]/20 hover:shadow-[#c59e35]/30 transition-all cursor-pointer text-center"
                  >
                    Submit Booking Enquiry
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="py-3.5 px-6 text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#fbf9f5] bg-[#163e26] hover:bg-[#1f5534] border border-[#256c3f] rounded-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                    title="Send pre-filled enquiry directly to resort WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4 text-[#55d985]" />
                    <span>WhatsApp Enquiry</span>
                  </button>
                </div>
              </form>
            </div>

            {/* Right Column: Verified Details & Direct Contact */}
            <div className="lg:col-span-5 bg-[#081810] p-6 sm:p-10 border-t lg:border-t-0 lg:border-l border-[#1d4533] flex flex-col justify-between">
              <div className="space-y-6">
                <div>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[#e5c365] block mb-2">
                    Verified Location
                  </span>
                  <h3 className="font-serif text-xl text-[#fbf9f5] font-normal mb-2">
                    Shree Balaji Jungle Resorts
                  </h3>
                  <p className="text-xs text-[#e8ded0]/80 leading-relaxed">
                    {RESORT_INFO.location.address}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#1d4533]/60 space-y-4">
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#e8ded0]/60 mb-1">
                      Direct Reservations Desk
                    </span>
                    <a
                      href={`tel:${RESORT_INFO.contact.phoneRaw}`}
                      className="text-base font-semibold text-[#e5c365] hover:underline font-mono"
                    >
                      {RESORT_INFO.contact.phone}
                    </a>
                  </div>

                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#e8ded0]/60 mb-1">
                      Enquiry Email
                    </span>
                    <a
                      href={`mailto:${RESORT_INFO.contact.email}`}
                      className="text-xs text-[#e8ded0] hover:text-[#e5c365] transition-colors"
                    >
                      {RESORT_INFO.contact.email}
                    </a>
                  </div>

                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[#e8ded0]/60 mb-1">
                      Enquiry Hours
                    </span>
                    <p className="text-xs text-[#e8ded0]/80">{RESORT_INFO.contact.hours}</p>
                  </div>
                </div>

                <div className="p-4 rounded-md bg-[#0e2418] border border-[#1d4533]">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#fbf9f5] mb-1.5 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#c59e35]" />
                    Booking Guarantee
                  </h4>
                  <p className="text-xs text-[#e8ded0]/75 leading-relaxed">
                    We do not charge upfront online gateway fees before verifying room allotment and dates.
                    Once submitted, our team confirms package pricing and availability within hours.
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-[#1d4533]/60 text-[11px] text-[#e8ded0]/60">
                Official enquiries for Shree Balaji Jungle Resorts, Indore.
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {submittedBooking && (
        <div
          role="dialog"
          aria-label="Enquiry Confirmation"
          className="fixed inset-0 z-50 bg-[#06110b]/90 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div className="bg-[#0b1c13] border border-[#c59e35]/60 rounded-xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative text-left">
            <div className="w-12 h-12 rounded-full bg-[#163e26] border border-[#256c3f] flex items-center justify-center mb-4 text-[#55d985]">
              <CheckCircle2 className="w-7 h-7" />
            </div>

            <span className="text-[11px] font-mono uppercase text-[#e5c365] tracking-widest block mb-1">
              Reference: {submittedBooking.id}
            </span>
            <h3 className="font-serif text-2xl text-[#fbf9f5] font-normal mb-2">
              Thank You, {submittedBooking.data.fullName}!
            </h3>
            <p className="text-xs sm:text-sm text-[#e8ded0]/80 leading-relaxed mb-6">
              Your stay enquiry has been received by the Shree Balaji Jungle Resorts reservations desk.
              Our property manager will review room availability and contact you shortly at{' '}
              <span className="font-mono text-[#fbf9f5] font-medium">{submittedBooking.data.phone}</span>.
            </p>

            <div className="bg-[#06110b] p-4 rounded-lg border border-[#1d4533] space-y-2 mb-6 text-xs">
              <div className="flex justify-between text-[#e8ded0]/80">
                <span>Dates:</span>
                <strong className="text-[#fbf9f5]">
                  {submittedBooking.data.checkIn} to {submittedBooking.data.checkOut} ({submittedBooking.nights} nights)
                </strong>
              </div>
              <div className="flex justify-between text-[#e8ded0]/80">
                <span>Party Size:</span>
                <strong className="text-[#fbf9f5]">
                  {submittedBooking.data.adults} Adults
                  {submittedBooking.data.children > 0 ? `, ${submittedBooking.data.children} Children` : ''}
                </strong>
              </div>
              <div className="flex justify-between text-[#e8ded0]/80">
                <span>Preference:</span>
                <strong className="text-[#e5c365]">{submittedBooking.data.roomPreference}</strong>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => {
                  const url = buildWhatsAppEnquiryUrl(submittedBooking.data, RESORT_INFO.contact.whatsapp);
                  window.open(url, '_blank', 'noopener,noreferrer');
                }}
                className="flex-1 py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-[#06110b] bg-[#55d985] hover:bg-[#68e596] rounded text-center flex items-center justify-center gap-1.5"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                Also Forward on WhatsApp
              </button>
              <button
                onClick={() => setSubmittedBooking(null)}
                className="py-2.5 px-5 text-xs font-semibold uppercase tracking-wider text-[#e8ded0] bg-[#163627] hover:bg-[#1d4533] rounded transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
