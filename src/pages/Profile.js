import { useEffect, useState } from "react";

const Profile = () => {

    const [profile, setProfile] = useState(null);

    // const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/profile/";
    const URL = "http://localhost:8000/mixtape/profile/";

    const getProfile = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setProfile(data);
    };

    useEffect(() => getProfile(), []);


    const loaded = () => {
        <h1>User Profile</h1>
        return profile.map((user) => (
            <div>
            <h1>User ID: {user.id}</h1>
            <h1>Likes: {user.favorites}</h1>
            </div>
        ));
};
    
    const loading = () => {
        return <h1>Loading...</h1>;
    };
    return profile ? loaded() : loading()
}

export default Profile