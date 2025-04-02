"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  {
    url: "/assets/images/_FJS0062.webp",
    alt: "Luxury living room with elegant furniture",
    title: "Spacious Living Room"
  },
  {
    url: "/assets/images/_FJS0001.webp",
    alt: "Smart TV with Netflix and Amazon Prime",
    title: "Smart TV with Netflix and Amazon Prime"
  },
  {
    url: "/assets/images/_FJS0006.webp",
    alt: "Smart Kitchenette with appliances",
    title: "Smart Kitchenette"
  },
  {
    url: "/assets/images/_FJS0009.webp",
    alt: "Modern & comfortable living room",
    title: "Modern & Comfortable Living Room"
  },
  {
    url: "/assets/images/_FJS0010.webp",
    alt: "Bedroom with comfortable bed and decor",
    title: "Bedroom with Comfortable Bed"
  },
  {
    url: "/assets/images/_FJS0043.webp",
    alt: "Modern & comfortable living room",
    title: "Modern & Comfortable Living Room"
  },
  {
    url: "/assets/images/_FJS0050.webp",
    alt: "Comfortable shower area",
    title: "Comfortable Shower Area"
  },
  {
    url: "/assets/images/_FJS0060.webp",
    alt: "Modern & comfortable living room",
    title: "Modern & Comfortable Living Room"
  },
  {
    url: "/assets/images/_FJS0061.webp",
    alt: "Modern & comfortable living room",
    title: "Modern & Comfortable Living Room"
  },
  {
    url: "/assets/images/_FJS0065.webp",
    alt: "Lotus Residence exterior Front View",
    title: "Lotus Residence Exterior Front View"
  },
  {
    url: "/assets/images/_FJS0076.webp",
    alt: "Lotus Residence Exterior, street view",
    title: "Lotus Residence Exterior, street view"
  },
  {
    url: "/assets/images/_FJS0243.webp",
    alt: "Mini dining area",
    title: "Mini Dining area"
  },
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(Array(images.length).fill(false));
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setActiveIndex((activeIndex + 1) % images.length);
  };

  const handleImageLoad = (index: number) => {
    const newLoadedState = [...isLoaded];
    newLoadedState[index] = true;
    setIsLoaded(newLoadedState);
  };

  // Preload the next image
  useEffect(() => {
    const nextIndex = (activeIndex + 1) % images.length;
    const img = new window.Image();
    img.src = images[nextIndex].url;
  }, [activeIndex]);

  return (
    <section id="gallery" className="py-20 w-full">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">Discover Lotus Residence</h2>
        
        <div className="relative rounded-xl overflow-hidden h-[50vh] md:h-[70vh] mb-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                activeIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
            >
              {/* Only render nearby images to improve performance */}
              {Math.abs(index - activeIndex) < 3 || index === activeIndex ? (
                <div className="w-full h-full relative">
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority={index === activeIndex}
                    quality={index === activeIndex ? 85 : 60}
                    className="object-cover"
                    onLoad={() => handleImageLoad(index)}
                    loading={index === activeIndex ? "eager" : "lazy"}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-2xl font-playfair">{image.title}</h3>
                  </div>
                </div>
              ) : null}
            </div>
          ))}
          
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all z-10"
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all z-10"
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        
        <div className="flex overflow-x-auto gap-3 pb-4 scrollbar-thin scrollbar-thumb-lotus-orange">
          {images.map((image, index) => (
            <div
              key={index}
              className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${
                activeIndex === index ? "thumbnail-active" : "opacity-70 hover:opacity-100"
              }`}
              onClick={() => handleThumbnailClick(index)}
            >
              <div className="relative w-24 h-16 md:w-32 md:h-20">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 96px, 128px"
                  className="object-cover"
                  quality={30}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;