import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import Typography from '@mui/material/Typography';

const theme = createTheme({
	palette: {
		primary: {
			main: teal[700]
		},
	},
});

const CountPage = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();



    return (
        <ThemeProvider theme={theme}>
            <div>
            <Link to={'/'}>
                <Typography variant="h4" component="div" color="primary">
                    Home
                </Typography>
            </Link>
            <Link to={'/chats'}>
                <Typography variant="h4" component="div" color="primary">
                    Chats
                </Typography>
            </Link>
            <Link to={'/profile'}>
                <Typography variant="h4" component="div" color="primary">
                    Profile
                </Typography>
            </Link>
            <Typography variant="h4" component="div" color="primary">Count</Typography>
            </div>
            <Box component="form"
				sx={{
					m: 1, border: '2px solid gray', borderRadius: '10px', gap: '10px', minWidth: '200px', minHeight: '200px', margin: '10px', padding: '15px', backgroundColor: '#e9e9e9'
				}}
				noValidate
				avtoComplete='off'
            >
                <div>
            <Button sx={{ margin: '10px 20px 10px 0' }} variant="contained" size="small" onClick={() => dispatch({type: 'plus'})}>+</Button>
                <Typography variant="h5" component="div" color="primary">{count}</Typography>
            <Button sx={{ margin: '10px 20px 10px 0' }} variant="contained" size="small"  onClick={() => dispatch({type: 'minus'})}>-</Button>
            <Button sx={{ margin: '10px 20px 10px 0' }} variant="contained" size="small"  onClick={() => dispatch({type: 'reset'})}>Reset</Button>
            </div>
                </Box>
            
        </ThemeProvider>
        
    )
}

export default CountPage;