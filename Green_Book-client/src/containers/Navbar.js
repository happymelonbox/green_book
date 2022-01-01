import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../components/Home'
import Login from '../components/registrations/Login'
import Signup from '../components/registrations/Signup'
import '../style/index.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <BrowserRouter>
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn}/>
              )}
            />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Navbar;