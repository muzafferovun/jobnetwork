import { createStore,applyMiddleware } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk from "redux-thunk"

export function configureStore(){

    return createStore(rootReducer,devToolsEnhancer(applyMiddleware(thunk)))
}
