// Logout.js
import React from 'react';
import { auth } from './firebase';

const Logout = () => {
  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('Logout successful');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <div>
      <h2>Logout</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
