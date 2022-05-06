import { initializeApp } from 'firebase/app'
import {
	getFirestore,
	collection,
	addDoc,
	serverTimestamp,
	getDocs,
	query,
	where,
} from 'firebase/firestore'

import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
} from 'firebase/auth'

import React, { useState, useEffect } from 'react'

const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MSSGNG_ID,
	appId: process.env.REACT_APP_APP_ID,
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
export const colRef = collection(db, 'todos')

export const updateUserIdOnAuth = () => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			return user.id
		} else {
			return 'default'
		}
	})
}

export const pushNewTodoToDb = (e, todo, userId, form) => {
	e.preventDefault()

	addDoc(colRef, {
		todo: todo,
		completed: false,
		createdAt: serverTimestamp(),
		ownedBy: userId,
	}).then(() => {
		form.reset()
	})
}

// This function is treated like an api fetch (because in essence it is)
// returns its pending state untill the data is retrieved
export const QueryOwnedTodos = (userId) => {
	const q = query(colRef, where('ownedBy', '==', userId))

	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(true)
	const [error, setError] = useState(null)

	useEffect(() => {
		getDocs(q)
			.then((res) => {
				return res
			})
			.then((res) => {
				setData(res)
				setIsPending(false)
			})
	}, [])

	return { data, isPending, error }
}

export const signUpUser = (e, email, password, toHome) => {
	e.preventDefault()

	createUserWithEmailAndPassword(auth, email, password).then(() => {
		toHome()
	})
}
