import React from 'react';
/* import logo from './logo.svg';
import './App.css'; */

const Greet = props => {
   const {name, lastName} = props;
  return (
    <div>
      <p> HEY {name} {lastName} </p>
      {/* {props.children} */}
    </div>
  );
}

export default Greet;
