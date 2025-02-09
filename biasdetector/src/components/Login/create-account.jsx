import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import logoImage from '../../assets/ehtslogo_login.png';

const CreateAccount = () => {
  const navigate = useNavigate();

  const [userEmail, setEmail] = useState('');
  const [userPassword, setPassword] = useState('');
  const [error, setError] = useState('');

  const SubmitAccount = async (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate('/Login');
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen w-screen mx-auto">
      {/* LOGO */}
      <div className="w-full lg:w-3/4 h-full bg-[#274C77] 
                      flex items-center justify-center p-4 overflow-hidden">
        <img className="w-[150px] sm:w-[200px] md:w-[250px] lg:w-[400px] xl:w-[500px]
                     transition-all duration-500"
        src={logoImage}
        alt="Logo"
      />
      </div>

      {/* FORM CONTAINER */}
      <div className="w-full lg:w-1/4 h-full bg-white flex items-center justify-center
                      px-6">
        {/* FORM */}
        <div className="bg-[#274C77] w-full py-20 my-10
                      rounded-lg shadow-lg p-6 sm:p-8 mx-4
                      flex flex-col justify-start items-center">
          <h2 className="text-center text-[#E7ECEF] mb-8 sm:mb-12 
                         text-3xl sm:text-4xl lg:text-5xl font-bold">
            Create an Account
          </h2>
          <form onSubmit={SubmitAccount} className="flex flex-col justify-center items-center text-[#E7ECEF] w-full">
            {/* EMAIL */}
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="email" className="text-lg font-bold mb-2">Email Address</label>
              <input
                type="email"
                value={userEmail}
                placeholder="Enter Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            {/* PASSWORD */}
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="password" className="text-lg font-bold mb-2">Password</label>
              <input
                type="password"
                value={userPassword}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            {/* BUTTONS */}
            <button
              type="submit"
              className="mt-4 text-black py-2 font-bold w-full bg-white border-none transition-all duration-500 hover:bg-[#A3CEF1] hover:scale-105 hover:border-transparent rounded">
              Create Account
            </button>
            <button
              type="button"
              className="mt-4 text-black py-2 font-bold w-full bg-[#E7ECEF] border-none transition-all duration-500 hover:bg-[#bfc0bc] hover:scale-105 hover:border-transparent rounded"
              onClick={() => navigate('/Login')}>
              Back to Login
            </button>
          </form>

          {/* ERROR MESSAGE */}
          {error && (
            <div className="text-red-500 text-center mt-4">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;