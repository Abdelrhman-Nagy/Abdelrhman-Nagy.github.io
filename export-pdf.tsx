import React from 'react';
import { renderToFile } from '@react-pdf/renderer';
import { PortfolioPDF } from './src/components/pdf/PortfolioPDF';
import { getPortfolioData } from './src/data/portfolio';
import path from 'path';
import os from 'os';

import fs from 'fs';

async function exportPDF() {
  console.log('Fetching portfolio data...');
  const data = await getPortfolioData();

  // Rewrite image paths to base64 Data URIs so React PDF in Node bypasses global fetch()
  const resolvedData = {
    ...data,
    projects: data.projects.map(p => ({
      ...p,
      images: p.images.map(img => {
        const localPath = path.join(process.cwd(), 'public', img.slice(1));
        const ext = path.extname(localPath).toLowerCase().slice(1);
        const format = ext === 'jpg' ? 'jpeg' : ext;
        const base64 = fs.readFileSync(localPath).toString('base64');
        return `data:image/${format};base64,${base64}`;
      })
    }))
  };

  const desktopDir = path.join(os.homedir(), 'Desktop');
  const outputPath = path.join(desktopDir, 'Abdelrhman_Nagy_Portfolio.pdf');

  console.log(`Rendering PDF to ${outputPath}...`);
  
  await renderToFile(<PortfolioPDF data={resolvedData} />, outputPath);

  console.log('PDF exported successfully!');
}

exportPDF().catch(console.error);
