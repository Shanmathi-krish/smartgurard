# SmartGuard Deployment Guide for Render

## Prerequisites
- GitHub repository with your SmartGuard code
- Render account (free tier available)

## Deployment Steps

### 1. Push to GitHub
Make sure all your code is committed and pushed to your GitHub repository:
```bash
git add .
git commit -m "Prepare for Render deployment"
git push origin main
```

### 2. Deploy on Render

#### Option A: Using render.yaml (Recommended)
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Render will automatically detect the `render.yaml` file
5. Click "Create Static Site"

#### Option B: Manual Configuration
If you prefer manual setup:
1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Static Site"
3. Connect your GitHub repository
4. Configure the following:
   - **Name**: smartguard (or your preferred name)
   - **Branch**: main (or your default branch)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Node Version**: 18 (or latest LTS)

### 3. Environment Variables (if needed)
If your app requires environment variables:
1. Go to your service settings
2. Navigate to "Environment"
3. Add any required environment variables

### 4. Custom Domain (Optional)
1. Go to your service settings
2. Navigate to "Custom Domains"
3. Add your domain and follow the DNS configuration instructions

## Configuration Files

### render.yaml
This file configures your deployment with:
- Build command: `npm install && npm run build`
- Static publish path: `./dist`
- Security headers
- SPA routing support

### package.json
Updated with:
- Simplified build script: `vite build`
- Start script for production: `vite preview`
- Terser dependency for minification

### vite.config.ts
Optimized for production with:
- Code splitting
- Asset optimization
- Proper server configuration

## Troubleshooting

### Build Failures
- Check that all dependencies are in `package.json`
- Ensure Node.js version compatibility
- Review build logs in Render dashboard

### Routing Issues
- The `render.yaml` includes SPA routing configuration
- All routes are rewritten to `/index.html`

### Performance
- Assets are cached for 1 year
- Code is split into vendor and router chunks
- Terser minification is enabled

## Monitoring
- Check Render dashboard for deployment status
- Monitor build logs for any issues
- Use Render's built-in analytics for performance insights

## Support
- Render Documentation: https://render.com/docs
- Vite Documentation: https://vitejs.dev/guide/
- React Router Documentation: https://reactrouter.com/
