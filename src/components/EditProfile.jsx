import React, { useState } from 'react'
import UserCard from "./UserCard"
import { BASE_URL } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios"
import { adduser } from '../utils/userSlice'
const EditProfile = ({user}) => {
  const [firstname,setfirstname]=useState(user.firstname)
  const[lastname,setlastname]=useState(user.lastname)
   const dispatch=useDispatch();
   const [showToast,setshowtoast]=useState(false)
  const handleProfile=async()=>{
    try{

        const res=await axios.patch(BASE_URL+"/profile/edit",{firstname,lastname},{withCredentials:true})
        dispatch(adduser(res?.data?.data))
        setshowtoast(true)
        setTimeout(()=>{
            setshowtoast(false)
        },3000)
    }catch(err){
        console.error(err)
    }

    
  }
  return user&&  (
    <>
    <div className="flex justify-center py-3">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
         

        <label className="label">Firstname</label>
        <input
          type="firstname"
          value={firstname}
          className="input"
          onChange={(e) => {setfirstname(e.target.value)}}
        />
        <label className="label">Lastname</label>
        <input
          type="lastname"
          value={lastname}
          className="input"
          onChange={(e) => {setlastname(e.target.value)}}
        />
        
        <button className="btn btn-neutral mt-4" onClick={handleProfile} >Save Profile</button>
      </fieldset>
    <UserCard user={{firstname,lastname}}/>
    </div>

    {showToast&&<div className="toast toast-top toast-end">
  <div className="alert alert-info">
    <span>User Update succesfull</span>
  </div>
   
</div>}
     </>
  );
}

export default EditProfile