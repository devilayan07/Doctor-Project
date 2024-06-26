import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const featuredDoctor=async()=>{
    try {
        const response=await axiosInstance.get(endpoints.cms.featuredoctors)
        console.log(response?.data)
        return response?.data?.data
        
    } catch (error) {
        console.log("error",error)
        
    }
}