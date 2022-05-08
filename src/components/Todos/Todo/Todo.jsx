import { Typography } from '@mui/material'
import React, { useState } from 'react'
import useStyles from './styles'

import { updateTodo, db } from '../../../firebase.config'

const Todo = ({ todo }) => {
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
		setCompleted(!completed)
	}

	return (
		<main onClick={() => handleUpdate()}>
			<Typography variant='div' component='div' className={todoClass()}>
				{todo.todo}
			</Typography>
		</main>
	)
}

export default Todo
