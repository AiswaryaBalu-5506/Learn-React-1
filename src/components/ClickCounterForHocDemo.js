import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class ClickCounterForHocDemo extends Component {

    
    /* Constructor and the incremenetCounter function has been pushed to the HOC  */
    //n=2
    render() {
        return (
            <div>
                {this.props.count} <br />
        <button onClick={this.props.incrementCounter}> {this.props.name} Click to increase count </button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounterForHocDemo, 2) 
