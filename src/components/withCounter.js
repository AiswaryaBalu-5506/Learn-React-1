import React, { Component } from 'react'

const UpdatedComponent = (OriginalComponent) => {
    class NewComponent extends Component {
        render() {
            return <OriginalComponent />    //New Component is just the original component      
        }        
    }
    return NewComponent  //the NewComponent is returned
}


export default UpdatedComponent


