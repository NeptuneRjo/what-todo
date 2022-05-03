import React from 'react'
import useStyles from './styles'

import { 
    createUserWithEmailAndPassword,
} from 'firebase/auth'

import { 
    Button, TextField, Typography,
} from '@mui/material'

const SignUp = ({ auth }) => {

    const classes = useStyles()

    const form = document.querySelector('#signup')

    const signUpUser = (e) => {
        e.preventDefault()

        const email = form.email.value
        const password = form.password.value

        createUserWithEmailAndPassword(auth, email, password)
            .then((cred) => {
                form.reset()
            })
            .catch((err) => {
                console.log(err.message)
            })
    }

    return (
        <main className={classes.main}>
            <Typography 
                variant='body' 
                component='div' 
                className={classes.header}
            >
                Sign Up:
            </Typography>
            <form
                id='signup'
                className={classes.content}
                onSubmit={(e) => signUpUser(e.target)}
            >
                <TextField
                    required
                    id="outlined-required  email"
                    label="Enter your email address"
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
                    helperText='password should be atleast 6 characters long'
                />
                <div className={classes.buttonContainer}>
                    <Button 
                        variant='contained' 
                        type='submit' 
                        onClick={(e) => {signUpUser(e)}}
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