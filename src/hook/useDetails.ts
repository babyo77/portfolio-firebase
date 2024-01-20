import { User } from "@/interface"
import axios from "axios"
import { useEffect, useState } from "react"


const useDetails = (url:string) =>{
    const [Details,setDetails] = useState<User | null>(null)
useEffect(()=>{
    const FetchData=async()=>{
        const response = await axios.get(url)
        const responseData:User = response.data
        setDetails(responseData)
    }
    FetchData()
},[url])
     return Details
   
}
export default useDetails