import React, { useEffect } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";


export default function Logout(props) {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState(null);
    // const [userEmail, setUserEmail] = useState(null);

    useEffect(() => {
        const response = axiosInstance.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),

        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        console.log("you are logged out")
        setCredentials(null)
        // setUserEmail(null)
        // console.log(userEmail)
        // navigate('/mixes');
    });

    const handleClick = (e) => {
        e.preventDefault();
        props.removeCredentials(credentials)
        navigate('/mixes');
    }

    return <div>
        <h1>Logout</h1>
        <button onClick={handleClick}>Logout</button>
        </div>
}