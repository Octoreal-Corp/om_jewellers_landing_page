"use client";

import { useEffect } from "react";

export default function JsonLd() {
  useEffect(() => {
    // Add structured data for better SEO and AI understanding
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "JewelryStore",
      name: "Om Jewellers",
      image: [
        "https://www.omjewellersjdp.com/og-image.jpg",
        "https://www.omjewellersjdp.com/store-front.jpg",
      ],
      "@id": "https://www.omjewellersjdp.com",
      url: "https://www.omjewellersjdp.com",
      telephone: "+91-9753392000",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Your Street Address",
        addressLocality: "Jagdalpur",
        addressRegion: "Chattisgarh",
        postalCode: "XXXXXX",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 19.087698830049845,
        longitude: 82.02044785045261,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "20:00",
        },
      ],
      sameAs: [
        "https://www.facebook.com/omjewellers",
        "https://www.instagram.com/omjewellers",
        "https://twitter.com/omjewellers",
      ],
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 19.087698830049845,
          longitude: 82.02044785045261,
        },
        geoRadius: "50000",
      },
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Gold Jewelry",
            description: "Traditional and contemporary gold jewelry designs",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Product",
            name: "Diamond Jewelry",
            description: "Exquisite diamond jewelry collections",
          },
        },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Jewelry Collections",
        itemListElement: [
          {
            "@type": "OfferCatalog",
            name: "Wedding Collection",
            description: "Traditional and modern wedding jewelry",
          },
          {
            "@type": "OfferCatalog",
            name: "Daily Wear",
            description: "Contemporary everyday jewelry pieces",
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "250",
      },
      review: {
        "@type": "Review",
        reviewRating: {
          "@type": "Rating",
          ratingValue: "5",
          bestRating: "5",
        },
        author: {
          "@type": "Person",
          name: "Sample Customer",
        },
      },
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
}
