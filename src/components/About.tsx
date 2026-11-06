import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Globe2,
  Briefcase,
  MapPin,
  Smartphone,
  Layout,
  Server,
  Users,
} from 'lucide-react';
import profileImage from '../assets/rabielakhdar.png';
import { portfolioData, SkillGroup } from '../data/portfolioData';

const skillCategoryIcons: Record<SkillGroup['id'], React.ReactNode> = {
  mobile: <Smartphone size={18} className="text-blue-700" aria-hidden="true" />,
  frontend: <Layout size={18} className="text-blue-700" aria-hidden="true" />,
  backend: <Server size={18} className="text-blue-700" aria-hidden="true" />,
  leadership: <Users size={18} className="text-blue-700" aria-hidden="true" />,
};

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  const { profile, about, skills } = portfolioData;

  return (
    <section
      id="about"
      aria-labelledby="about-section-heading"
      className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200/80"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.45 }}
          className="space-y-16"
        >
          {/* Section Header (H2 first in DOM for strict H1 -> H2 -> H3 hierarchy) */}
          <div className="max-w-3xl">
            <span className="inline-block font-mono text-xs font-semibold uppercase tracking-widest text-blue-700 mb-3">
              {about.badge}
            </span>
            <h2
              id="about-section-heading"
              className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 leading-tight"
            >
              {about.heading}
            </h2>
          </div>

          {/* Profile Card + T-Shaped Senior Engineering Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Portrait & Executive Facts */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={profileImage}
                    alt={`${profile.name} — ${profile.title}`}
                    className="w-40 h-40 sm:w-44 sm:h-44 rounded-full object-cover ring-4 ring-slate-100 shadow-md mb-5 bg-slate-50"
                  />
                  <p className="text-xl font-bold text-slate-950">{profile.name}</p>
                  <p className="text-sm font-semibold text-blue-700 mt-1">
                    {profile.currentRole} • {profile.currentCompany}
                  </p>
                  <p className="text-xs font-mono text-slate-500 mt-1.5">
                    {profile.yearsOfExperience} Years • {profile.shippedProductsCount} Shipped Apps
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin size={17} className="text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-slate-900">Base &amp; Timezone</p>
                      <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                        {profile.locationCity} • {profile.timezone}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Briefcase size={17} className="text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-slate-900">Remote Engagement</p>
                      <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                        EOR (Deel / Remote.com) or Long-Term B2B Contractor
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Globe2 size={17} className="text-slate-500 shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-slate-900">Languages</p>
                      <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                        {profile.languagesSummary}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: T-Shaped Engineering Narrative */}
            <div className="lg:col-span-8 space-y-6">
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                {about.lead}
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                {about.body}
              </p>

              {/* T-Shaped Engineering Dimensions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {about.tShapedDimensions.map((dim) => (
                  <div
                    key={dim.id}
                    className="rounded-xl bg-white border border-slate-200/90 p-5 shadow-sm"
                  >
                    <span className="block font-mono text-[11px] font-semibold uppercase tracking-wider text-blue-700 mb-2">
                      {dim.axisLabel}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">
                      {dim.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {dim.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recruiter-Scannable Technical Stack Categories */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-slate-950">
                Technical Stack &amp; Core Capabilities
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Production-tested tools organized across mobile runtimes, web frontends, cloud backends, and squad leadership.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {skills.map((group) => (
                <div
                  key={group.id}
                  id={`skill-group-${group.id}`}
                  className="rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm flex flex-col"
                >
                  <div className="flex items-center gap-2.5 pb-4 mb-4 border-b border-slate-100">
                    <div className="h-9 w-9 rounded-lg bg-slate-100 border border-slate-200/70 flex items-center justify-center shrink-0">
                      {skillCategoryIcons[group.id]}
                    </div>
                    <h4 className="text-base font-bold text-slate-950">{group.category}</h4>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center rounded-lg bg-slate-50 border border-slate-200/90 px-2.5 py-1.5 text-xs font-medium text-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;