
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"; 

function RegisterForm() {
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  setTimeout(() => {
    setShow(true);
  }, 7000);
  
  const handleClick = () => {
    navigate("/");
}

  const handleSubmit = e => {
    e.preventDefault();

    // Define regular expressions for validating username and password
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;


    // Test the entered username and password against the regular expressions
    if (!usernameRegex.test(username)) {
      alert('Invalid username. Please use only letters and numbers.');
    } else if (!passwordRegex.test(password)) {
      alert('Invalid password. Please use at least 8 characters, including one uppercase and one lowercase letter, and one number.');
    }  else {
      // If the username and password are valid, send a request to the server to create a new account
      // ...
      var registered = JSON.parse(localStorage["formData"])

      if (username === registered["username"] && password == registered["password"]){
        handleClick()
      }
      else{
        alert("Incorrect Password or Username")
      }
      

    }
  };

  return (
    <div className='Login'>
      
    <form onSubmit={handleSubmit}>
    <span>Login</span>
    <br />
      <label>
        Username: 
        <input type="text" value={username} onChange={event => setUsername(event.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
      </label>
      <br />
      <button type="submit">Login</button>

      {show && <h3>No tienes cuenta?<Link to={`/Register`}> Registrarse </Link></h3>}
    </form>
    </div>
  );
}

export default RegisterForm;