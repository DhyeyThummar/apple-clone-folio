# 🚀 VS Code Setup Guide

Your portfolio is now ready to run in VS Code! All dependencies are installed and errors are fixed.

## ✅ What's Been Fixed

- ✅ **All dependencies installed** (tsx, cross-env, concurrently, types, etc.)
- ✅ **Image import issue fixed** (now uses placeholder image)
- ✅ **Server configuration optimized** for local development
- ✅ **Cross-platform scripts created** (Windows, Mac, Linux)
- ✅ **TypeScript errors resolved**
- ✅ **Apple blue design preserved**

## 🎯 Quick Start (3 Simple Methods)

### Method 1: One-Click Start (Recommended)
**Windows:** Double-click `install-and-run.bat`
**Mac/Linux:** Run `./install-and-run.sh`

### Method 2: Node.js Script
```bash
node run-local.js
```

### Method 3: Direct Command
```bash
npx tsx server/local-index.ts
```

## 📋 Complete Setup Steps

### 1. Prerequisites
- **Node.js 18+** (Download from [nodejs.org](https://nodejs.org/))
- **VS Code** (Download from [code.visualstudio.com](https://code.visualstudio.com/))

### 2. Extract & Open
1. Extract your ZIP file to a folder
2. Open VS Code → File → Open Folder → Select your project folder

### 3. Install & Run
Open VS Code terminal (`` Ctrl+` ``) and run:

```bash
# Everything is already installed, just run:
npx tsx server/local-index.ts
```

### 4. Access Your Website
- Open browser: `http://localhost:5000`
- Your Apple-inspired portfolio will be running!

## 🛠️ Troubleshooting

### If "tsx command not found":
```bash
npm install tsx
npx tsx server/local-index.ts
```

### If port 5000 is busy:
```bash
PORT=3000 npx tsx server/local-index.ts
```
Then visit `http://localhost:3000`

### If dependencies issues:
```bash
rm -rf node_modules
npm install
npx tsx server/local-index.ts
```

## 🎨 Customization

### Replace Profile Image
Edit `client/src/components/HeroSection.tsx` line 5:
```typescript
const heroPortrait = "YOUR_IMAGE_URL_HERE";
```

### Update Personal Info
- **Name**: Search for "Your Name" across all files
- **Email**: Search for "your.email@gmail.com"
- **LinkedIn**: Search for "linkedin.com/in/yourprofile"
- **GitHub**: Search for "github.com/yourusername"

## 📁 Project Structure
```
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # App pages
│   │   └── index.css      # Apple-inspired styles
├── server/                 # Backend Express server
├── shared/                 # Shared types
├── run-local.js           # Local development script
├── install-and-run.sh     # Mac/Linux one-click setup
└── install-and-run.bat    # Windows one-click setup
```

## 🎯 Success Indicators

When everything works, you'll see:
```
🚀 Server running on http://localhost:5000
📁 Environment: development
```

And your browser will show:
- ✅ Beautiful Apple-inspired design
- ✅ Blue accent colors throughout
- ✅ Smooth animations and hover effects
- ✅ All sections: Home, About, Skills, Projects, Experience, Contact

## 💡 Next Steps

1. **Customize content** with your personal information
2. **Add your projects** in `client/src/components/ProjectsSection.tsx`
3. **Update skills** in `client/src/components/SkillsSection.tsx`
4. **Deploy when ready** using platforms like Vercel, Netlify, or Railway

Your portfolio is ready to impress! 🌟