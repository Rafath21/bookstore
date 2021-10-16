import { CLEAR_ERRORS, FORGOT_PASSWORD_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS,RESET_PASSWORD_FAIL } from "../constants/authConstants";
import axios from "axios";
//Login
export const login=(email,password)=>async(dispatch)=>{
    try{
        dispatch({type:LOGIN_REQUEST});
        const config={headers:{"Content-Type":"application/json"}};
        const {data}=await axios({
                        method: 'get',
                        url: `http://localhost:8000/api/v1/login`,
                        data:{
                            email:email,
                            password:password
                        },
                        config
        })
        dispatch({type:LOGIN_SUCCESS,payload:data.user});
    }catch(err){
        dispatch({type:LOGIN_FAIL,payload:err.response.data.message});
    }
}

export const register=(username,email,password)=>async(dispatch)=>{
try{
        dispatch({type:REGISTER_USER_REQUEST});
        const config={headers:{"Content-Type":"application/json"}};
        const {data}=await axios({
                        method: 'POST',
                        url: "http://localhost:8000/api/v1/auth/register",
                        data:{
                            username:username,
                            email:email,
                            password:password,
                        },
                        config
        })
        console.log(data);
        dispatch({type:REGISTER_USER_SUCCESS,payload:data.user});
    }catch(err){
        dispatch({type:REGISTER_USER_FAIL,payload:err.response.data.message});
    }
}

export const logout=()=>async(dispatch)=>{
    try{
        await axios.get("http://localhost:8000/api/v1/logout");
        dispatch({type:LOGOUT_SUCCESS});
    }
    catch(err){
        dispatch({type:LOGOUT_FAIL,payload:err.response.data.message})
    }
}

export const forgotPassword=(email)=>async(dispatch)=>{
    try{
        dispatch({type:FORGOT_PASSWORD_REQUEST});
        const config={headers:{"Content-Type":"application/json"}};
        const {data}=await axios({
            method:'POST',
            url: `http://localhost:8000/api/v1/forgotpassword`,
            data:{
                email:email
            },config
        })
        dispatch({type:FORGOT_PASSWORD_SUCCESS,payload:data.message})

    }catch(err){
        dispatch({type:FORGOT_PASSWORD_FAIL,
        payload:err.response.data.message,
        })
    }
}

export const resetPassword=(token,password)=>async(dispatch)=>{
    try{
        dispatch({type: RESET_PASSWORD_REQUEST});
        const config={headers:{"Content-Type":"application/json"}};
        const {data}=await axios({
            method:'PUT',
            url: `http://localhost:8000/api/v1/passwordreset/${token}`,
            data:{
                password:password
            },config
        })
        dispatch({type: RESET_PASSWORD_SUCCESS,payload:data.success});

    }catch(err){
        dispatch({type:RESET_PASSWORD_FAIL,
        payload:err.response.data.message,
        })
    }
}
export const clearErrors = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};