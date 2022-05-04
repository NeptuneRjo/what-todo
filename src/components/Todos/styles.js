import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
    main: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        background: '#fff'
    },
    input: {
        color: '#fff',
        width: '300px',
    },
    stack: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '450px',
        overflowY: 'scroll',
        width: '300px',
        // boxShadow: '0px 4px 8px #303040',
        margin: '1rem 0',
        border: 'solid 1px #303030'
    },
    buttonGroup: {
        width: '300px',
    },
    header: {
        textAlign: 'center',
        padding: '1rem 0',
        fontSize: '1.1em'
    }
}))