import React, { Component } from 'react'
import Child from './ChildRefCmp'

class ParentRefCmp extends Component {

    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef() //STEP 1 -> Create the ref in the PARENT

        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.inputRef.current.focus()      //STEP 5 - Do the actual fcus operation
    }
    
    render() {
        return (
            <div>
                <Child ref={this.inputRef}> </Child> {/* STEP 2 - Forward this ref to the child */}
                <button onClick={this.clickHandler}> Focus Input </button>
            </div>
        )
    }
}

export default ParentRefCmp
