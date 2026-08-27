"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setStatus("sending");
    // Mock API delay
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 bg-transparent relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex flex-col items-center text-center mb-16 gap-3">
          <span className="text-xs uppercase tracking-widest text-primary font-bold">
            Contact
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Get in Touch
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-2" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Info Details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                Let&apos;s build something great together
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                Feel free to reach out if you are looking for a developer, have
                questions, or simply want to connect. I will get back to you as
                soon as possible!
              </p>
            </div>

            <div className="space-y-6 my-6">
              {/* Email */}
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white/5 rounded-xl text-primary border border-white/5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                    Email
                  </span>
                  <a
                    href="mailto:Jayantchaudhary0715@gmail.com"
                    className="block text-sm font-medium text-white hover:text-primary transition-colors break-all"
                  >
                    Jayantchaudhary0715@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white/5 rounded-xl text-secondary border border-white/5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                    Phone
                  </span>
                  <a
                    href="tel:+917505398699"
                    className="block text-sm font-medium text-white hover:text-secondary transition-colors"
                  >
                    +91 7505398699
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex gap-4 items-center">
                <div className="p-3 bg-white/5 rounded-xl text-accent-emerald border border-white/5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-gray-500 tracking-wider">
                    Location
                  </span>
                  <p className="text-sm font-medium text-white">
                    Meerut, Uttar Pradesh, India
                  </p>
                </div>
              </div>
            </div>

            {/* Accent styling graphics */}
            <div className="hidden lg:block w-full h-[100px] rounded-2xl border border-white/5 bg-gradient-to-r from-primary/5 to-secondary/5 relative overflow-hidden">
              <div className="absolute top-2 left-2 text-[10px] text-gray-600 font-mono">
                system.status
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-primary/60">
                Ready for software engineering inquiries
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <motion.form
              onSubmit={handleSubmit}
              className="glass border-white/5 p-8 rounded-3xl flex flex-col gap-6 shadow-2xl relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs font-bold uppercase text-gray-400"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary text-sm transition-colors"
                    placeholder="Jayant Chaudhary"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs font-bold uppercase text-gray-400"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary text-sm transition-colors"
                    placeholder="jayant@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs font-bold uppercase text-gray-400"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formState.subject}
                  onChange={(e) =>
                    setFormState({ ...formState, subject: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary text-sm transition-colors"
                  placeholder="Inquiry about full-stack role"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase text-gray-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-slate-950/50 border border-white/10 rounded-xl text-white focus:outline-none focus:border-primary text-sm transition-colors resize-none"
                  placeholder="Hello Jayant, we would like to interview you for a Python/Django role..."
                />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  status === "success"
                    ? "bg-accent-emerald text-white"
                    : "bg-primary hover:bg-primary-dark text-background hover:shadow-lg hover:shadow-primary/10"
                }`}
              >
                {status === "sending" && <span>Sending Message...</span>}
                {status === "success" && (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                )}
                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
