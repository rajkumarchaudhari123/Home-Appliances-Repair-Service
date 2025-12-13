// app/components/SchemaMarkup.tsx
'use client';

import React from 'react';

const SchemaMarkup = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Home Appliances clinic Service",
    "description": "Professional home appliances repair service for AC, fridge, washing machine, microwave, and more",
    "url": "https://home-appliances-repair-service.vercel.app/",
    "telephone": "+9107206904101",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Chandigarh",
      "addressRegion": "Punjab",
      "postalCode": "160022",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.7333,
      "longitude": 76.7794
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "priceRange": "₹₹",
    "serviceArea": {
      "@type": "Place",
      "name": "Chandigarh Tricity Area"
    },
    "sameAs": [
      "https://facebook.com/yourpage",
      "https://twitter.com/yourhandle",
      "https://instagram.com/yourprofile"
    ],
    "image": "https://yourappliancerepair.com/logo.jpg",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "500"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;