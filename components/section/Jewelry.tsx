import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Jewelry = () => {
  const jewelryCategories = [
    { name: "Earrings", image: "/earing.png" },
    { name: "Rings", image: "/ring.png" },
    { name: "Pendant", image: "/pendant.png" },
    { name: "Mangalsutra", image: "/Mangalsutra.png" },
    { name: "Bracelet", image: "/Bracelet.png" },
    { name: "Bangles", image: "/bangles.png" },
    { name: "Chains", image: "/chains.png" },
  ];

  return (
    <section id="jewelry" className="w-full px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Title Section */}
        <div className="mb-16 text-center">
          <h2 className="mb-5 md:mb-6">Jewelry that speaks volumes</h2>
          <p className="font-gilda-display mx-auto max-w-2xl text-lg text-gray-600 sm:text-xl">
            Timeless designs crafted with precision and passion
          </p>
        </div>

        {/* Jewelry Grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {jewelryCategories.map((category, index) => (
            <div className="py-6" key={index}>
              <Link href="#contact" className="group cursor-pointer">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h5 className="">{category.name}</h5>
              </Link>
            </div>
          ))}

          {/* Explore More Card */}
          <div className="py-6">
            <Link href="#contact" className="group cursor-pointer">
              <div className="relative mb-4 flex aspect-square flex-col justify-center overflow-hidden rounded-lg bg-[#D2BC8F] p-6">
                <h5 className="font-gilda-display mb-3 text-left text-2xl font-normal text-gray-900">
                  Explore More
                </h5>
                <p className="font-gilda-display mb-4 text-left text-base leading-relaxed text-gray-700">
                  Explore timeless pieces from 10 + categories to be part of
                  your memories
                </p>
              </div>
              <div className="font-heading inline-flex items-center text-left text-xl leading-[120%] tracking-[-1%] transition-all duration-200 group-hover:translate-x-1 hover:text-gray-700 lg:text-[28px]">
                Discover All{" "}
                <span className="ml-2 text-lg">
                  <ChevronRight />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Jewelry;
