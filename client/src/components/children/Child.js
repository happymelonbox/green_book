import React, { Component } from 'react'

class Child extends Component{
    render(){
        // console.log(this.props.child)
    return(
        <div>
            <h4>{this.props.child}</h4>
        </div>
    )
}
}
export default Child