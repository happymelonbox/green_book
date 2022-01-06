import React from 'react'
import { Link } from 'react-router-dom'
import Child from './Child'


class Children extends React.Component {
    render(){
        return(
            <div>
                {this.props.user.children ?
                    <div>
                        <h1>Children</h1>
                        {this.props.user.children.map(child =>
                            <Child child={child}>{child.name}</Child>)}
                    </div>
                :
                    <Link to='/add_a_child'>Add a new child</Link>
                }
            </div>
        )
    }
}

export default Children