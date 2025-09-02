const { execSync } = require('child_process');
const path = require('path');

console.log('Starting build process...');

try {
  // Install dependencies
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Build using node to execute vite
  console.log('Building with vite...');
  const vitePath = path.join(__dirname, 'node_modules', 'vite', 'bin', 'vite.js');
  execSync(`node "${vitePath}" build`, { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
