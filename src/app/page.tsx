import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageCarousel from "./components/Images";
import Amenities from "./components/Amenities";
import Pricing from "./components/Pricing";
import HouseRules from "./components/HouseRules";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Head from 'next/head';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: "Lotus Residence, Ilorin | Serene Shortlet Apartments in Ilorin",
  description: "Experience our stunning shortlet apartments with premium amenities, great views, and affordable pricing. Book your stay at Lotus Residence today!",
  
  keywords: "vacation, rental, vacation rental, accommodation, getaway, holiday home, rental property, shortlet, staycation, apartments, ilorin, nigeria, lagos, abuja, Ilorin, Nigeria, hotel, hotels, resort, resorts, guest house, guesthouse, hostel, bed and breakfast, B&B, serviced apartment, serviced apartments, lodge, lodges, villa, villas, cabin, cabins, chalet, chalets, inn, inns, motel, motels, cottage, cottages, suite, suites, studio apartment",
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
  
  twitter: {
    card: "summary_large_image",
    title: "Lotus Residence, Ilorin | Serene Shortlet Apartments in Ilorin",
    description: "Experience our stunning shortlet apartments with premium amenities, great views, and affordable pricing. Book your stay at Lotus Residence today!",
    creator: "@yourhandle",
    images: "https://lotusresidenceilorin.ng/images/_FJS0062.webp",
  },
  
  applicationName: "Lotus Residence, Ilorin", 
  
  category: "Travel, Vacation Rentals, Accommodation, Housing, Hotels, Lodging, Shortlet Apartments, Staycation, Getaway, Holiday Homes, Rental Properties, Vacation Homes, Guest Houses, Serviced Apartments, Villas, Cottages, Inns, Motels",
  publisher: "Lotus Residence, Ilorin",
  publisherLogo: "/images/logo.png",
  generator: "Next.js",
  manifest: "/manifest.json",
};

export default function Home() {
  return (
    <>
      <SpeedInsights/>
      <Analytics/>
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

