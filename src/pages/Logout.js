import React, { useEffect } from 'react';
import axiosInstance from '../axios';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import Button from 'react-bootstrap/esm/Button';


export default function Logout(props) {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState(null);


    useEffect(() => {
        const response = axiosInstance.post('user/logout/blacklist/', {
            refresh_token: localStorage.getItem('refresh_token'),

        });
        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');
        axiosInstance.defaults.headers['Authorization'] = null;
        console.log("you are logged out")
        setCredentials(null)
        console.log(response)

    }, []);

    const handleClick = (e) => {
        e.preventDefault();
        props.removeCredentials(credentials)
        navigate('/');
    }

    return <div>
        <h1 className="genre-text">Are you sure you want to logout?   
        <Button onClick={handleClick}>Confirm</Button>
        </h1>
        
        </div>
}