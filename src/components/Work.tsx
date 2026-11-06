import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Shield, Cpu, AlertCircle, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Work: React.FC = () => {
  const { work, caseStudies } = portfolioData;

  return (
    <section
      id="work"
      aria-labelledby="work-section-heading"
      className="py-20 lg:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">
            {work.eyebrow}
          </span>
          <h2
            id="work-section-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-4"
          >
            {work.heading}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {work.subheading}
          </p>
        </div>

        {/* Structured Case Study Dossiers */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              id={`case-study-${study.id}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-2xl bg-slate-50/70 border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-200"
            >
              {/* Card Header */}
              <div className="bg-white px-6 py-6 sm:px-8 border-b border-slate-200/80 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-900 font-mono text-xs font-bold text-sky-400">
                    {study.indexLabel}
                  </span>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950">
                      {study.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-700 mt-1">
                      {study.context}
                    </p>
                  </div>
                </div>

                <div className="sm:shrink-0">
                  {study.externalLink ? (
                    <a
                      id={`case-study-link-${study.id}`}
                      href={study.externalLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      <span>{study.externalLink.label}</span>
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ) : (
                    study.confidentialityBadge && (
                      <span className="inline-flex items-center gap-1.5 rounded-lg bg-slate-100 border border-slate-200 px-3 py-1.5 text-xs font-medium text-slate-600">
                        <Shield size={13} className="text-slate-500" aria-hidden="true" />
                        <span>{study.confidentialityBadge}</span>
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Challenge -> Architecture & Ownership */}
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80 bg-slate-50/50">
                {/* Step 1: Challenge */}
                <div className="lg:col-span-5 p-6 sm:p-8">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    <AlertCircle size={14} className="text-amber-600 shrink-0" aria-hidden="true" />
                    <span>Challenge</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Step 2: Architecture & Ownership */}
                <div className="lg:col-span-7 p-6 sm:p-8 bg-white/60">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    <Cpu size={14} className="text-blue-700 shrink-0" aria-hidden="true" />
                    <span>Architecture &amp; Ownership</span>
                  </h4>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed">
                    {study.architectureOwnership}
                  </p>
                </div>
              </div>

              {/* Step 3: Tech Stack Footer */}
              <div className="px-6 py-4 sm:px-8 bg-white border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center gap-3">
                <h4 className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-500 shrink-0 sm:pr-3 sm:border-r sm:border-slate-200">
                  <Wrench size={13} className="text-slate-400" aria-hidden="true" />
                  <span>Tech Stack</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-lg bg-slate-100 border border-slate-200/90 px-2.5 py-1 font-mono text-xs font-medium text-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
