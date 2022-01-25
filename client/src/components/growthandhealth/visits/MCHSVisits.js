import React from "react";
import { Link } from 'react-router-dom'

class MCHSVisits extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const child = this.props.child
        const visits = this.props.child.visits
        let last_visit_age, last_visit_date
        last_visit_age = visits.length > 0 ? `${visits[visits.length - 1].visit_age} visit -` : "No visits yet"
        last_visit_date = visits.length > 0 ? visits[visits.length - 1].date : ""
        const year =  visits.length > 0 ? last_visit_date.split("-")[0] : ""
        const month = visits.length > 0 ? last_visit_date.split("-")[1] : ""
        const day = visits.length > 0 ? last_visit_date.split("-")[2] : ""
        last_visit_date = visits.length > 0 ? `${day}-${month}-${year}` : ""

        return(
            <div>
                <h4 className={`${this.props.child.id}Visits pointer`} onClick={this.props.handleClick}>MCHS Visits(Last visit: {last_visit_age} {last_visit_date})</h4>
                <div id={`${child.id}Visits`} className="hidden">
                    {this.props.child.visits.map(visit => {
                        const date = visit.date.split("-")
                        const year = date[0]
                        const month = date[1]
                        const day = date[2]
                        return(
                            <div key={visit.id}>
                            <h5>{day}-{month}-{year}</h5>
                            <p>
                                {visit.visit_age} Visit<br/>
                                Name of nurse: {visit.name_of_nurse}<br/>
                                Weight: {visit.weight}kg<br/>
                                Length: {visit.length}cm<br/>
                                Head Circumference: {visit.head_circumference}
                            </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default MCHSVisits