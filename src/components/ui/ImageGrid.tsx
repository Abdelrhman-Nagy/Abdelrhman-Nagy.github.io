"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ImageGridProps {
  images: string[];
  projectTitle: string;
  onImageClick: (src: string) => void;
}

export function ImageGrid({ images, projectTitle, onImageClick }: ImageGridProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
      {images.map((src, idx) => (
        <motion.div
          key={idx}
          whileHover={{ scale: 1.02, y: -5 }}
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
          onClick={() => onImageClick(src)}
        >
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-300 pointer-events-none" />
          <Image
            src={src}
            alt={`${projectTitle} screenshot ${idx + 2}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      ))}
    </div>
  );
}
