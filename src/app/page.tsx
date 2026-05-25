import { getPortfolioData } from "@/data/portfolio";
import { PortfolioContent } from "@/components/PortfolioContent";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <div className="flex min-h-screen flex-col w-full">
      <PortfolioContent data={data} />
    </div>
  );
}
