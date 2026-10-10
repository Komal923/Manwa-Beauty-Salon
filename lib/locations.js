// Keep branch content, map overrides and structured data in one place.
export const salonLocations = [
  {
    id: 'sector-34',
    name: 'Manwa Beauty Salon',
    sector: 'Sector 34',
    address: 'Shop No. 7, Prerana Apartment, Plot No. 75, Sector 34, Panvel, Maharashtra 410209, India.',
    streetAddress: 'Shop No. 7, Prerana Apartment, Plot No. 75, Sector 34',
    locality: 'Panvel',
    postalCode: '410209',
    phone: '+917021242631',
    displayPhone: '+91 7021242631',
    mapQuery: 'Shop No 7 Prerana Apartment Plot No 75 Sector 34 Panvel Maharashtra 410209',
    // Replace with a verified Google Maps place URL and Share > Embed URL when available.
    mapsUrl: '',
    embedUrl: '',
    whatsappMessage: 'Hello, I would like to book an appointment at Manwa Beauty Salon, Sector 34.',
    description: 'Visit our beauty salon in Sector 34 for personalised hair, skin and bridal makeup services. A welcoming ladies beauty parlour in Kamothe for your beauty routine.',
  },
  {
    id: 'sector-07',
    name: 'Manwa Beauty Salon & Academy',
    sector: 'Sector 07',
    address: 'Sai Prasad Enclave, Plot No. 27, Sector 07, Kamothe, Maharashtra 410206, India.',
    streetAddress: 'Sai Prasad Enclave, Plot No. 27, Sector 07',
    locality: 'Kamothe',
    postalCode: '410206',
    phone: '+917021242631',
    displayPhone: '+91 7021242631',
    mapQuery: 'Sai Prasad Enclave Plot No 27 Sector 07 Kamothe Maharashtra 410206',
    mapsUrl: '',
    embedUrl: '',
    whatsappMessage: 'Hello, I would like to book an appointment at Manwa Beauty Salon & Academy, Sector 07.',
    description: 'Discover our beauty salon in Sector 07 and beauty academy in Kamothe, bringing professional beauty care and practical salon training together in Navi Mumbai.',
  },
];

export const locationMapsUrl = location => location.mapsUrl ||
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.mapQuery)}`;
export const locationEmbedUrl = location => location.embedUrl ||
  `https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed`;
export const locationWhatsAppUrl = location =>
  `https://wa.me/917021242631?text=${encodeURIComponent(location.whatsappMessage)}`;

export const locationsSchema = {
  '@context': 'https://schema.org',
  '@graph': salonLocations.map(location => ({
    '@type': 'BeautySalon',
    '@id': `https://www.manwasalon.in/#${location.id}`,
    name: location.name,
    url: `https://www.manwasalon.in/#${location.id}`,
    telephone: location.phone,
    hasMap: locationMapsUrl(location),
    address: {
      '@type': 'PostalAddress',
      streetAddress: location.streetAddress,
      addressLocality: location.locality,
      addressRegion: 'Maharashtra',
      postalCode: location.postalCode,
      addressCountry: 'IN',
    },
  })),
};
