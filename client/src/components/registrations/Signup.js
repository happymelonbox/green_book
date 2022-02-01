import React, { Component } from 'react';
import {Link } from 'react-router-dom'
import axios from 'axios'

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      first_name: '',
      last_name: '',
      contact_number: '',
      address_unit_number: '',
      address_street_number: '',
      address_street_name: '',
      address_suburb: '',
      address_city: '',
      address_state: '',
      address_country: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: []
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {
      username,
      first_name,
      last_name,
      contact_number,
      address_unit_number,
      address_street_number,
      address_street_name,
      address_suburb,
      address_city,
      address_state,
      address_country,
      email,
      password,
      password_confirmation
    } = this.state

    let user = {
      username: username,
      first_name: first_name,
      last_name: last_name,
      contact_number: contact_number,
      address_unit_number: address_unit_number,
      address_street_number: address_street_number,
      address_street_name: address_street_name,
      address_suburb: address_suburb,
      address_city: address_city,
      address_state: address_state,
      address_country: address_country,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
axios.post('http://localhost:3001/users', {user}, {withCredentials: true})
    .then(response => {
      console.log(response)
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.props.redirect()
      } else {
        this.setState({
          errors: [...this.state.errors, response.data.errors]
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
  
handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul>
      </div>
    )
  }
render() {
  const {
    username,
    first_name,
    last_name,
    contact_number,
    address_unit_number,
    address_street_number,
    address_street_name,
    address_suburb,
    address_state,
    address_city,
    address_country,
    email,
    password,
    password_confirmation
  } = this.state

return (
      <div className='signup_container'>
         <Link id="home" to="/">Home</Link>
        <h1>Sign Up</h1>
      
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <input
            placeholder="first_name"
            type="text"
            name="first_name"
            value={first_name}
            onChange={this.handleChange}
          />
          <input
            placeholder="last_name"
            type="text"
            name="last_name"
            value={last_name}
            onChange={this.handleChange}
          />
          <input
            placeholder="contact_number"
            type="text"
            name="contact_number"
            value={contact_number}
            onChange={this.handleChange}
          />
          <input
            placeholder="address_unit_number"
            type="text"
            name="address_unit_number"
            value={address_unit_number}
            onChange={this.handleChange}
          />
          <input
            placeholder="address_street_number"
            type="text"
            name="address_street_number"
            value={address_street_number}
            onChange={this.handleChange}
          />
          <input
            placeholder="address_street_name"
            type="text"
            name="address_street_name"
            value={address_street_name}
            onChange={this.handleChange}
          />
          <input
            placeholder="address_suburb"
            type="text"
            name="address_suburb"
            value={address_suburb}
            onChange={this.handleChange}
          />
          <input
            placeholder="address_city"
            type="text"
            name="address_city"
            value={address_city}
            onChange={this.handleChange}
          />
          <input
          placeholder = "State"
          type= "text"
          name= "address_state"
          value={address_state}
          onChange={this.handleChange}
          />
          <input
            placeholder="address_country"
            type="text"
            name="address_country"
            value={address_country}
            onChange={this.handleChange}
          />
          <input
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <input
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
          /><br/>

          <button placeholder="submit" type="submit">
            Sign Up
          </button>

        </form>
        <div>
          {
            this.state.errors ? this.handleErrors() : null
          }
        </div>
      </div>
    );
  }
}
export default Signup