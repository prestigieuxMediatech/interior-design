"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
useEffect(() => {
  const ctx = gsap.context(() => {
    // Image comes from left
    gsap.fromTo(
      ".about-image-wrapper",
      {
        opacity: 0,
        x: -100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-image-wrapper",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Right side content comes from right
    gsap.fromTo(
      ".about-content",
      {
        opacity: 0,
        x: 100,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-content",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, sectionRef);

  return () => ctx.revert();
}, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#f3f0e9]
        text-[#27231e]
      "
    >
      {/* ================================
          BACKGROUND
      ================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-20
          top-10
          select-none
          text-[35vw]
          font-black
          leading-none
          tracking-[-0.1em]
          text-[#27231e]
          opacity-[0.035]
        "
      >
        AMAR
      </div>

      {/* ================================
          MAIN CONTENT
      ================================= */}

      <div
        className="
          relative
          z-10
          flex
          min-h-screen
          w-full
          items-center
          px-6
          py-20
          sm:px-10
          md:px-16
          lg:px-24
        "
      >
        <div
          className="
            mx-auto
            grid
            w-full
            max-w-7xl
            items-center
            gap-14
            lg:grid-cols-2
            lg:gap-24
          "
        >
          {/* ================================
              IMAGE
          ================================= */}

          <div className="relative">
            {/* Image label */}

            <div
              className="
                absolute
                -left-2
                -top-8
                z-20
                text-[10px]
                uppercase
                tracking-[0.4em]
                text-[#8a8175]
                sm:-left-7
              "
            >
              01 / About
            </div>

            {/* Image */}

            <div
              className="
                about-image-wrapper
                relative
                aspect-[4/5]
                max-h-[72vh]
                overflow-hidden
              "
            >
              <img
                src="/Aboutimage1.jpg"
                alt="Amar Interior"
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

              <div className="absolute inset-0 bg-black/[0.03]" />
            </div>

            {/* Image caption */}

            <div className="mt-4 flex justify-between">
              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-[#8a8175]
                "
              >
                Amar Interior
              </p>

              <p
                className="
                  text-[9px]
                  uppercase
                  tracking-[0.2em]
                  text-[#8a8175]
                "
              >
                Mumbai · India
              </p>
            </div>
          </div>

          {/* ================================
              CONTENT
          ================================= */}

          <div className="about-content">
            {/* Label */}

            <div className="mb-6 flex items-center gap-4">
              <span className="h-[1px] w-10 bg-[#8a8175]" />

              <span
                className="
                  text-[10px]
                  uppercase
                  tracking-[0.4em]
                  text-[#8a8175]
                "
              >
                About Us
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-xl
                text-5xl
                font-light
                leading-[0.95]
                tracking-[-0.05em]
                sm:text-6xl
                md:text-7xl
              "
            >
              Spaces that
              <br />

              <span className="font-medium">
                reflect
              </span>{" "}

              <span className="font-serif italic text-[#8a8175]">
                you.
              </span>
            </h2>

            {/* Brand */}

            <div className="mt-8">
              <p
                className="
                  text-xs
                  uppercase
                  tracking-[0.35em]
                  text-[#8a8175]
                "
              >
                Amar Interior
              </p>

              <p
                className="
                  mt-4
                  max-w-lg
                  text-sm
                  leading-7
                  text-[#625c54]
                  md:text-base
                "
              >
                Led by{" "}

                <span className="font-medium text-[#27231e]">
                  Amar
                </span>

                , Principal Interior Architect, Amar Interior creates
                elegant, functional spaces that reflect your lifestyle
                and personality.
              </p>
            </div>

            {/* Description */}

            <p
              className="
                mt-4
                max-w-lg
                text-sm
                leading-7
                text-[#625c54]
                md:text-base
              "
            >
              We specialize in bespoke interiors for homes, cafés, and
              commercial spaces — blending creativity, comfort, and
              timeless design. From concept to completion, we turn your
              vision into a beautifully crafted reality.
            </p>

            {/* ================================
                STATS
            ================================= */}

            <div
              className="
                mt-8
                grid
                max-w-lg
                grid-cols-2
                border-t
                border-[#27231e]/15
                pt-6
              "
            >
              {/* Experience */}

              <div>
                <div className="flex items-end gap-1">
                  <span
                    className="
                      text-5xl
                      font-light
                      tracking-[-0.05em]
                    "
                  >
                    15
                  </span>

                  <span className="mb-1 text-2xl text-[#8a8175]">
                    +
                  </span>
                </div>

                <p
                  className="
                    mt-2
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#8a8175]
                  "
                >
                  Years of Experience
                </p>
              </div>

              {/* Team */}

              <div
                className="
                  border-l
                  border-[#27231e]/15
                  pl-7
                "
              >
                <div className="flex items-end gap-1">
                  <span
                    className="
                      text-5xl
                      font-light
                      tracking-[-0.05em]
                    "
                  >
                    45
                  </span>

                  <span className="mb-1 text-2xl text-[#8a8175]">
                    +
                  </span>
                </div>

                <p
                  className="
                    mt-2
                    text-[9px]
                    uppercase
                    tracking-[0.25em]
                    text-[#8a8175]
                  "
                >
                  Design & Build Team
                </p>
              </div>
            </div>

            {/* ================================
                CTA
            ================================= */}

            <div className="mt-8">
              <Link
              href={'./about'}
              >
              <button

              
                className="
                  group
                  flex
                  items-center
                  gap-5
                  text-sm
                  font-medium
                "
              >
                <span
                  className="
                    border-b
                    border-[#27231e]/40
                    pb-1
                  "
                >
                  Discover Our Approach
                </span>

                <span
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#27231e]/30
                    transition-all
                    duration-500
                    group-hover:translate-x-2
                    group-hover:bg-[#27231e]
                    group-hover:text-white
                  "
                >
                  →
                </span>
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;