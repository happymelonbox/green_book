import React from 'react';
import Login from './registrations/Login'
import Dashboard from './dashboard/Dashboard'



class Home extends React.Component{
  render(){
    return (
      <div>
        {this.props.loggedInStatus ? 
        <Dashboard user={this.props.user} handleLogout={this.props.handleLogout}/>
        :
        <Login handleLogin={this.props.handleLogin}/>
  }
      </div>
    )
  }
}

export default Home;