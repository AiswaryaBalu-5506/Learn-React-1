import React, { Component } from 'react'

class AddressInformation extends Component {

    constructor(props) {
        super(props)
        this.getAddress = this.getAddress.bind(this)
    }

    getAddress(event){
        this.props.handleChangeAddress(event.target.value)
    }
    
    render() {
        return (
            <div>
                <h1> ADDRESS INFORMATION </h1>
                <form>
                    <label> Address: </label>
                    <textarea value={this.props.address} onChange={this.getAddress} /> 
                </form>
            </div>
        )
    }
}

export default AddressInformation
