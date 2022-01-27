import React from "react";

class HepatitisBVaccines extends React.Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    render(){
        const hepB = this.props.hepB
        let fullDate = hepB.date.split("-")
        let year = fullDate[0]
        let month = fullDate[1]
        let day = fullDate[2]
        let date = `${day}-${month}-${year}`
        return(
            <div>
                <p>
                    Clinic: {hepB.place_given}<br/>
                    Date given: {date}<br/>
                    Dose: {hepB.dose}<br/>
                    Batch number: {hepB.batch_no}<br/>
                    Given by: {hepB.given_by}
                </p>
            </div>
        )
    }
}

export default HepatitisBVaccines