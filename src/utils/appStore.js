import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"
import feedReducer from "./feedslice"
import connectionreducer from "./connectionSlice"
const appStore=configureStore({
    reducer:{
        user:userReducer,
        feed:feedReducer,
        connection:connectionreducer
    }
})
export default appStore;
// now we want to provide our store to the whole applicatioin so go to the app.js (Root) 