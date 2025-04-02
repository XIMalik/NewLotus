import { Wifi, Tv, Car, Utensils, ShowerHead, AirVent, Lock, Flower2, MapPin, Bed } from "lucide-react";

const amenities = [
  {
    icon: <Wifi className="h-8 w-8 text-lotus-orange" />,
    title: "High-Speed WiFi",
    description: "Stay connected with complimentary high-speed wireless internet throughout the property."
  },
  {
    icon: <Tv className="h-8 w-8 text-lotus-orange" />,
    title: "Smart Entertainment",
    description: "Smart TVs with Netflix, Amazon Prime, and cable channels in all apartments."
  },
  {
    icon: <Car className="h-8 w-8 text-lotus-orange" />,
    title: "Free Parking",
    description: "Secure, gated parking space for up to two vehicles at no additional cost."
  },
  {
    icon: <Utensils className="h-8 w-8 text-lotus-orange" />,
    title: "Fully Equipped Kitchen",
    description: "Modern kitchen with high-end appliances and cookware."
  },
  {
    icon: <ShowerHead className="h-8 w-8 text-lotus-orange" />,
    title: "Bathrooms",
    description: "Rainfall showers, premium toiletries, and soft towels in all bathrooms."
  },
  {
    icon: <AirVent className="h-8 w-8 text-lotus-orange" />,
    title: "Climate Control",
    description: "Individual temperature control in each room for your perfect comfort level."
  },
  // {
  //   icon: <Dumbbell className="h-8 w-8 text-lotus-orange" />,
  //   title: "Fitness Room",
  //   description: "Access to a private gym with cardio equipment and free weights."
  // },
  {
    icon: <Lock className="h-8 w-8 text-lotus-orange" />,
    title: "Security System",
    description: "24/7 security with cameras, and secure gated entrance."
  },
  {
    icon: <Flower2 className="h-8 w-8 text-lotus-orange" />,
    title: "Garden",
    description: "Beautifully landscaped outdoor space perfect for relaxation and entertainment."
  },
  // {
  //   icon: <Bath className="h-8 w-8 text-lotus-orange" />,
  //   title: "Swimming Pool",
  //   description: "Exclusive access to our refreshing pool with lounging area."
  // },
  {
    icon: <MapPin className="h-8 w-8 text-lotus-orange" />,
    title: "Prime Location",
    description: "Situated in the heart of Ilorin, minutes away from restaurants, shops, and main attractions."
  },
  {
    icon: <Bed className="h-8 w-8 text-lotus-orange" />,
    title: "Premium Bedding",
    description: "Full-size beds with lustful mattresses and pristine materials for ultimate comfort."
  }
];

const Amenities = () => {
  return (
    <section id="amenities" className="py-20 bg-orange-50 w-full">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">Premium Amenities</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Experience the finest comforts and conveniences at Lotus Residences. Our premium amenities ensure your stay is nothing short of extraordinary.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((amenity, index) => (
            <div key={index} className="amenity-card group">
              <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-50 p-3 text-orange-400 group-hover:bg-lotus-orange/10 transition-colors">
                  {amenity.icon}
                </div>
                <div>
                  <h3 className="card-title mb-2 text-black">{amenity.title}</h3>
                  <p className="text-gray-600">{amenity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
