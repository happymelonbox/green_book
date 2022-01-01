import React from 'react';
import Login from './registrations/Login'
import Dashboard from '../containers/Dashboard'



const Home = ({ loggedInStatus, handleLogin }) => {

  return (
    <div>
      {!loggedInStatus ? 
      <Login handleLogin = {handleLogin}/> : 
      <Dashboard />
      }
    </div>
  );
};

export default Home;