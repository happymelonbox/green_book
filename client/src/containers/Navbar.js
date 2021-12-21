import React from 'react'
import { NavLink } from 'react-router-dom';
import '../style/App.css'

class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar-container">
        <h2 className="navbar-title">Green_Book</h2>
        <NavLink className="navbar-link"
          to="/stock"
        >Stock</NavLink>
        <NavLink className="navbar-link"
          to="/suppliers"
        >Suppliers</NavLink>
        <NavLink className="navbar-link"
          to="/recipeHome"
        >Recipes</NavLink>
        <NavLink className="navbar-link"
          to="/"
        >Home</NavLink>
      </div>
    )
  }
}

export default Navbar;