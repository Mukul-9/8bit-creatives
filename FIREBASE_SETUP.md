# Firebase Setup Instructions

This project is configured to use Firebase Firestore to store contact form messages. Follow these steps to complete the setup:

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "8bit-creatives")
4. Follow the setup wizard (disable Google Analytics if not needed)
5. Click "Create project"

## 2. Enable Firestore Database

1. In your Firebase project console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location for your database (choose closest to your users)
5. Click "Done"

## 3. Get Your Firebase Configuration

1. In your Firebase project console, go to "Project settings" (gear icon)
2. Scroll down to "Your apps" section
3. Click "Web" icon (`</>`) to add a web app
4. Enter app nickname (e.g., "8bit-creatives-web")
5. Click "Register app"
6. Copy the Firebase configuration object

## 4. Update Configuration File

1. Open `src/firebase/config.js`
2. Replace the placeholder values with your actual Firebase configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "your-actual-sender-id",
  appId: "your-actual-app-id",
};
```

## 5. Set Up Security Rules (Optional but Recommended)

In Firestore Database > Rules, update the rules to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow anyone to write to contactMessages collection
    match /contactMessages/{document} {
      allow create: if true;
      allow read, update, delete: if false; // Only allow creation, not reading
    }
  }
}
```

## 6. Test the Integration

1. Start your development server: `npm start`
2. Navigate to the contact form
3. Fill out and submit the form
4. Check your Firebase console > Firestore Database to see the message stored

## Data Structure

Messages are stored in the `contactMessages` collection with this structure:

```javascript
{
  firstName: "John",
  lastName: "Doe",
  email: "john@example.com",
  company: "Example Corp",
  message: "Hello, I'm interested in your services...",
  timestamp: "2024-01-15T10:30:00Z", // Server timestamp
  status: "new", // Message status
  read: false // Whether message has been read
}
```

## Features

- ✅ Form validation
- ✅ Loading states with spinner
- ✅ Success/error messages
- ✅ Automatic form reset on success
- ✅ Real-time data storage
- ✅ Timestamp tracking
- ✅ Message status tracking

## Troubleshooting

- **"Firebase not initialized"**: Check your configuration values
- **"Permission denied"**: Check your Firestore security rules
- **"Network error"**: Ensure your Firebase project is active and billing is set up if needed

## Next Steps

- Set up Firebase Authentication if you want admin access
- Create an admin dashboard to view messages
- Set up email notifications for new messages
- Add message management features (mark as read, delete, etc.)
