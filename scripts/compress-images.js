// scripts/compress-images.js
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Folders
const inputDir = path.join(__dirname, "../public/assets/pictures");
const outputDir = path.join(__dirname, "../public/assets/compressed");

// Create output folder if it doesn't exist
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

// Recursive function to compress images in all subfolders
function compressFolder(folder, relativePath = "") {
  const files = fs.readdirSync(folder);

  files.forEach(file => {
    const fullPath = path.join(folder, file);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      compressFolder(fullPath, path.join(relativePath, file));
    } else if (/\.(jpe?g|png)$/i.test(file)) {
      const outputSubDir = path.join(outputDir, relativePath);
      if (!fs.existsSync(outputSubDir)) fs.mkdirSync(outputSubDir, { recursive: true });

      const outputFileName = file.replace(/\.(jpe?g|png)$/i, ".webp");
      const outputPath = path.join(outputSubDir, outputFileName);

      sharp(fullPath)
        .resize({ width: 1200 }) // resize max width for hero images
        .webp({ quality: 75 })
        .toFile(outputPath)
        .then(() => console.log(`Compressed: ${file} → ${outputFileName}`))
        .catch(err => console.error(err));
    }
  });
}

// Run compression
compressFolder(inputDir);
