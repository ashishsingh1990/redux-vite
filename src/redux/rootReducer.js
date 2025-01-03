import { combineReducers } from "redux";
import { countReducer } from "./count/count.reducer";
import { userReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
        count: countReducer,
        user: userReducer,
    });