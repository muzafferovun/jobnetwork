import { combineReducers } from "redux";
//import schoolReducer from "../admin/moduls/school/store/reducer";
//import worktypeReducer from "../admin/moduls/worktype/store/reducer";
//import jobPropertieReducer from "../admin/moduls/jobPropertie/store/reducer";
import professionReducer from "../admin/moduls/profession/store/reducer";




const rootReducer=combineReducers({
 /*   adminSchool : schoolReducer,
    worktypeReducer : worktypeReducer,
    jobPropertieReducer : jobPropertieReducer,
    */
    professionReducer : professionReducer,
})
export default rootReducer;
