import {configureStore}  from "@reduxjs/toolkit"
import { detailsApi } from "./detailsApi"

export const store = configureStore({
    reducer:{
        [detailsApi.reducerPath]:detailsApi.reducer,
    },
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware().concat(detailsApi.middleware),
})