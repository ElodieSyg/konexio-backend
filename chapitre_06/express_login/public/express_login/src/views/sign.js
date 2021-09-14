import React from "react";
import { Link, useHistory } from "react-router-dom";
// Import components
import NavBar from "../components/navBar";
// Import CSS
import "./sign.modules.css";

const Sign = () => {
    let history = useHistory();

    const handleClickCreateAccount = () => {
        history.push("/admin");
    };

    return (
        <div>
            <NavBar />

            <div className="login-container">
                <h2 className="log-title">Register</h2>
                <p className="log-subtitle">To start, we need some informations</p>

                <form className="log-flexbox">
                    <label className="blue-text margin-top">Email</label>
                    <input type="text" placeholder="e-mail" className="margin-top"></input>
                    <label className="blue-text margin-top">Password</label>
                    <input type="text" placeholder="password" className="margin-top"></input>
                    <label className="blue-text margin-top">Confirm your password</label>
                    <input type="text" placeholder="please, confirm your password" className="margin-top"></input>
                    <label cl assName="blue-text margin-top">First Name</label>
                    <input type="text" placeholder="first name" className="margin-top"></input>
                    <label className="blue-text margin-top">Surname</label>
                    <input type="text" placeholder="surname" className="margin-top"></input>
                    <label className="blue-text margin-top">Date of birth</label>
                    <input type="date" placeholder="date of birth" className="margin-top"></input>
                </form>

                <button className="btn-style">
                    <Link to="/sign" className="white-text margin-top" onClick={handleClickCreateAccount}>Create account</Link>
                </button>
            </div>
        </div>
    );
};

export default Sign;