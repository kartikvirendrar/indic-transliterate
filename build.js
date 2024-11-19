import * as esbuild from 'esbuild';
import fs from 'fs';
import path from 'path';

// Output directory
const outDir = 'dist';

// Ensure the output directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir);
}

// Run the esbuild build process
esbuild.build({
  entryPoints: ['./src/index.js'],  // Update to your actual entry file
  bundle: true,
  minify: true,
  sourcemap: true,
  outdir: outDir,
  loader: {
    '.js': 'jsx',
    '.ts': 'ts',
    '.tsx': 'tsx',
    '.css': 'css',
  },
}).then(() => {
  console.log('Build completed!');
}).catch((err) => {
  console.error('Build failed:', err);
  process.exit(1);
});
