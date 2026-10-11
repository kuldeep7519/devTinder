import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedslice";
import {BASE_URL} from "../utils/constants.js"
import UserCard from "./UserCard.jsx";
import { useNavigate } from "react-router";
const Feed = () => {
  const Feeduser = useSelector((store) => store.feed);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  const handleconnection=()=>{
      navigate("/connection")
  }
  const feedapi = async () => {
    try {
      const res = await axios.get(BASE_URL+"/user/feed", { withCredentials: true });
       console.log(res.data)
      dispatch(addFeed(res.data));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    feedapi();
  }, []);
 
  return Feeduser&&(
    <>
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 px-3 pb-20 w-full">
  <ul className="menu menu-paged menu-vertical bg-base-200 rounded-box w-full max-w-xs md:w-56">
  <li><a>Home</a></li>
  <li><a>About</a></li>
  <li onClick={handleconnection}><a>Connections</a></li>
   
</ul>
    <UserCard user={Feeduser[0]}/>
    </div>
    </>
  );
};

export default Feed;
