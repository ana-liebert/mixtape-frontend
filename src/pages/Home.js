import React from 'react';
import { useState, useEffect } from "react";

function Home(props) {
    // create state to hold mix
    const [mixes, setMixes] = useState(null);

    //create function to make api call
    const getMixData = async () => {
        //make api call and get response
        const response = await fetch(props.URL + "mixes");
        // turn response into javascript object
        const data = await response.json();
        // set the projects state to the data
        setMixes(data);
    };

    useEffect(() => getMixData());


    const loaded = () => {
        return mixes.map((mix) => (
            <div class="container">
                <div>
                    <h1>Page Header</h1>
                </div>
                <div class="row">
                    <div class="col">
                        <h1>{mix.title}</h1>
                        <h1>{mix.description}</h1>
                        <iframe width="100%" height="100" scrolling="no" frameBorder="no" allow="autoplay" src={mix.soundcloudplayer}></iframe>
                    </div>
                </div>
            </div>
        ));
    };

    return mixes ? loaded() : <h1>Loading...</h1>;
}

export default Home