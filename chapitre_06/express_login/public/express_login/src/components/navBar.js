import { Link } from "react-router-dom";
// Import CSS
import "./navBar.modules.css"

const NavBar = () => {
    return (
        <div className="navbar nav-flexbox">
            <Link to="/login" className="text-navbar">Login</Link>
            <Link to="/admin" className="text-navbar">Admin</Link>
        </div>
    );
};

export default NavBar;