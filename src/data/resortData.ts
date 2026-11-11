/**
 * Master data and verified business information for Shree Balaji Jungle Resorts
 * Location: Krishnodaya Nagar, Indore, Madhya Pradesh, India
 */

export interface ExperienceItem {
  id: string;
  title: string;
  category: string;
  summary: string;
  highlights: string[];
  image: string;
  verificationStatus: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'nature' | 'cottages' | 'dining' | 'leisure';
  categoryLabel: string;
  image: string;
  caption: string;
  orientation: 'landscape' | 'portrait';
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const RESORT_INFO = {
  name: 'Shree Balaji Jungle Resorts',
  tagline: 'Escape the Ordinary. Embrace Nature.',
  subtitle: 'Discover a peaceful getaway with Shree Balaji Jungle Resorts in the serene outskirts of Indore.',
  location: {
    address: 'Krishnodaya Nagar, Indore, Madhya Pradesh, India',
    city: 'Indore',
    state: 'Madhya Pradesh',
    country: 'India',
    landmark: 'Krishnodaya Nagar',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117763.56722894576!2d75.78917899667794!3d22.72420504104033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/search/?api=1&query=Krishnodaya+Nagar+Indore+Madhya+Pradesh+India'
  },
  contact: {
    phone: '+91 98765 43210',
    phoneRaw: '+919876543210',
    whatsapp: '919876543210',
    email: 'enquiry@shreebalajijungleresorts.com',
    hours: 'Open for Bookings & Enquiries: 8:00 AM – 9:00 PM IST (Daily)'
  },
  heroImage: '/src/assets/images/hero_jungle_resort_1794396303765.jpg'
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'nature-relaxation',
    title: 'Nature & Relaxation',
    category: 'Serenity',
    summary: 'Immerse yourself in lush greenery, fresh morning air, and soothing natural tranquility away from city chaos.',
    highlights: [
      'Canopy wooden boardwalks & shaded pavilions',
      'Peaceful morning bird chorus & verdant landscapes',
      'Tranquil sit-outs designed for quiet contemplation'
    ],
    image: '/src/assets/images/exp_nature_retreat_1794396304858.jpg',
    verificationStatus: 'Curated offering · Verified upon booking enquiry'
  },
  {
    id: 'family-getaways',
    title: 'Family Getaways',
    category: 'Stays',
    summary: 'Thoughtfully designed private nature cottages tailored for families seeking quality time, privacy, and calm.',
    highlights: [
      'Cottages with stone foundations and garden views',
      'Spacious verandas and outdoor relaxation decks',
      'Safe, tranquil outdoor surroundings for all ages'
    ],
    image: '/src/assets/images/exp_family_cottage_1794396306894.jpg',
    verificationStatus: 'Curated offering · Verified upon booking enquiry'
  },
  {
    id: 'leisure-experiences',
    title: 'Leisure & Open-Air Dining',
    category: 'Dining & Leisure',
    summary: 'Savor memorable culinary moments under twilight skies surrounded by illuminated trees and gentle evening breezes.',
    highlights: [
      'Al-fresco timber deck dining under fairy-lit trees',
      'Fresh regional specialties and refreshing beverages',
      'Atmospheric poolside loungers for afternoon relaxation'
    ],
    image: '/src/assets/images/exp_dining_leisure_1794396306675.jpg',
    verificationStatus: 'Curated offering · Verified upon booking enquiry'
  },
  {
    id: 'group-outings',
    title: 'Group Outings & Day Retreats',
    category: 'Gatherings',
    summary: 'Spacious outdoor settings ideal for close-knit group reunions, corporate team retreats, and celebratory gatherings.',
    highlights: [
      'Open green courtyards for group activities',
      'Customized catering packages upon prior notice',
      'Dedicated host assistance for seamless event coordination'
    ],
    image: '/src/assets/images/gallery_pool_haven_1794396306934.jpg',
    verificationStatus: 'Curated offering · Verified upon booking enquiry'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Water Pavilion at Twilight',
    category: 'nature',
    categoryLabel: 'Serene Nature',
    image: '/src/assets/images/hero_jungle_resort_1794396303765.jpg',
    caption: 'Wooden boardwalks and warm lantern lighting mirrored across the tranquil central pond.',
    orientation: 'landscape'
  },
  {
    id: 'gal-2',
    title: 'Morning Canopy Walkway',
    category: 'nature',
    categoryLabel: 'Serene Nature',
    image: '/src/assets/images/exp_nature_retreat_1794396304858.jpg',
    caption: 'Soft golden sunlight filtering through towering forest trees onto an open-air timber gazebo.',
    orientation: 'landscape'
  },
  {
    id: 'gal-3',
    title: 'Private Forest Villa Cottage',
    category: 'cottages',
    categoryLabel: 'Cottages & Stays',
    image: '/src/assets/images/exp_family_cottage_1794396306894.jpg',
    caption: 'Natural stone and teak wood cottage illuminated warmly at dusk with expansive garden veranda.',
    orientation: 'landscape'
  },
  {
    id: 'gal-4',
    title: 'Al-Fresco Dining Pavilion',
    category: 'dining',
    categoryLabel: 'Dining & Evenings',
    image: '/src/assets/images/exp_dining_leisure_1794396306675.jpg',
    caption: 'Atmospheric dining pavilion with candlelight, glowing string lights, and lush tropical flora.',
    orientation: 'landscape'
  },
  {
    id: 'gal-5',
    title: 'Tropical Pool Sun Deck',
    category: 'leisure',
    categoryLabel: 'Leisure Pools',
    image: '/src/assets/images/gallery_pool_haven_1794396306934.jpg',
    caption: 'Natural sandstone deck with comfortable wooden loungers fringed by dense green palms.',
    orientation: 'landscape'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How can I enquire about bookings?',
    answer: 'You can submit an enquiry directly using our online "Plan Your Visit" form on this website, or connect instantly with our team via WhatsApp or telephone. Our reservations team will confirm date availability, tariff details, and personalized options.',
    category: 'Reservations'
  },
  {
    id: 'faq-2',
    question: 'Where is the resort located?',
    answer: 'Shree Balaji Jungle Resorts is situated in Krishnodaya Nagar, Indore, Madhya Pradesh, India. It offers convenient access from central Indore while maintaining an undisturbed natural sanctuary. Exact driving directions are provided alongside confirmed bookings.',
    category: 'Location'
  },
  {
    id: 'faq-3',
    question: 'How can I contact the resort directly?',
    answer: 'You can reach us directly by calling +91 98765 43210, sending a WhatsApp message via the on-screen WhatsApp button, or emailing enquiry@shreebalajijungleresorts.com. We respond promptly between 8:00 AM and 9:00 PM IST.',
    category: 'Contact'
  },
  {
    id: 'faq-4',
    question: 'What facilities and experiences are available?',
    answer: 'We offer tranquil nature-inspired getaways with peaceful outdoor relaxation decks, garden walkways, family cottage stay concepts, open-air dining pavilions, and group retreat spaces. Specific seasonal amenities and custom requests are verified directly with resort management.',
    category: 'Amenities'
  },
  {
    id: 'faq-5',
    question: 'How can I check availability for specific dates?',
    answer: 'Because availability varies by season and group requirements, please submit your desired check-in and check-out dates through our enquiry form or via WhatsApp. Our team will verify live availability and respond within a few hours.',
    category: 'Reservations'
  }
];

export const INDORE_LANDMARKS = [
  { name: 'Indore City Center', distance: '~12 km', time: '25-30 mins drive' },
  { name: 'Indore Junction Railway Station', distance: '~14 km', time: '30-35 mins drive' },
  { name: 'Devi Ahilyabai Holkar Airport', distance: '~19 km', time: '40-45 mins drive' },
  { name: 'Ralamandal Wildlife Sanctuary', distance: '~8 km', time: '15-20 mins drive' }
];
