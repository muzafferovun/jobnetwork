import React, { useState,Component,useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Image } from 'semantic-ui-react'
import { InputRequiredText } from '../../../../components/InputRequiredText';
import { InputText } from '../../../../components/InputText';
import { SelectInput } from '../../../../components/SelectInput';
import { ImageInput } from '../../../../components/ImageInput';
import { addItem } from '../store/actions';
import Button from '@material-ui/core/Button';
import {useDispatch,connect} from "react-redux"
import {items} from "../store/items"

const AddForm=props=>  {
    const dispatch = useDispatch()
     const [name, setName] = useState("");
   const [nameError, setNameError] = useState("");

  /*    
    async function addItem() {
       
       
        let result = fetch("http://localhost:8080/api/profession/addProfession", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'yildiz/yildiz'
            },
            body: JSON.stringify(item)
        });
        
        result = await (await result).json();
      }
    
    const [nameError, setNameError] = useState("");
 
    const [errorResult, setErrorResult] = useState([]);
    let i;
    */
  /*  
    function loadErrors(){
        setNameError("");
       if(errorResult.success==false){
           for(i=0;i<errorResult.resultItems.length;i++){
               if(errorResult.resultItems[i].item==="name") setNameError(errorResult.resultItems[i].value);
            }
        }
     }
          let actionItem = {};
          actionItem.item={name}
          actionItem.result={}
 */
 useEffect(() => {
      dispatch(addItem());
     
 },[] )
     const handleAddItem=()=>{
 
        
       
      
//        toast.success(`${product.productName} sepete Eklendi`);

    }
    
    return (
        
        <div >
            <InputText text={name} error={nameError} label="Sector Name" />
               <Button variant="contained"  type="submit" color="primary" disableElevation onClick={()=>addItem()}>
            Add 
            </Button>     
        </div>
    )
}
const mapStatetoProps=state=>{
    return{
        items:{
        addItem:[],
        errorResult:[]
        }
    }
}
export default connect(mapStatetoProps,{items})(AddForm);