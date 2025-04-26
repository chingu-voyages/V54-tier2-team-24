import {initializeApp} from "firebase/app";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut} from "firebase/auth";

import {
  addDoc,
  getDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  serverTimestamp,
  setDoc,
  writeBatch,
  where,
} from "firebase/firestore";
import {useEffect, useState} from "react";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};


const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore();

export const addItemsToStore = async (collectionKey, objToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  Object.entries(objToAdd).forEach(([docKey, docValue]) => {
    const docRef = doc(collectionRef, docKey);
    batch.set(docRef, docValue);
  });

  await batch.commit();
  console.log(`Collection '${collectionKey}' successfully added.`);
};

export const getItemsFromStore = async (collectionName) => {
  const collectionRef = collection(db, collectionName);
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  const results = {};

  querySnapshot.forEach((doc) => {
    results[doc.id] = doc.data();
  });

  return results;
};

export const addItemToStore = async (collectionName, id, data) => {
  const docRef = doc(db, collectionName, id);
  await setDoc(docRef, data);
};

export const deleteItemFromStore = async (collectionName, id) => {
  const docRef = doc(db, collectionName, id);
  await deleteDoc(docRef);
};

export const auth = getAuth();
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    localStorage.setItem("token", token);
    console.log("User", user)
    return { user, token };
  } catch (error) {
    console.error("Error Message:", error.message);
    throw error; 
  }
};


export const logoutUser = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem("token");
  } catch (error) {
    console.error("Error Message:", error.message);
    throw error; 
  }
};

export const useFirebaseAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  return { user, loading, isAuthenticated: !!user };
};

export const addUserHistory = async (userId, historyData) => {
  try {
    const userHistoryRef = collection(db, "userHistory");
    await addDoc(userHistoryRef, {
      userId,
      ...historyData,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    console.error("Error adding user history: ", error);
  }
};


export const getUserHistory = async (userId) => {
  try {
    const userHistoryRef = collection(db, "userHistory");
    const q = query(userHistoryRef, where("userId", "==", userId));

    const querySnapshot = await getDocs(q);
    const history = [];

    querySnapshot.forEach((doc) => {
      history.push({
        id: doc.id,
        ...doc.data()
      });
    });

    return history.sort((a, b) =>
      b.timestamp?.toMillis() - a.timestamp?.toMillis()
    );
  } catch (error) {
    console.error("Error fetching user history: ", error);
    return [];
  }
};
export const deleteUserHistory = async (historyDocId) => {
  try {
    const historyDocRef = doc(db, "userHistory", historyDocId);

    await deleteDoc(historyDocRef);

    console.log("User history successfully deleted");
    return true;
  } catch (error) {
    console.error("Error deleting user history: ", error);
    throw error;
  }
};
export const getHistoryItemById = async (userId, itemId) => {
  try {
    console.log("Getting item with userId:", userId, "itemId:", itemId);

    const historyDocRef = doc(db, "userHistory", itemId);
    const docSnap = await getDoc(historyDocRef);

    console.log("Document exists:", docSnap.exists());

    if (docSnap.exists()) {
      const data = {
        id: docSnap.id,
        ...docSnap.data()
      };
      console.log("Document data:", data);
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Detailed error:", error);
    return null;
  }
};