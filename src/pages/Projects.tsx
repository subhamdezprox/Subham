import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

import clientProject1 from "../assests/images/shubham-sustainable-residence-project-01.jpeg";
import clientProject2 from "../assests/images/shubham-sustainable-residence-project-02.jpeg";
import clientProject3 from "../assests/images/shubham-ohaa-institutional-school-project.jpeg";
import clientProject4 from "../assests/images/shubham-delhi-residential-construction.jpeg";
import clientDetail1  from "../assests/images/shubham-natural-material-detail-01.jpeg";
import clientDetail2  from "../assests/images/shubham-natural-material-detail-02.jpeg";
import clientDetail3  from "../assests/images/shubham-craftsmanship-detail-01.jpeg";
import clientDetail4  from "../assests/images/shubham-sustainable-finish-detail-01.jpeg";
import clientDetail5  from "../assests/images/shubham-construction-progress-01.jpeg";
import clientDetail6  from "../assests/images/shubham-site-construction-work-01.jpeg";
import clientDetail7  from "../assests/images/shubham-project-exterior-view-01.jpeg";
import heroImg        from "../assests/images/shubham-golden-hour-project-exterior.jpeg";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

function Reveal({ children, delay = 0, as: Tag = "div" as any, className = "", style = {}, ...rest }: any) {
  const ref = useRef<any>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setShown(true); return; }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setShown(true); io.disconnect(); } },
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

const CATEGORIES = ["All", "Residential", "Institutional", "Construction Details"] as const;
type Category = "All" | "Residential" | "Institutional" | "Construction Details";

interface Project {
  id: string;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
  location: string;
  type: string;
  category: "Residential" | "Institutional" | "Construction Details";
  year: string;
  featured: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "sustainable-villa-construction-chennai",
    img: clientProject1,
    alt: "Sustainable Villa Construction Chennai – Subham Consulting rammed earth home",
    title: "Sustainable Villa Construction",
    subtitle: "Rammed earth walls with passive cooling design and natural ventilation",
    location: "Chennai, Tamil Nadu",
    type: "Residential",
    category: "Residential",
    year: "2024",
    featured: true,
  },
  {
    id: "eco-friendly-residential-project-chennai",
    img: clientProject2,
    alt: "Eco-Friendly Residential Project Chennai – sustainable exterior construction",
    title: "Eco-Friendly Residential Project",
    subtitle: "Natural material exterior with contemporary sustainable aesthetics",
    location: "Chennai, Tamil Nadu",
    type: "Residential",
    category: "Residential",
    year: "2024",
    featured: false,
  },
  {
    id: "ohaa-green-institutional-school-chennai",
    img: clientProject3,
    alt: "OHAA institutional school sustainable construction Chennai – green building",
    title: "OHAA Green School",
    subtitle: "Sustainable institutional architecture for education in Chennai",
    location: "Chennai, Tamil Nadu",
    type: "Institutional",
    category: "Institutional",
    year: "2023",
    featured: true,
  },
  {
    id: "modern-passive-cooling-home-chennai",
    img: clientDetail5,
    alt: "Modern passive cooling home construction Chennai – sustainable building progress",
    title: "Modern Passive Cooling Home",
    subtitle: "Climate-responsive construction with natural cooling systems",
    location: "Chennai, Tamil Nadu",
    type: "Residential",
    category: "Residential",
    year: "2024",
    featured: true,
  },
  {
    id: "delhi-sustainable-residence",
    img: clientProject4,
    alt: "Delhi sustainable residence construction – Subham Consulting eco-friendly home",
    title: "Delhi Sustainable Residence",
    subtitle: "Eco-conscious residential project with natural building materials",
    location: "Delhi",
    type: "Residential",
    category: "Residential",
    year: "2023",
    featured: false,
  },
  {
    id: "natural-material-craftsmanship-chennai",
    img: clientDetail1,
    alt: "Natural material craftsmanship detail – sustainable construction Chennai",
    title: "Natural Material Craftsmanship",
    subtitle: "Artisanal earth and stone finishes by skilled craftsmen",
    location: "Chennai, Tamil Nadu",
    type: "Construction Detail",
    category: "Construction Details",
    year: "2024",
    featured: false,
  },
  {
    id: "sustainable-material-detail-work",
    img: clientDetail2,
    alt: "Sustainable material detail work – eco-friendly construction Chennai",
    title: "Sustainable Material Detail",
    subtitle: "Precision craft with locally sourced eco-friendly materials",
    location: "Chennai, Tamil Nadu",
    type: "Construction Detail",
    category: "Construction Details",
    year: "2024",
    featured: false,
  },
  {
    id: "green-building-craftsmanship-chennai",
    img: clientDetail3,
    alt: "Green building craftsmanship construction detail – Subham Consulting Chennai",
    title: "Green Building Craftsmanship",
    subtitle: "Expert construction detail for sustainable structural systems",
    location: "Chennai, Tamil Nadu",
    type: "Construction Detail",
    category: "Construction Details",
    year: "2024",
    featured: false,
  },
  {
    id: "sustainable-finish-quality-chennai",
    img: clientDetail4,
    alt: "Sustainable finish quality construction detail Chennai – lime plaster natural",
    title: "Sustainable Surface Finish",
    subtitle: "High-quality natural lime and clay surface finishing",
    location: "Chennai, Tamil Nadu",
    type: "Construction Detail",
    category: "Construction Details",
    year: "2023",
    featured: false,
  },
  {
    id: "eco-construction-site-work-chennai",
    img: clientDetail6,
    alt: "Eco construction site work Chennai – sustainable building process",
    title: "Eco Construction Site Work",
    subtitle: "Sustainable building process using natural materials",
    location: "Chennai, Tamil Nadu",
    type: "Site Work",
    category: "Construction Details",
    year: "2023",
    featured: false,
  },
  {
    id: "completed-project-exterior-view",
    img: clientDetail7,
    alt: "Completed sustainable project exterior view Chennai – green construction",
    title: "Completed Project Exterior",
    subtitle: "Finished sustainable residence exterior with natural facade",
    location: "Chennai, Tamil Nadu",
    type: "Residential",
    category: "Residential",
    year: "2023",
    featured: false,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [heroLoaded, setHeroLoaded] = useState({ l1: false, l2: false });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroLoaded((s) => ({ ...s, l1: true })), 300);
    const t2 = setTimeout(() => setHeroLoaded((s) => ({ ...s, l2: true })), 520);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const filtered = activeCategory === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  const heroParallax = scrollY * 0.15;

  const counts = {
    All: PROJECTS.length,
    Residential: PROJECTS.filter((p) => p.category === "Residential").length,
    Institutional: PROJECTS.filter((p) => p.category === "Institutional").length,
    "Construction Details": PROJECTS.filter((p) => p.category === "Construction Details").length,
  };

  return (
    <div className="bg-brand-bg text-brand-dark font-sans">

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <header className="relative w-full h-screen overflow-hidden">
        <img
          src={heroImg}
          alt="Sustainable construction projects portfolio – Subham Consulting Chennai"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="absolute inset-0 w-full h-[115%] object-cover animate-[heroload_1.8s_ease-out_forwards] will-change-transform"
          style={{ transform: `translateY(${heroParallax}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F1F1F]/65 via-[#1F1F1F]/35 to-[#1F1F1F]/15" />
        <div className="absolute left-6 md:left-12 lg:left-20 bottom-[12%] md:bottom-[20%] z-10 max-w-[700px]">
          <div className="h-[1px] w-[60px] bg-white/60 mb-6" />
          <h1 className="font-serif text-[44px] md:text-[64px] lg:text-[82px] font-normal text-white leading-none m-0">
            <span className="block overflow-hidden">
              <span className={`inline-block transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${heroLoaded.l1 ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}>
                Our Projects
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className={`inline-block italic transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${heroLoaded.l2 ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}>
                in Chennai &amp; Beyond
              </span>
            </span>
          </h1>
          <div className="h-[1px] w-[120px] bg-white/60 mt-7 ml-auto" />
        </div>
      </header>

      <main>

        {/* ── INTRO ───────────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-[100px]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <Reveal>
              <span className="top-title mb-3">Client Work · Portfolio</span>
              <h2 className="font-serif text-[32px] md:text-[48px] text-brand-earth font-normal mt-3 mb-6 leading-[1.15]">
                Sustainable Construction Projects in Chennai
              </h2>
              <p className="max-w-[480px] leading-[1.8]">
                Each project we undertake is a commitment to sustainable construction, eco-friendly materials, and passive design principles. From private residences to institutional buildings, our work demonstrates that green building and beautiful design are inseparable.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:pt-16">
              <div className="grid grid-cols-3 gap-6 border-t border-brand-earth/15 pt-8">
                {[
                  { n: "50+", l: "Projects Completed" },
                  { n: "3+", l: "Cities Across India" },
                  { n: "100%", l: "Natural Materials" },
                ].map((s) => (
                  <div key={s.l} className="text-center">
                    <span className="font-serif text-[36px] md:text-[44px] text-brand-earth block leading-none mb-2">{s.n}</span>
                    <span className="top-title text-[10px]">{s.l}</span>
                  </div>
                ))}
              </div>
              <p className="mt-8 font-serif italic text-brand-earth text-[18px] md:text-[22px] leading-[1.55]">
                "Sustainable builders in Chennai crafting spaces that breathe, heal, and endure."
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── CATEGORY FILTER ─────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 pb-4">
          <div className="max-w-[1200px] mx-auto">
            <Reveal className="flex flex-wrap gap-3 mb-10">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border font-sans text-[11px] uppercase tracking-[0.14em] transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-brand-earth text-white border-brand-earth shadow-[0_4px_16px_rgba(139,94,60,0.3)]"
                      : "bg-transparent text-brand-earth border-brand-earth/30 hover:border-brand-earth hover:bg-brand-earth/5"
                  }`}
                >
                  {cat}
                  <span className={`text-[10px] tabular-nums ${activeCategory === cat ? "text-white/70" : "text-brand-earth/50"}`}>
                    {counts[cat]}
                  </span>
                </button>
              ))}
            </Reveal>
          </div>
        </section>

        {/* ── PROJECT GALLERY ──────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 pb-[80px] md:pb-[110px]">
          <div className="max-w-[1200px] mx-auto">

            {filtered.length === 0 && (
              <div className="text-center py-24">
                <p className="font-serif italic text-brand-earth text-[24px]">No projects in this category yet.</p>
              </div>
            )}

            {/* Featured project (first featured item shown large) */}
            {activeCategory === "All" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-5">
                <Reveal className="lg:col-span-7 group relative overflow-hidden rounded-[18px] shadow-[0_24px_60px_rgba(31,31,31,0.10)] cursor-pointer">
                  <img
                    src={PROJECTS[0].img}
                    alt={PROJECTS[0].alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[420px] lg:h-[560px] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/80 via-[#1F1F1F]/20 to-transparent" />
                  <div className="absolute top-5 left-5">
                    <span className="inline-block bg-brand-earth/90 text-white text-[9px] uppercase tracking-[0.18em] px-3 py-1.5 rounded-full">
                      Featured · {PROJECTS[0].year}
                    </span>
                  </div>
                  <div className="absolute bottom-8 left-8 right-8">
                    <span className="top-title text-[10px] !mb-2 opacity-80">{PROJECTS[0].type} · {PROJECTS[0].location}</span>
                    <h3 className="text-white text-[28px] md:text-[36px] font-serif leading-tight">{PROJECTS[0].title}</h3>
                    <p className="text-white/70 text-[13px] mt-2 leading-[1.6]">{PROJECTS[0].subtitle}</p>
                  </div>
                </Reveal>

                <div className="lg:col-span-5 grid grid-rows-2 gap-5">
                  {[PROJECTS[2], PROJECTS[3]].map((p, i) => (
                    <Reveal key={p.id} delay={i * 80} className="group relative overflow-hidden rounded-[18px] shadow-[0_24px_60px_rgba(31,31,31,0.08)] cursor-pointer">
                      <img
                        src={p.img}
                        alt={p.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-[200px] lg:h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/75 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-[9px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full">
                          {p.type}
                        </span>
                      </div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <span className="top-title text-[10px] !mb-1.5 opacity-80">{p.location} · {p.year}</span>
                        <h3 className="text-white text-[20px] md:text-[24px] font-serif leading-tight">{p.title}</h3>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            )}

            {/* Remaining / filtered grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {(activeCategory === "All" ? PROJECTS.slice(1).filter((_, i) => i !== 1 && i !== 2) : filtered).map((p, i) => (
                <Reveal
                  key={p.id}
                  delay={i * 60}
                  className="group relative overflow-hidden rounded-[16px] shadow-[0_18px_45px_rgba(31,31,31,0.08)] cursor-pointer"
                >
                  <img
                    src={p.img}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-[300px] md:h-[340px] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/75 via-[#1F1F1F]/10 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/15 backdrop-blur-sm text-white text-[9px] uppercase tracking-[0.16em] px-2.5 py-1 rounded-full">
                      {p.category}
                    </span>
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="top-title text-[10px] !mb-1.5 opacity-80">{p.location} · {p.year}</span>
                    <h3 className="text-white text-[18px] md:text-[22px] font-serif leading-tight">{p.title}</h3>
                    <p className="text-white/60 text-[12px] mt-1.5 leading-[1.5] line-clamp-2">{p.subtitle}</p>
                  </div>
                </Reveal>
              ))}
            </div>

          </div>
        </section>

        {/* ── KEYWORDS SECTION (SEO) ──────────────────────────────────── */}
        <section className="bg-brand-parchment px-6 md:px-12 lg:px-20 py-16 md:py-20 border-t border-brand-earth/10">
          <div className="max-w-[1200px] mx-auto">
            <Reveal className="text-center mb-14">
              <span className="top-title mb-3">Our Expertise</span>
              <h2 className="font-serif text-[28px] md:text-[40px] text-brand-earth font-normal mt-3">
                Sustainable Building Services in Chennai
              </h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { h: "Eco-Friendly Construction", b: "Sustainable building practices using natural, locally sourced materials with minimal environmental impact." },
                { h: "Passive Cooling Design", b: "Climate-responsive architecture that uses natural ventilation and thermal mass to keep interiors cool without AC." },
                { h: "Green Building Consultation", b: "End-to-end sustainable design guidance for residential, commercial, and institutional projects across Chennai." },
                { h: "Natural Material Finishes", b: "Artisanal finishes in rammed earth, lime plaster, clay walls, and stone — building that breathes and ages beautifully." },
              ].map((item, i) => (
                <Reveal key={item.h} delay={i * 80} className="border-t border-brand-earth/15 pt-6">
                  <span className="top-title text-[9px] mb-2">0{i + 1}</span>
                  <h3 className="font-serif text-[20px] text-brand-earth mt-3 mb-3 leading-tight font-normal">{item.h}</h3>
                  <p className="text-[14px] leading-[1.7]">{item.b}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────── */}
        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-[100px] text-center">
          <Reveal>
            <span className="top-title mb-4">Start Your Project</span>
            <h2 className="font-serif text-[32px] md:text-[52px] text-brand-earth font-normal mt-3 mb-6 leading-[1.2]">
              Build Something Sustainable
              <span className="italic block">in Chennai.</span>
            </h2>
            <p className="max-w-[520px] mx-auto mb-10 leading-[1.8]">
              Whether you're planning a sustainable home, green office, or eco-friendly institutional building — we'd love to collaborate. Subham Consulting brings deep expertise in sustainable construction across Chennai and beyond.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-brand-earth text-white font-sans text-[12px] uppercase tracking-[0.2em] px-10 py-5 rounded-[2px] hover:bg-brand-earth-light transition-colors duration-300"
            >
              Start a Conversation
              <span className="text-[14px]">→</span>
            </Link>
          </Reveal>
        </section>

      </main>

      <style>{`
        @keyframes heroload { from { transform: scale(1.05) translateY(0); } to { transform: scale(1) translateY(0); } }
      `}</style>
    </div>
  );
}
