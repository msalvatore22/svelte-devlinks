import { initializeApp } from "firebase/app";
import { getFirestore, doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { writable, derived } from "svelte/store";
import type { Readable } from "svelte/motion";

const firebaseConfig = {
    apiKey: "AIzaSyDVvgHjJYKqOjvon7kkprr-trDqfISQUdI",
    authDomain: "devlinks-5b613.firebaseapp.com",
    projectId: "devlinks-5b613",
    storageBucket: "devlinks-5b613.appspot.com",
    messagingSenderId: "947340913264",
    appId: "1:947340913264:web:748d8f6491797608dfe2b5",
    measurementId: "G-8KNYNKSDVW"
  };

export const app = initializeApp(firebaseConfig)
export const db = getFirestore();
export const auth = getAuth()
export const storage = getStorage()

/**
 * @returns a store with the current firebase user
 */
function userStore() {
    let unsubscribe: () => void;
  
    if (!auth || !globalThis.window) {
      console.warn('Auth is not initialized or not in browser');
      const { subscribe } = writable<User | null>(null)
      return {
        subscribe,
      }
    }

    const { subscribe } = writable(auth?.currentUser, (set) => {
      unsubscribe = onAuthStateChanged(auth, (user) => {
        set(user)
      })

      return () => unsubscribe()
    })
  
    return {
      subscribe,
    };
}
  
export const user = userStore();

/**
 * @param  {string} path document path or reference
 * @returns a store with realtime updates on document data
 */
export function docStore<T>(
    path: string,
) {
    let unsubscribe: () => void;

    const docRef = doc(db, path);

    const { subscribe } = writable<T | null>(null, (set) => {
        unsubscribe = onSnapshot(docRef, (snapshot) => {
            set((snapshot.data() as T) ?? null);
        });

        return () => unsubscribe();
    });

    return {
        subscribe,
        ref: docRef,
        id: docRef.id,
    };

}
  
interface UserData {
    email: string;
    firstname: string;
    lastname: string;
    photoURL: string;
    links: any[];
}
  
export const userData: Readable<UserData | null> = derived(user, ($user, set) => { 
    if ($user) {
        return docStore<UserData>(`users/${$user.uid}`).subscribe(set);
    } else {
        set(null); 
    }
});

