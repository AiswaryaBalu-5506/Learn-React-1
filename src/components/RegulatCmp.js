import React, { Component } from 'react'

class RegulatCmp extends Component {
    render() {
        console.log('Reg cmp')
        return (
            <div>
                REGULAR {this.props.name}
            </div>
        )
    }
}

export default RegulatCmp
