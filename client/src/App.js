import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
        <Button>Click Me</Button>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
