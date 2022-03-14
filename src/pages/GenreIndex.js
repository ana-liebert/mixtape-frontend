import React from "react"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

function GenreIndex(props) {
    
    const [mixes, setMixes] = useState(null);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";
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
            <div key={mix.id} className="mix">
                <img src={mix.image} alt={mix.title} />
                <h3>{mix.description}</h3>
                <h3></h3>
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