import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import logoImage from '../../assets/ehtslogo_login.png';

const Login = () => {
  const navigate = useNavigate();

  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');

  const LoginHandler = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/EmployeeDisplay');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(errorCode, errorMessage);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen mx-auto">
      {/* Logo Section */}
      <div className="w-full lg:w-3/4 h-full bg-[#274C77] 
                      flex items-center justify-center p-4 overflow-hidden">
        <img 
          className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[400px] xl:w-[500px]
                     transition-all duration-500"
          src={logoImage}
          alt="Logo"
        />
      </div>

      {/* Form Container */}
      <div className="w-full lg:w-1/4 h-full bg-white flex items-center justify-center
                      px-6">
        {/* Login Form */}
        <div className="bg-[#274C77] w-full py-20 my-10
                      rounded-lg shadow-lg p-6 sm:p-8 mx-4
                      flex flex-col justify-start items-center">
          <h2 className="text-center text-[#E7ECEF] mb-8 sm:mb-12 
                         text-3xl sm:text-4xl lg:text-5xl font-bold">
            Welcome
          </h2>

          <form onSubmit={LoginHandler} 
                className="flex flex-col justify-center items-center 
                          text-[#E7ECEF] w-full space-y-4">
            {/* Email Input */}
            <div className="flex flex-col w-full">
              <label htmlFor="email" 
                     className="text-base sm:text-lg font-bold mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={userEmail}
                placeholder="Make sure to enter an @"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 sm:p-3 rounded border border-gray-300 
                          focus:outline-none focus:ring-2 focus:ring-blue-500 
                          text-black text-base"
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col w-full">
              <label htmlFor="password" 
                     className="text-base sm:text-lg font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                value={userPassword}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 sm:p-3 rounded border border-gray-300 
                          focus:outline-none focus:ring-2 focus:ring-blue-500 
                          text-black text-base"
              />
            </div>

            {/* Buttons Container */}
            <div className="w-full space-y-3 pt-4">
              <button
                type="submit"
                className="w-full py-2 sm:py-3 font-bold text-black 
                          bg-white rounded
                          transition-all duration-500 
                          hover:bg-[#A3CEF1] hover:scale-105 hover:border-transparent">
                Login
              </button>

              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="w-full py-2 sm:py-3 font-bold text-black 
                          bg-[#E7ECEF] rounded
                          transition-all duration-500 
                          hover:bg-[#ff6c5c] hover:scale-105 hover:border-transparent">
                Forgot Password?
              </button>

              <button
                type="button"
                onClick={() => navigate('/create-account')}
                className="w-full py-2 sm:py-3 font-bold text-black 
                          bg-[#E7ECEF] rounded
                          transition-all duration-500 
                          hover:bg-[#bfc0bc] hover:scale-105 hover:border-transparent">
                Create an Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;