import React, { Component } from 'react'
import PureCmp from './PureCmp'
import RegCmp from './RegulatCmp'

class ParentCmp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Aiswarya'
        }       
    }

    componentDidMount(){
        setInterval( () => {
            this.setState({
                name:'Aiswarya'
            })
        }, 2000)
    }
    
    render() {
        return (
            <div>
                <RegCmp name={this.state.name}> </RegCmp>
                <PureCmp name={this.state.name}> </PureCmp>
            </div>
        )
    }
}

export default ParentCmp
