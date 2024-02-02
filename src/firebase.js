import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBdrCPzRiq45ElIed3IFPMAmyi9Nor1zvc",
  authDomain: "coinblog-d2d24.firebaseapp.com",
  projectId: "coinblog-d2d24",
  storageBucket: "coinblog-d2d24.appspot.com",
  messagingSenderId: "178344268357",
  appId: "1:178344268357:web:7389d648e0c55f17d0c92c",
  measurementId: "G-FKZRV19CJ4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };
