import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
	main: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		minHeight: '100vh',
		background: '#fff',
	},
	inputContainer: {
		width: '450px',
		display: 'flex',
		justifyContent: 'center',
		gap: '1rem',
	},
	input: {
		color: '#fff',
	},
	stack: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '450px',
		overflowY: 'scroll',
		width: '450px',
		margin: '1rem 0',
		boxShadow: '0px 0px 6px #0000008c',
	},
	buttonGroup: {
		width: '300px',
	},
	header: {
		textAlign: 'center',
		padding: '1rem 0',
		fontSize: '1.1em',
	},
}))
