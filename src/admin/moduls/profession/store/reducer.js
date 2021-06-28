
const initialState = {
    allDataResult:[],
    message:''
}
 

    export default function professionReducer(state = initialState, { type, payload }) {
    switch (type) {
        case 'ADD_SUCCESS':
            console.log(payload)
                 return {
                    ...state
                }

        case 'ADD_ERROR':
                return {
                       ...state,message:payload
                }
                   
        default:
            return state;
        
    }
}