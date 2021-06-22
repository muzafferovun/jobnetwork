import React, { Component,useState } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';

export const InputText = ({text,label}) => {
    const [inputValue, setInputValue] = useState("");
     const onTextChange=(e)=> {
        setInputValue( e.target.value)
        text(e.target.value);
         
    }
    return (
        <div className="container">
        <TextField  style={{width:"95%"}}
         
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
