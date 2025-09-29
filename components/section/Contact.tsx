import CheveronRight from "@/assets/icons/chevron_right.svg";
import Phone from "@/assets/icons/phone.svg";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContactMap from "./ContactMap";

import NewLocation from "@/assets/new-location.jpg";

const Contact = () => {
  return (
    <section id="contact" className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Contact Content */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left Column - Contact Details */}
          <div className="space-y-8">
            {/* Title Section */}
            <div className="mb-16 text-left">
              <h2 className="mb-4">Contact us</h2>
              <p className="max-w-2xl text-lg sm:text-xl">
                We are here to help you find your perfect piece
              </p>
            </div>
            {/* Email */}
            <div className="flex flex-col items-start space-x-4">
              <div className="mb-4 flex-shrink-0">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h6>Email</h6>
                <p className="mb-4">Reach out to our team</p>
                <Link
                  href="mailto:omjewellersjdp@gmail.com"
                  className="underline transition-colors hover:text-gray-700"
                >
                  omjewellersjdp@gmail.com
                </Link>
              </div>
            </div>

            {/* Phone */}
            <div className="flex flex-col items-start space-x-4">
              <div className="mb-4 flex-shrink-0">
                <Image src={Phone} alt={"Phone Icon"} height={24} width={24} />
              </div>
              <div>
                <h6>Phone</h6>
                <p className="mb-4">Call us for personalized assistance</p>
                <div className="space-y-1">
                  <Link
                    href="tel:9753392000"
                    className="block underline transition-colors hover:text-gray-700"
                  >
                    9753392000
                  </Link>
                  <a
                    href="tel:9754592000"
                    className="block underline transition-colors hover:text-gray-700"
                  >
                    9754592000
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex flex-col items-start space-x-4">
              <div className="mb-4 flex-shrink-0">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h6>Address</h6>
                <p className="mb-4">
                  Visit our showroom in the heart of Jagdalpur
                </p>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <p>
                      In front of Sanjay Market, beside Sai Mobile, Palace Road,
                      Jagdalpur
                    </p>
                    <p className="font-hindi">
                      संजय मार्केट के सामने, साई मोबाइल के बाजू, पैलेस रोड,
                      जगदलपुर
                    </p>
                  </div>

                  <Link
                    href="https://maps.google.com/?q=In+front+of+Sanjay+Market,+beside+Sai+Mobile,+Palace+Road,+Jagdalpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center transition-colors hover:text-gray-700"
                  >
                    Get directions{" "}
                    <span className="ml-2">
                      <Image
                        src={CheveronRight}
                        alt={"Cheveron right"}
                        height={24}
                        width={24}
                      />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Map */}
          <div className="lg:pl-8">
            <ContactMap />
            <div>
              <Image
                src={NewLocation}
                alt="Infographic showing the new location of Om Jewellers in Jagdalpur"
                width={600}
                height={400}
                className="mt-4 w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
