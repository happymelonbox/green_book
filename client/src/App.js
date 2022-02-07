import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Home from './components/Home'
import Login from './components/registrations/Login'
import Signup from './components/registrations/Signup'
import Children from './components/children/Children'
import Child from './components/children/Child'
import ChildrenForm  from './components/children/ChildrenForm'
import BirthRecord from './components/births/BirthRecord'
import BirthsForm from './components/births/BirthsForm'
import HospitalForm from './components/hospitals/HospitalForm'
import MotherForm from './components/parents/mother/MotherForm'
import FatherForm from './components/parents/father/FatherForm'
import Appointments from './components/appointments/Appointments'
import AppointmentsForm from './components/appointments/AppointmentsForm'
import GrowthAndHealthRecords from './components/growthandhealth/GrowthAndHealthRecords'
import UsefulInformation from './components/usefulInformation/UsefulInformation'

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
    this.redirect("/")
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
    console.log(data)
    this.setState({
      children: [...this.state.children, data]
    })
  }

  redirect = (string) => {
    HISTORY.push(string)
  }

  render() {
    return (
      <div className="app_container">
        <div className="large_screen_main">
          <h1 className="large_screen_h1">This application has been optimised for devices with smaller screens such as smartphones.</h1>
        </div>
        <div className="app_main">
          <Router>
            <Routes>
              <Route
                exact path='/'
                element={
                <Home loggedInStatus = {this.state.isLoggedIn} user={this.state.user} handleLogout={this.handleLogout} handleLogin={this.handleLogin}/>
                }
              />
                  <Route
                    exact path='/login'
                    element={
                    <Login />
                  }
                  />
                  <Route
                    exact path='/signup'
                    element={
                    <Signup handleLogin={this.handleLogin}/>
                    }
                  />
              <Route
                exact path='/children'
                element={
                <Children user={this.state.user} children={this.state.children}/>
              }
              />
                  <Route
                  exact path='/add_a_child'
                  element={
                    <ChildrenForm user={this.state.user} handleCreateChildren={this.handleCreateChildren} />
                  }
                  />
                  <Route
                  exact path='/child'
                  element={
                    <Child user={this.state.user} child={this.props.child}/>
                  }
                  />
                  <Route
                    exact path='/birth_record'
                    element={
                    <BirthRecord/>
                    }
                  />
                  <Route
                    exact path='/add_a_birth_record'
                    element={
                    <BirthsForm/>
                    }
                  />
                  <Route
                    exact path ='/add_a_hospital'
                    element={
                      <HospitalForm />
                    }
                  />
                  <Route
                    exact path ='/add_a_mother'
                    element={
                      <MotherForm />
                    }
                  />
                  <Route
                    exact path ='/add_a_father'
                    element={
                      <FatherForm />
                    }
                  />
              <Route
                exact path='/appointments_to_keep'
                element={
                <Appointments />
                }
              />
                  <Route
                    exact path='/add_an_appointment'
                    element={
                    <AppointmentsForm />
                    }
                  />
              <Route
                exact path='/records'
                element={
                <GrowthAndHealthRecords />
                }
              />
              <Route
                exact path='/useful_information/*'
                element={
                <UsefulInformation />
                }/>
            </Routes>
          </Router>
        </div>
      </div>
    );
  }
}
export default App;