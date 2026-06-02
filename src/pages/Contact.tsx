import React, { useEffect, useRef, useState } from 'react';
import { submitToWeb3Forms, validateEmail } from '../utils/web3forms';

import contactHero       from '../assests/contact/shubham-contact-studio-interior-hero.png';
import instagramImg      from '../assests/contact/shubham-contact-instagram-social-media.png';
import linkedinImg       from '../assests/contact/shubham-careers-team-working-hero.png';
import projectInquiryImg from '../assests/contact/shubham-contact-project-inquiry-documents.png';

const contacts = [
  { label: 'Visit', detail: 'No:3 Sri Griha House, 8th Avenue\nAshok Nagar, Chennai - 600083' },
  { label: 'Write', detail: 'Consultingsubham@gmail.com\nCareers.consultingsubham@gmail.com' },
  { label: 'Call', detail: '+91 84385 30234 (WhatsApp)\nMon–Fri · 10:00 AM – 4:00 PM' },
];

const reachOptions = [
  {
    title: 'Instagram',
    desc: 'Follow our journey — real project photos, material studies, and behind-the-scenes sustainable construction in Chennai.',
    image: instagramImg,
    alt: 'Subham Consulting Instagram – sustainable construction projects Chennai',
    link: 'https://www.instagram.com/subhamconsulting/'
  },
  {
    title: 'LinkedIn',
    desc: 'Connect professionally for consulting inquiries, structural analysis partnerships, and corporate eco-build collaborations.',
    image: linkedinImg,
    alt: 'Subham Consulting LinkedIn – sustainable construction experts Chennai',
    link: 'https://www.linkedin.com/in/subhamconsulting/'
  },
  {
    title: 'Project Inquiry',
    desc: 'Share your vision for a sustainable space. We respond to every inquiry with a tailored consultation plan.',
    image: projectInquiryImg,
    alt: 'Subham Consulting project inquiry – start your sustainable construction project Chennai',
  },
];

function Reveal({ children, delay = 0, as: Tag = 'div' as any, style = {}, className = '', ...rest }: any) {
  const ref = useRef<any>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVisible(true); return; }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(   
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.disconnect(); } },
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: 'opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)',
        transitionDelay: `${delay}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

export default function Contact() {
  const [scrollY, setScrollY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1280);
  const [heroLoaded, setHeroLoaded] = useState({ l1: false, l2: false, scroll: false });
  const [cardHovered, setCardHovered] = useState<any>({});
  const [rowHovered, setRowHovered] = useState<any>({});
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setHeroLoaded({ l1: true, l2: true, scroll: true });
      return;
    }
    const t1 = setTimeout(() => setHeroLoaded((s) => ({ ...s, l1: true })), 300);
    const t2 = setTimeout(() => setHeroLoaded((s) => ({ ...s, l2: true })), 520);
    const t3 = setTimeout(() => setHeroLoaded((s) => ({ ...s, scroll: true })), 900);
    return () => { [t1, t2, t3].forEach(clearTimeout); };
  }, []);

  const isMobile = windowWidth <= 768;
  const heroParallax = scrollY * 0.15;

  const onChange = (k: string) => (e: any) => {
    setForm((f) => ({ ...f, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => { const n = { ...prev }; delete n[k]; return n; });
  };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Full name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    else if (!validateEmail(form.email)) e.email = 'Enter a valid email address';
    if (!form.message.trim()) e.message = 'Message is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    if (!validate() || status === 'loading') return;
    setStatus('loading');
    const key = process.env.REACT_APP_WEB3FORMS_CONTACT_KEY ?? '';
    const result = await submitToWeb3Forms(key, {
      subject: `[Contact Inquiry] ${form.name} — Shubham Consulting`,
      from_name: form.name,
      replyto: form.email,
      'Full Name': form.name,
      'Email Address': form.email,
      'Phone Number': form.phone || 'Not provided',
      'Message': form.message,
      'Source Page': 'Contact Page — subhamconsulting.com',
    });
    if (result.ok) {
      setStatus('success');
      setForm({ name: '', email: '', phone: '', message: '' });
    } else {
      setStatus('error');
      setErrorMsg(result.message);
    }
  };

  return (
    <div className="bg-brand-bg text-brand-dark font-sans">
      {/* HERO */}
      <header className="relative w-full h-screen overflow-hidden">
        <img
          src={contactHero}
          alt="Shubham studio interior sustainable architecture contact page"
          loading="eager"
          decoding="sync"
          fetchPriority="high"
          className="absolute inset-0 w-full h-[115%] object-cover animate-[heroload_1.8s_ease-out_forwards] will-change-transform"
          style={{
            transform: `translateY(${heroParallax}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1F1F1F]/55 via-[#1F1F1F]/30 to-[#1F1F1F]/10" />
        <div className="absolute left-6 md:left-12 lg:left-20 bottom-[12%] md:bottom-[20%] z-10 max-w-[660px]">
          <div className="h-[1px] w-[60px] bg-white/60 mb-6" />
          <h1 className="font-serif text-[48px] md:text-[64px] lg:text-[84px] font-normal text-white leading-none m-0">
            <span className="block overflow-hidden">
              <span className={`inline-block transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${heroLoaded.l1 ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}>
                Let's Start a
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className={`inline-block italic transition-all duration-900 ease-[cubic-bezier(0.16,1,0.3,1)] ${heroLoaded.l2 ? "translate-y-0 opacity-100" : "translate-y-[50px] opacity-0"}`}>
                Conversation
              </span>
            </span>
          </h1>
          <div className="h-[1px] w-[120px] bg-white/60 mt-7 ml-auto" />
        </div>
        <div className={`absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10 transition-opacity duration-600 ${heroLoaded.scroll ? "opacity-100" : "opacity-0"}`}>
          <div className="w-[22px] h-[34px] border-[1.5px] border-white rounded-[12px] relative">
            <div className="absolute left-1/2 top-1.5 w-[2px] h-[5px] bg-white rounded-[2px] -translate-x-1/2 animate-[mousedot_1.8s_ease-in-out_infinite]" />
          </div>
          <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-white/70">Scroll Down</div>
        </div>
      </header>

      <main>
        {/* CONTACT INFO GRID */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-[100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
            {/* INFO */}
            <div>
              <Reveal>
                <span className="top-title mb-3">Contact</span>
                <h2 className="font-serif text-[32px] md:text-[44px] text-brand-earth mt-3 mb-6 font-normal">Get in touch with us.</h2>
                <p className="max-w-[440px] m-0">
                  Whether you have a specific project in mind, want to explore sustainable materials, or wish to consult on a structural system, we'd love to hear from you.
                </p>
              </Reveal>

              <div className="mt-16">
                {contacts.map((c, i) => (
                  <Reveal key={c.label} delay={i * 100}>
                    <div
                      className="group flex items-center justify-between py-8 border-t border-brand-earth/12 cursor-pointer transition-colors duration-200 gap-6 hover:bg-brand-earth/5"
                      onMouseEnter={() => setRowHovered({ ...rowHovered, [i]: true })}
                      onMouseLeave={() => setRowHovered({ ...rowHovered, [i]: false })}
                    >
                      <span className="font-serif italic text-[28px] text-brand-earth">{c.label}</span>
                      <span className="flex-1 text-right whitespace-pre-line">{c.detail}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* FORM */}
            <Reveal delay={200} className="bg-brand-parchment p-8 md:p-14 rounded-[2px]">
              {status === 'success' ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-brand-earth/10 text-brand-earth rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="font-serif text-[32px] text-brand-earth mb-4">Thank You</h3>
                  <p className="mb-8">Your message has been received. We will get back to you within two working days.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="font-sans text-[11px] uppercase tracking-[0.2em] text-brand-earth border-b border-brand-earth/40 pb-0.5 hover:border-brand-earth transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-8" noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="top-title mb-2">Full Name*</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={onChange('name')}
                        className={`w-full bg-transparent border-b py-2 focus:border-brand-earth outline-none transition-colors ${errors.name ? 'border-red-400' : 'border-brand-earth/30'}`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>}
                    </div>
                    <div>
                      <label className="top-title mb-2">Email Address*</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={onChange('email')}
                        className={`w-full bg-transparent border-b py-2 focus:border-brand-earth outline-none transition-colors ${errors.email ? 'border-red-400' : 'border-brand-earth/30'}`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>}
                    </div>
                  </div>
                  <div>
                    <label className="top-title mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={onChange('phone')}
                      className="w-full bg-transparent border-b border-brand-earth/30 py-2 focus:border-brand-earth outline-none transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="top-title mb-2">Message*</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={onChange('message')}
                      rows={4}
                      className={`w-full bg-transparent border-b py-2 focus:border-brand-earth outline-none transition-colors resize-none ${errors.message ? 'border-red-400' : 'border-brand-earth/30'}`}
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <span className="text-[11px] text-red-500 mt-1 block">{errors.message}</span>}
                  </div>
                  {status === 'error' && (
                    <p className="text-[12px] text-red-500 bg-red-50 px-4 py-3 rounded-[2px]">{errorMsg}</p>
                  )}
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className={`w-full bg-brand-earth text-white font-sans text-[12px] uppercase tracking-[0.2em] py-5 rounded-[2px] transition-colors duration-300 flex items-center justify-center gap-3 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-brand-earth-light'}`}
                  >
                    {status === 'loading' ? (
                      <><svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>Sending…</>
                    ) : 'Send Message'}
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </section>

        {/* MAP / LOCATION */}
        <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24 border-t border-brand-earth/10">
          <div className="text-center mb-16">
            <Reveal>
              <span className="top-title mb-3">Visit Us</span>
              <h2 className="font-serif text-[36px] md:text-[52px] text-brand-earth mt-3 font-normal">Our Location</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reachOptions.map((opt, i) => (
              <Reveal key={opt.title} delay={i * 120}>
                <a 
                  href={opt.link}
                   
                  target={opt.link ? "_blank" : undefined} 
                  rel="noreferrer"
                  className="group cursor-pointer no-underline text-inherit"
                  onMouseEnter={() => setCardHovered({ ...cardHovered, [i]: true })}
                  onMouseLeave={() => setCardHovered({ ...cardHovered, [i]: false })}
                >
                  <div className="overflow-hidden rounded-[2px] aspect-[3/4]">
                    <img src={opt.image} alt={opt.alt} loading="lazy" decoding="async" className="w-full h-full object-cover block transition-transform duration-750 ease-in-out group-hover:scale-[1.06]" />
                  </div>
                  <h3 className="font-serif text-[26px] text-brand-earth mt-5 mb-2.5 font-normal leading-tight">{opt.title}</h3>
                  <p className="m-0">{opt.desc}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* MAP — LIVE EMBED */}
        <section className="px-6 md:px-12 lg:px-20 pb-16 md:pb-24">
          <Reveal>
            <div className="relative rounded-[10px] overflow-hidden shadow-[0_32px_80px_rgba(31,31,31,0.12)] h-[420px] md:h-[520px] lg:h-[580px]">

              {/* Google Maps iframe */}
              <iframe
                src="https://maps.google.com/maps?q=Ashok+Nagar%2C+Chennai+600083%2C+Tamil+Nadu%2C+India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shubham Consulting and Construction — Ashok Nagar, Chennai"
              />

              {/* Floating address card */}
              <div className="absolute top-5 left-5 md:top-32 md:left-2 bg-white/96 backdrop-blur-sm rounded-[6px] shadow-[0_16px_48px_rgba(31,31,31,0.18)] p-5 md:p-7 max-w-[260px] md:max-w-[300px]">
                <span className="top-title mb-3">Our Studio</span>
                <h3 className="font-serif text-[20px] md:text-[24px] text-brand-earth font-normal leading-tight mt-1 mb-3">
                  Shubham Consulting<br />& Construction
                </h3>
                <p className="text-[13px] text-brand-text leading-[1.7] m-0">
                  No:3 Sri Griha House, 8th Avenue<br />
                  Ashok Nagar, Chennai — 600083<br />
                  Tamil Nadu, India
                </p>
                <div className="mt-4 pt-4 border-t border-brand-earth/12 flex flex-col gap-2">
                  <p className="text-[12px] text-brand-text m-0">
                    Mon–Fri · 10:00 AM – 4:00 PM
                  </p>
                  <a
                    href="https://www.google.com/maps/search/Ashok+Nagar+Chennai+600083+Tamil+Nadu+India"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-brand-earth no-underline border-b border-brand-earth/40 pb-0.5 hover:border-brand-earth transition-colors duration-200 w-fit"
                  >
                    Get Directions
                    <span className="text-[13px]">→</span>
                  </a>
                </div>
              </div>

              {/* Bottom-right badge */}
              <div className="absolute bottom-5 right-5 md:bottom-6 md:right-6 bg-brand-earth text-white rounded-full px-4 py-2 shadow-[0_8px_24px_rgba(31,31,31,0.2)]">
                <span className="font-sans text-[10px] uppercase tracking-[0.16em]">Chennai · India</span>
              </div>

            </div>
          </Reveal>
        </section>
      </main>

      <style>{`
        @keyframes heroload { from { transform: scale(1.05) } to { transform: scale(1) } }
        @keyframes mousedot { 0%,100% { transform: translateY(0) } 50% { transform: translateY(6px) } }
      `}</style>
    </div>
  );
}
