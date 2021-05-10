//import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
// ui 
import Grid, { GridSpacing } from '@material-ui/core/Grid'; 
import Paper from '@material-ui/core/Paper';
// unreal
import unreal from './assets/img/unreal.svg'
// components 
import Header from './components/layaout/Header';
import Seccion from './components/Seccion';
// styles
import './App.css';

function App() {
  const [ seccionActual, setSeccionActual ] = useState( 'tests' );
  useEffect(() => {
  
  }, [ seccionActual ]);
  return (
    <div className="App">
      <Header
        setSeccion = { setSeccionActual }
      />
        <img src={unreal} className="App-logo" alt="logo" />
        <p>
         Pruebas Remote Control Unreal Engine 4
        </p>
      <Seccion
        seccionActual = { seccionActual }
      />
    </div>
  );
}

export default App;
