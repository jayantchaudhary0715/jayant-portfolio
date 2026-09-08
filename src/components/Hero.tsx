"use client";

import { Mail, ArrowRight, ShieldCheck, Cpu, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6 md:px-12"
    >
      {/* Background grids and glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]" />
      <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] bg-primary/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-[20%] right-[10%] w-[350px] h-[350px] bg-secondary/10 rounded-full blur-[120px] animate-pulse" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10 py-12 md:py-24">
        {/* Text Content */}
        <div className="lg:col-span-7 text-center lg:text-left flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/5 text-xs text-primary font-medium w-fit mx-auto lg:mx-0"
          >
            <ShieldCheck className="w-4 h-4 text-accent-emerald" />
            <span>Full-Stack Web Dev & Cyber Security</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
          >
            Hi, I am <br />
            <span className="text-gradient font-black">Jayant Chaudhary</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            A passionate **Computer Science Undergrad** (B.Tech, 2027)
            experienced in building robust, secure full-stack applications with
            **Python (Django)** and **JavaScript**.
          </motion.p>

          {/* Social Links and Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-primary hover:bg-primary-dark text-background font-semibold rounded-xl flex items-center gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/45 transition-all duration-300 group"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-card-bg hover:bg-card-hover border border-white/10 text-white font-semibold rounded-xl transition-all duration-300"
            >
              Get in Touch
            </a>
          </motion.div>

          {/* Icon Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center lg:justify-start gap-5 items-center mt-4 text-gray-400"
          >
            <a
              href="https://github.com/jayantchaudhary0715"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/jayant-chaudhary-135853381?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a
              href="Jayantchaudhary0715@gmail.com"
              className="hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="Send Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>
        </div>

        {/* Graphic Area */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-full max-w-[400px] aspect-square rounded-3xl overflow-hidden glass border border-white/10 p-6 flex flex-col justify-between shadow-2xl shadow-primary/10 group hover:border-primary/30 transition-all duration-300"
          >
            {/* Ambient Background decoration */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-bl-full opacity-10 group-hover:opacity-20 transition-opacity" />

            {/* Simulated terminal look */}
            <div className="flex items-center gap-1.5 border-b border-white/5 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-[10px] text-gray-500 font-mono ml-2">
                portfolio.sh
              </span>
            </div>

            {/* Interactive SVG / Graphic representation */}
            <div className="flex-1 flex flex-col justify-center items-center py-6 gap-6 relative">
              <svg
                width="160"
                height="160"
                viewBox="0 0 200 200"
                className="text-primary hover:rotate-6 transition-transform duration-500"
              >
                {/* Cybersecurity Shield */}
                <defs>
                  <linearGradient
                    id="shieldGrad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#6366f1" />
                  </linearGradient>
                </defs>
                <circle
                  cx="100"
                  cy="100"
                  r="90"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeDasharray="5 5"
                  opacity="0.3"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="70"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="10 15"
                  className="animate-spin"
                  style={{ animationDuration: "20s" }}
                />

                {/* Node Grid */}
                <path
                  d="M 60,100 L 140,100 M 100,60 L 100,140 M 70,70 L 130,130 M 70,130 L 130,70"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  opacity="0.2"
                />

                {/* Floating Node dots */}
                <circle cx="60" cy="100" r="4" fill="#6366f1" />
                <circle cx="140" cy="100" r="4" fill="#6366f1" />
                <circle cx="100" cy="60" r="4" fill="#06b6d4" />
                <circle cx="100" cy="140" r="4" fill="#06b6d4" />

                {/* Shield Path */}
                <path
                  d="M 100,50 C 120,50 140,45 140,45 C 140,85 130,125 100,145 C 70,125 60,85 60,45 C 60,45 80,50 100,50 Z"
                  fill="url(#shieldGrad)"
                  opacity="0.85"
                  className="drop-shadow-[0_8px_24px_rgba(6,182,212,0.4)]"
                />

                {/* Checkmark or padlock inside shield */}
                <path
                  d="M 85,95 L 97,107 L 120,80"
                  fill="none"
                  stroke="#030712"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Decorative Tech Items */}
              <div className="flex justify-around w-full px-4 text-xs font-mono text-gray-400 select-none">
                <span className="flex items-center gap-1">
                  <Code2 className="w-3.5 h-3.5 text-primary" /> Python
                </span>
                <span className="flex items-center gap-1">
                  <Cpu className="w-3.5 h-3.5 text-secondary" /> Django
                </span>
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-emerald" />{" "}
                  Secure
                </span>
              </div>
            </div>

            {/* Tech stats overview inside card */}
            <div className="border-t border-white/5 pt-4 text-left">
              <span className="text-[10px] text-primary uppercase tracking-wider font-semibold">
                Location
              </span>
              <p className="text-sm font-medium text-white">
                Meerut, Uttar Pradesh, India
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
