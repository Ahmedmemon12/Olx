import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Swal from 'sweetalert2'
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC3RUHEqKQHk5bdsMt9tMJ-Z2kR8pS8SVk",
  authDomain: "olx-app-976a5.firebaseapp.com",
  projectId: "olx-app-976a5",
  storageBucket: "olx-app-976a5.appspot.com",
  messagingSenderId: "1032679369767",
  appId: "1:1032679369767:web:5f17ac7a99fb58311af202",
  measurementId: "G-6E9V7YPQBZ"
};

export let userInfo = []
export let UID = ''

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function getAllProducts() {
  const querySnapshot = await getDocs(collection(db, "Products"));
  const products = []
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() })
  });
  return products
}

export async function getSingleAd(id) {
  const docRef = doc(db, "Products", id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const adData = { id: docSnap.id, ...docSnap.data() };
    return adData;
  } else {
    return null;
  }
}
export async function getUserInfo(uid) {
  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const userData = docSnap.data();
    return userData;
  } else {
    return null;
  }
}

export async function signUp(userInfo) {
  const { fullName, email, Password } = userInfo
  const { user: { uid } } = await createUserWithEmailAndPassword(auth, email, Password)
  const userRef = doc(db, 'users', uid)
  await setDoc(userRef, { fullName, email })

  Swal.fire({
    icon: "success",
    title: "SuccessFully!",
    text: "Registered",
  });
}
export async function SignInWithGoogle() {
  await signInWithPopup(auth, provider)
}


export async function login(userInfo) {
  const { email, password } = userInfo
  await signInWithEmailAndPassword(auth, email, password)

  Swal.fire({
    icon: "success",
    title: "SuccessFully!",
    text: "Logged In",
  });
}
export async function logout() {
  Swal.fire({
    title: "Log out",
    text: "You're logged out",
    icon: "warning",
    confirmButtonColor: "#3085d6",
  }).then(
    await signOut(auth)
  )
}

// export async function getLoginUser(uid, callback) {
//   const docRef = doc(db, "users", uid);
//   const docSnap = await getDoc(docRef);
//   if (docSnap.exists()) {
//     userInfo = docSnap.data(); // Update the global userInfo variable
//     console.log("Document data:", userInfo);
//     callback(userInfo); // Execute the callback with the updated userInfo
//   } else {
//     // docSnap.data() will be undefined in this case
//     console.log("No such document!");
//   }
// }
