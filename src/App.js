import React, { Fragment } from 'react';
import './App.css';
import C from './components/ComponentC'
import { UserProvider } from './components/UserContext'


function App() {

  return (
    <div className="App">
      <UserProvider value="Aiswarya">
        <C> </C>
      </UserProvider>
    </div>

  );
}

export default App;
