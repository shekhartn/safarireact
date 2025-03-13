import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { User } from '../UserContaxt';

function Login() {
  const [username, setUsername] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
   const { setUser , isValidUser } = useContext(User);
  const onClick = () => {
    if (isValidUser(username)) {
      console.log('Login successful');
      setUser(username);
      setMessage('Login successful');
      navigate('/dashboard');
    } else {
      console.log('Please register first');
      setMessage('Please register first');
      alert('Please register first');
      navigate('/registration');
    }
  };
  
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={onClick}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login
