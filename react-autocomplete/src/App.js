import React from 'react';
import AutoCompleteText from './AutoCompleteText';
import './App.css';
import groceries from './groceries';

function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <div className="App-Component"> <AutoCompleteText items={groceries}/> </div>
      </div>
    </div>
  );
}

export default App;
