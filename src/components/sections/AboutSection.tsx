"use client";

import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full -mr-32 -mt-32 pointer-events-none" />
        
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-8">About Me</h2>
        
        <div className="space-y-6 text-lg md:text-xl text-zinc-400 leading-relaxed">
          <p>
            Experienced Mobile App Developer adept in all stages of advanced mobile development. Knowledgeable in user interface, testing, and debugging processes.
          </p>
          <p>
            Bringing forth expertise in design, installation, testing and maintenance of Mobile Apps. Equipped with a diverse and promising skill-set including <strong className="text-white font-medium">Flutter, Dart, Swift, Java, and .NET Core</strong>.
          </p>
          <p>
            Able to effectively self-manage during independent projects, as well as collaborate in a team setting. I don't just write code; I craft digital experiences that feel smooth, intuitive, and alive.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
