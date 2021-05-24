import React, { useState } from 'react';
// ui
import Grid, { GridSpacing } from '@material-ui/core/Grid'; 
import ButtonReact from '../ButtonReact';
// Funciones para Unreal
import  { tomarMartillo, tomarMartilloEvento ,visible } from '../../unrealComunications/martillo';
import { pronostico, defaultText } from '../../unrealComunications/hidromet';
// funciones hidomet
import { obtenerEmbalses } from '../../surces/hidromet';

const Tests = ({ setSeccionActual, setData }) => {
 
  function pronisticoBocas ( ) {
    console.log('Boton')
    pronostico('Bocas del Toro') ;
  }
  function pronisticoPanama ( ) {
    console.log('Panamá')
    pronostico('Panamá') ;
  }
  function textoGenerico ( ) {
    console.log('Texto Prueba')
    defaultText('Texto Prueba') ;
  }

  async function embalsesFunc() {
    setData( await obtenerEmbalses()  );
    setSeccionActual( 'embalses' )
  }
  
  return ( 
  <Grid container item >
    <Grid item xs={ 6 } md = { 4 }>
    <ButtonReact 
        unrealFunc = { () => tomarMartillo }
        textButton = { 'Martillo (Funcion)' }
      />

    </Grid>
    <Grid item xs={ 6 } md = { 4 }>
    <ButtonReact 
        unrealFunc = { () => tomarMartilloEvento }
        textButton = { 'Martillo (Evento)' }
      />

    </Grid>
    <Grid item xs={ 6 } md = { 4 }>
      <ButtonReact 
        unrealFunc = { () => visible }
        textButton = { 'Hacer Visible' }
      />
    </Grid>
    <Grid item xs={ 6 } md = { 4 }>
      <ButtonReact 
        unrealFunc = { () => pronisticoPanama}
        textButton = { 'pronostico Panama' } 
      />
    </Grid>
    <Grid item xs={ 6 } md = { 4 }>
      <ButtonReact 
        unrealFunc = { () => pronisticoBocas}
        textButton = { 'pronostico Bocas' }
      />
    </Grid>
    <Grid item xs = { 6 } md = { 4 }>
      <ButtonReact 
        unrealFunc = { () => textoGenerico }
        textButton = { 'Default Text' }
      />
    </Grid>
  </Grid>

  );
}
 
export default Tests;