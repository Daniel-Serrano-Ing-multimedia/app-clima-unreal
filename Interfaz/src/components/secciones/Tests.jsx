import React, { useState } from 'react';
// ui
import Grid, { GridSpacing } from '@material-ui/core/Grid'; 
import ButtonReact from '../ButtonReact';
// Funciones para Unreal
import  { tomarMartillo, visible } from '../../unrealComunications/martillo';
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
    <Grid item xs={4}>
    <ButtonReact 
        unrealFunc = { () => tomarMartillo }
        textButton = { 'Tomar Martillo' }
      />

    </Grid>
    <Grid item xs={4}>
      <ButtonReact 
        unrealFunc = { () => visible }
        textButton = { 'Hacer Visible' }
      />
    </Grid>
    <Grid item xs={4}>
      <ButtonReact 
        unrealFunc = { () => pronisticoPanama}
        textButton = { 'pronostico Panama' } 
      />
    </Grid>
    <Grid item xs={4}>
      <ButtonReact 
        unrealFunc = { () => pronisticoBocas}
        textButton = { 'pronostico Bocas del Toto' }
      />
    </Grid>
    <Grid item xs = {4}>
      <ButtonReact 
        unrealFunc = { () => textoGenerico }
        textButton = { 'Default Text' }
      />
    </Grid>
    <Grid item xs = {4}>
      <ButtonReact 
        unrealFunc = { () => embalsesFunc }
        textButton = { 'Obtener Embalses' }
      />
    </Grid>
  </Grid>

  );
}
 
export default Tests;