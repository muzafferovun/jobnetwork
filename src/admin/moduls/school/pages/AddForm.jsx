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
    const [website, setWebsite] = useState("");
    const [schoolltype, setSchooltype] = useState("");
    const [city, setCity] = useState(0);
    const componentRef = React.useRef();

    const [schoolTypes, setSchoolTypes] = useState([]);
     const [cityTypes, setCityTypes] = useState([]);
        let schoollService=new SchoollService();
     if(schoolTypes.length==0)   schoollService.getSchoollTypes().then(result=>setSchoolTypes(result.data.data));
         let cityService=new CityService();
         if(cityTypes.length==0)     cityService.getAll().then(result=>setCityTypes(result.data.data));
     
    async function addItem() {
       
        let item = { schoolltype, name,avatar,website,city };
       
        let result = fetch("http://localhost:8080/api/schooll/addSchooll", {
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
       const [schoollTypeError, setSchoollTypeError] = useState("");
       const [websiteError,setWebsiteError ] = useState("");
      const [cityError,setCityError ] = useState("");

    const [errorResult, setErrorResult] = useState([]);
    let i;
    function loadErrors(){
        setAvatarError(""); setNameError(""); setSchoollTypeError(""); setWebsiteError(""); setCityError("");
       if(errorResult.success==false){
           for(i=0;i<errorResult.resultItems.length;i++){
               if(errorResult.resultItems[i].item==="avatar") setAvatarError(errorResult.resultItems[i].value);
               if(errorResult.resultItems[i].item==="name") setNameError(errorResult.resultItems[i].value);
               if(errorResult.resultItems[i].item==="schoollType") setSchoollTypeError(errorResult.resultItems[i].value);
               if(errorResult.resultItems[i].item==="website") setWebsiteError(errorResult.resultItems[i].value);
               if(errorResult.resultItems[i].item==="city") setCityError(errorResult.resultItems[i].value);
           }
        }
     }
 
    return (
        
        <div >
            <InputText text={setName} error={nameError} label="Schooll Name" />
            <SelectInput label="Schooll Type"  error={schoollTypeError} selectValue={setSchooltype} items={schoolTypes}></SelectInput>
            <InputText text={setWebsite}  error={websiteError} label="Schooll Web Site" />
            <ImageInput setUploadImage={setAvatar} label="Schooll Avatar"></ImageInput>
            <SelectInput  label="Schooll City"  error={cityError} selectValue={setCity} items={cityTypes}></SelectInput>
              <Button variant="contained"  type="submit" color="primary" disableElevation onClick={(e)=>{addItem()}}>
            Add New Schooll
            </Button>     
        </div>
    )
}

