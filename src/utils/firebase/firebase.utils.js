import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";


// ---------------- From Firebase ----------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBVrk03bcb0OnUm-xzwKCcQqxTywP__kpY",
  authDomain: "panaderia-0001.firebaseapp.com",
  projectId: "panaderia-0001",
  storageBucket: "panaderia-0001.firebasestorage.app",
  messagingSenderId: "169276494460",
  appId: "1:169276494460:web:7586b1a42c529fb878eff9",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// ----------------


// Autenticación

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
