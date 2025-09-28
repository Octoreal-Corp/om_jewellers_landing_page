import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'
import ContactMap from './ContactMap'

const Contact = () => {
  return (
    <section id="contact" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-left mb-16">
          <h2 className="font-gilda-display text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-4">
            Contact us
          </h2>
          <p className="font-gilda-display text-lg sm:text-xl text-gray-600 max-w-2xl">
            We are here to help you find your perfect piece
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Details */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Mail className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-gilda-display text-lg font-medium text-gray-900 mb-1">Email</h3>
                <p className="font-gilda-display text-gray-600 mb-2">Reach out to our team</p>
                <a 
                  href="mailto:omjewellersjdp@gmail.com" 
                  className="font-gilda-display text-gray-900 hover:text-gray-700 transition-colors"
                >
                  omjewellersjdp@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Phone className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-gilda-display text-lg font-medium text-gray-900 mb-1">Phone</h3>
                <p className="font-gilda-display text-gray-600 mb-2">Call us for personalized assistance</p>
                <div className="space-y-1">
                  <a 
                    href="tel:9753392000" 
                    className="font-gilda-display text-gray-900 hover:text-gray-700 transition-colors block"
                  >
                    9753392000
                  </a>
                  <a 
                    href="tel:9754592000" 
                    className="font-gilda-display text-gray-900 hover:text-gray-700 transition-colors block"
                  >
                    9754592000
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <MapPin className="h-6 w-6 text-gray-600" />
              </div>
              <div>
                <h3 className="font-gilda-display text-lg font-medium text-gray-900 mb-1">Address</h3>
                <p className="font-gilda-display text-gray-600 mb-2">Visit our showroom in the heart of Jagdalpur</p>
                <div className="space-y-2">
                  <p className="font-gilda-display text-gray-900">
                    In front of Sanjay Market, beside Sai Mobile, Palace Road, Jagdalpur
                  </p>
                  <p className="font-gilda-display text-gray-900">
                    संजय मार्केट के सामने, साई मोबाइल के बाजू, पैलेस रोड, जगदलपुर
                  </p>
                  <a 
                    href="https://maps.google.com/?q=In+front+of+Sanjay+Market,+beside+Sai+Mobile,+Palace+Road,+Jagdalpur"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-gilda-display text-gray-900 hover:text-gray-700 transition-colors inline-flex items-center"
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
  )
}

export default Contact
