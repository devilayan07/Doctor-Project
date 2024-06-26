import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const personalcareapi=async()=>{
    try {
        const response=await axiosInstance(endpoints.cms.personalcare)
        return response?.data?.data
        
    } catch (error) {
        console.log( "error",error)
        
    }
}