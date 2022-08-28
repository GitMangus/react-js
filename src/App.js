import * as React from 'react';
import './App.css';
import ButtonAppBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
      <ButtonAppBar/>
      <ItemListContainer/>
      <ItemCount/>
    </div>
  );
}

export default App;