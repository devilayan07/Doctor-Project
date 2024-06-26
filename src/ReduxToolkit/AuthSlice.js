import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Api/Axios/axiosInstance";
import { toast } from "react-toastify";

export const fetchlogin = createAsyncThunk("/login", async (data) => {
    const response=await axiosInstance.post("/login",data)
    return response?.data
  });
  

const AuthSlice=createSlice({
    name:"login",
    initialState:{
        status:"idle",
        isLoggedIn:false,
        redirectTo:null
    },
    reducers:{
        reset_redirectTo: (state, { payload }) => {
            state.redirectTo = payload;
        },
    
      
        handleLoggedout:(state)=>{
            localStorage.removeItem("token")
            localStorage.removeItem("image")
            localStorage.removeItem("name")
            localStorage.removeItem("userid")
            localStorage.removeItem("departmentid")
            localStorage.removeItem("doctorid")
            localStorage.removeItem("email")
            localStorage.removeItem("phone")
            localStorage.removeItem("blogid")



            state.isLoggedIn=false
            toast("Logout successfull")


        },
        check_token:(state)=>{
            let token=localStorage.getItem("token")
            if(token!==null && token!==undefined){
                state.isLoggedIn=true
            }
        }

    },
    extraReducers:(builder)=>{
        builder.addCase(fetchlogin.pending,(state)=>{
            state.status="loading"
        })
        builder.addCase(fetchlogin.fulfilled,(state,action)=>{
            state.status="idle"
            if(action.payload?.status===200){
                state.redirectTo="/"
                toast.success(action.payload?.message)
                localStorage.setItem("token",action.payload?.token)
                localStorage.setItem("userid",action.payload?.data._id)
                localStorage.setItem("name",action.payload?.data.name)
                localStorage.setItem("image",action.payload?.data.image)
                localStorage.setItem("email",action.payload?.data.email)
                localStorage.setItem("phone",action.payload?.data.phone)
                
                state.isLoggedIn=true
            }
        })
        builder.addCase(fetchlogin.rejected,(state)=>{
            state.status="idle"
            toast.error("login error")
        })

    }
})
 export const {handleLoggedout,check_token,reset_redirectTo}=AuthSlice.actions
export default AuthSlice.reducer
