"use client";

import { PDFDownloadLink } from "@react-pdf/renderer";
import { PortfolioPDF } from "./PortfolioPDF";
import { Download } from "lucide-react";
import { useState, useEffect } from "react";
import { PortfolioData } from "@/data/portfolio";

export function DownloadPdfButton({ data }: { data: PortfolioData }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent SSR hydration mismatch and wait for window.location to be available
  if (!isMounted) {
    return (
      <button className="px-6 py-4 rounded-full flex items-center space-x-2 border-2 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 font-semibold cursor-not-allowed">
        <Download size={20} />
        <span>Loading PDF...</span>
      </button>
    );
  }

  // Prepend the base URL so @react-pdf/renderer fetches from absolute HTTP URLs in the browser
  const baseUrl = typeof window !== "undefined" ? window.location.origin : "";
  const resolvedData = {
    ...data,
    projects: data.projects.map(p => ({
      ...p,
      images: p.images.map(img => baseUrl + img)
    }))
  };

  return (
    <PDFDownloadLink
      document={<PortfolioPDF data={resolvedData} />}
      fileName="Abdelrhman_Nagy_Portfolio.pdf"
      className="px-6 py-4 rounded-full flex items-center space-x-2 border-2 border-zinc-200 dark:border-zinc-800 hover:border-zinc-900 dark:hover:border-zinc-100 dark:text-zinc-100 font-semibold transition-colors"
    >
      {({ blob, url, loading, error }) => (
        <>
          <Download size={20} />
          <span>{loading ? "Preparing PDF..." : "Download PDF"}</span>
        </>
      )}
    </PDFDownloadLink>
  );
}
