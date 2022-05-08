import { Typography } from '@mui/material'
import React, { useState } from 'react'
import useStyles from './styles'

import { updateTodo, db } from '../../../firebase.config'

const Todo = ({ todo, setRerender, rerender }) => {
	const classes = useStyles()

	const [completed, setCompleted] = useState(todo.completed)

	const todoClass = () => {
		if (completed) {
			return classes.completed
		}
		return classes.uncompleted
	}

	const handleUpdate = () => {
		updateTodo(!todo.completed, todo.id)
		setRerender(Math.random())
	}

	return (
		<main
			onClick={() => handleUpdate()}
			className={`todo ${todo.completed ? 'completed' : ''}`}
		>
			<Typography variant='div' component='div' className={todoClass()}>
				{todo.todo}
			</Typography>
		</main>
	)
}

export default Todo
