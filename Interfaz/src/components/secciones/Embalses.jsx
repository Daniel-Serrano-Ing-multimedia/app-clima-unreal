import React from 'react';
// ui
import Grid, { GridSpacing } from '@material-ui/core/Grid'; 
// components 
import ButtonReact from '../ButtonReact';
const Embalses = () => {
  const enviarEmbalase = () => {
    console.log( 'Enviar Embalses' );
  }
  return ( 
    <Grid 
      container 
      item 
      justify = 'center'
    >
      <Grid item xs = { 8 } >
        <h1>Embalses</h1>
      </Grid>
      <Grid container justify = 'center' xs = { 12 } >
        
        <Grid item>
          <h1> FORTUNA</h1>
          <ButtonReact
              unrealFunc = { enviarEmbalase }
              textButton ='Fortuna'
          />
        </Grid>

        <Grid item>
        <h1>BAYANO </h1>
        </Grid>

        <Grid item>
          <h1> CHANGUINOLA I</h1>
        </Grid>

        <Grid item>
          <h1> PRESA MONTE LIRIO</h1>
        </Grid>

        <Grid item>
          <h1> PRESA BAITÚN</h1>
        </Grid>

        <Grid item>
          <h1> PRESA LA POTRA</h1>
        </Grid>

        <Grid item>
          <h1> PRESA BUGABA I</h1>
        </Grid>

        <Grid item>
          <h1> PRESA BARRIGÓN</h1>
        </Grid>

        <Grid item>
          <h1> PRESA MENDRE</h1>
        </Grid>

        <Grid item>
          <h1> PRESA LOS PLANETAS I</h1>
        </Grid>

        <Grid item>
          <h1> PRESA LAS CRUCES</h1>
        </Grid>

        <Grid item>
          <h1> PRESA BARRO BLANCO</h1>
        </Grid>
      </Grid>
    </Grid>
  );
}
 
export default Embalses;