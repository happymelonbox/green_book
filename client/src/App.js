import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from './components/Home'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import Children from './components/children/Children'
import ChildrenForm  from './components/children/ChildrenForm'
import Appointments from './components/appointments/Appointments'
import GrowthAndHealth from './components/growthAndHealth/GrowthAndHealth'
import Immunisations from './components/immunisations/Immunisations'
import UsefulInformation from './components/usefulInformation/UsefulInformation'
import Visits from './components/visits/Visits'


export const HISTORY = createBrowserHistory()


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {},
      children: []
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
      this.redirect("/")
    })
    .catch(error => console.log(error))
  }

  handleCreateChildren = (data) => {
    this.setState({
      children: [...this.state.children, data.child]
    })
  }

  redirect = (string) => {
    HISTORY.push(string)
  }

  render() {
    return (
      <div>
        <BrowserRouter>
            <Route 
              exact path='/' 
              render={props => (
              <Home {...props} loggedInStatus = {this.state.isLoggedIn} user={this.state.user} handleLogout={this.handleLogout} handleLogin={this.handleLogin}/>
              )}
            />
            <Route 
              exact path='/login' 
              render={props => (
              <Login {...props} />
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} />
              )}
            />
            <Route 
              exact path='/children' 
              render={props => (
              <Children {...props} />
              )}
            />
            <Route 
              exact path='/appointments_to_keep' 
              render={props => (
              <Appointments {...props} />
              )}
            />
            <Route 
              exact path='/growth_and_health' 
              render={props => (
              <GrowthAndHealth {...props} />
              )}
            />
            <Route 
              exact path='/immunisations' 
              render={props => (
              <Immunisations {...props} />
              )}
            />
            <Route 
              exact path='/visits' 
              render={props => (
              <Visits {...props} />
              )}
            />
            <Route 
              exact path='/useful_information' 
              render={props => (
              <UsefulInformation {...props} />
              )}
            />
            <Route
            exact path='/add_a_child'
            render={props => (
              <ChildrenForm {...props} />
            )}
            />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;