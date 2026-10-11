
import React, { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { adduser } from "../utils/userSlice";
import { useNavigate } from "react-router";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [ERRORS, setError] = useState("");
  const [isLogin, setlogin] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // SIGNUP API
  const handleSignup = async () => {
    try {
      setError("");

      const res = await axios.post(
        BASE_URL + "/signup",
        {
          firstname,
          lastname,
          phoneno,
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(adduser(res.data));
      navigate("/");
    } catch (err) {
      setError(
        typeof err.response?.data?.message === "string"
          ? err.response.data.message
          : typeof err.response?.data === "string"
          ? err.response.data
          : err.message
      );

      console.error("Signup error:", err.response?.data || err);
    }
  };

  // LOGIN API
  const handleLogin = async () => {
    try {
      setError("");

      const res = await axios.post(
        BASE_URL + "/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      dispatch(adduser(res.data));
      navigate("/");
    } catch (err) {
      setError(
        typeof err.response?.data?.message === "string"
          ? err.response.data.message
          : typeof err.response?.data === "string"
          ? err.response.data
          : err.message
      );

      console.error("Login error:", err.response?.data || err);
    }
  };

  // TOGGLE BETWEEN LOGIN AND SIGNUP
  const handleToggle = () => {
    setlogin(!isLogin);
    setError("");
  };

  return (
    <div className="flex justify-center py-3">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">

        <legend className="fieldset-legend justify-center mx-auto">
          {isLogin ? "Login" : "Sign Up"}
        </legend>

        {/* SIGNUP-ONLY FIELDS */}
        {!isLogin && (
          <>
            <label className="label">First Name</label>
            <input
              type="text"
              value={firstname}
              className="input"
              onChange={(e) => setfirstname(e.target.value)}
              placeholder="Enter first name"
            />

            <label className="label">Last Name</label>
            <input
              type="text"
              value={lastname}
              className="input"
              onChange={(e) => setlastname(e.target.value)}
              placeholder="Enter last name"
            />

            <label className="label">Phone No</label>
            <input
              type="tel"
              value={phoneno}
              className="input"
              onChange={(e) => setphoneno(e.target.value)}
              placeholder="Enter 10-digit phone number"
            />
          </>
        )}

        {/* COMMON FIELDS */}
        <label className="label">Email</label>
        <input
          type="email"
          value={email}
          className="input"
          onChange={(e) => setemail(e.target.value)}
          placeholder="Enter email"
        />

        <label className="label">Password</label>
        <input
          type="password"
          value={password}
          className="input"
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Enter password"
        />

        {/* ERROR MESSAGE */}
        {ERRORS && (
          <p className="text-red-600 text-sm">
            {ERRORS}
          </p>
        )}

        {/* MAIN BUTTON */}
        <button
          type="button"
          className="btn btn-neutral mt-4"
          onClick={isLogin ? handleLogin : handleSignup}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>

        {/* TOGGLE BUTTON */}
        <p className="text-center mt-3">
          {isLogin
            ? "New to devTinder? "
            : "Already have an account? "}

          <button
            type="button"
            className="link link-primary"
            onClick={handleToggle}
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>

      </fieldset>
    </div>
  );
};

export default Login;
