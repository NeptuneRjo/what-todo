import React, { useState } from 'react'
import useStyles from './styles'

import Todo from './Todo/Todo'

import {
    TextField, Stack, Box,
    ButtonGroup, Button, Typography
} from '@mui/material'

import {
    addDoc, serverTimestamp,
    onSnapshot, doc, query, orderBy
} from 'firebase/firestore'

const Todos = ({ colRef, db }) => {

    const classes = useStyles()
    const [display, setDisplay] = useState('All')

    const placeholderTodos = [
        'Go grocery shopping',
        'Clean the house',
        'Mow the lawn', 
    ]

    const pushTodoToFirebase = (e) => {
        const form = document.querySelector('#form')
        e.preventDefault()

        addDoc(colRef, {
            todo: form.todo.value,
            completed: false,
            createdAt: serverTimestamp()
        })
        .then(() => {
            form.reset()
        })
    }

    const setTodosDisplay = (display) => {
        setDisplay(display)
    }

    const q = query(colRef, orderBy('createdAt'))

    onSnapshot(q, (snapshot) => {
        let todos = []

        snapshot.docs.forEach((doc) => {
            todos.push({...doc.data(), id: doc.id})
        })

        console.log(todos)
    })

    return (
        <main className={classes.main}>
            <Typography
                variant='div'
                component='div'
                className={classes.header}
            >
                {display}<br />
                Todos
            </Typography>
            <form 
                className={classes.inputContainer} 
                id='form'
            >
                <TextField
                    required
                    id="outlined-required"
                    label="What Todo"
                    placeholder={placeholderTodos[Math.floor(Math.random() * placeholderTodos.length)]}
                    className={classes.input}
                    name='todo'
                />
                <Button 
                    variant='outlined'
                    type='submit'
                    onClick={(e) => pushTodoToFirebase(e)}
                >
                    Submit
                </Button>
            </form>

            <Stack
                direction='column'
                spacing={2}
                className={classes.stack}
            >
                <Todo />
            </Stack>
            <ButtonGroup 
                variant="outlined" 
                aria-label="outlined primary button group"
                className={classes.buttonGroup}
            >
                <Button
                    onClick={() => setTodosDisplay('All')}
                >
                    All
                </Button>
                <Button
                    onClick={() => setTodosDisplay('Uncompleted')}
                >
                    Uncompleted
                </Button>
                <Button
                    onClick={() => setTodosDisplay('Completed')}
                >
                    Completed
                </Button>
            </ButtonGroup>
        </main>
    )
}

export default Todos