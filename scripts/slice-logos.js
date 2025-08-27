/*
  Usage:
    node scripts/slice-logos.js public/logos/grid.png 3 8 public/logos/sliced
  - 3 = columns, 8 = rows (adjust to your grid)
*/
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function sliceGrid(sourcePath, cols, rows, outDir) {
  if (!fs.existsSync(sourcePath)) {
    console.error(`Source image not found: ${sourcePath}`);
    process.exit(1);
  }
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const img = sharp(sourcePath);
  const meta = await img.metadata();
  const cellW = Math.floor(meta.width / cols);
  const cellH = Math.floor(meta.height / rows);

  const tasks = [];
  let index = 1;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const left = c * cellW;
      const top = r * cellH;
      const outPath = path.join(outDir, `${String(index).padStart(2, '0')}.png`);
      tasks.push(
        img
          .extract({ left, top, width: cellW, height: cellH })
          .trim()
          .extend({ top: 10, bottom: 10, left: 20, right: 20, background: { r: 255, g: 255, b: 255, alpha: 0 } })
          .resize({ height: 80, fit: 'inside', withoutEnlargement: true })
          .toFile(outPath)
      );
      index++;
    }
  }
  await Promise.all(tasks);
  console.log(`Sliced ${index - 1} logos to ${outDir}`);
}

async function main() {
  const sourcePath = process.argv[2] || 'public/logos/grid.png';
  const cols = parseInt(process.argv[3] || '3', 10);
  const rows = parseInt(process.argv[4] || '8', 10);
  const outDir = process.argv[5] || 'public/logos/sliced';
  await sliceGrid(sourcePath, cols, rows, outDir);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});


