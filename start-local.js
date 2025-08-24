#!/usr/bin/env node

// Simple local development server
import { spawn } from 'child_process';
import path from 'path';

console.log('🚀 Starting local development server...\n');

// Set environment variable for cross-platform compatibility
process.env.NODE_ENV = 'development';

// Start the server using tsx
const serverProcess = spawn('npx', ['tsx', 'server/index.ts'], {
  stdio: 'inherit',
  shell: true,
  env: { ...process.env, NODE_ENV: 'development' }
});

serverProcess.on('close', (code) => {
  console.log(`\nServer process exited with code ${code}`);
});

serverProcess.on('error', (error) => {
  console.error('Failed to start server:', error.message);
  
  console.log('\n💡 Alternative: Try running these commands separately:');
  console.log('   npm install tsx -g');
  console.log('   tsx server/index.ts');
});

// Handle Ctrl+C gracefully
process.on('SIGINT', () => {
  console.log('\n👋 Shutting down server...');
  serverProcess.kill();
  process.exit(0);
});