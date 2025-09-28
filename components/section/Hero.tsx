'use client'
import React, { useState, useEffect, useRef, useCallback } from 'react';

const Hero = () => {
  // Local jewelry shop images
  const slides = [
    '/Img-03 1.png',
    '/Img-05 1.png', 
    '/Img-10 1.png',
    '/Img-33 1.png',
    '/Img-71 1.png',
    '/Img-72 1.png'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-play functionality
  const startAutoPlay = useCallback(() => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      if (!isUserInteracting && containerRef.current) {
        const container = containerRef.current;
        const scrollAmount = container.clientWidth;
        let newIndex = currentIndex + 1;
        
        // If we're at the last image, go to first image with smooth transition
        if (newIndex >= slides.length) {
          newIndex = 0;
        }
        
        const newScrollPosition = newIndex * scrollAmount;
        setScrollPosition(newScrollPosition);
        container.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
        });
        setCurrentIndex(newIndex);
      }
    }, 3000);
  }, [isUserInteracting, currentIndex, slides.length]);

  const stopAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  // Initialize auto-play
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [startAutoPlay, stopAutoPlay]);

  // Handle mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsUserInteracting(true);
    setIsDragging(true);
    setStartX(e.clientX);
    stopAutoPlay();
    e.preventDefault();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const endX = e.clientX;
    const diffX = startX - endX;
    const container = containerRef.current;
    const scrollAmount = container.clientWidth;
    
    if (Math.abs(diffX) > 10) { // Reduced minimum swipe distance for better cursor responsiveness
      if (diffX > 0) {
        // Swipe left - next slide
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.length) {
          newIndex = 0;
        }
        const newScrollPosition = newIndex * scrollAmount;
        setScrollPosition(newScrollPosition);
        container.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
        });
        setCurrentIndex(newIndex);
      } else {
        // Swipe right - previous slide
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
          newIndex = slides.length - 1;
        }
        const newScrollPosition = newIndex * scrollAmount;
        setScrollPosition(newScrollPosition);
        container.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
        });
        setCurrentIndex(newIndex);
      }
    }
    
    setIsDragging(false);
    setTimeout(() => {
      setIsUserInteracting(false);
      startAutoPlay();
    }, 1000);
  };

  // Handle touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsUserInteracting(true);
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    stopAutoPlay();
    e.preventDefault();
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    
    const endX = e.changedTouches[0].clientX;
    const diffX = startX - endX;
    const container = containerRef.current;
    const scrollAmount = container.clientWidth;
    
    if (Math.abs(diffX) > 30) { // Reduced minimum swipe distance for better mobile responsiveness
      if (diffX > 0) {
        // Swipe left - next slide
        let newIndex = currentIndex + 1;
        if (newIndex >= slides.length) {
          newIndex = 0;
        }
        const newScrollPosition = newIndex * scrollAmount;
        setScrollPosition(newScrollPosition);
        container.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
        });
        setCurrentIndex(newIndex);
      } else {
        // Swipe right - previous slide
        let newIndex = currentIndex - 1;
        if (newIndex < 0) {
          newIndex = slides.length - 1;
        }
        const newScrollPosition = newIndex * scrollAmount;
        setScrollPosition(newScrollPosition);
        container.scrollTo({
          left: newScrollPosition,
          behavior: 'smooth'
        });
        setCurrentIndex(newIndex);
      }
    }
    
    setIsDragging(false);
    setTimeout(() => {
      setIsUserInteracting(false);
      startAutoPlay();
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => {
        setIsUserInteracting(false);
        startAutoPlay();
      }, 1000);
    }
  };

  // Handle scroll wheel for horizontal navigation
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    setIsUserInteracting(true);
    stopAutoPlay();
    
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const scrollAmount = container.clientWidth;
    
    if (e.deltaX > 0 || e.deltaY > 0) {
      // Scroll down or right - next slide
      let newIndex = currentIndex + 1;
      if (newIndex >= slides.length) {
        newIndex = 0;
      }
      const newScrollPosition = newIndex * scrollAmount;
      setScrollPosition(newScrollPosition);
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    } else {
      // Scroll up or left - previous slide
      let newIndex = currentIndex - 1;
      if (newIndex < 0) {
        newIndex = slides.length - 1;
      }
      const newScrollPosition = newIndex * scrollAmount;
      setScrollPosition(newScrollPosition);
      container.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
      setCurrentIndex(newIndex);
    }
    
    setTimeout(() => {
      setIsUserInteracting(false);
      startAutoPlay();
    }, 1000);
  };

  return (
    <div id="home" className="w-full h-screen relative select-none">
      <div className="relative overflow-hidden w-full h-screen bg-gray-100 select-none">
        <div 
          ref={containerRef}
          className="flex w-full h-full overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing select-none"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ 
            touchAction: 'pan-y',
            scrollBehavior: 'smooth',
            scrollSnapType: 'x mandatory'
          }}
        >
          {slides.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full h-screen relative"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-screen object-cover"
                draggable={false}
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0" style={{backgroundColor: '#00000099'}}></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Main Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-40 select-none">
        <div className="text-center text-white max-w-4xl px-6 select-none">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-6 leading-[120%] tracking-[-1%] text-center font-gilda-display">
            23 years of crafting timeless elegance
          </h1>
          <p className="text-base font-light md:text-xl mb-8  mx-auto leading-relaxed md:font-normal  ">
            A journey of trust, love, and exceptional craftsmanship 
            in every piece we create.
          </p>
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white cursor-pointer text-gray-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Explore
            </button>
            <button className="border border-white cursor-pointer text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-gray-900 transition-colors">
              Connect
            </button>
          </div> */}
        </div>
      </div>

      {/* Left hover zone for previous slide */}
      <div 
        className="absolute left-0 top-0 w-1/4 h-full z-30 cursor-w-resize opacity-0 hover:opacity-10 transition-opacity duration-300"
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => {
          setTimeout(() => setIsUserInteracting(false), 1000);
          startAutoPlay();
        }}
        onClick={() => {
          if (!containerRef.current) return;
          const container = containerRef.current;
          const scrollAmount = container.clientWidth;
          let newIndex = currentIndex - 1;
          if (newIndex < 0) {
            newIndex = slides.length - 1;
          }
          const newScrollPosition = newIndex * scrollAmount;
          setScrollPosition(newScrollPosition);
          container.scrollTo({
            left: newScrollPosition,
            behavior: 'smooth'
          });
          setCurrentIndex(newIndex);
          setIsUserInteracting(true);
          stopAutoPlay();
          setTimeout(() => {
            setIsUserInteracting(false);
            startAutoPlay();
          }, 1000);
        }}
      />

      {/* Right hover zone for next slide */}
      <div 
        className="absolute right-0 top-0 w-1/4 h-full z-30 cursor-e-resize opacity-0 hover:opacity-10 transition-opacity duration-300"
        onMouseEnter={() => setIsUserInteracting(true)}
        onMouseLeave={() => {
          setTimeout(() => setIsUserInteracting(false), 1000);
          startAutoPlay();
        }}
        onClick={() => {
          if (!containerRef.current) return;
          const container = containerRef.current;
          const scrollAmount = container.clientWidth;
          let newIndex = currentIndex + 1;
          if (newIndex === slides.length - 1) {
            // Jump to first real image
            newIndex = 1;
            container.scrollTo({
              left: scrollAmount,
              behavior: 'auto'
            });
            setCurrentIndex(1);
            setScrollPosition(scrollAmount);
          } else {
            const newScrollPosition = newIndex * scrollAmount;
            setScrollPosition(newScrollPosition);
            container.scrollTo({
              left: newScrollPosition,
              behavior: 'smooth'
            });
            setCurrentIndex(newIndex);
          }
          setIsUserInteracting(true);
          stopAutoPlay();
          setTimeout(() => {
            setIsUserInteracting(false);
            startAutoPlay();
          }, 1000);
        }}
      />

    </div>
  );
};

export default Hero;