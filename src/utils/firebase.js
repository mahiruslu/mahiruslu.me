import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDNkU8CUlxB7RzSR2C5LDyofGwy5-ldcmU",
  authDomain: "mahiruslu-2bf95.firebaseapp.com",
  databaseURL:
    "https://mahiruslu-2bf95-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mahiruslu-2bf95",
  storageBucket: "mahiruslu-2bf95.appspot.com",
  messagingSenderId: "1067343299165",
  appId: "1:1067343299165:web:7f655f1cf9bf6b7d8b03b4",
  measurementId: "G-36YZL4QE7H",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

// console.log(`analytics: ${JSON.stringify(analytics)}`);
// console.log(`database: ${JSON.stringify(database)}`);
