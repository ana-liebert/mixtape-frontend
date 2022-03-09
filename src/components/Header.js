import { Link } from "react-router-dom";
import React from 'react'

function Header(props) {

    return (
        <header>
            <nav class="nav navbar navbar-expand-lg navbar-light bg-light">
                <div class="nav container">
                    <Link to="/">
                        <div>HOME</div>
                    </Link>
                    <Link to="/mixes">
                        <div>MIXES</div>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header