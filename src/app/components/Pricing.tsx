import { 
    Check, 
    Calendar, 
    Users, 
    CreditCard, 
  } from "lucide-react";
  
  const pricingData = {
    regularRates: [
      { period: "Studio Apartment", price: "₦35,000", note: "per night" },
      { period: "1 Bedroom Apartment", price: "₦50,000", note: "per night" },
      { period: "2 Bedroom Apartment", price: "₦70,000", note: "7 nights" },
      { period: "2 Bed Maisonette", price: "₦85,000", note: "30 nights" }
    ],
    seasonalRates: [
      { period: "Studio Apartment", price: "₦35,000", note: "per night" },
      { period: "1 Bedroom Apartment", price: "₦50,000", note: "per night" },
      { period: "2 Bedroom Apartment", price: "₦70,000", note: "7 nights" },
      { period: "2 Bed Maisonette", price: "₦85,000", note: "30 nights" }
    ],
    additionalFees: [
      { item: "Cleaning Fee", price: "₦15,000", note: "one-time fee" },
      { item: "Security Deposit", price: "₦100,000", note: "refundable" },
      { item: "Extra Guest Fee", price: "₦5,000", note: "per person/night, beyond 4 guests" }
    ]
  };
  
  const PaymentPolicies = () => (
    <div className="bg-white rounded-xl p-6 shadow-md border mb-8 text-black border-gray-100">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <CreditCard className="text-[#FF7A00]" />
        Payment Policies
      </h3>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <span>50% deposit required to secure booking</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <span>Balance due 7 days before arrival</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <span>Security deposit returned within 3 days after checkout (if no damages)</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <span>We accept bank transfers, credit cards, and mobile payments</span>
        </li>
      </ul>
    </div>
  );
  
  const CancellationPolicy = () => (
    <div className="bg-white rounded-xl p-6 shadow-md border border-lotus-cream text-black border-gray-100">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Calendar className="text-[#FF7A00]" />
        Cancellation Policy
      </h3>
      <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <span>Free cancellation up to 14 days before check-in</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <span>7-13 days before check-in: 50% refund of deposit</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <span>Less than 7 days before check-in: No refund</span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <span>Special COVID-19 cancellation policy available - ask for details</span>
        </li>
      </ul>
    </div>
  );
  
  const BookingDetails = () => (
    <div className="bg-white rounded-xl p-6 shadow-md border border-lotus-cream text-black border-gray-100">
      <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
        <Users className="text-[#FF7A00]" />
        Booking Details
      </h3>
      <ul className="space-y-4">
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Check-in: 3:00 PM - 8:00 PM</p>
            <p className="text-sm text-gray-600">Late check-in available with prior arrangement</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Check-out: 11:00 AM</p>
            <p className="text-sm text-gray-600">Late check-out may incur additional fees</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Maximum Occupancy: 6 guests</p>
            <p className="text-sm text-gray-600">Additional charges apply for more than 4 guests</p>
          </div>
        </li>
        <li className="flex items-start gap-2">
          <Check className="h-5 w-5 text-[#FF7A00] flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">Minimum Stay</p>
            <p className="text-sm text-gray-600">2 nights (regular), 3 nights (holidays/weekends)</p>
          </div>
        </li>
      </ul>
    </div>
  );
  
  const Pricing = () => {
    return (
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="section-heading text-center">Pricing Information</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Transparent pricing with no hidden fees. Enjoy premium luxury at competitive rates.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <div>
              <h3 className="subsection-heading text-black">Regular Rates</h3>
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-lotus-cream">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-[#FFF8F0] text-black">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-lotus-charcoal">Room</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-lotus-charcoal">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricingData.regularRates.map((rate, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-black">{rate.period}</td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-semibold text-black">{rate.price}</span>
                          <span className="text-sm text-gray-500 ml-1">({rate.note})</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <h3 className="subsection-heading mt-8 text-black">Seasonal Rates</h3>
              <div className="bg-white rounded-xl shadow-md overflow-hidden border border-lotus-cream">
              <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-[#FFF8F0] text-black">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-lotus-charcoal">Period</th>
                      <th className="px-6 py-4 text-right text-sm font-semibold text-lotus-charcoal">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {pricingData.seasonalRates.map((rate, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 text-sm text-black">{rate.period}</td>
                        <td className="px-6 py-4 text-right">
                          <span className="font-semibold text-black">{rate.price}</span>
                          <span className="text-sm text-gray-500 ml-1">({rate.note})</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
            </div>
            
            <div className="space-y-6">
              <PaymentPolicies />
              <CancellationPolicy />
              <BookingDetails />
            </div>
          </div>
          
          <div className="text-center">
            <p className="italic text-gray-600 mb-6">
              *Prices are subject to change during special events or holidays. Contact us for current rates.
            </p>
            <button className="book-button">
              Check Availability & Book
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Pricing;