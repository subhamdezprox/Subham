import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Page Not Found | Subham Consulting';
  }, []);

  return (
    <>
      <PageSEO
        title="404 — Page Not Found | Subham Consulting"
        description="The page you are looking for does not exist. Return to Subham Consulting's homepage to explore our sustainable construction services."
        path="/404"
      />
      <div className="bg-brand-bg text-brand-dark font-sans min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
        <span className="font-serif text-[120px] md:text-[180px] text-brand-earth/15 leading-none select-none">404</span>
        <h1 className="font-serif text-[32px] md:text-[48px] text-brand-earth -mt-8 mb-4 font-normal">Page Not Found</h1>
        <p className="max-w-[480px] text-brand-dark/70 mb-10 text-[15px] leading-[1.8]">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-earth text-white font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-[2px] hover:bg-brand-earth-light transition-colors duration-300"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 border border-brand-earth text-brand-earth font-sans text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-[2px] hover:bg-brand-earth hover:text-white transition-colors duration-300"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
