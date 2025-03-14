import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { User } from '../UserContaxt';

function Login() {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
   const { setUserName , isValidUser } = useContext(User);
  const onClick = () => {
    if (isValidUser(user)) {
      console.log('Login successful');
      setMessage('Login successful')
      setUserName(user);
      navigate('/dashboard');
    } else {
      console.log('Please register first');
      setMessage('Please register first')
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
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={onClick}>Login</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Login
