import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Re-compress WebP files with lower quality (still looks great!)
// Also compress the Weight loss blog PNG and other large images
const imagesToRecompress = [
  { input: 'src/assets/ba13d4883035a4786187879b02156d64fb30faf2.webp', quality: 80 },
  { input: 'src/assets/91204406f01523c66794714f7b4dc1dabb04d514.webp', quality: 80 },
  { input: 'src/assets/885d39ce26a80b9d46612018586366740639636e.webp', quality: 80 },
  { input: 'src/assets/78b71585e94f89c8bedddcbdbfb15ad78533cf4e.webp', quality: 80 },
  { input: 'src/assets/blog/Weight loss blog 1.png', output: 'src/assets/blog/Weight loss blog 1.webp', quality: 85 },
  { input: 'src/assets/0a190a2b9d3e402ba32a1e4c075239fb1a49c61e.png', output: 'src/assets/0a190a2b9d3e402ba32a1e4c075239fb1a49c61e.webp', quality: 85 },
  { input: 'src/assets/blog/Energy blog 2.webp', quality: 80 },
  { input: 'src/assets/blog/Blog Functional Medicine 3.png', output: 'src/assets/blog/Blog Functional Medicine 3.webp', quality: 85 },
  { input: 'src/assets/blog/Gut Health Blog 14.png', output: 'src/assets/blog/Gut Health Blog 14.webp', quality: 85 },
  { input: 'src/assets/48e69dbd44c881ef26889bac0c30d7dadc6b9965.png', output: 'src/assets/48e69dbd44c881ef26889bac0c30d7dadc6b9965.webp', quality: 85 },
  { input: 'src/assets/blog/Fast food Blog 11.png', output: 'src/assets/blog/Fast food Blog 11.webp', quality: 85 },
];

async function recompressImage(config) {
  const inputPath = path.join(__dirname, config.input);
  const outputPath = config.output ? path.join(__dirname, config.output) : inputPath;

  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${config.input} - file not found`);
    return null;
  }

  const originalStats = fs.statSync(inputPath);
  const originalSize = originalStats.size;

  console.log(`\n📸 Processing: ${path.basename(config.input)}`);
  console.log(`   Original size: ${(originalSize / 1024).toFixed(2)} KB`);

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // If it's a WebP, recompress it
    // If it's PNG, convert to WebP
    if (metadata.format === 'webp' || config.input.endsWith('.webp')) {
      await sharp(inputPath)
        .webp({ quality: config.quality, effort: 6 })
        .toFile(outputPath + '.tmp');
    } else {
      // Convert PNG to WebP
      await sharp(inputPath)
        .webp({ quality: config.quality, effort: 6 })
        .toFile(outputPath + '.tmp');
    }

    // Replace original
    if (fs.existsSync(outputPath + '.tmp')) {
      if (fs.existsSync(outputPath)) {
        fs.unlinkSync(outputPath);
      }
      fs.renameSync(outputPath + '.tmp', outputPath);
    }

    const newStats = fs.statSync(outputPath);
    const newSize = newStats.size;
    const reduction = ((originalSize - newSize) / originalSize * 100).toFixed(1);

    console.log(`   New size: ${(newSize / 1024).toFixed(2)} KB`);
    console.log(`   ✨ Reduced by ${reduction}% (saved ${((originalSize - newSize) / 1024).toFixed(2)} KB)`);

    return {
      file: path.basename(config.input),
      originalSize,
      newSize,
      reduction
    };
  } catch (error) {
    console.error(`   ❌ Error: ${error.message}`);
    return null;
  }
}

async function main() {
  console.log('🚀 Further compressing images for mobile performance...\n');
  console.log('Strategy:');
  console.log('  - WebP quality: 95 → 80 (still excellent quality)');
  console.log('  - Convert remaining large PNGs to WebP');
  console.log('  - Target: Get mobile performance to 70-80+\n');

  const results = [];

  for (const config of imagesToRecompress) {
    const result = await recompressImage(config);
    if (result) {
      results.push(result);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('📊 COMPRESSION SUMMARY');
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
  console.log('\n✅ Compression complete!');
  console.log('\n📱 Expected mobile performance improvement: +15-20 points');
}

main().catch(console.error);
