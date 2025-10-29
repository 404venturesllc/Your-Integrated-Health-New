import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Images larger than 1MB - convert to WebP
const largeImagesToConvert = [
  'src/assets/ba13d4883035a4786187879b02156d64fb30faf2.png', // 2.6MB → 1.15MB (already optimized)
  'src/assets/91204406f01523c66794714f7b4dc1dabb04d514.png', // 2.2MB
  'src/assets/885d39ce26a80b9d46612018586366740639636e.png', // 1.3MB → 0.62MB (already optimized)
  'src/assets/78b71585e94f89c8bedddcbdbfb15ad78533cf4e.png', // 1.1MB → 0.49MB (already optimized)
];

async function convertToWebP(pngPath) {
  const fullPath = path.join(__dirname, pngPath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Skipping ${pngPath} - file not found`);
    return null;
  }

  const originalStats = fs.statSync(fullPath);
  const originalSize = originalStats.size;
  const webpPath = fullPath.replace(/\.png$/, '.webp');

  console.log(`\n📸 Converting: ${path.basename(pngPath)}`);
  console.log(`   Original PNG size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);

  try {
    // Convert to WebP with high quality (95 = nearly lossless)
    await sharp(fullPath)
      .webp({ quality: 95, effort: 6 }) // effort 6 = better compression
      .toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    const webpSize = webpStats.size;
    const reduction = ((originalSize - webpSize) / originalSize * 100).toFixed(1);

    console.log(`   WebP size: ${(webpSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   ✨ ${reduction}% smaller (saved ${((originalSize - webpSize) / 1024 / 1024).toFixed(2)} MB)`);

    return {
      original: path.basename(pngPath),
      webp: path.basename(webpPath),
      originalSize,
      webpSize,
      reduction,
      path: pngPath
    };
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🎨 Converting large PNGs to WebP format...\n');
  console.log('WebP advantages:');
  console.log('  - 70-90% smaller file size than PNG');
  console.log('  - Same or better visual quality');
  console.log('  - Supported by all modern browsers\n');

  const results = [];

  for (const imagePath of largeImagesToConvert) {
    const result = await convertToWebP(imagePath);
    if (result) {
      results.push(result);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 CONVERSION SUMMARY');
  console.log('='.repeat(60));

  let totalOriginal = 0;
  let totalWebP = 0;

  results.forEach(r => {
    totalOriginal += r.originalSize;
    totalWebP += r.webpSize;
    console.log(`  ${r.original}`);
    console.log(`    → ${r.webp} (${r.reduction}% smaller)`);
  });

  const totalReduction = ((totalOriginal - totalWebP) / totalOriginal * 100).toFixed(1);

  console.log(`\nTotal PNG size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total WebP size: ${(totalWebP / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total saved: ${((totalOriginal - totalWebP) / 1024 / 1024).toFixed(2)} MB (${totalReduction}%)`);

  console.log('\n✅ Conversion complete!');
  console.log('\n📝 Next steps:');
  console.log('  1. Check image quality in your browser');
  console.log('  2. Update import statements to use .webp files');
  console.log('  3. Keep .png files as fallback for older browsers');
}

main().catch(console.error);
