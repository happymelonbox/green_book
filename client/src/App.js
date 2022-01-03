import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import Navbar from './containers/Navbar'
import Footer from './containers/Footer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }

  loginStatus = () => {
    axios.get('http://localhost:3001/logged_in', {
      withCredentials: true,
    })
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response.data)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    axios.delete('http://localhost:3001/logout', {withCredentials: true})
    .then(response => {
      this.setState({
        isLoggedIn: false,
        user: {}
      })
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        <BrowserRouter>
        {this.state.isLoggedIn ? <Navbar loggedInStatus={this.state.isLoggedIn} handleClick = {this.handleLogout} user={this.state.user}/> : null }
          <Switch>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} handleLogout={this.handleLogout} loggedInStatus={this.state.isLoggedIn} handleLogin = {this.handleLogin} user={this.state.user}/>
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
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;