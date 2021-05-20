import React, { useEffect } from 'react';
// ui
import { Grid, Card, CardContent  } from '@material-ui/core'; 
// components 
import ButtonReact from '../ButtonReact';


const  XmlSource = ({ listNews }) => {
useEffect(() => {
  console.log( 'list ', listNews )
}, [ listNews ])

  return ( 
    <Grid 
    container 
    item 
    justify = 'center'
  >
    <Grid item xs = { 8 } >
      <h1>Xml Local</h1>
    </Grid>
    <Grid container item justify = 'center' xs = { 12 } spacing={4}>
    { listNews?.map( (noticia , id) => 
            <New
              key = { id }
              noticia = { noticia }
            />
          ) }
    </Grid>
  </Grid>
  );
}
 
export default  XmlSource;


const New = ({ noticia }) =>{
  const { 
    title,
    description,
    pubDate
   } = noticia ;
  const imprimir = () => {
    console.log ( 'button' )
  }


  return(
    <Grid item xs = {6} md ={ 3} >
      <Card>
        <CardContent >
          <h5>{ title }</h5>
          <p>{ description }</p>
          <p>{ pubDate }</p>
      </CardContent>
       
      </Card>
    </Grid>
  );
}