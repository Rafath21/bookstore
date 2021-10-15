import axios from "axios";
import { CLEAR_ERRORS } from "../constants/homeConstants";
import { GET_MY_ORDERS_FAIL, GET_MY_ORDERS_REQUEST, GET_MY_ORDERS_SUCCESS } from "../constants/myOrdersConstants";

export const myOrders=(username)=>async(dispatch)=>{
    try{
        dispatch({
            type:GET_MY_ORDERS_REQUEST
        })
        const config = { headers: { "Content-Type": "application/json" } };
        let {data}=await axios({
                        method: 'get',
                        url: `http://localhost:8000/api/v1/orders/${username}`,config
        })
        dispatch({type:GET_MY_ORDERS_SUCCESS,payload:data})
    }catch(err){
         dispatch({ type: GET_MY_ORDERS_FAIL, payload: err.response.data.message });
    }
}