import React from 'react';
import './Todo.css';
import {Avatar, List, ListItem,ListItemAvatar,ListItemText,ImageIcon, Button } from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


function Todo(props) {
    return (
        <List className='todo_list'>
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="complete it today😄"  />
            </ListItem>
            <DeleteForeverIcon onClick={event =>{db.collection('todos').doc(props.todo.id).delete()}} />
        </List>
    )
}

export default Todo
