import React, { useState } from 'react';


import { InputText } from '../../../../components/InputText';

import { ImageInput } from '../../../../components/ImageInput';

import Button from '@material-ui/core/Button';
import WorkTypeService from '../../../services/workTypeService';
import { useHistory } from 'react-router-dom';
import ListItems from './ListItems';
import { Route } from 'react-router';
import { useDispatch } from 'react-redux';
export default function AddForm({pageAction})  {
    const dispatch = useDispatch();
    const history=new useHistory();
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
 
         let modulService=new WorkTypeService();
     
    function addItem() {
       
        let item = { name,avatar};
        modulService.addWorkType(item)
            .then(result=>{
                setErrorResult(result)
                console.log(errorResult)
                if(errorResult.success){
                    history.push("/admin/worktype/list");
                }
                loadErrors();
               
            }).catch(error=>{})
  /*
            let result = fetch("http://localhost:8080/api/worktype/addWorkType", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                
            },
            body: JSON.stringify(item)
        });
        
        result = await (await result).json();

            setErrorResult(result);
            if(errorResult.success){
                pageAction("list");
            }
        loadErrors();
    */  
    }
    const handleAddItem=(e)=>{
        dispatch(addItem())
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
               <Button variant="contained"  type="submit" color="primary" disableElevation onClick={(e)=>handleAddItem(e)}>
            Add 
            </Button>    
            <Route  path="/admin/worktype/list" component={ListItems}/> 
        </div>
    )
}

