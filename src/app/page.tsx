import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageCarousel from "./components/Images";
import Amenities from "./components/Amenities";
import Pricing from "./components/Pricing";
import HouseRules from "./components/HouseRules";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from 'next/head';


// Add this to your page.js file as an export
export const metadata = {
  title: "Lotus Residence, Ilorin | Serene Shortlet Apartments in Ilorin",
  description: "Experience our stunning shortlet apartments with premium amenities, great views, and affordable pricing. Book your stay at Lotus Residence today!",
  
  keywords: "vacation, rental, vacation rental, accommodation, getaway, holiday home, rental property, shortlet, Ilorin, Nigeria",
  authors: [{ name: "Lotus Residence", url: "https://lotusresidenceilorin.ng" }],
  
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
  
  alternates: {
    canonical: "https://lotusresidenceilorin.ng",
    languages: {
      'en-US': "https://lotusresidenceilorin.ng/en-US",
      'es-ES': "https://lotusresidenceilorin.ng/es-ES",
    },
  },
  
  openGraph: {
    title: "Lotus Residence, Ilorin | Serene Shortlet Apartments in Ilorin",
    description: "Experience our stunning shortlet apartments with premium amenities, great views, and affordable pricing. Book your stay at Lotus Residence today!",
    url: "https://lotusresidenceilorin.ng",
    siteName: "Lotus Residence, Ilorin",
    locale: "en_US",
    type: "website",
  },
  
  // Twitter Card metadata
  twitter: {
    card: "summary_large_image",
    title: "Lotus Residence, Ilorin | Serene Shortlet Apartments in Ilorin",
    description: "Experience our stunning shortlet apartments with premium amenities, great views, and affordable pricing. Book your stay at Lotus Residence today!",
    creator: "@yourhandle",
    images: "https://lotusresidenceilorin.ng/images/_FJS0062.webp",
  },
  
  // Application name
  applicationName: "Lotus Residence, Ilorin", 
  
  // Other metadata
  category: "Travel, Vacation Rentals",
  publisher: "Lotus Residence, Ilorin",
  publisherLogo: "/images/logo.png",
  generator: "Next.js",
  manifest: "/manifest.json",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Lotus Residence, Ilorin | Serene Shortlet Apartments in Ilorin</title>
        <meta
          name="description"
          content="Experience our stunning shortlet apartments with premium amenities, great views, and affordable pricing. Book your stay at Lotus Residence today!"
        />
      </Head>

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

