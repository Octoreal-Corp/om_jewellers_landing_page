"use client";
import React, { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";

const Hero = () => {
  const slides = [
    "/Img-03 1.png",
    "/Img-05 1.png",
    "/Img-10 1.png",
    "/Img-33 1.png",
    "/Img-71 1.png",
    "/Img-72 1.png",
  ];

  const [api, setApi] = useState<CarouselApi | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay: when api is ready and not paused, advance every 3s
  useEffect(() => {
    if (!api) return;
    const id = setInterval(() => {
      if (!isPaused) api.scrollNext();
    }, 3000);
    return () => clearInterval(id);
  }, [api, isPaused]);

  return (
    <div id="home" className="relative h-screen w-full select-none">
      <div className="relative h-screen w-full overflow-hidden bg-gray-100 select-none">
        <Carousel
          opts={{ loop: true }}
          setApi={(c) => setApi(c)}
          className="h-full w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          <CarouselContent className="!ml-0 h-full w-full gap-0">
            {slides.map((src, index) => (
              <CarouselItem
                key={index}
                className="relative h-full w-full !pl-0"
              >
                <img
                  src={src}
                  alt={`Slide ${index + 1}`}
                  className="h-screen w-full object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 z-5 bg-black/70" />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Prev / Next buttons (positioned outside the main image area) */}
          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
      </div>

      {/* Main Text Overlay */}
      <div className="absolute inset-0 z-40 flex items-center justify-center select-none">
        <div className="max-w-4xl px-6 text-center text-white select-none">
          <h1 className="mb-5 md:mb-6">
            23 years of crafting timeless elegance
          </h1>
          <p className="mx-auto mb-8 text-base leading-relaxed md:text-xl md:font-normal">
            A journey of trust, love, and exceptional craftsmanship in every
            piece we create.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
