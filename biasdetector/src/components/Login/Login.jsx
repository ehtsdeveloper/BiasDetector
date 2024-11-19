import React from "react";
import './LoginStyles.css';

const Login = () => {
    return (
        <div className = "login-container">
            <div className = "logo">
                {/* ADD LOGO IMAGE HERE */}
                <h1>E.H.T.S</h1>
            </div>
            {/* Login Class */}
            <div className = "login-form">
                <h2>Welcome</h2>
                <form>
                {/* EMAIL */}
                    <div className = "login-credentials">
                        <label htmlFor = "email">Email Address</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                {/* PASSWORD */}
                    <div className = "login-credentials">
                        <label htmlFor = "password">Password</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                {/* FORGOT PASSWORD & LOGIN BUTTONS */}
                    <div className = "login-actions">
                        <button type="button" className="password-button">Forgot Password?</button>
                        <button type="submit" className="login-button">Login</button>
                    </div>
                {/* CREATE AN ACCOUNT BUTTON */}
                    <button type="button" className="create-button">Create an Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login;