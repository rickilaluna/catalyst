#!/usr/bin/env node

const { execSync } = require('child_process');

// Log the start of the build
console.log('Starting Vercel build process...');

// Run the build command
try {
  // Set environment variables
  process.env.NEXT_DISABLE_TYPECHECK = '1';
  process.env.NEXT_TELEMETRY_DISABLED = '1';
  
  console.log('Running Next.js build...');
  execSync('next build', { stdio: 'inherit' });
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}