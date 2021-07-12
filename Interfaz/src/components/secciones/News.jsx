import React, { useEffect } from 'react';
// ui
import { Grid, Card, CardContent } from '@material-ui/core'; 
// components 
import ButtonReact from '../ButtonReact';
// funciones bbc
import { newBBC, newsBBC, newsBBC_v2 } from '../../unrealComunications/bbc';

const  News = ({ listNews }) => {
useEffect(() => {
  console.log( 'list ', listNews )
}, [ listNews ]);
  
  const enviarNoticias = () => {
    //newsBBC( listNews );
    newsBBC_v2( listNews );
  } 
  return ( 
    <Grid 
    container 
    item 
    justify = 'center'
  >
    <Grid item xs = { 8 } >
      <h1>BBC News rss</h1>
      <ButtonReact
        unrealFunc = { () => enviarNoticias }
        textButton = { `Enviar Noticias` }
      />
    </Grid>
    <Grid container item justify = 'center' xs = { 12 } spacing={4}>
    { listNews?.map( (noticia , id) => 
            <New
              key = { `id_${ id } `}
              noticia = { noticia }
              newBBC = { newBBC }
            />
          ) }
    </Grid>
  </Grid>
  );
}
 
export default  News;


const New = ({ noticia , newBBC}) =>{
  const { 
    link,
    title,
    pubDate
   } = noticia ;
  const enviarNoticia = () => {
    newBBC( noticia );
  }


  return(
    <Grid item xs = {6} md ={ 3} >
      <Card>
        <CardContent >
          <h5>{ title }</h5>
          <a>{ link }</a>
          <p>{ pubDate }</p>
          <ButtonReact
              unrealFunc = { () => enviarNoticia }
              textButton = { `Enviar info BBC` }
          />
      </CardContent>
       
      </Card>
    </Grid>
  );
}