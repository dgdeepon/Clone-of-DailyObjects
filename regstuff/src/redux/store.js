import { applyMiddleware, legacy_createStore,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {reducer as adminreducer} from "./AdminReducer/Reducer"
import {reducer as adminregister} from "./AdminReducer/Register/Reducer"
import {reducer as userreducer} from "./AdminReducer/UserReducer/Reducer"
import {reducer as allproductreducer} from "./AdminReducer/Allproduct/Reducer"
import {reducer as admindatareducer} from "./AdminReducer/AdminReducer/Reducer"
const mainReducer=combineReducers({adminreducer,adminregister,userreducer,allproductreducer,admindatareducer

});

export const store=legacy_createStore(mainReducer,applyMiddleware(thunk));