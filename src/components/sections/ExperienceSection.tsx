"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Mobile App Developer",
    company: "Souq Al-Ashar",
    period: "04/2025 - Present",
    description: "Developing and maintaining features for Customer, Seller, and Delivery applications. Implementing workflows for shopping carts, checkout, payment, seller onboarding, and real-time delivery tracking.",
  },
  {
    role: "Mobile App Developer",
    company: "Dar Al-Ifta",
    period: "06/2023 - 03/2025",
    description: "Refactored existing Android Java and iOS Swift code to improve readability, maintainability and UI. Developed a feature-rich Flutter app for HR to manage employees. Implemented unit/integration tests and optimized performance with caching.",
  },
  {
    role: "Mobile App Developer",
    company: "Edge Technology",
    period: "03/2022 - 06/2023",
    description: "Designed and developed a mobile app for Electricity meters that allowed for easy monitoring and controlling. Utilized user feedback to enhance design and engagement. Developed a desktop app for programming smart meters.",
  }
];

export function ExperienceSection() {
  return (
    <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold font-display tracking-tight mb-4">Experience</h2>
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 group"
          >
            <div className="md:w-1/4 text-zinc-500 font-mono text-sm mt-1">
              {exp.period}
            </div>
            <div className="md:w-3/4 relative pl-4 md:pl-8 border-l border-black/10 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/30 transition-colors">
              <div className="absolute w-2 h-2 bg-zinc-300 dark:bg-zinc-700 group-hover:bg-black dark:group-hover:bg-white rounded-full -left-[5px] top-2 transition-colors" />
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">{exp.role}</h3>
              <h4 className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">{exp.company}</h4>
              <p className="text-zinc-600 dark:text-zinc-500 leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
