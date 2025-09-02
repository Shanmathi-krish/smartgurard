# Deployment Guide for SmartGuard Frontend

## Deploying to Render (Static Site)

### Prerequisites
- A Render account (free tier available)
- Your code pushed to a Git repository (GitHub, GitLab, etc.)

### Step-by-Step Deployment

#### 1. Prepare Your Repository
Make sure your code is committed and pushed to your Git repository.

#### 2. Connect to Render
1. Go to [render.com](https://render.com) and sign in
2. Click "New +" and select **"Static Site"** (NOT Web Service!)
3. Connect your Git repository

#### 3. Configure the Static Site
- **Name**: `smartguard-frontend` (or your preferred name)
- **Branch**: `main` (or your default branch)
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Node Version**: `18` (or higher)

#### 4. Environment Variables (Optional)
Add these if needed:
- `NODE_VERSION`: `18.0.0`

#### 5. Deploy
Click "Create Static Site" and wait for the build to complete.

### ⚠️ IMPORTANT: Use Static Site, NOT Web Service!

**Your Vite React app must be deployed as a Static Site, not a Web Service!**

- **Web Service**: Expects a Node.js server running continuously (like Express.js)
- **Static Site**: Serves pre-built HTML/CSS/JS files (perfect for React apps)
- **Vite builds**: Creates static files in `dist/` folder that just need to be served

### Build and Test Locally

#### 1. Install Dependencies
```bash
npm install
```

#### 2. Build the App
```bash
npm run build
```

#### 3. Preview the Build
```bash
npm run preview
```

### What Gets Built

The build process creates a `dist/` folder containing:
- `index.html` - Main HTML file
- `assets/` folder with:
  - CSS files (minified and optimized)
  - JavaScript files (chunked and minified)
  - `_redirects` file for proper routing

### Important Notes

1. **Client-Side Routing**: The app uses React Router, so all routes are handled client-side
2. **Static Files**: The build generates static HTML, CSS, and JS files in the `dist` folder
3. **SPA Fallback**: All routes redirect to `index.html` to enable client-side routing
4. **Build Output**: The `dist` folder contains all files needed for deployment

### Troubleshooting

#### ❌ "vite permission denied" Error
**Problem**: You're deploying as a Web Service instead of Static Site
**Solution**: 
1. Delete your current Web Service on Render
2. Create a new Static Site instead
3. Use the settings above

#### ❌ Build Failures
- Ensure all dependencies are in `package.json`
- Check Node.js version compatibility (use version 18)
- Verify all imports are correct
- Make sure terser is installed: `npm install terser --save-dev`

#### ❌ "Cannot find module" Errors
- Ensure all dependencies are in `dependencies` or `devDependencies`
- Run `npm install` locally to test
- Check that `package-lock.json` is committed

#### ✅ Routing Issues
- The `_redirects` file handles SPA routing
- All routes are rewritten to `/index.html`
- This ensures React Router works correctly

#### ✅ Performance
- Assets are automatically optimized during build
- CSS and JS are minified and chunked
- Static assets are cached for better performance

### Configuration Files

#### render.yaml
This file configures your deployment with:
- Build command: `npm run build`
- Static publish path: `./dist`
- SPA routing support

#### package.json
Updated with:
- Build script: `vite build`
- Preview script: `vite preview`
- Terser dependency for minification

#### vite.config.ts
Optimized for production with:
- Code splitting
- Asset optimization
- Proper build configuration

### Custom Domain (Optional)
1. In Render dashboard, go to your static site
2. Click "Settings" → "Custom Domains"
3. Add your domain and configure DNS
4. Enable HTTPS (automatic with Render)

### Monitoring
- Render provides built-in analytics
- Check build logs for any errors
- Monitor performance in the dashboard

### Alternative: Deploy to Vercel

#### 1. Install Vercel CLI
```bash
npm i -g vercel
```

#### 2. Deploy
```bash
vercel
```

Follow the prompts to deploy your app.

## Support
- Render Documentation: https://render.com/docs
- Vite Documentation: https://vitejs.dev/guide/
- React Router Documentation: https://reactrouter.com/
