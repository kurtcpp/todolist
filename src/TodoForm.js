import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './styles.css';

const TodoForm = ({ saveTodo }) => {
    const [value, setValue] = useState('');
    return (
        
        <form
            onSubmit={event => {
            event.preventDefault();
            saveTodo(value);
            setValue('');
        }}
        >
            
            
            <div className="mainform">
                <div className="maintext">
                    <TextField
                        variant="outlined"
                        placeholder="Enter a task"
                        margin="normal"
                        onChange={event => {
                            setValue(event.target.value);
                        }}
                        value={value}
                    />
                </div>

            
                <div className="mainbutton">
                    <Button
                        size="large"
                        variant="contained" 
                        color="secondary" 
                        onClick={event => {
                            event.preventDefault();
                            saveTodo(value);
                            setValue('');
                        }}>
                        Add
                    </Button>
                </div>
            </div>

        </form>

    );
};



export default TodoForm;