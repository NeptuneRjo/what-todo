import React, { useState } from 'react'
import useStyles from './styles'

import { Button, TextField, Typography } from '@mui/material'

import { useNavigate } from 'react-router-dom'

import { auth } from '../../firebase.config'

import { createUserWithEmailAndPassword } from 'firebase/auth'

const SignUp = ({ setUserId }) => {
	// Initializes the styles and navigation
	const classes = useStyles()
	let navigate = useNavigate()

	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	const callSignUpFunction = (e) => {
		e.preventDefault()

		createUserWithEmailAndPassword(auth, emailValue, passwordValue).then(() => {
			navigate('/')
			setUserId(null)
		})
	}

	return (
		<main className={classes.main}>
			<Typography variant='body' component='div' className={classes.header}>
				Sign Up:
			</Typography>
			<form
				className='user-signup'
				className={classes.content}
				onSubmit={(e) => callSignUpFunction(e)}
			>
				<TextField
					required
					id='outlined-required'
					label='Enter your email'
					type='email'
					className={classes.textField}
					onChange={(e) => setEmailValue(e.target.value)}
				/>
				<TextField
					id='outlined-password-input password'
					label='Password'
					type='password'
					className={classes.textField}
					required
					inputProps={{ minLength: 6 }}
					helperText='password should be atleast 6 characters long'
					onChange={(e) => setPasswordValue(e.target.value)}
				/>
				<div className={classes.buttonContainer}>
					<Button
						variant='contained'
						type='submit'
						onClick={(e) => callSignUpFunction(e)}
					>
						Sign Up
					</Button>
					<Button variant='outlined'>Cancel</Button>
				</div>
			</form>
		</main>
	)
}

export default SignUp
