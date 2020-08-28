import React, { Component } from 'react'

export class Summary extends Component {

    constructor(props) {
        super(props)
        this.placeOrder = this.placeOrder.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){
        this.props.handleChange(e.target.value)
    }

    placeOrder = (e) => {
        e.preventDefault()
        console.log(this.props.quantity)
        console.log(this.props.product)
        console.log(this.props.address)        
    }
    
    render() {
        return (
            <div>
                <h1> SUMMARY </h1>
                <form onSubmit={this.placeOrder}>
                    <label> Product name: </label>
                    <input type="text" name="product" value={this.props.product} onChange={this.handleChange} />
                    <label> Product quantity: </label>
                    <input type="text" name="quantity" value={this.props.quantity} onChange={this.handleChange} />
                    <label> Address: </label>
                    <input type="text" name="address" value={this.props.address} onChange={this.handleChange} />
                    <button type="submit"> Place order </button>
                </form>
            </div>
        )
    }
}

export default Summary
