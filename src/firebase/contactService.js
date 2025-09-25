import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

// Collection name for storing contact messages
const CONTACT_COLLECTION = "contactMessages";

/**
 * Save a contact form message to Firebase Firestore
 * @param {Object} messageData - The form data to save
 * @param {string} messageData.firstName - User's first name
 * @param {string} messageData.lastName - User's last name
 * @param {string} messageData.email - User's email
 * @param {string} messageData.company - User's company (optional)
 * @param {string} messageData.message - User's message
 * @returns {Promise<string>} - Document ID of the saved message
 */
export const saveContactMessage = async (messageData) => {
  try {
    const docRef = await addDoc(collection(db, CONTACT_COLLECTION), {
      ...messageData,
      timestamp: serverTimestamp(),
      status: "new", // Track message status
      read: false, // Track if message has been read
    });

    console.log("Message saved with ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error saving message: ", error);
    throw new Error("Failed to save message. Please try again.");
  }
};

/**
 * Get all contact messages (for admin purposes)
 * @returns {Promise<Array>} - Array of all contact messages
 */
export const getAllContactMessages = async () => {
  try {
    const { getDocs, collection, orderBy, query } = await import(
      "firebase/firestore"
    );
    const q = query(
      collection(db, CONTACT_COLLECTION),
      orderBy("timestamp", "desc")
    );
    const querySnapshot = await getDocs(q);

    const messages = [];
    querySnapshot.forEach((doc) => {
      messages.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    return messages;
  } catch (error) {
    console.error("Error getting messages: ", error);
    throw new Error("Failed to retrieve messages.");
  }
};
