import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnhd1mR74WjGfdcpfs3dAm10uhMYOQIWw",
  authDomain: "eventzen15.firebaseapp.com",
  projectId: "eventzen15",
  storageBucket: "eventzen15.firebasestorage.app",
  messagingSenderId: "150893933824",
  appId: "1:150893933824:web:61a864901586d98fa76fe5",
  measurementId: "G-G7BGHB366V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);