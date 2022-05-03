import React from 'react'
import useStyles from './styles'

import { 
    Button, TextField, Typography,
} from '@mui/material'

import {
    signInWithEmailAndPassword
} from 'firebase/auth'

const SignIn = ({ auth }) => {

    const classes = useStyles();
    const signInForm = document.querySelector('#signin')

    const signInUser = (e) => {
        e.preventDefault()

        const email = signInForm.email.value
        const password = signInForm.password.value

        signInWithEmailAndPassword(auth, email, password)
    }


    return (
        <main className={classes.main}>
            <Typography 
                variant='body' 
                component='div' 
                className={classes.header}
            >
                Sign In:
            </Typography>
            <form
                id='signin'
                className={classes.content}
            >
                <TextField
                    required
                    id="outlined-required  email"
                    label="Email address"
                    type='email'
                    className={classes.textField}
                    name='email'
                />
                <TextField
                    id="outlined-password-input password"
                    label="Password"
                    type="password"
                    name='password'
                    className={classes.textField}
                    required
                    inputProps={{ minLength: 6 }}
                />
                <div className={classes.buttonContainer}>
                    <Button 
                        variant='contained' 
                        type='submit' 
                        onClick={(e) => signInUser(e.target)}
                    >
                        Sign In
                    </Button>
                    <Button variant='outlined'>Cancel</Button>
                </div>
            </form>
        </main>
    )
}

export default SignIn