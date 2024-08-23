import React from "react";
import './login.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg';
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthForm from "../../components/forms/authForm/AuthForm";


const Login = () => {
    return (
       <React.Fragment>  
        <Navbar darkText={true}/>   
        <selection className ="signup-container">
            <div className='signup-img-container'>
              <img src={AuthBgImg} alt= "authentication-background"/>
            </div>
            <div className="signup-content-container">
                    <div className="container">
                    <div className="content-wrapper">
                           <h2>Login</h2>
                           <p>Log in with your email and password</p>
                             
                           <AuthForm buttonName="Login"/>  
                                                       
                            </div>
                    </div>
                        
                            </div>
                        
        </selection>
        </React.Fragment> 
    )
}

export default Login;