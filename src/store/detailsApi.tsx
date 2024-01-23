import { User } from "@/interface";
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const detailsApi =createApi({
    baseQuery:fetchBaseQuery({
        baseUrl:"https://details-alpha.vercel.app/"
    }),
    endpoints:(builder)=>({
        getDetails: builder.query<User,void>({
            query:()=>"/",
    }),
    }),
});

export const {useGetDetailsQuery} = detailsApi