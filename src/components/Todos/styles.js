import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
	inputContainer: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		gap: '1rem',
	},
	input: {
		color: '#fff',
		background: 'transparent',
	},
	stack: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '450px',
		overflowY: 'scroll',
		width: '350px',
		margin: '1rem 0',
		boxShadow: '0px 0px 6px #0000008c',
		background: '#fff',
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
