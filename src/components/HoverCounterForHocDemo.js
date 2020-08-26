import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounterForHocDemo extends Component {

    //n = 3
    render() {        
        return (
            <div>
                {this.props.count} <br />
                <h1 onMouseOver={this.props.incrementCounter}> {this.props.name}  Hover over this to increment count</h1>
            </div>
        )
    }
}
//n=3
export default UpdatedComponent(HoverCounterForHocDemo, 3)

