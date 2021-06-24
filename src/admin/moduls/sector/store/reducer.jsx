

import { ADD_ITEM } from "./actions";
import { items } from "./items";

const initialState = {
    items:items
}

export default function reducer(state = initialState, { type, payload }) {
   
    switch (type) {
        case ADD_ITEM:
        break;        
        default:
            return state;
        
    }
}