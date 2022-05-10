import React, { useEffect, useState } from 'react'
import useStyles from './styles'

import { TextField, Stack, Button, Typography } from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete'

import { pushNewTodoToDb, colRef, updateTodo, db } from '../../firebase.config'

import { getDocs, query, where, doc, deleteDoc } from 'firebase/firestore'

import './style.css'

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

		if (display === 'All') {
			userTodosDisplay = userTodos
		} else if (display === 'Uncompleted') {
			for (let i = 0; i < userTodos.length; i++) {
				if (userTodos[i].completed === false) {
					userTodosDisplay.push(userTodos[i])
				}
			}
		} else if (display === 'Completed') {
			for (let i = 0; i < userTodos.length; i++) {
				if (userTodos[i].completed === true) {
					userTodosDisplay.push(userTodos[i])
				}
			}
		}
	}

	// Acts as liaison for pushNewTodoToDb
	const callPushFunction = (e) => {
		const form = document.querySelector('#form')

		pushNewTodoToDb(e, todoValue, userId, form)
		// Causes the useEffect hook to fire again
		setRerender(Math.random())
	}

	const handleTodoClick = (todo) => {
		updateTodo(!todo.completed, todo.id)
		setRerender(Math.random())
	}

	const handleDeleteClick = (todoId) => {
		const docRef = doc(db, 'todos', todoId)

		deleteDoc(docRef).then(() => {
			setRerender(Math.random())
		})
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
		return userTodosDisplay.map((todo) => (
			<div className='todo' onClick={() => handleTodoClick(todo)}>
				<div
					className={`todo-item ${todo.completed ? 'completed' : 'Uncomplete'}`}
				>
					{todo.todo}
				</div>
				<DeleteIcon onClick={() => handleDeleteClick(todo.id)} />
			</div>
		))
	}

	return (
		<main className={classes.main}>
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
			<div className='todos-buttongroup'>
				<button
					className={`todos-button ${display === 'All'}`}
					onClick={() => setDisplay('All')}
				>
					All
				</button>
				<button
					className={`todos-button ${display === 'Uncompleted'}`}
					onClick={() => setDisplay('Uncompleted')}
				>
					Uncompleted
				</button>
				<button
					className={`todos-button ${display === 'Completed'}`}
					onClick={() => setDisplay('Completed')}
				>
					Completed
				</button>
			</div>
		</main>
	)
}

export default Todos
