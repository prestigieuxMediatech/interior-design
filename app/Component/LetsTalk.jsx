"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LetsTalk = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =================================
         SECTION INTRO
      ================================= */

      const introTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".lets-talk-section",
          start: "top 75%",
        },
      });

      introTl
        .from(".lets-talk-label", {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".lets-talk-heading span",
          {
            yPercent: 100,
            opacity: 0,
            duration: 1.2,
            stagger: 0.08,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".lets-talk-description",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.6"
        );

      /* =================================
         BACKGROUND WORD
      ================================= */

      gsap.to(".lets-talk-bg-word", {
        xPercent: -12,
        ease: "none",
        scrollTrigger: {
          trigger: ".lets-talk-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });

      /* =================================
         FORM REVEAL
      ================================= */

      gsap.from(".lets-talk-form", {
        y: 70,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".lets-talk-form",
          start: "top 80%",
        },
      });

      /* =================================
         FORM FIELDS
      ================================= */

      gsap.from(".talk-field", {
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".lets-talk-form",
          start: "top 75%",
        },
      });

      /* =================================
         FORM LINES
      ================================= */

      gsap.from(".talk-line", {
        scaleX: 0,
        transformOrigin: "left",
        stagger: 0.12,
        duration: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: ".lets-talk-form",
          start: "top 75%",
        },
      });

      /* =================================
         SUBMIT BUTTON
      ================================= */

      gsap.from(".talk-submit", {
        y: 30,
        opacity: 0,
        scale: 0.95,
        duration: 0.8,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: ".talk-submit",
          start: "top 90%",
        },
      });

      /* =================================
         BUTTON HOVER
      ================================= */

      const submitButton = document.querySelector(".talk-submit");
      const buttonCircle = document.querySelector(".talk-submit-circle");
      const buttonArrow = document.querySelector(".talk-submit-arrow");

      if (submitButton) {
        submitButton.addEventListener("mouseenter", () => {
          gsap.to(buttonCircle, {
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
          });

          gsap.to(buttonArrow, {
            x: 5,
            y: -5,
            duration: 0.4,
            ease: "power3.out",
          });
        });

        submitButton.addEventListener("mouseleave", () => {
          gsap.to(buttonCircle, {
            scale: 0,
            duration: 0.5,
            ease: "power3.inOut",
          });

          gsap.to(buttonArrow, {
            x: 0,
            y: 0,
            duration: 0.4,
            ease: "power3.out",
          });
        });
      }

      /* =================================
         DECORATIVE CIRCLE
      ================================= */

      gsap.from(".talk-decoration", {
        scale: 0,
        rotation: -45,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".lets-talk-section",
          start: "top 70%",
        },
      });

      gsap.to(".talk-decoration", {
        y: -30,
        rotation: 8,
        ease: "none",
        scrollTrigger: {
          trigger: ".lets-talk-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="lets-talk-section relative overflow-hidden bg-[#24231f] text-[#f3f0e9]"
    >
      {/* =================================
          BACKGROUND WORD
      ================================= */}

      <div className="pointer-events-none absolute left-0 top-[8%] overflow-hidden whitespace-nowrap opacity-[0.035]">
        <span className="lets-talk-bg-word block text-[30vw] font-light leading-none tracking-[-0.08em]">
          TALK
        </span>
      </div>

      {/* =================================
          DECORATIVE ELEMENT
      ================================= */}

      <div className="talk-decoration pointer-events-none absolute -right-32 top-32 hidden h-96 w-96 rounded-full border border-[#f3f0e9]/20 lg:block">
        <div className="absolute inset-10 rounded-full border border-[#f3f0e9]/10" />
      </div>

      {/* =================================
          MAIN CONTENT
      ================================= */}

      <div className="relative mx-auto max-w-[1500px] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">

        {/* =================================
            HEADER
        ================================= */}

        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-28">

          {/* =================================
              LEFT CONTENT
          ================================= */}

          <div>
            {/* LABEL */}

            <div className="lets-talk-label mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-[#f3f0e9]" />

              <span className="text-[11px] uppercase tracking-[0.35em] text-[#f3f0e9]/70">
                Let's Talk
              </span>
            </div>

            {/* HEADING */}

            <div className="lets-talk-heading overflow-hidden">
              <h2 className="text-[16vw] font-light leading-[0.82] tracking-[-0.07em] sm:text-[12vw] md:text-[10vw] lg:text-[7.5vw]">
                <span className="inline-block">
                  Got a
                </span>

                <br />

                <span className="inline-block font-serif italic text-[#b3a795]">
                  project
                </span>

                <br />

                <span className="inline-block">
                  in mind?
                </span>
              </h2>
            </div>

            {/* DESCRIPTION */}

            <p className="lets-talk-description mt-12 max-w-md text-base leading-8 text-[#f3f0e9]/60 md:text-lg">
              Got a project on your mind? Let's discuss about the
              details and create a space that feels uniquely yours.
            </p>

            {/* SECONDARY TEXT */}

            <p className="mt-16 max-w-sm text-[11px] uppercase leading-6 tracking-[0.22em] text-[#f3f0e9]/40">
              Are you looking for top interior designers in Mumbai?
            </p>
          </div>

          {/* =================================
              FORM
          ================================= */}

          <div className="lets-talk-form">

            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-0"
            >
              {/* FULL NAME */}

              <div className="talk-field relative">
                <label className="mb-4 block text-[10px] uppercase tracking-[0.28em] text-[#f3f0e9]/50">
                  Full Name *
                </label>

                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-transparent pb-5 text-lg font-light text-[#f3f0e9] outline-none placeholder:text-[#f3f0e9]/25"
                />

                <div className="talk-line h-px w-full bg-[#f3f0e9]/20" />
              </div>

              {/* EMAIL */}

              <div className="talk-field relative pt-8">
                <label className="mb-4 block text-[10px] uppercase tracking-[0.28em] text-[#f3f0e9]/50">
                  Email *
                </label>

                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-transparent pb-5 text-lg font-light text-[#f3f0e9] outline-none placeholder:text-[#f3f0e9]/25"
                />

                <div className="talk-line h-px w-full bg-[#f3f0e9]/20" />
              </div>

              {/* PHONE */}

              <div className="talk-field relative pt-8">
                <label className="mb-4 block text-[10px] uppercase tracking-[0.28em] text-[#f3f0e9]/50">
                  Phone No. *
                </label>

                <input
                  type="tel"
                  placeholder="Your phone number"
                  className="w-full bg-transparent pb-5 text-lg font-light text-[#f3f0e9] outline-none placeholder:text-[#f3f0e9]/25"
                />

                <div className="talk-line h-px w-full bg-[#f3f0e9]/20" />
              </div>

              {/* MESSAGE */}

              <div className="talk-field relative pt-8">
                <label className="mb-4 block text-[10px] uppercase tracking-[0.28em] text-[#f3f0e9]/50">
                  Message
                </label>

                <textarea
                  maxLength={200}
                  rows={4}
                  placeholder="Tell us a little about your project..."
                  className="w-full resize-none bg-transparent pb-5 text-lg font-light text-[#f3f0e9] outline-none placeholder:text-[#f3f0e9]/25"
                />

                <div className="talk-line h-px w-full bg-[#f3f0e9]/20" />

                <div className="mt-3 text-right text-[10px] tracking-[0.15em] text-[#f3f0e9]/35">
                  0 of 200 max characters.
                </div>
              </div>

              {/* =================================
                  SUBMIT BUTTON
              ================================= */}

              <div className="pt-12">
                <button
                  type="submit"
                  className="talk-submit group relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-[#f3f0e9]/30"
                >
                  {/* HOVER CIRCLE */}

                  <span className="talk-submit-circle absolute inset-0 scale-0 rounded-full bg-[#f3f0e9]" />

                  {/* ARROW */}

                  <span className="talk-submit-arrow relative z-10 text-2xl text-[#f3f0e9] mix-blend-difference">
                    ↗
                  </span>
                </button>

                <p className="mt-5 text-[10px] uppercase tracking-[0.3em] text-[#f3f0e9]/40">
                  Send enquiry
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* =================================
          BOTTOM LINE
      ================================= */}

      <div className="relative border-t border-[#f3f0e9]/15">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
          <span className="text-[9px] uppercase tracking-[0.3em] text-[#f3f0e9]/30">
            Interior Design Studio
          </span>

          <span className="text-[9px] uppercase tracking-[0.3em] text-[#f3f0e9]/30">
            Mumbai · India
          </span>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;