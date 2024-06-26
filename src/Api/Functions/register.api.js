import { endpoints } from "../Endpoints/endpoints"
import axiosInstance from "../Axios/axiosInstance"



export const Registerapi=async(payload)=>{
    try {
        const response=await axiosInstance.post(endpoints.auth.register,payload)
        return response?.data
        
    } catch (error) {
        console.log("Contact Form error", error);

    }

}