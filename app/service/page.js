
"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeadImage from "../Component/HeadImage";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

// =====================================================
// SERVICES DATA
// =====================================================

const services = [
  {
    number: "01",
    title: "Contacting",
    subtitle: "Interior Solutions",
    image: "./InteriorProject2.jpg",

    short:
      "Innovative and economical interior solutions for residential, commercial, retail and hospitality spaces.",

    description: [
      "Decore & Design Interior provides interior solutions for projects in retail, hotel, commercial, and residential settings. Our team puts in endless effort to provide innovative and economical solutions that meet the needs of the client.",

      "Modern technology, premium materials, and artistic interpretation are combined to create interior spaces that enthral, inspire, and connect people.",

      "Working on various projects throughout the area and beyond, we have a track record of success. Decore & Design Interior takes pride in meeting deadlines that are both complex and incredibly tight while yet producing the best results.",
    ],

    category: "Residential / Commercial",
  },

  {
    number: "02",
    title: "Design",
    subtitle: "& Built",
    image: "./InteriorProject2.jpg",

    short:
      "A complete turnkey design and build service, from the first concept to final handover.",

    description: [
      "We offer a fully-managed one-stop design and build service, undertaking all aspects of turnkey projects. Our team of design experts will work with you throughout the development process and beyond.",

      "Using the latest 3D CAD and BIM Design software, we provide our clients with a fully visualised design concept.",

      "Driven by passion for great designs, aesthetic finishes and pursuit for excellence, Décor & Design Interior elevates the creative process to provide clients with a new perspective in interior solutions.",

      "From initial design and planning, we deliver full interior projects right through to hand over. Our multi-skilled teams are dynamic and get involved in different parts of each project.",
    ],

    category: "Design / Construction",
  },

  {
    number: "03",
    title: "Project",
    subtitle: "Management",
    image: "./living-room.jpg",

    short:
      "Experienced professionals managing planning, execution, quality and budgets from beginning to end.",

    description: [
      "Our project management team is constructed up of skilled and knowledgeable experts who consistently create work of outstanding quality. Our goal is to meet the client's expectations on all projects, no matter how big or small.",

      "With more than 16 years of expertise as an interior design firm, we have the proper structure, strategy, method, and team in place to complete projects successfully.",

      "Because Decor & Design Interior takes a comprehensive approach to processes and enhancement, we respect and value quality assurance and safety.",

      "Our staff has an enormous amount of knowledge and experience to make sure everything goes according to plan and within the allocated budget.",
    ],

    category: "Planning / Execution",
  },
];

// =====================================================
// SERVICE CARD
// =====================================================

const ServiceCard = ({ service, index }) => {
  const [open, setOpen] = useState(false);

  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const arrowRef = useRef(null);
  const detailsRef = useRef(null);

  const dark = index === 1;

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  useLayoutEffect(() => {
    if (!detailsRef.current) return;

    gsap.set(detailsRef.current, {
      height: 0,
      opacity: 0,
      overflow: "hidden",
    });
  }, []);

  useLayoutEffect(() => {
    if (!detailsRef.current) return;

    if (open) {
      gsap.to(detailsRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
      });
    } else {
      gsap.to(detailsRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power3.inOut",
      });
    }
  }, [open]);

  useLayoutEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const image = imageRef.current;
    const arrow = arrowRef.current;

    if (!window.matchMedia("(hover: hover)").matches) {
      return;
    }

    const enter = () => {
      gsap.to(image, {
        scale: 1.06,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.to(arrow, {
        x: 7,
        rotate: 45,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    const leave = () => {
      gsap.to(image, {
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
      });

      gsap.to(arrow, {
        x: 0,
        rotate: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    };

    card.addEventListener("mouseenter", enter);
    card.addEventListener("mouseleave", leave);

    return () => {
      card.removeEventListener("mouseenter", enter);
      card.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <article
      ref={cardRef}
      className={`
        service-card
        overflow-hidden
        ${
          dark
            ? "bg-[#292722] text-[#eeeae2]"
            : "bg-[#ded8cd] text-[#292722]"
        }
      `}
    >
      {/* =================================================
          MAIN CARD
      ================================================= */}

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-[1.05fr_0.95fr]
        "
      >
        {/* =================================================
            IMAGE
        ================================================= */}

        <div
          className="
            relative
            h-[320px]
            overflow-hidden
            sm:h-[420px]
            md:h-[520px]
            lg:h-[650px]
          "
        >
          {/* IMAGE */}

          <img
            ref={imageRef}
            src={service.image}
            alt={`${service.title} ${service.subtitle}`}
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              scale-100
            "
          />

          {/* IMAGE OVERLAY */}

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

          {/* ARCHITECTURAL BORDER */}

          <div
            className="
              absolute
              inset-5
              border
              border-white/25
              sm:inset-7
              md:inset-9
            "
          />

          {/* CENTER LINE */}

          <div
            className="
              absolute
              left-1/2
              top-0
              h-full
              w-px
              -translate-x-1/2
              bg-white/15
            "
          />

          {/* HORIZONTAL LINE */}

          <div
            className="
              absolute
              left-0
              top-1/2
              h-px
              w-full
              bg-white/15
            "
          />

          {/* CATEGORY */}

          <div
            className="
              absolute
              bottom-7
              left-7
              sm:bottom-9
              sm:left-9
              md:bottom-12
              md:left-12
            "
          >
            <span
              className="
                text-[8px]
                uppercase
                tracking-[0.25em]
                text-white/70
                sm:text-[9px]
                sm:tracking-[0.3em]
              "
            >
              {service.category}
            </span>
          </div>

          {/* NUMBER */}

          <span
            className="
              absolute
              right-5
              top-3
              font-serif
              text-[7rem]
              font-light
              leading-none
              text-white/15
              sm:right-7
              sm:text-[10rem]
              md:text-[13rem]
            "
          >
            {service.number}
          </span>

          {/* IMAGE LABEL */}

          <div
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              text-center
            "
          >
            <span
              className="
                block
                text-[8px]
                uppercase
                tracking-[0.35em]
                text-white/60
              "
            >
              Amar Interior
            </span>

            <span
              className="
                mt-2
                block
                font-serif
                text-xl
                italic
                text-white/80
                sm:text-2xl
              "
            >
              Studio
            </span>
          </div>
        </div>

        {/* =================================================
            CONTENT
        ================================================= */}

        <div
          className="
            flex
            flex-col
            justify-between
            p-6
            sm:p-9
            md:p-12
            lg:p-16
            xl:p-20
          "
        >
          <div>
            {/* SERVICE NUMBER */}

            <div className="mb-7 flex items-center gap-3 sm:mb-10 sm:gap-4">
              <span
                className={`
                  h-px
                  w-7
                  sm:w-10
                  ${dark ? "bg-[#eeeae2]/40" : "bg-[#292722]/30"}
                `}
              />

              <span
                className={`
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                  ${dark ? "text-[#eeeae2]/50" : "text-[#817664]"}
                `}
              >
                Service {service.number}
              </span>
            </div>

            {/* TITLE */}

            <h3
              className="
                max-w-3xl
                text-[14vw]
                font-light
                leading-[0.82]
                tracking-[-0.07em]
                sm:text-[10vw]
                md:text-[7vw]
                lg:text-[5.2vw]
              "
            >
              {service.title}

              <span
                className={`
                  block
                  font-serif
                  italic
                  ${
                    dark
                      ? "text-[#b7aa98]"
                      : "text-[#817664]"
                  }
                `}
              >
                {service.subtitle}
              </span>
            </h3>

            {/* SHORT DESCRIPTION */}

            <p
              className={`
                mt-7
                max-w-xl
                text-[13px]
                leading-6
                sm:mt-9
                sm:text-sm
                sm:leading-7
                md:mt-10
                md:text-base
                md:leading-8
                ${
                  dark
                    ? "text-[#eeeae2]/60"
                    : "text-[#555149]"
                }
              `}
            >
              {service.short}
            </p>
          </div>

          {/* =================================================
              ACTION
          ================================================= */}

          <div className="mt-12 sm:mt-16 lg:mt-20">
            <div
              className={`
                mb-5
                h-px
                w-full
                ${
                  dark
                    ? "bg-[#eeeae2]/15"
                    : "bg-[#292722]/15"
                }
              `}
            />

            <button
              type="button"
              onClick={handleToggle}
              className="
                group
                flex
                w-full
                items-center
                justify-between
                gap-4
                text-left
              "
            >
              <span
                className={`
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  sm:text-[9px]
                  sm:tracking-[0.3em]
                  ${
                    dark
                      ? "text-[#eeeae2]/45"
                      : "text-[#777269]"
                  }
                `}
              >
                {open
                  ? "Close service details"
                  : "Explore service"}
              </span>

              <span
                ref={arrowRef}
                className={`
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  border
                  text-sm
                  transition-colors
                  duration-500
                  sm:h-13
                  sm:w-13
                  ${
                    dark
                      ? "border-[#eeeae2]/30"
                      : "border-[#292722]/25"
                  }
                `}
              >
                {open ? "×" : "↗"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* =================================================
          EXPANDABLE DETAILS
      ================================================= */}

      <div
        ref={detailsRef}
        className={`
          overflow-hidden
          border-t
          ${
            dark
              ? "border-[#eeeae2]/10 bg-[#24231f]"
              : "border-[#292722]/10 bg-[#e7e2d9]"
          }
        `}
      >
        <div
          className="
            px-6
            py-8
            sm:px-9
            sm:py-10
            md:px-12
            md:py-12
            lg:px-16
            xl:px-20
          "
        >
          <div
            className="
              grid
              grid-cols-1
              gap-8
              lg:grid-cols-[0.4fr_1.6fr]
              lg:gap-12
            "
          >
            {/* LABEL */}

            <div>
              <span
                className={`
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  sm:text-[9px]
                  sm:tracking-[0.3em]
                  ${
                    dark
                      ? "text-[#eeeae2]/40"
                      : "text-[#817664]"
                  }
                `}
              >
                Service details
              </span>
            </div>

            {/* DESCRIPTION */}

            <div
              className="
                grid
                grid-cols-1
                gap-6
                sm:grid-cols-2
                sm:gap-8
              "
            >
              {service.description.map(
                (paragraph, paragraphIndex) => (
                  <p
                    key={paragraphIndex}
                    className={`
                      text-[12px]
                      leading-6
                      sm:text-sm
                      sm:leading-8
                      ${
                        dark
                          ? "text-[#eeeae2]/55"
                          : "text-[#5e5a52]"
                      }
                    `}
                  >
                    {paragraph}
                  </p>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

// =====================================================
// PAGE
// =====================================================

const Page = () => {
  const pageRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // =================================================
      // INTRO ANIMATIONS
      // =================================================

      gsap.from(".services-intro-tag", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".services-intro",
          start: "top 80%",
        },
      });

      gsap.from(".services-intro-title", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".services-intro",
          start: "top 80%",
        },
      });

      gsap.from(".services-intro-description", {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",

        scrollTrigger: {
          trigger: ".services-intro",
          start: "top 80%",
        },
      });

      // =================================================
      // SERVICE CARDS
      // =================================================

      const cards = gsap.utils.toArray(".service-card");

      cards.forEach((card) => {
        gsap.from(card, {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power4.out",

          scrollTrigger: {
            trigger: card,
            start: "top 82%",
          },
        });
      });

      // =================================================
      // MARQUEE
      // =================================================

      gsap.to(".service-marquee-track", {
        xPercent: -30,
        ease: "none",

        scrollTrigger: {
          trigger: ".service-marquee",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // =================================================
      // CTA ANIMATION
      // =================================================

      gsap.from(".services-cta-content", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",

        scrollTrigger: {
          trigger: ".services-cta",
          start: "top 75%",
        },
      });

      // =================================================
      // ROTATING CIRCLE
      // =================================================

      gsap.to(".cta-circle", {
        rotate: 360,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={pageRef}
      className="
        w-full
        overflow-hidden
        bg-[#eeeae2]
        text-[#292722]
      "
    >
      {/* =================================================
          HERO
      ================================================= */}

      <HeadImage title="Services" />

      {/* =================================================
          INTRO
      ================================================= */}

      <section
        className="
          services-intro
          px-5
          py-20
          sm:px-8
          sm:py-28
          md:px-10
          md:py-36
          lg:px-16
          lg:py-44
        "
      >
        <div className="mx-auto max-w-[1500px]">
          <div
            className="
              grid
              grid-cols-1
              gap-10
              sm:gap-14
              lg:grid-cols-[0.65fr_1.35fr]
            "
          >
            {/* LEFT */}

            <div className="services-intro-tag flex items-start gap-3 sm:gap-4">
              <span className="mt-2 h-px w-8 bg-[#817664] sm:w-12" />

              <span className="text-[9px] uppercase tracking-[0.25em] text-[#777269] sm:text-[10px] sm:tracking-[0.3em]">
                Our Services
              </span>
            </div>

            {/* RIGHT */}

            <div>
              <h1
                className="
                  services-intro-title
                  max-w-6xl
                  text-[18vw]
                  font-light
                  leading-[0.85]
                  tracking-[-0.07em]
                  sm:text-[13vw]
                  md:text-[9vw]
                  lg:text-[7vw]
                "
              >
                Designed
                <br />

                <span className="font-serif italic text-[#817664]">
                  around you.
                </span>
              </h1>

              <p
                className="
                  services-intro-description
                  mt-8
                  max-w-2xl
                  text-sm
                  leading-7
                  text-[#6e6a62]
                  sm:mt-10
                  md:mt-12
                  md:text-base
                  md:leading-9
                "
              >
                From concept to completion, we bring together
                creative thinking, technical expertise and
                experienced execution to create interiors that
                feel distinctly yours.
              </p>
            </div>
          </div>

          {/* =================================================
              BOTTOM INFO
          ================================================= */}

          <div
            className="
              mt-16
              grid
              grid-cols-2
              gap-y-8
              border-t
              border-[#292722]/15
              pt-6
              sm:mt-20
              md:mt-24
              md:grid-cols-4
              md:gap-y-0
            "
          >
            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#817664] sm:text-[9px]">
                Expertise
              </p>

              <p className="mt-2 text-xs sm:mt-3 sm:text-sm">
                Interior Design
              </p>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#817664] sm:text-[9px]">
                Experience
              </p>

              <p className="mt-2 text-xs sm:mt-3 sm:text-sm">
                16+ Years
              </p>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#817664] sm:text-[9px]">
                Approach
              </p>

              <p className="mt-2 text-xs sm:mt-3 sm:text-sm">
                Design & Build
              </p>
            </div>

            <div>
              <p className="text-[8px] uppercase tracking-[0.25em] text-[#817664] sm:text-[9px]">
                Locations
              </p>

              <p className="mt-2 text-xs sm:mt-3 sm:text-sm">
                Mumbai & Beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          SERVICE MARQUEE
      ================================================= */}

      <section
        className="
          service-marquee
          overflow-hidden
          border-y
          border-[#292722]/10
          bg-[#817664]
          py-5
          text-[#eeeae2]
          sm:py-7
          md:py-8
        "
      >
        <div
          className="
            service-marquee-track
            flex
            w-max
            items-center
            gap-5
            whitespace-nowrap
            sm:gap-8
          "
        >
          {[
            "INTERIOR DESIGN",
            "DESIGN & BUILD",
            "PROJECT MANAGEMENT",
            "TURNKEY SOLUTIONS",
            "INTERIOR DESIGN",
            "DESIGN & BUILD",
            "PROJECT MANAGEMENT",
          ].map((item, index) => (
            <React.Fragment key={index}>
              <span
                className="
                  text-[13vw]
                  font-light
                  leading-none
                  tracking-[-0.05em]
                  sm:text-[9vw]
                  md:text-[5vw]
                "
              >
                {item}
              </span>

              <span className="text-2xl font-serif italic opacity-50 sm:text-3xl">
                ✦
              </span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* =================================================
          SERVICES
      ================================================= */}

      <section
        className="
          px-4
          py-16
          sm:px-6
          sm:py-24
          md:px-10
          md:py-32
          lg:px-16
          lg:py-40
        "
      >
        <div className="mx-auto max-w-[1500px]">
          {/* =================================================
              SECTION HEADER
          ================================================= */}

          <div
            className="
              mb-10
              flex
              items-end
              justify-between
              border-b
              border-[#292722]/15
              pb-5
              sm:mb-14
              md:mb-20
              md:pb-6
            "
          >
            <div>
              <span
                className="
                  text-[8px]
                  uppercase
                  tracking-[0.25em]
                  text-[#817664]
                  sm:text-[10px]
                  sm:tracking-[0.3em]
                "
              >
                What we do
              </span>

              <h2
                className="
                  mt-3
                  text-2xl
                  font-light
                  tracking-[-0.04em]
                  sm:mt-4
                  sm:text-4xl
                  md:text-6xl
                "
              >
                Our expertise
              </h2>
            </div>

            <span
              className="
                hidden
                text-[10px]
                uppercase
                tracking-[0.25em]
                text-[#777269]
                md:block
              "
            >
              03 — Services
            </span>
          </div>

          {/* =================================================
              SERVICE LIST
          ================================================= */}

          <div className="space-y-5 sm:space-y-7">
            {services.map((service, index) => (
              <ServiceCard
                key={service.number}
                service={service}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =================================================
          CTA
      ================================================= */}

      <section
        className="
          services-cta
          relative
          overflow-hidden
          bg-[#292722]
          px-5
          py-24
          text-[#eeeae2]
          sm:px-8
          sm:py-32
          md:px-10
          md:py-44
          lg:px-16
        "
      >
        {/* =================================================
            ROTATING CIRCLE
        ================================================= */}

        <div
          className="
            cta-circle
            pointer-events-none
            absolute
            right-[-160px]
            top-[-100px]
            flex
            h-[320px]
            w-[320px]
            items-center
            justify-center
            rounded-full
            border
            border-[#eeeae2]/10
            sm:right-[-100px]
            sm:h-[400px]
            sm:w-[400px]
            md:h-[600px]
            md:w-[600px]
          "
        >
          <div className="absolute inset-6 rounded-full border border-[#eeeae2]/10 sm:inset-8" />

          <span className="absolute top-5 text-[7px] uppercase tracking-[0.3em] text-[#eeeae2]/30 sm:top-6 sm:text-[9px] sm:tracking-[0.4em]">
            DESIGN • BUILD • CREATE • DESIGN • BUILD • CREATE
          </span>
        </div>

        {/* =================================================
            CTA CONTENT
        ================================================= */}

        <div className="services-cta-content relative mx-auto max-w-[1500px]">
          <div
            className="
              grid
              grid-cols-1
              gap-12
              sm:gap-16
              lg:grid-cols-[0.7fr_1.3fr]
            "
          >
            {/* LEFT */}

            <div>
              <div className="flex items-center gap-3 sm:gap-4">
                <span className="h-px w-8 bg-[#817664] sm:w-12" />

                <span className="text-[8px] uppercase tracking-[0.25em] text-[#eeeae2]/50 sm:text-[10px] sm:tracking-[0.3em]">
                  Start your project
                </span>
              </div>

              <p className="mt-8 max-w-xs text-[13px] leading-7 text-[#eeeae2]/40 sm:mt-10 sm:text-sm">
                Have a space waiting to become something
                extraordinary?
              </p>
            </div>

            {/* RIGHT */}

            <div>
              <h2
                className="
                  text-[16vw]
                  font-light
                  leading-[0.85]
                  tracking-[-0.075em]
                  sm:text-[12vw]
                  md:text-[9vw]
                  lg:text-[7vw]
                "
              >
                Let's make

                <span className="block font-serif italic text-[#a99d8c]">
                  something beautiful.
                </span>
              </h2>

              <div
                className="
                  mt-10
                  flex
                  flex-col
                  gap-8
                  sm:mt-14
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                "
              >
                <p className="max-w-md text-[13px] leading-7 text-[#eeeae2]/45 sm:text-sm sm:leading-8">
                  Tell us about your residential, commercial or
                  hospitality project. We'd love to understand your
                  vision.
                </p>

                <Link
                  href="/contact"
                  className="group flex w-fit items-center gap-4 sm:gap-5"
                >
                  <span
                    className="
                      flex
                      h-16
                      w-16
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#eeeae2]/30
                      text-lg
                      transition-all
                      duration-500
                      group-hover:border-[#817664]
                      group-hover:bg-[#817664]
                      sm:h-20
                      sm:w-20
                      sm:text-xl
                    "
                  >
                    ↗
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.25em] sm:text-[10px] sm:tracking-[0.3em]">
                    Contact Us
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FOOTER SPACE
      ================================================= */}

      <div className="h-6 bg-[#eeeae2] sm:h-8" />
    </main>
  );
};

export default Page;
