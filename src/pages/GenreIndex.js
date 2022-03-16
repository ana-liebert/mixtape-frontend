import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";

function GenreIndex(props) {
    
    const [mixes, setMixes] = useState(null);

    // const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";
    const URL = "http://localhost:8000/mixtape/mixtape/mixes";
    let foundMixes
    const genreId = useParams()
    const foundGenreId = Number(genreId.id)
    console.log("this is the genre id to filter by", foundGenreId)

    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("All of the mixes", data)

        // foundMixes = data.filter(mixesFound => mixesFound.genre.id = foundGenreId)
        foundMixes = data.filter((filtered) => {
            return filtered.genre.includes(foundGenreId)
        })
        setMixes(foundMixes);
        console.log("these are the mixes for genre filter", foundMixes)
    };

    useEffect(() => getMixes(), []);


    const loaded = () => {
        return mixes.map((mix) => (
            <div className="card host-card" key={mix.id}>
                <img src={mix.image} alt={mix.title} />
                <Link to={`/mixes/${mix.id}`}><h1>{mix.title}</h1></Link>
                <h3>{mix.description}</h3>
                <iframe className="mix-test" width="100%" height="20" scrolling="no" frameBorder="no" src={mix.soundcloudplayer}></iframe>
            </div>
        ));
    };

    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return mixes ? loaded() : loading()
}

export default GenreIndex