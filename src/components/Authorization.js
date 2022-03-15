import { useEffect, useState } from "react";
import axiosInstance  from '../axios';
import { useNavigate } from 'react-router-dom';
import { Route, Routes, useParams } from "react-router-dom";
import Login from '../pages/LoginPage';
import Profile from '../pages/ProfilePage';
import Logout from './Logout';
import MixDetail from "../pages/MixDetail";

const Authorization = () => {

    const navigate = useNavigate()

    const [credentials, setCredentials] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

    console.log("these are the credentials", credentials)

    const createCredentials = async user => {

            setUserEmail(user.email)
            axiosInstance
                    // data to send to the server 
                    .post(`token/`, {
                        email: user.email,
                        password: user.password,
                    })
                    // server sends back access and refresh tokens
                    .then((res) => {
                        localStorage.setItem('access_token', res.data.access);
                        localStorage.setItem('refresh_token', res.data.refresh);
                        axiosInstance.defaults.headers['Authorization'] = 
                            'JWT ' + localStorage.getItem('access_token');
                        navigate('/profile');
                        console.log(res);
                        console.log(res.data);
                        setCredentials(res.data)
                        console.log("you are logged in");
                    })
    }

    const removeCredentials = async user => {
        console.log("user to remove", user)
        setUserEmail(null)
        setCredentials(null)
    }
    
    // need a route for the put*****

    console.log("email to pass down", userEmail)

    const PROFURL = 'http://localhost:8000/profile/';
    const updateFavorites = async (favorites , userEmail) => {
        await fetch(PROFURL + '6' + '/', {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: {
                favorites: JSON.stringify(favorites)
            }
        });
        // getfavorites?
    };




    return (
        <div>
            <Routes>
                <Route path="/login" element={<Login createCredentials={createCredentials}/>} />
                <Route path="/logout" element={<Logout removeCredentials={removeCredentials} credentials={credentials}/>} />
                <Route path="/profile" element={<Profile credentials={credentials} userEmail={userEmail}/>} /> 
                <Route path="/mixes/:id" element={<MixDetail  updateFavorites={updateFavorites} userEmail={userEmail}/>}/>
            </Routes>
        </div>
    )
}

export default Authorization