import { useEffect, useState } from "react";
import {useParams} from "react-router-dom"

const Profile = () => {

    const [profile, setProfile] = useState(null);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/profile/";
    // const URL = "http://localhost:8000/mixtape/profile/";

    let thisProfile
    const profileId = useParams()
    const foundId = Number(profileId.id)
    console.log(foundId)

    const getProfile = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)

        thisProfile = data.find(taco => taco.id === foundId)
        setProfile(thisProfile);
    };

    useEffect(() => getProfile());
    // removed []


    const loaded = () => {
        <h1>User Profile</h1>

        return (
            <div>
                <h1>{profile.user.email}</h1>
                <h1>{profile.user.user_name}</h1>

                {profile.favorites.map((mixes) => {
                    return (
                        <h1 key={mixes.title}>
                            {mixes.title}
                        </h1>
                    )
                })
            }

                
            </div>
        )
        };
        // return (profile.map((user) => (
            

        //     <div>
        //         <h1>User:{user.user.user_name}
        //         {console.log(user.user)}</h1>
        //         <h1>Favorites:</h1>
        //         {
        //             user.favorites.map((mixes) => {
        //                 return (
        //         <h1>{mixes.title}</h1>
        //                 )
        //             })
        //         }
        //     </div>
        // )))
// };
    
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return profile ? loaded() : loading()
}

export default Profile