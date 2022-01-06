import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
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
import Navbar from './containers/Navbar'
import Footer from './containers/Footer'


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
    })
    .catch(error => console.log(error))
  }

  handleCreateChildren = (data) => {
    console.log(data)
    this.setState({
      children: [...this.state.children, data.child]
    })
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
              <Login {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} user={this.state.user}/>
              )}
            />
            <Route 
              exact path='/signup' 
              render={props => (
              <Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} user={this.state.user}/>
              )}
            />
            <Route 
              exact path='/children' 
              render={props => (
              <Children {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} user={this.state.user}/>
              )}
            />
            <Route 
              exact path='/appointments_to_keep' 
              render={props => (
              <Appointments {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} user={this.state.user}/>
              )}
            />
            <Route 
              exact path='/growth_and_health' 
              render={props => (
              <GrowthAndHealth {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} user={this.state.user}/>
              )}
            />
            <Route 
              exact path='/immunisations' 
              render={props => (
              <Immunisations {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} user={this.state.user}/>
              )}
            />
            <Route 
              exact path='/visits' 
              render={props => (
              <Visits {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} user={this.state.user}/>
              )}
            />
            <Route 
              exact path='/useful_information' 
              render={props => (
              <UsefulInformation {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} user={this.state.user}/>
              )}
            />
            <Route
            exact path='/add_a_child'
            render={props => (
              <ChildrenForm {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} handleCreateChildren = {this.handleCreateChildren} user={this.state.user}/>
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