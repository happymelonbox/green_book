import React from "react";
import axios from "axios";
import { VisitForm } from "./VisitForm";


class MCHSVisits extends React.Component{
    constructor(props){
        super(props)
        this.state={
            errors:[],
            visit: {
                visit_age: this.props.visit.visit_age,
                date: this.props.visit.date,
                name_of_nurse: this.props.visit.name_of_nurse,
                weight: this.props.visit.weight,
                head_circumference: this.props.visit.head_circumference,
                length: this.props.visit.length,
                child_id: this.props.visit.child_id,
                id: this.props.visit.id
            }
        }
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
        }})
    }

    handleSelectChange = (event) => {
        const name = event.target.name.split("-")
        const value = event.target.value
        const form = name[1]
        const input = document.getElementById(`${form}input`)
        value === "Other" ? input.removeAttribute("class", "hidden") : this.handleChange(event)
    }

    handleVisitEditSubmit = (event) => {
        event.preventDefault()
        const {
            visit_age,
            date,
            name_of_nurse,
            weight,
            head_circumference,
            length,
            child_id,
            id
        } = this.state.visit

        let visit = {
            visit_age: visit_age,
            date: date,
            name_of_nurse: name_of_nurse,
            weight: weight,
            head_circumference: head_circumference,
            length: length,
            child_id: child_id,
        }

        axios.put(`http://localhost:3001/api/v1/visits/${id}`, {visit}, {withCredentials: true})
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

    handleClick = (event) => {
        event.target.innerHTML = event.target.innerHTML === "Edit Visit" ? "Close" : "Edit Visit"
        this.props.handleClick(event)
    }

    handleErrors = () =>{
        return (
            <div>
                <ul>{this.state.errors.map((error) => {
                    console.log({error})
                    return <li key="{error}">{error}</li>
                })}</ul>
            </div>
        )
    }

    render(){
        const visit = this.props.visit
        const date = visit.date.split("-")
        const year = date[0]
        const month = date[1]
        const day = date[2]
        const child = this.props.child

        return(
            <div >
                <h5>{day}-{month}-{year}</h5>
                <p>
                    {visit.visit_age} Visit<br/>
                    Name of nurse: {visit.name_of_nurse}<br/>
                    Weight: {visit.weight}kg<br/>
                    Length: {visit.length}cm<br/>
                    Head Circumference: {visit.head_circumference}
                </p>
                <button className={`${child.id}VisitEdit pointer`} onClick={this.handleClick}>Edit Visit</button><br/>
                <div id={`${child.id}VisitEdit`} className = "hidden">
                    < VisitForm child_id={child.id} handleVisitSubmit = {this.handleVisitEditSubmit} handleChange={this.handleChange} handleSelectChange={this.props.handleSelectChange} button="Edit"/>
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

export default MCHSVisits