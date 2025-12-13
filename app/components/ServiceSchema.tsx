// app/components/SchemaMarkup.tsx
'use client';

import React from 'react';

const SchemaMarkup = () => {
  const services = [
    {
      "@type": "Service",
      "serviceType": "Refrigerator Repair",
      "description": "Cooling issues, gas charging, compressor repair",
      "offers": {
        "@type": "Offer",
        "price": "299",
        "priceCurrency": "INR",
        "description": "Service visit charge"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Washing Machine Repair",
      "description": "Motor repair, leakage, spin problems, PCB issues",
      "offers": {
        "@type": "Offer",
        "price": "299",
        "priceCurrency": "INR",
        "description": "Service visit charge"
      }
    },
    {
      "@type": "Service",
      "serviceType": "Microwave Oven Repair",
      "description": "Heating issues, panel repair, magnetron replacement",
      "offers": {
        "@type": "Offer",
        "price": "299",
        "priceCurrency": "INR",
        "description": "Service visit charge"
      }
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://home-appliances-repair-service.vercel.app/#business",
        "name": "Home Appliances Repair Service",
        "description": "Professional home appliances repair service for refrigerator, washing machine, microwave oven, and more in Chandigarh",
        "url": "https://home-appliances-repair-service.vercel.app/",
        "telephone": "+91-07206904101",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Sector 22",
          "addressLocality": "Chandigarh",
          "addressRegion": "Chandigarh",
          "postalCode": "160022",
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "30.7333",
          "longitude": "76.7794"
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "00:00",
            "closes": "23:59"
          }
        ],
        "priceRange": "₹₹",
        "areaServed": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@type": "GeoCoordinates",
            "latitude": "30.7333",
            "longitude": "76.7794"
          },
          "geoRadius": "20000"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Appliance Repair Services",
          "itemListElement": services.map((service, index) => ({
            "@type": "Offer",
            "itemOffered": service,
            "position": index + 1
          }))
        },
        "image": [
          "https://yourappliancerepair.com/og-image.jpg",
          "https://yourappliancerepair.com/logo.png"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "500",
          "bestRating": "5",
          "worstRating": "1"
        },
        "sameAs": [
          "https://www.facebook.com/yourappliancerepair",
          "https://www.instagram.com/yourappliancerepair"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://home-appliances-repair-service.vercel.app/#website",
        "url": "https://home-appliances-repair-service.vercel.app/",
        "name": "Home Appliances Repair Service",
        "description": "Professional appliance repair services",
        "publisher": {
          "@id": "https://home-appliances-repair-service.vercel.app/#business"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://home-appliances-repair-service.vercel.app/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://home-appliances-repair-service.vercel.app/#webpage",
        "url": "https://home-appliances-repair-service.vercel.app/",
        "name": "Home Appliances Repair Service | Professional Repair Services",
        "description": "Expert appliance repair services for refrigerator, washing machine, microwave and more in Chandigarh",
        "isPartOf": {
          "@id": "https://home-appliances-repair-service.vercel.app/#website"
        },
        "about": {
          "@id": "https://home-appliances-repair-service.vercel.app/#business"
        },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://yourappliancerepair.com/og-image.jpg"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;