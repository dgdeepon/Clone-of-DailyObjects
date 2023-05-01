import { applyMiddleware, legacy_createStore,combineReducers } from 'redux';
import thunk from 'redux-thunk';


const mainReducer=combineReducers({

});

export const store=legacy_createStore(mainReducer,applyMiddleware(thunk));