import axios from "axios"
import { useMutation } from "react-query"

const handleSubmit = async (data:string) =>{
 const response = await  axios.post("http://172.20.10.2:3000/submit",data,{
    headers:{
        'Content-Type':'application/json'
    }
 })
  return response.data
}

const UseSubmitFromData = ()=>{
    return useMutation(handleSubmit,{
        retry:1
    })
}

export {UseSubmitFromData}