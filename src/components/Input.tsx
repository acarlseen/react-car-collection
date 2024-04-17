import { TextField } from '@mui/material'
import { forwardRef } from 'react'

interface InputType{
    name: string,
    placeholder: string
}

//look up 'Virtual DOM'
// rewatch React PB 10
// look up 'forwardRef'
    // connects component and child together so they can talk to each other

export const Input = forwardRef((props: InputType ,ref) => {

    return (
        <TextField
            variant = "outlined"
            margin="normal"
            inputRef={ref}
            fullWidth
            type='text'
            id={props.name}
            {...props}
        >

        </TextField>
    )
})
