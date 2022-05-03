import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    main: {
        height: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#303030',
        color: '#fff',
    },
    header: {
        fontWeight: 'bold',
        fontSize: '2.5em',
        width: '500px',
        padding: '3rem'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff',
        width: '500px',
        borderRadius: '8px',
        boxShadow: '2px 2px 12px #00000'
    },
    textField: {
        width: '350px',
        margin: '1rem',
        color: '#fff',
    },
    buttonContainer: {
        display: 'flex',
        gap: '2rem',
        justifyContent: 'flex-end',
        margin: '3rem 0',
        width: '350px'
    }
}))