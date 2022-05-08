import React, { useState } from 'react'
import './App.css'

import { SignUpForm, SignIn, Todos } from './components'

import { HashRouter, Routes, Route } from 'react-router-dom'

const App = () => {
	const [userId, setUserId] = useState('default')

	return (
		<HashRouter>
			<Routes>
				<Route path='/sign-up' element={<SignUpForm />} />
				<Route path='/sign-in' element={<SignIn />} />
				<Route exact path='/' element={<Todos userId={userId} />} />
			</Routes>
		</HashRouter>
	)
}

export default App
