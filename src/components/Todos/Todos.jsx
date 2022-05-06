import React, { useState } from 'react'
import useStyles from './styles'

import Todo from './Todo/Todo'

import {
	TextField,
	Stack,
	Box,
	ButtonGroup,
	Button,
	Typography,
} from '@mui/material'

import { pushNewTodoToDb, QueryOwnedTodos } from '../../firebase.config'

const Todos = ({ userId }) => {
	const classes = useStyles()

	const [display, setDisplay] = useState('All')
	const [todoValue, setTodoValue] = useState('')

	let userTodos = []

	const { data, isPending, error } = QueryOwnedTodos(userId)

	if (!isPending) {
		data.forEach((elem) => {
			userTodos.push(elem.data())
		})
	}

	const form = document.querySelector('#form')

	const placeholderTodos = [
		'Go grocery shopping',
		'Clean the house',
		'Mow the lawn',
	]

	const setTodosDisplay = (display) => {
		setDisplay(display)
	}

	// Acts as liaison for pushNewTodoToDb
	const callPushFunction = (e) => {
		pushNewTodoToDb(e, todoValue, userId, form)
	}

	// Renders the todo section based on what's available
	const todoMap = () => {
		if (isPending) {
			return (
				<Typography variant='div' component='div'>
					Loading...
				</Typography>
			)
		} else if (userTodos.length === 0) {
			return (
				<Typography variant='div' component='div'>
					Nothing to do...
				</Typography>
			)
		}
		return userTodos.map((todo) => <Todo todo={todo} />)
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
					placeholder={
						placeholderTodos[
							Math.floor(Math.random() * placeholderTodos.length)
						]
					}
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
