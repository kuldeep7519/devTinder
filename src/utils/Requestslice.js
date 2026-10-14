import { createSlice } from "@reduxjs/toolkit";

const RequestSlice=createSlice({
    name:"request",
    initialState:null,
    reducers:{
        Addrequest:(state,aciton)=>{
            return aciton.payload
        }
        
    }
})
export const {Addrequest}=RequestSlice.actions
export default RequestSlice.reducer