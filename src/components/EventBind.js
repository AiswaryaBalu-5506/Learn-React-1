import React, { Component } from 'react'

class EventBind extends Component {

    constructor(){
        super();
        this.state = {
            statevariable: "initial state"
        }

        this.changeStateFunction = this.changeStateFunction.bind(this); 
    }

    changeStateFunction(){
        alert(this.state.statevariable);
        this.setState({
            statevariable:"changed state"
        }, () => {
            alert(this.state.statevariable)
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.changeStateFunction()}> Click to change state </button>
            </div>
        )
    }
}

export default EventBind
