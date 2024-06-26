import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const alldepartmentApi=async()=>{
    try {
        const response=await axiosInstance.get(endpoints.cms.alldepartment)
        console.log(response?.data?.data)
        return response?.data?.data
        
    } catch (error) {
        console.log("error",error)
        
    }
}