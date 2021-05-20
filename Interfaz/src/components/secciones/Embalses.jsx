import React from 'react';
// ui
import { Grid, Card, CardContent  } from '@material-ui/core'; 
// components 
import ButtonReact from '../ButtonReact';
// funciones hidomet
import { embalseUnreal } from '../../unrealComunications/hidromet';

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
 
// CArds de cada embalse

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
  const enviarEmbalse = () => {
    embalseUnreal( embalse )
  }

  return(
    <Grid item xs = {6} md ={ 3} >
      <Card>
        <CardContent >
          <h3>{ descripEmbalse }</h3>
          <p>Maximo : { nivelMaximoEmbalse }</p>
          <p>Actual : { nivelActualEmbalse }</p>
          <p>Mnimo : { nivelMinimoEmbalse }</p>
      </CardContent>
       <ButtonReact
              unrealFunc = { () => enviarEmbalse }
              textButton = { `Enviar info Embalse` }
          />
      </Card>
    </Grid>
  );
}

export default Embalses;