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

import {
	addDoc,
	serverTimestamp,
	onSnapshot,
	doc,
	query,
	orderBy,
	where,
	getDocs,
	collection,
} from 'firebase/firestore'

import { colRef, db, pushNewTodoToDb } from '../../firebase.config'

const Todos = ({ userId }) => {
	const classes = useStyles()

	const [display, setDisplay] = useState('All')
	const [todoValue, setTodoValue] = useState('')

	const userTodos = []
	const form = document.querySelector('#form')

	const placeholderTodos = [
		'Go grocery shopping',
		'Clean the house',
		'Mow the lawn',
	]

	const defaultTodos = [
		{
			todo: 'Go grocery shopping',
			completed: false,
			createdAt: 1,
			ownedBy: 'default',
		},
		{
			todo: 'Apply for jobs',
			completed: false,
			createdAt: 1,
			ownedBy: 'default',
		},
		{
			todo: 'Finish build What Todo',
			completed: true,
			createdAt: 1,
			ownedBy: 'default',
		},
		{
			todo: 'wash the car',
			completed: false,
			createdAt: 1,
			ownedBy: 'default',
		},
	]

	const setTodosDisplay = (display) => {
		setDisplay(display)
	}

	// Acts as liaison for pushNewTodoToDb
	const callPushFunction = (e) => {
		pushNewTodoToDb(e, todoValue, userId, form)
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
				<Todo />
				{userId !== null &&
					userTodos.map((todo) => <Todo todo={todo} userId={userId} />)}
				{/* {userId !== null &&
					queryReturned === true &&
					userTodos.map((todo) => <Todo todo={todo} userId={userId} />)} */}
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
