import React from 'react'
import './App.css'
import { initializeApp } from 'firebase/app'
import {
    getFirestore, collection, addDoc,
    serverTimestamp
} from 'firebase/firestore'
import { 
    getAuth,
    createUserWithEmailAndPassword,
    signOut, signInWithEmailAndPassword
} from 'firebase/auth'

import { SignUpForm } from './components'

const App = () => {
    
    const firebaseConfig = {
        apiKey: process.env.REACT_APP_API_KEY,
        authDomain: process.env.REACT_APP_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_PROJECT_ID,
        storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_MSSGNG_ID,
        appId: process.env.REACT_APP_APP_ID
    };

    const app = initializeApp(firebaseConfig);

    // Initialized Firebase services
    const db = getFirestore();
    const auth = getAuth();

    // Database reference (todos)
    const colRef = collection(db, 'todos')

    return (
        <div><SignUpForm auth={auth} /></div>
    )
}

export default App