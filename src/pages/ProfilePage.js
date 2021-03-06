import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useState, useEffect } from "react";

const Profile = (props) => {

    const profileEmail = props.userEmail
    const credentials = props.credentials

    const [mixes, setMixes] = useState([]);

    const MIXURL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";

    let foundMixes

    const getMixes = async () => {
        const response = await fetch(MIXURL);
        const data = await response.json();

        foundMixes = data.filter((filteredMix) => {
            return filteredMix.creator === props.userID
        })
        setMixes(foundMixes);
    };


    useEffect(() => {
        getMixes()
    }, []) // eslint-disable-line react-hooks/exhaustive-deps



    const loaded = () => {

        if (mixes.length < 1) {
            return (
                <div>
                    <div className="profile-head">
                        <h1>Welcome, {profileEmail}</h1>
                        <Link to="/mixes/create">
                            <Button>Create New Post</Button>
                        </Link>
                    </div>
                    <div>
                        <h1 className="post">Post some mixes to get started!</h1>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <div className="profile-head">
                    <h1>Welcome, {profileEmail}</h1>
                    <Link to="/mixes/create">
                        <Button>Create New Post</Button>
                    </Link>
                </div>

                <div className="post">Your Posts:</div>
                <div className="container">

                    <div className="row">

                        {mixes.map((mix) => {
                            return (
                                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 mycol">
                                    <div className="card host-card" key={mix.id}>
                                        <Link to={`/mixes/${mix.id}`}><h1>{mix.title}</h1></Link>
                                        <p>{mix.description}</p>
                                        <p>Posted by: {profileEmail}</p>
                                        <img class="host-img" src={mix.image} alt={mix.title} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }


    const loading = () => {
        return <h1>Not Logged In</h1>;
    };

    return credentials ? loaded() : loading()

}

export default Profile