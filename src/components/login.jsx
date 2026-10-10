import React, { useState } from "react";
import axios from "axios"
import { useDispatch } from "react-redux";
import {adduser} from "../utils/userSlice"
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";
const Login = () => {
  const [ email, setemail ] = useState("vivek123@gmail.com");
  const [ password, setpassword ] = useState("Vivek#23");
  const [ERRORS,setError]=useState("")
  // now we want to actually handle the login thing .. lets see how to do it we can use fetch and also axios and many more libraries . we can use . 
  // but in this episode we are going to use the axios 
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleLogin=async()=>{
    try{
      // below we do a hard coded call to http 
      const res=await axios.post(BASE_URL+"/login",{email,password},{withCredentials:true}) // so if u try to acces from a domain to other domain it will give u an cors error To fix that use middleware of express cors  so for that we have to work on the backend that it will does not give the cors to me . 
    //  console.log(res.data) // so this is the data we want to store it inside the appStore lets see how to do that. 
      dispatch(adduser(res.data)) // it will add data into the store .. 
      // now we are going to make a cool feauture like once u login in => ur nav bar will show ur data acc to ur appStore lets see how to make it . 
      // so u have to suscribe to the store . 
      // once i add user i naviagate to the home page .. 
      return navigate("/")
    }catch(err){
      setError(err.response?.data?.message || err.response?.data || err.message);
  console.error(err);
       
    }
    // this aboove will work fine then u go to application tab then cokkies u would not find cookies  .but it will work for production but for local host it work we wishlist the cors with some options lets do in the backend how to do it.


  }
  return (
    <div className="flex justify-center py-3">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 ">
        <legend className="fieldset-legend">Login</legend>

        <label className="label">Email</label>
        <input
          type="email"
          value={email}
          className="input"
          onChange={(e) => {setemail(e.target.value)}}
        />

        <label className="label">Password</label>
        <input
          type="password"
          value={password}
          className="input"
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <p className="text-red-600">{ERRORS}</p>
        <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
      </fieldset>
    </div>
  );
};

export default Login;
