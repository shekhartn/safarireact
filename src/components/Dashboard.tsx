import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { User } from '../UserContaxt';

const Dashboard = () => {
    const navigate = useNavigate();
       const { user } = useContext(User);
    
    const handleProfileClick = () => {
        navigate('/profile');
      };
    return (
        
        <div>
            {user && <h1>Welcome {user}</h1>}
            <button type='button' onClick={() => navigate('/login')}>Logout</button>
            <button onClick={handleProfileClick}>Profile</button>            {/* ...existing code... */}
        </div>
    );
};

export default Dashboard;