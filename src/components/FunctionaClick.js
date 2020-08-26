import React, {Component} from 'react';
/* import logo from './logo.svg';
import './App.css'; */


    const FunctionaClick = () => {
      //const {name, lastName} = this.props

      function clickHandler() {
        alert("clicked");
    }

        return (
            <div>
                <button onClick = {clickHandler}> Click </button>
            </div>
          );
    }    


export default FunctionaClick;
  

