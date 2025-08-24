#!/usr/bin/env node

import { spawn } from 'child_process';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

console.log('🚀 Starting Portfolio in Local Development Mode');
console.log('================================================\n');

// Check if tsx is available
function checkTsx() {
  try {
    require.resolve('tsx');
    console.log('✅ TypeScript execution engine found');
    return true;
  } catch (error) {
    console.log('❌ tsx not found, installing...');
    return false;
  }
}

// Install tsx if needed
function installTsx() {
  return new Promise((resolve, reject) => {
    console.log('📦 Installing tsx...');
    const install = spawn('npm', ['install', 'tsx'], { stdio: 'inherit' });
    install.on('close', (code) => {
      if (code === 0) {
        console.log('✅ tsx installed successfully');
        resolve(true);
      } else {
        reject(new Error('Failed to install tsx'));
      }
    });
  });
}

// Start the development server
async function startDevelopment() {
  try {
    // Check and install tsx if needed
    if (!checkTsx()) {
      await installTsx();
    }

    console.log('\n🎯 Starting development server...');
    console.log('   Backend: http://localhost:5000');
    console.log('   This includes both API and frontend\n');

    // Set environment variables
    const env = {
      ...process.env,
      NODE_ENV: 'development'
    };

    // Start the server using local configuration
    const serverProcess = spawn('npx', ['tsx', 'server/local-index.ts'], {
      stdio: 'inherit',
      env
    });

    serverProcess.on('error', (error) => {
      console.error('\n❌ Failed to start server:', error.message);
      console.log('\n🔧 Troubleshooting:');
      console.log('   1. Make sure Node.js version is 18 or higher');
      console.log('   2. Run: npm install');
      console.log('   3. Try: npx tsx server/local-index.ts');
      process.exit(1);
    });

    serverProcess.on('close', (code) => {
      console.log(`\n👋 Server stopped with code ${code}`);
    });

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      console.log('\n🛑 Shutting down gracefully...');
      serverProcess.kill('SIGINT');
      setTimeout(() => {
        process.exit(0);
      }, 1000);
    });

  } catch (error) {
    console.error('\n❌ Failed to start development environment:', error.message);
    process.exit(1);
  }
}

startDevelopment();