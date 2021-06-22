import React, { useEffect, useState } from 'react'

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import SchoollService from '../../../services/schoollService';
const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));
export default function AddForm() {
    const classes = useStyles();
    const [schooll, setSchooll] = React.useState({
        schoollType: 1,
        name: '',
    });
    const handleChange = (event) => {
        const name = event.target.name;
        setSchooll({
            ...schooll,
            [name]: event.target.value,
        });

    };
    const [schoollTypes, setSchoollTypes] = useState([]);
    useEffect(() => {
        let schoollService = new SchoollService();
        schoollService.getSchoollTypes().then(result => setSchoollTypes(result.data.data))
    })

    return (
        <div>
            <TextField style={{ width: "90%" }}
                required
                id="outlined-required"
                label="Schooll Name"
                defaultValue=""
                variant="outlined"
                value={schooll.name}
                onChange={handleChange}
                name="name"
            />
            <FormControl required className={classes.formControl} style={{ width: "90%" }}>
                <InputLabel htmlFor="age-native-required">Schooll Type</InputLabel>
                <Select
                    native
                    value={schooll.schoollType}
                    onChange={handleChange}
                    name="schoollType"
                    inputProps={{
                        id: 'age-native-required',
                    }}
                >
                    {
                        schoollTypes.map(schoollType => (
                            <option value={schoollType.id}>{schoollType.name}</option>
                        ))
                    }

                </Select>
                <FormHelperText>Required</FormHelperText>
            </FormControl>
        </div>
    )
}
