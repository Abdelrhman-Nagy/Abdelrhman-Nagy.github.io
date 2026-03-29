import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { getPortfolioData } from "@/data/portfolio";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <main className="min-h-screen">
      <Hero data={data} />
      <About data={data} />
      <Projects projects={data.projects} />
      
      <footer className="py-12 text-center text-sm text-zinc-500 dark:text-zinc-400 border-t border-zinc-200 dark:border-zinc-800">
        <p>© {new Date().getFullYear()} Abdelrhman Nagy. All rights reserved.</p>
      </footer>
    </main>
  );
}
