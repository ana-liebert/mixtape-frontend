import React, { useState } from 'react';
import axiosInstance  from '../axios';
import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";



export default function LogIn(props) {
    const navigate = useNavigate();
    // object freeze gets user to type in info, and once it's commited the information is freezed and cannot be changed, small security measure
    const initialFormData = Object.freeze({
        email: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData, //referencing the formData use state and updating with updateFormData
            // get the event name and value
            // trimming any whitespace because data can come in with spaces
            [e.target.name]: e.target.value.trim(),
        });
    };

    const [credentials, setCredentials] = useState(null);

    // create auth component
    // route to login/logout, maybe register too 
    
    // put axios instance function on the router page 
    // have handlesubmit call that function with the form data--which sets the credentials (move this state to auth)
    // pass those credentials to a user profile route 
    // use those credentials to filter for the right user
    // populate that data 

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createCredentials(formData)
    };



    return (
        <div>
        <form>
            <input 
            name="email" 
            type="email" 
            label="Email" 
            id="email" 
            onChange={handleChange}
            />
            <input 
            name="password" 
            type="password" 
            label="Password" 
            id="password" 
            onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>Log In</button>
        </form>
        <Link to="/register">
        <div>Sign Up</div>
        </Link>
        </div>
    )
}