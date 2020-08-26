import React, { Component } from 'react'

export class HoverCounterForRenderPropsDemo extends Component {

    render() {        
        return (
            <div>
                <h1 onMouseOver={this.props.incrementCounter}> Hovered {this.props.count} times </h1>
            </div>
        )
    }
}

export default HoverCounterForRenderPropsDemo
