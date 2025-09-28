import React from 'react'
import Image from 'next/image'

const Message = () => {
  return (
    <div id="message" className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Section - Text Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-noto-sans-devanagari leading-tight">
              आत्मीय संदेश.......
            </h2>
            
            {/* First Paragraph */}
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-neutral-900 leading-relaxed font-noto-sans-devanagari">
              आप सभी के स्नेह एवं सहयोग से ओम ज्वेलर्स अपनी 23 वर्ष की यात्रा पूरी कर चुका है।
              इस अद्वितीय यात्रा को आप सभी ने अपने स्नेह, विश्वास, मार्गदर्शन, सकारात्मक सहयोग
              और आशीर्वाद से सिंचा है। हम आशा करते है, हमारे इस सफर को आप सभी का अपार स्नेह
              और समर्थन निरंतर मिलता रहेगा।

              </p>
              
              <p className="text-lg md:text-xl text-neutral-900 leading-relaxed font-noto-sans-devanagari">

                    इस 23 वर्ष की सफर को अद्वितीय बनाने के लिए आप सभी का आभार।
                    आशा है आप सभी का सहयोग एवं मार्गदर्शन आगे भी मिलता रहेगा।            
              </p>
            </div>
            
            {/* Signature */}
            <div className="pt-8">
              <p className="text-lg md:text-xl text-gray-700 font-noto-sans-devanagari">
                आपका अपना,
              </p>
              <p className="text-xl md:text-2xl font-semibold text-gray-900 font-noto-sans-devanagari mt-2">
                ओम ज्वेलर्स परिवार
              </p>
            </div>
          </div>
          
          {/* Right Section - Image */}
          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/Img-38.png"
                alt="Om Jewelers Store Interior"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Message