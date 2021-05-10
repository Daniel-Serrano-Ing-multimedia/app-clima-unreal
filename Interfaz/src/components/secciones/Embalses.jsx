import React, { useState, useEffect } from 'react';
// ui
import { Grid, Card, CardContent  } from '@material-ui/core'; 
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
        <Grid container justify = 'center' xs = { 12 } spacing={4}>
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
  const { 
    descripEmbalse,
    fechaUltimaLecturaEmbalse,
    horaUltimaLecturaEmbalse,
    nivelActualEmbalse,
    nivelMaximoEmbalse,
    nivelMinimoEmbalse
   } = embalse ;
  const imprimir = () => {
    console.log ( 'button' )
  }
  return(
    <Grid item xs = {2} md ={ 3} >
      <Card>
        <CardContent >
          <h3>{ descripEmbalse }</h3>
          <p>Maximo : { nivelMaximoEmbalse }</p>
          <p>Actual : { nivelActualEmbalse }</p>
          <p>Mnimo : { nivelMinimoEmbalse }</p>
      </CardContent>
       <ButtonReact
              unrealFunc = { imprimir }
              textButton = { `Enviar info Embalse` }
          />
      </Card>
    </Grid>
  );
}

export default Embalses;