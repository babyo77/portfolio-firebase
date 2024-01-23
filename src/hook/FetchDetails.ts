import { FriendsInterface } from "@/interface";
import axios from "axios";
import { useQuery } from "react-query";

const FetchDetails = (url: string) => {
  const FetchData = async () => {
    const response = await axios.get(url);
    return response.data;
  };

  const { data: FetchedData, error } = useQuery<
    FriendsInterface[],
    { response: {
      data:string
    } }
  >("userDetails", FetchData, {
    refetchOnWindowFocus: false,
  });

  return { FetchedData, error };
};

export { FetchDetails };
