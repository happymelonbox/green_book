import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/appointments.css'

class AppointmentsForm extends Component{
    render(){
        return(
            <div>
                <h4>Add a new appointment</h4>
                <form>
                    <label>
                        <input type="text"/>
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AppointmentsForm