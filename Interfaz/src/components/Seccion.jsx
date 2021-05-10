import React from 'react';
// ui 
import Grid, { GridSpacing } from '@material-ui/core/Grid'; 
import Paper from '@material-ui/core/Paper';
// components 
import Tests from './secciones/Tests';
import Pronostico from './secciones/Pronostico';
import Embalses from './secciones/Embalses';
import TablaMareas from './secciones/TablaMareas';
import Condiciones from './secciones/Condiciones';


const Seccion = ({ seccionActual }) => {

  {
    switch ( seccionActual ) {
      case 'tests':
        return ( <Tests/> );
      case  'pronostico': 
        return <Pronostico/> ;
      case 'embalses':
        return ( <Embalses/> );
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