import React from 'react';
/* import logo from './logo.svg';
import './App.css'; */

/************* USING JSX  *********************/
const Hello = () => {
  return (
    <div>
      <p> HELLO AISH </p>
    </div>
  );
}

/************** NO JSX  *********************
EQUI OF THIS CAN BE DONEin JSX AS   
<div id="hello" className="dummyClass">
    <p> HELLO AISH </p>
</div> 
*/
/* const Hello = () => {
    //return React.createElement('div', null, '<p> HELLO AISH </p>')
    //{id: 'hello', class: 'dummyClass'}
    return React.createElement('div', React.createElement('p', null, 'HELLO AISH'))
    
} */

export default Hello;
