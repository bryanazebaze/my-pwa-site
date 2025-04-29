// src/App.js
import React from 'react';
import './App.css';
import Home from './pages/Home';  // Importation de notre nouvelle page Home

function App() {
  return (
    <div className="App">
      <Home />  {/* Affichage de la page Home */}
    </div>
  );
}

export default App;
