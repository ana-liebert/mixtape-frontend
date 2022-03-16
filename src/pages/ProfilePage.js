import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Profile = (props) => {

    const [profile, setProfile] = useState(null);
    const [credentials, setCredentials] = useState(null);


    // const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/profile/";
    const URL = "http://localhost:8000/mixtape/profile/";

    let thisProfile
    const profileEmail = props.userEmail
    console.log("email coming through to profile", profileEmail)

    const getProfile = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("all the profiles", data)

        thisProfile = data.find(profile => profile.user.email === profileEmail)
        console.log(thisProfile)
        setProfile(thisProfile);
        setCredentials(props.credentials)
    };


    useEffect(() => getProfile(), []);



    const loaded = () => {

        let staff = profile.user.is_staff
        console.log(staff)


        if (staff == true) {
            return (
                <div>
                    <h1>STAFF</h1>
                    <h1>{profile.user.email} {console.log("this is the user", profile.user)}</h1>
                    <h1>{profile.user.user_name}</h1>
                    <Link to="/mixes/create">
                            <button>New Post</button>
                    </Link>
                    
                    {profile.favorites.map((mixes) => {
                        return (
                            <h1 key={mixes.title}>
                                {mixes.title}
                            </h1>
                        )
                    })
                    }
                </div>
            );
        } else {
            return (
                <div>
                    <h1>NOT STAFF</h1>
                    <h1>{profile.user.email} {console.log("this is the user", profile.user)}</h1>
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
            );
        }
    }


    const loading = () => {
        return <h1>Signup or Login</h1>;
    };

    return profile ? loaded() : loading()

}

export default Profile