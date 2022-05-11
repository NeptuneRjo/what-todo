import { makeStyles } from '@mui/styles'

export default makeStyles(() => ({
	container: {
		height: '100vh',
		background: '#e7e6e6',
	},
	header: {
		fontWeight: 'bold',
		fontSize: '2.5em',
		width: '100%',
		maxWidth: '450px',
		paddingBottom: '1rem',
	},
	content: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		background: '#fff',
		width: '100%',
		maxWidth: '450px',
		borderRadius: '8px',
		boxShadow: '0 0 12px rgba(0, 0, 0, .25)',
		paddingTop: '2rem',
		gap: '1rem',
	},
	textField: {
		width: '90%',
		margin: '1rem',
		color: '#fff',
	},
	buttonContainer: {
		display: 'flex',
		gap: '1.5rem',
		justifyContent: 'flex-end',
		margin: '2rem',
		marginTop: '1rem',
		width: '90%',
	},
}))
