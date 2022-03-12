import React, { useState } from 'react';
import axiosInstance  from '../axios';
import { useHistory } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
// usehistory is used to make a redirect. swap for navigate


export default function SignUp() {
    const navigate = useNavigate();
    // object freeze gets user to type in info, and once it's commited the information is freezed and cannot be changed, small security measure
    const initialFormData = Object.freeze({
        email: '',
        username: '',
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
            .post(`user/register/`, {
                email: formData.email,
                user_name: formData.username,
                password: formData.password,
            })
            .then((res) => {
                navigate('/login');
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
            name="username" 
            type="username" 
            label="Username" 
            id="username" 
            onChange={handleChange}
            />
            <input 
            name="password" 
            type="password" 
            label="Password" 
            id="password" 
            onChange={handleChange}
            />
            <button type="submit" onClick={handleSubmit}>Sign Up</button>
        </form>
    )
}