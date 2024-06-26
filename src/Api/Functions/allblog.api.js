import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const allblogApi=async()=>{
    try {
        const response=await axiosInstance.get(endpoints.cms.allblog)
        console.log(response?.data?.data)
        return response?.data?.data
    
        
    } catch (error) {
        console.log( "error",error)
        
    }
}