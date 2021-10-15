import axios from "axios";
import { GET_BOUGHT_STATUS_FAIL, GET_BOUGHT_STATUS_REQUEST, GET_BOUGHT_STATUS_SUCCESS } from "../constants/boughtStatusConstants";
import { CLEAR_ERRORS } from "../constants/homeConstants";

export const bought=(id)=>async(dispatch)=>{
    try{
        dispatch({
            type:GET_BOUGHT_STATUS_REQUEST
        })
        const config = { headers: { "Content-Type": "application/json" } };
        let {data}=await axios({
                        method: 'get',
                        url: `http://localhost:8000/api/v1/boughtstatus/${id}`,config
        })
        dispatch({type:GET_BOUGHT_STATUS_SUCCESS,payload:data})
    }catch(err){
         dispatch({ type: GET_BOUGHT_STATUS_FAIL, payload: err.response.data.message });
    }
}