import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import FolderIcon from '@mui/icons-material/Folder';

const ChatList = ({ name }) => {
    return (
            <ListItem disablePadding>
            <ListItemButton>
                <ListItemAvatar><Avatar><FolderIcon /></Avatar></ListItemAvatar>
                <ListItemText primary={name} />
            </ListItemButton>
            </ListItem>         
  );
}

export default ChatList;