import React, { useState, useEffect } from 'react';
// ui
import Grid, { GridSpacing } from '@material-ui/core/Grid'; 
// components 
import ButtonReact from '../ButtonReact';


const Embalses = ({ embalses }) => {
 
  console.log( 'Embalses  ', embalses );
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
          { embalses.map( (embalse, id) => 
            <Embalse
              key = { embalse.idEmbalse }
              embalse = { embalse }
            />
          ) }

        </Grid>
    </Grid>
  );
}
 

const Embalse = ({ embalse }) => {
  const { descripEmbalse } = embalse ;
  const imprimir = () => {
    console.log ( 'button' )
  }
  return(
    <Grid item xs = {2} md ={ 3} >
       <ButtonReact
              unrealFunc = { imprimir }
              textButton = { `Enviar Embalse ${ descripEmbalse }` }
          />
    </Grid>
  );
}

export default Embalses;