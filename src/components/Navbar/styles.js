import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
	toolbar: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	text: {
		height: '24.5px',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '.75rem 5px',
		paddingBottom: '1rem',
		fontWeight: 'bold',
		fontSize: '0.8125rem',
	},
	link: {
		textDecoration: 'none',
		color: 'inherit',
	},
	links: {
		display: 'flex',
	},
	user: {
		display: 'flex',
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
	},
	home: {
		textDecoration: 'none',
		color: 'inherit',
		fontWeight: 'bold',
		fontSize: '1.1em',
	},
}))
