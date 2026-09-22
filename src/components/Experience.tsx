"use client";

import { Briefcase, Calendar, MapPin, CheckCircle2, Building2 } from "lucide-react";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  isCurrent: boolean;
  description: string;
  highlights: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Web Developer",
    company: "Digikit",
    location: "Bangalore, Karnataka",
    period: "August 2026 - Present",
    isCurrent: true,
    description:
      "Working as a Web Developer contributing to full-stack web applications, designing interactive and responsive user interfaces, and building robust backend services.",
    highlights: [
      "Developing and enhancing modern, responsive web applications ensuring high performance and cross-browser compatibility.",
      "Building modular, reusable frontend components and integrating them with backend RESTful APIs.",
      "Collaborating with the engineering team to design database schemas, streamline workflows, and implement new features.",
      "Participating in agile sprints, code reviews, and maintaining version control using Git.",
    ],
    skills: ["React", "Next.js", "JavaScript", "Python", "REST APIs", "Tailwind CSS", "Git"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Career
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-2" />
        </div>

        {/* Experience List / Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass border-white/5 p-8 md:p-10 rounded-3xl shadow-2xl relative overflow-hidden group hover:border-primary/25 transition-all duration-300 border"
            >
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-primary/5 rounded-bl-full blur-2xl group-hover:bg-primary/10 transition-all pointer-events-none" />

              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 w-fit">
                      {exp.isCurrent && (
                        <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                      )}
                      {exp.role}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors flex items-center gap-2.5">
                    <Building2 className="w-6 h-6 text-primary shrink-0" />
                    <span>{exp.company}</span>
                  </h3>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs text-gray-400 font-mono">
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <Calendar className="w-3.5 h-3.5 text-primary" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                    <MapPin className="w-3.5 h-3.5 text-secondary" />
                    {exp.location}
                  </span>
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 font-light">
                {exp.description}
              </p>

              {/* Key Contributions / Highlights */}
              <div className="space-y-3 mb-6 border-t border-white/5 pt-6">
                <h4 className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4" /> Key Contributions & Responsibilities
                </h4>
                <ul className="space-y-2.5">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 text-xs md:text-sm text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-2 pt-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-3 py-1 rounded-lg bg-slate-900/80 border border-white/5 text-gray-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
