import { createSlice } from "@reduxjs/toolkit";

const ConnectionSlice=createSlice({
    name:"connection",
    initialState:null,
    reducers:{
        addconnection:(state,action)=>{
            return action.payload
        },
        removeconnection:(state,action)=>{
            return null;
        }
    }
})
export default ConnectionSlice.reducer;
export const{addconnection,removeconnection}=ConnectionSlice.actions