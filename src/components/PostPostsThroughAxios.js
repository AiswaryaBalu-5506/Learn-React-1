import React, { Component } from 'react'
import axios from 'axios'

export class PostPostsThroughAxios extends Component {

    constructor(props) {
        super(props)    
        this.state = {
             userid: null,
             title: '',
             body: ''
        }
        this.changeHandler = this.changeHandler.bind(this)
        this.submitHandler = this.submitHandler.bind(this)
    }
    
    changeHandler(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submitHandler(e){
        e.preventDefault()
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/posts/', this.state)
        .then( res => {
            console.log(res)
        })
        .catch( err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <label> UserId </label>
                    <input type="text" name="userid" onChange={this.changeHandler} /> 
                    <br />
                    <label> Title </label>
                    <input type="text" name="title" onChange={this.changeHandler} /> 
                    <br />
                    <label> Body </label>
                    <input type="text" name="body" onChange={this.changeHandler} /> 
                    <br />
                    <button type="submit"> Submit </button>
                </form>
            </div>
        )
    }
}

export default PostPostsThroughAxios
