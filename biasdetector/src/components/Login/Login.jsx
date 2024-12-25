import {React, useState} from "react";
import { useNavigate} from "react-router-dom"; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import './LoginStyles.css';
import logoImage from '../../assets/ehtslogo_login.png';

const Login = () => {
    const navigate = useNavigate();

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');

    const LoginHandler = async(e) => {
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
          });

    }
   

    return (
        <div className = "login-container">
            {/* LOGO */}    
        <img className="logo" src={logoImage} alt="Logo" />
            {/* FORM CONTAINER */}
            <div className = "form-container">
                {/* LOGIN FORM */}
                <div className = "login-form">
                    <h2>Welcome</h2>
                    <form onSubmit={LoginHandler}>
                    {/* EMAIL */}
                    <div className="input-container">
                         <i className="fas fa-envelope"></i>
                        <label htmlFor = "email">Email Address</label>
                        <input type="email" 
                                value={userEmail} 
                                placeholder="Make sure to enter an @"
                                onChange={(e) => setEmail(e.target.value)} />

                        
                        <i className="fas fa-lock"></i>
                        <label htmlFor = "password">Password</label>
                        <input type="password" 
                                value={userPassword} 
                                placeholder=""
                                onChange={(e) => setPassword(e.target.value)} />
                    </div>
                     
                    {/* FORGOT PASSWORD & LOGIN BUTTONS */}
                    <button type="submit" className="login-button">Login</button>
                    <button type="button" className="password-button">Forgot Password?</button>
                    <button type="button" className="create-button" onClick={() => navigate('/create-account')}>Create an Account</button>   
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;