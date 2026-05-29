"use client";

import { motion } from "framer-motion";

interface SkillChipProps {
  label: string;
}

export function SkillChip({ label }: SkillChipProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="glass px-4 py-2 rounded-full text-sm font-medium text-secondary hover:text-white dark:text-zinc-300 dark:hover:text-white hover:bg-secondary dark:hover:bg-secondary transition-colors cursor-default border-secondary/20"
    >
      {label}
    </motion.div>
  );
}
