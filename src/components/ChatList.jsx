import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

export default function FolderList() {
    return (
      <div className='chatlist'>
            <Box component="form"
				sx={{
					m: 1, border: '2px solid gray', borderRadius: '10px', gap: '10px', width: '400px', height: '330px', margin: '10px', padding: '15px', backgroundColor: '#e9e9e9'
				}}
				noValidate
				avtoComplete='off'
            >
                <Typography variant="h5" component="div" color="primary">Chat list</Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Some chat"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Complicated discussion" />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <FolderIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Other..." />
                </ListItem>
                </List>
            </Box>
      </div>
    
  );
}
