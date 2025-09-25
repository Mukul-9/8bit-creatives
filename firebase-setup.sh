#!/bin/bash

echo "🔥 Firebase Setup Script for 8Bit Creatives"
echo "============================================="
echo ""

echo "Step 1: Login to Firebase"
echo "This will open a browser window for authentication..."
npx firebase login

echo ""
echo "Step 2: Initialize Firebase Project"
echo "When prompted, select:"
echo "  ✅ Hosting (for deploying your React app)"
echo "  ✅ Firestore (for your database)"
echo ""
npx firebase init

echo ""
echo "Step 3: Build your React app"
echo "Building the production version..."
npm run build

echo ""
echo "Step 4: Deploy to Firebase"
echo "Deploying your app to Firebase Hosting..."
npx firebase deploy

echo ""
echo "🎉 Setup complete! Your app should now be deployed."
echo "Check the Firebase console for your hosting URL."
