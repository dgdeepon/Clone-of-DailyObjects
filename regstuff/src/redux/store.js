import { applyMiddleware, legacy_createStore,combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {reducer as adminreducer} from "./AdminReducer/Reducer"
import {reducer as adminregister} from "./AdminReducer/Register/Reducer"
import {reducer as userreducer} from "./AdminReducer/UserReducer/Reducer"
import {reducer as allproductreducer} from "./AdminReducer/Allproduct/Reducer"
import {reducer as admindatareducer} from "./AdminReducer/AdminReducer/Reducer"
import {reducer as deletereducer} from "./AdminReducer/DeleteReducer/Reducer"
import {reducer as singleproductreducer} from "./AdminReducer/SingleProductReducer/Reducer"
import {reducer as addproductreducer} from "./AdminReducer/AdminReducer/AddProduct/Reducer"
import {reducer as ordersdatareducer} from "./AdminReducer/CartReducer/Reducer"
import {reducer as editproductreducer} from "./AdminReducer/EditProductReducer/Reducer"
import {reducer as usercartreducer} from "./AllCartproductuserside/Reducer"
import UserLoginReducer from './UserLoginReducer/UserLoginReducer';

const mainReducer=combineReducers({adminreducer,adminregister,UserLoginReducer,userreducer,allproductreducer,admindatareducer,deletereducer,singleproductreducer,addproductreducer,ordersdatareducer,editproductreducer,usercartreducer

});

export const store=legacy_createStore(mainReducer,applyMiddleware(thunk));