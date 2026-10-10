import { createSlice } from "@reduxjs/toolkit";
import reducer from "./userSlice";

const FeedSlice=createSlice({
    name:"feed",
    initialState:null,
    reducers:{
        addFeed:(state,action)=>{
            return action.payload
        },
        removeFeed:(state,action)=>{
            return null
        }
    }
})
export default FeedSlice.reducer
export const {addFeed,removeFeed}=FeedSlice.actions