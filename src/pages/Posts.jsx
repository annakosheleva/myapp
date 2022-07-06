import React, { useEffect } from 'react';
import { getPosts, loader, err } from '../redux/reducers/postsReducer/postsSelector';
import { loadPosts } from '../redux/reducers/postsReducer/postsReducer';
import { useSelector, useDispatch } from 'react-redux';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { teal } from '@mui/material/colors';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const theme = createTheme({
	palette: {
		primary: {
			main: teal[700]
		},
	},
});

const Posts = () => {
    
    const posts = useSelector(getPosts);
    const dispatch = useDispatch();
    const loading = useSelector(loader);
    const error = useSelector(err);

    useEffect(() => {
        
        dispatch(loadPosts())
    }, [])

    if (loading) {
        return (
            <h2>Идёт загрузка...</h2>
        )
    }

    if (error) {
        return (
            <h2>Произошла ошибка!</h2>
        )
    }

    return (
        <ThemeProvider theme={theme}>
            <Box component="form"
				sx={{
					m: 1, border: '2px solid gray', borderRadius: '10px', gap: '10px', width: '800px', minHeight: '800px', margin: '10px', padding: '15px', backgroundColor: '#e9e9e9'
				}}
				noValidate
				avtoComplete='off'
            >
                <Typography variant="h4" component="div" color="primary">Posts list</Typography>
                
                {posts.map((post) => ( 
                    <ListItem key={post.id} sx={{ margin: '10px 0 10px 0', width: '100%', color: 'black', backgroundColor: '#fff' }}>
                        <ListItemText primary={post.title} secondary={post.body} />   
                    </ListItem>
                ))}
            </Box>
        </ThemeProvider> 
    )
}

export default Posts;