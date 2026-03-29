import { ProjectSection } from "../ui/ProjectSection";
import { Project } from "@/data/portfolio";

export function Projects({ projects }: { projects: Project[] }) {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto space-y-4 px-6 md:px-12 lg:px-24 border-b border-zinc-200 dark:border-zinc-800 pb-8 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-white tracking-tighter">
          Selected Work
        </h2>
        <p className="text-lg text-zinc-500 dark:text-zinc-400">
          Showcasing a selection of mobile & backend applications.
        </p>
      </div>

      <div className="flex flex-col">
        {projects.map((project, idx) => (
          <ProjectSection 
            key={project.id} 
            project={project} 
            index={idx}
          />
        ))}
      </div>
    </section>
  );
}
