import { initializeApp } from "firebase/app";
import { getAuth } from "react-router-dom";
import { addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";
import { createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAj6mNI_qwDcuN8tA8OCvD9dldmecuOdT8",
  authDomain: "netflix-clone-a86ae.firebaseapp.com",
  projectId: "netflix-clone-a86ae",
  storageBucket: "netflix-clone-a86ae.firebasestorage.app",
  messagingSenderId: "508393865966",
  appId: "1:508393865966:web:a4167d5e28b5f0fbff29ff"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
        uid: user.uid,
        name,
        authProvider: "local",
        email,
    });
} catch (error) {
    console.log(error);
    alert(error);
  }
}

const login = async () => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.log(error);
        alert(error);
    }

    const logout = () => {
        signOut(auth);
    }
}

export { auth, db, signup, login, logout };
