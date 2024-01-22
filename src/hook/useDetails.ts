import { User } from "@/interface";
import axios from "axios";
import {useQuery} from "react-query"

const useDetails = (url: string) => {
 
  const FetchData = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  const {data:Details,error} = useQuery<User,{message:string}>('userDetails',FetchData,{
    refetchOnWindowFocus: false
  })
  return { Details, error };
};

export { useDetails };
