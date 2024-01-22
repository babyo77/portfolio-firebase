import {createSlice,configureStore} from "@reduxjs/toolkit"


const initialState:{data:null|string[]}={
    data:null
}

const detailsSlice=createSlice({
    name:"details",
    initialState,
    reducers:{
        setData:(state,action)=>{
            state.data = action.payload 
        }
    }
})

const store = configureStore({
    reducer: {
      details: detailsSlice.reducer,
    },
  });


export const {setData} = detailsSlice.actions

export {store}
