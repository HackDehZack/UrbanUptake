import React from "react";
import "./LoginPage.css";
import { Link } from 'react-router-dom';
function UrbanUptakeLoginPage() {
    return (
        <div className="Login">
            <div className="UrbanUptake">
                <div className="UrbanUptakeText">
                    UrbanUptake
                </div>
                <div className="title">
                   Your Local Market Awaits. <br></br> Buy, Sell, Thrive!
                </div>
            </div>
            <div className="loginContainer">
                <div className="loginForm">
                    <input type="email" placeholder="Email Address"/>
                    <br></br>
                    <input type="Password" placeholder="Password"/>
                    <br></br>
                    <button className="btn">
                        <Link to="/HeaderArea"> Login </Link>
                    </button>
                    <br></br>
                </div>
                <div className="I forgot">
                    <button className="forgotPasswordBtn"> 
                    Forgot my password </button>
                    <br></br>
                </div>
                <div className="createAccount">
                    <br></br>
                    <button className="btn">
                        Create Account?
                    </button>
                </div>
            </div>
        </div>
    );
}

export default UrbanUptakeLoginPage;