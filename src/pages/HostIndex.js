import React from 'react';
import { Link } from "react-router-dom";


function HostIndex(props) {
    console.log("these are the props", props)

    // loaded function
    const loaded = () => {
        // return props.hosts.map((host) => (
        //     <div class="card host-card" key={host.id} >
        //         <Link to={`/hosts/${host.id}`}><h1>{host.name}</h1></Link>
        //         <img src={host.image}/>
        //     </div>
        // ));

        return (
            <div>
                <h1 className="genre-text-head">Get to know our hosts</h1>
                <div className="container">
                    <div className="row">
                    {props.hosts.map((host) => (
                        <Link to={`/hosts/${host.id}`} className="col-xl-6 mycol">
                        <div className="card host-card" key={host.id} >
                            <h1 className="host-name">{host.name}</h1>
                            <img alt="" src={host.image}/>
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