"use client";

import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router=useRouter()
  return (
    <section className=" w-full h-screen overflow-hidden bg-black text-white">

      {/* ================= VIDEO BACKGROUND ================= */}
      <video
        className="absolute inset-0 w-full h-full object-cover "
        src="/Herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/80" />

      

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 h-full w-full flex mt-20  justify-center px-6">

        <div className="w-full max-w-6xl text-center">

          {/* Small Label */}
          <div className="flex items-center justify-center gap-4 mb-7">
            <span className="w-10 h-[1px] bg-white/60" />

            <span className="uppercase tracking-[0.4em] text-xs text-white/70">
              Interior Architecture
            </span>

            <span className="w-10 h-[1px] bg-white/60" />
          </div>

          {/* Main Heading */}
          <h1 className="outfit text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight">
            Interiors That
            <br />

            <span className="font-semibold italic">
              Inspire Living.
            </span>
          </h1>

          {/* Description */}
          <p className="outfitT max-w-2xl mx-auto mt-8 text-sm sm:text-base md:text-lg text-white/75 leading-relaxed">
            Designing homes and commercial spaces with emotion, purpose,
            and a timeless sense of character.
          </p>

          {/* CTA */}
         <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">

  {/* Explore Button */}
  <button
  onClick={()=>{router.push('./modular-kitchen')}}
    className="
     cursor-pointer
      group
      relative
      flex
      items-center
      gap-3
      overflow-hidden
      rounded-full
      bg-white
      px-8
      py-4
      text-sm
      font-medium
      text-black

      transition-all
      duration-500
      ease-out

      hover:scale-[1.03]
      hover:shadow-2xl

      active:scale-95
      active:bg-black
      active:text-white
    "
  >

    {/* Background */}
    <span
      className="
        absolute
        inset-0
        -translate-x-full
        rounded-full
        bg-black

        transition-transform
        duration-500
        ease-out

        group-hover:translate-x-0
        group-active:translate-x-0
      "
    />

    {/* Text */}
    <span
      className="
        relative
        z-10

        transition-colors
        duration-500

        group-hover:text-white
        group-active:text-white
      "
    >
      Explore Our Work
    </span>

    {/* Arrow */}
    <span
      className="
        relative
        z-10
        flex
        h-6
        w-6
        items-center
        justify-center
        rounded-full
        bg-black
        text-white

        transition-all
        duration-500

        group-hover:translate-x-1
        group-hover:bg-white
        group-hover:text-black

        group-active:translate-x-1
        group-active:bg-white
        group-active:text-black
      "
    >
      →
    </span>

  </button>


  {/* Start Project */}
  <button
  onClick={()=>router.push('./contact')}
    className="
     cursor-pointer
      group
      flex
      items-center
      gap-2
      rounded-full
      border
      border-white/40
      px-8
      py-4
      text-sm
      text-white
      backdrop-blur-md

      transition-all
      duration-500
      ease-out

      hover:border-white
      hover:bg-white
      hover:text-black
      hover:scale-[1.03]

      active:scale-95
      active:bg-white
      active:text-black
    "
  >

    <span>
      Start a Project
    </span>

    <span
      className="
        transition-transform
        duration-500

        group-hover:translate-x-1
        group-active:translate-x-1
      "
    >
      ↗
    </span>

  </button>

</div>
        </div>
      </div>

      {/* ================= BOTTOM INFO ================= */}
      <div className="absolute bottom-8 left-0 z-20 w-full px-6 md:px-12">

        <div className="flex items-end justify-between">

          {/* Location */}
          <div className="hidden md:block">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Based in
            </p>

            <p className="text-sm mt-1">
              Mumbai · India
            </p>
          </div>

          {/* Scroll Indicator */}
          

          {/* Year */}
          <div className="hidden md:block text-right">
            <p className="text-[10px] uppercase tracking-[0.3em] text-white/50">
              Studio
            </p>

            <p className="text-sm mt-1">
              Est. 2026
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;
