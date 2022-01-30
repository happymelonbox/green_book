import React from "react";
import axios from "axios";
import { HepatitisBForm } from "./HepatitisBForm";

class HepatitisBVaccines extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            errors: [],
            hepatitis_b_vaccine:{
                place_given: this.props.hepB.place_given,
                date: this.props.hepB.date,
                route: this.props.hepB.route,
                given_by: this.props.hepB.given_by,
                child_id: this.props.hepB.child_id,
                id: this.props.hepB.id
            }
        }
    }
    handleHepBEditSubmit = (event) => {
        event.preventDefault()
        console.log(event.target)
        const {
            place_given,
            date,
            route,
            given_by,
            child_id,
            id
        } = this.state.hepatitis_b_vaccine

        let hepatitis_b_vaccine = {
            place_given: place_given,
            date: date,
            route: route,
            given_by: given_by,
            child_id: child_id,
            id: id
        }

        axios.put(`http://localhost:3001/api/v1/hepatitis_b_vaccines/${id}`, {hepatitis_b_vaccine}, {withCredentials: true})
        .then(response => {
            console.log(response)
            if (response.data.status === 'updated'){
                window.location.replace("http://localhost:4000/records")
            } else {
                this.setState({
                    errors: [...this.state.errors, response.data.errors]
                })
            }
        })
        .catch( error => console.log('api errors: ', error))
    }

    handleChange = (event) => {
        const name = event.target.name.split("-")
        const key = name[1]
        const value = event.target.value
        const form = name[0]
        console.log(form)
        this.setState({
            [form]:{
                ...this.state[form],
            [key]: value,
        }}, ()=>{console.log(this.state)})
    }

    handleClick = (event) => {
        event.target.innerHTML = event.target.innerHTML === "Edit Hepatitis B Immunisation" ? "Close" : "Edit Hepatitis B Immunisation"
        this.props.handleClick(event)
    }

    render(){
        const hepB = this.props.hepB
        let fullDate = hepB.date.split("-")
        let year = fullDate[0]
        let month = fullDate[1]
        let day = fullDate[2]
        let date = `${day}-${month}-${year}`
        let child = this.props.child
        return(
            <div>
                <div>
                    <p>
                        Clinic: {hepB.place_given}<br/>
                        Date given: {date}<br/>
                        Batch number: {hepB.batch_no}<br/>
                        Given by: {hepB.given_by}
                    </p>
                    <button className={`${child.id}HepBEdit pointer`} onClick={this.handleClick}>Edit Hepatitis B Immunisation</button><br/>
                    <div id={`${child.id}HepBEdit`} className = "hidden">
                        < HepatitisBForm hepB={hepB} child_id={child.id} handleHepBEditSubmit = {this.handleHepBEditSubmit} handleChange={this.handleChange} button="Edit"/>
                    </div>
                </div>
                <div>
                    {
                        this.state.errors ? this.handleErrors() : null
                    }
                </div>
            </div>
        )
    }
}

export default HepatitisBVaccines