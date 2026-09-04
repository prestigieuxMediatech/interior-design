"use client";

import React, { useLayoutEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadImage from "../Component/HeadImage";

gsap.registerPlugin(ScrollTrigger);

const page = () => {
  const pageRef = useRef(null);

 
useLayoutEffect(() => {
  const ctx = gsap.context(() => {

    // =====================================================
    // PAGE OPENING ANIMATION
    // =====================================================

    const opening = gsap.timeline({
      defaults: {
        ease: "power4.out",
      },
    });

    // Initial states
    gsap.set(".page-loader", {
      yPercent: 0,
    });

    gsap.set(".loader-line", {
      scaleX: 0,
      transformOrigin: "left center",
    });

    gsap.set(".loader-text", {
      y: 40,
      opacity: 0,
    });

    gsap.set(".page-content", {
      opacity: 0,
    });

    // Loader text appears
    opening
      .to(".loader-text", {
        y: 0,
        opacity: 1,
        duration: 0.8,
      })

      // Small line animation
      .to(".loader-line", {
        scaleX: 1,
        duration: 0.8,
        ease: "power3.inOut",
      }, "-=0.3")

      // Hold for a moment
      .to({}, {
        duration: 0.25,
      })

      // Move loader away
      .to(".page-loader", {
        yPercent: -100,
        duration: 1.1,
        ease: "power4.inOut",
      })

      // Show page
      .to(".page-content", {
        opacity: 1,
        duration: 0.1,
      }, "-=0.7");

    // =====================================================
    // HERO OPENING
    // =====================================================

    gsap.from(".hero-opening", {
      scale: 1.12,
      opacity: 0,
      duration: 1.8,
      delay: 1.2,
      ease: "power3.out",
    });

    gsap.from(".hero-opening-content", {
      y: 70,
      opacity: 0,
      duration: 1.2,
      delay: 1.4,
      ease: "power4.out",
    });


    // =====================================================
    // SCROLL ANIMATIONS
    // =====================================================


    // =====================================================
    // INTRO ANIMATION
    // =====================================================

    gsap.from(".intro-text", {
      y: 70,
      opacity: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".intro-image", {
      x: 100,
      opacity: 0,
      scale: 1.08,
      duration: 1.3,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".intro-section",
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });


    // =====================================================
    // IMAGE COLLAGE
    // =====================================================

    gsap.utils.toArray(".reveal-image").forEach((image, index) => {
      gsap.from(image, {
        y: 100,
        opacity: 0,
        scale: 1.08,
        duration: 1.2,
        delay: index * 0.1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: image,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });


    // =====================================================
    // COLLAGE TEXT
    // =====================================================

    gsap.from(".collage-text", {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".collage-text",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });


    // =====================================================
    // STATS
    // =====================================================

    gsap.from(".stat-item", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".stats-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });


    // =====================================================
    // MISSION
    // =====================================================

    gsap.from(".mission-left", {
      x: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".mission-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".mission-right", {
      x: 80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".mission-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });


    // =====================================================
    // MISSION CARDS
    // =====================================================

    gsap.from(".mission-card", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".mission-cards",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });


    // =====================================================
    // JOURNEY
    // =====================================================

    gsap.utils.toArray(".timeline-item").forEach((item) => {

      const image = item.querySelector(".timeline-image");
      const content = item.querySelector(".timeline-content");

      gsap.from(image, {
        x: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(content, {
        x: -60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",

        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

    });


    // =====================================================
    // TESTIMONIAL
    // =====================================================

    gsap.from(".testimonial-content", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".testimonial-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });


    // =====================================================
    // PHILOSOPHY
    // =====================================================

    gsap.from(".philosophy-image", {
      x: -100,
      opacity: 0,
      scale: 1.08,
      duration: 1.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".philosophy-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".philosophy-content", {
      x: 100,
      opacity: 0,
      duration: 1.1,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".philosophy-section",
        start: "top 75%",
        toggleActions: "play none none none",
      },
    });


    // =====================================================
    // FINAL IMAGE
    // =====================================================

    gsap.from(".final-image", {
      y: 100,
      opacity: 0,
      scale: 1.08,
      duration: 1.2,
      ease: "power3.out",

      scrollTrigger: {
        trigger: ".final-image",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });


    // =====================================================
    // CTA
    // =====================================================

    gsap.from(".cta-item", {
      y: 60,
      opacity: 0,
      duration: 1,
      stagger: 0.12,
      ease: "power4.out",

      scrollTrigger: {
        trigger: ".cta-section",
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });


    // =====================================================
    // PAGE ENDING / EXIT ANIMATION
    // =====================================================

    const links = document.querySelectorAll("a");

    links.forEach((link) => {

      link.addEventListener("click", (event) => {

        const href = link.getAttribute("href");

        // Ignore external links / anchors / empty links
        if (
          !href ||
          href.startsWith("#") ||
          href.startsWith("http") ||
          href.startsWith("mailto:")
        ) {
          return;
        }

        event.preventDefault();

        const exit = gsap.timeline({
          onComplete: () => {
            window.location.href = href;
          },
        });

        exit
          .set(".page-exit", {
            yPercent: 100,
          })

          .to(".page-exit", {
            yPercent: 0,
            duration: 0.8,
            ease: "power4.inOut",
          })

          .to(".page-exit-text", {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          }, "-=0.3");

      });

    });

  }, pageRef);

  return () => ctx.revert();

}, []);


  return (
    <main
      ref={pageRef}
      className="overflow-hidden bg-[#f3f0e9] text-[#27231e]"
    >
      {/* =====================================================
          HERO
      ===================================================== */}
      
      <HeadImage  title={"About"}/>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="intro-section px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">

            {/* TEXT */}

            <div className="lg:col-span-5">

              <div className="intro-text mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#8a8175]" />

                <span className="text-[10px] uppercase tracking-[0.35em] text-[#8a8175]">
                  About Amar Interior
                </span>
              </div>

              <h2 className="intro-text text-4xl font-light leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                Spaces made for
                <br />

                <span className="font-serif italic text-[#8a8175]">
                  living.
                </span>
              </h2>

              <p className="intro-text mt-8 text-sm leading-8 text-[#625c54] md:text-base">
                At Amar Interior, we believe that a well-designed space is
                more than beautiful surroundings. It should reflect the
                people who live, work and create within it.
              </p>

              <p className="intro-text mt-5 text-sm leading-8 text-[#625c54] md:text-base">
                Our approach brings together architecture, interiors,
                materials and craftsmanship to create environments that
                feel natural, personal and timeless.
              </p>

              {/* SMALL INFORMATION */}

              <div className="intro-text mt-10 grid grid-cols-2 border-y border-[#27231e]/10">

                <div className="border-r border-[#27231e]/10 py-5 pr-5">
                  <p className="text-2xl font-light">
                    15+
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#8a8175]">
                    Years Experience
                  </p>
                </div>

                <div className="py-5 pl-5">
                  <p className="text-2xl font-light">
                    45+
                  </p>

                  <p className="mt-2 text-[9px] uppercase tracking-[0.2em] text-[#8a8175]">
                    Projects
                  </p>
                </div>

              </div>

              <Link
                href="/contact"
                className="intro-text group mt-8 inline-flex items-center gap-4 text-xs uppercase tracking-[0.15em]"
              >
                <span className="border-b border-[#27231e]/40 pb-1">
                  Start a Project
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </Link>

            </div>

            {/* IMAGE */}

            <div className="relative lg:col-span-7">

              <div className="intro-image aspect-[16/10] overflow-hidden">
                <img
                  src="/Aboutimage1.jpg"
                  alt="Amar Interior"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Card */}

              <div className="absolute -bottom-8 left-5 hidden w-48 bg-[#27231e] p-6 text-[#f3f0e9] shadow-2xl sm:block md:left-8">

                <span className="text-4xl font-light">
                  15+
                </span>

                <p className="mt-3 text-[9px] uppercase leading-5 tracking-[0.25em] text-white/50">
                  Years of
                  <br />
                  Designing
                  <br />
                  Meaningful Spaces
                </p>

              </div>

              {/* Vertical label */}

              <div className="absolute right-4 top-4 hidden md:block">
                <p className="text-[9px] uppercase tracking-[0.3em] text-white [writing-mode:vertical-rl]">
                  Interior Architecture · Design · Build
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          IMAGE COLLAGE + TEXT
      ===================================================== */}

      <section className="px-5 pb-20 sm:px-8 md:px-12 lg:px-16 lg:pb-28">
        <div className="mx-auto max-w-[1400px]">

          <div className="grid grid-cols-12 gap-3 md:gap-5">

            {/* IMAGE 1 */}

            <div className="reveal-image col-span-8 aspect-[4/3] overflow-hidden">
              <img
                src="/living-room.jpg"
                alt="Living room interior"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* IMAGE 2 */}

            <div className="reveal-image col-span-4 mt-10 aspect-[3/4] overflow-hidden md:mt-20">
              <img
                src="/kitchen-design.jpg"
                alt="Kitchen interior"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* TEXT */}

            <div className="collage-text col-span-12 py-8 md:col-span-7 md:py-16">

              <span className="text-[9px] uppercase tracking-[0.35em] text-[#8a8175]">
                Our Approach
              </span>

              <h3 className="mt-5 max-w-2xl text-3xl font-light leading-[1.05] tracking-[-0.04em] md:text-5xl">
                We don't simply decorate spaces.
                <br />

                <span className="font-serif italic text-[#8a8175]">
                  We create experiences.
                </span>
              </h3>

              <p className="mt-7 max-w-xl text-sm leading-7 text-[#625c54]">
                Every room has a purpose and every detail has a reason.
                From the initial concept to the final installation, we
                carefully consider proportion, light, texture, material
                and movement.
              </p>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[#625c54]">
                The result is a space that doesn't feel designed for
                design's sake — it feels effortless, comfortable and
                distinctly yours.
              </p>

            </div>

            {/* IMAGE 3 */}

            <div className="reveal-image col-span-5 aspect-[4/3] overflow-hidden md:ml-[8%]">
              <img
                src="/Aboutimage1.jpg"
                alt="Interior design"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* SIDE TEXT */}

            <div className="col-span-7 flex items-end px-4 pb-5 md:px-10 md:pb-10">

              <div>

                <p className="text-5xl font-light tracking-[-0.06em] md:text-7xl">
                  01
                </p>

                <p className="mt-3 max-w-sm text-[10px] uppercase leading-5 tracking-[0.2em] text-[#8a8175]">
                  Concept · Material · Detail · Craftsmanship
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          STATS
      ===================================================== */}

      <section className="stats-section border-y border-[#27231e]/10 bg-[#e8e3da]">

        <div className="mx-auto grid max-w-[1400px] grid-cols-2 md:grid-cols-4">

          {[
            ["15+", "Years Experience"],
            ["45+", "Projects Delivered"],
            ["25+", "Design Professionals"],
            ["100%", "Client Focused"],
          ].map(([number, label]) => (

            <div
              key={label}
              className="stat-item border-r border-[#27231e]/10 px-5 py-10 last:border-r-0 md:px-8 md:py-14"
            >

              <span className="text-4xl font-light tracking-[-0.05em] md:text-5xl">
                {number}
              </span>

              <p className="mt-3 text-[9px] uppercase tracking-[0.25em] text-[#8a8175]">
                {label}
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* =====================================================
          MISSION
      ===================================================== */}

      <section className="mission-section bg-[#27231e] px-5 py-20 text-[#f3f0e9] sm:px-8 md:px-12 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">

            {/* LEFT */}

            <div className="mission-left lg:col-span-4">

              <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                Our Mission
              </p>

              <h2 className="mt-5 text-4xl font-light leading-[0.95] tracking-[-0.05em] md:text-6xl">
                Design with
                <br />

                <span className="font-serif italic text-white/50">
                  purpose.
                </span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-white/40">
                Spaces should serve a purpose beyond appearance. They
                should support the way people live, work, relax and
                connect.
              </p>

            </div>

            {/* RIGHT */}

            <div className="mission-right lg:col-span-8">

              <p className="max-w-3xl text-xl font-light leading-8 text-white/80 md:text-3xl md:leading-10">
                Our mission is to create spaces that not only meet your
                functional needs but also inspire and delight.
              </p>

              <p className="mt-7 max-w-2xl text-sm leading-8 text-white/50">
                We believe the best interiors come from collaboration.
                Understanding the client, studying the space and carefully
                selecting every element allows us to create environments
                that feel both refined and deeply personal.
              </p>

              <div className="mission-cards mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">

                {[
                  {
                    number: "01",
                    title: "Residential",
                    text: "Homes designed around your lifestyle.",
                  },
                  {
                    number: "02",
                    title: "Commercial",
                    text: "Workspaces that inspire productivity.",
                  },
                  {
                    number: "03",
                    title: "Hospitality",
                    text: "Memorable environments for people.",
                  },
                  {
                    number: "04",
                    title: "Turnkey",
                    text: "From concept to final execution.",
                  },
                ].map((item) => (

                  <div
                    key={item.number}
                    className="mission-card border border-white/10 p-5 transition-all duration-500 hover:border-white/30 hover:bg-white/[0.03]"
                  >

                    <span className="text-[9px] text-white/30">
                      {item.number}
                    </span>

                    <h3 className="mt-8 text-sm uppercase tracking-[0.12em]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[10px] leading-5 text-white/40">
                      {item.text}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          JOURNEY
      ===================================================== */}

      <section className="px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-14 flex items-end justify-between">

            <div>

              <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#8a8175]">
                Our Journey
              </p>

              <h2 className="text-4xl font-light tracking-[-0.05em] sm:text-5xl md:text-6xl">
                From idea to{" "}
                <span className="font-serif italic text-[#8a8175]">
                  reality.
                </span>
              </h2>

            </div>

            <span className="hidden text-[9px] uppercase tracking-[0.3em] text-[#8a8175] md:block">
              2009 — Present
            </span>

          </div>

          <div className="relative">

            {/* 2009 */}

            <div className="timeline-item grid gap-8 border-t border-[#27231e]/10 py-12 md:grid-cols-[100px_1fr_1fr] md:gap-10">

              <div>

                <span className="text-xs text-[#8a8175]">
                  01
                </span>

                <p className="mt-2 text-2xl font-light">
                  2009
                </p>

              </div>

              <div className="timeline-content">

                <p className="text-[9px] uppercase tracking-[0.3em] text-[#8a8175]">
                  The Beginning
                </p>

                <h3 className="mt-4 text-3xl font-light">
                  A vision takes shape.
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#625c54]">
                  Amar Interior began with a vision to create spaces that
                  balance timeless aesthetics with everyday functionality.
                  The focus was simple — understand the client and design
                  around them.
                </p>

              </div>

              <div className="timeline-image aspect-[16/9] overflow-hidden">

                <img
                  src="/Aboutimage1.jpg"
                  alt="Interior project"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

            {/* FIRST PROJECT */}

            <div className="timeline-item grid gap-8 border-t border-[#27231e]/10 py-12 md:grid-cols-[100px_1fr_1fr] md:gap-10">

              <div>

                <span className="text-xs text-[#8a8175]">
                  02
                </span>

                <p className="mt-2 text-2xl font-light">
                  01
                </p>

              </div>

              <div className="timeline-content">

                <p className="text-[9px] uppercase tracking-[0.3em] text-[#8a8175]">
                  First Project
                </p>

                <h3 className="mt-4 text-3xl font-light">
                  Bringing dreams to life.
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#625c54]">
                  Completing our first project was more than a milestone.
                  It reinforced our belief that thoughtful design can
                  transform the way people experience their everyday lives.
                </p>

              </div>

              <div className="timeline-image aspect-[16/9] overflow-hidden">

                <img
                  src="./living-room.jpg"
                  alt="Interior project"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

            {/* TODAY */}

            <div className="timeline-item grid gap-8 border-y border-[#27231e]/10 py-12 md:grid-cols-[100px_1fr_1fr] md:gap-10">

              <div>

                <span className="text-xs text-[#8a8175]">
                  03
                </span>

                <p className="mt-2 text-2xl font-light">
                  NOW
                </p>

              </div>

              <div className="timeline-content">

                <p className="text-[9px] uppercase tracking-[0.3em] text-[#8a8175]">
                  The Future
                </p>

                <h3 className="mt-4 text-3xl font-light">
                  Designing what's next.
                </h3>

                <p className="mt-5 max-w-lg text-sm leading-7 text-[#625c54]">
                  Today we continue to explore new materials, techniques
                  and ideas while staying grounded in the principles that
                  have always shaped our work.
                </p>

              </div>

              <div className="timeline-image aspect-[16/9] overflow-hidden">

                <img
                  src="./interiorProject2.jpg"
                  alt="Interior project"
                  className="h-full w-full object-cover"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TESTIMONIAL
      ===================================================== */}

      <section className="testimonial-section relative overflow-hidden bg-[#e8e3da] px-5 py-24 sm:px-8 md:px-12 lg:px-16">

        <div className="absolute right-0 top-0 font-serif text-[15rem] leading-none text-[#27231e]/[0.025] md:text-[22rem]">
          “
        </div>

        <div className="testimonial-content relative mx-auto max-w-5xl text-center">

          <p className="text-[9px] uppercase tracking-[0.4em] text-[#8a8175]">
            Client Review
          </p>

          <blockquote className="mt-8 text-3xl font-light leading-[1.15] tracking-[-0.04em] md:text-5xl">
            “Absolutely delighted with the transformation of my space.
            The attention to detail, creativity and professionalism
            exceeded my expectations.”
          </blockquote>

          <div className="mx-auto mt-8 h-px w-10 bg-[#8a8175]" />

          <p className="mt-4 text-[9px] uppercase tracking-[0.3em] text-[#8a8175]">
            A Happy Client
          </p>

        </div>

      </section>

      {/* =====================================================
          PHILOSOPHY
      ===================================================== */}

      <section className="philosophy-section px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20">

            {/* IMAGE */}

            <div className="philosophy-image lg:col-span-7">

              <div className="relative aspect-[16/10] overflow-hidden">

                <img
                  src="/kitchen-design.jpg"
                  alt="Kitchen design"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 bg-[#27231e] px-6 py-4 text-[#f3f0e9]">

                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/50">
                    Design Philosophy
                  </span>

                </div>

              </div>

            </div>

            {/* CONTENT */}

            <div className="philosophy-content lg:col-span-5">

              <p className="mb-5 text-[9px] uppercase tracking-[0.35em] text-[#8a8175]">
                What We Believe
              </p>

              <h2 className="text-4xl font-light leading-[0.95] tracking-[-0.05em] md:text-6xl">
                Timeless.
                <br />

                Functional.
                <br />

                <span className="font-serif italic text-[#8a8175]">
                  Personal.
                </span>
              </h2>

              <p className="mt-8 text-lg font-light leading-8">
                Good design should look beautiful, feel natural and work
                effortlessly.
              </p>

              <p className="mt-6 text-sm leading-7 text-[#625c54]">
                Our design philosophy begins with understanding. We study
                the architecture, the light, the proportions and most
                importantly, the people who will experience the space.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#625c54]">
                From carefully selected materials to custom furniture and
                refined lighting, every element is considered as part of
                one complete visual language.
              </p>

              <p className="mt-4 text-sm leading-7 text-[#625c54]">
                The goal is never to follow trends simply because they are
                popular. We create interiors that can remain relevant,
                comfortable and beautiful for years to come.
              </p>

              <Link
                href="/service"
                className="group mt-8 inline-flex items-center gap-4 text-xs uppercase tracking-[0.15em]"
              >

                <span className="border-b border-[#27231e]/40 pb-1">
                  Explore Our Services
                </span>

                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>

              </Link>

            </div>

          </div>

          {/* SECONDARY IMAGE + TEXT */}

          <div className="mt-12 grid items-center gap-8 md:grid-cols-12 md:gap-10">

            <div className="final-image md:col-span-8">

              <div className="aspect-[16/8] overflow-hidden">

                <img
                  src="/bedroom-design.jpg"
                  alt="Bedroom interior"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

              </div>

            </div>

            <div className="md:col-span-4">

              <span className="text-5xl font-light text-[#8a8175]">
                02
              </span>

              <h3 className="mt-5 text-2xl font-light">
                Every detail matters.
              </h3>

              <p className="mt-4 text-sm leading-7 text-[#625c54]">
                The smallest details often make the biggest difference.
                Texture, colour, lighting and proportion come together
                to give every interior its character.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="cta-section bg-[#27231e] px-5 py-24 text-[#f3f0e9] sm:px-8 md:px-12 lg:px-16 lg:py-32">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-end gap-12 lg:grid-cols-12">

            <div className="lg:col-span-8">

              <p className="cta-item text-[9px] uppercase tracking-[0.4em] text-white/40">
                Let's Talk
              </p>

              <h2 className="cta-item mt-6 text-5xl font-light leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-8xl">
                Let's create
                <br />

                something{" "}

                <span className="font-serif italic text-white/50">
                  beautiful.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-4">

              <p className="cta-item max-w-sm text-sm leading-7 text-white/50">
                Have a project in mind? Tell us what you're imagining and
                let's turn your ideas into a space that feels uniquely yours.
              </p>

              <p className="cta-item mt-5 text-[10px] uppercase tracking-[0.25em] text-white/30">
                Residential · Commercial · Hospitality
              </p>

              <Link
                href="/contact"
                className="cta-item group mt-8 inline-flex items-center gap-5"
              >

                <span className="border-b border-white/30 pb-1 text-xs uppercase tracking-[0.15em]">
                  Start a Conversation
                </span>

                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 transition-all duration-500 group-hover:translate-x-2 group-hover:bg-white group-hover:text-[#27231e]">
                  →
                </span>

              </Link>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
};

export default page;