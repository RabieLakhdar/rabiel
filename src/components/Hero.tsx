import React from 'react';
import { motion } from 'framer-motion';
import {
  Smartphone,
  Layers,
  ShieldCheck,
  GitBranch,
  ArrowRight,
  FileText,
  Download,
  Mail,
} from 'lucide-react';
import profileImage from '../assets/rabielakhdar.png';
import { portfolioData, resumeConfig, EngineeringPillar } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const pillarIcons: Record<EngineeringPillar['iconKey'], React.ReactNode> = {
  mobile: <Smartphone className="w-5 h-5 text-blue-700" />,
  fullstack: <Layers className="w-5 h-5 text-blue-700" />,
  security: <ShieldCheck className="w-5 h-5 text-blue-700" />,
  leadership: <GitBranch className="w-5 h-5 text-blue-700" />,
};

const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const { profile, hero, pillars } = portfolioData;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section
      id="home"
      className="relative pt-28 pb-20 lg:pt-36 lg:pb-28 bg-gradient-to-b from-slate-100/80 via-slate-50 to-white border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Executive Identity & Availability Row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-start lg:items-center lg:text-center max-w-4xl lg:mx-auto"
          >
            {/* Availability Status Bar */}
            <div className="inline-flex flex-wrap items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50/90 px-3.5 py-1.5 text-xs sm:text-sm font-medium text-emerald-900 shadow-sm mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-600 shrink-0" aria-hidden="true" />
              <span>{hero.availabilityBadge}</span>
            </div>

            {/* Identity Lockup with Profile Photo */}
            <div className="flex items-center gap-3.5 mb-5">
              <img
                src={profileImage}
                alt={`${profile.name} — ${profile.title}`}
                className="h-12 w-12 rounded-full object-cover ring-2 ring-white shadow-md bg-slate-100"
              />
              <div className="text-left">
                <p className="text-sm font-bold text-slate-900 leading-tight">{profile.name}</p>
                <p className="text-xs font-medium text-slate-600">
                  {profile.currentRole} at{' '}
                  <span className="font-semibold text-slate-800">{profile.currentCompany}</span> •{' '}
                  EN / FR / AR
                </p>
              </div>
            </div>

            {/* Primary H1 Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 leading-[1.1] mb-6">
              {hero.headline}
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-3xl leading-relaxed mb-9">
              {hero.subheadline}
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-wrap items-center lg:justify-center gap-3.5 w-full sm:w-auto mb-12">
              <a
                id="hero-cta-work"
                href={hero.ctas.primary.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
              >
                <span>{hero.ctas.primary.label}</span>
                <ArrowRight size={16} />
              </a>

              <a
                id="hero-cta-contact"
                href={hero.ctas.secondary.href}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 border border-slate-300 hover:border-slate-400 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <Mail size={16} className="text-slate-600" />
                <span>{hero.ctas.secondary.label}</span>
              </a>

              {resumeConfig.hasStaticResumePdf ? (
                <a
                  id="hero-cta-cv"
                  href={resumeConfig.staticPdfPath}
                  download={resumeConfig.downloadFileName}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-5 py-3.5 text-sm font-semibold text-blue-800 border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  <Download size={16} />
                  <span>{hero.ctas.resume.labelWhenStaticPdf}</span>
                </a>
              ) : (
                <button
                  type="button"
                  id="hero-cta-cv"
                  onClick={onOpenResume}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-5 py-3.5 text-sm font-semibold text-blue-800 border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  <FileText size={16} />
                  <span>{hero.ctas.resume.labelWhenPreview}</span>
                </button>
              )}
            </div>
          </motion.div>

          {/* Verified Proof Strip */}
          <motion.div
            variants={itemVariants}
            aria-label="Verified Engineering Track Record"
            className="max-w-5xl mx-auto mb-16 rounded-2xl bg-white border border-slate-200/90 shadow-sm px-6 py-5"
          >
            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:divide-x lg:divide-slate-200">
              {hero.proofStrip.map((proof, idx) => (
                <div
                  key={proof.fullText}
                  className={`flex flex-col ${idx > 0 ? 'lg:pl-6' : ''}`}
                >
                  <dt className="text-xs font-medium uppercase tracking-wider text-slate-500 order-2 mt-1">
                    {proof.label}
                  </dt>
                  <dd className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 order-1">
                    {proof.value}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          {/* 4 Core Engineering Pillars */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Core Engineering Pillars
              </h2>
              <span className="hidden sm:inline text-xs font-mono text-slate-400">
                Mobile • Full-Stack • Regulated FinTech • Leadership
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map((pillar) => (
                <article
                  key={pillar.id}
                  className="group flex flex-col justify-between rounded-2xl bg-white p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
                >
                  <div>
                    <div className="h-10 w-10 rounded-xl bg-slate-100 border border-slate-200/80 flex items-center justify-center mb-5 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors">
                      {pillarIcons[pillar.iconKey]}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2.5 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-5">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {pillar.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block rounded-md bg-slate-100 px-2 py-0.5 font-mono text-[11px] font-medium text-slate-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;