import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { homeReducer } from "./reducers/homeReducers";
import { sellReducer, soldReducer } from "./reducers/sellReducers";
import { placeOrderReducer } from "./reducers/placeOrderReducer";
import { getOrdersReducer } from "./reducers/myOrdersReducer";
import { boughtStatusReducer } from "./reducers/boughtStatusReducer";
import { soldStatusReducer } from "./reducers/soldStatusReducer";

const reducer=combineReducers({
    books:homeReducer,
    soldBooks:soldReducer,
    result:sellReducer,
    orderPlaced:placeOrderReducer,
    orders:getOrdersReducer,
    boughtStatus:boughtStatusReducer,
    soldStatus:soldStatusReducer
});

let initialState={};

const middleware=[thunk];

const store=createStore(
    reducer,initialState,composeWithDevTools(applyMiddleware(...middleware))
)

export default store;