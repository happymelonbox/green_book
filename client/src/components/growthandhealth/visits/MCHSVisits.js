import React from "react";


class MCHSVisits extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const visit = this.props.visit
        const date = visit.date.split("-")
        const year = date[0]
        const month = date[1]
        const day = date[2]

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
            </div>
        )
    }
}

export default MCHSVisits