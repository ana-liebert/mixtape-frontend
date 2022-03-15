import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"

function MixDetail(props) {
    const [mixes, setMixes] = useState(null);

    // const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/";
    const URL = "http://localhost:8000/mixtape/";

    let thisProfile
    let profileEmail

    const URLPROF = "http://localhost:8000/mixtape/profile/";
    
    const [favorites, setFavorites] = useState("")
    
    const getProfileData = async () => {
        const response = await fetch(URLPROF);
        const profData = await response.json();
        // console.log("user detail coming through", profData)
        profileEmail = props.userEmail
        
        thisProfile = profData.find(profile => profile.user.email === profileEmail)
        console.log("user detail coming through", thisProfile)
        setFavorites(thisProfile.favorites);
    };

    
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
    

    console.log(favorites)
    console.log(mixes)

    let [newArray, setNewArray] = useState("");

    let arr1 = favorites
    let arr2 = mixes
    let arr3 = arr1.concat(arr2);
    console.log(arr3)
    
    
    const handleClick = (event) => {
        setNewArray(arr3)
        props.updateFavorites(newArray)
    }
    

    useEffect(() => getMixes(), []);
    useEffect(() => getProfileData(), []);
    
    let [liked, setLiked] = useState("Like")


    const loaded = () => {
        return (
            <div>
                <img src={mixes.image}/>
                <h1>Title: {mixes.title}</h1> 
                <p>Description: {mixes.description}</p>
                {console.log("can still access the id", foundId)}
                <iframe width="100%" height="20" scrolling="no" frameBorder="no" src={mixes.soundcloudplayer}></iframe>
                <button onClick={() => setLiked("liked")}>{liked}</button>
                {/* <button onClick={handleClick}>Like</button> */}
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