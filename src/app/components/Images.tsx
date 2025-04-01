"use client";

import { useState, useEffect } from "react";

const images = [
  {
    url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Luxury living room with elegant furniture",
    title: "Spacious Living Room"
  },
  {
    url: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Modern bedroom with king-size bed",
    title: "Luxurious Master Bedroom"
  },
  {
    url: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Swimming pool with lounge chairs",
    title: "Private Swimming Pool"
  },
  {
    url: "https://images.unsplash.com/photo-1563911302283-d2bc129e7570?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Modern kitchen with appliances",
    title: "Fully Equipped Kitchen"
  },
  {
    url: "https://images.unsplash.com/photo-1603825491103-bd638b1873b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    alt: "Outdoor dining area",
    title: "Outdoor Dining Space"
  }
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
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

  return (
    <section id="gallery" className=" py-20 w-full">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center ">Discover Our Space</h2>
        
        <div className="relative rounded-xl overflow-hidden h-[50vh] md:h-[70vh] mb-4">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${activeIndex === index ? "opacity-100" : "opacity-0"}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover cursor-pointer"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-2xl font-playfair">{image.title}</h3>
              </div>
            </div>
          ))}
          
          <button 
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all z-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="white" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/40 transition-all z-10"
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
              className={`flex-shrink-0 cursor-pointer rounded-lg overflow-hidden transition-all duration-300 ${activeIndex === index ? "thumbnail-active" : "opacity-70 hover:opacity-100"}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-24 h-16 md:w-32 md:h-20 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;