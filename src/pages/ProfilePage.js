import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Profile = (props) => {


    const profileEmail = props.userEmail
    const credentials = props.credentials
    console.log("the credentials coming through", props.credentials)
    console.log("email coming through to profile", profileEmail)

    const loaded = () => {

            return (
                <div>
                    <div className="profile-head">
                        <h1>Welcome, {profileEmail}</h1>
                        <Link to="/mixes/create">
                            <Button>Create New Post</Button>
                        </Link>
                    </div>


                    <div className="container">

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