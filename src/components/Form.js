import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            courseSelected: ''
        }

        this.handleCourseSelection = this.handleCourseSelection.bind(this);
        this.getUserName = this.getUserName.bind(this);
        this.getAllFormDataOnSubmit = this.getAllFormDataOnSubmit.bind(this)
    }

    getUserName(e) {
        this.setState({
            username: e.target.value,            
        }, () => {
            console.log(this.state.username)
        })
    }

    handleCourseSelection(event){
        this.setState({
            courseSelected: event.target.value
        }, () => {
            console.log(this.state.courseSelected)
        })
    }

    getAllFormDataOnSubmit(event){
        alert(`Hello learner with username ${this.state.username}. Please feel free to start your course ${this.state.courseSelected} anytime!!! Happy learning`)
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.getAllFormDataOnSubmit}> 
                <label> Username </label>
                <input type="text" onChange={this.getUserName} /> <br /> <br />

                <label>Choose a Course:</label>
                <select name="course" id="course" onChange={this.handleCourseSelection}>
                    <option value=" "> -- </option>
                    <option value="angular">Angular</option>
                    <option value="react">React</option>                    
                </select> <br /> <br />
                <button type="submit"> Submit </button>
                </form>
                
            </div>
        )
    }
}

export default Form
