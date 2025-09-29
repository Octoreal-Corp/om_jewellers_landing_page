import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

import Bracelet from "@/assets/Bracelet.jpg";
import Mangalsutra from "@/assets/Mangalsutra.jpg";
import Bangles from "@/assets/bangles.jpg";
import Chains from "@/assets/chains.jpg";
import Earrings from "@/assets/earing.jpg";
import Pendant from "@/assets/pendant.jpg";
import Rings from "@/assets/ring.jpg";
import Image from "next/image";

const Jewelry = () => {
  const jewelryCategories = [
    { name: "Earrings", image: Earrings },
    { name: "Rings", image: Rings },
    { name: "Pendant", image: Pendant },
    { name: "Mangalsutra", image: Mangalsutra },
    { name: "Bracelet", image: Bracelet },
    { name: "Bangles", image: Bangles },
    { name: "Chains", image: Chains },
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
                <div className="relative mb-4 h-[360px] overflow-hidden rounded-[8px] bg-gray-100">
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
              <div className="relative mb-4 flex h-[360px] flex-col justify-center overflow-hidden rounded-[8px] bg-[#D2BC8F] p-6">
                <h5 className="mb-3">Explore More</h5>
                <p className="">
                  Explore timeless pieces from 10 + categories to be part of
                  your memories
                </p>
              </div>
              <div className="font-heading inline-flex items-center text-left text-xl leading-[120%] tracking-[-1%] lg:text-[28px]">
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
