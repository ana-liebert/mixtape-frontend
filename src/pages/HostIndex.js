import React from 'react';
import { Link } from "react-router-dom";


function HostIndex(props) {

    const loaded = () => {

        return (
            <div>
                <h1 className="genre-text-head">Get to know our hosts</h1>
                <div className="container">
                    <div className="row">
                        {props.hosts.map((host) => (
                            <Link to={`/hosts/${host.id}`} className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mycol">
                                <div className="card host-card" key={host.id} >
                                    <h1 className="host-name">{host.name}</h1>
                                    <img class="host-img" alt={host.name} src={host.image} />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return props.hosts ? loaded() : loading()
}


export default HostIndex