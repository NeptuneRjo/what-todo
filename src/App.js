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

import { SignUpForm, SignIn, Todos } from './components'

import { HashRouter, Routes, Route } from 'react-router-dom'

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
        <HashRouter>
            <Routes>
                <Route exact path='/sign-up' element={<SignUpForm auth={auth} />}/>
                <Route path='/sign-in' element={<SignIn auth={auth} />}/>
                <Route path='/' element={<Todos colRef={colRef} dv={db} /> } />
            </Routes>
        </HashRouter>
    )
}

export default App