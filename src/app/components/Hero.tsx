"use client";
import { useState, useRef } from "react";
import { Phone, Mail } from "lucide-react";
const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Open & close video modal
  const openModal = () => {
    setIsModalOpen(true);
    setTimeout(() => {
      videoRef.current?.play().catch((e) => console.log("Auto-play prevented:", e));
    }, 100);
  };
  const closeModal = () => {
    videoRef.current?.pause();
    setIsModalOpen(false);
  };

  // Open & close booking modal
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <section id="home" className="w-full h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-black/50 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('/assets/images/_FJS0062.webp')",
          filter: "brightness(0.85)",
        }}
      ></div>
      <div className="absolute inset-0"></div>
      <div className="container mx-auto px-6 text-center relative z-20">
        <h1 className="text-[50px] md:text-6xl font-bold text-white mb-4 hero-heading animate-fade-in">
          Experience homely comfort in Ilorin
        </h1>
        <p className="text-white text-xl md:text-lg mb-8 mx-auto md:max-w-[75%] font-light animate-fade-in">
          The premier shortlet experience in Ilorin, where comfort meets elegance. Enjoy a serene escape with class amenities and service.
        </p>
        <div className="flex flex-row gap-4 justify-center animate-fade-in">
          <button onClick={openBookingModal} className="book-button">
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

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
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
              <video ref={videoRef} className="w-full h-full object-cover" controls preload="metadata">
                <source src="/assets/tour.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {isBookingModalOpen && (
  <div className="fixed w-scren h-screen inset-0 bg-black/50 flex justify-center items-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-md text-center flex flex-col items-center">
      <h2 className="text-2xl text-orange-400 font-bold mb-4">Book Your Stay</h2>
      <p className="text-gray-600 mb-6">To book a shortlet apartment, call or send an email</p>
      <div className="icons flex flex-col w-full items-center gap-5">
        {/* Phone Section */}
        <a href="tel:+2348065771879" className="w-full">
          <div className="one bg-orange-50 p-5 rounded-lg w-full flex flex-col items-center cursor-pointer hover:bg-orange-200 transition-colors">
            <div className="w-[50px] h-[50px] flex items-center justify-center text-orange-400 rounded-full bg-orange-50">
              <Phone />
            </div>
            <p className="pt-2 contact-card-title">+234 806 577 1879</p>
          </div>
        </a>

        {/* Email Section */}
        <a href="mailto:info@lotusresidences.com" className="w-full">
          <div className="one bg-orange-50 p-5 rounded-lg w-full flex flex-col items-center cursor-pointer hover:bg-orange-200 transition-colors">
            <div className="w-[50px] h-[50px] flex items-center justify-center text-orange-400 rounded-full bg-orange-50">
              <Mail />
            </div>
            <p className="pt-2 contact-card-title">info@lotusresidences.com</p>
          </div>
        </a>
      </div>
      <button onClick={closeBookingModal} className="mt-4 text-red-500 font-semibold hover:underline cursor-pointer underline-offset-6">
        Close
      </button>
    </div>
  </div>
)}

    </section>
  );
};

export default Hero;
