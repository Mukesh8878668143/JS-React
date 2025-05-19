import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    //const navigate = useNavigate();

    // const handleLogout = () => {
    //     // Clear user session or token
    //     localStorage.removeItem('authToken');
    //     // Redirect to login page
    //     navigate('/login');
    // };

    return (
        <div>
            <h2>Are you sure you want to logout?</h2>
            <button>Logout</button>
        </div>
    );
};

export default Logout;