"use client";

import { Code2, Globe, Server, Database, BrainCircuit, GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code2 className="w-6 h-6 text-primary" />,
    skills: ["Python", "Java", "C++", "C", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend & Web Frameworks",
    icon: <Server className="w-6 h-6 text-secondary" />,
    skills: ["Django", "Django Channels", "WebSockets", "REST APIs", "Node.js (basic)"],
  },
  {
    title: "Web Development",
    icon: <Globe className="w-6 h-6 text-primary" />,
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Bootstrap", "React.js", "Next.js", "Responsive Design",],
  },
  {
    title: "Databases & Design",
    icon: <Database className="w-6 h-6 text-accent-emerald" />,
    skills: ["SQL", "SQLite3", "Database Design", "Relational Models", "mongoDB (basic)"],
  },
  {
    title: "Core CS Fundamentals",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "System Design",
      "software Engineering",
      "Operating Systems (OS)",
      "Computer Networks",
      "Compiler Design",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <GitBranch className="w-6 h-6 text-secondary" />,
    skills: ["Git", "GitHub", "VS Code", "Excel", "PowerPoint","googledocs", "Google Sheets", "Google Slides"],
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
  visible: { y: 0, opacity: 1, transition: { type: "spring" as const, stiffness: 100 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 bg-transparent relative">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">Expertise</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">Technical Skills</h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-2" />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass border-white/5 p-6 rounded-2xl flex flex-col gap-5 shadow-lg shadow-black/10 hover:border-primary/25 hover:shadow-primary/5 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              {/* Badges List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-900 border border-white/5 text-gray-300 hover:border-primary/20 hover:text-white transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
