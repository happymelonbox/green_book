import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Immunisations from './immunisations/Immunisations'
import MCHSVisits from './visits/MCHSVisits'
import VitaminK from './vitamink/VitaminK'
import HepatitisBVaccines from './hepatitisbvaccines/HepatitisBVaccines'
import {VitaminKForm} from './vitamink/VitaminKForm'
import {HepatitisBForm} from './hepatitisbvaccines/HepatitisBForm'
import {ImmunisationForm} from './immunisations/ImmunisationForm'
import {VisitForm} from './visits/VisitForm'

class GrowthAndHealthRecords extends React.Component{
    constructor(props){
        super(props)
        this.state={
            children: [],
            errors: [],
            vitamink : {
                place_given: "",
                date: "",
                dose: "",
                route: "",
                given_by: "",
                child_id: 0
            },
            imm:{
                age: "",
                vaccination_name: "",
                protects_against: "",
                batch_number: "",
                date_given: "",
                nurse_name: "",
                clinic: "",
                date_of_next_dose: ""
            },
            hepB:{
                place_given: "",
                date: "",
                dose: "",
                batch_no: "",
                given_by: ""
            },
            visit: {
                visit_age: "",
                date: "",
                name_of_nurse: "",
                weight: "",
                head_circumference: "",
                length: ""
            }
        }
    }

    componentDidMount(){
        this.getChildren()
    }

    getChildren = () => {
        axios.get('http://localhost:3001/api/v1/children', {
          withCredentials: true,
      })
        .then(response => {
          this.handleChildren(response.data)
        })
    }

    handleChildren = (data) => {
        this.setState({
          children: data
        })
    }

    handleClick = (event) => {
        const target = event.target.className.split(" ")[0]
        const element = document.getElementById(target)
        element.hasAttribute("class", "hidden")
        ?
        element.removeAttribute("class", "hidden")
        :
        element.setAttribute("class", "hidden")
    }

    handleVitaminKSubmit = (event) => {
        event.preventDefault()
        const {
            place_given,
            date,
            dose,
            route,
            given_by
        } = this.state.vitamink

        let vitamin_k = {
            place_given: place_given,
            date: date,
            dose: dose,
            route: route,
            given_by: given_by,
            child_id: event.target.child_id.value
        }
        axios.post('http://localhost:3001/api/v1/vitamin_ks', {vitamin_k}, {withCredentials: true})
        .then(response => {
            console.log(response)
            this.redirect()
        })
    }
    handleImmunisationSubmit = (event) => {
        event.preventDefault()
        const {
            age,
            vaccination_name,
            protects_against,
            batch_number,
            date_given,
            nurse_name,
            clinic,
            date_of_next_dose
        } = this.state.imm

        let immunisation = {
            age: age,
            vaccination_name: vaccination_name,
            protects_against: protects_against,
            batch_number: batch_number,
            date_given: date_given,
            nurse_name: nurse_name,
            clinic: clinic,
            date_of_next_dose: date_of_next_dose,
            child_id: event.target.child_id.value
        }
        axios.post('http://localhost:3001/api/v1/immunisations', {immunisation}, {withCredentials: true})
        .then(response => {
            console.log(response)
            this.redirect()
        })
    }
    handleVisitSubmit = (event) => {
        event.preventDefault()
        const {
            visit_age,
            date,
            name_of_nurse,
            weight,
            head_circumference,
            length,
        } = this.state.visit

        let visit = {
            visit_age: visit_age,
            date: date,
            name_of_nurse: name_of_nurse,
            weight: weight,
            head_circumference: head_circumference,
            length: length,
            child_id: event.target.child_id.value
        }
        axios.post('http://localhost:3001/api/v1/visits', {visit}, {withCredentials: true})
        .then(response => {
            console.log(response)
            this.redirect()
        })
    }
    handleHepBSubmit = (event) => {
        event.preventDefault()
        const {
            place_given,
                date,
                dose,
                route,
                given_by
        } = this.state.hepB

        let hepatitis_b_vaccine = {
            place_given: place_given,
            date: date,
            dose: dose,
            route: route,
            given_by: given_by,
            child_id: event.target.child_id.value
        }
        axios.post('http://localhost:3001/api/v1/hepatitis_b_vaccines', {hepatitis_b_vaccine}, {withCredentials: true})
        .then(response => {
            console.log(response)
            this.redirect()
        })
    }
    redirect = () => {
        window.location.replace('http://localhost:4000/records')
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
        value === "Other" ? input.classList.remove("hidden") : this.handleChange(event)
    }

    handlePreClick = (event) => {
        event.target.innerHTML = event.target.innerHTML === "Add new" ? "Close" : "Add new"
        this.handleClick(event)
    }

    render(){
        return(
            <div>
                <Link to='/'>Back to Dashboard</Link><br/>
                {this.state.children.map(child =>{
                    const immunisations = child.immunisations
                    const visits = child.visits
                    const vitaminK = child.vitamin_ks
                    const hepB = child.hepatitis_b_vaccine
                    let last_visit_age, last_visit_date
                    last_visit_age = visits.length > 0 ? `${visits[visits.length - 1].visit_age} visit -` : "No visits yet"
                    last_visit_date = visits.length > 0 ? visits[visits.length - 1].date : ""
                    const year =  visits.length > 0 ? last_visit_date.split("-")[0] : ""
                    const month = visits.length > 0 ? last_visit_date.split("-")[1] : ""
                    const day = visits.length > 0 ? last_visit_date.split("-")[2] : ""
                    last_visit_date = visits.length > 0 ? `${day}-${month}-${year}` : ""
                    const imms = immunisations.length > 0 ? immunisations.length : "No immunisations yet"
                    return(
                        <div key={child.id}>
                            <h4 >{child.first_name} {child.last_name}</h4>
                            <div>
                                <h4 className={`${child.id}Visits pointer`} onClick={this.handleClick}>MCHS Visits(Last visit: {last_visit_age} {last_visit_date})</h4>
                                <div id={`${child.id}Visits`} className="hidden">
                                    {visits.map(visit=>{
                                        return(
                                            <div key={visit.id}> < MCHSVisits child={child} visit={visit} handleClick={this.handleClick} handleSelectChange={this.handleSelectChange}/></div>
                                        )
                                    })}
                                    <button className={`${child.id}VisitAddNew pointer`} onClick={this.handlePreClick}>Add new</button><br/>
                                    <div id={`${child.id}VisitAddNew`} className = "hidden">
                                        < VisitForm child_id={child.id} handleVisitSubmit = {this.handleVisitSubmit} handleChange={this.handleChange} handleSelectChange={this.handleSelectChange} button="Add"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className={`${child.id}VitaminK pointer`} onClick={this.handleClick}>VitaminK Immunisations({vitaminK.length})</h4>
                                <div id={`${child.id}VitaminK`} className="hidden">
                                    {vitaminK.map(vitK=>{
                                        return(
                                            <div key={vitK.id}> < VitaminK child={child} vitK={vitK} handleClick={this.handleClick}/></div>
                                        )
                                    })}
                                    <button className={`${child.id}vitaminKAddNew pointer`} onClick={this.handlePreClick}>Add new</button><br/>
                                    <div id={`${child.id}vitaminKAddNew`} className = "hidden">
                                        < VitaminKForm child_id={child.id} handleVitaminKSubmit = {this.handleVitaminKSubmit} handleChange={this.handleChange} handleSelectChange={this.handleSelectChange} button="Add"/>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h4 className={`${child.id}HepB pointer`} onClick={this.handleClick}>Hepatitis B Immunisation(1)</h4>
                                <div id={`${child.id}HepB`} className="hidden">
                                    < HepatitisBVaccines child={child} hepB={hepB} handleClick={this.handleClick}/>
                                    <button className={`${child.id}HepBAddNew pointer`} onClick={this.handlePreClick}>Add new</button><br/>
                                    <div id={`${child.id}HepBAddNew`} className = "hidden">
                                        < HepatitisBForm child_id={child.id} handleHepBSubmit = {this.handleHepBSubmit} handleChange={this.handleChange} handleSelectChange={this.handleSelectChange} button="Add"/>
                                    </div>
                                </div>
                            </div>
                            <div >
                                <h4 className={`${child.id}immunisation_details pointer`} onClick={this.handleClick}>Other Immunisations({imms})</h4>
                                <div id={`${child.id}immunisation_details`} className="hidden">
                                    {immunisations.map(imm => {
                                        return (
                                            <div key={imm.key}>< Immunisations child={child} immunisation={imm} handleClick={this.handleClick}/></div>
                                        )
                                    })}
                                    <button className={`${child.id}ImmunisationAddNew pointer`} onClick={this.handlePreClick}>Add new</button><br/>
                                    <div id={`${child.id}ImmunisationAddNew`} className = "hidden">
                                        < ImmunisationForm child_id={child.id} handleVisitSubmit = {this.handleImmunisationSubmit} handleChange={this.handleChange} handleSelectChange={this.handleSelectChange} button="Add"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default GrowthAndHealthRecords