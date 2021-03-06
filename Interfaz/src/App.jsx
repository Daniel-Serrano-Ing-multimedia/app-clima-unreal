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
  const [ data, setData ] = useState( [] );
  useEffect(() => {
  
  }, [ seccionActual ]);
  return (
    <div className="App">
      <Header
        setSeccion = { setSeccionActual }
        setData = { setData }
      />
        <img src={unreal} className="App-logo" alt="logo" />
        <p>
         Pruebas Remote Control Unreal Engine 4
        </p>
      <Seccion
        seccionActual = { seccionActual }
        setSeccionActual = { setSeccionActual }
        setData = { setData }
        data = { data  }
      />
    </div>
  );
}

export default App;
