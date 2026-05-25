"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
        <h2 className="text-4xl md:text-6xl font-bold font-display tracking-tight mb-6">Let's build together.</h2>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mb-12">
          Available for new opportunities. Whether you have a project to discuss or just want to say hi, my inbox is open.
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <ContactLink href="mailto:abdelrhman.nagy98@gmail.com" icon={<Mail className="w-6 h-6" />} label="Email Me" />
          <ContactLink href="https://github.com/Abdelrhman-Nagy" icon={<GithubIcon />} label="GitHub" />
          <ContactLink href="https://www.linkedin.com/in/abdelrhman-nagy-6283241b2" icon={<LinkedinIcon />} label="LinkedIn" />
        </div>
      </motion.div>
    </section>
  );
}

function ContactLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 px-6 py-4 rounded-2xl glass transition-colors"
    >
      {icon}
      <span className="font-medium text-white">{label}</span>
    </motion.a>
  );
}
