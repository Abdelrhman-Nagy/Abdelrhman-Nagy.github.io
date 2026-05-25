"use client";

import { motion } from "framer-motion";
import { SkillChip } from "@/components/ui/SkillChip";

const mobileSkills = ["Flutter", "Dart", "Swift", "Java", "iOS", "Android"];
const backendSkills = [".NET Core", "C#", "SQL", "Microsoft SQL Server", "PostgreSQL", "Microsoft Azure"];
const otherSkills = ["Git", "Firebase", "Docker", "Problem Solving", "Time Management", "Communication"];

export function SkillsSection() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 text-center md:text-left"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">Core Expertise</h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <SkillGroup title="Mobile Engineering" skills={mobileSkills} delay={0.1} />
        <SkillGroup title="Backend & APIs" skills={backendSkills} delay={0.2} />
        <SkillGroup title="Tools & Architecture" skills={otherSkills} delay={0.3} />
      </div>
    </section>
  );
}

function SkillGroup({ title, skills, delay }: { title: string; skills: string[]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col"
    >
      <h3 className="text-xl font-semibold mb-6 text-zinc-900 dark:text-zinc-200">{title}</h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillChip key={skill} label={skill} />
        ))}
      </div>
    </motion.div>
  );
}
