import React from 'react';
import { Link } from "react-router-dom";


function DiscoverPage(props) {
    console.log("these are the props", props)


    const loaded = () => {
        return (
        <div>
            <h1 className="genre-text-head">Explore Genres</h1>
            <div className="container genre-container">
                <div className="row">
                {props.genres.map((genre) => (
                    <div className="col-xl-3 col-md-4 col-sm-6 my-col" key={genre.id} >
                        <Link to={`/discover/${genre.id}`}><h1 className="genre-text">{genre.name}</h1></Link>
                    </div>
                ))}
                </div>
            </div>
        </div>
        )
    };

    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return props.genres ? loaded() : loading()

}


export default DiscoverPage