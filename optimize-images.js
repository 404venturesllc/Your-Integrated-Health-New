import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The 4 largest images that need compression
const imagesToOptimize = [
  'src/assets/ba13d4883035a4786187879b02156d64fb30faf2.png',
  'src/assets/91204406f01523c66794714f7b4dc1dabb04d514.png',
  'src/assets/885d39ce26a80b9d46612018586366740639636e.png',
  'src/assets/blog/Weight loss blog 1.png',
  'src/assets/0a190a2b9d3e402ba32a1e4c075239fb1a49c61e.png',
  'src/assets/78b71585e94f89c8bedddcbdbfb15ad78533cf4e.png',
];

async function optimizeImage(imagePath) {
  const fullPath = path.join(__dirname, imagePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Skipping ${imagePath} - file not found`);
    return;
  }

  const originalStats = fs.statSync(fullPath);
  const originalSize = originalStats.size;

  console.log(`\n📸 Processing: ${path.basename(imagePath)}`);
  console.log(`   Original size: ${(originalSize / 1024 / 1024).toFixed(2)} MB`);

  // Create backup
  const backupPath = fullPath.replace(/\.png$/, '.png.backup');
  if (!fs.existsSync(backupPath)) {
    fs.copyFileSync(fullPath, backupPath);
    console.log(`   ✅ Backup created`);
  }

  try {
    // Optimize PNG with high quality settings
    // quality: 90 = excellent visual quality, good compression
    // compressionLevel: 9 = maximum compression
    await sharp(fullPath)
      .png({
        quality: 90,
        compressionLevel: 9,
        adaptiveFiltering: true,
        palette: true // Use palette for even better compression
      })
      .toFile(fullPath + '.tmp');

    // Replace original with optimized
    fs.unlinkSync(fullPath);
    fs.renameSync(fullPath + '.tmp', fullPath);

    const newStats = fs.statSync(fullPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`   New size: ${(newSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   ✨ Reduced by ${reduction}% (saved ${((originalSize - newSize) / 1024 / 1024).toFixed(2)} MB)`);

    return {
      file: path.basename(imagePath),
      originalSize,
      newSize,
      reduction
    };
  } catch (error) {
    console.error(`   ❌ Error optimizing: ${error.message}`);
    // Restore from backup if optimization failed
    if (fs.existsSync(backupPath)) {
      fs.copyFileSync(backupPath, fullPath);
    }
    return null;
  }
}

async function main() {
  console.log('🚀 Starting image optimization...\n');
  console.log('This will:');
  console.log('  - Create backups (.png.backup) before compressing');
  console.log('  - Use high-quality compression (90% quality)');
  console.log('  - Maintain visual quality while reducing file size\n');

  const results = [];

  for (const imagePath of imagesToOptimize) {
    const result = await optimizeImage(imagePath);
    if (result) {
      results.push(result);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 OPTIMIZATION SUMMARY');
  console.log('='.repeat(60));

  let totalOriginal = 0;
  let totalNew = 0;

  results.forEach(r => {
    totalOriginal += r.originalSize;
    totalNew += r.newSize;
  });

  const totalReduction = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);

  console.log(`Total original size: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total new size: ${(totalNew / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Total saved: ${((totalOriginal - totalNew) / 1024 / 1024).toFixed(2)} MB (${totalReduction}%)`);
  console.log('\n✅ Optimization complete!');
  console.log('\n💡 Tip: Check the images in your browser to verify quality.');
  console.log('   If you\'re not happy, delete the .png files and rename .png.backup files back.');
}

main().catch(console.error);
