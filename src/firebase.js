import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBa1HI6IQ5TAqETD9hILtG2Dlj1aWzVOZw",
  authDomain: "linkedin-clone-f5259.firebaseapp.com",
  projectId: "linkedin-clone-f5259",
  storageBucket: "linkedin-clone-f5259.appspot.com",
  messagingSenderId: "511780634702",
  appId: "1:511780634702:web:490432ac3d6b6db332831f"
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();

const auth = firebase.auth();

export { db, auth };
