import axiosInstance from "../Axios/axiosInstance"
import { endpoints } from "../Endpoints/endpoints"


export const searchblogApi=async(output)=>{
    try {
        const url=`${endpoints.cms.searchblog}/${output}`;
        const response=await axiosInstance.get(url)
        console.log(response?.data)
        return response?.data?.data
        
    } catch (error) {
        console.log(error)
        
    }

}