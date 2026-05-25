import fs from 'fs';
import path from 'path';

export type Project = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  images: string[];
};

export type PersonalInfo = {
  name: string;
  title: string;
  tagline: string;
  about: string;
};

export type PortfolioData = {
  personalInfo: PersonalInfo;
  projects: Project[];
};

const projectDetails: Record<string, { title: string, description: string, tech: string[] }> = {
  "Rabet": {
    "title": "Rabet",
    "description": "A comprehensive mobile application built with Flutter and a .NET Backend, designed for seamless user experience and robust data handling.",
    "tech": ["Flutter", "iOS", "Android", ".NET", "C#", "Dart"]
  },
  "News": {
    "title": "News App",
    "description": "A fast and responsive news delivery application providing real-time updates and categorized articles using a solid .NET infrastructure.",
    "tech": ["Flutter", "iOS", "Android", ".NET", "REST APIs"]
  },
  "Hr": {
    "title": "HR App",
    "description": "An internal human resources management tool facilitating employee tracking, attendance, and request management.",
    "tech": ["Flutter", "iOS", "Android", ".NET", "SQL Server"]
  },
  "Souq-Customer": {
    "title": "Souq Customer App",
    "description": "A modern e-commerce mobile platform offering intuitive searching, cart management, and secure checkout processes for end users.",
    "tech": ["Flutter", "iOS", "Android", ".NET", "Payment UI"]
  },
  "Souq-Seller": {
    "title": "Souq Seller App",
    "description": "A comprehensive dashboard and management app for sellers to track orders, manage inventory, and monitor analytics.",
    "tech": ["Flutter", "iOS", "Android", ".NET", "Analytics"]
  },
  "CoffeShop": {
    "title": "CoffeeShop App",
    "description": "A sleek and engaging ordering app for a coffee shop, enabling users to customize drinks, view menus, and place orders smoothly.",
    "tech": ["Flutter", "iOS", "Android", ".NET", "Animations"]
  }
};

export async function getPortfolioData(): Promise<PortfolioData> {
  const projectsDir = path.join(process.cwd(), 'public', 'projects');
  
  let folders: string[] = [];
  try {
    folders = fs.readdirSync(projectsDir);
  } catch (error) {
    console.error("Failed to read projects directory:", error);
  }

  const projects = folders.map(folder => {
    const folderPath = path.join(projectsDir, folder);
    const stat = fs.statSync(folderPath);
    if (!stat.isDirectory()) return null;
    
    // Auto-read images, support .png, .jpg, .jpeg
    const files = fs.readdirSync(folderPath);
    const images = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return ['.png', '.jpg', '.jpeg'].includes(ext);
    });
    
    // Sort images alphabetically
    images.sort((a, b) => a.localeCompare(b, undefined, {numeric: true, sensitivity: 'base'}));
    
    const details = projectDetails[folder] || {
        title: folder,
        description: `Project ${folder} description.`,
        tech: ["Flutter", "iOS", "Android"]
    };

    return {
        id: folder.toLowerCase(),
        title: details.title,
        description: details.description,
        tech: details.tech,
        // Map exactly to the public URL for Next.js and react-pdf
        images: images.map(img => `/projects/${folder}/${img}`)
    };
  }).filter(Boolean) as Project[];

  // Strictly order projects as requested
  const order = ["rabet", "souq-customer", "souq-seller", "news", "hr", "coffeshop"];
  projects.sort((a, b) => {
    const aIndex = order.indexOf(a.id);
    const bIndex = order.indexOf(b.id);
    // If not found in order array, put at the end
    return (aIndex === -1 ? 999 : aIndex) - (bIndex === -1 ? 999 : bIndex);
  });

  return {
    personalInfo: {
      name: "Abdelrhman Nagy",
      title: "Mobile Developer | Flutter | iOS | Android",
      tagline: "Building polished, scalable, and modern mobile applications with a strong focus on performance and user experience.",
      about: "I am a senior mobile developer specializing in creating seamless, high-performance applications with Flutter. I focus on delivering premium user experiences, robust architectures, and scalable solutions for iOS and Android.",
    },
    projects
  };
}
