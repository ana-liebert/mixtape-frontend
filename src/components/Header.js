import { Link } from "react-router-dom";
import React from 'react'

function Header() {

    return (
        <header>
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
                <div className="nav container">
                    <Link to="/mixes">
                        <div>HOME</div>
                    </Link>
                    <Link to="/discover">
                        <div>DISCOVER</div>
                    </Link>
                    <Link to="/hosts">
                        <div>HOSTS</div>
                    </Link>
                    <Link to="/register">
                        <div>Register</div>
                    </Link>
                    <Link to="/login">
                        <div>Login</div>
                    </Link>
                    <Link to="/logout">
                        <div>Logout</div>
                    </Link>
                </div>
            </nav>
            <h1>Welcome</h1>
        </header>
    );
}

export default Header