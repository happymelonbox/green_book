import axios from 'axios'
import React, { Component } from 'react'


class BirthsForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            hospitalSelectOptions : []
        }
    }
    componentDidMount(){
        this.getHospitalOptions()
    }

    getHospitalOptions = () => {
        axios.get('http://localhost:3001/api/v1/hospitals', {
            withCredentials: true,})
        .then(response => {
            console.log(response)
            const options = response.data.map(data => ({
                "value": data.id,
                "label": data.name
            }))
            this.setState({
                hospitalSelectOptions: options
            })
        })
    }
    render(){
        return(
            <div>
                <h4>Add Birth Details</h4>
                <input type="number" name="birth_day" placeholder="Birth day"/>
                <input type="number" name="birth_month" placeholder="Birth month"/>
                <input type="number" name="birth_year" placeholder="Birth year"/>
                <br/>
                <select>
                    <option>Home Birth?</option>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <br/>
                
            </div>
        )
    }
}

export default BirthsForm