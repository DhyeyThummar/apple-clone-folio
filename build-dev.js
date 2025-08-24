#!/usr/bin/env node

// Temporary build script to replace missing build:dev
const { spawn } = require('child_process');

console.log('Running development build...');

const buildProcess = spawn('npx', ['vite', 'build', '--mode', 'development'], {
  stdio: 'inherit',
  shell: true
});

buildProcess.on('close', (code) => {
  console.log(`Build process exited with code ${code}`);
  process.exit(code);
});

buildProcess.on('error', (err) => {
  console.error('Build process error:', err);
  process.exit(1);
});