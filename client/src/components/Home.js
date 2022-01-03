import React from 'react';
import Login from './registrations/Login'
import Dashboard from './dashboard/Dashboard'



const Home = ({ loggedInStatus, handleLogin, user }) => {

  return (
    <div>
      {!loggedInStatus ? 
      <Login handleLogin = {handleLogin}/> : 
      <Dashboard user = {user}/>
      }
    </div>
  );
};

export default Home;