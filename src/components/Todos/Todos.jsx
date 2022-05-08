import React, { useEffect, useState } from 'react'
import useStyles from './styles'

import Todo from './Todo/Todo'

import {
	TextField,
	Stack,
	ButtonGroup,
	Button,
	Typography,
} from '@mui/material'

import { pushNewTodoToDb, colRef } from '../../firebase.config'

import { getDocs, query, where } from 'firebase/firestore'

const Todos = ({ userId }) => {
	const classes = useStyles()

	const [display, setDisplay] = useState('All')
	const [todoValue, setTodoValue] = useState('')

	// Exists to cause the useEffect hook to fire
	const [rerender, setRerender] = useState(1)

	const [data, setData] = useState(null)
	const [isPending, setIsPending] = useState(true)
	const [error, setError] = useState(null)

	let userTodos = []
	let userTodosDisplay = []

	useEffect(() => {
		const q = query(colRef, where('ownedBy', '==', userId))

		getDocs(q)
			.then((res) => {
				return res
			})
			.then((res) => {
				setIsPending(false)
				setData(res)
			})
			.catch((err) => setError(err.message))
	}, [rerender])

	if (!isPending) {
		data.forEach((elem) => {
			userTodos.push(elem.data())
		})
	}

	const setTodosDisplay = (display) => {
		setDisplay(display)
	}

	// Acts as liaison for pushNewTodoToDb
	const callPushFunction = (e) => {
		const form = document.querySelector('#form')

		pushNewTodoToDb(e, todoValue, userId, form)
		// Causes the useEffect hook to fire again
		setRerender(rerender + 1)
	}

	// Clones the userTodos and filters through the clone
	if (!isPending && display === 'All') {
		userTodosDisplay = userTodos
	} else if (!isPending && display === 'Uncompleted') {
		for (let i = 0; i < userTodos.length; i++) {
			if (userTodos[i].completed === false) {
				userTodosDisplay.push(userTodos[i])
			}
		}
	} else if (!isPending && display === 'Completed') {
		for (let i = 0; i < userTodos.length; i++) {
			if (userTodos[i].completed === true) {
				userTodosDisplay.push(userTodos[i])
			}
		}
	}

	// Renders the todo section based on what's available
	const todoMap = () => {
		if (isPending) {
			return (
				<Typography variant='div' component='div'>
					Loading...
				</Typography>
			)
		} else if (userTodosDisplay.length === 0) {
			return (
				<Typography variant='div' component='div'>
					Nothing to do...
				</Typography>
			)
		}
		return userTodosDisplay.map((todo) => <Todo todo={todo} />)
	}

	return (
		<main className={classes.main}>
			<Typography variant='div' component='div' className={classes.header}>
				{display}
				<br />
				Todos
			</Typography>
			<form className={classes.inputContainer} id='form'>
				<TextField
					required
					id='outlined-required'
					label='What Todo'
					className={classes.input}
					name='todo'
					onChange={(e) => setTodoValue(e.target.value)}
				/>
				<Button
					variant='outlined'
					type='submit'
					onClick={(e) => callPushFunction(e)}
				>
					Submit
				</Button>
			</form>

			<Stack direction='column' spacing={2} className={classes.stack}>
				{todoMap()}
			</Stack>
			<ButtonGroup
				variant='outlined'
				aria-label='outlined primary button group'
				className={classes.buttonGroup}
			>
				<Button onClick={() => setTodosDisplay('All')}>All</Button>
				<Button onClick={() => setTodosDisplay('Uncompleted')}>
					Uncompleted
				</Button>
				<Button onClick={() => setTodosDisplay('Completed')}>Completed</Button>
			</ButtonGroup>
		</main>
	)
}

export default Todos
