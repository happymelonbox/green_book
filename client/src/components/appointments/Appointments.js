import axios from 'axios'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../style/appointments.css'

class Appointments extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    getAppointments = () => {
        axios.get('/appointments')
    }
    render(){
        return(
            <div>
                <h4>Important Appointments</h4>
                <Link to='/add_an_appointment'>Add a new appointment</Link>
            </div>
        )
    }
}

export default Appointments