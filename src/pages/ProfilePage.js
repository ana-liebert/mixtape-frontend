import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Profile = (props) => {

    const [profile, setProfile] = useState(null);
    const [credentials, setCredentials] = useState(null);


    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/profile/";

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
        console.log(credentials)
    };


    useEffect(() => getProfile());
    // removed []



    const loaded = () => {

        let staff = profile.user.is_staff
        // console.log(staff)


        if (staff === true) {
            return (
                <div>
                    <div className="profile-head">
                        {/* <h1>Welcome, {profile.user.user_name}</h1> */}
                        <h1>Welcome, {profileEmail}</h1>
                        <Link to="/mixes/create">
                            <Button>Create New Post</Button>
                        </Link>
                    </div>


                    <div className="container">
                        <h1 className="genre-text-head">Favorites</h1>
                        <div className="row">
                            {profile.favorites.map((mixes) => {
                                return (
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mycol">
                                        <div className="card host-card" key={mixes.id}>
                                            <Link to={`/mixes/${mixes.id}`}><h1>{mixes.title}</h1></Link>
                                            <p>{mixes.description}</p>
                                            <img class="host-img" src={mixes.image} alt={mixes.title} />

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            );
        } else {
            return (
                <div>
                    <div className="profile-head">
                    {/* <h1>Welcome, {profile.user.user_name}</h1> */}
                    <h1>Welcome, {profileEmail}</h1>
                    <Link to="/mixes/create">
                            <Button>Create New Post</Button>
                        </Link>
                    </div>
                    <div className="container">
                        <h1 className="genre-text-head">Favorites</h1>
                        <div className="row">
                            {profile.favorites.map((mixes) => {
                                return (
                                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mycol">
                                        <div className="card host-card" key={mixes.id}>
                                            <Link to={`/mixes/${mixes.id}`}><h1>{mixes.title}</h1></Link>
                                            <p>{mixes.description}</p>
                                            <img class="host-img" src={mixes.image} alt={mixes.title} />

                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>



                    {/* {profile.favorites.map((mixes) => {
                        return (
                            <h1 key={mixes.title}>
                                {mixes.title}
                            </h1>
                        )
                    })
                    } */}
                </div>
            );
        }
    }


    const loading = () => {
        return <h1>No Profile Created Yet</h1>;
    };

    return profile ? loaded() : loading()

}

export default Profile
















// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Button from 'react-bootstrap/Button';

// const Profile = (props) => {

//     // const [profile, setProfile] = useState(null);
//     const [credentials, setCredentials] = useState(null);


//     const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/profile/";

//     let thisProfile
//     const profileEmail = props.userEmail
//     console.log("email coming through to profile", profileEmail)

//     const getProfile = async () => {
//         // const response = await fetch(URL);
//         // const data = await response.json();
//         // console.log("all the profiles", data)

//         // thisProfile = data.find(profile => profile.user.email === profileEmail)
//         // console.log(thisProfile)
//         // setProfile(thisProfile);
//         setCredentials(props.credentials)
//         console.log(credentials)
//     };

//     useEffect(() => getProfile());

//     const loaded = () => {

//             return (
//                 <div>
//                     <div className="profile-head">
//                         {/* <h1>Welcome, {profile.user.user_name}</h1> */}
//                         <h1>Welcome, {profileEmail}</h1>
//                         <Link to="/mixes/create">
//                             <Button>Create New Post</Button>
//                         </Link>
//                     </div>


//                     <div className="container">
//                         {/* <h1 className="genre-text-head">Favorites</h1> */}
//                         {/* <div className="row">
//                             {profile.favorites.map((mixes) => {
//                                 return (
//                                     <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mycol">
//                                         <div className="card host-card" key={mixes.id}>
//                                             <Link to={`/mixes/${mixes.id}`}><h1>{mixes.title}</h1></Link>
//                                             <p>{mixes.description}</p>
//                                             <img class="host-img" src={mixes.image} alt={mixes.title} />

//                                         </div>
//                                     </div>
//                                 )
//                             })}
//                         </div> */}
//                     </div>

//                 </div>
//             );

//     }


//     const loading = () => {
//         return <h1>Not Logged In</h1>;
//     };

//     return credentials ? loaded() : loading()

// }

// export default Profile