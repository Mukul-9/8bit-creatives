# Firebase Deployment Guide

This guide will help you deploy your 8Bit Creatives React app to Firebase Hosting.

## Prerequisites

- ✅ Firebase CLI installed locally (`npm install firebase-tools --save-dev`)
- ✅ Google account for Firebase
- ✅ React app ready for production

## Step-by-Step Deployment

### 1. Login to Firebase

Run this command in your terminal:

```bash
cd /Users/mukulchoudhury/Documents/8BitCreatives/8bit-creatives
npx firebase login
```

- This will open a browser window
- Log in with your Google account
- Authorize Firebase CLI when prompted

### 2. Initialize Firebase Project

```bash
npx firebase init
```

**When prompted, select:**

- ✅ **Hosting** (for deploying your React app)
- ✅ **Firestore** (for your database)

**For Hosting configuration:**

- **Public directory**: `build` (React builds to this folder)
- **Single-page app**: `Yes` (React is a Single Page Application)
- **Overwrite index.html**: `No` (React generates its own)

**For Firestore configuration:**

- **Firestore rules file**: `firestore.rules` (default)
- **Firestore indexes file**: `firestore.indexes.json` (default)

### 3. Build Your React App

```bash
npm run build
```

This creates a production build in the `build` folder.

### 4. Deploy to Firebase

```bash
npx firebase deploy
```

This will deploy both your hosting and Firestore rules.

### 5. Verify Deployment

After deployment, you'll get a URL like:

```
https://your-project-id.web.app
```

Visit this URL to see your deployed app!

## Quick Setup Script

You can also run the automated setup script:

```bash
./firebase-setup.sh
```

## Firebase Console

After deployment, you can manage your app at:

- **Hosting**: https://console.firebase.google.com/project/your-project-id/hosting
- **Firestore**: https://console.firebase.google.com/project/your-project-id/firestore

## Updating Your App

To update your deployed app:

1. Make changes to your code
2. Run `npm run build`
3. Run `npx firebase deploy`

## Environment Variables

If you need environment variables for production:

1. Create `.env.production` file
2. Add your production variables
3. Update your build process if needed

## Troubleshooting

### "Firebase project not found"

- Make sure you're logged in: `npx firebase login`
- Check your project ID in Firebase console

### "Build folder not found"

- Run `npm run build` first
- Check that the build folder exists

### "Permission denied"

- Make sure you have access to the Firebase project
- Check your Google account permissions

## Next Steps

After successful deployment:

1. **Set up custom domain** (optional)
2. **Configure SSL** (automatic with Firebase)
3. **Set up CI/CD** for automatic deployments
4. **Monitor performance** in Firebase console

## Files Created

After initialization, you'll have:

- `firebase.json` - Firebase configuration
- `firestore.rules` - Database security rules
- `firestore.indexes.json` - Database indexes
- `.firebaserc` - Project configuration

Your app is now live on Firebase! 🎉
