import React, { useState } from 'react';
import axiosInstance  from '../axios';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/esm/Button';


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

        <div className="form-container">
        <Form>
            <h1>Sign Up</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control 
            name="email" 
            type="email" 
            label="Email" 
            id="email" 
            onChange={handleChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Name</Form.Label>
            <Form.Control 
            name="username" 
                type="username" 
                label="Username" 
                id="username" 
                onChange={handleChange}
            />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            name="password" 
            type="password" 
            label="Password" 
            id="password" 
            onChange={handleChange}
            />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Remeber Me" />
        </Form.Group>


        <Button variant="primary" type="submit" onClick={handleSubmit}>
            Submit
        </Button>
        </Form>
        </div>

    )
}