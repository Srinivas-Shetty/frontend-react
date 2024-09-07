// src/pages/ResetPassword.js

import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { resetpasswordAction, updatepasswordDataOfReset, updatepasswordAction } from "../redux/actions/authActions";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  console.log(token) 
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const { updatepasswordData } = useSelector((state) => state.auth);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    else{
      dispatch(updatepasswordAction(password, token))
    }

   
      
  };

  useEffect(() => {
    console.log(updatepasswordData,"updatepasswordData");
    
    if (updatepasswordData && updatepasswordData?.data) {
        toast.success(updatepasswordData?.data?.msg);
        dispatch(updatepasswordDataOfReset())  
        navigate('/login');
    }
    if (updatepasswordData && updatepasswordData?.error) {
      setErrorMessage(updatepasswordData?.error?.msg);
        toast.error(updatepasswordData?.error?.msg); 
        dispatch(updatepasswordDataOfReset()) 
    }
}, [updatepasswordData]);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-4">Reset Password</h2>
        {errorMessage && (
          <div className="bg-red-100 text-red-700 p-2 rounded mb-4">{errorMessage}</div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#662671] text-white py-2 px-4 rounded hover:bg-purple-950"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
