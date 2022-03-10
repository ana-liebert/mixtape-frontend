import { useState } from 'react'
import Auth from '../components/Auth';
import { Navigate } from 'react-router-dom'; 

const Login = (props) => {



  const login = async loggedin => {
    // make post request to create
    await fetch(props.URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loggedin),
    });
  };

  const [newForm, setNewForm] = useState({
    username: "",
    password: ""
  })
  console.log(newForm)
  // handleChange function for form
  const handleChange = event => {
    setNewForm({ ...newForm, [event.target.name]: event.target.value })
  }

function handleSubmit(event) {
    event.preventDefault()
    login(newForm);
    return <Navigate to='/mixtape/mixes' />

    // try {
    //   await login();
    //   <Navigate to="/mixtape/mixes" />
    // } catch(event) {
    //   alert(event.message)
    // }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newForm.username}
          name="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          value={newForm.password}
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  )
}

export default Login