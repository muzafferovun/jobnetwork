import { useDispatch } from 'react-redux';
import ProfessionService from '../../../services/professionService';


export const ADD_ITEM="ADD_ITEM"



let actionService=new ProfessionService();

export const addItem=(formData)=>async dispatch=>{
   
    await actionService.addProfession(formData).then(
        response=>dispatch({
            type:'ADD_SUCCESS',
            payload:response
        }).catch(
            error=>dispatch({
                type:'ADD_ERROR',
                payload:error
    
            })
        )
    )

}