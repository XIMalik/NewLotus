import { 
    Cigarette, 
    PartyPopper, 
    Cat, 
    Clock, 
    Volume, 
    Shield, 
    Key 
  } from "lucide-react";
  
  const regularRules = [
    {
      icon: <Cigarette className="h-5 w-5 text-lotus-orange" />,
      rule: "No Smoking",
      description: "Smoking is strictly prohibited inside the property. Designated smoking areas are available in the outdoor spaces."
    },
    {
      icon: <PartyPopper className="h-5 w-5 text-lotus-orange" />,
      rule: "No Parties or Events",
      description: "Unauthorized parties or events are not permitted. For special gatherings, please contact us for prior approval."
    },
    {
      icon: <Cat className="h-5 w-5 text-lotus-orange" />,
      rule: "Pet Policy",
      description: "Pets of any size are not allowed on the property."
    },
    {
      icon: <Clock className="h-5 w-5 text-lotus-orange" />,
      rule: "Quiet Hours",
      description: "Please observe quiet hours between 10:00 PM and 8:00 AM out of respect for neighbors."
    },
    {
      icon: <Volume className="h-5 w-5 text-lotus-orange" />,
      rule: "Noise Level",
      description: "Excessive noise that disturbs neighbors is not permitted at any time."
    }
  ];
  
  const propertyAccess = [
    "Guests will receive access codes for the main gate and front door prior to arrival",
    "A digital guidebook with instructions for all amenities will be shared before check-in",
    "Property manager is available via phone/WhatsApp during your stay",
    "Surveillance cameras are present at exterior entry points only",
    "Please secure all doors and windows when leaving the property"
  ];
  
  const localLaws = [
    "All guests must provide valid identification during booking",
    "Property adheres to all Kwara State hospitality regulations",
    "Drugs and illegal substances are strictly prohibited",
    "Respect local customs and traditions when in public areas",
    "Violation of local laws may result in immediate termination of stay without refund"
  ];
  
  const HouseRules = () => {
    return (
      <section id="house-rules" className="py-20 bg-orange-50 w-full">
        <div className="container mx-auto px-6">
          <h2 className="section-heading text-center">House Rules & Regulations</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            To ensure a pleasant stay for all our guests, we kindly ask you to observe the following rules during your visit to Lotus Residences.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-md border border-lotus-cream">
              <h3 className="text-2xl font-semibold mb-6 font-playfair text-black">General Rules</h3>
              
              <div className="space-y-6">
                {regularRules.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="rounded-full bg-orange-50 p-3 h-11 w-11 flex text-orange-400 items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className=" text-black card-title">{item.rule}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 shadow-md border border-lotus-cream">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-black">
                  <Key className="text-orange-400" />
                  Property Access & Security
                </h3>
                <ul className="space-y-3">
                  {propertyAccess.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="bg-orange-50 rounded-full p-1 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="bg-orange-400 rounded-full w-1.5 h-1.5"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-md border border-lotus-cream">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-black">
                  <Shield className="text-orange-400" />
                  Local Laws & Regulations
                </h3>
                <ul className="space-y-3">
                  {localLaws.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="bg-orange-50 rounded-full p-1 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <div className="bg-orange-400 rounded-full w-1.5 h-1.5"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-lotus-cream">
            <h3 className="text-xl font-semibold text-black mb-4">Damages & Lost Items Policy</h3>
            <p className="text-gray-700 mb-4">
              We understand accidents happen, but we appreciate your care with our property. Please note:
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <div className="bg-orange-50 rounded-full p-1 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="bg-orange-400 rounded-full w-1.5 h-1.5"></div>
                </div>
                <span className="text-gray-700">Guests are responsible for damages beyond normal wear and tear</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-orange-50 rounded-full p-1 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="bg-orange-400 rounded-full w-1.5 h-1.5"></div>
                </div>
                <span className="text-gray-700">Report any damage immediately to help us address it quickly</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-orange-50 rounded-full p-1 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="bg-orange-400 rounded-full w-1.5 h-1.5"></div>
                </div>
                <span className="text-gray-700">Security deposit may be used to cover repair or replacement costs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="bg-orange-50 rounded-full p-1 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="bg-orange-400 rounded-full w-1.5 h-1.5"></div>
                </div>
                <span className="text-gray-700">Lost property will be held for 30 days and can be shipped at guest's expense</span>
              </li>
            </ul>
            <p className="text-gray-700 italic">
              We reserve the right to terminate the stay of guests who violate these house rules without refund.
            </p>
          </div>
        </div>
      </section>
    );
  };
  
  export default HouseRules;
  