import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
	completed: {
		textDecoration: 'line-through',
		opacity: '.9',
	},
	uncompleted: {
		textDecoration: 'none',
		opacity: '1',
	},
}))
