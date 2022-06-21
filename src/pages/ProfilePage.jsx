import React from 'react';
import { Link } from 'react-router-dom';
import { teal } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Typography } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: teal[700]
		},
	},
});

const ProfilePage = () => {
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
                <Typography variant="h4" component="div" color="primary">
                    Profile
                </Typography>
            </div>
            </ThemeProvider>
    )
}

export default ProfilePage;