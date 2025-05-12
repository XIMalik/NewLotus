"use client";

import {Instagram, Twitter, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#333333] w-full text-white pt-16 pb-8 rounded-t-[25px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-orange-400 subsection-heading">Lotus Residence, Ilorin</h3>
            <p className="mb-4 text-gray-300">
              Our premium shortlets offer the perfect blend of comfort, style, and convenience. Welcome to home away from home.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/lotusResidenceilorin/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-lotus-orange transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-lotus-orange transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 footer-title text-white">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Gallery", "Amenities", "Pricing", "House Rules", "Contact"].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-lotus-orange transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 footer-title text-white">Property Details</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Studio Apartments</li>
              <li>1 Bedroom Apartments</li>
              <li>2 Bedroom Apartments</li>
              <li>2 Bedroom Maisonettes</li>
              <li>Secure Parking</li>
              <li>24/7 Security & Power Supply</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 footer-title text-white">Contact Information</h4>
            <address className="not-italic text-gray-300 space-y-2">
              <p>42 Gerewu Road, Islamic Village</p>
              <p>Ilorin, Kwara State, Nigeria</p>
              <p className="pt-2"><a href="tel:+2348065771879">+234 806 577 1879</a></p>
              <p><a href="mailto:lotusresidence@outlook.com">lotusresidence@outlook.com</a></p>
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lotus Residence. All rights reserved.
          </p>
        </div>
        
        <button 
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-orange-400 cursor-pointer p-3 rounded-full shadow-xl hover:bg-orange-500 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 hover:w-6 hover:h-6 ease-in-out duration-150 text-white" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
