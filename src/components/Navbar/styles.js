import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	email: {
		height: '24.5px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '.75rem',
		paddingBottom: '1rem',
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
	},
	user: {
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
}))
