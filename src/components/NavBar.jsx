import React, { useDebugValue } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router'
import { removeuser } from '../utils/userSlice'
import { BASE_URL } from '../utils/constants'
import axios from 'axios'
const NavBar = () => {
  const user=useSelector((store)=>store.user)
  
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const handlelogout=async()=>{
    const res=await axios.post(BASE_URL+"/logout",{},{withCredentials:true})
    dispatch(removeuser())
    navigate("/login")
  }
  return (
    <div className="navbar bg-base-300 shadow-sm">
  <div className="flex-1">
    <Link to ="/"className="btn btn-ghost text-xl">devTinder</Link>
  </div>
  {user&&<div className="flex gap-2">
     <p> Welcome, {user.firstname}</p>
    <div className="dropdown dropdown-end mr-7">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <Link to="/profile" className="justify-between">
            Profile
            <span className="badge">New</span>
          </Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handlelogout}>Logout</a></li>
      </ul>
    </div>
  </div>}
</div>
  )
}

export default NavBar