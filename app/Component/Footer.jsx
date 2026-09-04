
"use client";

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Footer = () => {
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-item", {
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.6,
        ease: "power3.out",
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-[#292722] text-[#eeeae2]"
    >
      <div className="mx-auto max-w-[1500px] px-6 py-12 sm:px-10 lg:px-16">

        {/* =================================
            TOP
        ================================= */}

        <div className="footer-item flex flex-col gap-8 border-b border-[#eeeae2]/15 pb-10 md:flex-row md:items-center md:justify-between">

          {/* BRAND */}

          <div>
            <h2 className="text-3xl font-light tracking-[-0.04em]">
              Amar
              <span className="font-serif italic text-[#a99d8c]">
                {" "}
                Interior
              </span>
            </h2>
          </div>

          {/* NAVIGATION */}

          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-[10px] uppercase tracking-[0.2em] text-[#eeeae2]/55">

            <a
              href="/"
              className="transition-colors duration-300 hover:text-[#eeeae2]"
            >
              Home
            </a>

            <a
              href="/about"
              className="transition-colors duration-300 hover:text-[#eeeae2]"
            >
              About
            </a>

            <a
              href="/services"
              className="transition-colors duration-300 hover:text-[#eeeae2]"
            >
              Services
            </a>

            <a
              href="/contact"
              className="transition-colors duration-300 hover:text-[#eeeae2]"
            >
              Contact
            </a>

          </nav>

        </div>

        {/* =================================
            BOTTOM
        ================================= */}

        <div className="footer-item flex flex-col gap-5 pt-8 text-[9px] uppercase tracking-[0.18em] text-[#eeeae2]/35 sm:flex-row sm:items-center sm:justify-between">

          {/* COPYRIGHT */}

          <p>
            © {new Date().getFullYear()} Amar Interior
          </p>

          {/* CONTACT */}

          <div className="flex flex-wrap gap-x-6 gap-y-2">

            <a
              href="tel:7400373699"
              className="transition-colors duration-300 hover:text-[#eeeae2]"
            >
              +91 74003 73699
            </a>

            <a
              href="mailto:sameersiddi7640@gmail.com"
              className="transition-colors duration-300 hover:text-[#eeeae2]"
            >
              Email
            </a>

          </div>

          {/* SOCIAL */}

          <div className="flex gap-5">

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#eeeae2]"
            >
              Instagram
            </a>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-[#eeeae2]"
            >
              Facebook
            </a>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
