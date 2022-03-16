import { Link } from "react-router-dom";
import { useState } from 'react';

function Header(props) {

    let status = props.credentials
    console.log(status)


    const loggedIn = () => {


            return (
                <div>
                    <header>
                <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
                    <div className="nav container">
                        <Link to="/mixes">
                            <div>Home</div>
                        </Link>
                        <Link to="/discover">
                            <div>Discover</div>
                        </Link>
                        <Link to="/hosts">
                            <div>Hosts</div>
                        </Link>
                        <Link to="/profile">
                            <div>My Mixtape</div>
                        </Link>
                        <Link to="/logout">
                            <div>Logout</div>
                        </Link>
                    </div>
                </nav>
                
            </header>
                </div>
            )
        
    }
    
    const loggedOut = () => {

        return (
            <div>
                <header>
            <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
                <div className="nav container">
                    <Link to="/mixes">
                        <div>Home</div>
                    </Link>
                    <Link to="/discover">
                        <div>Discover</div>
                    </Link>
                    <Link to="/hosts">
                        <div>Hosts</div>
                    </Link>
                    <Link to="/login">
                        <div>My Mixtape</div>
                    </Link>
                </div>
            </nav>

        </header>
            </div>
        )
    
    }

    return status ? loggedIn() : loggedOut()

}


export default Header