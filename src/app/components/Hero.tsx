"use client";
import { useState, useRef } from 'react';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Function to open the modal and play video
  const openModal = () => {
    setIsModalOpen(true);
    // Play video when modal opens (with a short delay to ensure DOM is ready)
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(e => console.log("Auto-play prevented:", e));
      }
    }, 100);
  };

  // Function to close the modal and pause video
  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsModalOpen(false);
  };

  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center bg-lotus-cream overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          filter: "brightness(0.85)"
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10"></div>
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 hero-heading animate-fade-in">
          Experience Luxury in <span className="text-lotus-orange">Ilorin</span>
        </h1>
        <p className="text-white text-xl md:text-;g mb-8 mx-auto max-w-[70%] font-light animate-fade-in">
          The premier shortlet experience, where comfort meets elegance. Enjoy a serene escape with class amenities and service.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center animate-fade-in">
          <button className="book-button">
            Book Your Stay
          </button>
          <button
            className="bg-white/20 backdrop-blur-sm rounded-[50px] text-white font-medium py-3 px-6 transition-all hover:bg-white/30"
            onClick={openModal}
          >
            Video Tour
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
          <div className="relative rounded-lg flex items-center gap-10 flex-col-reverse max-w-3xl w-full mx-4">
            <button
              onClick={closeModal}
              className="text-white text-xl font-bold cursor-pointer hover:text-gray-300 z-10"
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="aspect-video w-full overflow-hidden rounded-lg">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src="/assets/tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;