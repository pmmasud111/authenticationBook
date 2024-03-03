// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBY5EcLWQYw8Yz2laFMW7dUYmIDWLwHn6U",
  authDomain: "authenticationbook.firebaseapp.com",
  projectId: "authenticationbook",
  storageBucket: "authenticationbook.appspot.com",
  messagingSenderId: "18507572025",
  appId: "1:18507572025:web:d8a00f2afa27375fce3ee8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();

const registerWithEmailAndPassword = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (err) {
    console.log(err);
  }
};

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (err) {
    console.log(err);
  }
};

const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    console.log(error);
  }
};

const singInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleAuthProvider);
    const user = res.user;
    return user;
  } catch (err) {
    console.log(err);
  }
};

export {
  auth,
  loginWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  singInWithGoogle,
};
