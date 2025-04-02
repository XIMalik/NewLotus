"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Phone, Mail } from "lucide-react";


const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobile, setMobile] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Open & close booking modal
  const openBookingModal = () => setIsBookingModalOpen(true);
  const closeBookingModal = () => setIsBookingModalOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 py-3 px-6 md:px-12 ${
        scrolled ? "bg-white/90 backdrop-blur-md rounded-b-[25px] py-3 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="flex items-center">
          <span className={`text-2xl font-bold ${scrolled ? "text-orange-400" : "text-white"} text-orange-400 logo`}>
            Lotus Residence, Ilorin
          </span>
        </Link>
        <nav className={`hidden lg:flex items-center space-x-8 ${scrolled ? "text-black" : "text-white"}`}>
          {["Home", "Gallery", "Amenities", "Pricing", "House Rules", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="relative hover:text-lotus-orange transition-colors font-medium navitem"
            >
              {item}
              <span className="left-0 w-0 h-1 bg-lotus-orange transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
          ))}
        </nav>
        <button onClick={openBookingModal} className="book-button hidden lg:block">
          Book Now
        </button>
        <Menu onClick={() => setMobile(!mobile)} className="cursor-pointer flex lg:hidden text-orange-400" />
      </div>

      {/* Mobile Menu */}
      {mobile && (
        <div className="mobile lg:hidden absolute top-[60px] shadow-xl py-10 w-[90%] bg-orange-50 backdrop-blur-2xl rounded-xl">
          <nav className={`flex flex-col items-center space-y-4 mt-4 text-orange-400`}>
            {["Home", "Gallery", "Amenities", "Pricing", "House Rules", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMobile(false)}
                className="relative hover:text-lotus-orange transition-colors font-medium navitem"
              >
                {item}
                <span className="left-0 w-0 h-1 bg-lotus-orange transition-all duration-300 group-hover:w-full rounded-full"></span>
              </Link>
            ))}
            <button onClick={openBookingModal} className="book-button text-white">
              Book Now
            </button>
          </nav>
        </div>
      )}

      {/* Booking Modal */}
      {isBookingModalOpen && (
        <div className="absolute w-scren h-screen inset-0 bg-black/50 flex justify-center items-center z-50">
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
    </header>
  );
};

export default Header;
