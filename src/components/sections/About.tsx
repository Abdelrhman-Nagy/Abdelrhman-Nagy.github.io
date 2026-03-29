import { PortfolioData } from "@/data/portfolio";

export function About({ data }: { data: PortfolioData }) {
  const { about } = data.personalInfo;

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-4xl">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white mb-8">
          About Me
        </h2>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
          {about}
        </p>
      </div>
    </section>
  );
}
