import React, { Component } from 'react'

export class Counter extends Component {

    constructor() {
        super()
        this.state = {
            count: 0
        }
    }

    incrementCounter() {
        //alert("Button clicked")
        this.setState( prevState => ({
            count: prevState.count + 1
        }))
    }

    incrementFive(){
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
        this.incrementCounter()
    }

    render() {
        return (
            <div>
                <p> Count: {this.state.count} </p>
                <button onClick={() => { this.incrementFive() }}> Increment </button>
            </div>
            )
        }
    }

    export default Counter
