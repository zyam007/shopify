import React from 'react';
import './App.css';
import Header from './Header';
import Nominations from './Nominations';
import Results from './Results';
import Search from './Search';

function App() {
  return (
    <div className="app">
      <Header />
      <Search />
      <div className="app__body">
        <Results />
        <Nominations />
      </div>
    </div>
  );
}

export default App;
