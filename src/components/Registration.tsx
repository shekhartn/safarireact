import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../UserContaxt';

const Registration = () => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const { setValidUsernames, validUsernames } = useContext(User);

  const navigate = useNavigate();

  const onRegister = () => {
    setValidUsernames([...validUsernames, username]);
    alert('Registration successful');
    navigate('/login');
  };


  return (
    <div>
      <h1>Register Page</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobile}
        onChange={(e) => setMobile(e.target.value)}
      />
      <button onClick={onRegister}>Register</button>
    </div>
  )
};

export default Registration;