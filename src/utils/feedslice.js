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
            if(state!==null && state.length>0){
                return state.slice(1)
            }
            return state
        }
    }
})
export default FeedSlice.reducer
export const {addFeed,removeFeed}=FeedSlice.actions