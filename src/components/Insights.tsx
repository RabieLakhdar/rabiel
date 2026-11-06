import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Linkedin, ArrowUpRight, Sparkles, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Insights: React.FC = () => {
  const { insightsSection, insights, socials } = portfolioData;
  // Open the first insight by default so architectural depth is immediately scannable
  const [expandedIds, setExpandedIds] = useState<Record<string, boolean>>({
    [insights[0]?.id ?? '']: true,
  });

  const toggleInsight = (id: string) => {
    setExpandedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="insights"
      aria-labelledby="insights-section-heading"
      className="py-20 lg:py-28 bg-white border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header + LinkedIn Discussion CTA */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-3xl">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">
              {insightsSection.eyebrow}
            </span>
            <h2
              id="insights-section-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-4"
            >
              {insightsSection.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {insightsSection.subheading}
            </p>
          </div>

          <div className="shrink-0">
            <a
              id="insights-header-linkedin-cta"
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-xs sm:text-sm font-semibold text-white hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Linkedin size={16} />
              <span>{insightsSection.discussCtaLabel}</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        {/* Expandable Technical Insight Cards */}
        <div className="space-y-6">
          {insights.map((insight) => {
            const isExpanded = Boolean(expandedIds[insight.id]);
            const panelId = `insight-panel-${insight.id}`;
            const toggleBtnId = `insight-toggle-${insight.id}`;

            return (
              <article
                key={insight.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-white border-slate-300 shadow-md'
                    : 'bg-slate-50/70 border-slate-200/90 hover:bg-white hover:border-slate-300 shadow-sm'
                }`}
              >
                {/* Clickable Header / Summary Trigger */}
                <button
                  type="button"
                  id={toggleBtnId}
                  aria-expanded={isExpanded}
                  aria-controls={panelId}
                  onClick={() => toggleInsight(insight.id)}
                  className="w-full text-left px-6 py-6 sm:px-8 sm:py-7 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="space-y-2.5 max-w-4xl">
                      <div className="inline-flex items-center gap-2 font-mono text-xs font-semibold text-blue-700">
                        <BookOpen size={14} />
                        <span>{insight.category}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-950 leading-snug">
                        {insight.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {insight.subtitle}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {insight.topics.map((topic) => (
                          <span
                            key={topic}
                            className="inline-flex items-center rounded-md bg-slate-100 border border-slate-200/80 px-2.5 py-0.5 font-mono text-[11px] font-medium text-slate-700"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0 self-start lg:mt-1">
                      <span className="inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-700">
                        <span>{isExpanded ? 'Collapse Note' : 'Read Technical Note'}</span>
                        <ChevronDown
                          size={15}
                          className={`transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-blue-700' : 'text-slate-500'
                          }`}
                        />
                      </span>
                    </div>
                  </div>
                </button>

                {/* Expandable Architectural Breakdown */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={toggleBtnId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-7 pt-2 sm:px-8 sm:pb-8 border-t border-slate-100 space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 pt-4">
                          {insight.breakdown.map((point) => (
                            <div
                              key={point.heading}
                              className="rounded-xl bg-slate-50/90 border border-slate-200/80 p-5"
                            >
                              <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                                {point.heading}
                              </h4>
                              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                                {point.detail}
                              </p>
                            </div>
                          ))}
                        </div>

                        {/* Key Takeaway + LinkedIn CTA */}
                        <div className="rounded-xl bg-blue-50/70 border border-blue-200/80 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                          <div className="flex items-start gap-3">
                            <Sparkles
                              size={18}
                              className="text-blue-700 shrink-0 mt-0.5"
                              aria-hidden="true"
                            />
                            <p className="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">
                              <strong className="font-bold text-slate-950">
                                Architectural Takeaway:{' '}
                              </strong>
                              {insight.keyTakeaway}
                            </p>
                          </div>

                          <a
                            id={`insight-discuss-${insight.id}`}
                            href={socials.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-1.5 shrink-0 rounded-lg bg-white border border-blue-200 px-3.5 py-2 text-xs font-semibold text-blue-800 hover:bg-blue-100 transition-colors shadow-sm"
                          >
                            <Linkedin size={14} />
                            <span>Discuss on LinkedIn</span>
                            <ArrowUpRight size={13} />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Insights;
