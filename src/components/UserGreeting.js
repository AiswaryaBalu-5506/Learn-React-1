import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)    
        this.state = {
             isLoggedIn: false
        }

        this.logIn = this.logIn.bind(this)
    }
    
    logIn(){
        this.setState({
            isLoggedIn: true
        })
    }

    

    render() {

       let message = <div>
                      <button onClick = {this.logIn}> LogIn </button>                
                      <p> Welcome Guest</p>                    
                    </div> 

        return(
            this.state.isLoggedIn ? 
            <div> Welcome Aiswarya </div> : 
            message
                 
        )


    }   
}

export default UserGreeting;
