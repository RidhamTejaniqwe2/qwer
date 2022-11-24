import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import persistReducer from "redux-persist/lib/persistReducer";


import userReducer from "./userReducer";
const persistConfig={
    key:'root',
    storage:AsyncStorage
}
const rootReducer=combineReducers({
    user:userReducer
})
export default persistreducer=persistReducer(persistConfig,rootReducer)
