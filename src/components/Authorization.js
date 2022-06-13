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

    const [hosts, setHosts] = useState(null);

    const URLHOST = "https://aliebert-mixtape.herokuapp.com/mixtape/hosts/";

    const getHosts = async () => {
        const response = await fetch(URLHOST);
        const data = await response.json();
        setHosts(data);
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

        await fetch(URL + id + "/", {
            method: "delete",
        })
        getMixes()
    }


        const [user, setUser] = useState([]);
        const [userID, setUserID] = useState([])
    
    
        const URLUSER = "https://aliebert-mixtape.herokuapp.com/user/users/";
    
        let foundUser
        const getUser = async () => {
            const response = await fetch(URLUSER);
            const data = await response.json();
    
            foundUser = data.filter((filtered) => {
                return filtered.email.includes(userEmail)
            })
            setUser(foundUser);
        };
    
        let foundID
        const getUserId = async () => {
            foundID = user.map((userid) => {
                return (
                    userid.id
                )
            })
            let numID = +foundID.join("")
            setUserID(numID)
        }
    

    useEffect(() => {
        getUserId()
    }, [user]) // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        getUser()
    }, [userEmail]) // eslint-disable-line react-hooks/exhaustive-deps


    useEffect(() => getMixes(), []);
    useEffect(() => getGenres(), []);
    useEffect(() => getHosts(), []);



    return (
        <div>
            <Header credentials={credentials} />
            <Routes>
                <Route path="" element={<Home mixes={mixes} genres={genres} />} />
                <Route path="/login" element={<Login createCredentials={createCredentials} />} />
                <Route path="/logout" element={<Logout removeCredentials={removeCredentials} credentials={credentials} />} />
                <Route path="/profile" element={<Profile credentials={credentials} userEmail={userEmail} userID={userID} user={user} />} />
                <Route path="/mixes/:id" element={<MixDetail userEmail={userEmail} credentials={credentials} genres={genres} hosts={hosts}/>} />
                <Route path="/mixes/update/:id" element={<UpdateDelete genres={genres} deleteMix={deleteMix} updateMix={updateMix} credentials={credentials} userID={userID} hosts={hosts}/>} />
                <Route path="/mixes/create" element={<Create createMix={createMix} genres={genres} hosts={hosts} userID={userID} />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    )
}

export default Authorization