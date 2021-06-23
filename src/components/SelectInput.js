import React, { Component, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export const SelectInput = ({label,selectValue,items,error})  => {
    const [inputValue, setInputValue] = useState("");
    const classes = useStyles();
    const onTextChange = (e) => {
        setInputValue(e.target.value)
        selectValue(e.target.value)

    }
    return (
        <div className="container"  style={{textAlign:"left",marginTop:"20px"}}>
            <FormControl variant="outlined" className={classes.formControl}   style={{width:"95%"}}>
                <InputLabel htmlFor="outlined-age-native-simple">{label}</InputLabel>
                <Select
                    native
                    value={inputValue}
                    onChange={(e) => onTextChange(e)}
                    label={label}
                    

                >
                            <option value={0}>...</option>
                    {
                        items.map(item => (
                            <option value={item.id}>{item.name}</option>
                        ))
                    }
                </Select>
                {error&&<InputLabel style={{color:"red"}}>{error}</InputLabel>}
            </FormControl>

        </div>
    )
}
