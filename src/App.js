import React, { useState } from 'react'
import './App.css'

import { SignUpForm, SignIn, Todos, Nav } from './components'

import { HashRouter, Routes, Route } from 'react-router-dom'

import { auth } from './firebase.config'

import { onAuthStateChanged } from 'firebase/auth'

const App = () => {
	const [userId, setUserId] = useState(null)
	const [userEmail, setUserEmail] = useState(null)

	onAuthStateChanged(auth, (user) => {
		if (user) {
			const email = user.email
			const uid = user.uid
			setUserId(uid)
			setUserEmail(email)
		} else {
			setUserId('default')
		}
	})

	if (userId !== null) {
		return (
			<HashRouter>
				<Nav userId={userId} userEmail={userEmail} />
				<Routes>
					<Route
						path='/sign-up'
						element={<SignUpForm setUserId={setUserId} />}
					/>
					<Route path='/sign-in' element={<SignIn />} />
					<Route exact path='/' element={<Todos userId={userId} />} />
				</Routes>
			</HashRouter>
		)
	}
}

export default App
