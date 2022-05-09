import { initializeApp } from 'firebase/app'
import {
	getFirestore,
	collection,
	setDoc,
	serverTimestamp,
	getDocs,
	query,
	where,
	updateDoc,
	doc,
	onSnapshot,
} from 'firebase/firestore'

import {
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
} from 'firebase/auth'

import { useState, useEffect } from 'react'

import { v4 as uuidv4 } from 'uuid'

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

export const updateTodo = async (update, id) => {
	const docRef = doc(db, 'todos', id)

	updateDoc(docRef, {
		completed: update,
	})
}

export const pushNewTodoToDb = (e, todo, userId, form) => {
	e.preventDefault()

	const newId = uuidv4()

	const docRef = setDoc(doc(db, 'todos', newId), {
		todo: todo,
		completed: false,
		createdAt: serverTimestamp(),
		ownedBy: userId,
		id: newId,
	}).then(() => {
		form.reset()
	})
}

export const signUpUser = (e, email, password, toHome) => {
	e.preventDefault()

	createUserWithEmailAndPassword(auth, email, password).then(() => {
		toHome()
	})
}
