import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const createcontactapi=async(data)=>{
    try {
        const response=await axiosInstance.post(endpoints.cms.createcontact,data)
        return response?.data
        
    } catch (error) {
        console.log(error)
        
    }
}