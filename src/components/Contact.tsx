import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Briefcase,
  Globe2,
  Target,
  Send,
  Copy,
  Check,
  ArrowUpRight,
} from 'lucide-react';
import emailjs from '@emailjs/browser';
import XSocialIcon from './icons/XSocialIcon';
import { portfolioData, RecruiterQuickFact } from '../data/portfolioData';

// Initialize EmailJS with environment variable
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const quickFactIcons: Record<RecruiterQuickFact['id'], React.ReactNode> = {
  roles: <Target className="text-blue-700" size={17} aria-hidden="true" />,
  arrangement: <Briefcase className="text-blue-700" size={17} aria-hidden="true" />,
  location: <MapPin className="text-blue-700" size={17} aria-hidden="true" />,
  languages: <Globe2 className="text-blue-700" size={17} aria-hidden="true" />,
};

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const copyTimeoutRef = useRef<number | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasCopiedEmail, setHasCopiedEmail] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    const emailToCopy = portfolioData.socials.email;
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(emailToCopy);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = emailToCopy;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setHasCopiedEmail(true);
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = window.setTimeout(() => {
        setHasCopiedEmail(false);
      }, 2400);
    } catch {
      setHasCopiedEmail(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully! I will get back to you promptly.',
      });
      formRef.current.reset();
    } catch {
      setSubmitStatus({
        type: 'error',
        message:
          'Failed to send message via form. Please copy or email hello@rabiel.dev directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { contact, socials } = portfolioData;

  return (
    <section
      id="contact"
      aria-labelledby="contact-section-heading"
      className="py-20 lg:py-28 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-14">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">
              {contact.badge}
            </span>
            <h2
              id="contact-section-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 mb-4"
            >
              {contact.heading}
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {contact.subheading}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Side: Recruiter & Hiring Quick-Facts Panel */}
            <div className="lg:col-span-6 rounded-2xl bg-slate-50/80 p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-6 border-b border-slate-200/80">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">
                    {contact.quickFactsHeading}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-50 border border-emerald-200 px-2.5 py-1 font-mono text-[11px] font-semibold text-emerald-900">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden="true" />
                    <span>{contact.quickFactsBadge}</span>
                  </span>
                </div>

                {/* 4 Screening Rows */}
                <dl className="space-y-4">
                  {contact.quickFacts.map((fact) => (
                    <div
                      key={fact.id}
                      className="rounded-xl bg-white border border-slate-200/80 p-4 flex items-start gap-3.5"
                    >
                      <div className="h-9 w-9 rounded-lg bg-slate-100 border border-slate-200/70 flex items-center justify-center shrink-0 mt-0.5">
                        {quickFactIcons[fact.id]}
                      </div>
                      <div>
                        <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {fact.label}
                        </dt>
                        <dd className="text-sm font-medium text-slate-900 leading-relaxed mt-1">
                          {fact.value}
                        </dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Direct Email + One-Click Copy + Social Profiles */}
              <div className="mt-6 pt-6 border-t border-slate-200/80 space-y-5">
                {/* Direct Email Action Bar */}
                <div className="rounded-xl bg-white border border-slate-200/90 p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
                      <Mail className="text-blue-700" size={17} aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                        Direct Email
                      </p>
                      <a
                        id="contact-email-mailto"
                        href={socials.mailto}
                        className="text-sm font-bold text-slate-950 hover:text-blue-700 transition-colors"
                      >
                        {socials.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      id="contact-copy-email-btn"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address hello@rabiel.dev to clipboard"
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-xs font-semibold border transition-all ${
                        hasCopiedEmail
                          ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                          : 'bg-slate-900 border-slate-900 text-white hover:bg-blue-700 hover:border-blue-700'
                      }`}
                    >
                      {hasCopiedEmail ? (
                        <>
                          <Check size={14} aria-hidden="true" />
                          <span>Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} aria-hidden="true" />
                          <span>Copy Email</span>
                        </>
                      )}
                    </button>
                    <span className="sr-only" role="status" aria-live="polite">
                      {hasCopiedEmail ? 'Email hello@rabiel.dev copied to clipboard.' : ''}
                    </span>
                  </div>
                </div>

                {/* Profiles */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    Profiles
                  </p>
                  <div className="flex flex-wrap items-center gap-2.5">
                    <a
                      id="contact-social-linkedin"
                      href={socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Rabie Lakhdar on LinkedIn"
                      className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200/90 px-3.5 py-2 text-xs font-semibold text-slate-800 hover:text-blue-700 hover:border-slate-300 transition-colors shadow-sm"
                    >
                      <Linkedin size={15} className="text-blue-700" aria-hidden="true" />
                      <span>LinkedIn</span>
                      <ArrowUpRight size={13} className="text-slate-400" aria-hidden="true" />
                    </a>

                    <a
                      id="contact-social-github"
                      href={socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Rabie Lakhdar on GitHub"
                      className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200/90 px-3.5 py-2 text-xs font-semibold text-slate-800 hover:text-slate-950 hover:border-slate-300 transition-colors shadow-sm"
                    >
                      <Github size={15} aria-hidden="true" />
                      <span>GitHub</span>
                      <ArrowUpRight size={13} className="text-slate-400" aria-hidden="true" />
                    </a>

                    <a
                      id="contact-social-x"
                      href={socials.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Rabie Lakhdar on X (@rabiel_dev)"
                      className="inline-flex items-center gap-2 rounded-xl bg-white border border-slate-200/90 px-3.5 py-2 text-xs font-semibold text-slate-800 hover:text-slate-950 hover:border-slate-300 transition-colors shadow-sm"
                    >
                      <XSocialIcon size={14} />
                      <span>X ({socials.xHandle})</span>
                      <ArrowUpRight size={13} className="text-slate-400" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Preserved EmailJS Contact Form */}
            <div className="lg:col-span-6 rounded-2xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <div className="pb-5 mb-6 border-b border-slate-100">
                  <h3 className="text-xl font-bold tracking-tight text-slate-950">
                    Send a Direct Message
                  </h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Share role details, team context, or consulting scope—delivered straight to my inbox.
                  </p>
                </div>

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="user_name"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="user_name"
                      name="user_name"
                      required
                      autoComplete="name"
                      placeholder="Jane Doe • Engineering Manager / Recruiter"
                      className="w-full px-4 py-3 text-sm bg-slate-50/70 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="user_email"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
                    >
                      Work Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      autoComplete="email"
                      placeholder="jane@company.com"
                      className="w-full px-4 py-3 text-sm bg-slate-50/70 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5"
                    >
                      Role / Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      placeholder="Tell me about the product, tech stack, engagement model (EOR / B2B), and timeline..."
                      className="w-full px-4 py-3 text-sm bg-slate-50/70 border border-slate-300 rounded-xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 focus:bg-white transition-colors resize-y"
                    ></textarea>
                  </div>

                  {submitStatus.type && (
                    <div
                      role="status"
                      aria-live="polite"
                      className={`p-4 rounded-xl text-sm font-medium ${
                        submitStatus.type === 'success'
                          ? 'bg-emerald-50 text-emerald-900 border border-emerald-200'
                          : 'bg-red-50 text-red-900 border border-red-200'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={isSubmitting}
                    className={`inline-flex w-full items-center justify-center gap-2 bg-slate-900 text-white py-3.5 px-6 rounded-xl text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm ${
                      isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                    }`}
                  >
                    <Send size={15} aria-hidden="true" />
                    <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                  </button>
                </form>
              </div>

              <p className="text-xs text-slate-500 mt-6 pt-4 border-t border-slate-100">
                Typical response time: within 24 hours across GMT+1 / CET business hours.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;