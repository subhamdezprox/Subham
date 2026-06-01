import React, { useState, useEffect, useRef } from "react";

// About page images
import aboutHero from "../assests/about/shubham-about-sustainable-facade-hero.png";
import polaroidBackground from "../assests/about/shubham-architectural-interior-background.png";
import polaroidImage1 from "../assests/about/shubham-interior-detail-polaroid-01.png";
import polaroidImage2 from "../assests/about/shubham-natural-material-polaroid-02.png";
import founderImage from "../assests/about/shubham-founder-sanchana-subbarayan.png";
import associateArchitect from "../assests/about/shubham-associate-architect-team.png";
import paariStudio from "../assests/about/shubham-paari-design-studio-partner.png";
import constructionSpecialists from "../assests/about/shubham-construction-specialists-team.png";
import constructionSite from "../assests/about/shubham-construction-site-natural-materials.png";
import sustainableDetail from "../assests/about/shubham-sustainable-architecture-detail.png";
import naturalMaterialPalette from "../assests/about/shubham-natural-material-palette-vision.png";
import sustainableConstructionProject from "../assests/about/shubham-sustainable-construction-project.png";

// Partner logos
import paariLogo from "../assests/Paari logo jpg.jpg.jpeg";
import abaLogo from "../assests/ABALOGO (1).png";

// Client work images — field proof
import fieldConstruction from "../assests/images/shubham-construction-progress-01.jpeg";
import fieldCraftsmanship from "../assests/images/shubham-craftsmanship-detail-01.jpeg";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

// ---------- Reveal hook ----------
function useReveal(threshold = 0.12) {
  const ref = useRef<any>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
}

function Reveal({ children, delay = 0, as: Tag = "div" as any, style = {}, className = "", ...rest }: any) {
  const [ref, shown] = useReveal();
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.8s ${EASE}, transform 0.8s ${EASE}`,
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

// ---------- Hover-zoom image ----------
function ZoomImage({ src, alt, height, style = {}, wrapperStyle = {}, radius = 3, className = "", priority = false }: any) {
  const [hover, setHover] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={className}
      style={{ overflow: "hidden", borderRadius: radius, position: "relative", ...wrapperStyle }}
    >
      {/* Shimmer skeleton while loading */}
      {!loaded && (
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            height: height || "100%",
            background: "linear-gradient(90deg, #f0e4c4 0%, #fdf8ed 45%, #f0e4c4 100%)",
            backgroundSize: "200% 100%",
            animation: "img-shimmer 1.6s ease-in-out infinite",
          }}
        />
      )}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority ? ({ fetchpriority: "high" } as any) : {})}
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: height || "100%",
          objectFit: "cover",
          display: "block",
          opacity: loaded ? 1 : 0,
          transform: hover ? "scale(1.06)" : "scale(1)",
          transition: "transform 0.75s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.55s cubic-bezier(0.22,1,0.36,1)",
          ...style,
        }}
      />
    </div>
  );
}

// ---------- Count up ----------
function CountUp({ target, suffix = "" }: any) {
  const ref = useRef<any>(null);
  const [val, setVal] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const start = performance.now();
            const dur = 1800;
            const tick = (t: number) => {
              const p = Math.min(1, (t - start) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              setVal(Math.round(eased * target));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  );
}

function PolaroidSection({ parallaxY, isMobile }: any) {
  const ref = useRef<any>(null);
  const [trig, setTrig] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setTrig(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const imgSize = isMobile
    ? { width: 150, height: 120 }
    : { width: 240, height: 200 };

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden h-[420px] md:h-[560px]"
    >
      <img
        src={polaroidBackground}
        alt="Immersive architectural interior"
        loading="lazy"
        decoding="async"
        className="absolute left-0 lg:top-[-60%] top-[-120%] w-full h-[116%] md:h-[122%] object-cover will-change-transform"
        style={{
          transform: `translateY(${parallaxY * 0.4}px)`,
        }}
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#1F1F1F]/55 via-[#1F1F1F]/35 to-[#1F1F1F]/10 pointer-events-none"
      />
      <div
        className="absolute bottom-12 right-[4%] md:right-[8%] z-10 flex items-end"
      >
        <div
          className={`bg-white p-3 pb-9 shadow-[0_18px_40px_rgba(31,31,31,0.35)] z-[2] -mr-10 transition-all duration-900 ease-out delay-200 ${trig ? "opacity-100 rotate-[-6deg] translate-y-0" : "opacity-0 rotate-[-6deg] translate-y-5"}`}
        >
          <img
            src={polaroidImage1}
            alt="Interior architectural detail"
            loading="lazy"
            decoding="async"
            className="object-cover block"
            style={imgSize}
          />
        </div>
        <div
          className={`bg-white p-3 pb-9 shadow-[0_18px_40px_rgba(31,31,31,0.35)] z-[1] transition-all duration-900 ease-out delay-[450ms] ${trig ? "opacity-100 rotate-[4deg] translate-y-0" : "opacity-0 rotate-[4deg] translate-y-5"}`}
        >
          <img
            src={polaroidImage2}
            alt="Natural material texture detail"
            loading="lazy"
            decoding="async"
            className="object-cover block"
            style={imgSize}
          />
        </div>
      </div>
    </section>
  );
}

export default function About() {
  const [mounted, setMounted] = useState(false);
  const [parallaxY, setParallaxY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1280
  );
  const ghostRef = useRef<any>(null);

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 1024;

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 30);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setParallaxY(window.scrollY * 0.25);
      if (ghostRef.current) {
        ghostRef.current.style.transform = `translateY(${window.scrollY * 0.2}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const stats = [
    { target: 50, suffix: "+", label: "Projects Completed" },
    { target: 12, suffix: "+", label: "Service Offerings" },
    { target: 100, suffix: "%", label: "Natural Materials" },
  ];

  const team = [
    {
      img: founderImage,
      alt: "Sanchana Subbarayan – Founder & Civil Engineer, Subham Consulting Chennai",
      name: "Sanchana Subbarayan",
      role: "Founder & Civil Engineer",
      bio: "With a civil engineering degree and a passion for sustainable construction, Sanchana aims to make practical, beautiful, and accessible sustainable living a reality for everyone in India. Her vision combines traditional building wisdom with modern engineering to create spaces that heal both people and the planet.",
      isLogo: false,
      linkedin: "https://www.linkedin.com/in/subhamconsulting/",
    },
    {
      img: paariLogo,
      alt: "Paari Design Studio – Sustainable Architecture Partner Chennai",
      name: "Paari Design Studio",
      role: "Collaborating Design Practice",
      bio: "Paari Design Studio is a sustainable architecture and design practice rooted in natural materials, climate-responsive spaces, and timeless Indian heritage — blending earth, craft, and contemporary living.",
      isLogo: true,
      linkedin: null,
    },
    {
      img: abaLogo,
      alt: "ABA Architects – Architectural Lead Partner",
      name: "ABA Architects",
      role: "Architectural Lead",
      bio: "ABA Architects brings innovative design solutions that seamlessly integrate sustainable practices with contemporary aesthetics, specialising in eco-friendly residential and commercial architecture.",
      isLogo: true,
      linkedin: null,
    },
  ];

  return (
    <div className="bg-brand-bg text-brand-dark font-sans">
      <header className="relative w-full h-screen overflow-hidden">
        <img
          src={aboutHero}
          alt="Sustainable architectural facade at golden hour"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover animate-[heroload_1.8s_ease-out_forwards]"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#1F1F1F]/60 via-[#1F1F1F]/35 to-[#1F1F1F]/15" />
        <div className="absolute left-[6%] bottom-[12%] md:bottom-[20%] z-10 max-w-[700px] right-[6%] md:right-auto">
          <div className={`h-[1px] w-20 bg-white/60 mb-6 transition-opacity duration-900 delay-200 ${mounted ? "opacity-100" : "opacity-0"}`} />
          <h1 className="font-serif text-[44px] md:text-[62px] lg:text-[78px] font-normal text-white leading-none m-0">
            <span className="block overflow-hidden">
              <span className={`inline-block transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] delay-300 ${mounted ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}>
                Reviving Wisdom
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className={`inline-block italic transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] delay-520 ${mounted ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}>
                Engineering Change
              </span>
            </span>
          </h1>
        </div>
      </header>

      <main>
        <section className="bg-brand-bg py-10 md:py-15 lg:py-20 overflow-hidden relative">
          <p
            // ref={ghostRef}
            className="font-serif text-[32px] md:text-[48px] lg:text-[72px] italic font-normal text-brand-earth text-center leading-[1.2] w-full m-0 px-10 will-change-transform whitespace-normal lg:whitespace-nowrap"
          >
            Crafting future ready spaces that breathe.
          </p>
        </section>

        <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-10 md:py-15 lg:py-[100px] pt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-[60px] items-start">
            <Reveal>
              <ZoomImage
                src={constructionSite}
                alt="Construction site with natural materials"
                height={isMobile ? 360 : 560}
              />
            </Reveal>
            <div className="flex flex-col gap-8">
              <Reveal delay={100}>
                <ZoomImage
                  src={sustainableDetail}
                  alt="Sustainable architecture detail"
                  height={240}
                  wrapperStyle={{ marginTop: isMobile ? 0 : 60 }}
                />
              </Reveal>
              <Reveal delay={220} className="mt-2">
                <span className="font-serif text-[80px] text-brand-earth-light leading-none block mb-3 h-10">“</span>
                <p className="font-serif italic text-brand-earth text-[24px] md:text-[30px] leading-[1.55] max-w-[440px] m-0">
                  Our vision is to redefine the future of construction through sustainable innovation, conscious design, and environmentally responsible building practices.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-12 md:py-15 lg:py-20 border-t border-brand-earth/10 border-b border-brand-earth/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100} className="text-center">
                <span className="font-serif text-[48px] md:text-[62px] text-brand-earth block mb-2 leading-none">
                  <CountUp target={s.target} suffix={s.suffix} />
                </span>
                <span className="top-title">
                  {s.label}
                </span>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── FROM THE FIELD ─────────────────────────────────────────────── */}
        <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-12 md:py-16">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 mb-8">
            <div>
              <span className="top-title mb-2">From the Field</span>
              <p className="font-serif italic text-brand-earth text-[20px] md:text-[26px] leading-tight mt-1 m-0">
                Construction in progress — real work, real materials.
              </p>
            </div>
            <span className="font-sans text-[11px] uppercase tracking-[0.14em] text-brand-earth/60">
              50+ projects completed
            </span>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Reveal>
              <div className="group relative overflow-hidden rounded-[6px] shadow-[0_16px_40px_rgba(31,31,31,0.08)]">
                <img
                  src={fieldConstruction}
                  alt="Shubham construction in progress sustainable site work"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[240px] md:h-[320px] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="top-title text-[10px] !mb-0 opacity-80">Site Work</span>
                  <h4 className="text-white text-[16px] font-serif leading-tight mt-1">Construction in Progress</h4>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="group relative overflow-hidden rounded-[6px] shadow-[0_16px_40px_rgba(31,31,31,0.08)]">
                <img
                  src={fieldCraftsmanship}
                  alt="Shubham craftsmanship detail natural material sustainable construction"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-[240px] md:h-[320px] object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="top-title text-[10px] !mb-0 opacity-80">Craftsmanship</span>
                  <h4 className="text-white text-[16px] font-serif leading-tight mt-1">Natural Material Detail</h4>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            <div>
              <Reveal as="p" className="top-title mb-8 mt-0">
                About · Our Story · Foundation
              </Reveal>
              <Reveal as="p" delay={80} className="top-title mb-4 mt-0">
                Our Story
              </Reveal>
              <Reveal as="h3" delay={160} className="font-serif text-[30px] md:text-[38px] text-brand-earth leading-[1.2] mb-8 mt-0 font-normal">
                Building for wellness and nature.
              </Reveal>
              {[
                "Sanchana Subbarayan, Founder of Shubham Consulting and Construction, is a Civil Engineering graduate driven by a vision to create healthier and more sustainable living environments. Her journey began with a simple realization: modern buildings not only impact the environment through resource consumption, but also affect human health through chemical emissions from conventional materials.",
                "Believing that the spaces we live in should support both human well-being and nature, Sanchana explored how traditional architecture could be merged with modern engineering principles. Her goal was to make sustainable building practices practical, affordable, and relevant for contemporary lifestyles.",
                "Today, Shubham Consulting and Construction is dedicated to reviving traditional building wisdom through modern and environmentally responsible practices. We create thoughtfully designed spaces using natural materials and climate-conscious design that remain connected to nature and local context.",
              ].map((p, i) => (
                <Reveal as="p" key={i} delay={240 + i * 100} className="mb-6">
                  {p}
                </Reveal>
              ))}
            </div>
            <Reveal delay={220} className="self-center">
              <div className="max-w-[540px] ml-auto">
                <ZoomImage
                  src={naturalMaterialPalette}
                  alt="Natural architecture and sustainable material palette"
                  wrapperStyle={{ aspectRatio: "4 / 5" }}
                  className="shadow-[0_28px_60px_rgba(31,31,31,0.12)]"
                />
                <div className="mt-5 pt-5 border-t border-brand-earth/15">
                  <span className="top-title mb-2">Sustainable Vision</span>
                  <p className="m-0">
                    A visual reflection of Shubham&apos;s approach: grounded materials, soft light, and spaces that stay connected to nature.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <PolaroidSection
          parallaxY={parallaxY}
          isMobile={isMobile}
        />

        <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24 pt-16 md:pt-20 lg:pt-24">
          <div className="text-center mb-16 md:mb-[72px]">
            <Reveal as="h2" className="font-serif text-[36px] md:text-[52px] italic text-brand-earth leading-[1.2] font-normal m-0">
              The People Behind
            </Reveal>
            <Reveal as="h2" delay={100} className="font-serif text-[36px] md:text-[52px] italic text-brand-earth leading-[1.2] font-normal m-0">
              The Purpose.
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[60px] items-start">
            <Reveal>
              <ZoomImage
                src={sustainableConstructionProject}
                alt="Sustainable construction project"
                height={300}
                className="mb-6"
              />
              <h3 className="font-serif text-[24px] text-brand-earth leading-[1.3] font-normal m-0">
                Commitment to Lasting Value.
              </h3>
              <p className="mt-3">
                Shubham is a sustainable consulting and construction company working across India. Our expertise includes farmhouses, residences, institutional spaces, schools, and eco-development projects. We balance functionality, long-term value, and environmental responsibility in every site we develop.
              </p>
              <div className="mt-8 pt-8 border-t border-brand-earth/10">
                <span className="top-title mb-2">Future Horizons</span>
                <p className="m-0 italic">
                  Looking ahead, Shubham is preparing to bring its sustainable engineering expertise to public infrastructure and government projects, aiming to create climate-responsive civic spaces for the next generation.
                </p>
              </div>
            </Reveal>

            <div className="mt-0 md:mt-20">
              {[
                {
                  year: "Knowledge",
                  head: "Workshops & Programs",
                  body:
                    "Alongside construction, we conduct workshops and knowledge programs to promote sustainable living and alternative building practices.",
                },
                {
                  year: "Strategy",
                  head: "Construction Consulting",
                  body:
                    "End-to-end services covering project planning, sustainable design guidance, material selection, and structural systems.",
                },
                {
                  year: "Future",
                  head: "Conscious Innovation",
                  body:
                    "Committed to creating environmentally conscious, climate-responsive, and naturally connected spaces for future generations.",
                },
              ].map((m, i) => (
                <Reveal
                  key={m.head}
                  delay={i * 120}
                  className={`py-6 ${i < 2 ? "border-b border-brand-earth/12" : ""}`}
                >
                  <span className="top-title mb-1.5">
                    {m.year}
                  </span>
                  <h4 className="font-serif text-[22px] text-brand-earth mt-1.5 mb-0 font-normal">
                    {m.head}
                  </h4>
                  <p className="mt-2 mb-0">
                    {m.body}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-bg px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24">
          <div className="text-center mb-16 md:mb-[72px]">
            <Reveal as="p" className="top-title mb-3 mt-0">
              The Team
            </Reveal>
            <Reveal as="h2" delay={100} className="font-serif text-[36px] md:text-[48px] text-brand-earth font-normal m-0">
              Experts in Sustainable Design.
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-4 max-w-[520px] mx-auto text-[14px] leading-[1.8] text-brand-text/70">
                Subham Consulting brings together leading civil engineers, architects, and sustainable building specialists to deliver exceptional green construction in Chennai.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 120}>
                <div className="group bg-white rounded-[20px] shadow-[0_4px_28px_rgba(31,31,31,0.06)] hover:shadow-[0_20px_60px_rgba(31,31,31,0.13)] hover:-translate-y-2 transition-all duration-500 overflow-hidden h-full flex flex-col">

                  {/* Image area */}
                  <div className="relative pt-10 pb-6 px-8 flex justify-center bg-brand-parchment/40">
                    <div
                      className={`w-36 h-36 rounded-full overflow-hidden ring-4 ring-brand-earth/10 group-hover:ring-brand-earth/30 transition-all duration-500 shadow-[0_8px_24px_rgba(31,31,31,0.10)] ${member.isLogo ? "bg-white p-5 flex items-center justify-center" : ""}`}
                    >
                      <img
                        src={member.img}
                        alt={member.alt}
                        loading="lazy"
                        decoding="async"
                        className={`transition-transform duration-700 group-hover:scale-105 ${member.isLogo ? "w-full h-full object-contain" : "w-full h-full object-cover"}`}
                      />
                    </div>
                    {/* Decorative line */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-[2px] bg-brand-earth/20" />
                  </div>

                  {/* Info area */}
                  <div className="px-8 pb-8 pt-6 text-center flex flex-col flex-1">
                    <h3 className="font-serif text-[22px] md:text-[24px] text-brand-earth font-normal leading-tight m-0">
                      {member.name}
                    </h3>
                    <p className="top-title text-[10px] mt-2 mb-0">
                      {member.role}
                    </p>
                    <div className="w-8 h-[1px] bg-brand-earth/20 mx-auto my-5" />
                    <p className="text-[14px] leading-[1.75] text-brand-text/75 flex-1 m-0">
                      {member.bio}
                    </p>

                    {/* Social link */}
                    {member.linkedin && (
                      <div className="mt-6 pt-5 border-t border-brand-earth/10">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on LinkedIn`}
                          className="inline-flex items-center gap-2 text-brand-earth/60 hover:text-brand-earth transition-colors duration-300 font-sans text-[11px] uppercase tracking-[0.14em]"
                        >
                          <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                          Connect on LinkedIn
                        </a>
                      </div>
                    )}
                  </div>

                </div>
              </Reveal>
            ))}
          </div>

          {/* Social CTA */}
          <Reveal className="mt-16 text-center">
            <p className="text-[14px] text-brand-text/60 mb-5">Follow our sustainable construction journey</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.linkedin.com/in/subhamconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-brand-earth/70 hover:text-brand-earth transition-colors duration-300 font-sans text-[11px] uppercase tracking-[0.14em] border border-brand-earth/20 hover:border-brand-earth px-5 py-2.5 rounded-full"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/subhamconsulting/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-brand-earth/70 hover:text-brand-earth transition-colors duration-300 font-sans text-[11px] uppercase tracking-[0.14em] border border-brand-earth/20 hover:border-brand-earth px-5 py-2.5 rounded-full"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                Instagram
              </a>
            </div>
          </Reveal>
        </section>
      </main>
      <style>{`
        @keyframes heroload { from { transform: scale(1.05); } to { transform: scale(1); } }
      `}</style>
    </div>
  );
}
