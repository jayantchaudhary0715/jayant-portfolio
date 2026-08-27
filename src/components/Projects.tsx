"use client";

import { useState } from "react";
import { ArrowUpRight, X, Sparkles, Database, Milestone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
  features: string[];
  architecture: string;
  color: string;
  svgIcon: React.ReactNode;
}

const projects: Project[] = [
  {
    id: "tripconnect",
    title: "TripConnect",
    subtitle: "Real-Time Trip-Planning Platform",
    period: "2025 - Present",
    description: "A multi-app Django platform designed to coordinate trip scheduling, route sharing, and live communication. It helps groups plan, chat, and share routes dynamically.",
    tags: ["Django", "Django Channels", "WebSockets", "SQL", "SQLite3", "Real-Time Chat"],
    features: [
      "Real-time chat using Django Channels and WebSocket consumers, supporting private rooms.",
      "Message persistence storing history securely in database models.",
      "Complex relational database design mapping chat rooms, participants, and text/location/image messages.",
      "Multi-app integration managing accounts, trips, notifications, and personalized recommendations."
    ],
    architecture: "Clients establish persistent WebSockets to Django Channels, handling asynchronous event loops while Django processes traditional REST APIs and SQL operations.",
    color: "from-cyan-500 to-indigo-500",
    svgIcon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
        <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.3" />
        <path d="M 30,50 C 40,30 60,30 70,50 C 60,70 40,70 30,50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="50" r="8" fill="currentColor" className="animate-ping" style={{ animationDuration: '3s' }} />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
        <path d="M 30,50 L 50,50 M 70,50 L 50,50" stroke="currentColor" strokeWidth="1.5" />
        <path d="M 50,20 L 50,80" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
      </svg>
    )
  },
  {
    id: "pixelock",
    title: "PixeLock",
    subtitle: "Secure File Sharing Platform",
    period: "2025",
    description: "A full-stack web application enabling completely anonymous, encrypted file transfers without requiring account registration, prioritizing maximum privacy.",
    tags: ["Django", "Python Cryptography", "Fernet", "SQLite3", "Bootstrap", "Security"],
    features: [
      "End-to-end file encryption with Python Cryptography (Fernet library) securing files in transit and at rest.",
      "Unique 6-digit access codes and dynamic QR code generation for temporary, session-based retrieval.",
      "Email + PIN 'Smart Lockers' flow allowing secure, password-free long-term lockers without registration.",
      "Zero-retention architecture automatically purging expired session files from server disks."
    ],
    architecture: "Uses symmetric key generation per file. Keys are distributed to the client via temporary tokens or QR codes, ensuring the hosting server has no access to decrypt the data.",
    color: "from-emerald-500 to-cyan-500",
    svgIcon: (
      <svg viewBox="0 0 100 100" className="w-16 h-16 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
        <rect x="25" y="40" width="50" height="40" rx="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M 35,40 L 35,30 C 35,20 65,20 65,30 L 65,40" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="60" r="5" fill="currentColor" />
        <path d="M 50,65 L 50,72" stroke="currentColor" strokeWidth="2" />
        <path d="M 20,20 L 80,80" stroke="currentColor" strokeWidth="0.5" opacity="0.3" />
      </svg>
    )
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Featured Projects</h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-2" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              whileHover={{ y: -8 }}
              className="glass border-white/5 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between group transition-all duration-300 relative"
            >
              {/* Graphic background hover element */}
              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${project.color} rounded-bl-full opacity-[0.02] group-hover:opacity-[0.07] transition-opacity duration-300`} />

              <div className="p-8 flex flex-col gap-6">
                {/* Header info */}
                <div className="flex justify-between items-start gap-4">
                  <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-white/10 transition-colors">
                    {project.svgIcon}
                  </div>
                  <span className="text-xs font-mono text-primary font-semibold">{project.period}</span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm font-semibold text-gray-400">{project.subtitle}</p>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed font-light">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-slate-900 border border-white/5 text-gray-300 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-primary/10 text-primary rounded-md">
                      +{project.tags.length - 4} More
                    </span>
                  )}
                </div>
              </div>

              {/* Action bar */}
              <div className="border-t border-white/5 p-6 flex justify-between items-center bg-slate-950/25">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-bold uppercase tracking-wider text-primary group-hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Deep Dive Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-4 text-gray-400">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Deep Dive */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass border-white/10 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative max-h-[85vh] flex flex-col z-10"
            >
              {/* Top Banner */}
              <div className={`p-6 bg-gradient-to-r ${selectedProject.color} flex justify-between items-center text-slate-950`}>
                <div>
                  <h3 className="text-2xl font-black">{selectedProject.title}</h3>
                  <p className="text-xs font-semibold uppercase tracking-wider opacity-85">
                    {selectedProject.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 bg-slate-950/15 hover:bg-slate-950/25 rounded-full transition-colors focus:outline-none"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable details */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Project Overview
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-3 flex items-center gap-1.5">
                    <Milestone className="w-3.5 h-3.5" /> Key Architecture & Implementation Details
                  </h4>
                  <ul className="space-y-2.5">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-2.5 items-start text-gray-300 text-xs">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architecture */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2 flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" /> Database & System Design
                  </h4>
                  <p className="text-gray-300 text-xs leading-relaxed font-mono p-4 bg-slate-950/40 border border-white/5 rounded-2xl">
                    {selectedProject.architecture}
                  </p>
                </div>

                {/* Extended Tech badges */}
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-primary font-bold mb-2.5">
                    Tech Stack Keywords
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-3 py-1 bg-white/5 border border-white/5 text-gray-300 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom links */}
              <div className="border-t border-white/5 p-6 flex justify-end gap-3 bg-slate-950/25">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 border border-white/10 hover:bg-white/5 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Close
                </button>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-background text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-lg shadow-primary/10 transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub Repository</span>
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
