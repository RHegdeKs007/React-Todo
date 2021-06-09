import React from 'react'
import {Avatar, List, ListItem,ListItemAvatar,ListItemText} from '@material-ui/core'

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon/>
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Todo" secondary={props.text}/>
            </ListItem>
            <li>{props.text}</li>
        </List>
    )
}

export default Todo
