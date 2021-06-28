import React, { useState,Component } from 'react';

import { InputText } from '../../../../components/InputText';

import { ImageInput } from '../../../../components/ImageInput';

import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
export default function AddForm({pageAction})  {
    const history=new useHistory();
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const componentRef = React.useRef();

     async function addItem() {
       
        let item = { name,avatar};
       
        let result = fetch("http://localhost:8080/api/jobpropertie/addJobPropertie", {
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
                history.push(`/admin/jobPropertie/list`);
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
            <InputText text={setName} error={nameError} label="Job Position Propertie Name" />
            <ImageInput setUploadImage={setAvatar} label="Avatar"></ImageInput>
               <Button variant="contained"  type="submit" color="primary" disableElevation onClick={(e)=>{addItem()}}>
            Add 
            </Button>     
        </div>
    )
}

