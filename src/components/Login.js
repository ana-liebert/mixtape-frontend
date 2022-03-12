import React, { useState } from 'react';
import axiosInstance  from '../axios';
import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// usehistory is used to make a redirect. swap for navigate


export default function SignIn() {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData)

        // axios is how we're sending the data
        // posting to the user/register path created in urls.py
        axiosInstance
            // data to send to the server 
            .post(`token/`, {
                email: formData.email,
                password: formData.password,
            })
            // server sends back access and refresh tokens
            .then((res) => {
                localStorage.setItem('access_token', res.data.access);
                localStorage.setItem('refresh_token', res.data.refresh);
                axiosInstance.defaults.headers['Authorization'] = 
                    'JWT ' + localStorage.getItem('access_token');
                navigate('/mixes');
                console.log(res);
                console.log(res.data);
            })
    };

    return (
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
    )
}