import React, { useEffect } from 'react';
// ui
import { Grid, Card, CardContent  } from '@material-ui/core'; 
// components 
import ButtonReact from '../ButtonReact';


const  News = ({ listNews }) => {
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
      <h1>BBC News rss</h1>
    </Grid>
    <Grid container item justify = 'center' xs = { 12 } spacing={4}>
    { listNews?.map( (noticia , id) => 
            <New
              key = { `id_${ id } `}
              noticia = { noticia }
            />
          ) }
    </Grid>
  </Grid>
  );
}
 
export default  News;


const New = ({ noticia }) =>{
  const { 
    link,
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
          <a>{ link }</a>
          <p>{ pubDate }</p>
          <ButtonReact
              unrealFunc = { () => imprimir }
              textButton = { `Enviar info BBC` }
          />
      </CardContent>
       
      </Card>
    </Grid>
  );
}