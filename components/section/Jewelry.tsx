import React from 'react'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'

const Jewelry = () => {
  const jewelryCategories = [
    { name: 'Earrings', image: '/earing.png' },
    { name: 'Rings', image: '/ring.png' },
    { name: 'Pendant', image: '/pendant.png' },
    { name: 'Mangalsutra', image: '/Mangalsutra.png' },
    { name: 'Bracelet', image: '/Bracelet.png' },
    { name: 'Bangles', image: '/bangles.png' },
    { name: 'Chains', image: '/chains.png' },
  ]

  return (
    <section id="jewelry" className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="font-gilda-display text-4xl sm:text-5xl lg:text-6xl font-normal text-gray-900 mb-4">
            Jewelry that speaks volumes
          </h2>
          <p className="font-gilda-display text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Timeless designs crafted with precision and passion
          </p>
        </div>

        {/* Jewelry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {jewelryCategories.map((category, index) => (
            <a key={index} href="#contact" className="group cursor-pointer">
              <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-gray-100">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-gilda-display text-center text-lg font-normal text-gray-900">
                {category.name}
              </h3>
            </a>
          ))}
          
          {/* Explore More Card */}
          <a href="#contact" className="group cursor-pointer">
            <div className="relative aspect-square rounded-lg overflow-hidden mb-4 bg-[#D2BC8F] flex flex-col justify-center p-6">
              <h3 className="font-gilda-display text-2xl font-normal text-gray-900 mb-3 text-left">
                Explore More
              </h3>
              <p className="font-gilda-display text-base text-gray-700 mb-4 text-left leading-relaxed">
                Explore timeless pieces from 10 + categories to be part of your memories
              </p>
             
            </div>
            <div className="font-gilda-display text-base font-medium text-gray-900 hover:text-gray-700 text-left inline-flex items-center transition-all duration-200 group-hover:translate-x-1">
              Discover All <span className="ml-2 text-lg"><ChevronRight/></span>
            </div>
          </a>
        </div>

       
      </div>
    </section>
  )
}

export default Jewelry