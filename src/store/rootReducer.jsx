import { combineReducers } from "redux";
import schoolReducer from "../admin/moduls/school/store/reducer";
import languageReducer from "../admin/moduls/language/store/reducer";
import jobPositionReducer from "../admin/moduls/jopposition/store/reducer";


const rootReducer=combineReducers({
    adminSchool : schoolReducer,
    adminLanguage : languageReducer,
    adminJobposition : jobPositionReducer
})
export default rootReducer;