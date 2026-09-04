"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import NavBar from "./NavBar";

const HeadImage = ({ title }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Initial states
      gsap.set(titleRef.current, {
        y: 80,
        opacity: 0,
        filter: "blur(10px)",
      });

      gsap.set(subtitleRef.current, {
        y: 30,
        opacity: 0,
      });

      gsap.set(lineRef.current, {
        scaleX: 0,
        transformOrigin: "left center",
      });

      // Title animation
      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power4.out",
      })

        // Line animation
        .to(
          lineRef.current,
          {
            scaleX: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        )

        // Subtitle animation
        .to(
          subtitleRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="
        relative
        w-full
        h-[60vh]
        min-h-[450px]
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          bg-no-repeat
          z-0
        "
        style={{
          backgroundImage: "url('/Aboutimage1.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Navbar */}
      {/* IMPORTANT: high z-index so mobile menu stays above hero */}
      {/* <div className=" absolute w-full h-screen  z-50">
        <NavBar />
      </div> */}

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center">
        <div className="px-6 text-center text-white">
          {/* Small heading */}
          <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/70 outfit">
            Amar Interior Studio
          </p>

          {/* Main title */}
          <h1
            ref={titleRef}
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-bold
              outfit
            "
          >
            {title}
          </h1>

          {/* Animated line */}
          <div
            ref={lineRef}
            className="mx-auto mt-7 h-[1px] w-20 bg-white/80"
          />

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="
              mx-auto
              mt-6
              max-w-xl
              text-sm
              text-white/75
              md:text-base
              outfitT
            "
          >
            Designing spaces that feel personal, timeless and beautifully
            considered.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeadImage;
