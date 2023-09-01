import { initializeApp } from 'firebase/app';
import { getFirestore, addDoc, collection, connectFirestoreEmulator } from 'firebase/firestore';
import { Inputs } from '@/components/contact/Form';
import { ERROR_MESSAGE_SENT, SUCCESS_MESSAGE_SENT } from '@/constants/messages';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (process.env.NODE_ENV === 'development') {
  connectFirestoreEmulator(db, '127.0.0.1', 8080);
}

export const addContact = async (contact: Inputs) => {
  try {
    await addDoc(collection(db, 'contacts'), {
      ...contact,
      createdAt: new Date(),
    });
    return { status: 'success', message: SUCCESS_MESSAGE_SENT };
  } catch (error) {
    console.error('Error: ', error);
    return { status: 'error', message: ERROR_MESSAGE_SENT };
  }
};
