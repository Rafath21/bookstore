import { GET_SOLD_STATUS_FAIL, GET_SOLD_STATUS_REQUEST, GET_SOLD_STATUS_SUCCESS } from "../constants/soldStatusConstants";
import { CLEAR_ERRORS } from "../constants/homeConstants";

export const soldStatusReducer=(state={soldStatus:[]},action)=>{
    switch(action.type){
        case GET_SOLD_STATUS_REQUEST:
            return{
                loading:true,
                soldStatus:[]
            }
        case GET_SOLD_STATUS_SUCCESS:
            return{
                loading:false,
                soldStatus:action.payload
            }
        case GET_SOLD_STATUS_FAIL:
            return{
                loading:false,
                error:action.payload
            }
            default:
                return state;
    }
}
