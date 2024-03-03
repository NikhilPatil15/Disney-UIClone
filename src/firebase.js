import {initializeApp} from 'firebase/app'
import { getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCHr0bJLli2LsYge0YneMwWYfg12p29lyM",
  authDomain: "hotstarclone-385d6.firebaseapp.com",
  projectId: "hotstarclone-385d6",
  storageBucket: "hotstarclone-385d6.appspot.com",
  messagingSenderId: "809340239509",
  appId: "1:809340239509:web:7e66ff1bbe0c229212659c",
  measurementId: "G-HB1LTVBVNG",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()
const storage = getStorage(firebaseApp)

export{ auth, provider, storage}
export default db

