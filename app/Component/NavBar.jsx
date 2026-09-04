"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";

const NavBar = () => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const mobileMenuRef = useRef(null);
  const portfolioRef = useRef(null);
  const portfolioMenuRef = useRef(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);

  // -----------------------------------
  // NAVBAR OPENING ANIMATION
  // -----------------------------------



  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      navRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
      }
    );

    tl.fromTo(
      logoRef.current,
      {
        y: 30,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: "power4.out",
      },
      "-=0.7"
    );

    tl.fromTo(
      linksRef.current,
      {
        y: -20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
      },
      "-=0.6"
    );

    return () => {
      tl.kill();
    };
  }, []);

  // -----------------------------------
  // MOBILE MENU ANIMATION
  // -----------------------------------

  useEffect(() => {
    if (!mobileMenuRef.current) return;

    if (mobileOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.6,
        ease: "power4.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power4.inOut",
      });
    }
  }, [mobileOpen]);

  // -----------------------------------
  // PORTFOLIO DROPDOWN ANIMATION
  // -----------------------------------

  useEffect(() => {
    if (!portfolioMenuRef.current) return;

    if (portfolioOpen) {
      gsap.fromTo(
        portfolioMenuRef.current,
        {
          opacity: 0,
          y: -20,
          scaleY: 0.8,
          transformOrigin: "top",
        },
        {
          opacity: 1,
          y: 0,
          scaleY: 1,
          duration: 0.5,
          ease: "power4.out",
        }
      );
    } else {
      gsap.to(portfolioMenuRef.current, {
        opacity: 0,
        y: -15,
        scaleY: 0.8,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [portfolioOpen]);

  // -----------------------------------
  // HOVER ANIMATION
  // -----------------------------------

  const handleMouseEnter = (e) => {
    gsap.to(e.currentTarget, {
      y: -3,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (e) => {
    gsap.to(e.currentTarget, {
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const portfolioItems = [
    "Modular Kitchen",
    "Living Room",
    "Bedroom",
    "Office Interior",
    "Commercial Interior",
  ];

  return (
    <nav
      ref={navRef}
      className="
       
         sticky
        top-0
        left-0
        z-50
        w-full
        px-5
        sm:px-8
        lg:px-14
        py-4
         bg-white
          
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <div
          ref={logoRef}
          className="cursor-pointer select-none"
        >
          <h1 className="
           flex flex-col
          outfit
            text-4xl
            
             font-extrabold
            uppercase
            text-orange-600
          ">
            Amar
            <span className="  capitalize text-base  font-medium  text-gray-800">
              Interior Designer
            </span>
          </h1>
        </div>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden lg:flex items-center outfitT gap-8">

          <Link
            ref={(el) => (linksRef.current[0] = el)}
            href="/"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              relative
               text-lg font-medium uppercase
              text-gray-900
            group
            "
          >
            Home

            <span className="
              absolute
              -bottom-2
              left-0
              w-0
              h-[1px]
              bg-red-500
              transition-all
              duration-300
              group-hover:w-full
            " />
          </Link>

          <Link
            ref={(el) => (linksRef.current[1] = el)}
            href={"/about"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              relative
               text-lg font-medium uppercase
              text-gray-900
              group
            "
          >
            About

            <span className="
              absolute
              -bottom-2
              left-0
              w-0
              h-[1px]
               bg-rose-600
              transition-all
              duration-300
              group-hover:w-full
            " />
          </Link>

          <Link
            ref={(el) => (linksRef.current[2] = el)}
            href={"/service"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              relative
              relative
               text-lg font-medium uppercase
              text-gray-900
              group
            "
          >
            Services

            <span className="
              absolute
              -bottom-2
              left-0
              w-0
              h-[1px]
              bg-rose-600
              transition-all
              duration-300
              group-hover:w-full
            " />
          </Link>

          {/* PORTFOLIO */}
      
{/* =========================================================
    PORTFOLIO DROPDOWN
    Premium mega-menu for interior categories
========================================================= */}

<div
  ref={portfolioRef}
  className="relative"
>
  {/* Portfolio button */}
  <button
    ref={(el) => (linksRef.current[3] = el)}
    onClick={() => setPortfolioOpen(!portfolioOpen)}
    onMouseEnter={()=>{handleMouseEnter 
      setPortfolioOpen(true)}}
    onMouseLeave={ handleMouseLeave}
    className="
      group
      flex
      items-center
      gap-2
      text-lg font-medium uppercase
      text-gray-900
    "
  >
    Portfolio

    {/* Animated arrow */}
    <span
      className={`
        text-xs
        transition-transform
        duration-300
        ${portfolioOpen ? "rotate-180" : ""}
      `}
    >
      ↓
    </span>

    {/* Underline */}
    <span
      className="
        absolute
        bottom-0
        left-0
        h-[1px]
        w-0
        bg-rose-600
        transition-all
        duration-300
        group-hover:w-full
      "
    />
  </button>

  {/* =====================================================
      MEGA MENU
  ===================================================== */}

  <div
    ref={portfolioMenuRef}
    className={`
      absolute
      right-[-180px]
      top-[45px]
      w-[620px]
      overflow-hidden
      rounded-2xl
      border
      border-black/10
      bg-[#f4f1eb]
      shadow-[0_25px_80px_rgba(0,0,0,0.15)]
      origin-top

      ${
        portfolioOpen
          ? "pointer-events-auto"
          : "pointer-events-none"
      }
    `}
  >

    {/* =================================================
        HEADER
    ================================================= */}

    <div
      className="
        flex
        items-end
        justify-between
        border-b
        border-black/10
        px-7
        py-6
      "
    >

      <div>

        <p
          className="
            mb-2
            text-[9px]
            uppercase
            tracking-[0.3em]
            text-black/40
          "
        >
          Our Work
        </p>

        <h3
          className="
            text-2xl
            font-light
            tracking-tight
            text-[#29231e]
          "
        >
          Spaces with character.
        </h3>

      </div>

      <span
        className="
          text-[10px]
          uppercase
          tracking-[0.2em]
          text-black/30
        "
      >
        05 Categories
      </span>

    </div>

    {/* =================================================
        PORTFOLIO ITEMS
    ================================================= */}

    <div className="grid grid-cols-2 p-4">

      {portfolioItems.map((item, index) => (

        <Link
        onClick={()=>{setPortfolioOpen(false)}}
          key={item}
          href={`/${item
            .toLowerCase()
            .replaceAll(" ", "-")}`}
          className="
            group
            relative
            flex
            min-h-[105px]
            flex-col
            justify-between
            rounded-xl
            p-5
            transition-all
            duration-300
            hover:bg-[#29231e]
          "
        >

          {/* Number */}
          <span
            className="
              text-[10px]
              font-medium
              tracking-widest
              text-black/30
              transition-colors
              duration-300
              group-hover:text-white/40
            "
          >
            0{index + 1}
          </span>

          {/* Category */}
          <div>

            <h4
              className="
                text-[15px]
                font-medium
                text-[#29231e]
                transition-colors
                duration-300
                group-hover:text-white
              "
            >
              {item}
            </h4>

            <p
              className="
                mt-1
                text-[10px]
                text-black/40
                transition-colors
                duration-300
                group-hover:text-white/50
              "
            >
              Explore our {item.toLowerCase()} projects
            </p>

          </div>

          {/* Arrow */}
          <span
            className="
              absolute
              right-5
              top-5
              translate-x-[-5px]
              text-sm
              opacity-0
              transition-all
              duration-300
              group-hover:translate-x-0
              group-hover:opacity-100
              text-white
            "
          >
            ↗
          </span>

        </Link>

      ))}

    </div>

    {/* =================================================
        BOTTOM CTA
    ================================================= */}

    <div
      className="
        flex
        items-center
        justify-between
        border-t
        border-black/10
        px-7
        py-5
      "
    >

      <p
        className="
          text-[11px]
          text-black/40
        "
      >
        Looking for something unique?
      </p>

      <Link
      onClick={()=>{setPortfolioOpen(false)}}
        href={"/contact"}
        className="
          group
          flex
          items-center
          gap-2
          text-[10px]
          font-medium
          uppercase
          tracking-[0.18em]
          text-[#29231e]
        "
      >
        Start a project

        <span
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        >
          →
        </span>
      </Link>

    </div>

  </div>

</div>



          <Link
            ref={(el) => (linksRef.current[4] = el)}
            href={"/contact"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="
              bg-[#29231e]
              font-bold
              text-gray-100
              px-5
              py-3
             rounded-2xl
              text-lg
              tracking-wide
              hover:bg-black
              transition-colors
              group
            "
          >
            Contact Us
          </Link>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            lg:hidden
            relative
            w-11
            h-11
            rounded-full
            bg-[#29231e]
            flex
            flex-col
            items-center
            justify-center
            gap-1.5
          "
        >
          <span
            className={`
              block
              w-5
              h-[1.5px]
              bg-white
              transition-transform
              duration-300
              ${
                mobileOpen
                  ? "translate-y-[3px] rotate-45"
                  : ""
              }
            `}
          />

          <span
            className={`
              block
              w-5
              h-[1.5px]
              bg-white
              transition-transform
              duration-300
              ${
                mobileOpen
                  ? "-translate-y-[2px] -rotate-45"
                  : ""
              }
            `}
          />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        ref={mobileMenuRef}
        className="
       
          lg:hidden
          overflow-hidden

          opacity-0
        "
      >
        <div className="
        outfitT
          pt-6
          pb-5
          flex
          flex-col
          gap-2
        ">

          <Link
            href={'/'}
            onClick={() => setMobileOpen(false)}
            className="
              mobile-link
              px-4
              py-3
              text-lg
              text-gray-900
              rounded-lg
              hover:bg-black/5
              group
            "
          >
            Home
          </Link>

          <Link
          href={'/about'}
            onClick={() => setMobileOpen(false)}
            className="
              px-4
              py-3
              text-lg
              text-gray-900
              rounded-lg
              hover:bg-black/5
              group
            "
          >
            About
          </Link>

          <Link
            href={"/service"}
            onClick={() => setMobileOpen(false)}
            className="
              px-4
              py-3
              text-lg
              text-gray-900
              rounded-lg
              hover:bg-black/5
              group
            "
          >
            Services
          </Link>

          {/* MOBILE PORTFOLIO */}
          <div className="px-4">

            <button
              onClick={() =>
                setPortfolioOpen(!portfolioOpen)
              }
              className="
                w-full
                flex
                items-center
                justify-between
                py-3
                text-lg
                text-gray-900
              "
            >
              Portfolio

              <span
                className={`
                  transition-transform
                  duration-300
                  ${
                    portfolioOpen
                      ? "rotate-180"
                      : ""
                  }
                `}
              >
                ↓
              </span>
            </button>

            <div
              className={`
                overflow-hidden
                transition-all
                duration-500
                ${
                  portfolioOpen
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }
              `}
            >
              <div className="
                ml-4
                border-l
                border-black/10
                pl-4
                pb-2
              ">

                {portfolioItems.map((item) => (
                  <Link
                    key={item}
                    href={`/${item
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                    onClick={() =>
                      setMobileOpen(false)
                    }
                    className="
                      block
                      py-2.5
                      text-sm
                      text-black
                      hover:text-red-500
                      transition-colors
                    "
                  >
                    {item}
                  </Link>
                ))}

              </div>
            </div>

          </div>

          <Link
            href={"/contact"}
            onClick={() => setMobileOpen(false)}
            className="
              mt-3
              mx-4
              px-5
              py-3
              rounded-full
              bg-[#29231e]
              text-white
              text-center
            "
          >
            Contact Us
          </Link>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;

