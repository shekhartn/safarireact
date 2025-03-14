import React, { useContext } from 'react'
import { User, UserType } from '../UserContaxt';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();
   const { user } = useContext(User);
  return (
    <div>
{Object.entries(user as UserType).map(([key, value]) => (
      <p key={key}>{key}: {value}</p>
    ))}

<button type='button' onClick={() => navigate('/dashboard')}>Dashboard</button>
<button type='button' onClick={() => navigate('/login')}>Login</button>
    </div>
  )
}

export default Profile
