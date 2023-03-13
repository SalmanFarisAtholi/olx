import firebase from "firebase";
import "firebase/auth";
import "firebase/firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDWrj4caSLwhW8GJITJo-p5bPesqEczFk0",
  authDomain: "fir-62ff1.firebaseapp.com",
  projectId: "fir-62ff1",
  storageBucket: "fir-62ff1.appspot.com",
  messagingSenderId: "910443874950",
  appId: "1:910443874950:web:62cf308adf99c6309edf07",
  measurementId: "G-P15LECWS50",
};

export default firebase.initializeApp(firebaseConfig);
