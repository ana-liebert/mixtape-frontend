import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"

function GenreIndex(props) {
    const [mixes, setMixes] = useState(null);

    const URL = "http://localhost:8000/mixtape/";
    let foundMixes
    const genreId = useParams()
    const foundGenreId = Number(genreId.id)
    console.log("this is the genre id to filter by", foundGenreId)

    const getMixes = async () => {
        const response = await fetch(URL + "mixes");
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
        return (
            <div>
                <h1>{mixes.title}</h1>
                <h1>{mixes.description}</h1>
            </div>
        )
    }
    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return mixes ? loaded() : loading()
}

export default GenreIndex