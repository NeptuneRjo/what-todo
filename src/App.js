import React, { useState } from 'react'
import './App.css'

import { SignUpForm, SignIn, Todos } from './components'

import { HashRouter, Routes, Route } from 'react-router-dom'

import { auth } from './firebase.config'

import { onAuthStateChanged } from 'firebase/auth'

const App = () => {
	const [userId, setUserId] = useState(null)

	onAuthStateChanged(auth, (user) => {
		if (user) {
			const uid = user.uid
			setUserId(uid)
		} else {
			setUserId('default')
		}
	})

	if (userId !== null) {
		return (
			<HashRouter>
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
