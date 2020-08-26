import React, { Fragment } from 'react';
import './App.css';
import ClickCounter from './components/ClickCounterForHocDemo'
import HoverCounter from './components/HoverCounterForHocDemo'

function App() {
  return (
    <div className="App">
      <ClickCounter> </ClickCounter>
      <HoverCounter> </HoverCounter>
    </div>

  );
}

export default App;
