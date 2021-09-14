import React from "react";
import { Link } from "react-router-dom";
// Import components
import NavBar from "../components/navBar";
// Import CSS
import "./login.modules.css";

const Login = () => {
    return (
        <div>
            <NavBar />

            <div className="login-container">
                <h2 className="log-title">Login</h2>
                <form className="log-flexbox">
                    <label className="blue-text margin-top">Email</label>
                    <input type="text" placeholder="e-mail" className="margin-top"></input>
                    <label className="blue-text margin-top">Password</label>
                    <input type="password" placeholder="password" className="margin-top"></input>
                </form>
                <Link to="/sign" className="blue-text margin-top">You don't have account?</Link>
            </div>
        </div>
    );
};

export default Login;