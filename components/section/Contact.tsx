import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import ContactMap from "./ContactMap";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-white px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-16 text-left">
          <h2 className="mb-4 text-4xl font-normal text-gray-900 sm:text-5xl lg:text-6xl">
            Contact us
          </h2>
          <p className="max-w-2xl text-lg sm:text-xl">
            We are here to help you find your perfect piece
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Details */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex flex-col items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-900">Email</h6>
                <p className="mb-2">Reach out to our team</p>
                <a
                  href="mailto:omjewellersjdp@gmail.com"
                  className="text-gray-900 transition-colors hover:text-gray-700"
                >
                  omjewellersjdp@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-900">Phone</h6>
                <p className="mb-2">Call us for personalized assistance</p>
                <div className="space-y-1">
                  <a
                    href="tel:9753392000"
                    className="block text-gray-900 transition-colors hover:text-gray-700"
                  >
                    9753392000
                  </a>
                  <a
                    href="tel:9754592000"
                    className="block text-gray-900 transition-colors hover:text-gray-700"
                  >
                    9754592000
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h6 className="text-lg font-medium text-gray-900">Address</h6>
                <p className="mb-2">
                  Visit our showroom in the heart of Jagdalpur
                </p>
                <div className="space-y-2">
                  <p className="text-gray-900">
                    In front of Sanjay Market, beside Sai Mobile, Palace Road,
                    Jagdalpur
                  </p>
                  <p className="font-hindi text-gray-900">
                    संजय मार्केट के सामने, साई मोबाइल के बाजू, पैलेस रोड,
                    जगदलपुर
                  </p>
                  <a
                    href="https://maps.google.com/?q=In+front+of+Sanjay+Market,+beside+Sai+Mobile,+Palace+Road,+Jagdalpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-900 transition-colors hover:text-gray-700"
                  >
                    Get directions <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:pl-8">
            <ContactMap />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
