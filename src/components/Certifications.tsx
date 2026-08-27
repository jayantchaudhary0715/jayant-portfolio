"use client";

import { Shield, Cloud, Briefcase, Brain, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  icon: React.ReactNode;
  color: string;
  link: string;
}

const certifications: Certification[] = [
  {
    title: "AI Skill Passport",
    issuer: "EY and Microsoft",
    date: "November 2025",
    icon: <Brain className="w-6 h-6 text-indigo-400" />,
    color: "group-hover:border-indigo-500/30 group-hover:shadow-indigo-500/5",
    link: "https://microsoft.com",
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
              className={`glass border-white/5 p-6 rounded-2xl flex flex-col justify-between gap-5 shadow-lg shadow-black/10 transition-all duration-300 group border ${cert.color}`}
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
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] font-bold uppercase tracking-wider text-primary hover:text-white transition-colors flex items-center gap-1 group/btn"
                >
                  <span>Verify Credentials</span>
                  <ExternalLink className="w-3 h-3 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
