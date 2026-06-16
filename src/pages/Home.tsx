import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageSEO from "../components/PageSEO";
import awards1 from "../assests/awards/awards1.jpeg";
import awards2 from "../assests/awards/awards2.jpeg";

// Home page images
import heroFallback from "../assests/images/subham-golden-hour-project-exterior.jpeg";
import futureResidence from "../assests/images/subham-project-exterior-view-01.jpeg";
import solarEnergy from "../assests/solarEnergy.png";
import rainwaterHarvesting from "../assests/rainwaterHarvesting.png";
import passiveCooling from "../assests/passiveCooling.png";
import biogasBioseptic from "../assests/biogasBioseptic.png";
import clayMaterial from "../assests/images/subham-construction-progress-01.jpeg";
import stoneMaterial from "../assests/images/subham-site-construction-work-01.jpeg";
import mudMaterial from "../assests/images/subham-about-natural-material-palette.jpeg";
import earthMaterial from "../assests/images/subham-sustainable-residence-project-02.jpeg";
import woodMaterial from "../assests/lime.png";
import Domeandwalt from "../assests/images/subham-about-interior-architectural-detail.jpeg";
import projectLandscape from "../assests/images/subham-golden-hour-project-exterior.jpeg";
import constructionProject from "../assests/images/subham-golden-hour-project-exterior.jpeg";

// Client work images
import clientProject1 from "../assests/images/subham-founder-sanchana-subbarayan.jpeg";
import clientProject2 from "../assests/images/subham-project-exterior-view-01.jpeg";
import clientProject3 from "../assests/images/subham-ohaa-institutional-school-project.jpeg";

const HERO_VIDEO_URL =
  "https://res.cloudinary.com/df03m0m65/video/upload/v1781595812/Subham_Hero_Section_Final_lqvark.mp4";

const TESTIMONIALS = [
  {
    quote:
      "We approached Subham Consulting with a dream to build a sustainable farmhouse that connects us with nature. From the initial design phase to the final handover, their team demonstrated exceptional professionalism and expertise. They used rammed earth walls and natural materials that create a perfect balance between traditional aesthetics and modern comfort. The passive cooling design keeps our home cool during hot Chennai summers without relying heavily on air conditioning, while the integrated solar power system takes care of most of our energy needs. Their project management was outstanding, completing the work within the agreed timeline and budget.",
    client: "Rajesh Kumar",
    affiliation: "Farmhouse Owner, Chennai",
    accent: "Sustainable Living",
  },
  {
    quote:
      "We approached Shubham Consulting for the execution of our vernacular building project in Uttarakhand, and we are extremely satisfied with their work. The team demonstrated a high level of professionalism in executing traditional vernacular construction techniques while maintaining quality standards throughout the project. Their project management was well-organized, and they successfully completed the project within the agreed timeline and budget. The entire process was smooth, transparent, and efficiently handled. Today, we are happily enjoying our beautiful vernacular home in Uttarakhand, and we highly appreciate the dedication and expertise of the Shubham Consulting team.",
    client: "Bhavya Pandey",
    affiliation: "Vernacular Home Owner, Uttarakhand",
    accent: "Traditional Expertise",
  },
  {
    quote:
      "It was a wonderful experience working with the Shubham Consulting team. We initially had a question about whether this sustainable concept could be successfully implemented in Delhi, and their expertise gave us the answer. From planning to execution, the team handled the project professionally and delivered exactly what we envisioned. We are extremely happy with their service, commitment, and support throughout the project. We truly appreciate their efforts and look forward to collaborating with them on future projects as well.",
    client: "Arun Pandey",
    affiliation: "Residence Owner, Delhi",
    accent: "Delhi Implementation",
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
];

const MATERIALS = [
  { src: clayMaterial, label: "Bamboo", x: 0, y: -240 },
  { src: stoneMaterial, label: "Vernacular Structure", x: 210, y: -120 },
  { src: mudMaterial, label: "Madras Terrace", x: 210, y: 120 },
  { src: earthMaterial, label: "Earth", x: 0, y: 240 },
  { src: woodMaterial, label: "Lime", x: -210, y: 120 },
  { src: Domeandwalt, label: "Dome & Walt", x: -210, y: -120 },
];

export default function Home() {
  const [showHl1, setShowHl1] = useState(false);
  const [showHl2, setShowHl2] = useState(false);
  const [showScroll, setShowScroll] = useState(false);
  const bleedRef = useRef<HTMLImageElement>(null);
  const bleedSec = useRef<HTMLElement>(null);
  const quoteSec = useRef<HTMLElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setShowHl1(true), 300);
    const t2 = setTimeout(() => setShowHl2(true), 520);
    const t3 = setTimeout(() => setShowScroll(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
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
          const r = bleedSec.current.getBoundingClientRect();
          const off = (window.innerHeight - r.top) * 0.12;
          bleedRef.current.style.transform = `translateY(${off * 0.25}px)`;
        }
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.subhamconsulting.com/#webpage",
    "url": "https://www.subhamconsulting.com/",
    "name": "Subham Consulting | Sustainable Construction Chennai | Sanchana Subbarayan",
    "description": "Subham Consulting: Sustainable construction & eco-friendly architecture by Sanchana Subbarayan. Rammed earth homes, passive cooling design & green buildings in Chennai & Tamil Nadu.",
    "isPartOf": { "@id": "https://www.subhamconsulting.com/#website" },
    "about": { "@id": "https://www.subhamconsulting.com/#organization" },
    "mentions": { "@id": "https://www.subhamconsulting.com/about#founder" },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.subhamconsulting.com/" }
      ]
    }
  };

  return (
    <>
      <PageSEO
        title="Subham Consulting | Sustainable Construction & Eco-Friendly Homes | Chennai"
        description="Subham Consulting specialises in sustainable construction, rammed earth homes & passive cooling design. Founded by Sanchana Subbarayan. Eco-friendly architecture in Chennai, Tamil Nadu & South India."
        path="/"
        structuredData={homeSchema}
      />

      {/* ─── HERO ─────────────────────────────────────────────────────────── */}
      <header
        style={{
          position: "relative",
          width: "100%",
          height: "100vh",
          minHeight: "100vh",
          overflow: "hidden",
          backgroundColor: "#000",
        }}
      >
        {/* ── Fallback image: visible while the video loads or on devices
            where autoplay is blocked. z-index: 0 keeps it behind the video. */}
        <img
          src={heroFallback}
          alt="Golden hour sustainable architecture exterior - eco-friendly passive cooling residential project by Subham Consulting Chennai"
          loading="eager"
          decoding="sync"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />

        {/* ── Cloudinary background video
            Uses the same cover-sizing approach as the old YouTube iframe.
            All sizing lives in index.css via .cloudinary-hero-video. */}
        <video
          className="cloudinary-hero-video"
          src={HERO_VIDEO_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          disablePictureInPicture
          tabIndex={-1}
        />

        {/* ── Dark cinematic overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(31,31,31,0.55) 0%, rgba(31,31,31,0.30) 50%, rgba(31,31,31,0.10) 100%)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        {/* ── Hero text content */}
        <div
          style={{
            position: "absolute",
            left: "6%",
            bottom: "18%",
            zIndex: 10,
            maxWidth: "min(calc(100% - 48px), 660px)",
          }}
        >
          <h1 className="sr-only">
            Sustainable Construction &amp; Architecture Consultants in Chennai — Subham Consulting
          </h1>

          <div style={{ overflow: "hidden" }} aria-hidden="true">
            <span
              className={`block font-serif text-[40px] sm:text-[52px] md:text-[64px] lg:text-[82px] font-normal text-white leading-none transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                showHl1 ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"
              }`}
            >
              Luxury That
            </span>
          </div>

          <span
            style={{
              display: "block",
              width: 60,
              height: 1,
              background: "rgba(255,255,255,0.5)",
              margin: "18px 0",
            }}
            aria-hidden="true"
          />

          <div style={{ overflow: "hidden" }} aria-hidden="true">
            <span
              className={`block font-serif text-[40px] sm:text-[52px] md:text-[64px] lg:text-[82px] font-normal text-white leading-none transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                showHl2 ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"
              }`}
            >
              Breathes
            </span>
          </div>

          <span
            style={{
              display: "block",
              width: 60,
              height: 1,
              background: "rgba(255,255,255,0.5)",
              margin: "18px 0 0 auto",
            }}
            aria-hidden="true"
          />
        </div>

        {/* ── Decorative hexagons */}
        <div className="absolute top-[20%] right-[10%] w-40 h-40 hexagon-float opacity-50 z-10 hidden md:block">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[2]">
            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
          </svg>
        </div>
        <div
          className="absolute top-[60%] left-[15%] w-32 h-32 hexagon-float-slow opacity-40 z-10 hidden lg:block"
          style={{ animationDelay: "-3s" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-[1.5]">
            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
          </svg>
        </div>
        <div
          className="absolute bottom-[25%] left-[40%] w-24 h-24 hexagon-float-reverse opacity-35 z-10 hidden md:block"
          style={{ animationDelay: "-8s" }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-white stroke-1">
            <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
          </svg>
        </div>

        {/* ── Scroll indicator */}
        <div
          className={`absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 transition-opacity duration-600 ${
            showScroll ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-[22px] h-[34px] border-[1.5px] border-white rounded-[12px] relative after:content-[''] after:absolute after:left-1/2 after:top-[6px] after:-translate-x-1/2 after:w-[2px] after:h-[5px] after:bg-white after:rounded-[2px] after:animate-[mousedot_1.8s_ease-in-out_infinite]" />
          <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/70 mt-1.5">
            Scroll Down
          </div>
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
            Subham Consulting and Construction is redefining luxury through sustainability. We design and build
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
          alt="Atmospheric Subham project landscape"
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
            At Subham, we believe your home should heal you, not harm the planet. Our construction methodology
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
          { img: solarEnergy, tag: "Solar", h: "Solar Energy Systems", b: "Harnessing the sun to power your modern lifestyle with zero emissions." },
          { img: rainwaterHarvesting, tag: "Water", h: "Rainwater Harvesting", b: "Integrated collection systems designed to secure your water future naturally." },
          { img: passiveCooling, tag: "Cooling", h: "Passive Cooling", b: "Architectural design that maintains comfort without high energy consumption." },
          { img: biogasBioseptic, tag: "Waste", h: "Bio-Gas & Bio-Septic", b: "Closing the loop with integrated waste management and renewable energy." },
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
      <section className="bg-brand-bg py-16 md:py-24 overflow-hidden">

        {/* Header row */}
        <div className="px-6 md:px-12 lg:px-20 mb-10 md:mb-14">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-end">
            <div className="reveal">
              <span className="top-title mb-3">Materials of Wisdom</span>
              <h2 className="text-[28px] sm:text-[36px] md:text-[48px] text-brand-earth mt-3 leading-tight">
                Traditional Materials.<br />Modern Engineering.
              </h2>
            </div>
            <div className="reveal space-y-5">
              {[
                { h: "Rammed Earth & Mud Blocks", b: "Breathable, thermal-efficient walls that provide natural insulation and a unique organic aesthetic." },
                { h: "Natural COB & Stone", b: "Utilizing foundation stones and natural COB for structural integrity that honours building heritage." },
                { h: "Artisanal Finishes", b: "Lime plasters, traditional textures, and Madras terrace roofing for timeless elegance and health." },
              ].map((s) => (
                <div key={s.h} className="pt-4 border-t border-brand-earth/20">
                  <h3 className="text-[17px] md:text-[19px] text-brand-earth leading-tight mb-1">{s.h}</h3>
                  <p className="text-[13px] md:text-[14px]">{s.b}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Material image gallery */}
        <div className="px-6 md:px-12 lg:px-20">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {MATERIALS.map((mat) => (
                <article
                  key={mat.label}
                  className="reveal group relative overflow-hidden rounded-[10px] md:rounded-[14px] shadow-[0_8px_32px_rgba(31,31,31,0.12)]"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden">
                    <img
                      src={mat.src}
                      alt={`${mat.label} – natural building material – Subham Consulting`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/70 via-[#1F1F1F]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                    <p className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-white/65 mb-1">Natural Material</p>
                    <h3 className="font-serif text-[22px] md:text-[26px] text-white leading-none">{mat.label}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

      </section>

      {/* ─── QUOTE BLEED ──────────────────────────────────────────────────── */}
      <section className="relative w-full h-[240px] sm:h-[280px] md:h-[820px] overflow-hidden bg-white" ref={quoteSec}>
        <img
          src={projectLandscape}
          alt="Mountain landscape"
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/15 via-[#1F1F1F]/55 to-[#1F1F1F]/65" />
        <div className="absolute right-[6%] md:right-[8%] top-1/2 -translate-y-1/2 text-right max-w-[90vw] sm:max-w-[480px] md:max-w-[560px] z-10 px-2">
          <span className="font-serif text-[48px] md:text-[80px] text-white/70 leading-none float-left mr-2 pt-6 md:pt-10">"</span>
          <p className="font-serif italic text-white text-[14px] sm:text-[16px] md:text-[34px]">
            Build a home that lives with you, not against nature.
          </p>
          <br />
          <p className="text-white mt-4 opacity-80 text-[13px] md:text-[17px]">Explore our exceptional services and unparalleled experiences.</p>
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
              Explore what our clients say about our expertise in sustainable construction, natural building techniques, and environmentally conscious project delivery.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {TESTIMONIALS.map((item, index) => (
              <article
                key={`${item.client}-${index}`}
                className="reveal relative bg-brand-parchment border border-brand-earth/12 rounded-[18px] p-5 md:p-6 shadow-[0_20px_50px_rgba(31,31,31,0.05)] transition-transform duration-500 hover:-translate-y-1"
              >
                <span className="top-title mb-3">{item.accent}</span>
                <p className="font-serif italic text-brand-earth text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6]">
                  "{item.quote}"
                </p>
                <div className="pt-4 mt-4 border-t border-brand-earth/12">
                  <h3 className="text-[18px] md:text-[20px] text-brand-earth leading-tight">{item.client}</h3>
                  <p className="mt-2 text-[12px] md:text-[13px]">{item.affiliation}</p>
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
              Recognized For Sustainable Leadership
            </h2>
            <p className="max-w-[700px] mx-auto mt-4 md:mt-5 text-[14px] md:text-base">
              Celebrating achievements that showcase our leadership in sustainable construction, natural building techniques, innovative design, and exceptional project execution.
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

      {/* ─── WHY CHOOSE SUBHAM ───────────────────────────────────────────── */}
      <section className="bg-brand-parchment px-6 md:px-12 lg:px-20 py-[80px] md:py-[120px]">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 md:mb-20 reveal">
            <span className="top-title mb-3">Why Choose Subham?</span>
            <h2 className="text-[28px] sm:text-[36px] md:text-[52px] text-brand-earth mt-3 leading-tight">
              Sustainable Luxury. Uncompromised Quality.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {[
              { h: "Lower Maintenance", b: "Built to last with natural materials that age gracefully, reducing long-term upkeep costs." },
              { h: "Healthier Living", b: "Zero hazardous chemicals and breathable walls ensure a living space that actively supports your wellness." },
              { h: "Unique Aesthetics", b: "Artisanal finishes and traditional wisdom meet modern design for a home unlike any other." },
              { h: "Future Ready", b: "A sustainable investment that appreciates in value while fulfilling your environmental responsibility." },
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
                className="w-full h-[380px] lg:h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
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
            alt="Subham project at golden hour"
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
            { l: "Call", d: "+91 84385 30234 (WhatsApp)\nMon–Fri · 10:00 AM – 4:00 PM" },
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