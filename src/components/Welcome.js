import React, {Component} from 'react';
/* import logo from './logo.svg';
import './App.css'; */

class Welcome extends Component{
    render() {
      const {name, lastName} = this.props
        return (
            <div>
                <p> Welcome {name} {lastName} </p>
            </div>
          );
    }    
}

export default Welcome;
  



