"use client";

import { GraduationCap, Calendar } from "lucide-react";
import { motion } from "framer-motion";

const timeline = [
  {
    type: "university",
    title: "B.Tech in Computer Science and Engineering",
    institution: "Meerut Institute of Technology (MIT), Meerut",
    period: "2023 - 2027",
    details:
      "Currently in 7th semester. Maintaining a 7.5 CGPA (through 6th semester). Relevant coursework includes Data Structures & Algorithms, Database Management Systems, System Design, Operating Systems, Computer Networks, and Compiler Design.",
  },
  {
    type: "school",
    title: "Senior Secondary (Class XII, Science)",
    institution: "Gautam Buddha Balak Inter College",
    period: "Completed 2023",
    details:
      "Secured 76% in CBSE/State examinations, concentrating in physics, chemistry, mathematics, and computer sciences.",
  },
  {
    type: "school",
    title: "Secondary Education (Class X)",
    institution: "Silver Stone Public School, Chandausi",
    period: "Completed 2021",
    details:
      "Secured 86.6% average score, establishing a solid mathematical and analytical foundation.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-slate-900/40 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Biography
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Narrative & Stats */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-gray-300 space-y-4 leading-relaxed text-base md:text-lg"
            >
              <p>
                I am a dedicated Computer Science undergraduate with hands-on
                experience building full-stack web applications. I focus on
                developing secure, database-driven systems and real-time
                interactive features.
              </p>
              <p>
                My technical foundation includes a deep understanding of data
                structures, algorithms, and system design. Using **Python
                (Django)** and **JavaScript**, I love turning complex logic into
                structured, efficient, and user-friendly software solutions.
              </p>
              <p>
                I am constantly expanding my knowledge in cybersecurity, cloud
                architectures, and databases. I aim to apply my problem-solving
                skills to real-world development environments.
              </p>
            </motion.div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mt-2">
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-2xl glass border-white/5 flex flex-col items-center justify-center text-center"
              >
                <span className="text-2xl md:text-3xl font-extrabold text-primary">
                  7.5
                </span>
                <span className="text-[10px] md:text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                  B.Tech CGPA
                </span>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-2xl glass border-white/5 flex flex-col items-center justify-center text-center"
              >
                <span className="text-2xl md:text-3xl font-extrabold text-secondary">
                  2+
                </span>
                <span className="text-[10px] md:text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                  Core Apps
                </span>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="p-4 rounded-2xl glass border-white/5 flex flex-col items-center justify-center text-center"
              >
                <span className="text-2xl md:text-3xl font-extrabold text-accent-emerald">
                  5+
                </span>
                <span className="text-[10px] md:text-xs text-gray-400 mt-1 uppercase tracking-wider font-semibold">
                  Certificates
                </span>
              </motion.div>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-primary" />
              <span>Education Journey</span>
            </h3>

            <div className="border-l border-white/10 pl-6 space-y-8 relative">
              {timeline.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline point indicator */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-primary group-hover:bg-primary transition-colors duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary-dark group-hover:bg-slate-950 transition-colors" />
                  </div>

                  <div className="glass border-white/5 p-5 rounded-2xl group-hover:border-primary/20 transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="text-xs font-mono text-primary flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {edu.period}
                      </span>
                      {edu.type === "university" ? (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-primary/10 text-primary">
                          University
                        </span>
                      ) : (
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-secondary/10 text-secondary">
                          High School
                        </span>
                      )}
                    </div>
                    <h4 className="text-base md:text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {edu.title}
                    </h4>
                    <p className="text-sm text-gray-400 font-medium mt-1 mb-3">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-gray-400 leading-relaxed font-light">
                      {edu.details}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
