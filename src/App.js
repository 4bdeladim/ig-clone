import React from 'react'
import './App.css';
import Header from './components/Header'
import Home from './components/Home';
import { BrowserRouter as Router } from 'react-router-dom'
import Messages from './components/pages/messages/messages';

function App() {
  return (
    <div className="App">
      <Router>
        <Messages />
      </Router>
      
    </div>
  );
}

export default App;
