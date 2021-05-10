import React, { useState, useEffect } from 'react';
// ui 
import Grid, { GridSpacing } from '@material-ui/core/Grid'; 
import Paper from '@material-ui/core/Paper';
// components 
import Tests from './secciones/Tests';
import Pronostico from './secciones/Pronostico';
import Embalses from './secciones/Embalses';
import TablaMareas from './secciones/TablaMareas';
import Condiciones from './secciones/Condiciones';

const Seccion = ({ seccionActual, setSeccionActual, setData, data }) => {

  {
    switch ( seccionActual ) {
      case 'tests':
        return ( <Tests 
          setSeccionActual = { setSeccionActual }
          setData = { setData }
        /> );
      case  'pronostico': 
        return <Pronostico/> ;
      case 'embalses':
        return ( <Embalses
          embalses = { data }
        /> );
      case  'mareas': 
        return <TablaMareas/> ;
      case  'condiciones': 
        return <Condiciones/> ;
      default:
        return null;
    }
  }
   
}
 
export default Seccion;