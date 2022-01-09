import React from 'react'
import { Link } from 'react-router-dom'
import Child from './Child'


class Children extends React.Component {
    render(){
        console.log(this.props.user.children)
        return(
            <div>
                <div>
                    <h1>Children</h1>
                </div>
                <Link to='/add_a_child'>Add a new child</Link>

            </div>
        )
    }
}

export default Children