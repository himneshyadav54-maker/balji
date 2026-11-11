import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateNights, validateBookingEnquiry, buildWhatsAppEnquiryUrl } from './booking';

test('calculateNights computes correct night count', () => {
  assert.equal(calculateNights('2026-11-20', '2026-11-22'), 2);
  assert.equal(calculateNights('2026-11-20', '2026-11-21'), 1);
  assert.equal(calculateNights('2026-11-20', '2026-11-20'), 0);
  assert.equal(calculateNights('2026-11-25', '2026-11-20'), 0);
  assert.equal(calculateNights('', '2026-11-20'), 0);
});

test('validateBookingEnquiry flags missing or invalid fields', () => {
  const result = validateBookingEnquiry({
    fullName: '',
    phone: '123',
    checkIn: '',
    checkOut: ''
  });
  
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.checkIn);
  assert.ok(result.errors.checkOut);
});

test('validateBookingEnquiry succeeds with valid inputs', () => {
  const validData = {
    fullName: 'Himnesh Yadav',
    phone: '9876543210',
    checkIn: '2026-12-10',
    checkOut: '2026-12-13',
    adults: 2,
    children: 1,
    roomPreference: 'Nature & Relaxation Cottage',
    specialRequests: 'Vegetarian meals preferred'
  };
  
  const result = validateBookingEnquiry(validData);
  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
  assert.equal(result.nights, 3);
});

test('buildWhatsAppEnquiryUrl produces valid wa.me URL with encoded content', () => {
  const validData = {
    fullName: 'Himnesh Yadav',
    phone: '9876543210',
    checkIn: '2026-12-10',
    checkOut: '2026-12-13',
    adults: 2,
    children: 0
  };
  
  const url = buildWhatsAppEnquiryUrl(validData);
  assert.ok(url.startsWith('https://wa.me/'));
  assert.ok(url.includes('Himnesh%20Yadav') || url.includes('Himnesh+Yadav') || url.includes(encodeURIComponent('Himnesh Yadav')));
  assert.ok(url.includes('Shree%20Balaji%20Jungle%20Resorts'));
});
