import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
            .then(response => {                
                this.setState({
                    posts: response.data,
                    errorMsg: ''
                })
            })
            .catch(err => {
                this.setState({
                    posts: [],
                    errorMsg: err
                })
            })
    }

    render() {
        const { posts, errorMessage } = this.state        
        return (
            <div>
                <h1> List of posts </h1>: <br />
                {
                    posts.length?
                    posts.map(post => <div key={post.id}>
                        <h4> {post.title}</h4>
                        <p> {post.body} </p>
                    </div>)
                    :<p> ERROR: {errorMessage} </p>
                } 
            </div>
        )
    }
}

export default PostList
