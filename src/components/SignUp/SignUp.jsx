import React from 'react'
import useStyles from './styles'

import { 
    createUserWithEmailAndPassword,
} from 'firebase/auth'

import { 
    Button, Box, TextField, 
    Typography, Container 
} from '@mui/material'

const SignUp = ({ auth }) => {

    const classes = useStyles()

    return (
        <main className={classes.main}>
            <Typography 
                variant='body' 
                component='div' 
                className={classes.header}
            >
                Sign Up:
            </Typography>
            <Box
                component='form'
                autoComplete='off'
                id='signup'
                className={classes.content}
            >
                <TextField
                    required
                    id="outlined-required  email"
                    label="Enter your email address"
                    type='email'
                    className={classes.textField}
                />
                <TextField
                    id="outlined-password-input password"
                    label="Password"
                    type="password"
                    className={classes.textField}
                    required
                    inputProps={{ minLength: 6 }}
                    helperText='password should be atleast 6 characters long'
                />
                <div className={classes.buttonContainer}>
                    <Button variant='contained' type='submit' >Sign Up</Button>
                    <Button variant='outlined'>Cancel</Button>
                </div>
            </Box>
        </main>
    )
}

export default SignUp