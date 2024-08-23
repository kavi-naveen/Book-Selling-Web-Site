import React from "react";
import './signup.styles.css';
import AuthBgImg from '../../assets/auth-bg.jpg';
import Navbar from "../../components/layouts/navbar/Navbar";
import AuthForm from "../../components/forms/authForm/AuthForm";

const SignUp = () => {
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
                           <h2>SignUp</h2>
                           <p>Create a New Account with email and password</p>
                             
                             <AuthForm buttonName="Sign Up"/>
                                                       
                            </div>
                    </div>
                        
                            </div>
                        
        </selection>
        </React.Fragment> 
    )
}

export default SignUp;