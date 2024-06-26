import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const alldoctorsApi=async()=>{
    try {
        const response=await axiosInstance.get(endpoints.cms.alldoctors)
        console.log(response?.data?.data)
        return response?.data?.data
        
    } catch (error) {
        console.log("error",error)
        
    }
}