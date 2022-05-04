import React, { useState } from 'react'
import useStyles from './styles'

import Todo from './Todo/Todo'

import {
    TextField, Stack,
    ButtonGroup, Button, Typography
} from '@mui/material'

const Todos = () => {

    const classes = useStyles()
    const [display, setDisplay] = useState('All')

    const placeholderTodos = [
        'Go grocery shopping',
        'Clean the house',
        'Mow the lawn', 
    ]

    const setTodosDisplay = (display) => {
        setDisplay(display)
    }

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
            <TextField
                required
                id="outlined-required"
                label="What Todo"
                placeholder={placeholderTodos[Math.floor(Math.random() * placeholderTodos.length)]}
                className={classes.input}
                inputProps={{
                    className: classes.input
                }}
            />
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