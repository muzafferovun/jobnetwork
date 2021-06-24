import { combineReducers } from "redux";
import schoolReducer from "../admin/moduls/school/store/reducer";
import worktypeReducer from "../admin/moduls/worktype/store/reducer";
import jobPropertieReducer from "../admin/moduls/jobPropertie/store/reducer";


const rootReducer=combineReducers({
    adminSchool : schoolReducer,
    worktypeReducer : worktypeReducer,
    jobPropertieReducer : jobPropertieReducer,
})
export default rootReducer;