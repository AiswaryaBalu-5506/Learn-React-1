import React, { Fragment } from 'react';
import './App.css';
import ClickCounter from './components/ClickCounterForRenderPropsDemo'
import HoverCounter from './components/HoverCounterForRenderPropsDemo'
import CounterMain from './components/CounterRenderPropsMain'

function App() {

  return (
    <div className="App">
      <CounterMain renderComponent={(count, incrementCounter) => <HoverCounter count={count} incrementCounter={incrementCounter} /> }/>
      <CounterMain renderComponent={(count, incrementCounter) => <ClickCounter count={count} incrementCounter={incrementCounter} /> }/>
    </div>

  );
}

export default App;
