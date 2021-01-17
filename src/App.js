import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Nominations from './Nominations';
import Results from './Results';
import Search from './Search';

function App() {
  return (
    <div className="app">
      <Header />
      {/* Search */}
      <Search />
      {/* App body */}
      <div className="app__body">
        {/* Result */}
        <Results />
        {/* Nominations */}
        <Nominations />
      </div>

      <Footer />
    </div>
  );
}

export default App;
