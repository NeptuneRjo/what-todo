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
			return null
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

export const queryOwnedTodos = (array, userId) => {
	const q = query(colRef, where('ownedBy', '==', userId))

	getDocs(q).then((docs) => {
		docs.forEach((elem) => {
			array.push(elem.data())
		})
	})
}

export const signUpUser = (e, email, password, toHome) => {
	e.preventDefault()

	createUserWithEmailAndPassword(auth, email, password).then(() => {
		toHome()
	})
}
