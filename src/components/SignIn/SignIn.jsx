import React, { useState } from 'react'
import useStyles from './styles'

import { Button, TextField, Typography } from '@mui/material'

import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

import { auth } from '../../firebase.config'

const SignIn = ({ setUserId }) => {
	const classes = useStyles()
	let navigate = useNavigate()

	const [emailValue, setEmailValue] = useState('')
	const [passwordValue, setPasswordValue] = useState('')

	const signInUser = (e) => {
		e.preventDefault()

		signInWithEmailAndPassword(auth, emailValue, passwordValue).then((cred) => {
			setUserId(null)
		})
		navigate('/')
	}

	return (
		<main className={classes.main}>
			<Typography variant='body' component='div' className={classes.header}>
				Sign In:
			</Typography>
			<form id='signin' className={classes.content}>
				<TextField
					required
					id='outlined-required  email'
					label='Email address'
					type='email'
					className={classes.textField}
					name='email'
					onChange={(e) => setEmailValue(e.target.value)}
				/>
				<TextField
					id='outlined-password-input password'
					label='Password'
					type='password'
					name='password'
					className={classes.textField}
					required
					inputProps={{ minLength: 6 }}
					onChange={(e) => setPasswordValue(e.target.value)}
				/>
				<div className={classes.buttonContainer}>
					<Button
						variant='contained'
						type='submit'
						onClick={(e) => signInUser(e)}
					>
						Sign In
					</Button>
					<Button variant='outlined' onClick={() => navigate('/')}>
						Cancel
					</Button>
				</div>
			</form>
		</main>
	)
}

export default SignIn
