import { Link } from "react-router-dom";
import { useState } from 'react';

function Header(props) {

    let status = props.credentials
    console.log(status)


    const loggedIn = () => {


            return (
                <div>
                    <header>
                <nav className="nav navbar navbar-expand-lg nav-style">
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
                        <Link to="/profile">
                            <div>MY MIXTAPE</div>
                        </Link>
                        <Link to="/logout">
                            <div>LOGOUT</div>
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
            <nav className="nav navbar navbar-expand-lg nav-style">
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
                    <Link to="/login">
                        <div>MY MIXTAPE</div>
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