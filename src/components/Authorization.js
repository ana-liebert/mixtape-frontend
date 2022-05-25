import { useState, useEffect } from "react";
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import Login from '../pages/LoginPage';
import Profile from '../pages/ProfilePage';
import Logout from '../pages/Logout';
import MixDetail from "../pages/MixDetail";
import UpdateDelete from "../pages/UpdateDelete";
import Home from "../pages/Home";
import Create from "../pages/Create";
import Register from "../pages/Register";
import Header from "./Header";


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



    const [mixes, setMixes] = useState(null);

    const URL = "https://aliebert-mixtape.herokuapp.com/mixtape/mixes/";

    const getMixes = async () => {
        const response = await fetch(URL);
        const data = await response.json();
        setMixes(data);
    };


    const [genres, setGenres] = useState(null);

    const URLGENRE = "https://aliebert-mixtape.herokuapp.com/mixtape/discover/";

    const getGenres = async () => {
        const response = await fetch(URLGENRE);
        const data = await response.json();
        setGenres(data);
    };

    const createMix = async mix => {
        console.log(mix)
        await fetch(URL, {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mix),
        });
        getMixes();
    };



    const updateMix = async (mix, id) => {
        await fetch(URL + id + "/", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(mix),
        })
        getMixes()
    }


    const deleteMix = async (mix, id) => {
        console.log("id inside the function", id)
        await fetch(URL + id + "/", {
            method: "delete",
        })
        getMixes()
    }


    useEffect(() => getMixes(), []);
    useEffect(() => getGenres(), []);



    return (
        <div>
            <Header credentials={credentials} />
            <Routes>
                <Route path="" element={<Home mixes={mixes} genres={genres} />} />
                <Route path="/login" element={<Login createCredentials={createCredentials} />} />
                <Route path="/logout" element={<Logout removeCredentials={removeCredentials} credentials={credentials} />} />
                <Route path="/profile" element={<Profile credentials={credentials} userEmail={userEmail} />} />
                <Route path="/mixes/:id" element={<MixDetail userEmail={userEmail} credentials={credentials} />} />
                <Route path="/mixes/update/:id" element={<UpdateDelete genres={genres} deleteMix={deleteMix} updateMix={updateMix} credentials={credentials} />} />
                <Route path="/mixes/create" element={<Create createMix={createMix} genres={genres} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}

export default Authorization