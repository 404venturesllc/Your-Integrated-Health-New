import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// The 3 files that were locked
const imagesToRecompress = [
  'src/assets/ba13d4883035a4786187879b02156d64fb30faf2.webp',
  'src/assets/885d39ce26a80b9d46612018586366740639636e.webp',
  'src/assets/78b71585e94f89c8bedddcbdbfb15ad78533cf4e.webp',
];

async function recompressImage(imagePath) {
  const fullPath = path.join(__dirname, imagePath);

  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  Skipping - file not found`);
    return null;
  }

  const originalStats = fs.statSync(fullPath);
  const originalSize = originalStats.size;

  console.log(`\n📸 Processing: ${path.basename(imagePath)}`);
  console.log(`   Original size: ${(originalSize / 1024).toFixed(2)} KB`);

  try {
    await sharp(fullPath)
      .webp({ quality: 80, effort: 6 })
      .toFile(fullPath + '.new');

    const newStats = fs.statSync(fullPath + '.new');
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    // Replace original
    fs.unlinkSync(fullPath);
    fs.renameSync(fullPath + '.new', fullPath);

    console.log(`   New size: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`   ✨ Reduced by ${reduction}% (saved ${((originalSize - newSize) / 1024).toFixed(2)} KB)`);

    return { originalSize, newSize, reduction };
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🔄 Compressing the 3 locked files...\n');

  let totalOriginal = 0;
  let totalNew = 0;

  for (const imagePath of imagesToRecompress) {
    const result = await recompressImage(imagePath);
    if (result) {
      totalOriginal += result.originalSize;
      totalNew += result.newSize;
    }
  }

  const totalReduction = ((totalOriginal - totalNew) / totalOriginal * 100).toFixed(1);

  console.log('\n' + '='.repeat(50));
  console.log(`Total saved: ${((totalOriginal - totalNew) / 1024).toFixed(2)} KB (${totalReduction}%)`);
  console.log('✅ Done!');
}

main().catch(console.error);
