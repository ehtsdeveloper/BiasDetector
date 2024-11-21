import React from "react";
import './LoginStyles.css';

const Login = () => {
    return (
        <div className = "login-container">
            {/* LOGO */}    
        <img classname = "logo" src="src/assets/ehtslogo_ver2.png" alt="Logo" />
            {/* FORM CONTAINER */}
            <div className = "form-container">
                {/* LOGIN FORM */}
                <div className = "login-form">
                    <h2>Welcome</h2>
                    <form>
                    {/* EMAIL */}
                        <div className = "login-credentials">
                            <label htmlFor = "email">Email Address</label>
                            <input type="email" id="email" name="email" required />

                            <label htmlFor = "password">Password</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                    {/* FORGOT PASSWORD & LOGIN BUTTONS */}
                        <div className = "login-actions">
                            <button type="button" className="password-button">Forgot Password?</button>
                            <button type="submit" className="login-button">Login</button>
                            <button type="button" className="create-button">Create an Account</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;