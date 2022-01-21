import './App.css';
import React from 'react';
import { CardBlock, Header } from './components';
import Routers from './Routes';
import { Context } from './context';


const App = () => {
  return (
    <div className="App">
      <Header/>
      <div className="App-content">
         <Routers/>
      </div>
    </div>
  );
}

export default App;
