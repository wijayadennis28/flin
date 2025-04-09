// src/App.js
import React from 'react';
import ChatWidget from './components/ChatWidget';
import './App.css'; // Import styling

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to FLIN's Website</h1>
        <p>This is a placeholder page content.</p>
        {/* Other website content goes here */}
      </header>

      {/* Embed the Chat Widget */}
      <ChatWidget />

    </div>
  );
}

export default App;