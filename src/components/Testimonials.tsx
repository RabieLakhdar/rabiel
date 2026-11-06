import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Linkedin, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Testimonials: React.FC = () => {
  const { testimonialsSection, testimonials, socials } = portfolioData;

  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-section-heading"
      className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">
              {testimonialsSection.eyebrow}
            </span>
            <h2
              id="testimonials-section-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-3"
            >
              {testimonialsSection.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {testimonialsSection.subheading}
            </p>
          </div>

          <a
            id="testimonials-linkedin-verify"
            href={socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 self-start sm:self-auto rounded-xl bg-white border border-slate-200/90 px-4 py-2.5 text-xs font-semibold text-slate-700 hover:text-blue-700 hover:border-slate-300 transition-colors shadow-sm"
          >
            <Linkedin size={15} className="text-blue-700" />
            <span>{testimonialsSection.verifyLabel}</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* 2 Verified Recommendation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.figure
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex flex-col justify-between rounded-2xl bg-white border border-slate-200/90 p-7 sm:p-8 shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-6">
                  <div className="h-10 w-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700">
                    <Quote size={18} aria-hidden="true" />
                  </div>
                  <span className="inline-flex items-center rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[11px] font-medium text-slate-700">
                    {item.highlightTag}
                  </span>
                </div>

                <blockquote className="text-base sm:text-lg text-slate-800 leading-relaxed font-normal mb-8">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <figcaption className="pt-5 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div
                    aria-hidden="true"
                    className="h-11 w-11 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0"
                  >
                    {item.initials}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-950">{item.authorName}</div>
                    <div className="text-xs font-medium text-slate-600 mt-0.5">
                      {item.authorRole}
                    </div>
                  </div>
                </div>

                <a
                  href={item.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Verify ${item.authorName}'s LinkedIn recommendation`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 shrink-0"
                >
                  <Linkedin size={14} />
                  <span className="hidden sm:inline">LinkedIn</span>
                </a>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
