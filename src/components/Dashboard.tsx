import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User } from '../UserContaxt';

const Dashboard = () => {
    const navigate = useNavigate();
       const { username } = useContext(User);
    
    const handleProfileClick = () => {
        navigate('/profile');
      };
    return (
        
        <div>
            {username && <h1>Welcome {username}</h1>}
            <button type='button' onClick={() => navigate('/login')}>Logout</button>
            <button onClick={handleProfileClick}>Profile</button>            {/* ...existing code... */}
        </div>
    );
};

export default Dashboard;