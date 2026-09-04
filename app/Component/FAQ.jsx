"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    number: "01",
    question: "How long does it take to design a home?",
    answer:
      "The timeline depends on the size, complexity and scope of the project. A typical residential interior project can take anywhere from 8 to 16 weeks, including design development, material selection and execution.",
  },
  {
    number: "02",
    question: "How do I start designing my luxury home?",
    answer:
      "It begins with a conversation. We understand your lifestyle, preferences, requirements and vision, then develop a design direction around your space. From the initial consultation to detailed planning and execution, our team guides you through every stage.",
  },
  {
    number: "03",
    question: "What is the typical budget for an interior design project?",
    answer:
      "Every project is unique, so we develop budgets based on the size of the property, design requirements, materials, finishes and level of customization. After understanding your requirements, we provide a transparent estimate tailored to your project.",
  },
  {
    number: "04",
    question: "Do you provide complete turnkey interior solutions?",
    answer:
      "Yes. Our turnkey service can cover the complete journey from concept and design to civil work, electrical, lighting, furniture, finishes, installation and final styling. This allows you to work with one team throughout the project.",
  },
  {
    number: "05",
    question: "Do you provide 3D designs before execution?",
    answer:
      "Yes. We use detailed 3D visualizations to help you understand the proposed space before execution begins. This allows you to experience the materials, colours, furniture arrangement and overall design direction in advance.",
  },
  {
    number: "06",
    question: "Can you design completely customized furniture?",
    answer:
      "Absolutely. We design and develop customized furniture based on the proportions, functionality and character of your space. From wardrobes and kitchens to statement pieces, every detail can be tailored to your requirements.",
  },
  {
    number: "07",
    question: "Do you handle civil work and execution?",
    answer:
      "Yes. Our execution team can coordinate civil work, electrical, plumbing, false ceilings, flooring, painting, carpentry and other site requirements, ensuring that the design is executed with consistency and attention to detail.",
  },
  {
    number: "08",
    question: "Do you undertake projects across Mumbai?",
    answer:
      "We work across Mumbai and surrounding areas, taking on residential and commercial projects based on their scope and requirements. Get in touch with our team to discuss your location and project.",
  },
];

const FAQ = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        /* =====================================================
           MAIN TIMELINE
        ===================================================== */

        const introTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".faq-header",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        });

        /* =====================================================
           LABEL
        ===================================================== */

        introTimeline.from(".faq-label-line", {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.8,
          ease: "power3.inOut",
        });

        introTimeline.from(
          ".faq-label-text",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5"
        );

        /* =====================================================
           HEADING
        ===================================================== */

        introTimeline.from(
          ".faq-heading .heading-word",
          {
            yPercent: 120,
            opacity: 0,
            rotateX: -30,
            duration: 1,
            stagger: 0.12,
            ease: "power4.out",
          },
          "-=0.3"
        );

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        introTimeline.from(
          ".faq-description",
          {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.6"
        );

        /* =====================================================
           FAQ ITEMS
        ===================================================== */

        const faqItems = gsap.utils.toArray(".faq-item");

        faqItems.forEach((item, index) => {
          const number = item.querySelector(".faq-number");
          const question = item.querySelector(".faq-question");
          const icon = item.querySelector(".faq-icon");
          const line = item.querySelector(".faq-hover-line");

          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              end: "top 65%",
              scrub: 1,
            },
          });

          timeline
            .fromTo(
              item,
              {
                y: 70,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
              }
            )
            .fromTo(
              number,
              {
                x: -20,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
                duration: 0.6,
              },
              "-=0.7"
            )
            .fromTo(
              question,
              {
                x: -30,
                opacity: 0,
              },
              {
                x: 0,
                opacity: 1,
                duration: 0.7,
                ease: "power3.out",
              },
              "-=0.6"
            )
            .fromTo(
              icon,
              {
                scale: 0,
                rotate: -90,
                opacity: 0,
              },
              {
                scale: 1,
                rotate: 0,
                opacity: 1,
                duration: 0.5,
                ease: "back.out(1.7)",
              },
              "-=0.5"
            );

          /* -----------------------------------------
             HOVER LINE
          ----------------------------------------- */

          item.addEventListener("mouseenter", () => {
            gsap.to(question, {
              x: 10,
              duration: 0.4,
              ease: "power3.out",
            });

            gsap.to(number, {
              x: 8,
              duration: 0.4,
              ease: "power3.out",
            });

            gsap.to(icon, {
              scale: 1.15,
              duration: 0.3,
              ease: "power2.out",
            });

            gsap.to(line, {
              scaleX: 1,
              duration: 0.5,
              ease: "power3.out",
            });
          });

          item.addEventListener("mouseleave", () => {
            gsap.to(question, {
              x: 0,
              duration: 0.4,
              ease: "power3.out",
            });

            gsap.to(number, {
              x: 0,
              duration: 0.4,
            });

            gsap.to(icon, {
              scale: 1,
              duration: 0.3,
            });

            gsap.to(line, {
              scaleX: 0,
              duration: 0.5,
              ease: "power3.out",
            });
          });
        });

        /* =====================================================
           BACKGROUND PARALLAX
        ===================================================== */

        gsap.to(".faq-background-word", {
          xPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });

        /* =====================================================
           CTA REVEAL
        ===================================================== */

        const ctaTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: ".faq-cta",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        ctaTimeline
          .from(".faq-cta-box", {
            clipPath: "inset(100% 0% 0% 0%)",
            duration: 1.2,
            ease: "power4.inOut",
          })
          .from(
            ".faq-cta-label",
            {
              y: 30,
              opacity: 0,
              duration: 0.6,
            },
            "-=0.5"
          )
          .from(
            ".faq-cta-heading",
            {
              y: 60,
              opacity: 0,
              duration: 0.9,
              ease: "power3.out",
            },
            "-=0.4"
          )
          .from(
            ".faq-cta-button",
            {
              y: 30,
              opacity: 0,
              scale: 0.95,
              duration: 0.7,
              ease: "back.out(1.5)",
            },
            "-=0.5"
          );

        /* =====================================================
           REFRESH SCROLLTRIGGER
        ===================================================== */

        ScrollTrigger.refresh();
      });

      return () => mm.revert();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     FAQ TOGGLE
  ===================================================== */

  const toggleFAQ = (index) => {
    setActive((current) => (current === index ? null : index));
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f3f0e9] text-[#24231f]"
    >
      {/* =====================================================
          BACKGROUND TEXT
      ===================================================== */}

      <div className="pointer-events-none absolute left-0 top-[18%] z-0 overflow-hidden whitespace-nowrap">
        <span className="faq-background-word block text-[28vw] font-light leading-none tracking-[-0.08em] text-[#24231f]/[0.025]">
          FAQ
        </span>
      </div>

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="faq-header relative z-10 mx-auto max-w-[1500px] px-6 pb-20 pt-32 sm:px-10 lg:px-16 lg:pb-32 lg:pt-44">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.65fr]">
          {/* LEFT */}

          <div>
            {/* LABEL */}

            <div className="faq-label mb-10 flex items-center gap-4">
              <span className="faq-label-line h-px w-12 origin-left bg-[#24231f]" />

              <span className="faq-label-text text-[10px] uppercase tracking-[0.35em]">
                Frequently asked
              </span>
            </div>

            {/* HEADING */}

            <div className="faq-heading overflow-hidden">
              <h2 className="text-[14vw] font-light leading-[0.82] tracking-[-0.065em] sm:text-7xl md:text-8xl lg:text-[8vw]">
                <span className="inline-block overflow-hidden">
                  <span className="heading-word inline-block">
                    Questions
                  </span>
                </span>

                <br />

                <span className="inline-block overflow-hidden">
                  <span className="heading-word inline-block font-serif italic text-[#827866]">
                    answered.
                  </span>
                </span>
              </h2>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex items-end lg:pb-2">
            <p className="faq-description max-w-md text-base leading-8 text-[#68655e] md:text-lg">
              Designing a home is a deeply personal journey. Here are answers
              to some of the questions our clients ask us most often before
              beginning their project.
            </p>
          </div>
        </div>
      </div>

      {/* =====================================================
          FAQ LIST
      ===================================================== */}

      <div className="faq-list relative z-10 mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
        {faqs.map((faq, index) => {
          const isOpen = active === index;

          return (
            <div
              key={faq.number}
              className="faq-item relative border-t border-[#24231f]/20"
            >
              {/* HOVER LINE */}

              <span className="faq-hover-line pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-[#827866]" />

              {/* QUESTION */}

              <button
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
                className="group flex w-full items-start gap-5 py-7 text-left md:gap-10 md:py-9"
              >
                {/* NUMBER */}

                <span className="faq-number w-8 shrink-0 pt-1 text-[10px] tracking-[0.2em] text-[#827866] md:w-12">
                  {faq.number}
                </span>

                {/* QUESTION */}

                <span className="faq-question flex-1 text-xl font-light leading-tight tracking-[-0.02em] transition-colors duration-300 group-hover:text-[#827866] sm:text-2xl md:text-3xl lg:text-4xl">
                  {faq.question}
                </span>

                {/* ICON */}

                <span
                  className={`faq-icon relative mt-1 flex h-7 w-7 shrink-0 items-center justify-center transition-transform duration-500 md:h-9 md:w-9 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  <span className="absolute h-px w-5 bg-[#24231f]" />
                  <span className="absolute h-5 w-px bg-[#24231f]" />
                </span>
              </button>

              {/* ANSWER */}

              <div
                className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid grid-cols-1 pb-8 md:grid-cols-[100px_1fr]">
                    <div />

                    <p className="faq-answer max-w-2xl text-sm leading-7 text-[#68655e] md:text-base md:leading-8">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        {/* LAST BORDER */}

        <div className="border-t border-[#24231f]/20" />
      </div>

      {/* =====================================================
          CTA
      ===================================================== */}

      <div className="faq-cta relative z-10 mx-auto max-w-[1500px] px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
        <div className="faq-cta-box relative overflow-hidden bg-[#24231f] px-7 py-16 text-[#f3f0e9] sm:px-12 md:px-16 lg:px-24 lg:py-24">
          {/* BACKGROUND TEXT */}

          <div className="pointer-events-none absolute -right-10 -top-16 select-none opacity-[0.04]">
            <span className="whitespace-nowrap text-[18vw] font-light leading-none">
              DESIGN
            </span>
          </div>

          <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            {/* TEXT */}

            <div>
              <p className="faq-cta-label mb-7 text-[10px] uppercase tracking-[0.35em] text-[#b5aa99]">
                Have a project in mind?
              </p>

              <h3 className="faq-cta-heading max-w-3xl text-4xl font-light leading-[0.95] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
                Let&apos;s create a space
                <span className="font-serif italic text-[#b5aa99]">
                  {" "}
                  that feels like you.
                </span>
              </h3>
            </div>

            {/* BUTTON */}

            <div className="lg:flex lg:justify-end">
              <a
                href="/contact-us/"
                className="faq-cta-button group inline-flex items-center gap-8 border border-[#f3f0e9]/40 px-7 py-5 text-[10px] uppercase tracking-[0.25em] transition-all duration-500 hover:bg-[#f3f0e9] hover:text-[#24231f]"
              >
                Contact Us

                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;