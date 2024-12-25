import {React, useState} from "react";
import { useNavigate } from "react-router-dom"; 
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './LoginStyles.css';
import logoImage from '../../assets/ehtslogo_login.png';


const CreateAccount = () => {
    const navigate = useNavigate();

    const [userEmail, setEmail] = useState('');
    const [userPassword, setPassword] = useState('');
    const [error, setError] = useState('');

   
const SubmitAccount  = async(e) => {
    e.preventDefault();
    
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
        
        const user = userCredential.user;
        navigate('/Login');
       
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
       
    });
}

    return (
        <div className = "login-container">
            {/* LOGO */}    
            <img className="logo" src={logoImage} alt="Logo" />            {/* FORM CONTAINER */}
            <div className = "form-container">
                {/* LOGIN FORM */}
                <div className = "login-form">
                    <h2>Create an Account</h2>
                    <form onSubmit={SubmitAccount}>
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
                                placeholder="Enter a strong password"
                                onChange={(e) => setPassword(e.target.value)} />
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

export default CreateAccount;