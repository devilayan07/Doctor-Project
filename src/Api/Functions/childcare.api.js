import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const childcareApi=async()=>{
    try {
        const response=await axiosInstance.get(endpoints.cms.childcare)
        return response?.data?.data
        
    } catch (error) {
        console.log(error)
        
    }
}