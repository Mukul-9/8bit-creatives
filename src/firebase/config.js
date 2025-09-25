import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmsqwpmGFe0IGTbXoGNFJ9pHV4PUbOZeM",
  authDomain: "bit-creatives-22e55.firebaseapp.com",
  projectId: "bit-creatives-22e55",
  storageBucket: "bit-creatives-22e55.firebasestorage.app",
  messagingSenderId: "383329228341",
  appId: "1:383329228341:web:4bc83d37e4b5269ce3837c",
  measurementId: "G-YZHC81PR3C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics (optional)
// const analytics = getAnalytics(app);

export default app;
