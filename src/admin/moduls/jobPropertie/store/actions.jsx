export const ADD_ITEM="ADD_ITEM"

export function schoolAdd(data){
    return {
        type:ADD_ITEM,
        payload:data
    }
}
