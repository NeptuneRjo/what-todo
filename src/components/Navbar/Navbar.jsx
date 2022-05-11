import React from 'react'
import useStyles from './styles'

import { Typography, Button, AppBar, Box, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'

import { auth } from '../../firebase.config'

import { signOut } from 'firebase/auth'

const Navbar = ({ userId, userEmail, setUserId }) => {
	const classes = useStyles()

	const signOutUser = () => {
		signOut(auth).then(() => {
			setUserId(null)
		})
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static'>
				<Toolbar className={classes.toolbar}>
					<Typography variant='div' component='div' className={classes.text}>
						What Todo
					</Typography>
					<div className={classes.links}>
						<Button color='inherit'>
							<Link to='/' className={classes.link}>
								Home
							</Link>
						</Button>
						{userId === 'default' && (
							<div className={classes.user}>
								<Button color='inherit'>
									<Link to='/sign-in' className={classes.link}>
										Login
									</Link>
								</Button>
								<Button color='inherit'>
									<Link to='/sign-up' className={classes.link}>
										Sign Up
									</Link>
								</Button>
							</div>
						)}
						{userId !== 'default' && (
							<div className={classes.user}>
								<Typography
									variant='div'
									component='div'
									className={classes.text}
								>
									{userEmail}
								</Typography>
								<Button
									color='inherit'
									onClick={() => {
										signOutUser()
									}}
								>
									Sign Out
								</Button>
							</div>
						)}
					</div>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default Navbar
