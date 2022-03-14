import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"

function MixDetail(props) {
    const [mixes, setMixes] = useState(null);

    // const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/";
    const URL = "http://localhost:8000/mixtape/";

    let thisMix
    const mixId = useParams()
    const foundId = Number(mixId.id)
    console.log(foundId)

    const getMixes = async () => {
        const response = await fetch(URL + "mixes");
        const data = await response.json();
        console.log(data)
        
        thisMix = data.find(taco => taco.id === foundId)
        setMixes(thisMix);
        // console.log("this is the found mix", thisMix)
    };

    useEffect(() => getMixes(), []);

    const [liked, setLiked] = useState("like")

    const loaded = () => {
        return (
            <div>
                <img src={mixes.image}/>
                <h1>Title: {mixes.title}</h1> 
                <p>Description: {mixes.description}</p>
                <iframe width="100%" height="20" scrolling="no" frameBorder="no" src={mixes.soundcloudplayer}></iframe>
                <button onClick={() => setLiked("liked")}>{liked}</button>
                <form>
                </form>
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

export default MixDetail