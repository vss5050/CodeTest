// src/App.js

import React from 'react';
import './App.css';

import Header  from './components/header/Header';
import CodeEditor from './components/codeeditor/CodeEditor';

function App() {
  return (
    <div className="App">
      <Header />
      <CodeEditor />
    </div>
  );
}

export default App;
