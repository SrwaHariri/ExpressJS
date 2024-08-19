import './App.css';
import React from 'react';
import GoogleSearch from './GoogleSearch';
import { queries } from '@testing-library/react';


function App() {
  return (
    <div>

      <header className="App-header">
        <p>
          <GoogleSearch queries={queries}/>
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
