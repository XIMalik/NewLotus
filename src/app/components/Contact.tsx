"use client"

import { useState } from "react";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock
} from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
//   const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: ""
  });

  return (
    <section id="contact" className="py-20 bg-white w-full">
      <div className="container mx-auto px-6">
        <h2 className="section-heading text-center">Contact & Booking</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Ready to experience comfort in Ilorin? Reach out to us for inquiries or to book your stay at Lotus Residences.
        </p>
        
        <div className="flex">
          <div className="w-full flex flex-col lg:flex-row gap-8 items-center">
            <div className="bg-orange-50 rounded-xl p-8 shadow-md mb-8 w-full lg:w-[50%]">
              <h3 className="text-2xl font-semibold mb-6 text-black">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-orange-100 p-3">
                    <MapPin className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-medium card-title">Location</h4>
                    <p className="text-gray-700">42 Gerewu Road, Islamic Village</p>
                    <p className="text-gray-700">Ilorin, Kwara State, Nigeria</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-3">
                <Phone className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-medium card-title">Phone & Whatsapp</h4>
                    <p className="text-gray-700"><a href="tel:+2348065771879">+234 806 577 1879</a></p>
                    </div>
                </div>
                
                <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-3">
                <Mail className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-medium card-title">Email</h4>
                    <p className="text-gray-700">bookings@lotusresidences.com</p>
                    <p className="text-gray-700">info@lotusresidences.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                <div className="rounded-full bg-orange-100 p-3">
                <Clock className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <h4 className="font-medium card-title">Office Hours</h4>
                    {/* <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p> */}
                    <p className="text-gray-700">24/7 phone support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md h-full md:h-80 w-full lg:w-[50%]">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.150385275592!2d4.514824874626482!3d8.526093194042947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10365287c3b1c8c3%3A0x9e3c4c6b7e1b9a1f!2s42%20Gerewu%20Road%2C%20Islamic%20Village%2C%20Ilorin%2C%20Kwara%20State%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1710437062317!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
