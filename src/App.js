import React from 'react';
import './App.css';
import MemoryCard from './components/MemoryCard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span>Memory Game</span>
        <span className="subtitle">Match cards to win</span>
      </header>
      <div className="row1">
      <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
      </div>
      <div className="row2">
      <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
      </div>
      <div className="row3">
      <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
      </div>
      <div className="row4">
      <MemoryCard /><MemoryCard /><MemoryCard /><MemoryCard />
      </div>
    </div>
  );
}

export default App;
