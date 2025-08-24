#!/usr/bin/env node

/**
 * Development build script for Lovable compatibility
 * This script handles the build:dev command that Lovable requires
 */

const { execSync } = require('child_process');
const path = require('path');

try {
  console.log('🔨 Starting development build...');
  
  // Run vite build in development mode
  execSync('vite build --mode development', {
    stdio: 'inherit',
    cwd: process.cwd(),
    env: {
      ...process.env,
      NODE_ENV: 'development'
    }
  });
  
  console.log('✅ Development build completed successfully!');
  process.exit(0);
  
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}