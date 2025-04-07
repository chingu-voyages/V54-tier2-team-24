import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  getRedirectResult,
} from "firebase/auth";

import {
  doc,
  getFirestore,
  setDoc,
  deleteDoc,
  collection,
  writeBatch,
  query,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { useEffect, useState } from "react";

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

const firestore = getFirestore(firebaseApp);

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
    console.log("User", user);
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

export { GoogleAuthProvider, firestore, signInWithPopup, doc, setDoc, getDoc };
