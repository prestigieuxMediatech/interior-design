
"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HeadImage from "../Component/HeadImage";

gsap.registerPlugin(ScrollTrigger);

const Page = () => {
  const pageRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  /* =================================
     FORM HANDLER
  ================================= */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data:", formData);

    setSubmitted(true);

    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
    });

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  /* =================================
     GSAP ANIMATION
  ================================= */

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =================================
         CONTACT INTRO
      ================================= */

      gsap.from(".contact-intro-label", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-intro",
          start: "top 80%",
        },
      });

      gsap.from(".contact-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-intro",
          start: "top 80%",
        },
      });

      gsap.from(".contact-description", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-intro",
          start: "top 80%",
        },
      });

      /* =================================
         CONTACT INFORMATION
      ================================= */

      gsap.from(".contact-info-item", {
        y: 50,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-details",
          start: "top 75%",
        },
      });

      /* =================================
         FORM
      ================================= */

      gsap.from(".contact-form", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 78%",
        },
      });

      gsap.from(".form-field", {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 78%",
        },
      });

      /* =================================
         BACKGROUND CIRCLE
      ================================= */

      gsap.to(".contact-circle", {
        y: 120,
        rotate: 12,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-main",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="w-full overflow-hidden bg-[#eeeae2] text-[#292722]"
    >
      {/* =================================
          HERO
      ================================= */}

      <HeadImage title={"Contact"} />

      {/* =================================
          INTRO
      ================================= */}

      <section className="contact-intro px-6 py-28 sm:px-10 md:py-36 lg:px-16 lg:py-44">
        <div className="mx-auto max-w-[1500px]">

          <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.6fr_1.4fr]">

            {/* LABEL */}

            <div className="contact-intro-label flex items-start gap-4">

              <span className="mt-2 h-px w-12 bg-[#817664]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#777269]">
                Get in touch
              </span>

            </div>

            {/* CONTENT */}

            <div>

              <h1 className="contact-title max-w-6xl text-[15vw] font-light leading-[0.8] tracking-[-0.075em] sm:text-[11vw] md:text-[9vw] lg:text-[7vw]">

                Let's talk

                <span className="block font-serif italic text-[#817664]">
                  about your space.
                </span>

              </h1>

              <p className="contact-description mt-12 max-w-2xl text-sm leading-8 text-[#6e6a62] md:text-base md:leading-9">
                Have a project in mind? Whether you're planning a
                home, office, retail space or a complete interior
                transformation, we'd love to hear about it.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* =================================
          CONTACT MAIN
      ================================= */}

      <section className="contact-main relative overflow-hidden bg-[#292722] px-6 py-24 text-[#eeeae2] sm:px-10 md:py-32 lg:px-16 lg:py-40">

        {/* =================================
            DECORATIVE CIRCLE
        ================================= */}

        <div className="contact-circle pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#eeeae2]/10 md:h-[700px] md:w-[700px]">
          <div className="absolute inset-10 rounded-full border border-[#eeeae2]/10" />

          <div className="absolute inset-24 rounded-full border border-[#817664]/20" />
        </div>

        <div className="relative mx-auto max-w-[1500px]">

          <div className="grid grid-cols-1 gap-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-28">

            {/* =================================
                CONTACT DETAILS
            ================================= */}

            <div className="contact-details">

              {/* SMALL TITLE */}

              <div className="mb-16 flex items-center gap-4">

                <span className="h-px w-10 bg-[#817664]" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#eeeae2]/50">
                  Amar Interior
                </span>

              </div>

              {/* ADDRESS */}

              <div className="contact-info-item border-t border-[#eeeae2]/15 py-8">

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#817664]">
                  Visit us
                </span>

                <p className="mt-5 max-w-sm text-xl font-light leading-8 text-[#eeeae2]/80">
                  Shop No. 8, Plot No. 180
                  <br />
                  Parvati Enclave
                  <br />
                  Sector 2
                  <br />
                  Taloja Phase 1
                </p>

              </div>

              {/* PHONE */}

              <div className="contact-info-item border-t border-[#eeeae2]/15 py-8">

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#817664]">
                  Call us
                </span>

                <a
                  href="tel:7400373699"
                  className="mt-5 block text-xl font-light transition-colors duration-300 hover:text-[#a99d8c]"
                >
                  +91 74003 73699
                </a>

              </div>

              {/* EMAIL */}

              <div className="contact-info-item border-y border-[#eeeae2]/15 py-8">

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#817664]">
                  Email us
                </span>

                <a
                  href="mailto:sameersiddi7640@gmail.com"
                  className="mt-5 block break-all text-lg font-light transition-colors duration-300 hover:text-[#a99d8c] md:text-xl"
                >
                  sameersiddi7640@gmail.com
                </a>

              </div>

              {/* OFFICE INFO */}

              <div className="contact-info-item mt-12">

                <p className="max-w-sm text-sm leading-7 text-[#eeeae2]/40">
                  We create thoughtful interiors that combine
                  functionality, character and timeless design.
                </p>

              </div>

            </div>

            {/* =================================
                CONTACT FORM
            ================================= */}

            <div className="contact-form">

              <div className="mb-12">

                <span className="text-[9px] uppercase tracking-[0.3em] text-[#817664]">
                  Start a conversation
                </span>

                <h2 className="mt-5 text-4xl font-light tracking-[-0.04em] md:text-5xl">
                  Tell us about
                  <span className="font-serif italic text-[#a99d8c]">
                    {" "}
                    your project.
                  </span>
                </h2>

              </div>

              {/* SUCCESS MESSAGE */}

              {submitted && (
                <div className="mb-8 border border-[#817664]/40 bg-[#817664]/10 px-5 py-4 text-sm text-[#eeeae2]/80">
                  Thank you. Your message has been received.
                  We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* =================================
                    FULL NAME
                ================================= */}

                <div className="form-field group mb-10">

                  <label
                    htmlFor="fullName"
                    className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-[#eeeae2]/40"
                  >
                    01 — Full Name
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full border-b border-[#eeeae2]/20 bg-transparent px-0 py-4 text-lg font-light text-[#eeeae2] outline-none transition-colors duration-300 placeholder:text-[#eeeae2]/20 focus:border-[#817664]"
                  />

                </div>

                {/* =================================
                    EMAIL + PHONE
                ================================= */}

                <div className="grid grid-cols-1 gap-10 md:grid-cols-2">

                  {/* EMAIL */}

                  <div className="form-field group">

                    <label
                      htmlFor="email"
                      className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-[#eeeae2]/40"
                    >
                      02 — Email
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      className="w-full border-b border-[#eeeae2]/20 bg-transparent px-0 py-4 text-lg font-light text-[#eeeae2] outline-none transition-colors duration-300 placeholder:text-[#eeeae2]/20 focus:border-[#817664]"
                    />

                  </div>

                  {/* PHONE */}

                  <div className="form-field group">

                    <label
                      htmlFor="phone"
                      className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-[#eeeae2]/40"
                    >
                      03 — Phone No.
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your phone number"
                      className="w-full border-b border-[#eeeae2]/20 bg-transparent px-0 py-4 text-lg font-light text-[#eeeae2] outline-none transition-colors duration-300 placeholder:text-[#eeeae2]/20 focus:border-[#817664]"
                    />

                  </div>

                </div>

                {/* =================================
                    MESSAGE
                ================================= */}

                <div className="form-field group mt-10">

                  <label
                    htmlFor="message"
                    className="mb-3 block text-[9px] uppercase tracking-[0.3em] text-[#eeeae2]/40"
                  >
                    04 — Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us a little about your project..."
                    className="w-full resize-none border-b border-[#eeeae2]/20 bg-transparent px-0 py-4 text-lg font-light text-[#eeeae2] outline-none transition-colors duration-300 placeholder:text-[#eeeae2]/20 focus:border-[#817664]"
                  />

                  <div className="mt-3 text-right text-[9px] tracking-[0.2em] text-[#eeeae2]/25">
                    {formData.message.length} / 500
                  </div>

                </div>

                {/* =================================
                    SUBMIT
                ================================= */}

                <div className="form-field mt-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

                  <p className="max-w-xs text-[10px] leading-5 text-[#eeeae2]/30">
                    By submitting this form, you agree to be
                    contacted regarding your project enquiry.
                  </p>

                  <button
                    type="submit"
                    className="group flex items-center gap-5"
                  >

                    <span className="flex h-20 w-20 items-center justify-center rounded-full border border-[#eeeae2]/30 text-xl transition-all duration-500 group-hover:border-[#817664] group-hover:bg-[#817664]">
                      ↗
                    </span>

                    <span className="text-[10px] uppercase tracking-[0.3em]">
                      Send Enquiry
                    </span>

                  </button>

                </div>

              </form>

            </div>

          </div>

        </div>
      </section>

      {/* =================================
          BOTTOM CTA
      ================================= */}

      <section className="bg-[#817664] px-6 py-24 text-[#eeeae2] sm:px-10 md:py-32 lg:px-16">

        <div className="mx-auto max-w-[1500px]">

          <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-[1fr_auto]">

            <div>

              <span className="text-[9px] uppercase tracking-[0.3em] text-[#eeeae2]/60">
                Amar Interior
              </span>

              <h2 className="mt-6 max-w-4xl text-[12vw] font-light leading-[0.82] tracking-[-0.07em] md:text-[8vw] lg:text-[6vw]">
                Your space.
                <span className="font-serif italic text-[#292722]">
                  {" "}
                  Your story.
                </span>
              </h2>

            </div>

            <a
              href="tel:7400373699"
              className="group flex items-center gap-4"
            >

              <span className="text-[10px] uppercase tracking-[0.3em]">
                Call now
              </span>

              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-[#eeeae2]/40 text-xl transition-all duration-500 group-hover:bg-[#292722] group-hover:border-[#292722]">
                ↗
              </span>

            </a>

          </div>

        </div>

      </section>

      {/* =================================
          FOOTER SPACE
      ================================= */}

      <div className="h-8 bg-[#eeeae2]" />

    </main>
  );
};

export default Page;
