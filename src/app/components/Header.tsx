"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu} from "lucide-react";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 px-6 md:px-12 ${
        scrolled ? "bg-white/90 backdrop-blur-md rounded-b-[25px] py-3 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="#" className="flex items-center">
          <span className={`text-3xl font-bold ${scrolled ? 'text-orange-400' : 'text-white' } text-orange-400 logo`}>Lotus Residence, Ilorin</span>
        </Link>
        <nav className={`hidden lg:flex items-center  space-x-8 ${scrolled ? "text-black" : "text-white"}`}>
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
        <button className={`book-button hidden lg:block`}>Book Now</button>
        <Menu onClick={()=> setMobile(!mobile)} className="cursor-pointer flex lg:hidden text-orange-400"/>
      </div>

{
  mobile && (<div className="mobile lg:hidden absolute top-[60px] shadow-xl py-10 w-[90%] bg-orange-50 backdrop-blur-2xl rounded-xl">
    <nav className={`flex flex-col items-center space-y-4 mt-4 ${scrolled ? "text-black" : "text-white"}`}>
      {["Home", "Gallery", "Amenities", "Pricing", "House Rules", "Contact"].map((item) => (
        <Link
          key={item}
          href={`#${item.toLowerCase().replace(" ", "-")}`}
          onClick={() => setMobile(false)} // Close mobile menu on click
          className="relative hover:text-lotus-orange transition-colors font-medium navitem text-orange-400 text-[150px]"
        >
          {item}
          <span className="left-0 w-0 h-1 bg-lotus-orange transition-all duration-300 group-hover:w-full rounded-full"></span>
        </Link>
      ))}
      
    <button className={`book-button text-white`}>Book Now</button>
    </nav>

  </div>)
}
      
    </header>
  );
};

export default Header;
