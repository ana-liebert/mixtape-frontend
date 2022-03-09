import React from 'react';
import { Link } from "react-router-dom";


function HostIndex(props) {
    console.log("these are the props", props)

    // loaded function
    const loaded = () => {
        return props.hosts.map((host) => (
            <div key={host.id} >
                <Link to={`/hosts/${host.id}`}><h1>{host.name}</h1></Link>
                <img src={host.image}/>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return props.hosts ? loaded() : loading()

}


export default HostIndex