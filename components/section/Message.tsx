import Image from "next/image";
import React from "react";

const Message = () => {
  return (
    <div id="message" className="font-hindi w-full">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Section - Text Content */}
          <div className="space-y-8">
            {/* Title */}
            <h2 className="text-[32px] leading-[120%] md:text-[44px]">
              आत्मीय संदेश.......
            </h2>

            {/* Paragraph */}
            <div className="space-y-4">
              <p className="text-base leading-[150%] md:text-lg">
                आप सभी के स्नेह एवं सहयोग से ओम ज्वेलर्स अपनी 23 वर्ष की यात्रा
                पूरी कर चुका है। इस अद्वितीय यात्रा को आप सभी ने अपने स्नेह,
                विश्वास, मार्गदर्शन, सकारात्मक सहयोग और आशीर्वाद से सिंचा है। हम
                आशा करते है, हमारे इस सफर को आप सभी का अपार स्नेह और समर्थन
                निरंतर मिलता रहेगा। <br /> <br />
                इस 23 वर्ष की सफर को अद्वितीय बनाने के लिए आप सभी का आभार। आशा
                है आप सभी का सहयोग एवं मार्गदर्शन आगे भी मिलता रहेगा। <br />{" "}
                <br /> आपका अपना, <br />{" "}
                <span className="font-bold">ओम ज्वेलर्स परिवार</span>
              </p>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="relative">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-2xl md:h-[600px]">
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
  );
};

export default Message;
