import React, { useState, useEffect } from 'react';
import { Menu, X as CloseIcon, Github, Mail, Linkedin, FileText, Download } from 'lucide-react';
import XSocialIcon from './icons/XSocialIcon';
import { portfolioData, resumeConfig } from '../data/portfolioData';

interface HeaderProps {
  onOpenResume: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenResume }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const { profile, site, navigation, socials } = portfolioData;

  return (
    <header
      id="site-header"
      className={`no-print fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm'
          : 'bg-white/85 backdrop-blur-sm border-b border-slate-200/60'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Brand Lockup */}
          <a
            id="nav-brand-link"
            href="#home"
            aria-label={`${profile.name} — ${site.domain} Home`}
            className="group flex items-center gap-2.5 rounded-lg p-1 -ml-1"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 text-white font-mono text-xs font-extrabold tracking-tight group-hover:bg-blue-700 transition-colors"
            >
              {profile.monogram}
            </span>
            <span className="text-lg font-bold tracking-tight text-slate-950 group-hover:text-blue-700 transition-colors">
              {site.domain}
            </span>
          </a>

          {/* Primary Navigation (Desktop) */}
          <nav aria-label="Primary Navigation" className="hidden md:flex items-center space-x-6 lg:space-x-7">
            {navigation.map((item) => (
              <a
                key={item.href}
                id={`nav-link-${item.label.toLowerCase()}`}
                href={item.href}
                className="rounded-md px-1.5 py-1 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Compact Resume CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-1 pr-2.5 border-r border-slate-200">
              <a
                id="nav-social-github"
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rabie Lakhdar on GitHub"
                title="GitHub"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
              >
                <Github size={18} aria-hidden="true" />
              </a>
              <a
                id="nav-social-linkedin"
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rabie Lakhdar on LinkedIn"
                title="LinkedIn"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a
                id="nav-social-x"
                href={socials.x}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rabie Lakhdar on X (@rabiel_dev)"
                title="X (@rabiel_dev)"
                className="p-2 rounded-lg text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
              >
                <XSocialIcon size={16} />
              </a>
              <a
                id="nav-social-email"
                href={socials.mailto}
                aria-label={`Email ${socials.email}`}
                title={socials.email}
                className="p-2 rounded-lg text-slate-500 hover:text-slate-950 hover:bg-slate-100 transition-colors"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>

            {resumeConfig.hasStaticResumePdf ? (
              <a
                id="nav-resume-cta"
                href={resumeConfig.staticPdfPath}
                download={resumeConfig.downloadFileName}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                <Download size={14} aria-hidden="true" />
                <span>Resume</span>
              </a>
            ) : (
              <button
                type="button"
                id="nav-resume-cta"
                onClick={onOpenResume}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                <FileText size={14} aria-hidden="true" />
                <span>Resume</span>
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            id="nav-mobile-toggle"
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="nav-mobile-drawer"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            {isMenuOpen ? (
              <CloseIcon size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div
          id="nav-mobile-drawer"
          className="md:hidden bg-white border-b border-slate-200 shadow-lg"
        >
          <nav aria-label="Mobile Navigation" className="px-4 pt-2 pb-5 space-y-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-700 hover:text-slate-950 hover:bg-slate-50 transition-colors"
              >
                {item.label}
              </a>
            ))}

            <div className="pt-4 mt-3 border-t border-slate-100 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rabie Lakhdar on GitHub"
                  className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                >
                  <Github size={19} aria-hidden="true" />
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rabie Lakhdar on LinkedIn"
                  className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                >
                  <Linkedin size={19} aria-hidden="true" />
                </a>
                <a
                  href={socials.x}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Rabie Lakhdar on X (@rabiel_dev)"
                  className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                >
                  <XSocialIcon size={17} />
                </a>
                <a
                  href={socials.mailto}
                  aria-label={`Email ${socials.email}`}
                  className="p-2 rounded-lg text-slate-600 hover:text-slate-950 hover:bg-slate-100"
                >
                  <Mail size={19} aria-hidden="true" />
                </a>
              </div>

              {resumeConfig.hasStaticResumePdf ? (
                <a
                  href={resumeConfig.staticPdfPath}
                  download={resumeConfig.downloadFileName}
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  <Download size={14} aria-hidden="true" />
                  <span>Resume</span>
                </a>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onOpenResume();
                  }}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-700 transition-colors"
                >
                  <FileText size={14} aria-hidden="true" />
                  <span>Resume</span>
                </button>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;