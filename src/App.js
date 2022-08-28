import * as React from 'react';
import './App.css';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;