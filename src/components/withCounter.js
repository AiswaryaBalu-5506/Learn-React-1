import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent, n) => {
    class NewComponent extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
    
            this.incrementCounter = this.incrementCounter.bind(this)
        }
    
        incrementCounter(){
            this.setState( prevState => ({
                count: prevState.count + n
            }))
        }
        
        render() {
            return <OriginalComponent name="Aiswarya" count={this.state.count} incrementCounter={this.incrementCounter} />    //New Component is just the original component      
        }        
    }
    return NewComponent  //the NewComponent is returned
}


export default UpdatedComponent 


