import React, { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import HexagonBackground from './HexagonBackground';
import CustomCursor from './CustomCursor';

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
    </svg>
  );
}

const theme = {
  bg: '#F7F3EE',
  dark: '#2C1F14',
  earth: '#8B5E3C',
  earthLight: '#C4956A',
  muted: '#9C8B7A',
  text: '#4A3B28',
  parchment: '#EDE3D2',
  white: '#FFFFFF',
};

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/subhamconsulting/',
    Icon: LinkedinIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/subhamconsulting/',
    Icon: InstagramIcon,
  },
];

export default function Layout() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on navigation
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="shubham bg-brand-bg min-h-screen flex flex-col relative overflow-hidden">
      <CustomCursor />
      <HexagonBackground />
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full h-20 z-[1000] flex items-center justify-between px-10 transition-all duration-400 ${
          scrolled 
            ? " bg-white backdrop-blur-[14px] shadow-[0_1px_0_rgba(139,94,60,0.1)] text-brand-dark" 
            : " text-white"
        }`}
      >
        <Link to="/" className="flex items-center">
          <img 
            src="/Subam Logo.png" 
            alt="Shubham Logo" 
            className={`h-12 md:h-14 w-auto object-contain transition-all ${!scrolled ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`font-sans text-[12px] uppercase tracking-[0.1em] text-inherit transition-opacity ${
                  location.pathname === item.href ? "opacity-100" : "opacity-70"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className={`w-10 h-10 rounded-full flex flex-col items-center justify-center gap-[3px] transition-colors ${
              scrolled ? "bg-brand-dark/10" : "bg-white/15"
            }`}
          >
            <span className="block w-3.5 h-[1.5px] bg-current" />
            <span className="block w-3.5 h-[1.5px] bg-current" />
          </button>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-brand-dark z-[2000] flex flex-col items-center justify-center gap-10 transition-opacity duration-400 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-8 right-12 bg-none border-none text-brand-bg text-[24px] cursor-pointer"
        >
          ✕
        </button>
        {navItems.map((item) => (
          <Link
            key={item.href}
            to={item.href}
            className={`font-serif italic text-[44px] md:text-[52px] text-brand-bg transition-all duration-500 ${
              menuOpen ? "translate-x-0 opacity-100" : "translate-x-[30px] opacity-0"
            }`}
          >
            {item.label}
          </Link>
        ))}
        {/* Social links in mobile menu */}
        <div className="flex items-center gap-6 mt-4">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow us on ${label}`}
              className="flex items-center gap-2 text-white/50 hover:text-brand-earth-light transition-colors duration-300"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[11px] uppercase tracking-[0.12em]">{label}</span>
            </a>
          ))}
        </div>
      </div>

      {/* CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* FOOTER */}
      <footer className="bg-brand-dark px-10 md:px-20 py-20 pb-12 text-brand-bg/85">
        <div className="text-center mb-16">
          <h2 className="font-serif text-[36px] md:text-[52px] text-white mb-3">Connect with Us</h2>
          <p className="text-[14px] text-white/50 font-light">
            Stay informed on sustainable architecture, material innovation, and projects that redefine responsible building.
          </p>
          <div className="flex max-w-[480px] mx-auto mt-8 border border-white/25 rounded-[4px] overflow-hidden">
            <input
              placeholder="Email address"
              className="flex-1 bg-transparent border-none px-5 py-3.5 text-white outline-none font-sans"
            />
            <button className="bg-brand-earth border-none px-5 py-3.5 cursor-pointer text-white transition-colors hover:bg-brand-earth/90">
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-5 border-t border-white/10 pt-10 mb-8">
          {navItems.map((item) => (
            <Link key={item.href} to={item.href} className="text-[12px] uppercase tracking-[0.08em] text-white/50 transition-colors hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-8 mb-10">
          {SOCIAL_LINKS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Subham Consulting on ${label}`}
              className="flex items-center gap-2.5 text-white/40 hover:text-brand-earth-light transition-colors duration-300 group"
            >
              <Icon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[11px] uppercase tracking-[0.12em]">{label}</span>
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-7 gap-4 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <img src="/Subam Logo.png" alt="Shubham" className="h-8 w-auto brightness-0 invert opacity-50" />
            <div className="flex flex-col">
              <span className="text-[12px] text-white/30 font-light">
                © {new Date().getFullYear()} Subham Consulting & Construction. All rights reserved.
              </span>
              <span className="text-[10px] text-white/20 font-light mt-1 uppercase tracking-widest">
                Developed by <a href="https://www.dezprox.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-earth transition-colors">dezprox</a>
              </span>
            </div>
          </div>
          <span className="font-serif italic text-[14px] text-brand-earth-light/50">
            Sustainable Luxury, Naturally Built.
          </span>
        </div>
      </footer>
    </div>
  );
}
