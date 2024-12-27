import {React, useState} from "react";
import './LoginStyles.css';
import logoImage from '../../assets/ehtslogo_login.png';


const ForgotPassword = () => {
    return (
        <div className = "login-container">
            {/* LOGO */}    
            <img className="logo" src={logoImage} alt="Logo" />            {/* FORM CONTAINER */}
            <div className = "form-container">
                {/* LOGIN FORM */}
                <div className = "login-form">
                    <h2>Forgot Password</h2>
                    <form onSubmit={SubmitAccount}>
                    {/* EMAIL */}
                    <div className="input-container">
                         <i className="fas fa-envelope"></i>
                        <label htmlFor = "email">Email Address</label>
                       <input type="email" 
                                value={userEmail} 
                                placeholder="Make sure to enter an @"
                                onChange={(e) => setEmail(e.target.value)} />
                    </div>
                     
                    {/* FORGOT PASSWORD & LOGIN BUTTONS */}
                    <button type="submit" className="login-button">Create Account</button>
                    <button type="button" className="back-login" onClick={() => navigate('/Login')}>Back to Login</button>
                    </form>
                    <div className="Error">
                        {error}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword;