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
        paddingBottom: '1rem'
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#fff',
        width: '500px',
        borderRadius: '8px',
        boxShadow: '2px 2px 12px #00000',
        paddingTop: '2rem',
        gap: '1rem'
    },
    textField: {
        width: '350px',
        margin: '1rem',
        color: '#fff',
    },
    buttonContainer: {
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'flex-end',
        margin: '2rem 0',
        marginTop: '1rem',
        width: '350px'
    }
}))