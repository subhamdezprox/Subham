import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import clientProject1 from "../assests/images/shubham-sustainable-residence-project-01.jpeg";
import clientProject2 from "../assests/images/shubham-sustainable-residence-project-02.jpeg";
import clientProject3 from "../assests/images/shubham-ohaa-institutional-school-project.jpeg";
import clientDetail1  from "../assests/images/shubham-natural-material-detail-01.jpeg";
import clientDetail2  from "../assests/images/shubham-natural-material-detail-02.jpeg";
import clientDetail3  from "../assests/images/shubham-craftsmanship-detail-01.jpeg";
import heroImg        from "../assests/images/shubham-golden-hour-project-exterior.jpeg";

// Delhi project images
import delhiImg1 from "../assests/images/Delhi/shubham-delhi-residence-01.jpeg";
import delhiImg2 from "../assests/images/Delhi/shubham-delhi-residence-02.jpeg";
import delhiImg3 from "../assests/images/Delhi/shubham-delhi-residence-03.jpeg";

// UttarKhand project images
import ukImg1 from "../assests/images/UttarKhand/shubham-uttarkhand-project-01.jpeg";
import ukImg2 from "../assests/images/UttarKhand/shubham-uttarkhand-project-02.jpeg";
import ukImg3 from "../assests/images/UttarKhand/shubham-uttarkhand-project-03.jpeg";
import ukImg4 from "../assests/images/UttarKhand/shubham-uttarkhand-project-04.jpeg";
import ukImg5 from "../assests/images/UttarKhand/shubham-uttarkhand-project-05.jpeg";
import ukImg6 from "../assests/images/UttarKhand/shubham-uttarkhand-project-06.jpeg";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

const projectStories = [
  {
    id: "sustainable-villa-collection",
    title: "Sustainable Villa Collection",
    location: "Chennai, Tamil Nadu",
    description:
      "A premium residence built with rammed earth, passive cooling, and handcrafted finishes for a year-round comfortable home.",
    images: [
      // { src: clientProject1, alt: "Exterior view of sustainable villa construction in Chennai" },
      // { src: clientDetail1, alt: "Natural material craftsmanship detail in sustainable villa" },
      { src: clientDetail3, alt: "Natural material craftsmanship detail in sustainable villa" },
      { src: clientDetail2, alt: "Construction progress of eco-friendly residential project" },
      { src: ukImg6, alt: "Exterior atmosphere of sustainable residence project" },
    ],
  },
  {
    id: "ohaa-green-school-campus",
    title: "OHAA Green School Campus",
    location: "Bangalore, Karnataka",
    description:
      "A thoughtful institutional building designed for learning, community, and sustainable performance in a school environment.",
    images: [
      { src: clientProject3, alt: "OHAA institutional school project exterior view" },
      { src: clientDetail1, alt: "Craftsmanship and structural detail at institutional building" },
      { src: clientProject1, alt: "Natural material detail at OHAA school" },
      { src: clientProject2, alt: "OHAA school campus with natural finishes" },
    ],
  },
  {
    id: "delhi-residence-project",
    title: "Delhi Residence Project",
    location: "Delhi",
    description:
      "A contemporary city home elevated through natural materials, calm interiors, and sustainable construction methods.",
    images: [
      { src: delhiImg1, alt: "Delhi residence sustainable construction – Shubham Consulting" },
      { src: delhiImg2, alt: "Delhi residence interior and material detail" },
      { src: delhiImg3, alt: "Delhi residence exterior and facade view" },
    ],
  },
  {
    id: "uttarkhand-project",
    title: "Uttarkhand Project",
    location: "Uttarakhand",
    description:
      "A nature-integrated build in the Himalayas, combining traditional mountain vernacular with modern sustainable engineering and natural materials.",
    images: [
      { src: ukImg1, alt: "Uttarkhand sustainable project exterior – Shubham Consulting" },
      { src: ukImg2, alt: "Uttarkhand project construction detail and natural materials" },
      { src: ukImg3, alt: "Uttarkhand project site and landscape view" },
      { src: ukImg4, alt: "Uttarkhand project structural and material close-up" },
      { src: ukImg5, alt: "Uttarkhand project progress and craftsmanship" },
      { src: ukImg6, alt: "Uttarkhand project finished view and atmosphere" },
    ],
  },
];

function Reveal({ children, delay = 0, as: Tag = "div" as any, className = "", style = {}, ...rest }: any) {
  const ref = useRef<any>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.75s ${EASE}, transform 0.75s ${EASE}`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default function Projects() {
  const [heroLoaded, setHeroLoaded] = useState({ l1: false, l2: false });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroLoaded((s) => ({ ...s, l1: true })), 300);
    const t2 = setTimeout(() => setHeroLoaded((s) => ({ ...s, l2: true })), 520);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const heroParallax = scrollY * 0.15;

  return (
    <div className="bg-brand-bg text-brand-dark font-sans overflow-hidden">
      <header className="relative w-full h-screen overflow-hidden">
        <img
          src={heroImg}
          alt="Sustainable construction projects portfolio – Subham Consulting Chennai"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="absolute inset-0 w-full h-[115%] object-cover will-change-transform"
          style={{ transform: `translateY(${heroParallax}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#141414]/75 via-[#1F1F1F]/35 to-[#1F1F1F]/15" />
        <div className="absolute inset-x-0 bottom-[16%] mx-auto max-w-[860px] px-6 md:px-12 lg:px-20 text-center">
          {/* <div className="inline-flex items-center justify-center gap-3 mb-5">
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/70">Portfolio</span>
            <span className="h-px w-14 bg-white/25" />
            <span className="text-[11px] uppercase tracking-[0.28em] text-white/70">Real Projects Only</span>
          </div> */}
          <h1 className="font-serif text-[40px] sm:text-[52px] md:text-[62px] lg:text-[72px] text-white leading-tight tracking-[-0.04em]">
            <span className={`block transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${heroLoaded.l1 ? "translate-y-0 opacity-100" : "translate-y-[40px] opacity-0"}`}>
              Real project stories, told through crafted photography.
            </span>
          </h1>
          <p className="mt-6 text-[15px] md:text-[17px] text-white/75 max-w-[750px] mx-auto leading-[1.9]">
            <span className={`inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${heroLoaded.l2 ? "translate-y-0 opacity-100" : "translate-y-[24px] opacity-0"}`}>
              Explore premium architecture and construction case studies, where every section is built around real client work, strong materiality, and a refined visual narrative.
            </span>
          </p>
        </div>
      </header>

      <main className="px-6 md:px-12 lg:px-20 pb-20">
        <section className="py-10 md:py-14">
          <div className="max-w-[1120px] mx-auto">
            <div className="mb-10 max-w-[640px]">
              <span className="top-title mb-2 block">Project Storytelling</span>
              <h2 className="font-serif text-[34px] md:text-[48px] text-brand-earth leading-tight">
                Compact, polished case studies with richer imagery and tighter spacing.
              </h2>
              <p className="mt-5 text-[15px] leading-[1.8] text-brand-dark/80">
                A streamlined structure for every client showcase: concise text, grouped visuals, and a more premium gallery rhythm.
              </p>
            </div>

            <div className="grid gap-8">
              {projectStories.map((project, index) => (
                <Reveal key={project.id} className="rounded-[28px] border border-brand-earth/15 bg-white/5 p-6 md:p-8 shadow-[0_22px_60px_rgba(31,31,31,0.08)]">
                  <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] items-center">
                    <div className="grid gap-4">
                      <div className="overflow-hidden rounded-[24px] bg-white/5 shadow-[0_24px_50px_rgba(31,31,31,0.1)]">
                        <img
                          src={project.images[0].src}
                          alt={project.images[0].alt}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-[320px] object-cover transition-transform duration-700 hover:scale-[1.03]"
                        />
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {project.images.slice(1, 3).map((image) => (
                          <div key={image.alt} className="overflow-hidden rounded-[24px] bg-white/5 shadow-[0_20px_45px_rgba(31,31,31,0.08)]">
                            <img
                              src={image.src}
                              alt={image.alt}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-[180px] object-cover transition-transform duration-700 hover:scale-[1.03]"
                            />
                          </div>
                        ))}
                      </div>
                      {project.images.length > 3 && (
                        <div className={`grid gap-3 ${project.images.slice(3).length === 1 ? '' : project.images.slice(3).length === 2 ? 'sm:grid-cols-2' : project.images.slice(3).length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-3'}`}>
                          {project.images.slice(3).map((image) => (
                            <div key={image.alt} className="overflow-hidden rounded-[24px] bg-white/5 shadow-[0_20px_45px_rgba(31,31,31,0.08)]">
                              <img
                                src={image.src}
                                alt={image.alt}
                                loading="lazy"
                                decoding="async"
                                className="w-full h-[160px] object-cover transition-transform duration-700 hover:scale-[1.03]"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col justify-center items-center gap-6">
                      <div className="space-y-4 text-center">
                        <div>
                          <span className="top-title text-[10px] tracking-[0.28em] uppercase text-brand-earth/80">{project.location}</span>
                        </div>
                        <h3 className="font-serif text-[30px] md:text-[36px] text-brand-earth leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-[15px] leading-[1.75] text-brand-dark/80">
                          {project.description}
                        </p>
                      </div>


                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-[1120px] mx-auto rounded-[28px] border border-brand-earth/15 bg-brand-parchment p-8 md:p-10 text-center shadow-[0_30px_80px_rgba(31,31,31,0.08)]">
          <h2 className="font-serif text-[30px] md:text-[40px] text-brand-earth leading-tight mb-5">
            Want your next project featured here?
          </h2>
          <p className="max-w-[760px] mx-auto text-[15px] md:text-[16px] leading-[1.85] text-brand-dark/80 mb-8">
            Share your brief and we’ll craft a refined case study that highlights sustainability, material quality, and the story behind your build.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brand-earth text-white font-sans text-[12px] uppercase tracking-[0.2em] px-10 py-4 rounded-[2px] hover:bg-brand-earth-light transition-all duration-300"
          >
            Start a conversation
            <span>→</span>
          </Link>
        </section>
      </main>
    </div>
  );
}




// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// import clientProject1 from "../assests/images/shubham-sustainable-residence-project-01.jpeg";
// import clientProject2 from "../assests/images/shubham-sustainable-residence-project-02.jpeg";
// import clientProject3 from "../assests/images/shubham-ohaa-institutional-school-project.jpeg";
// import clientProject4 from "../assests/images/shubham-delhi-residential-construction.jpeg";
// import clientDetail1  from "../assests/images/shubham-natural-material-detail-01.jpeg";
// import clientDetail2  from "../assests/images/shubham-natural-material-detail-02.jpeg";
// import clientDetail3  from "../assests/images/shubham-craftsmanship-detail-01.jpeg";
// import clientDetail4  from "../assests/images/shubham-sustainable-finish-detail-01.jpeg";
// import clientDetail5  from "../assests/images/shubham-construction-progress-01.jpeg";
// import clientDetail6  from "../assests/images/shubham-site-construction-work-01.jpeg";
// import clientDetail7  from "../assests/images/shubham-project-exterior-view-01.jpeg";
// import heroImg        from "../assests/images/shubham-golden-hour-project-exterior.jpeg";

// const projectStories = [
//   {
//     id: "sustainable-villa-collection",
//     number: "01",
//     title: "Sustainable Villa Collection",
//     location: "Chennai, Tamil Nadu",
//     year: "2023",
//     category: "Residential",
//     description:
//       "A premium residence built with rammed earth, passive cooling, and handcrafted finishes for a year-round comfortable home.",
//     tags: ["Rammed Earth", "Passive Cooling", "Natural Materials"],
//     images: [
//       { src: clientProject1, alt: "Exterior view of sustainable villa construction in Chennai" },
//       { src: clientDetail1, alt: "Natural material craftsmanship detail in sustainable villa" },
//       { src: clientDetail5, alt: "Construction progress of eco-friendly residential project" },
//       { src: clientProject2, alt: "Exterior atmosphere of sustainable residence project" },
//     ],
//   },
//   {
//     id: "ohaa-green-school-campus",
//     number: "02",
//     title: "OHAA Green School Campus",
//     location: "Bangalore, Karnataka",
//     year: "2023",
//     category: "Institutional",
//     description:
//       "A thoughtful institutional building designed for learning, community, and sustainable performance in a school environment.",
//     tags: ["Green Building", "Community Design", "Rainwater Harvesting"],
//     images: [
//       { src: clientProject3, alt: "OHAA institutional school project exterior view" },
//       { src: clientDetail2, alt: "Rainwater harvesting and natural material detail at OHAA school" },
//       { src: clientDetail3, alt: "Craftsmanship and structural detail at institutional building" },
//       { src: clientProject4, alt: "Institutional campus exterior with natural finishes" },
//     ],
//   },
//   {
//     id: "delhi-residence-transformation",
//     number: "03",
//     title: "Delhi Residence Transformation",
//     location: "Delhi",
//     year: "2024",
//     category: "Residential",
//     description:
//       "A contemporary city home elevated through natural materials, calm interiors, and sustainable construction methods.",
//     tags: ["Lime Finish", "Urban Living", "Sustainable Construction"],
//     images: [
//       { src: clientProject4, alt: "Delhi residence sustainable exterior photograph" },
//       { src: clientDetail4, alt: "Natural lime finish and sustainable surface treatment" },
//       { src: clientDetail6, alt: "Site work and construction progress for Delhi residence" },
//       { src: clientDetail7, alt: "Finished exterior facade of sustainable residence" },
//     ],
//   },
// ];

// function useInView(threshold = 0.12) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const el = ref.current;
//     if (!el) return;
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       setInView(true);
//       return;
//     }
//     const io = new IntersectionObserver(([e]) => {
//       if (e.isIntersecting) { setInView(true); io.disconnect(); }
//     }, { threshold });
//     io.observe(el);
//     return () => io.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// function FadeUp({ children, delay = 0, className = "", style = {} }: any) {
//   const { ref, inView } = useInView();
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateY(0)" : "translateY(32px)",
//         transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
//         ...style,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// function SlideIn({ children, delay = 0, from = "left", className = "" }: any) {
//   const { ref, inView } = useInView();
//   const tx = from === "left" ? "-40px" : "40px";
//   return (
//     <div
//       ref={ref}
//       className={className}
//       style={{
//         opacity: inView ? 1 : 0,
//         transform: inView ? "translateX(0)" : `translateX(${tx})`,
//         transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
//       }}
//     >
//       {children}
//     </div>
//   );
// }

// export default function Projects() {
//   const [scrollY, setScrollY] = useState(0);
//   const [heroReady, setHeroReady] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setHeroReady(true), 100);
//     return () => clearTimeout(t);
//   }, []);

//   useEffect(() => {
//     const onScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", onScroll, { passive: true });
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <div style={{ background: "#0D0C0A", color: "#F0EDE6", fontFamily: "'EB Garamond', 'Cormorant Garamond', Georgia, serif", minHeight: "100vh", overflowX: "hidden" }}>

//       {/* ── HERO ── */}
//       <header style={{ position: "relative", height: "100svh", overflow: "hidden" }}>
//         <img
//           src={heroImg}
//           alt="Portfolio of sustainable architecture projects"
//           loading="eager"
//           decoding="sync"
//           style={{
//             position: "absolute", inset: 0,
//             width: "100%", height: "115%",
//             objectFit: "cover",
//             transform: `translateY(${scrollY * 0.18}px)`,
//             willChange: "transform",
//             filter: "brightness(0.45) saturate(0.8)",
//           }}
//         />

//         {/* Grain texture overlay */}
//         <div style={{
//           position: "absolute", inset: 0,
//           backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
//           opacity: 0.6,
//           mixBlendMode: "overlay",
//           pointerEvents: "none",
//         }} />

//         {/* Bottom gradient */}
//         <div style={{
//           position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
//           background: "linear-gradient(to top, #0D0C0A 0%, transparent 100%)",
//         }} />

//         {/* Hero content */}
//         <div style={{
//           position: "absolute", inset: 0,
//           display: "flex", flexDirection: "column",
//           justifyContent: "flex-end",
//           padding: "clamp(32px,6vw,80px)",
//           paddingBottom: "clamp(48px,8vw,100px)",
//         }}>

//           {/* Top bar */}
//           <div style={{
//             position: "absolute", top: "clamp(32px,4vw,56px)", left: "clamp(32px,6vw,80px)", right: "clamp(32px,6vw,80px)",
//             display: "flex", justifyContent: "space-between", alignItems: "center",
//             fontFamily: "'DM Mono', 'Courier New', monospace",
//             fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
//             color: "rgba(240,237,230,0.5)",
//           }}>
//             <span>Subham Consulting</span>
//             <span>{projectStories.length} Projects</span>
//           </div>

//           <div style={{
//             opacity: heroReady ? 1 : 0,
//             transform: heroReady ? "none" : "translateY(24px)",
//             transition: "opacity 1.1s cubic-bezier(0.16,1,0.3,1), transform 1.1s cubic-bezier(0.16,1,0.3,1)",
//           }}>
//             <p style={{
//               fontFamily: "'DM Mono', 'Courier New', monospace",
//               fontSize: "11px", letterSpacing: "0.24em", textTransform: "uppercase",
//               color: "rgba(240,237,230,0.5)", marginBottom: "20px",
//             }}>
//               Selected Works — Architecture & Construction
//             </p>

//             <h1 style={{
//               fontFamily: "'EB Garamond', Georgia, serif",
//               fontSize: "clamp(44px, 7.5vw, 110px)",
//               fontWeight: 400,
//               lineHeight: 1.0,
//               letterSpacing: "-0.02em",
//               margin: 0,
//               maxWidth: "900px",
//             }}>
//               <span style={{ display: "block", color: "#F0EDE6" }}>Projects built</span>
//               <span style={{ display: "block", color: "rgba(240,237,230,0.45)", fontStyle: "italic" }}>with intention.</span>
//             </h1>
//           </div>

//           {/* Scroll cue */}
//           <div style={{
//             position: "absolute", right: "clamp(32px,6vw,80px)", bottom: "clamp(48px,8vw,100px)",
//             display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
//             opacity: heroReady ? 0.45 : 0,
//             transition: "opacity 1.4s ease 0.5s",
//           }}>
//             <div style={{
//               width: "1px", height: "60px",
//               background: "linear-gradient(to bottom, transparent, #F0EDE6)",
//               animation: "scrollPulse 2s ease-in-out infinite",
//             }} />
//             <span style={{
//               fontFamily: "'DM Mono', monospace", fontSize: "10px",
//               letterSpacing: "0.18em", textTransform: "uppercase",
//               writingMode: "vertical-rl",
//             }}>Scroll</span>
//           </div>
//         </div>
//       </header>

//       {/* ── INTRO STRIP ── */}
//       <section style={{ padding: "80px clamp(32px,6vw,80px)", borderBottom: "1px solid rgba(240,237,230,0.08)" }}>
//         <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "end" }}>
//           <FadeUp>
//             <p style={{
//               fontFamily: "'DM Mono', monospace", fontSize: "11px",
//               letterSpacing: "0.22em", textTransform: "uppercase",
//               color: "rgba(240,237,230,0.4)", marginBottom: "20px",
//             }}>Studio Ethos</p>
//             <h2 style={{
//               fontSize: "clamp(28px,3.5vw,46px)", fontWeight: 400,
//               lineHeight: 1.15, letterSpacing: "-0.02em",
//               color: "#F0EDE6", margin: 0,
//             }}>
//               Every project is a<br />
//               <em style={{ color: "rgba(240,237,230,0.5)" }}>material conversation.</em>
//             </h2>
//           </FadeUp>
//           <FadeUp delay={150}>
//             <p style={{
//               fontFamily: "'DM Sans', system-ui, sans-serif",
//               fontSize: "15px", lineHeight: 1.9,
//               color: "rgba(240,237,230,0.6)", margin: 0,
//             }}>
//               Each case below documents the full arc of a project — from site constraints to material selection, from construction detail to finished atmosphere. We photograph and narrate work that deserves to be seen clearly.
//             </p>
//           </FadeUp>
//         </div>
//       </section>

//       {/* ── PROJECT STORIES ── */}
//       <main style={{ padding: "0 clamp(32px,6vw,80px)", paddingBottom: "120px" }}>
//         <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

//           {projectStories.map((project, index) => (
//             <article
//               key={project.id}
//               style={{
//                 paddingTop: "100px",
//                 paddingBottom: "100px",
//                 borderBottom: index < projectStories.length - 1 ? "1px solid rgba(240,237,230,0.08)" : "none",
//               }}
//             >
//               {/* Project number + meta bar */}
//               <FadeUp>
//                 <div style={{
//                   display: "flex", alignItems: "center", gap: "24px",
//                   marginBottom: "48px",
//                   fontFamily: "'DM Mono', monospace",
//                   fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
//                   color: "rgba(240,237,230,0.35)",
//                 }}>
//                   <span style={{ fontSize: "13px", color: "rgba(240,237,230,0.18)", fontWeight: 400 }}>
//                     {project.number}
//                   </span>
//                   <span style={{ width: "40px", height: "1px", background: "rgba(240,237,230,0.15)" }} />
//                   <span>{project.category}</span>
//                   <span>·</span>
//                   <span>{project.year}</span>
//                   <span>·</span>
//                   <span>{project.location}</span>
//                 </div>
//               </FadeUp>

//               {/* Title */}
//               <FadeUp delay={80}>
//                 <h3 style={{
//                   fontSize: "clamp(38px,5.5vw,80px)",
//                   fontWeight: 400, fontStyle: "italic",
//                   lineHeight: 1.05, letterSpacing: "-0.025em",
//                   color: "#F0EDE6", margin: "0 0 48px 0",
//                   maxWidth: "750px",
//                 }}>
//                   {project.title}
//                 </h3>
//               </FadeUp>

//               {/* Main grid: images left, content right (alternates) */}
//               <div style={{
//                 display: "grid",
//                 gridTemplateColumns: index % 2 === 0 ? "1.05fr 0.95fr" : "0.95fr 1.05fr",
//                 gap: "clamp(24px,4vw,56px)",
//                 alignItems: "start",
//               }}>

//                 {/* IMAGE BLOCK */}
//                 <div style={{ order: index % 2 === 0 ? 0 : 1 }}>
//                   <SlideIn from={index % 2 === 0 ? "left" : "right"}>
//                     {/* Primary large image */}
//                     <div style={{
//                       overflow: "hidden",
//                       borderRadius: "4px",
//                       aspectRatio: "4/3",
//                       marginBottom: "12px",
//                     }}>
//                       <img
//                         src={project.images[0].src}
//                         alt={project.images[0].alt}
//                         loading="lazy"
//                         decoding="async"
//                         style={{
//                           width: "100%", height: "100%",
//                           objectFit: "cover",
//                           transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
//                         }}
//                         onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
//                         onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                       />
//                     </div>

//                     {/* Two small images side by side */}
//                     <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
//                       {project.images.slice(1, 3).map((img, i) => (
//                         <div key={i} style={{
//                           overflow: "hidden", borderRadius: "4px", aspectRatio: "3/2",
//                         }}>
//                           <img
//                             src={img.src}
//                             alt={img.alt}
//                             loading="lazy"
//                             decoding="async"
//                             style={{
//                               width: "100%", height: "100%", objectFit: "cover",
//                               transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1)",
//                             }}
//                             onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
//                             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   </SlideIn>
//                 </div>

//                 {/* CONTENT BLOCK */}
//                 <div style={{
//                   order: index % 2 === 0 ? 1 : 0,
//                   display: "flex", flexDirection: "column", justifyContent: "center",
//                   paddingTop: "24px",
//                   paddingLeft: index % 2 === 0 ? "clamp(0px,2vw,32px)" : 0,
//                   paddingRight: index % 2 === 0 ? 0 : "clamp(0px,2vw,32px)",
//                 }}>
//                   <SlideIn from={index % 2 === 0 ? "right" : "left"} delay={120}>
//                     {/* Tags */}
//                     <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
//                       {project.tags.map((tag) => (
//                         <span key={tag} style={{
//                           fontFamily: "'DM Mono', monospace",
//                           fontSize: "10px", letterSpacing: "0.16em", textTransform: "uppercase",
//                           color: "rgba(240,237,230,0.45)",
//                           border: "1px solid rgba(240,237,230,0.12)",
//                           borderRadius: "2px",
//                           padding: "5px 10px",
//                         }}>{tag}</span>
//                       ))}
//                     </div>

//                     {/* Description */}
//                     <p style={{
//                       fontFamily: "'DM Sans', system-ui, sans-serif",
//                       fontSize: "clamp(15px,1.2vw,17px)", lineHeight: 1.85,
//                       color: "rgba(240,237,230,0.65)",
//                       margin: "0 0 40px 0",
//                     }}>
//                       {project.description}
//                     </p>

//                     {/* Fourth image — accent */}
//                     <div style={{
//                       overflow: "hidden", borderRadius: "4px",
//                       aspectRatio: "16/9", marginBottom: "40px",
//                     }}>
//                       <img
//                         src={project.images[3].src}
//                         alt={project.images[3].alt}
//                         loading="lazy"
//                         decoding="async"
//                         style={{
//                           width: "100%", height: "100%", objectFit: "cover",
//                           filter: "brightness(0.85) saturate(0.9)",
//                           transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1), filter 0.6s ease",
//                         }}
//                         onMouseEnter={(e) => {
//                           (e.currentTarget.style.transform = "scale(1.04)");
//                           (e.currentTarget.style.filter = "brightness(1) saturate(1)");
//                         }}
//                         onMouseLeave={(e) => {
//                           (e.currentTarget.style.transform = "scale(1)");
//                           (e.currentTarget.style.filter = "brightness(0.85) saturate(0.9)");
//                         }}
//                       />
//                     </div>

//                     {/* CTA */}
//                     <Link
//                       to="/contact"
//                       style={{
//                         display: "inline-flex", alignItems: "center", gap: "12px",
//                         fontFamily: "'DM Mono', monospace",
//                         fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
//                         color: "#F0EDE6",
//                         textDecoration: "none",
//                         paddingBottom: "6px",
//                         borderBottom: "1px solid rgba(240,237,230,0.3)",
//                         transition: "border-color 0.3s ease, gap 0.3s ease",
//                       }}
//                       onMouseEnter={(e) => {
//                         (e.currentTarget.style.borderBottomColor = "#F0EDE6");
//                         (e.currentTarget.style.gap = "18px");
//                       }}
//                       onMouseLeave={(e) => {
//                         (e.currentTarget.style.borderBottomColor = "rgba(240,237,230,0.3)");
//                         (e.currentTarget.style.gap = "12px");
//                       }}
//                     >
//                       Discuss this project
//                       <span style={{ fontSize: "16px" }}>→</span>
//                     </Link>
//                   </SlideIn>
//                 </div>

//               </div>
//             </article>
//           ))}
//         </div>
//       </main>

//       {/* ── CLOSING CTA ── */}
//       <FadeUp>
//         <section style={{
//           margin: "0 clamp(32px,6vw,80px) 80px",
//           padding: "clamp(56px,7vw,96px) clamp(32px,5vw,72px)",
//           border: "1px solid rgba(240,237,230,0.1)",
//           borderRadius: "4px",
//           display: "grid",
//           gridTemplateColumns: "1fr auto",
//           alignItems: "center",
//           gap: "48px",
//           background: "rgba(240,237,230,0.02)",
//         }}>
//           <div>
//             <p style={{
//               fontFamily: "'DM Mono', monospace", fontSize: "11px",
//               letterSpacing: "0.22em", textTransform: "uppercase",
//               color: "rgba(240,237,230,0.35)", marginBottom: "16px",
//             }}>Next step</p>
//             <h2 style={{
//               fontSize: "clamp(26px,3.2vw,44px)", fontWeight: 400,
//               lineHeight: 1.15, letterSpacing: "-0.02em",
//               color: "#F0EDE6", margin: "0 0 16px 0",
//             }}>
//               Ready to build something<br />
//               <em style={{ color: "rgba(240,237,230,0.45)" }}>worth documenting?</em>
//             </h2>
//             <p style={{
//               fontFamily: "'DM Sans', system-ui, sans-serif",
//               fontSize: "15px", lineHeight: 1.8,
//               color: "rgba(240,237,230,0.5)", margin: 0,
//               maxWidth: "560px",
//             }}>
//               Share your brief with us. We'll craft a premium case study that captures the sustainable intent, material story and architectural craft of your build.
//             </p>
//           </div>

//           <Link
//             to="/contact"
//             style={{
//               display: "inline-flex", alignItems: "center", gap: "12px",
//               fontFamily: "'DM Mono', monospace",
//               fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase",
//               color: "#0D0C0A",
//               background: "#F0EDE6",
//               padding: "18px 32px",
//               borderRadius: "2px",
//               textDecoration: "none",
//               whiteSpace: "nowrap",
//               transition: "background 0.3s ease, gap 0.3s ease",
//             }}
//             onMouseEnter={(e) => {
//               (e.currentTarget.style.background = "#E8E2D8");
//               (e.currentTarget.style.gap = "18px");
//             }}
//             onMouseLeave={(e) => {
//               (e.currentTarget.style.background = "#F0EDE6");
//               (e.currentTarget.style.gap = "12px");
//             }}
//           >
//             Start a conversation
//             <span style={{ fontSize: "15px" }}>→</span>
//           </Link>
//         </section>
//       </FadeUp>

//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Mono:wght@400;500&family=DM+Sans:wght@300;400;500&display=swap');

//         @keyframes scrollPulse {
//           0%, 100% { opacity: 0.4; transform: scaleY(1); }
//           50% { opacity: 0.8; transform: scaleY(1.1); }
//         }

//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         @media (max-width: 768px) {
//           article > div[style*="grid-template-columns"] {
//             display: flex !important;
//             flex-direction: column !important;
//           }
//           section[style*="grid-template-columns: 1fr auto"] {
//             display: flex !important;
//             flex-direction: column !important;
//           }
//           section[style*="grid-template-columns: 1fr 1fr"] {
//             display: flex !important;
//             flex-direction: column !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }