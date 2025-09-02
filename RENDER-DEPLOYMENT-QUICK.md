# Quick Render Deployment Guide

## 🚀 Deploy to Render in 5 Steps

### 1. Push to Git
```bash
git add .
git commit -m "Ready for Render deployment"
git push origin main
```

### 2. Go to Render
- Visit [render.com](https://render.com)
- Sign in to your account

### 3. Create Static Site
- Click "New +" 
- Select **"Static Site"** (NOT Web Service!)

### 4. Configure
- **Name**: `smartguard-frontend`
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Branch**: `main`

### 5. Deploy
- Click "Create Static Site"
- Wait for build to complete

## ✅ What's Already Configured

- ✅ `render.yaml` - Render configuration
- ✅ `package.json` - Build scripts
- ✅ `vite.config.ts` - Production build settings
- ✅ `_redirects` - SPA routing support
- ✅ `vercel.json` - Alternative deployment option

## 🔧 Local Build Test

```bash
npm install
npm run build
npm run preview
```

## ⚠️ Common Mistakes

1. **Wrong Service Type**: Use "Static Site", NOT "Web Service"
2. **Wrong Directory**: Use `dist`, NOT `src`
3. **Missing Dependencies**: Run `npm install` first

## 📁 Build Output

The `dist/` folder contains:
- `index.html` (1.9 KB)
- `assets/` folder with CSS and JS files
- `_redirects` for routing

## 🌐 Your App Will Be Available At

`https://your-app-name.onrender.com`

## 📚 Full Guide

See `DEPLOYMENT.md` for detailed instructions and troubleshooting.
