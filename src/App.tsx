import React, { useState, useEffect, useCallback } from 'react';
import { MotionConfig } from 'framer-motion';
import { FileText, Download, Github, Linkedin, Mail } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import XSocialIcon from './components/icons/XSocialIcon';
import { portfolioData, resumeConfig } from './data/portfolioData';

function isResumeUrlActive(): boolean {
  if (typeof window === 'undefined') return false;
  const pathname = window.location.pathname.replace(/\/+$/, '');
  return window.location.hash === '#resume' || pathname === '/resume';
}

function App() {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(() => isResumeUrlActive());

  useEffect(() => {
    const syncFromUrl = () => {
      setIsResumeOpen(isResumeUrlActive());
    };
    window.addEventListener('hashchange', syncFromUrl);
    window.addEventListener('popstate', syncFromUrl);
    return () => {
      window.removeEventListener('hashchange', syncFromUrl);
      window.removeEventListener('popstate', syncFromUrl);
    };
  }, []);

  const handleOpenResume = useCallback(() => {
    setIsResumeOpen(true);
    if (window.location.hash !== '#resume') {
      window.history.pushState(null, '', '#resume');
    }
  }, []);

  const handleCloseResume = useCallback(() => {
    setIsResumeOpen(false);
    const pathname = window.location.pathname.replace(/\/+$/, '');
    if (window.location.hash === '#resume' || pathname === '/resume') {
      window.history.pushState(null, '', '/');
    }
  }, []);

  const { profile, site, footerNavigation, socials } = portfolioData;

  return (
    <MotionConfig reducedMotion="user">
      <div id="app-main-shell" className="min-h-screen bg-slate-50 text-slate-900">
        {/* Keyboard Accessibility Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-slate-900 focus:px-4 focus:py-2 focus:text-xs focus:font-semibold focus:text-white focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Header onOpenResume={handleOpenResume} />

        <main id="main-content">
          <Hero onOpenResume={handleOpenResume} />
          <Work />
          <About />
          <Insights />
          <Testimonials />
          <Contact />
        </main>

        <footer className="no-print bg-slate-950 text-white py-14 border-t border-slate-800/90">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-800/80 items-start">
              {/* Brand & Positioning */}
              <div className="lg:col-span-5 space-y-3">
                <a
                  href="#home"
                  aria-label={`${profile.name} — Back to top`}
                  className="inline-flex items-center gap-2.5 rounded-lg focus-visible:ring-offset-slate-950"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 font-mono text-xs font-bold text-sky-400"
                  >
                    {profile.monogram}
                  </span>
                  <span className="text-lg font-bold tracking-tight text-white">
                    {site.domain}
                  </span>
                </a>
                <p className="text-sm text-slate-300 font-medium">
                  {profile.name} — {profile.title}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                  {profile.locationCity} ({profile.timezone}) • Available for international remote
                  roles across Europe, the UK &amp; North America.
                </p>
              </div>

              {/* Quick Navigation Links */}
              <nav
                aria-label="Footer Quick Navigation"
                className="lg:col-span-4 flex flex-col space-y-3"
              >
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Navigation
                </span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-2">
                  {footerNavigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-sm text-slate-300 hover:text-white focus-visible:ring-offset-slate-950 transition-colors w-fit rounded"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </nav>

              {/* Curriculum Vitae CTA */}
              <div className="lg:col-span-3 flex flex-col items-start lg:items-end space-y-3">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Curriculum Vitae
                </span>
                {resumeConfig.hasStaticResumePdf ? (
                  <a
                    id="footer-download-cv"
                    href={resumeConfig.staticPdfPath}
                    download={resumeConfig.downloadFileName}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-500 focus-visible:ring-offset-slate-950 transition-colors shadow-sm"
                  >
                    <Download size={16} aria-hidden="true" />
                    <span>Download CV</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    id="footer-download-cv"
                    onClick={handleOpenResume}
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-500 focus-visible:ring-offset-slate-950 transition-colors shadow-sm"
                  >
                    <FileText size={16} aria-hidden="true" />
                    <span>View / Download CV</span>
                  </button>
                )}
              </div>
            </div>

            {/* Bottom Copyright & Social Icons */}
            <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-slate-400">{site.copyrightText}</p>

              <div className="flex items-center gap-2">
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rabie Lakhdar on LinkedIn"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus-visible:ring-offset-slate-950 transition-colors"
                >
                  <Linkedin size={18} aria-hidden="true" />
                </a>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rabie Lakhdar on GitHub"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus-visible:ring-offset-slate-950 transition-colors"
                >
                  <Github size={18} aria-hidden="true" />
                </a>
                <a
                  href={socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rabie Lakhdar on X (@rabiel_dev)"
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus-visible:ring-offset-slate-950 transition-colors"
                >
                  <XSocialIcon size={16} />
                </a>
                <a
                  href={socials.mailto}
                  aria-label={`Email ${socials.email}`}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 focus-visible:ring-offset-slate-950 transition-colors"
                >
                  <Mail size={18} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <ResumeModal isOpen={isResumeOpen} onClose={handleCloseResume} />
    </MotionConfig>
  );
}

export default App;