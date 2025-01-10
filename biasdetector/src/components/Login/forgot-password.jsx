import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logoImage from '../../assets/ehtslogo_forgot_pass.png';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [userEmail, setEmail] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();
    const auth = getAuth();

    try {
      await sendPasswordResetEmail(auth, userEmail);
      setSuccessMessage('Password reset email sent! Please check your inbox.');
      setError('');
    } catch (error) {
      setError(error.message);
      setSuccessMessage('');
    }
  };

  return (
    <div className="font-lato bg-[#274C77] w-screen h-screen flex justify-center items-center relative">
      {/* LOGO */}
      <div className="w-full md:w-2/3 flex items-center justify-center p-8">
        <img className="w=[200px] md:w-[300px] lg:w-[400px]"
          src={logoImage}
          alt="Logo"
        />
      </div>

      {/* FORM CONTAINER */}
      <div className="bg-white w-[40vw] h-screen flex justify-center items-center shadow-lg ml-auto relative">
        {/* FORM */}
        <div className="bg-[#274C77] w-[20vw] h-[65vh] flex flex-col justify-start items-center rounded-lg shadow-lg p-5 overflow-y-auto min-h-[500px] max-h-[90vh] relative">
          <h2 className="text-center text-[#E7ECEF] mb-[25%] text-[30px] font-bold">
            Reset Password
          </h2>
          <form onSubmit={handleResetPassword} className="flex flex-col justify-center items-center text-[#E7ECEF] w-full">
            {/* EMAIL */}
            <div className="flex flex-col w-full mb-4">
              <label htmlFor="email" className="text-lg font-bold mb-2">Email Address</label>
              <input
                type="email"
                value={userEmail}
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              />
            </div>

            {/* BUTTONS */}
            <button
              type="submit"
              className="mt-4 text-black py-2 font-bold w-full bg-white border-none transition-all duration-500 hover:bg-[#ff6c5c] hover:scale-105 rounded">
              Reset Password
            </button>
            <button
              type="button"
              className="mt-4 text-black py-2 font-bold w-full bg-[#E7ECEF] border-none transition-all duration-500 hover:bg-[#bfc0bc] hover:scale-105 rounded"
              onClick={() => navigate('/Login')}>
              Back to Login
            </button>
          </form>

          {/* SUCCESS MESSAGE */}
          {successMessage && (
            <div className="text-green-500 text-center mt-4">
              {successMessage}
            </div>
          )}

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

export default ForgotPassword;