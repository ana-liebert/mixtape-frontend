import React from "react"
import {useParams} from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

function MixDetail(props) {
    const [mixes, setMixes] = useState(null);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/";
  

    // let thisProfile
    // let profileEmail
    

    // const URLPROF = "https://aliebert-mixtape.herokuapp.com/mixtape/profile/";
    
    // const [favorites, setFavorites] = useState("")
    // const [profile, setProfile] = useState(null)
    
    // const getProfileData = async () => {
    //     const response = await fetch(URLPROF);
    //     const profData = await response.json();
        // console.log("user detail coming through", profData)
        // profileEmail = props.userEmail
        
        // thisProfile = profData.find(profile => profile.user.email === profileEmail)
        // console.log("user detail coming through", thisProfile)
        // setFavorites(thisProfile.favorites);
        // setProfile(thisProfile)
        // console.log("stinkerbell", thisProfile.user.is_staff)
        // console.log(profile)

    // };

    // useEffect(() => {
    //     const abortController = new AbortController();
    //     const signal = abortController.signal;
    //     fetch(URLPROF)
    //       .then(results => results.json())
    //       .then(profData => {
    //         thisProfile = profData.find(profile => profile.user.email === profileEmail)
    //         setProfile(profData);
    //         setFavorites(thisProfile.favorites);
    //     });
    //     return function cleanup() {
    //         console.log('I am in cleanup function');
    //         abortController.abort();
    //     };
    // }, []);
    
    // console.log("stinkerbell", thisProfile.user.is_staff)



    // console.log(profile.user.is_staff)

    
    let thisMix
    const mixId = useParams()
    const foundId = Number(mixId.id)
    //console.log(foundId)

    const getMixes = async () => {
        const response = await fetch(URL + "mixes");
        const data = await response.json();
        // console.log(data)
        
        thisMix = data.find(taco => taco.id === foundId)
        setMixes(thisMix);
        // console.log("this is the found mix", thisMix)
    };
    

    // console.log(favorites)
    // console.log(mixes)

    // let [newArray, setNewArray] = useState("");



    // let arr1 = favorites
    // let arr2 = mixes
    // let arr3 = arr1.concat(arr2);
    // console.log(arr3)
    // const handleClick = (event) => {
    //     setNewArray(arr3)
    //     props.updateFavorites(newArray)
    // }
    

   
    useEffect(() => {
        getMixes()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    
    // useEffect(() => getProfileData());

    
    let [liked, setLiked] = useState("Like")


    const loaded = () => {

        return (
            <div className="mix-detail">
                <img className="carousel-image" alt={mixes.title} src={mixes.image}/>
                <iframe className="iframe" width="100%" height="20" scrolling="no" frameBorder="no" title="mixtape" src={mixes.soundcloudplayer}></iframe>
                <h1 className="mix-test">{mixes.title}</h1> 
                <p className="mix-test">{mixes.description}</p>

                <div className="buttons">
                    <div id="like">
                <Button onClick={() => setLiked("Liked")}>{liked}</Button>
                    </div>
                <div>
                <Link to={`/mixes/update/${mixes.id}`}>
                <Button id="update">Update</Button>
                        </Link>
                </div>
                </div>
                <form>
                </form>
            </div>
        );



        // let staff = profile.user.is_staff
        // console.log(staff)

    // if (staff == true) {
    //     return (
    //         <div>
    //             <img src={mixes.image}/>
    //             <h1>Title: {mixes.title}</h1> 
    //             <p>Description: {mixes.description}</p>
    //             <iframe width="100%" height="20" scrolling="no" frameBorder="no" src={mixes.soundcloudplayer}></iframe>
    //             <button>Update</button>
    //             <button>Delete</button>
    //             <form>

    //             </form>
    //         </div>
    //     );
    //     } else {
    //         return (
    //             <div>
    //                 <img src={mixes.image}/>
    //                 <h1>Title: {mixes.title}</h1> 
    //                 <p>Description: {mixes.description}</p>
    //                 <iframe width="100%" height="20" scrolling="no" frameBorder="no" src={mixes.soundcloudplayer}></iframe>
    //                 <button onClick={() => setLiked("liked")}>{liked}</button>
    //             </div>
    //         );
    //     };
    };


    const loading = () => {
        return (
            <h1>Loading...</h1>
        )
    }
    return mixes ? loaded() : loading()

}

export default MixDetail