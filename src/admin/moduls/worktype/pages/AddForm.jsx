import React, { useState,Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Image } from 'semantic-ui-react'
import SchoollService from '../../../services/schoollService';
import { InputRequiredText } from '../../../../components/InputRequiredText';
import { InputText } from '../../../../components/InputText';
import { SelectInput } from '../../../../components/SelectInput';
import { ImageInput } from '../../../../components/ImageInput';
import CityService from '../../../../services/cityService';
import Button from '@material-ui/core/Button';
export default function AddForm({pageAction})  {
 
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const componentRef = React.useRef();

    const [schoolTypes, setSchoolTypes] = useState([]);
     const [cityTypes, setCityTypes] = useState([]);
        let schoollService=new SchoollService();
     if(schoolTypes.length==0)   schoollService.getSchoollTypes().then(result=>setSchoolTypes(result.data.data));
         let cityService=new CityService();
         if(cityTypes.length==0)     cityService.getAll().then(result=>setCityTypes(result.data.data));
     
    async function addItem() {
       
        let item = { name,avatar};
       
        let result = fetch("http://localhost:8080/api/worktype/addWorkType", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": '*/*'
            },
            body: JSON.stringify(item)
        });
        
        result = await (await result).json();

            setErrorResult(result);
            if(errorResult.success){
                pageAction("list");
            }
        loadErrors();
      
    }
        const [avatarError, setAvatarError] = useState("");
        const [nameError, setNameError] = useState("");
 
    const [errorResult, setErrorResult] = useState([]);
    let i;
    function loadErrors(){
        setAvatarError(""); setNameError("");
       if(errorResult.success==false){
           for(i=0;i<errorResult.resultItems.length;i++){
               if(errorResult.resultItems[i].item==="avatar") setAvatarError(errorResult.resultItems[i].value);
               if(errorResult.resultItems[i].item==="name") setNameError(errorResult.resultItems[i].value);
            }
        }
     }
 
    return (
        
        <div >
            <InputText text={setName} error={nameError} label="Work Type" />
            <ImageInput setUploadImage={setAvatar} label="Avatar"></ImageInput>
               <Button variant="contained"  type="submit" color="primary" disableElevation onClick={(e)=>{addItem()}}>
            Add 
            </Button>     
        </div>
    )
}

