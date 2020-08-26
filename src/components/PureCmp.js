import React, { PureComponent } from 'react'

class PureCmp extends PureComponent {
    render() {
        console.log('PURE CMP')
        return (
            <div>
                PURE {this.props.name}
            </div>
        )
    }
}

export default PureCmp
