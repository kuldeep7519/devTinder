
import React, { useEffect } from 'react'
import NavBar from './NavBar'
import { Outlet, useNavigate } from 'react-router'
import Fotter from './Fotter'
import axios from 'axios'
import  {BASE_URL} from "../utils/constants"
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from '../utils/userSlice'

const Body = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate()
 
  

  const fetchuser=async()=>{
    try{
     
      const res=await axios.get(BASE_URL+"/profile/view",{withCredentials:true})
      dispatch(adduser((await res.data)))
    }catch(err){
     if (err.response?.status === 401) {
    navigate("/login");
}
      
    }
  }
  useEffect(()=>{
    

      fetchuser();
      },[])
  return (
    <><div><NavBar/></div>
    <Outlet/>
    <Fotter/>
    </>
    
  )
}

export default Body