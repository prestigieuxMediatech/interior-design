"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
const ProductSlider = ({images, title, des}) => {


const [activeImage, setActiveImage] = useState(0);
  const imageRef = useRef(null);

  // Automatic image slider
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);



 // Image animation
  useEffect(() => {
    if (!imageRef.current) return;

    gsap.fromTo(
      imageRef.current,
      {
        opacity: 0,
        scale: 1.08,
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out",
      }
    );
  }, [activeImage]);

 const nextImage = () => {
    setActiveImage((prev) => (prev + 1) % images.length);
  };

     const previousImage = () => {
    setActiveImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
  };
   return (
    <main className="min-h-screen bg-[#eeeae2] text-[#292722]">

      {/* ================= HERO / PRODUCT SECTION ================= */}
      <section className="px-5 py-16 sm:px-8 md:px-12 lg:px-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* ================= IMAGE SLIDER ================= */}
          <div className="relative">

            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d2c8] sm:aspect-[5/6]">
              <img
                ref={imageRef}
                src={images[activeImage].src}
                alt={images[activeImage].alt}
                className="h-full w-full object-cover"
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/10" />

              {/* Image counter */}
              <div className="absolute left-5 top-5 flex items-center gap-2 text-xs tracking-[0.2em] text-white">
                <span>
                  {String(activeImage + 1).padStart(2, "0")}
                </span>

                <span className="h-px w-8 bg-white/70" />

                <span>
                  {String(images.length).padStart(2, "0")}
                </span>
              </div>

              {/* Slider buttons */}
              <div className="absolute bottom-5 right-5 flex gap-2">
                <button
                  onClick={previousImage}
                  aria-label="Previous image"
                  className="flex h-11 w-11 items-center justify-center border border-white/50 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#292722]"
                >
                  ←
                </button>

                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="flex h-11 w-11 items-center justify-center border border-white/50 bg-black/20 text-white backdrop-blur-sm transition hover:bg-white hover:text-[#292722]"
                >
                  →
                </button>
              </div>
            </div>

            {/* Progress indicators */}
            <div className="mt-5 flex items-center gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`h-[2px] transition-all duration-500 ${
                    index === activeImage
                      ? "w-12 bg-[#817664]"
                      : "w-6 bg-[#817664]/30"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="lg:pl-4">

            {/* Small label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#817664]" />

              <span className="text-xs uppercase tracking-[0.3em] text-[#817664]">
                {title}
              </span>
            </div>

            {/* Location */}
            <p className="mb-4 text-sm tracking-[0.15em] text-[#817664]">
              NAVI MUMBAI
            </p>

            {/* Heading */}
            <h1 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Best 
              <br />
              <span className="font-normal italic text-[#a99d8c]">
                {title} Interiors
              </span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-sm leading-7 text-[#292722]/65 sm:text-base sm:leading-8">
            {des}
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#292722]/65 sm:text-base sm:leading-8">
              At Amar Interior, we transform your vision into a sophisticated
            designed around your lifestyle and the way you live.
            </p>

            {/* Features */}
            <div className="mt-9 grid max-w-xl grid-cols-3 border-y border-[#292722]/10 py-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-[#817664]">
                  Layouts
                </p>
                <p className="mt-2 text-sm">L / U / Parallel</p>
              </div>

              <div className="border-l border-[#292722]/10 pl-4">
                <p className="text-xs uppercase tracking-wider text-[#817664]">
                  Finish
                </p>
                <p className="mt-2 text-sm">Premium Materials</p>
              </div>

              <div className="border-l border-[#292722]/10 pl-4">
                <p className="text-xs uppercase tracking-wider text-[#817664]">
                  Approach
                </p>
                <p className="mt-2 text-sm">Design & Build</p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-5"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#292722] text-xl text-white transition duration-500 group-hover:rotate-[-45deg]">
                  ↗
                </span>

                <span>
                  <span className="block text-sm font-medium">
                    Get a Quote
                  </span>

                  <span className="mt-1 block text-xs text-[#292722]/50">
                    Start your {title} project
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM TEXT ================= */}
        <div className="mx-auto mt-16 max-w-7xl border-t border-[#292722]/10 pt-6 lg:mt-24">
          <div className="flex flex-col justify-between gap-3 text-xs uppercase tracking-[0.2em] text-[#292722]/40 sm:flex-row">
            <span>Amar Interior Studio</span>
            <span>Designed for the way you live</span>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ProductSlider

