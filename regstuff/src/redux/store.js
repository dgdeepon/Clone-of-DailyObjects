import { applyMiddleware, legacy_createStore,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {reducer as adminreducer} from "./AdminReducer/Reducer"
import {reducer as adminregister} from "./AdminReducer/Register/Reducer"
import UserLoginReducer from './UserLoginReducer/UserLoginReducer';
const mainReducer=combineReducers({adminreducer,adminregister,UserLoginReducer

});

export const store=legacy_createStore(mainReducer,applyMiddleware(thunk));