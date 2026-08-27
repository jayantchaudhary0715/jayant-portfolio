"use client";

import { Trophy, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 px-6 md:px-12 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Activities</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Leadership & Activities</h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: Event Coordinator */}
          <motion.div
            whileHover={{ y: -6 }}
            className="glass border-white/5 p-8 rounded-3xl flex flex-col gap-6 shadow-2xl transition-all duration-300 group hover:border-primary/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-primary/10 transition-colors">
                <Trophy className="w-6 h-6 text-primary group-hover:scale-110 transition-all duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  Event Coordinator
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">Meerut Institute of Technology</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Planned and executed college-level events, managing end-to-end logistics, scheduling, budgeting, and cross-team coordination to deliver successful student experiences.
            </p>

            <ul className="space-y-3 mt-2 border-t border-white/5 pt-5">
              <li className="flex gap-3 items-start text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                <span>Coordinated logistics and vendor relations for campus tech meets and student festivals.</span>
              </li>
              <li className="flex gap-3 items-start text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                <span>Facilitated communication between student committees, faculty sponsors, and external sponsors.</span>
              </li>
            </ul>
          </motion.div>

          {/* Card 2: Team Leadership */}
          <motion.div
            whileHover={{ y: -6 }}
            className="glass border-white/5 p-8 rounded-3xl flex flex-col gap-6 shadow-2xl transition-all duration-300 group hover:border-secondary/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-secondary/10 transition-colors">
                <Users className="w-6 h-6 text-secondary group-hover:scale-110 transition-all duration-300" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-secondary transition-colors">
                  Team Leadership
                </h3>
                <p className="text-xs text-gray-400 mt-0.5">Academic & Extracurricular Initiatives</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed">
              Led multiple academic software projects and extracurricular teams. Highly focused on defining clear objectives, assigning tasks based on member strengths, and coordinating timelines.
            </p>

            <ul className="space-y-3 mt-2 border-t border-white/5 pt-5">
              <li className="flex gap-3 items-start text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                <span>Spearheaded project groups, dividing coding blocks (REST APIs, DB design) to meet curriculum schedules.</span>
              </li>
              <li className="flex gap-3 items-start text-xs text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-accent-emerald shrink-0 mt-0.5" />
                <span>Mentored peers in setting up local Python/Django environments and Git workflows.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
