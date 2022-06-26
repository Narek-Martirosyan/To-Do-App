import './style.scss';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import { useState } from 'react';

export default function AddTodo({initialTodos, setTodo}) {
    const ariaLabel = { 'aria-label': 'description' };

    function add(e) {
        e.preventDefault();
        if(e.target[0].value.trim()) {
            initialTodos.unshift({title: e.target[0].value, completed: false});
        }
        e.target[0].value = '';
        setTodo([...initialTodos]);
    }
    
    return(
        <div className='add-todo'>
            <Box component="form" onSubmit={(e) => add(e)}>
                <Input placeholder="Add todo" inputProps={ariaLabel} sx={{
                    width: '130px'
                }} />
                <Button variant="standart" type="submit" size='small'>Add</Button>
            </Box> 
        </div>
    )
}