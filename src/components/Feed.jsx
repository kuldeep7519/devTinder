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
  const handleRequest=async()=>{
    navigate("/request")
  }
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

 
 if (Feeduser === null) {
  return <div>Loading Feed...</div>;
}

if (Feeduser.length === 0) {
  return <div>No users found!</div>;
}
 
  return Feeduser&&(
    <>
    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-4 px-3 pb-20 w-full">
  <ul className="menu menu-paged menu-vertical bg-base-200 rounded-box w-full max-w-xs md:w-56">
  <li><a>Home</a></li>
  <li><a>About</a></li>
  <li onClick={handleconnection}><a>Connections</a></li>
  <li onClick={handleRequest}><a>Request</a></li>
   
</ul>
    <UserCard user={Feeduser[0]} userid={Feeduser[0]._id}/>
    </div>
    </>
  );
};

export default Feed;
