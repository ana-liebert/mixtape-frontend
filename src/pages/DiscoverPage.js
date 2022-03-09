import React from 'react';
import { Link } from "react-router-dom";


function DiscoverPage(props) {
    console.log("these are the props", props)

    // loaded function
    const loaded = () => {
        return props.genres.map((genre) => (
            <div key={genre._id} >
                <Link to={`/discover/${genre.id}`}><h1>{genre.name}</h1></Link>
            </div>
        ));
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return props.genres ? loaded() : loading()

}


export default DiscoverPage