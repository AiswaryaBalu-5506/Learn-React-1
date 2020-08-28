import React, { Component } from 'react'
import ProductInformation from './ProductInformation'
import AddressInformation from './AddressInformation'
import Summary from './Summary'

export class StateiftUpMain extends Component {

    constructor(props) {
        super(props)

        this.state = {
            product: '',
            quantity: '',
            address: ''
        }
        this.handleChangeProduct = this.handleChangeProduct.bind(this)
        this.handleChangeQuantity = this.handleChangeQuantity.bind(this)
        this.handleChangeAddress = this.handleChangeAddress.bind(this)
    }

    handleChangeProduct(val) {
        this.setState({
            product: val
        })
    }

    handleChangeQuantity(val) {
        this.setState({
            quantity: val
        })
    }

    handleChangeAddress(val) {
        this.setState({
            address: val
        })
    }

    render() {
        return (
            <div>
                <ProductInformation product={this.state.product}
                    quantity={this.state.quantity}
                    handleChangeProduct={this.handleChangeProduct}
                    handleChangeQuantity={this.handleChangeQuantity}> </ProductInformation> <br />
                <AddressInformation address={this.state.address}
                    handleChangeAddress={this.handleChangeAddress}> </AddressInformation> <br />
                <Summary product={this.state.product}
                    quantity={this.state.quantity}
                    handleChangeProduct={this.handleChangeProduct}
                    handleChangeQuantity={this.handleChangeQuantity}
                    address={this.state.address}
                    handleChangeAddress={this.handleChangeAddress}> </Summary>
            </div>
        )
    }
}

export default StateiftUpMain
