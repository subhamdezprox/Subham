import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageSEO from "../components/PageSEO";

// Document page images
import heroSlide1 from "../assests/documentation/traditional-mud-plaster-craftsmanship.jpg";
import heroSlide2 from "../assests/images/subham-sustainable-residence-project-01.jpeg";
import heroSlide3 from "../assests/images/subham-sustainable-residence-project-02.jpeg";
import delhiImage from "../assests/images/subham-delhi-residential-construction.jpeg";
import uttarakhandImage from "../assests/images/subham-project-exterior-view-01.jpeg";
import bleedImage1 from "../assests/documentation/sustainable-natural-building-construction-site.jpg";
import constructionProject from "../assests/images/subham-golden-hour-project-exterior.jpeg";

// Documentation gallery images - Tirunelveli section
import tirunelveliImage from "../assests/documentation/tirunelveli-traditional-mud-house-exterior.jpg";
import craftsmanshipImage from "../assests/documentation/traditional-mud-wall-craftsmanship-detail.jpg";
import heritageBuildingImage from "../assests/documentation/heritage-building-natural-materials.jpg";
import stoneMudArchitecture from "../assests/documentation/traditional-stone-and-mud-architecture.jpg";
import localArtisan from "../assests/documentation/local-artisan-natural-construction-work.jpg";
import mudPlaster from "../assests/documentation/traditional-mud-plaster-craftsmanship.jpg";
import heritagePreservation from "../assests/documentation/heritage-mud-building-preservation.jpg";
import bleedImage2 from "../assests/images/subham-craftsmanship-detail-01.jpeg";

const SLIDES = [heroSlide1, heroSlide2, heroSlide3];

export default function Document() {
  const [loaded, setLoaded] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showHl1, setShowHl1] = useState(false);
  const [showHl2, setShowHl2] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const bleedRef1 = useRef<HTMLImageElement>(null);
  const bleedRef2 = useRef<HTMLImageElement>(null);
  const bleedSec1 = useRef<HTMLElement>(null);
  const bleedSec2 = useRef<HTMLElement>(null);

  useEffect(() => {
    const t0 = setTimeout(() => setLoaded(true), 0);
    const t1 = setTimeout(() => setShowHl1(true), 300);
    const t2 = setTimeout(() => setShowHl2(true), 520);
    const t3 = setTimeout(() => setShowScroll(true), 900);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  useEffect(() => {
    const id = setInterval(() => setActiveSlide((s) => (s + 1) % SLIDES.length), 5500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const siblings = Array.from(e.target.parentElement?.children ?? []).filter((c) =>
            c.classList.contains("reveal"),
          );
          const i = siblings.indexOf(e.target as Element);
          setTimeout(() => e.target.classList.add("in"), Math.max(0, i) * 100);
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        if (bleedRef1.current && bleedSec1.current) {
          const r = bleedSec1.current.getBoundingClientRect();
          const off = (window.innerHeight - r.top) * 0.12;
          bleedRef1.current.style.transform = `translateY(${off * 0.25}px)`;
        }
        if (bleedRef2.current && bleedSec2.current) {
          const r = bleedSec2.current.getBoundingClientRect();
          const off = (window.innerHeight - r.top) * 0.12;
          bleedRef2.current.style.transform = `translateY(${off * 0.25}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const documentSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "url": "https://www.subhamconsulting.com/document",
    "name": "Sustainable Construction Journey | Subham Consulting",
    "description": "Explore our sustainable construction journey across Tirunelveli, Delhi, and Uttarakhand, documenting traditional wisdom and modern sustainable practices.",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.subhamconsulting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Document", "item": "https://www.subhamconsulting.com/document" }
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="Sustainable Construction Journey | Subham Consulting Documentation"
        description="Explore our sustainable construction journey across Tirunelveli, Delhi, and Uttarakhand, documenting traditional wisdom and modern sustainable practices."
        path="/document"
        structuredData={documentSchema}
      />
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <header className="relative w-full h-screen overflow-hidden">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out ${i === activeSlide ? "opacity-100" : ""}`}
          >
            <img
              src={src}
              alt="Subham sustainable architecture documentation"
              loading="eager"
              decoding="sync"
              className={`w-full h-full object-cover ${i === activeSlide ? "animate-[kenburns_8s_ease-in-out_forwards]" : ""}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F1F1F]/55 via-[#1F1F1F]/30 to-[#1F1F1F]/10" />

        <div className="absolute left-[6%] bottom-[18%] z-10 max-w-[calc(100%-48px)] md:max-w-[660px]">
          <h1 className="sr-only">Sustainable Construction Journey Documentation</h1>
          <div className="overflow-hidden" aria-hidden="true">
            <span
              className={`block font-serif text-[40px] sm:text-[52px] md:text-[64px] lg:text-[82px] font-normal text-white leading-none transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${showHl1 ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}
            >
              Our Journey
            </span>
          </div>
          <span className="block w-[60px] h-[1px] bg-white/50 my-[18px]" aria-hidden="true" />
          <div className="overflow-hidden" aria-hidden="true">
            <span
              className={`block font-serif text-[40px] sm:text-[52px] md:text-[64px] lg:text-[82px] font-normal text-white leading-none transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${showHl2 ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}
            >
              Of Discovery
            </span>
          </div>
          <span className="block w-[60px] h-[1px] bg-white/50 my-[18px] ml-auto" aria-hidden="true" />
        </div>

        <div className="absolute top-[20%] right-[10%] w-40 h-40 hexagon-float opacity-50 z-[30] hidden md:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[2]">
            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
          </svg>
        </div>
        <div className="absolute top-[60%] left-[15%] w-32 h-32 hexagon-float-slow opacity-40 z-[30] hidden lg:block" style={{ animationDelay: "-3s" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[1.5]">
            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
          </svg>
        </div>
        <div className="absolute bottom-[25%] left-[40%] w-24 h-24 hexagon-float-reverse opacity-35 z-[30] hidden md:block" style={{ animationDelay: "-8s" }}>
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-1">
            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
          </svg>
        </div>

        <div
          className={`absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 transition-opacity duration-600 ${showScroll ? "opacity-100" : "opacity-0"}`}
        >
          <div
            className="w-[22px] h-[34px] border-[1.5px] border-white rounded-[12px] relative after:content-[''] after:absolute after:left-1/2 after:top-[6px] after:-translate-x-1/2 after:w-[2px] after:h-[5px] after:bg-white after:rounded-[2px] after:animate-[mousedot_1.8s_ease-in-out_infinite]"
          />
          <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 mt-1.5">Scroll Down</div>
        </div>
      </header>

      {/* ─── PHILOSOPHY INTRO ─────────────────────────────────────────────── */}
      <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-[80px] md:py-[120px] text-center relative overflow-hidden">
        <div className="absolute top-[10%] right-[5%] w-40 h-40 hexagon-float-reverse opacity-25 z-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-earth/60 stroke-1">
            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
          </svg>
        </div>
        <div className="max-w-[720px] mx-auto relative z-20">
          <h2 className="reveal italic text-[30px] sm:text-[38px] md:text-[52px] text-brand-earth leading-[1.15]">
            Some places teach architecture.<br />Some places teach life.
          </h2>
          <p className="reveal mt-8 max-w-[680px] mx-auto text-[15px] md:text-base">
            Our documentation journeys have taken us across diverse landscapes, from the traditional wisdom of
            Tirunelveli to the challenging climate of Delhi and the majestic mountains of Uttarakhand.
          </p>
        </div>
      </section>

      {/* ─── BLEED IMAGE ──────────────────────────────────────────────────── */}
      <section className="relative w-full h-[280px] sm:h-[380px] md:h-[560px] overflow-hidden" ref={bleedSec1}>
        <img
          ref={bleedRef1}
          src={bleedImage1}
          alt="Traditional construction techniques"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover will-change-transform"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:px-12 bg-gradient-to-t from-[#1F1F1F]/70 to-transparent z-10">
          <h2 className="text-[24px] sm:text-[30px] md:text-[42px] text-white">Tirunelveli's Hidden Heritage</h2>
        </div>
      </section>

      {/* ─── TIRUNELVELI SECTION ──────────────────────────────────────────── */}
      <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-[80px] md:py-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12 reveal">
            <div>
              <span className="top-title mb-3">Tirunelveli</span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[52px] text-brand-earth leading-tight">
                Discovering the Hidden Sustainable Heritage
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start mb-12">
            <div className="space-y-6">
              <p className="reveal text-[15px] md:text-base">
                Our documentation journey in the Tirunelveli region started with pure curiosity and amazement. We
                never expected that a place with such diverse landscapes, cultures, and traditional construction
                knowledge could exist within Tamil Nadu itself.
              </p>
              <p className="reveal text-[15px] md:text-base">
                What began as a simple documentation walk slowly turned into an emotional learning experience. Over
                nearly fifteen days, we travelled through places like Ambasamudram, Papanasam, Kalakkad, and even
                restricted tribal regions such as the Kaani settlements.
              </p>
              <p className="reveal text-[15px] md:text-base">
                One thing deeply moved us throughout this journey — even today, nearly seventy percent of the people
                in these regions continue living in natural buildings. Not only are these homes beautiful, but they
                are also healthy, climate-responsive, and incredibly strong.
              </p>
            </div>
            <div className="relative">
              <div className="reveal overflow-hidden rounded-[14px] shadow-[0_20px_50px_rgba(31,31,31,0.08)] group">
                <img
                  src={tirunelveliImage}
                  alt="Tirunelveli traditional mud house exterior"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="mb-12">
            <div className="reveal mb-6">
              <h3 className="font-serif text-[22px] md:text-[26px] text-brand-earth mb-2">Documentation Gallery</h3>
              <p className="text-[14px] md:text-base text-brand-text/70">
                Capturing the essence of traditional sustainable architecture in Tirunelveli
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {[
                { src: craftsmanshipImage, alt: "Traditional mud wall craftsmanship detail" },
                { src: heritageBuildingImage, alt: "Heritage building with natural materials" },
                { src: stoneMudArchitecture, alt: "Traditional stone and mud architecture" },
                { src: localArtisan, alt: "Local artisan working on natural construction" },
                { src: mudPlaster, alt: "Traditional mud plaster craftsmanship" },
                { src: heritagePreservation, alt: "Heritage mud building preservation" },
              ].map((photo, i) => (
                <div key={i} className="reveal overflow-hidden rounded-[14px] shadow-[0_20px_50px_rgba(31,31,31,0.08)] group" style={{ transitionDelay: `${i * 100}ms` }}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative order-2 lg:order-1">
              <div className="reveal overflow-hidden rounded-[14px] shadow-[0_20px_50px_rgba(31,31,31,0.08)] group">
                <img
                  src={heritagePreservation}
                  alt="Traditional mud building heritage"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
            </div>
            <div className="space-y-6 order-1 lg:order-2">
              <p className="reveal text-[15px] md:text-base">
                One of the most surprising discoveries for us was a G+3 mud structure that is more than 150 years old
                and still houses a large joint family comfortably. Structurally, the building remains strong even today,
                standing quietly in the heart of Tirunelveli city itself.
              </p>
              <p className="reveal text-[15px] md:text-base">
                What made this journey even more special was meeting the artisans behind these techniques. During one
                documentation session, we discovered that the master craftsman who built one of these traditional homes
                was still alive at the age of 87.
              </p>
              <div className="reveal bg-brand-parchment p-6 md:p-8 rounded-[18px] border border-brand-earth/10">
                <p className="font-serif italic text-brand-earth text-[16px] md:text-[18px] leading-relaxed">
                  "Tirunelveli is truly a hidden gem of Tamil Nadu — a place where traditional wisdom, climate understanding,
                  water management, materials, and architecture still exist in harmony with nature."
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12 reveal">
            <div className="bg-brand-parchment p-6 md:p-8 rounded-[18px] border border-brand-earth/10">
              <p className="text-[14px] md:text-base text-brand-text/80">
                We sincerely thank <span className="font-semibold text-brand-earth">Thiru. V. Vishnu venugopal IAS</span>, Tirunelveli District Collector,
                for supporting and encouraging this initiative. We also extend our heartfelt thanks to{' '}
                <span className="font-semibold text-brand-earth">Kavin Art Gallery Anand Anna</span> for the support, encouragement, and guidance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BLEED IMAGE 2 ────────────────────────────────────────────────── */}
      <section className="relative w-full h-[280px] sm:h-[380px] md:h-[560px] overflow-hidden" ref={bleedSec2}>
        <img
          ref={bleedRef2}
          src={bleedImage2}
          alt="Delhi sustainable construction"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover will-change-transform"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:px-12 bg-gradient-to-t from-[#1F1F1F]/70 to-transparent z-10">
          <h2 className="text-[24px] sm:text-[30px] md:text-[42px] text-white">Building Across Borders</h2>
        </div>
      </section>

      {/* ─── DELHI SECTION ───────────────────────────────────────────────── */}
      <section className="bg-brand-parchment px-6 md:px-12 lg:px-20 py-[80px] md:py-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12 reveal">
            <div>
              <span className="top-title mb-3">Delhi</span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[52px] text-brand-earth leading-tight">
                Building Sustainability in the Harsh Climate
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="space-y-6">
              <p className="reveal text-[15px] md:text-base">
                Located in Najafgarh, Delhi, this sustainable farmhouse project was developed in a green zone village area
                where climate and material sourcing became major challenges during construction.
              </p>
              <p className="reveal text-[15px] md:text-base">
                Designed by architect Lalit, the 3,800 sq.ft farmhouse carries a Bali-inspired architectural style blended
                with traditional village aesthetics. The project features traditional mud vault walls, bamboo elements,
                natural roofing concepts, and green integration.
              </p>
              <p className="reveal text-[15px] md:text-base max-w-[800px] mx-auto">
                Executing a sustainable building in Delhi was not easy. From sourcing the right materials to adapting to
                extreme climate conditions, every stage required exploration and experimentation. But through continuous
                learning, local adaptation, and proper execution, the project was successfully completed within the planned
                timeline and budget.
              </p>
            </div>
            <div className="relative">
              <div className="reveal overflow-hidden rounded-[14px] shadow-[0_20px_50px_rgba(31,31,31,0.08)]">
                <img
                  src={delhiImage}
                  alt="Delhi sustainable farmhouse"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mt-12">

            <div className="reveal mt-8 max-w-[800px] mx-auto bg-brand-bg p-6 md:p-8 rounded-[18px] border border-brand-earth/10">
              <p className="font-serif italic text-brand-earth text-[18px] md:text-[20px] leading-relaxed text-center">
                "This project became a strong example that sustainability is not limited by location. With the right mindset,
                research, and understanding of local materials, sustainable architecture can be created anywhere."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── UTTARAKHAND SECTION ─────────────────────────────────────────── */}
      <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-[80px] md:py-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12 reveal">
            <div>
              <span className="top-title mb-3">Uttarakhand</span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[52px] text-brand-earth leading-tight">
                Building with Nature in the Mountains
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative">
              <div className="reveal overflow-hidden rounded-[14px] shadow-[0_20px_50px_rgba(31,31,31,0.08)]">
                <img
                  src={uttarakhandImage}
                  alt="Uttarakhand mountain project"
                  loading="lazy"
                  decoding="async"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
            <div className="space-y-6">
              <p className="reveal text-[15px] md:text-base">
                Nestled in the peaceful landscapes of Uttarakhand, this project was designed with a simple vision — to
                create a space that feels deeply connected to nature while respecting the beauty and sensitivity of the
                mountains.
              </p>
              <p className="reveal text-[15px] md:text-base">
                Unlike urban construction, building in the hills demands patience, understanding, and a strong connection
                with the environment around it. Working in Uttarakhand came with many challenges.
              </p>
              <p className="reveal text-[15px] md:text-base max-w-[800px] mx-auto">
                Material transportation through hilly roads, unpredictable climate conditions, and execution in remote areas
                required constant coordination and adaptability. But these challenges also became part of the learning
                experience that shaped the project beautifully.
              </p>
            </div>
          </div>
          <div className="mt-12">

            <div className="reveal mt-8 text-center max-w-[720px] mx-auto">
              <p className="font-serif italic text-brand-earth text-[20px] md:text-[24px] leading-relaxed">
                Today, the project stands quietly within the landscape,<br />
                reflecting simplicity, sustainability, and a deep respect<br />
                for nature and local craftsmanship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[440px]">
        <div className="relative overflow-hidden group order-2 md:order-1">
          <img
            src={constructionProject}
            alt="Subham project documentation"
            loading="lazy"
            decoding="async"
            className="w-full h-[240px] sm:h-[300px] md:h-full object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/72 via-[#1F1F1F]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center font-serif italic text-[32px] sm:text-[40px] md:text-[48px] text-white whitespace-nowrap">
            Start Your Journey
          </div>
        </div>
        <div className="bg-brand-parchment p-8 sm:p-12 md:p-16 lg:p-[64px_72px] flex flex-col justify-center order-1 md:order-2">
          {[
            { l: "Document", d: "We document traditional construction wisdom and sustainable building practices." },
            { l: "Learn", d: "Every project teaches us something new about working with nature." },
            { l: "Build", d: "Apply this knowledge to create beautiful, sustainable spaces for you." },
          ].map((c, i) => (
            <div
              key={c.l}
              className="group flex items-center justify-between py-5 md:py-7 border-b border-brand-earth/18 cursor-pointer transition-colors duration-200 gap-4 md:gap-6 hover:bg-brand-earth/5"
            >
              <span className="font-serif italic text-[22px] sm:text-[26px] md:text-[32px] text-brand-earth flex-shrink-0">{c.l}</span>
              <span className="flex-grow-0 flex-shrink-0 basis-8 md:basis-10 h-[1px] bg-brand-earth/30" />
              <span className="flex-1 text-right text-[12px] md:text-[13px] text-brand-text leading-[1.6] font-light">{c.d}</span>
              <span className="font-sans text-[16px] md:text-[18px] text-brand-earth-light transition-transform duration-250 ease-in-out group-hover:translate-x-1 flex-shrink-0">→</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
