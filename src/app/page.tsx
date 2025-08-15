import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageCarousel from "./components/Images";
import Amenities from "./components/Amenities";
import Pricing from "./components/Pricing";
import HouseRules from "./components/HouseRules";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Lotus Residence, Ilorin | Premium Shortlet Apartments in Ilorin, Nigeria",
  description: "Book luxury shortlet apartments at Lotus Residence, Ilorin. Premium amenities, stunning views, affordable rates. Perfect for business trips, vacations & staycations in Kwara State.",
  keywords: "shortlet, shortlet apartments Ilorin, shortlets Ilorin, apartment, apartments, Ilorin, apartments Ilorin Nigeria, apartments Ilorin, vacation rental Ilorin Nigeria, accommodation Ilorin Kwara State, serviced apartments Ilorin, hotel alternative Ilorin, business travel Ilorin, staycation Nigeria, furnished apartments Ilorin, guest house Ilorin, lodge Ilorin, bed and breakfast Ilorin, extended stay Ilorin, corporate housing Ilorin, holiday rental Nigeria, weekend getaway Ilorin, family accommodation Ilorin, luxury suites Ilorin, self catering apartments Ilorin, temporary housing Ilorin, executive apartments Ilorin, boutique accommodation Ilorin, resort Ilorin, villa rental Ilorin, penthouse Ilorin, studio apartments Ilorin, one bedroom apartments Ilorin, two bedroom apartments Ilorin, three bedroom apartments Ilorin, duplex Ilorin, flat rental Ilorin, house rental Ilorin, property rental Ilorin, residential hotel Ilorin, apart hotel Ilorin, service residence Ilorin, hospitality Ilorin, lodging Ilorin, boarding house Ilorin, hostel Ilorin, inn Ilorin, motel Ilorin, resort accommodation Ilorin, vacation home Ilorin, holiday apartment Ilorin, tourist accommodation Ilorin, visitor lodging Ilorin, travel accommodation Ilorin, short term rental Ilorin, long term rental Ilorin, monthly rental Ilorin, weekly rental Ilorin, daily rental Ilorin, Airbnb alternative Ilorin, booking.com alternative Ilorin, hotels.com alternative Ilorin",
  authors: [{ name: "Lotus Residence" }],
  viewport: "width=device-width, initial-scale=1",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  
  alternates: {
    canonical: "https://lotusresidenceilorin.ng",
  },
  
  openGraph: {
    title: "Lotus Residence, Ilorin | Premium Shortlet Apartments",
    description: "Book luxury shortlet apartments at Lotus Residence, Ilorin. Premium amenities, stunning views, affordable rates.",
    url: "https://lotusresidenceilorin.ng",
    siteName: "Lotus Residence",
    locale: "en_NG",
    type: "website",
    images: [{
      url: "https://lotusresidenceilorin.ng/images/_FJS0062.webp",
      width: 1200,
      height: 630,
      alt: "Lotus Residence Ilorin - Premium Shortlet Apartments"
    }],
  },
  
  twitter: {
    card: "summary_large_image",
    title: "Lotus Residence, Ilorin | Premium Shortlet Apartments",
    description: "Book luxury shortlet apartments at Lotus Residence, Ilorin. Premium amenities, stunning views, affordable rates.",
    images: ["https://lotusresidenceilorin.ng/images/_FJS0062.webp"],
  },
  
  category: "travel",
  applicationName: "Lotus Residence",
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "name": "Lotus Residence",
    "description": "Premium shortlet apartments in Ilorin, Nigeria with luxury amenities and affordable rates",
    "url": "https://lotusresidenceilorin.ng",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ilorin",
      "addressRegion": "Kwara State",
      "addressCountry": "Nigeria"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "8.4799",
      "longitude": "4.5418"
    },
    "priceRange": "$$",
    "amenityFeature": [
      {"@type": "LocationFeatureSpecification", "name": "WiFi"},
      {"@type": "LocationFeatureSpecification", "name": "Air Conditioning"},
      {"@type": "LocationFeatureSpecification", "name": "Kitchen"}
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SpeedInsights/>
      <Analytics/>

      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header />
        <Hero />
        <ImageCarousel />
        <Amenities />
        <Pricing />
        <HouseRules />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

