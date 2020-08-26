import React, { Component } from 'react'

export class CounterRenderPropsMain extends Component {

    
    constructor(props) {        
        super(props)
            
        this.state = {
          count: 0
        }
    
        this.incrementCounter = this.incrementCounter.bind(this)
      }
    
      incrementCounter(){
        this.setState(prevState => ({
          count: prevState.count + 1
        }))
      }
    
    render() {
        return (
            <div>
                {this.props.renderComponent( this.state.count, this.incrementCounter)}
            </div>
        )
    }
}

export default CounterRenderPropsMain
 
