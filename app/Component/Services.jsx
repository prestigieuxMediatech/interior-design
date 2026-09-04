"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: "01",
    title: "Residential",
    subtitle: "Interiors",
    description:
      "Thoughtfully composed homes that balance architecture, comfort and individuality.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=90",
  },
  {
    number: "02",
    title: "Commercial",
    subtitle: "Spaces",
    description:
      "Purposeful environments designed to strengthen your brand and elevate everyday experiences.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90",
  },
  {
    number: "03",
    title: "Modular",
    subtitle: "Kitchens",
    description:
      "Elegant, highly functional kitchens where intelligent planning meets refined detailing.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=90",
  },
  {
    number: "04",
    title: "Turnkey",
    subtitle: "Interiors",
    description:
      "A complete design-to-execution experience, managed with precision from the first sketch to the final detail.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=90",
  },
];

const Services = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* --------------------------------
         SECTION INTRO
      -------------------------------- */

      gsap.from(".services-label", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 85%",
        },
      });

      gsap.from(".services-heading span", {
        yPercent: 100,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 80%",
        },
      });

      gsap.from(".services-intro", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-header",
          start: "top 75%",
        },
      });

      /* --------------------------------
         SERVICE ROWS
      -------------------------------- */

      const rows = gsap.utils.toArray(".service-item");

      rows.forEach((row) => {
        const image = row.querySelector(".service-image");
        const imageWrapper = row.querySelector(".service-image-wrapper");
        const number = row.querySelector(".service-number");
        const title = row.querySelector(".service-title");
        const description = row.querySelector(".service-description");
        const line = row.querySelector(".service-line");

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: row,
            start: "top 80%",
            end: "top 35%",
            scrub: 1,
          },
        });

        tl.fromTo(
          number,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          }
        )
          .fromTo(
            title,
            {
              y: 80,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .fromTo(
            description,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
            },
            "-=0.5"
          )
          .fromTo(
            imageWrapper,
            {
              clipPath: "inset(100% 0% 0% 0%)",
            },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1,
              ease: "power3.inOut",
            },
            "-=0.8"
          )
          .fromTo(
            line,
            {
              scaleX: 0,
            },
            {
              scaleX: 1,
              transformOrigin: "left",
              duration: 0.8,
            },
            "-=0.8"
          );

        /* IMAGE PARALLAX */

        gsap.fromTo(
          image,
          {
            yPercent: -8,
          },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: row,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );

        /* IMAGE HOVER */

        row.addEventListener("mouseenter", () => {
          gsap.to(image, {
            scale: 1.06,
            duration: 1,
            ease: "power3.out",
          });

          gsap.to(number, {
            x: 8,
            duration: 0.4,
            ease: "power2.out",
          });
        });

        row.addEventListener("mouseleave", () => {
          gsap.to(image, {
            scale: 1,
            duration: 1,
            ease: "power3.out",
          });

          gsap.to(number, {
            x: 0,
            duration: 0.4,
          });
        });
      });

      /* --------------------------------
         ADDITIONAL SERVICES ANIMATION
      -------------------------------- */

      gsap.from(".additional-services-content", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".additional-services",
          start: "top 80%",
        },
      });

      gsap.from(".additional-service-item", {
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".additional-service-list",
          start: "top 80%",
        },
      });

      /* --------------------------------
         ALL SERVICES BUTTON
      -------------------------------- */

      gsap.from(".all-services-button", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".all-services-button",
          start: "top 90%",
        },
      });

      /* --------------------------------
         STATS
      -------------------------------- */

      gsap.from(".service-stat", {
        y: 50,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".service-stats",
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-[#f3f0e9] text-[#24231f]"
    >
      {/* =================================
          HEADER
      ================================= */}

      <div className="services-header mx-auto max-w-[1500px] px-6 pb-28 pt-32 sm:px-10 lg:px-16 lg:pb-40 lg:pt-44">

        {/* LABEL */}

        <div className="services-label mb-10 flex items-center gap-4">
          <span className="h-px w-12 bg-[#24231f]" />

          <span className="text-[11px] uppercase tracking-[0.35em]">
            What we do
          </span>
        </div>

        {/* HEADING */}

        <div className="services-heading max-w-5xl overflow-hidden">
          <h2 className="text-[13vw] font-light leading-[0.82] tracking-[-0.065em] sm:text-[11vw] md:text-[9vw] lg:text-[8vw]">
            <span className="inline-block">Spaces</span>{" "}
            <span className="inline-block font-serif italic">
              with
            </span>

            <br />

            <span className="inline-block">
              intention.
            </span>
          </h2>
        </div>

        {/* INTRO */}

     
<div className="mt-16 grid grid-cols-1 items-center gap-10 md:grid-cols-2 lg:mt-24 lg:gap-16">

  {/* Interior Image */}
  <div className="services-image relative overflow-hidden">
    <img
      src="./Aboutimage1.jpg"
      alt="Amar Interior design showcase"
      className="
        h-[300px]
        w-full
        object-cover
        sm:h-[380px]
        md:h-[420px]
        lg:h-[500px]
      "
    />

    {/* Subtle overlay */}
    <div className="absolute inset-0 bg-black/5" />

    {/* Image label */}
    <div
      className="
        absolute
        bottom-5
        left-5
        border
        border-white/30
        bg-black/20
        px-4
        py-2
        backdrop-blur-sm
      "
    >
      <p className="text-[10px] uppercase tracking-[0.25em] text-white">
        Interior Architecture
      </p>
    </div>
  </div>

  {/* Intro Text */}
  <div>
    <p className="services-intro max-w-lg text-base leading-8 text-[#68655e] md:text-lg">
      From private residences to distinctive commercial
      environments, we create interiors that are considered
      down to the smallest detail. Our approach brings together
      architecture, materiality, craftsmanship and the way you
      experience a space.
    </p>

    {/* Small detail */}
    <div className="mt-8 flex items-center gap-4">
      <span className="h-px w-12 bg-[#817664]" />

      <span className="text-[10px] uppercase tracking-[0.25em] text-[#817664]">
        Thoughtfully Designed
      </span>
    </div>
  </div>

</div>


      </div>

      {/* =================================
          SERVICES
      ================================= */}

      <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        {services.map((service) => (
          <article
            key={service.number}
            className="service-item group relative border-t border-[#24231f]/20 py-16 lg:py-24"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[100px_1fr_0.9fr] lg:gap-16">

              {/* NUMBER */}

              <div className="service-number flex items-start">
                <span className="text-xs tracking-[0.25em] text-[#77736b]">
                  {service.number}
                </span>
              </div>

              {/* TITLE */}

              <div>
                <h3 className="service-title max-w-xl text-[14vw] font-light leading-[0.8] tracking-[-0.06em] sm:text-7xl md:text-8xl lg:text-[7vw]">
                  {service.title}

                  <span className="block font-serif italic text-[#827866]">
                    {service.subtitle}
                  </span>
                </h3>

                {/* DESCRIPTION MOBILE */}

                <p className="service-description mt-10 max-w-sm text-sm leading-7 text-[#6c6961] lg:hidden">
                  {service.description}
                </p>
              </div>

              {/* IMAGE */}

              <div className="lg:pt-8">
                <div className="service-image-wrapper relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} ${service.subtitle}`}
                    className="service-image h-[120%] w-full object-cover"
                  />
                </div>

                {/* DESCRIPTION DESKTOP */}

                <div className="hidden pt-7 lg:block">
                  <p className="service-description max-w-sm text-sm leading-7 text-[#6c6961]">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>

            {/* BOTTOM LINE */}

            <div className="service-line absolute bottom-0 left-0 h-px w-full bg-[#24231f]/20" />
          </article>
        ))}
      </div>

      {/* =================================
          ADDITIONAL SERVICES
      ================================= */}

      <div className="additional-services mx-auto max-w-[1500px] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">

        <div className="grid grid-cols-1 gap-16 border-t border-[#24231f]/20 pt-10 md:grid-cols-2">

          {/* CONTENT */}

          <div className="additional-services-content">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#77736b]">
              Beyond interiors
            </p>

            <h3 className="mt-8 max-w-xl text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-6xl">
              Every detail has

              <span className="font-serif italic text-[#827866]">
                {" "}
                purpose.
              </span>
            </h3>
          </div>

          {/* ADDITIONAL SERVICES LIST */}

          <div className="additional-service-list grid grid-cols-1">

            {[
              "3D Visualisation",
              "Space Planning",
              "Civil Execution",
              "Furniture & Styling",
              "Lighting Design",
              "Home Automation",
            ].map((item, index) => (
              <div
                key={item}
                className="additional-service-item group flex items-center justify-between border-b border-[#24231f]/15 py-5"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-[#8a867d]">
                    0{index + 1}
                  </span>

                  <span className="text-lg font-light">
                    {item}
                  </span>
                </div>

                <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                  ↗
                </span>
              </div>
            ))}

            {/* =================================
                ALL SERVICES NAVIGATION
            ================================= */}

            <div className="all-services-button mt-10 flex justify-end">
              <Link
                href={"/service"}
                className="group inline-flex items-center gap-5"
              >
                {/* BUTTON TEXT */}

                <span className="relative text-[11px] uppercase tracking-[0.28em]">
                  View all services

                  <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[#24231f] transition-transform duration-500 ease-out group-hover:scale-x-100" />
                </span>

                {/* ARROW */}

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#24231f]/30 transition-all duration-500 ease-out group-hover:border-[#24231f] group-hover:bg-[#24231f] group-hover:text-[#f3f0e9]">
                  <span className="text-lg transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* =================================
          STATS
      ================================= */}

      <div className="service-stats border-t border-[#24231f]/20">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 sm:grid-cols-3">

          {[
            ["1560+", "Clients Worldwide"],
            ["1380+", "Projects Completed"],
            ["1.5M+", "Sq. Ft. Designed"],
          ].map(([number, label], index) => (
            <div
              key={label}
              className={`service-stat px-6 py-16 sm:px-10 lg:px-16 lg:py-24 ${
                index !== 0
                  ? "border-t border-[#24231f]/20 sm:border-l sm:border-t-0"
                  : ""
              }`}
            >
              <p className="text-5xl font-light tracking-[-0.05em] md:text-6xl">
                {number}
              </p>

              <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-[#77736b]">
                {label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Services;