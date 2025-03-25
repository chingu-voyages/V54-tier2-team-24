import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  getFirestore,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  query,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNA7CsEEOVdYtwS2GKcDLhVKjtI0FiYmw",
  authDomain: "chingu-aiq.firebaseapp.com",
  projectId: "chingu-aiq",
  storageBucket: "chingu-aiq.firebasestorage.app",
  messagingSenderId: "490518562303",
  appId: "1:490518562303:web:2c42f675fc2feb69ed13ca",
  measurementId: "G-GJCSPV0YW4",
};

export const db = getFirestore();

export const addItemsToStore = async (collectionKey, objToAdd) => {
  const collectionRef = collection(db, collectionKey);

  const batch = writeBatch(db);

  objToAdd.forEach((obj) => {
    const docRef = doc(collectionRef, obj.title.toLowerCase());
    batch.set(docRef, obj);
  });

  await batch.commit();
  console.log("Collection Added");
};


export const getItemsFromStore = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);

const querySnapshot = await getDocs(q);
  // .reduce((accumaltor, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   accumaltor[title.toLowerCase()] = items;
  //   return accumaltor;
  // }, {});
  // return categoryMap;
}

// export const createEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await createUserWithEmailAndPassword(auth, email, password);
// };

// export const signInAuthUserWithEmailAndPassword = async (email, password) => {
//   if (!email || !password) return;

//   return await signInWithEmailAndPassword(auth, email, password);
// };

// export const signOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListener = (callback) =>
//   onAuthStateChanged(auth, callback);