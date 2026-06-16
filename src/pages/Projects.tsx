import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PageSEO from "../components/PageSEO";

import clientProject1 from "../assests/images/subham-sustainable-residence-project-01.jpeg";
import clientProject2 from "../assests/images/subham-sustainable-residence-project-02.jpeg";
import clientProject3 from "../assests/images/subham-ohaa-institutional-school-project.jpeg";
import clientDetail1  from "../assests/images/subham-natural-material-detail-01.jpeg";
import clientDetail2  from "../assests/images/subham-natural-material-detail-02.jpeg";
import clientDetail3  from "../assests/images/subham-craftsmanship-detail-01.jpeg";
import heroImg        from "../assests/subham-golden-hour-project-exterior.png";

// Delhi project images
import delhiImg1 from "../assests/images/Delhi/subham-delhi-residence-01.jpeg";
import delhiImg2 from "../assests/images/Delhi/subham-delhi-residence-02.jpeg";
import delhiImg3 from "../assests/images/Delhi/subham-delhi-residence-03.jpeg";

// UttarKhand project images
import ukImg1 from "../assests/images/UttarKhand/subham-uttarkhand-project-01.jpeg";
import ukImg2 from "../assests/images/UttarKhand/subham-uttarkhand-project-02.jpeg";
import ukImg3 from "../assests/images/UttarKhand/subham-uttarkhand-project-03.jpeg";
import ukImg4 from "../assests/images/UttarKhand/subham-uttarkhand-project-04.jpeg";
import ukImg5 from "../assests/images/UttarKhand/subham-uttarkhand-project-05.jpeg";
import ukImg6 from "../assests/images/UttarKhand/subham-uttarkhand-project-06.jpeg";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

// const projectStories = [
//   {
//     id: "sustainable-villa-collection",
//     title: "Sustainable Villa Collection",
//     location: "Chennai, Tamil Nadu",
//     description:
//       "A premium residence built with rammed earth, passive cooling, and handcrafted finishes for a year-round comfortable home.",
//     images: [
//       // { src: clientProject1, alt: "Exterior view of sustainable villa construction in Chennai" },
//       // { src: clientDetail1, alt: "Natural material craftsmanship detail in sustainable villa" },
//       { src: clientDetail3, alt: "Natural material craftsmanship detail in sustainable villa" },
//       { src: clientDetail2, alt: "Construction progress of eco-friendly residential project" },
//       { src: ukImg6, alt: "Exterior atmosphere of sustainable residence project" },
//     ],
//   },
//   {
//     id: "ohaa-green-school-campus",
//     title: "OHAA Green School Campus",
//     location: "Bangalore, Karnataka",
//     description:
//       "A thoughtful institutional building designed for learning, community, and sustainable performance in a school environment.",
//     images: [
//       { src: clientProject3, alt: "OHAA institutional school project exterior view" },
//       { src: clientDetail1, alt: "Craftsmanship and structural detail at institutional building" },
//       { src: clientProject1, alt: "Natural material detail at OHAA school" },
//       { src: clientProject2, alt: "OHAA school campus with natural finishes" },
//     ],
//   },
//   {
//     id: "delhi-residence-project",
//     title: "Delhi Residence Project",
//     location: "Delhi",
//     description:
//       "A contemporary city home elevated through natural materials, calm interiors, and sustainable construction methods.",
//     images: [
//       { src: delhiImg1, alt: "Delhi residence sustainable construction – Subham Consulting" },
//       { src: delhiImg2, alt: "Delhi residence interior and material detail" },
//       { src: delhiImg3, alt: "Delhi residence exterior and facade view" },
//     ],
//   },
//   {
//     id: "uttarkhand-project",
//     title: "Uttarkhand Project",
//     location: "Uttarakhand",
//     description:
//       "A nature-integrated build in the Himalayas, combining traditional mountain vernacular with modern sustainable engineering and natural materials.",
//     images: [
//       { src: ukImg1, alt: "Uttarkhand sustainable project exterior – Subham Consulting" },
//       { src: ukImg2, alt: "Uttarkhand project construction detail and natural materials" },
//       { src: ukImg3, alt: "Uttarkhand project site and landscape view" },
//       { src: ukImg4, alt: "Uttarkhand project structural and material close-up" },
//       { src: ukImg5, alt: "Uttarkhand project progress and craftsmanship" },
//       { src: ukImg6, alt: "Uttarkhand project finished view and atmosphere" },
//     ],
//   },
// ];


const projectStories = [
  // {
  //   id: "sustainable-villa-collection",
  //   title: "Sustainable Villa Collection",
  //   location: "Chennai, Tamil Nadu",
  //   year: "Tirunelveli Documentation Series",
  //   description:
  //     "A journey through the hidden sustainable heritage of Tirunelveli revealed that nearly seventy percent of people in these regions still live in natural buildings — homes that are healthy, climate-responsive, and remarkably strong. We discovered a G+3 mud structure over 150 years old, still housing a large joint family comfortably, standing quietly in the heart of Tirunelveli city. What began as documentation walk became an emotional learning experience — proving that sustainability is not a trend, but knowledge that has existed for generations.",
  //   images: [
  //     { src: clientDetail3, alt: "Natural material craftsmanship detail in sustainable villa" },
  //     { src: clientDetail2, alt: "Construction progress of eco-friendly residential project" },
  //     { src: ukImg6, alt: "Exterior atmosphere of sustainable residence project" },
  //   ],
  // },
  {
    id: "ohaa-green-school-campus",
    title: "OHAA Green School Campus",
    location: "Namakkal, Tamil Nadu",
    description:
      "OHAA Waldorf School, founded by Mrs. Bharathi Parrivallal, is a pioneering sustainable educational campus in Namakkal. Spread across 18,000 sqft with a project value of ₹3.75 crore, the campus includes 8 classrooms, a music room, sensory play areas, sports facilities, and administrative spaces. Designed around the five natural elements, the school provides a nurturing environment that encourages creativity, holistic learning, and a deeper connection with nature.\n\nConstructed by Subham Consulting and Construction under the leadership of Managing Director Mr. Cibi Pandiyan, the project incorporates mud blocks, natural stone flooring, Tadelakt plaster, filler slab roofing, recycled wood, rainwater harvesting, and solar energy systems. Completed within 9 months, the campus operates with naturally ventilated classrooms that remain comfortable without air conditioning, demonstrating the practicality and effectiveness of sustainable, eco-friendly construction.",
    images: [
      { src: clientProject3, alt: "OHAA green school campus sustainable institutional architecture Namakkal - eco-friendly educational building" },
      { src: clientDetail1, alt: "Natural craftsmanship detail mud blocks and Tadelakt plaster - OHAA sustainable school construction" },
      { src: clientProject1, alt: "Eco-friendly school campus natural stone flooring and sustainable material detail" },
      { src: clientProject2, alt: "OHAA school campus with natural finishes and passive ventilation system" },
    ],
  },
  {
    id: "delhi-residence-project",
    title: "Building Sustainability in the Harsh Climate of Delhi",
    location: "Najafgarh, Delhi",
    description:
      "Located in Najafgarh, Delhi, this sustainable farmhouse project was developed in a green zone village area where climate and material sourcing became major challenges during construction. The client approached us with a vision of creating a farmhouse that feels connected to nature while responding to Delhi’s harsh and unpredictable weather conditions.\n\nDesigned by architect Lalit, the 3,800 sq.ft farmhouse carries a Bali-inspired architectural style blended with traditional village aesthetics. The project features traditional mud vault walls, bamboo elements, natural roofing concepts, and green integration that together create a calm and breathable living environment.\n\nExecuting a sustainable building in Delhi was not easy. From sourcing the right materials to adapting to extreme climate conditions, every stage required exploration and experimentation. But through continuous learning, local adaptation, and proper execution, the project was successfully completed within the planned timeline and budget.\n\nThis project became a strong example that sustainability is not limited by location. With the right mindset, research, and understanding of local materials, sustainable architecture can be created anywhere — even in a highly polluted and climatically challenging city like Delhi.",
    images: [
      { src: delhiImg1, alt: "Delhi Najafgarh sustainable farmhouse with mud vault walls and natural materials - eco-friendly residential architecture" },
      { src: delhiImg2, alt: "Delhi residence interior design with bamboo elements and natural breathable finishes" },
      { src: delhiImg3, alt: "Delhi farmhouse sustainable exterior with green integration and passive cooling design" },
    ],
  },
  {
    id: "uttarkhand-project",
    title: "Building with Nature in the Mountains of Uttarakhand",
    location: "Uttarakhand",
    description:
      "Nestled in the peaceful landscapes of Uttarakhand, this project was designed with a simple vision — to create a space that feels deeply connected to nature while respecting the beauty and sensitivity of the mountains. Unlike urban construction, building in the hills demands patience, understanding, and a strong connection with the environment around it.\n\nWorking in Uttarakhand came with many challenges. Material transportation through hilly roads, unpredictable climate conditions, and execution in remote areas required constant coordination and adaptability. But these challenges also became part of the learning experience that shaped the project beautifully.\n\nToday, the project stands quietly within the landscape, reflecting simplicity, sustainability, and a deep respect for nature and local craftsmanship.",
    images: [
      { src: ukImg1, alt: "Uttarakhand mountain residence sustainable architecture with natural building materials - Himalayan eco-home" },
      { src: ukImg2, alt: "Uttarakhand mountain project construction detail with traditional natural materials and craftsmanship" },
      { src: ukImg3, alt: "Uttarakhand sustainable mountain project site landscape and eco-friendly development" },
      { src: ukImg4, alt: "Uttarakhand project structural detail and natural material close-up - mountain construction" },
      { src: ukImg5, alt: "Uttarakhand mountain project progress and local artisanal craftsmanship detail" },
      { src: ukImg6, alt: "Uttarakhand mountain project completed residence with natural atmosphere and landscape integration" },
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

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "url": "https://www.subhamconsulting.com/projects",
    "name": "Projects | Sustainable Construction Portfolio | Subham Consulting Chennai",
    "description": "Explore Subham Consulting's portfolio — sustainable villas, OHAA school campus, Delhi residence, and Uttarakhand eco-builds.",
    "hasPart": projectStories.map((p) => ({
      "@type": "CreativeWork",
      "name": p.title,
      "description": p.description,
      "locationCreated": { "@type": "Place", "name": p.location }
    })),
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.subhamconsulting.com/" },
        { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://www.subhamconsulting.com/projects" }
      ]
    }
  };

  return (
    <div className="bg-brand-bg text-brand-dark font-sans overflow-hidden">
      <PageSEO
        title="Sustainable Construction Portfolio | Subham Consulting Projects | Rammed Earth Homes"
        description="Subham Consulting portfolio: Bangalore & Coimbatore eco-homes, Delhi sustainable architecture, Uttarakhand projects, & Chennai vernacular designs by Sanchana Subbarayan."
        path="/projects"
        structuredData={projectsSchema}
      />
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
                        <p className="text-[15px] text-justify leading-[1.75] text-brand-dark/80">
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


