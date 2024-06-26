import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const appointmentapi=async(data)=>{
    try {
        const response=await axiosInstance.post(endpoints.cms.appointment,data)
        return response?.data

    } catch (error) {
        console.log("error",error)
        
    }
}