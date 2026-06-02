
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import awards1 from "../assests/images/shubham-sustainable-residence-project-01.jpeg";
import awards2 from "../assests/images/shubham-ohaa-institutional-school-project.jpeg";

// Home page images
import heroSlide1 from "../assests/images/shubham-golden-hour-project-exterior.jpeg";
import heroSlide2 from "../assests/images/shubham-sustainable-residence-project-01.jpeg";
import heroSlide3 from "../assests/images/shubham-sustainable-residence-project-02.jpeg";
import futureResidence from "../assests/images/shubham-project-exterior-view-01.jpeg";
import solarEnergy from "../assests/images/shubham-natural-material-detail-01.jpeg";
import rainwaterHarvesting from "../assests/images/shubham-natural-material-detail-02.jpeg";
import passiveCooling from "../assests/images/shubham-craftsmanship-detail-01.jpeg";
import biogasBioseptic from "../assests/images/shubham-sustainable-finish-detail-01.jpeg";
import clayMaterial from "../assests/images/shubham-construction-progress-01.jpeg";
import stoneMaterial from "../assests/images/shubham-site-construction-work-01.jpeg";
import mudMaterial from "../assests/images/shubham-project-exterior-view-01.jpeg";
import earthMaterial from "../assests/images/shubham-sustainable-residence-project-02.jpeg";
import woodMaterial from "../assests/images/shubham-ohaa-institutional-school-project.jpeg";
import limeMaterial from "../assests/images/shubham-delhi-residential-construction.jpeg";
import projectLandscape from "../assests/images/shubham-golden-hour-project-exterior.jpeg";
import constructionProject from "../assests/images/shubham-golden-hour-project-exterior.jpeg";

// Client work images — SEO-friendly filenames
import clientProject1 from "../assests/images/shubham-sustainable-residence-project-01.jpeg";
import clientProject2 from "../assests/images/shubham-sustainable-residence-project-02.jpeg";
import clientProject3 from "../assests/images/shubham-ohaa-institutional-school-project.jpeg";
import clientProject4 from "../assests/images/shubham-delhi-residential-construction.jpeg";
import clientDetail1 from "../assests/images/shubham-natural-material-detail-01.jpeg";
import clientDetail2 from "../assests/images/shubham-natural-material-detail-02.jpeg";
import clientDetail3 from "../assests/images/shubham-craftsmanship-detail-01.jpeg";
import clientDetail4 from "../assests/images/shubham-sustainable-finish-detail-01.jpeg";
import clientDetail5 from "../assests/images/shubham-construction-progress-01.jpeg";
import clientDetail6 from "../assests/images/shubham-site-construction-work-01.jpeg";
import clientDetail7 from "../assests/images/shubham-project-exterior-view-01.jpeg";

const SLIDES = [heroSlide1, heroSlide2, heroSlide3];

const TESTIMONIALS = [
  {
    quote:
      "Shubham transformed our vision into a stunning sustainable farmhouse. The natural materials and passive cooling design keep our home comfortable year-round while significantly reducing energy costs.",
    client: "Rajesh Kumar",
    affiliation: "Farmhouse Owner, Chennai",
    accent: "Sustainable Living",
  },
  {
    quote:
      "The attention to detail and commitment to eco-friendly construction was exceptional. Our residence feels healthier and more connected to nature than any home we've lived in before.",
    client: "Priya Venkatesh",
    affiliation: "Residence Owner, Coimbatore",
    accent: "Quality Craftsmanship",
  },
  {
    quote:
      "From design to execution, Shubham delivered beyond expectations. Their expertise in traditional building methods combined with modern engineering created a truly unique and sustainable space.",
    client: "Anand Sharma",
    affiliation: "Institutional Project, Bangalore",
    accent: "Client Satisfaction",
  },
];

const AWARDS = [
  {
    name: "Excellence Engineer Award 2024",
    body: "சீர்மிகு பொறியாளர் விருது · Presented to Ms. Sanchana Subbarayan",
    year: "Chennai · 2024",
    mark: "A1",
    image: awards1,
  },
  {
    name: "Professional Achievement Award",
    body: "Recognizing Engineering Excellence · Sponsored by Renacon Biocons",
    year: "2024",
    mark: "A2",
    image: awards2,
  },
  // {
  //   name: "Honour Title",
  //   body: "Organisation / Council",
  //   year: "Year",
  //   mark: "A3",
  // },
  // {
  //   name: "Honour Title",
  //   body: "Organisation / Council",
  //   year: "Year",
  //   mark: "A3",
  // },
];

// Each material gets a unique image — swap the src values once dedicated
// assets are available. Labels and order match the original circular layout.
const MATERIALS = [
  { src: clayMaterial,  label: "Clay",  x: 0,    y: -240 },
  { src: stoneMaterial, label: "Stone", x: 210,  y: -120 },
  { src: mudMaterial,   label: "Mud",   x: 210,  y: 120  },
  { src: earthMaterial, label: "Earth", x: 0,    y: 240  },
  { src: woodMaterial,  label: "Wood",  x: -210, y: 120  },
  { src: limeMaterial,  label: "Lime",  x: -210, y: -120 },
];

export default function Home() {
  const [loaded, setLoaded]       = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showHl1, setShowHl1]     = useState(false);
  const [showHl2, setShowHl2]     = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const bleedRef  = useRef<HTMLImageElement>(null);
  const quoteRef  = useRef<HTMLImageElement>(null);
  const bleedSec  = useRef<HTMLElement>(null);
  const quoteSec  = useRef<HTMLElement>(null);

  useEffect(() => {
    const t0 = setTimeout(() => setLoaded(true),    0);
    const t1 = setTimeout(() => setShowHl1(true),  300);
    const t2 = setTimeout(() => setShowHl2(true),  520);
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
        if (bleedRef.current && bleedSec.current) {
          const r   = bleedSec.current.getBoundingClientRect();
          const off = (window.innerHeight - r.top) * 0.12;
          bleedRef.current.style.transform = `translateY(${off * 0.25}px)`;
        }
        if (quoteRef.current && quoteSec.current) {
          const r   = quoteSec.current.getBoundingClientRect();
          const off = (window.innerHeight - r.top) * 0.15;
          quoteRef.current.style.transform = `translateY(${off * 0.3}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <header className="relative w-full h-screen overflow-hidden">
        {SLIDES.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 opacity-0 transition-opacity duration-1000 ease-in-out ${i === activeSlide ? "opacity-100" : ""}`}
          >
            {/* Hero slides are above the fold — load eagerly */}
            <img
              src={src}
              alt="Shubham sustainable architecture"
              loading="eager"
              decoding="sync"
              className={`w-full h-full object-cover ${i === activeSlide ? "animate-[kenburns_8s_ease-in-out_forwards]" : ""}`}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F1F1F]/55 via-[#1F1F1F]/30 to-[#1F1F1F]/10" />

        <div className="absolute left-[6%] bottom-[18%] z-10 max-w-[calc(100%-48px)] md:max-w-[660px]">
          <div className="overflow-hidden">
            <span
              className={`block font-serif text-[40px] sm:text-[52px] md:text-[64px] lg:text-[82px] font-normal text-white leading-none transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${showHl1 ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}
            >
              Luxury That
            </span>
          </div>
          <span className="block w-[60px] h-[1px] bg-white/50 my-[18px]" />
          <div className="overflow-hidden">
            <span
              className={`block font-serif text-[40px] sm:text-[52px] md:text-[64px] lg:text-[82px] font-normal text-white leading-none transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${showHl2 ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}
            >
              Breathes
            </span>
          </div>
          <span className="block w-[60px] h-[1px] bg-white/50 my-[18px] ml-auto" />
        </div>

        {/* Decorative hexagons */}
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

        {/* Scroll indicator — fixed typo: height-[34px] → h-[34px] */}
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
            Not just a home.<br />A living ecosystem.
          </h2>
          <p className="reveal mt-8 max-w-[680px] mx-auto text-[15px] md:text-base">
            Shubham Consulting and Construction is redefining luxury through sustainability. We design and build
            high-end spaces that are fully self-sustainable, eco-conscious, and deeply connected to nature —
            without compromising on elegance. Every space is thoughtfully curated to create harmony between
            architecture, wellness, and the environment.
          </p>
        </div>
      </section>

      {/* ─── BLEED IMAGE ──────────────────────────────────────────────────── */}
      <section className="relative w-full h-[280px] sm:h-[380px] md:h-[560px] overflow-hidden" ref={bleedSec}>
        <img
          ref={bleedRef}
          src={futureResidence}
          alt="Atmospheric Shubham project landscape"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover will-change-transform"
        />
        <div className="absolute bottom-0 left-0 w-full p-6 md:px-12 bg-gradient-to-t from-[#1F1F1F]/70 to-transparent z-10">
          <h2 className="text-[24px] sm:text-[30px] md:text-[42px] text-white">Crafting Future-Ready Residences</h2>
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 hexagon-pulse opacity-40 z-20 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[1.5]">
            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
          </svg>
        </div>
      </section>

      {/* ─── ZERO HARM PHILOSOPHY ─────────────────────────────────────────── */}
      <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-[80px] md:py-[100px] relative overflow-hidden">
        <div className="absolute bottom-[5%] left-[-5%] w-56 h-56 hexagon-float-slow opacity-20 z-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-earth/50 stroke-1">
            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
          </svg>
        </div>
        <h2 className="reveal text-[28px] sm:text-[36px] md:text-[52px] text-brand-earth max-w-[780px] mb-8 md:mb-12 leading-[1.15] relative z-20">
          Our Philosophy: Zero Harm. Maximum Harmony.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] relative z-20">
          <p className="reveal text-[15px] md:text-base">
            At Shubham, we believe your home should heal you, not harm the planet. Our construction methodology
            is built on a foundation of 0% hazardous chemicals, using breathable natural materials that support
            long-term human health. We combine traditional wisdom with modern engineering to create structures
            that are as durable as they are beautiful.
          </p>
          <p className="reveal text-[15px] md:text-base">
            What sets us apart is our commitment to integrated self-sustainable systems. From solar energy and
            rainwater harvesting to bio-gas plants and passive cooling design, every decision is guided by
            long-term efficiency, comfort, and environmental stewardship. This is conscious living, elevated.
          </p>
        </div>
      </section>

      {/* ─── SUSTAINABILITY FEATURES ──────────────────────────────────────── */}
      <section className="bg-brand-bg px-6 md:px-12 lg:px-20 pb-[80px] md:pb-[100px] grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {[
          { img: solarEnergy,         tag: "Solar",   h: "Solar Energy Systems",   b: "Harnessing the sun to power your modern lifestyle with zero emissions." },
          { img: rainwaterHarvesting, tag: "Water",   h: "Rainwater Harvesting",   b: "Integrated collection systems designed to secure your water future naturally." },
          { img: passiveCooling,      tag: "Cooling", h: "Passive Cooling",        b: "Architectural design that maintains comfort without high energy consumption." },
          { img: biogasBioseptic,     tag: "Waste",   h: "Bio-Gas & Bio-Septic",   b: "Closing the loop with integrated waste management and renewable energy." },
        ].map((v) => (
          <article key={v.h} className="group reveal">
            <div className="relative overflow-hidden aspect-[3/4]">
              <img
                src={v.img}
                alt={v.h}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.06]"
              />
              <span className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-brand-bg/92 px-2 py-1 md:px-3 md:py-1.5 rounded-[2px] top-title text-[9px] md:text-[10px]">
                {v.tag}
              </span>
            </div>
            <div className="pt-4 md:pt-5">
              <h3 className="text-[18px] sm:text-[22px] md:text-[24px] text-brand-earth leading-tight">{v.h}</h3>
              <p className="mt-2 text-[13px] md:text-base">{v.b}</p>
            </div>
          </article>
        ))}
      </section>

      {/* ─── MATERIALS OF WISDOM ──────────────────────────────────────────── */}
      <section className="bg-brand-bg py-16 md:py-24 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: text */}
          <div className="reveal">
            <span className="top-title mb-3">Materials of Wisdom</span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] text-brand-earth mt-3 mb-8 md:mb-10 leading-tight">
              Traditional Materials.<br />Modern Engineering.
            </h2>
            <div className="space-y-8 md:space-y-12">
              {[
                { h: "Rammed Earth & Mud Blocks", b: "Breathable, thermal-efficient walls that provide natural insulation and a unique organic aesthetic." },
                { h: "Natural COB & Stone",        b: "Utilizing foundation stones and natural COB for structural integrity that honours building heritage." },
                { h: "Artisanal Finishes",         b: "Lime plasters, traditional textures, and Madras terrace roofing for timeless elegance and health." },
              ].map((s) => (
                <div key={s.h} className="pt-6 md:pt-7 border-t border-brand-earth/20 max-w-[420px]">
                  <h3 className="text-[20px] md:text-[24px] text-brand-earth leading-tight mb-2 md:mb-3">{s.h}</h3>
                  <p className="text-[14px] md:text-base">{s.b}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: material grid — MOBILE/TABLET: responsive grid, DESKTOP: circular hex */}
          <div className="reveal">

            {/* ── Mobile & Tablet: 2-col grid (visible below lg) ── */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:hidden">
              {MATERIALS.map((hex) => (
                <div key={hex.label} className="flex flex-col items-center gap-2 group">
                  <div className="w-full aspect-square hexagon-clip overflow-hidden shadow-md">
                    <img
                      src={hex.src}
                      alt={hex.label}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-brand-earth">
                    {hex.label}
                  </span>
                </div>
              ))}
            </div>

            {/* ── Desktop: original circular absolute layout (visible lg+) ── */}
            <div className="hidden lg:flex justify-center items-center h-[700px]">
              <div className="hexagon-container relative w-full h-full">
                {MATERIALS.map((hex, i) => (
                  <div
                    key={i}
                    className="hexagon-item flex flex-col items-center group absolute"
                    style={{ transform: `translate(calc(50% + ${hex.x}px - 96px), calc(50% + ${hex.y}px - 104px))` }}
                  >
                    <div className="w-48 h-52 hexagon-clip overflow-hidden shadow-xl">
                      <img
                        src={hex.src}
                        alt={hex.label}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <span className="mt-3 font-sans text-[10px] uppercase tracking-[0.2em] text-brand-earth opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {hex.label}
                    </span>
                  </div>
                ))}
                {/* Central logo */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[182px] h-[182px] bg-brand-bg rounded-full flex items-center justify-center border border-brand-earth/30 shadow-inner">
                  <img src="/Subam Logo.png" alt="Shubham" className="w-[100px] opacity-90" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── QUOTE BLEED ──────────────────────────────────────────────────── */}
      <section className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] overflow-hidden bg-white" ref={quoteSec}>
        <img
          // ref={quoteRef}
          src={projectLandscape}
          alt="Mountain landscape"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/15 via-[#1F1F1F]/55 to-[#1F1F1F]/65" />
        <div className="absolute right-[6%] md:right-[8%] top-1/2 -translate-y-1/2 text-right max-w-[90vw] sm:max-w-[480px] md:max-w-[560px] z-10 px-2">
          <span className="font-serif text-[48px] md:text-[80px] text-white/70 leading-none float-left mr-2 pt-6 md:pt-10">"</span>
          <p className="font-serif italic text-white text-[14px] sm:text-[16px] md:text-[18px]">
            Build a home that lives with you, not against nature.
          </p>
          <p className="text-white mt-4 opacity-80 text-[13px] md:text-base">Explore our exceptional services and unparalleled experiences.</p>
        </div>
      </section>

      {/* ─── TESTIMONIALS ─────────────────────────────────────────────────── */}
      <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-[80px] md:py-[110px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-12 reveal">
            <div>
              <span className="top-title mb-3">Client Testimonials</span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[52px] text-brand-earth leading-tight">
                What Our Clients Say.
              </h2>
            </div>
            <p className="max-w-[420px] md:text-right text-[14px] md:text-base">
              This section is data-driven — verified testimonials can be added, updated, or removed from a single
              content list without restructuring the page.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((item, index) => (
              <article
                key={`${item.client}-${index}`}
                className="reveal relative bg-brand-parchment border border-brand-earth/12 rounded-[18px] p-6 md:p-8 shadow-[0_20px_50px_rgba(31,31,31,0.05)] transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="top-title mb-4">{item.accent}</span>
                <p className="font-serif italic text-brand-earth text-[20px] sm:text-[23px] md:text-[27px] leading-[1.55] min-h-[160px] sm:min-h-[180px]">
                  "{item.quote}"
                </p>
                <div className="pt-5 mt-5 border-t border-brand-earth/12">
                  <h3 className="text-[20px] md:text-[22px] text-brand-earth leading-tight">{item.client}</h3>
                  <p className="mt-2 text-[13px] md:text-base">{item.affiliation}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AWARDS ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-parchment px-6 md:px-12 lg:px-20 py-[80px] md:py-[110px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-10 md:mb-12 reveal">
            <span className="top-title mb-3">Awards Received</span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[52px] text-brand-earth leading-tight">
              Recognition Ready To Showcase.
            </h2>
            <p className="max-w-[700px] mx-auto mt-4 md:mt-5 text-[14px] md:text-base">
              The awards module is in place and responsive. Replace the placeholder entries below with confirmed
              award names, logos, awarding bodies, and receipt years as client-approved assets become available.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {AWARDS.map((award, index) => (
              <article
                key={`${award.name}-${index}`}
                className="reveal bg-brand-bg border border-brand-earth/12 rounded-[24px] overflow-hidden shadow-[0_30px_60px_rgba(31,31,31,0.06)] group transition-all duration-500 hover:shadow-[0_40px_80px_rgba(31,31,31,0.1)]"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-white/40">
                  {(award as any).image ? (
                    <img
                      src={(award as any).image}
                      alt={award.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-serif text-[48px] text-brand-earth/30">{award.mark}</span>
                    </div>
                  )}
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-brand-bg/90 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-brand-earth/15">
                    <span className="top-title text-[9px] md:text-[10px] !mb-0">{award.year}</span>
                  </div>
                </div>
                <div className="p-6 md:p-10 text-left">
                  <span className="top-title mb-3 md:mb-4">Award of Excellence</span>
                  <h3 className="text-[24px] sm:text-[28px] md:text-[34px] text-brand-earth leading-tight mb-3 md:mb-4">
                    {award.name}
                  </h3>
                  <p className="text-[14px] md:text-[16px] leading-relaxed opacity-80">{award.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY CHOOSE SHUBHAM ───────────────────────────────────────────── */}
      <section className="bg-brand-parchment px-6 md:px-12 lg:px-20 py-[80px] md:py-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 md:mb-20 reveal">
            <span className="top-title mb-3">Why Choose Shubham?</span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[52px] text-brand-earth mt-3 leading-tight">
              Sustainable Luxury. Uncompromised Quality.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              { h: "Lower Maintenance", b: "Built to last with natural materials that age gracefully, reducing long-term upkeep costs." },
              { h: "Healthier Living",  b: "Zero hazardous chemicals and breathable walls ensure a living space that actively supports your wellness." },
              { h: "Unique Aesthetics", b: "Artisanal finishes and traditional wisdom meet modern design for a home unlike any other." },
              { h: "Future Ready",      b: "A sustainable investment that appreciates in value while fulfilling your environmental responsibility." },
            ].map((item, i) => (
              <div key={item.h} className="relative pt-8 md:pt-10 border-t border-brand-earth/15 reveal">
                <span className="absolute top-3 left-0 top-title text-[10px]">0{i + 1}</span>
                <h3 className="text-[20px] md:text-[24px] text-brand-earth mb-3 md:mb-4 leading-tight">{item.h}</h3>
                <p className="text-[14px] md:text-base">{item.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURED PROJECTS PREVIEW ──────────────────────────────────── */}
      <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-[80px] md:py-[110px]">
        <div className="max-w-[1200px] mx-auto">

          {/* Section header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14 reveal">
            <div>
              <span className="top-title mb-3">Client Work</span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[52px] text-brand-earth mt-3 leading-tight">
                Featured Projects
              </h2>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-3">
              <span className="font-serif italic text-brand-earth/50 text-[13px] md:text-[15px]">
                Sustainable Construction in Chennai &amp; across India
              </span>
              <Link
                to="/projects"
                className="font-sans text-[11px] uppercase tracking-[0.18em] text-brand-earth border-b border-brand-earth/40 pb-0.5 hover:border-brand-earth transition-colors duration-200"
              >
                View All Projects →
              </Link>
            </div>
          </div>

          {/* Asymmetric hero grid — 3 featured projects */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-12">
            {/* Large featured card */}
            <div className="reveal group relative overflow-hidden rounded-[16px] lg:col-span-7 shadow-[0_24px_60px_rgba(31,31,31,0.10)]">
              <img
                src={clientProject1}
                alt="Sustainable Villa Construction Chennai – Subham Consulting rammed earth passive cooling"
                loading="lazy"
                decoding="async"
                className="w-full h-[380px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/75 via-[#1F1F1F]/20 to-transparent" />
              <div className="absolute top-5 left-5">
                <span className="inline-block bg-brand-earth/90 text-white text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">Featured</span>
              </div>
              <div className="absolute bottom-7 left-7 right-7">
                <span className="top-title text-[10px] !mb-2 opacity-80">Residential · Chennai</span>
                <h3 className="text-white text-[24px] md:text-[32px] font-serif leading-tight">Sustainable Villa Construction</h3>
                <p className="text-white/70 text-[12px] mt-1.5">Rammed earth + passive cooling design · Chennai</p>
              </div>
            </div>

            {/* Right column — two stacked cards */}
            <div className="lg:col-span-5 grid grid-rows-2 gap-4">
              <div className="reveal group relative overflow-hidden rounded-[16px] shadow-[0_24px_60px_rgba(31,31,31,0.10)]">
                <img
                  src={clientProject3}
                  alt="OHAA institutional school sustainable construction Chennai – Subham Consulting"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[200px] lg:h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="top-title text-[10px] !mb-1.5 opacity-80">Institutional · OHAA</span>
                  <h3 className="text-white text-[18px] md:text-[22px] font-serif leading-tight">OHAA Green School Project</h3>
                </div>
              </div>
              <div className="reveal group relative overflow-hidden rounded-[16px] shadow-[0_24px_60px_rgba(31,31,31,0.10)]">
                <img
                  src={clientProject2}
                  alt="Eco-friendly residential project Chennai – sustainable exterior construction"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[200px] lg:h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/70 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="top-title text-[10px] !mb-1.5 opacity-80">Eco Construction · Chennai</span>
                  <h3 className="text-white text-[18px] md:text-[22px] font-serif leading-tight">Eco-Friendly Residential Project</h3>
                </div>
              </div>
            </div>
          </div>

          {/* View All CTA */}
          <div className="reveal text-center">
            <Link
              to="/projects"
              className="inline-flex items-center gap-3 border border-brand-earth text-brand-earth font-sans text-[11px] uppercase tracking-[0.2em] px-10 py-4 rounded-[2px] hover:bg-brand-earth hover:text-white transition-all duration-300"
            >
              View All Sustainable Projects
              <span>→</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────────────────── */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[400px] md:min-h-[440px] mt-10 md:mt-20">
        <div className="relative overflow-hidden group order-2 md:order-1">
          <img
            src={constructionProject}
            alt="Shubham project at golden hour"
            loading="lazy"
            decoding="async"
            className="w-full h-[240px] sm:h-[300px] md:h-full object-cover transition-transform duration-[800ms] ease-in-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/72 via-[#1F1F1F]/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-center font-serif italic text-[32px] sm:text-[40px] md:text-[48px] text-white whitespace-nowrap">
            Let's Connect
          </div>
        </div>
        <div className="bg-brand-parchment p-8 sm:p-12 md:p-16 lg:p-[64px_72px] flex flex-col justify-center order-1 md:order-2">
          {[
            { l: "Visit", d: "No:3 Sri Griha House, 8th Avenue\nAshok Nagar, Chennai - 600083" },
            { l: "Write", d: "Consultingsubham@gmail.com\nCareers.consultingsubham@gmail.com" },
            { l: "Call",  d: "+91 84385 30234 (WhatsApp)\nMon–Fri · 10:00 AM – 4:00 PM" },
          ].map((c) => (
            <div
              key={c.l}
              className="group flex items-center justify-between py-5 md:py-7 border-b border-brand-earth/18 cursor-pointer transition-colors duration-200 gap-4 md:gap-6 hover:bg-brand-earth/5"
            >
              <span className="font-serif italic text-[22px] sm:text-[26px] md:text-[32px] text-brand-earth flex-shrink-0">{c.l}</span>
              <span className="flex-grow-0 flex-shrink-0 basis-8 md:basis-10 h-[1px] bg-brand-earth/30" />
              <span className="flex-1 text-right text-[12px] md:text-[13px] text-brand-text leading-[1.6] font-light whitespace-pre-line">{c.d}</span>
              <span className="font-sans text-[16px] md:text-[18px] text-brand-earth-light transition-transform duration-250 ease-in-out group-hover:translate-x-1 flex-shrink-0">→</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}