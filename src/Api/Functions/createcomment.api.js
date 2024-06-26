import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const createcommentApi=async(payload)=>{
    try {
        const response=await axiosInstance.post(endpoints.cms.createcomment,payload)
        return response?.data

        
    } catch (error) {
        console.log(error)
        
    }
}