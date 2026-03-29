const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function processDirectory(dir) {
  if (!fs.existsSync(dir)) return;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (/\.(png|jpe?g)$/i.test(entry.name)) {
      const tempPath = fullPath + '.tmp';
      try {
        const ext = path.extname(entry.name).toLowerCase();
        
        let processor = sharp(fullPath).resize(1920, 1920, { 
          fit: 'inside', 
          withoutEnlargement: true 
        });

        if (ext === '.png') {
          // Compress PNG preserving alpha
          processor = processor.png({ quality: 75, compressionLevel: 8 });
        } else {
          // Compress JPEG optimally
          processor = processor.jpeg({ quality: 75, progressive: true, mozjpeg: true });
        }

        await processor.toFile(tempPath);
        fs.renameSync(tempPath, fullPath);
        
        const stats = fs.statSync(fullPath);
        console.log(`✅ Optimized [${stats.size > 1024*1024 ? (stats.size/1024/1024).toFixed(1)+'MB' : (stats.size/1024).toFixed(0)+'KB'}]: ${entry.name}`);
      } catch (err) {
        console.error(`❌ Failed to compress ${entry.name}:`, err);
      }
    }
  }
}

const targetDir = path.join(process.cwd(), 'out', 'projects');

console.log(`Starting strict in-place image compression over: ${targetDir}`);
processDirectory(targetDir)
  .then(() => console.log('🎉 Compression complete! Deploying optimized assets...'))
  .catch(err => { 
    console.error('Fatal compression error:', err); 
    process.exit(1); 
  });
