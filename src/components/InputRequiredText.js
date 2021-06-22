import React, { Component,useState } from 'react';

import { TextField } from '@material-ui/core';
export const InputRequiredText = ({text,label}) => {
    const [inputValue, setInputValue] = useState("");
     const onTextChange=(e)=> {
        setInputValue( e.target.value)
        text(e.target.value);
           
    }
    return (
        <div className="container">
        <TextField  style={{width:"95%"}}
          required
          id="outlined-required"
          label={label}
          defaultValue="Hello World"
          variant="outlined"
          value={inputValue}
       
        onChange={(e)=>onTextChange(e)}
        />
    </div>
)
}
