/**
 * Booking and enquiry helper utilities for Shree Balaji Jungle Resorts
 */

export interface BookingFormData {
  fullName: string;
  phone: string;
  email?: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  roomPreference?: string;
  specialRequests?: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
  nights: number;
}

/**
 * Calculates number of nights between checkIn and checkOut dates
 */
export function calculateNights(checkIn: string, checkOut: string): number {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  
  if (isNaN(start.getTime()) || isNaN(end.getTime())) return 0;
  
  const diffTime = end.getTime() - start.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays > 0 ? diffDays : 0;
}

/**
 * Validates the booking enquiry form
 */
export function validateBookingEnquiry(data: Partial<BookingFormData>): ValidationResult {
  const errors: Record<string, string> = {};
  
  // Full Name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.fullName = 'Please enter your full name (minimum 2 characters).';
  }
  
  // Phone validation (accepts 10-digit Indian numbers or international formats)
  const phoneClean = (data.phone || '').replace(/[\s\-()]/g, '');
  const phoneRegex = /^(\+?[0-9]{1,4})?[6-9][0-9]{9}$|^(\+?[0-9]{7,15})$/;
  if (!data.phone || !phoneRegex.test(phoneClean) || phoneClean.length < 10) {
    errors.phone = 'Please enter a valid 10-digit contact number.';
  }
  
  // Dates validation
  if (!data.checkIn) {
    errors.checkIn = 'Please select a check-in date.';
  }
  if (!data.checkOut) {
    errors.checkOut = 'Please select a check-out date.';
  }
  
  const nights = calculateNights(data.checkIn || '', data.checkOut || '');
  if (data.checkIn && data.checkOut && nights <= 0) {
    errors.checkOut = 'Check-out date must be at least one day after check-in.';
  }
  
  // Guests validation
  const adults = data.adults ?? 1;
  if (adults < 1) {
    errors.adults = 'At least 1 adult guest is required.';
  }
  if (adults > 30) {
    errors.adults = 'For groups exceeding 30 guests, please contact us directly.';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
    nights
  };
}

/**
 * Builds a direct pre-filled WhatsApp enquiry link for Shree Balaji Jungle Resorts
 */
export function buildWhatsAppEnquiryUrl(
  data: BookingFormData,
  resortPhone: string = '919876543210'
): string {
  const nights = calculateNights(data.checkIn, data.checkOut);
  const nightsText = nights > 0 ? ` (${nights} night${nights > 1 ? 's' : ''})` : '';
  
  const message = [
    `*Booking Enquiry — Shree Balaji Jungle Resorts*`,
    `Krishnodaya Nagar, Indore, MP`,
    ``,
    `*Guest:* ${data.fullName.trim()}`,
    `*Contact:* ${data.phone.trim()}`,
    data.email ? `*Email:* ${data.email.trim()}` : null,
    `*Dates:* ${data.checkIn} to ${data.checkOut}${nightsText}`,
    `*Guests:* ${data.adults} Adult${data.adults > 1 ? 's' : ''}${data.children > 0 ? `, ${data.children} Child${data.children > 1 ? 'ren' : ''}` : ''}`,
    data.roomPreference ? `*Experience Preference:* ${data.roomPreference}` : null,
    data.specialRequests?.trim() ? `*Special Requests:* ${data.specialRequests.trim()}` : null,
    ``,
    `Please share availability and enquiry details for our visit.`
  ]
    .filter(Boolean)
    .join('\n');

  return `https://wa.me/${resortPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats ISO date string YYYY-MM-DD into readable date e.g. "15 Nov 2026"
 */
export function formatDateDisplay(dateStr: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  if (isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
}
