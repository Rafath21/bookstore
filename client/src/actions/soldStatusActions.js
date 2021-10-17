import axios from "axios";
import { GET_SOLD_STATUS_FAIL, GET_SOLD_STATUS_REQUEST, GET_SOLD_STATUS_SUCCESS } from "../constants/soldStatusConstants";
import { CLEAR_ERRORS } from "../constants/homeConstants";

export const sold=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:GET_SOLD_STATUS_REQUEST
        })
        let {data}=await axios({
                        method: 'get',
                        url: `http://localhost:8000/api/v1/soldstatus/${id}`,
                        withCredentials: true,
        headers: {'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'
    }
        })
        dispatch({type:GET_SOLD_STATUS_SUCCESS,payload:data})
    }catch(err){
         dispatch({ type: GET_SOLD_STATUS_FAIL, payload: err.response.data.message });
    }
}