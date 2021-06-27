import React, { Component,useState } from 'react';
import axios from 'axios';
import { TextField } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
export const InputText = ({text,label,error}) => {
    const [inputValue, setInputValue] = useState("");
      const onTextChange=(e)=> {
        setInputValue( e.target.value)
      
         
    }
    return (
        <div className="container" style={{textAlign:"left",marginTop:"10px"}}>
        <TextField  style={{width:"95%"}}
         
          id="outlined-required"
          label={label}
          defaultValue="Hello World"
          variant="outlined"
          value={inputValue}
       
        onChange={(e)=>onTextChange(e)}
        />
        {error&&<InputLabel style={{color:"red"}}>{error}</InputLabel>}
    </div>
)
}
