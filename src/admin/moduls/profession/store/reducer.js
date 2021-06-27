export const ADD_ITEM="ADD_ITEM"
export const items={
        addItem:{name:""},
        errorResult:{},
        
   
}
export function addItem(){
    return {
        type:ADD_ITEM,
        payload:{}
    }
}
const initialState = {
    items:[]
}
 
export default function reducer(state = initialState, { type, payload }) {

    switch (type) {
        case ADD_ITEM:
            
               return {
                    ...state
                }
             
        default:
            return state;
        
    }
}