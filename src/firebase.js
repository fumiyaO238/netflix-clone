import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyDpc9sMZLevbXia5uGBPrS_i2Ts0HKf1UM",
  authDomain: "netflix-clone-89c62.firebaseapp.com",
  projectId: "netflix-clone-89c62",
  storageBucket: "netflix-clone-89c62.appspot.com",
  messagingSenderId: "422612107377",
  appId: "1:422612107377:web:f43f35824ffc5392701bd0"
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
    })
  } catch(error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" ")); //alertの別の表示方法
  }
}

const login = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}

const logout = () => {
  signOut(auth);
}

export {auth, db, login, signup, logout};