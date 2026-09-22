"use client";

import { useState } from "react";
import { Shield, Cloud, Briefcase, Brain, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  link?: string;
  image?: string;
}

const certifications: Certification[] = [
  {
    title: "Full Stack Web Development with AI Tools ",
    issuer: "EY and Microsoft",
    date: "2026",
    icon: <Shield className="w-6 h-6 text-primary" />,
    color: "group-hover:border-primary/30 group-hover:shadow-primary/5",
    image: "/Fullstack_EY.jpg",
  },
  {
    title: "AI Skill Passport",
    issuer: "EY and Microsoft",
    date: "November 2025",
    icon: <Brain className="w-6 h-6 text-indigo-400" />,
    color: "group-hover:border-indigo-500/30 group-hover:shadow-indigo-500/5",
    image:"/AI_SKILL.png",
  },
  {
    title: "Deloitte Australia Cyber Job Simulation",
    issuer: "Forage",
    date: "September 2025",
    icon: <Briefcase className="w-6 h-6 text-cyan-400" />,
    color: "group-hover:border-cyan-500/30 group-hover:shadow-cyan-500/5",
    link: "https://www.theforage.com/simulations/deloitte-au/cyber-c1e3/completed",
  },
  {
    title: "AWS APAC Solutions Architecture Program",
    issuer: "Forage",
    date: "August 2025",
    icon: <Cloud className="w-6 h-6 text-sky-400" />,
    color: "group-hover:border-sky-500/30 group-hover:shadow-sky-500/5",
    link: "https://www.theforage.com/simulations/aws-apac/solutions-architecture-ts4o/completed",
  },
  {
    title: "Tata Cybersecurity Analyst Simulation",
    issuer: "Forage",
    date: "August 2025",
    icon: <Shield className="w-6 h-6 text-emerald-400" />,
    color: "group-hover:border-emerald-500/30 group-hover:shadow-emerald-500/5",
    link: "https://www.theforage.com/simulations/tata/cybersecurity-sbda/completed",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    date: "2024",
    icon: <Shield className="w-6 h-6 text-primary" />,
    color: "group-hover:border-primary/30 group-hover:shadow-primary/5",
    link: "https://www.credly.com/earner/earned/badge/b26ee1fc-f491-44e4-90ed-40d0d0e8f076",
  },
  {
    title: "Deploying and Evaluating GenAI Apps with MongoDB",
    issuer: "MongoDB",
    date: "2025",
    icon: <Shield className="w-6 h-6 text-primary" />,
    color: "group-hover:border-primary/30 group-hover:shadow-primary/5",
    link: "https://www.credly.com/earner/earned/badge/1db1023e-e56e-4380-b19c-f3162d7c3f4d",
  },
  
];

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
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100 },
  },
};

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section
      id="certifications"
      className="py-24 px-6 md:px-12 bg-transparent relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Certifications
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-2" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className={`glass border-white/5 p-6 rounded-2xl flex flex-col justify-between gap-5 shadow-lg shadow-black/10 transition-all duration-300 group border ${cert.color} ${cert.image ? "cursor-pointer" : ""}`}
              onClick={() => {
                if (cert.image) setSelectedCert(cert);
              }}
            >
              {/* Header Info */}
              <div className="flex gap-4 items-start">
                <div className="p-3.5 bg-white/5 rounded-xl group-hover:bg-white/10 group-hover:scale-110 transition-all duration-300">
                  {cert.icon}
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-white group-hover:text-primary transition-colors leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-400">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Date & Button */}
              <div className="flex justify-between items-center border-t border-white/5 pt-4">
                <span className="text-[10px] font-mono text-gray-400">
                  {cert.date}
                </span>

                {cert.image ? (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedCert(cert);
                    }}
                    className="text-[10px] font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-1 group/btn cursor-pointer"
                  >
                    <span>Verify Credentials</span>
                    <ExternalLink className="w-3 h-3 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                ) : (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-[10px] font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-1 group/btn"
                  >
                    <span>Verify Credentials</span>
                    <ExternalLink className="w-3 h-3 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Certificate Image Preview Modal */}
      <AnimatePresence>
        {selectedCert && selectedCert.image && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="absolute inset-0 bg-slate-950/90 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glass border-white/10 w-full max-w-3xl rounded-3xl overflow-hidden shadow-2xl relative z-10 flex flex-col max-h-[90vh] bg-slate-900/95"
            >
              {/* Header */}
              <div className="p-5 border-b border-white/10 flex justify-between items-center bg-slate-950/50">
                <div>
                  <h3 className="text-lg font-bold text-white leading-snug">
                    {selectedCert.title}
                  </h3>
                  <p className="text-xs text-primary font-medium mt-0.5">
                    {selectedCert.issuer} • {selectedCert.date}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors cursor-pointer"
                  aria-label="Close certificate modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Certificate Image View */}
              <div className="p-4 sm:p-6 overflow-y-auto flex items-center justify-center bg-black/40">
                <div className="relative w-full flex items-center justify-center">
                  <Image
                    src={selectedCert.image}
                    alt={`${selectedCert.title} Certificate`}
                    width={1200}
                    height={850}
                    className="max-h-[65vh] w-auto max-w-full rounded-xl object-contain shadow-2xl border border-white/10"
                    priority
                  />
                </div>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10 flex justify-between items-center bg-slate-950/50">
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-primary hover:underline flex items-center gap-1.5"
                >
                  <span>Open Full Image</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
