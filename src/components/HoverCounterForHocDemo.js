import React, { Component } from 'react'

export class HoverCounterForHocDemo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }

        this.incrementCounter = this.incrementCounter.bind(this)
    }

    incrementCounter(){
        this.setState( prevState => ({
            count: prevState.count + 1
        }))
    }
    
    render() {
        return (
            <div>
                {this.state.count} <br />
                <h1 onMouseOver={this.incrementCounter}> Hover over this to increment count</h1>
            </div>
        )
    }
}

export default HoverCounterForHocDemo
