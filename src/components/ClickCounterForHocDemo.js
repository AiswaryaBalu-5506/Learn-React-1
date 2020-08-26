import React, { Component } from 'react'

export class ClickCounterForHocDemo extends Component {

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
                <button onClick={this.incrementCounter}> Click to increase count </button>
            </div>
        )
    }
}

export default ClickCounterForHocDemo
