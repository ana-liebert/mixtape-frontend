import React from 'react';
import Login from '../pages/Login';
import Register from '../pages/Register';
import { Route, Routes } from 'react-router-dom';

const Auth = () => {

const URL = "http://localhost:8000/login/";
  
return (
    <Routes>
        <Route path='/login' element={<Login URL={URL} />} />
        <Route path='/signup'element={<Register />} />
    </Routes>
  )
}

export default Auth