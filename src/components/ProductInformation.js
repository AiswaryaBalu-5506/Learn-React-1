import React, { Component } from 'react'

class ProductInformation extends Component {

    constructor(props) {
        super(props)        
        this.onChangeProduct = this.onChangeProduct.bind(this)
        this.onChangeQuantity = this.onChangeQuantity.bind(this)
    }

    onChangeProduct(event){
        this.props.handleChangeProduct(event.target.value)
    }

    onChangeQuantity(e){
        this.props.handleChangeQuantity(e.target.value)
    }
    
    render() {
        return (
            <div>
                <h1> PRODUCT INFORMATION </h1>
                <form>
                    <label> Product name: </label>
                    <select name="product" id="product" onChange={this.onChangeProduct} value={this.props.product}>
                        <option value=""> -- </option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>

                    <label> Quantity </label>
                    <input type="text" name="quantity" onChange={this.onChangeQuantity} value={this.props.quantity} />
                </form>
            </div>
        )
    }
}

export default ProductInformation
