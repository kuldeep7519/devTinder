import { createSlice } from "@reduxjs/toolkit";

const RequestSlice=createSlice({
    name:"request",
    initialState:null,
    reducers:{
        Addrequest:(state,aciton)=>{
            return aciton.payload
        },
        removerequest:(state,action)=>{
            return null
        }
    }
})
export const {Addrequest,removerequest}=RequestSlice.actions
export default RequestSlice.reducer