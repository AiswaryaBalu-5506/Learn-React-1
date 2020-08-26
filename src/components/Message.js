import React, {Component} from 'react';
/* import logo from './logo.svg';
import './App.css'; */

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: "Welcome Visior"
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thanks for subscribing'
        })
    }

    render() {
        return (
            <div>
                <p> {this.state.message} </p>
                <button onClick = {() => this.changeMessage()}> Subscribe </button>
            </div>
          );
    }    
}

export default Message;
  



