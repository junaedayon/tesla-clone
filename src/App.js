import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Home from './Components/Home';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
  <Home></Home>
    </div>
  );
}

export default App;
