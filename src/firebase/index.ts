import { FirebaseOptions, initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectDatabaseEmulator, getDatabase } from "firebase/database";
import { connectStorageEmulator, getStorage } from "firebase/storage";

const FIREBASE_CONFIG: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
}

export const initApp = () => {
  const app = initializeApp(FIREBASE_CONFIG)

  if (location.host === "localhost") {
    connectAuthEmulator(getAuth(app), "https://localhost:9099")
    connectStorageEmulator(getStorage(app), "localhost", 5001)
    connectDatabaseEmulator(getDatabase(app), "localhost", 8080)
  }

  return app
}

