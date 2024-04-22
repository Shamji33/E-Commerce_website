import { combineReducers } from "redux";
import { authReducer } from "./Auth.reducer";
import { productReducer } from "./getProduct.reducer";
import { addUserReducer } from "./addUser.reducer";

export const rootReducer = combineReducers({
    productReducer,
    authReducer,
    addUserReducer,
 
}  
)