import React, { useEffect, useRef } from 'react';
import { X, Printer, Download, Mail, Globe, Linkedin, Github, MapPin } from 'lucide-react';
import { portfolioData, resumeConfig } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const printBtnRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      document.body.classList.remove('resume-modal-open');
      document.body.style.overflow = '';
      if (previousFocusRef.current) {
        previousFocusRef.current.focus();
        previousFocusRef.current = null;
      }
      return;
    }

    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.classList.add('resume-modal-open');
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      printBtnRef.current?.focus();
    }, 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.body.classList.remove('resume-modal-open');
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrintSavePdf = () => {
    const previousTitle = document.title;
    document.title = resumeConfig.downloadFileName.replace(/\.pdf$/i, '');
    window.print();
    window.setTimeout(() => {
      document.title = previousTitle;
    }, 500);
  };

  const { profile, socials, pillars, skills, experience, caseStudies } = portfolioData;

  return (
    <div
      id="resume-modal-root"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-slate-950/75 backdrop-blur-sm p-4 sm:p-6 lg:p-10"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="resume-modal-dialog"
        className="relative w-full max-w-4xl rounded-2xl bg-white shadow-2xl border border-slate-200 overflow-hidden my-auto"
      >
        {/* Top Action Bar (Hidden when printing) */}
        <div className="no-print sticky top-0 z-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 bg-slate-900 px-5 py-3.5 text-white">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 border border-slate-700 font-mono text-xs font-bold text-sky-400"
            >
              {profile.monogram}
            </span>
            <div>
              <h2 id="resume-modal-title" className="text-sm font-semibold text-white">
                {profile.name} — Curriculum Vitae
              </h2>
              <p className="text-xs text-slate-400">
                Print-optimized A4 layout • Save directly as PDF
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            {resumeConfig.hasStaticResumePdf && (
              <a
                href={resumeConfig.staticPdfPath}
                download={resumeConfig.downloadFileName}
                id="resume-modal-static-download"
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-2 text-xs font-semibold text-white border border-slate-700 hover:bg-slate-700 focus-visible:ring-offset-slate-900 transition-colors"
              >
                <Download size={15} aria-hidden="true" />
                <span>Download Original PDF</span>
              </a>
            )}
            <button
              ref={printBtnRef}
              type="button"
              id="resume-modal-print-btn"
              onClick={handlePrintSavePdf}
              className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-4 py-2 text-xs font-semibold text-white hover:bg-blue-500 focus-visible:ring-offset-slate-900 transition-colors shadow-sm"
            >
              <Printer size={15} aria-hidden="true" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              id="resume-modal-close-btn"
              onClick={onClose}
              aria-label="Close resume preview"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:ring-offset-slate-900 transition-colors"
            >
              <X size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Printable CV Sheet */}
        <article
          id="resume-print-sheet"
          className="bg-white px-6 py-8 sm:px-10 sm:py-10 text-slate-900 space-y-6"
        >
          {/* CV Header (Uses styled <p> instead of <h1> to preserve single-H1 document rule) */}
          <header className="border-b-2 border-slate-900 pb-5">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                  {profile.name}
                </p>
                <p className="mt-1 text-base sm:text-lg font-semibold text-blue-700">
                  {profile.title}
                </p>
              </div>
              <div className="text-xs sm:text-right text-slate-600 font-medium space-y-0.5">
                <p className="inline-flex sm:justify-end items-center gap-1.5">
                  <MapPin size={13} className="text-slate-500 shrink-0" aria-hidden="true" />
                  <span>
                    {profile.locationCity} ({profile.timezone}) • Remote Worldwide (EOR / B2B)
                  </span>
                </p>
                <p>
                  {profile.yearsOfExperience} Years Exp. • {profile.shippedProductsCount} Shipped Products
                </p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-xs text-slate-700">
              <a
                href={socials.mailto}
                className="inline-flex items-center gap-1.5 hover:text-blue-700"
              >
                <Mail size={13} className="text-slate-500" aria-hidden="true" />
                <span>{socials.email}</span>
              </a>
              <a
                href={portfolioData.site.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-700"
              >
                <Globe size={13} className="text-slate-500" aria-hidden="true" />
                <span>{portfolioData.site.domain}</span>
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-700"
              >
                <Linkedin size={13} className="text-slate-500" aria-hidden="true" />
                <span>linkedin.com/in/rabie-lakhdar</span>
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-blue-700"
              >
                <Github size={13} className="text-slate-500" aria-hidden="true" />
                <span>github.com/RabieLakhdar</span>
              </a>
            </div>
          </header>

          {/* Executive Summary */}
          <section className="print-avoid-break">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Executive Summary
            </h3>
            <p className="text-sm leading-relaxed text-slate-700">
              {profile.shortBio} Currently serving as{' '}
              <strong className="font-semibold text-slate-900">
                {profile.currentRole} at {profile.currentCompany}
              </strong>
              , combining deep React Native mobile architecture (iOS &amp; Android, JSI/Fabric/TurboModules) with modern full-stack TypeScript web and API engineering (React, Next.js, Vue.js, Node.js, GraphQL, AWS).
            </p>
          </section>

          {/* Core Engineering Pillars */}
          <section className="print-avoid-break">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Core Engineering Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {pillars.map((pillar) => (
                <div
                  key={pillar.id}
                  className="rounded-lg border border-slate-200 bg-slate-50/70 p-3"
                >
                  <h4 className="text-xs font-bold text-slate-900">{pillar.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Professional Experience */}
          <section className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Professional Experience
            </h3>
            {experience.map((item) => (
              <div key={item.id} className="print-avoid-break space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{item.role}</h4>
                    <p className="text-xs font-semibold text-blue-700">{item.company}</p>
                  </div>
                  <p className="text-xs font-medium text-slate-500">
                    {item.period} • {item.location}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-slate-700">{item.summary}</p>
                <ul className="list-disc pl-4 space-y-1 text-xs leading-relaxed text-slate-700">
                  {item.highlights.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Selected Regulated, SaaS & Mobile Case Studies */}
          <section className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Selected Engineering Case Studies
            </h3>
            <div className="space-y-3.5">
              {caseStudies.map((study) => (
                <div
                  key={study.id}
                  className="print-avoid-break border-l-2 border-slate-300 pl-3.5 space-y-1"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                    <h4 className="text-xs font-bold text-slate-900">
                      {study.title}{' '}
                      <span className="font-normal text-slate-500">({study.context})</span>
                    </h4>
                    {study.externalLink && (
                      <a
                        href={study.externalLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-mono text-blue-700 hover:underline"
                      >
                        {study.externalLink.url.replace(/^https?:\/\//, '')}
                      </a>
                    )}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="font-semibold text-slate-900">Challenge:</strong>{' '}
                    {study.challenge}
                  </p>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    <strong className="font-semibold text-slate-900">Architecture:</strong>{' '}
                    {study.architectureOwnership}
                  </p>
                  <p className="text-[11px] text-slate-500">
                    <strong className="font-semibold text-slate-700">Stack:</strong>{' '}
                    {study.stack.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Technical Skills & Languages */}
          <section className="print-avoid-break grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-slate-200 pt-4">
            <div className="sm:col-span-2 space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Technical Stack
              </h3>
              <div className="space-y-1.5 text-xs text-slate-700">
                {skills.map((group) => (
                  <p key={group.category} className="leading-relaxed">
                    <strong className="font-semibold text-slate-900">{group.category}:</strong>{' '}
                    {group.skills.join(', ')}
                  </p>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Languages
              </h3>
              <ul className="space-y-1 text-xs text-slate-700">
                {profile.spokenLanguages.map((item) => (
                  <li key={item.language}>
                    <strong className="font-semibold text-slate-900">{item.language}:</strong>{' '}
                    <span className="text-slate-600">{item.proficiency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
};

export default ResumeModal;
