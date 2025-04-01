import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageCarousel from "./components/Images";
import Amenities from "./components/Amenities";
import Pricing from "./components/Pricing";
import HouseRules from "./components/HouseRules";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Add this to your page.js file as an export
export const metadata = {
  // Basic metadata
  title: "Lotus Residence, Ilorin | Serene Shortlet Apartments in Ilorin",
  description: "Experience our stunning shortlet apartments with premium amenities, great views, and affordable pricing. Book your stay at Lotus Residence today!",
  
  // Basic SEO
  keywords: "vacation, rental, vacation rental, accommodation, getaway, holiday home, rental property, shortlet, Ilorin, Nigeria",
  authors: [{ name: "Lotus Residence", url: "https://lotusresidenceilorin.ng" }],
  
  // Robots control
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  
  // Verification tags
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
    other: {
      me: ["your-email@example.com", "https://yourwebsite.com"],
    },
  },
  
  // Canonical URL
  alternates: {
    canonical: "https://lotusresidenceilorin.ng",
    languages: {
      'en-US': "https://lotusresidenceilorin.ng/en-US",
      'es-ES': "https://lotusresidenceilorin.ng/es-ES",
    },
  },
  
  // Open Graph metadata for social sharing
  openGraph: {
    title: "Lotus Residence, Ilorin | Serene Shortlet Apartments in Ilorin",
    description: "Experience our stunning shortlet apartments with premium amenities, great views, and affordable pricing. Book your stay at Lotus Residence today!",
    url: "https://lotusresidenceilorin.ng",
    siteName: "Lotus Residence",
    images: [
      {
        url: "https://yourwebsite.com/images/rental-exterior.jpg",
        width: 1200,
        height: 630,
        alt: "Exterior view of our luxury vacation rental",
      },
      {
        url: "https://yourwebsite.com/images/rental-interior.jpg",
        width: 1200,
        height: 630,
        alt: "Interior view of our luxury vacation rental",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Lotus Residence, Ilorin | Serene Shortlet Apartments in Ilorin",
    description: "Experience our stunning shortlet apartments with premium amenities, great views, and affordable pricing. Book your stay at Lotus Residence today!",
    creator: "@yourhandle",
    images: ["https://yourwebsite.com/images/rental-social-card.jpg"],
  },
  
  // App links
  appLinks: {
    ios: {
      url: "https://yourapp/rental",
      app_store_id: "your_app_store_id",
    },
    android: {
      package: "com.yourcompany.app",
      app_name: "Your Rental App",
    },
    web: {
      url: "https://yourwebsite.com/rental",
      should_fallback: true,
    },
  },
  
  // Apple web app metadata
  appleWebApp: {
    title: "Lotus Residence, Ilorin",
    startupImage: [
      "/images/startup/apple-touch-startup-image-768x1004.png",
      "/images/startup/apple-touch-startup-image-1536x2008.png",
    ],
    statusBarStyle: "black-translucent",
    capable: true,
    // title: "Vacation Rental App",
    icon: "/images/icon.png",
  },
  
  // Formatdetection
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  
  // Referrer
  referrer: "strict-origin-when-cross-origin",
  
  // Theme color
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  
  // Viewport (usually handled by default in Next.js)
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  
  // Application name
  applicationName: "Lotus Residence, Ilorin", 
  
  // Other metadata
  category: "Travel",
  colorScheme: "normal",
  // creator: "Your Name",
  generator: "Next.js",
  manifest: "/manifest.json",
  
  // Additional custom metadata
  other: {
    "fb:app_id": "your-facebook-app-id",
    "og:price:amount": "100",
    "og:price:currency": "USD",
    "og:availability": "instock",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header/>
      <Hero/>
      <ImageCarousel/>
      <Amenities/>
      <Pricing/>
      <HouseRules/>
      <Contact/>
      <Footer/>
    </main>
  );
}

